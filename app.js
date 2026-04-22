(function () {
  const dimensions = window.CBTI_DIMENSIONS || [];
  const questions = window.CBTI_QUESTIONS || [];
  const types = (window.CBTI_TYPES || []).slice().sort((a, b) => (b.priority || 0) - (a.priority || 0));

  const screens = {
    intro: document.getElementById("intro-screen"),
    quiz: document.getElementById("quiz-screen"),
    result: document.getElementById("result-screen")
  };

  const startTestBtn = document.getElementById("start-test-btn");
  const restartBtn = document.getElementById("restart-btn");
  const backHomeBtn = document.getElementById("back-home-btn");
  const dimensionsPreview = document.getElementById("dimensions-preview");
  const typesGrid = document.getElementById("types-grid");
  const typesSubtitle = document.getElementById("types-subtitle");

  const progressText = document.getElementById("progress-text");
  const progressPercent = document.getElementById("progress-percent");
  const progressBarFill = document.getElementById("progress-bar-fill");
  const questionTitle = document.getElementById("question-title");
  const optionsList = document.getElementById("options-list");
  const prevQuestionBtn = document.getElementById("prev-question-btn");
  const nextQuestionBtn = document.getElementById("next-question-btn");
  const quizBackHomeBtn = document.getElementById("quiz-back-home-btn");

  const resultName = document.getElementById("result-name");
  const resultTagline = document.getElementById("result-tagline");
  const resultDesc = document.getElementById("result-desc");
  const scoreBars = document.getElementById("score-bars");

  const state = {
    questionIndex: 0,
    answers: [],
    scores: {},
    selectedOptionIndex: null
  };

  function initialScores() {
    const map = {};
    dimensions.forEach(dim => {
      map[dim.key] = 0;
    });
    return map;
  }

  function setScreen(name) {
    Object.values(screens).forEach(screen => screen.classList.remove("active"));
    screens[name].classList.add("active");
    if (name === "intro") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }

  function renderDimensionsPreview() {
    dimensionsPreview.innerHTML = "";
    dimensions.forEach(dim => {
      const li = document.createElement("li");
      const summary = typeof dim.description === "string"
        ? dim.description
        : (dim.description && dim.description.summary) || "";
      li.textContent = `${dim.name} — ${summary}`;
      dimensionsPreview.appendChild(li);
    });
  }

  function renderTypesGrid() {
    typesGrid.innerHTML = "";
    typesSubtitle.textContent = `共 ${types.length} 种网梗人格，点击查看详情`;
    types.forEach(type => {
      const article = document.createElement("article");
      article.className = "type-card";
      article.innerHTML = `
        <h3 class="type-card-code">${type.code}</h3>
        <h4 class="type-card-cn">${type.name}</h4>
        <p class="type-card-intro">${type.intro}</p>
      `;
      typesGrid.appendChild(article);
    });
  }

  function shuffle(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  let runtimeQuestions = shuffle(questions);

  function startTest() {
    state.questionIndex = 0;
    state.answers = new Array(questions.length).fill(null);
    state.scores = initialScores();
    state.selectedOptionIndex = null;
    runtimeQuestions = shuffle(questions);
    renderQuestion();
    setScreen("quiz");
  }

  function recomputeScores() {
    state.scores = initialScores();
    state.answers.forEach((answerIndex, idx) => {
      if (answerIndex === null || answerIndex === undefined) return;
      const question = runtimeQuestions[idx];
      const option = question && question.options[answerIndex];
      if (!option) return;
      Object.entries(option.effects).forEach(([key, value]) => {
        if (!(key in state.scores)) state.scores[key] = 0;
        state.scores[key] += value;
      });
    });
  }

  function calculateNormalizedScores() {
    const totals = {};
    dimensions.forEach(dim => {
      const positiveCap = runtimeQuestions.reduce((sum, q) => {
        let maxForQuestion = 0;
        q.options.forEach(option => {
          const v = option.effects[dim.key] || 0;
          if (v > maxForQuestion) maxForQuestion = v;
        });
        return sum + maxForQuestion;
      }, 0);

      const raw = state.scores[dim.key] || 0;
      const normalized = positiveCap > 0 ? Math.round((raw / positiveCap) * 10) : 0;
      totals[dim.key] = Math.max(0, Math.min(10, normalized));
    });
    return totals;
  }

  function getScoreLevel(score) {
    if (score <= 1) return { key: "veryLow", label: "极低" };
    if (score <= 3) return { key: "low", label: "低" };
    if (score <= 6) return { key: "medium", label: "中" };
    if (score <= 8) return { key: "high", label: "高" };
    return { key: "veryHigh", label: "极高" };
  }

  function getTypeScore(type, normalizedScores) {
    let score = 0;
    let inRangeCount = 0;

    dimensions.forEach(dim => {
      const value = normalizedScores[dim.key] || 0;
      const range = type.targetRanges[dim.key];
      if (!range) return;
      const [min, max] = range;

      if (value >= min && value <= max) {
        score += 15;
        inRangeCount += 1;
      } else {
        const distance = value < min ? min - value : value - max;
        score += Math.max(0, 15 - distance * 5);
      }
    });

    score += inRangeCount * 2;
    score += type.priority || 0;
    return score;
  }

  function getBestType(normalizedScores) {
    let best = types[0];
    let bestScore = -Infinity;
    types.forEach(type => {
      const fitScore = getTypeScore(type, normalizedScores);
      if (fitScore > bestScore) {
        bestScore = fitScore;
        best = type;
      }
    });
    return best;
  }

  function renderQuestion() {
    const current = runtimeQuestions[state.questionIndex];
    const percent = Math.round(((state.questionIndex + 1) / runtimeQuestions.length) * 100);
    progressText.textContent = `第 ${state.questionIndex + 1} / ${runtimeQuestions.length} 题`;
    progressPercent.textContent = `${percent}%`;
    progressBarFill.style.width = `${percent}%`;
    questionTitle.textContent = current.title;
    optionsList.innerHTML = "";
    state.selectedOptionIndex = state.answers[state.questionIndex];

    current.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "option-btn";
      if (state.selectedOptionIndex === index) {
        button.classList.add("is-selected");
      }
      button.type = "button";
      button.textContent = option.text;
      button.addEventListener("click", () => {
        state.selectedOptionIndex = index;
        state.answers[state.questionIndex] = index;
        [...optionsList.children].forEach(node => node.classList.remove("is-selected"));
        button.classList.add("is-selected");

        setTimeout(() => {
          if (state.questionIndex >= runtimeQuestions.length - 1) {
            recomputeScores();
            renderResult();
            setScreen("result");
            return;
          }
          state.questionIndex += 1;
          renderQuestion();
        }, 120);
      });
      optionsList.appendChild(button);
    });

    prevQuestionBtn.disabled = state.questionIndex === 0;
    nextQuestionBtn.textContent = state.questionIndex === runtimeQuestions.length - 1 ? "查看结果" : "下一题";
  }

  function renderResult() {
    const normalizedScores = calculateNormalizedScores();
    const bestType = getBestType(normalizedScores);

    resultName.textContent = bestType.name;
    resultTagline.textContent = bestType.intro;
    resultDesc.innerHTML = bestType.description.map(text => `<p>${text}</p>`).join("");

    scoreBars.innerHTML = "";
    dimensions.forEach(dim => {
      const score = normalizedScores[dim.key];
      const level = getScoreLevel(score);
      const levelText = (dim.description && dim.description.levels && dim.description.levels[level.key]) || "";
      const item = document.createElement("div");
      item.className = "score-item";
      item.innerHTML = `
        <small><span>${dim.name}</span><span>${score} / 10 · ${level.label}</span></small>
        <div class="score-track"><span class="score-fill" style="width:${score * 10}%"></span></div>
        <div class="score-level-text">${levelText}</div>
      `;
      scoreBars.appendChild(item);
    });
  }

  startTestBtn.addEventListener("click", startTest);
  restartBtn.addEventListener("click", startTest);
  backHomeBtn.addEventListener("click", () => setScreen("intro"));
  quizBackHomeBtn.addEventListener("click", () => setScreen("intro"));

  prevQuestionBtn.addEventListener("click", () => {
    if (state.questionIndex === 0) return;
    state.questionIndex -= 1;
    renderQuestion();
  });

  nextQuestionBtn.addEventListener("click", () => {
    if (state.answers[state.questionIndex] === null || state.answers[state.questionIndex] === undefined) return;
    if (state.questionIndex >= runtimeQuestions.length - 1) {
      recomputeScores();
      renderResult();
      setScreen("result");
      return;
    }
    state.questionIndex += 1;
    renderQuestion();
  });

  renderDimensionsPreview();
  renderTypesGrid();
  state.scores = initialScores();
})();
