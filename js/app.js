// ============================================================
//  SANSKRIT LEARNING APP — MAIN APPLICATION
// ============================================================

/* ── STATE ────────────────────────────────────────────────── */
const STATE = {
  currentSection: "home",
  currentLesson: null,
  quiz: {
    active: false,
    category: null,
    questions: [],
    current: 0,
    score: 0,
    answered: false,
  }
};

/* ── PROGRESS ─────────────────────────────────────────────── */
const PROGRESS_KEY = "sanskrit_progress_v2";

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {
      lessonsCompleted: [],
      quizScores: {},
      xp: 0,
      streak: 0,
      lastStudied: null,
      alphabetMastered: 0,
      wordsLearned: [],
      grammarCompleted: [],
    };
  } catch { return { lessonsCompleted: [], quizScores: {}, xp: 0, streak: 0, lastStudied: null, alphabetMastered: 0, wordsLearned: [], grammarCompleted: [] }; }
}

function saveProgress(p) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
  updateProgressUI(p);
}

function updateProgressUI(p) {
  const el = id => document.getElementById(id);
  if (el("xp-count"))     el("xp-count").textContent     = p.xp;
  if (el("streak-count")) el("streak-count").textContent  = p.streak;
  if (el("lessons-done")) el("lessons-done").textContent  = p.lessonsCompleted.length;
  const totalLessons = 3 + SANSKRIT_DATA.grammar.length; // vowels, consonants, vocab, grammar
  const pct = Math.round((p.lessonsCompleted.length / totalLessons) * 100);
  if (el("progress-bar")) el("progress-bar").style.width = Math.min(pct, 100) + "%";
  if (el("progress-pct")) el("progress-pct").textContent  = pct + "%";
}

function awardXP(amount, label) {
  const p = loadProgress();
  p.xp += amount;
  if (label && !p.lessonsCompleted.includes(label)) {
    p.lessonsCompleted.push(label);
  }
  // Streak logic
  const today = new Date().toDateString();
  if (p.lastStudied !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    p.streak = (p.lastStudied === yesterday) ? p.streak + 1 : 1;
    p.lastStudied = today;
  }
  saveProgress(p);
  showXPToast(amount);
}

function showXPToast(amount) {
  const toast = document.getElementById("xp-toast");
  if (!toast) return;
  toast.textContent = `+${amount} XP ✨`;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

/* ── NAVIGATION ───────────────────────────────────────────── */
function navigate(section) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));

  const el = document.getElementById("section-" + section);
  if (el) el.classList.add("active");
  const nb = document.querySelector(`.nav-btn[data-section="${section}"]`);
  if (nb) nb.classList.add("active");

  STATE.currentSection = section;
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Render on demand
  if (section === "alphabet")  renderAlphabet();
  if (section === "words")     renderWords();
  if (section === "grammar")   renderGrammar();
  if (section === "quiz")      renderQuizMenu();
  if (section === "progress")  renderProgressPage();
}

/* ── HOME ─────────────────────────────────────────────────── */
function renderHome() {
  const mantra = SANSKRIT_DATA.mantras[Math.floor(Math.random() * SANSKRIT_DATA.mantras.length)];
  const el = document.getElementById("home-mantra");
  if (el) {
    el.querySelector(".mantra-text").textContent  = mantra.text;
    el.querySelector(".mantra-roman").textContent = mantra.roman;
    el.querySelector(".mantra-meaning").textContent = '"' + mantra.meaning + '"';
  }
  const p = loadProgress();
  updateProgressUI(p);
}

/* ── ALPHABET ─────────────────────────────────────────────── */
function renderAlphabet() {
  renderVowels();
  renderConsonants();
}

function renderVowels() {
  const container = document.getElementById("vowel-grid");
  if (!container) return;
  container.innerHTML = "";
  SANSKRIT_DATA.vowels.forEach((v, i) => {
    const card = document.createElement("div");
    card.className = "letter-card vowel-card";
    card.style.animationDelay = (i * 0.04) + "s";
    card.innerHTML = `
      <div class="letter-deva">${v.devanagari}</div>
      <div class="letter-roman">${v.roman}</div>
      <div class="letter-ipa">[${v.ipa}]</div>
    `;
    card.addEventListener("click", () => showLetterModal(v, "vowel"));
    container.appendChild(card);
  });
}

function renderConsonants() {
  const container = document.getElementById("consonant-grid");
  if (!container) return;
  container.innerHTML = "";

  const groups = [...new Set(SANSKRIT_DATA.consonants.map(c => c.group))];
  groups.forEach(group => {
    const groupEl = document.createElement("div");
    groupEl.className = "consonant-group";
    const letters = SANSKRIT_DATA.consonants.filter(c => c.group === group);
    groupEl.innerHTML = `
      <div class="group-header">
        <span class="group-name">${group}</span>
        <span class="group-skt">${letters[0].groupSkt}</span>
      </div>
      <div class="group-letters"></div>
    `;
    const gridEl = groupEl.querySelector(".group-letters");
    letters.forEach((c, i) => {
      const card = document.createElement("div");
      card.className = "letter-card consonant-card";
      card.innerHTML = `
        <div class="letter-deva">${c.devanagari}</div>
        <div class="letter-roman">${c.roman}</div>
      `;
      card.addEventListener("click", () => showLetterModal(c, "consonant"));
      gridEl.appendChild(card);
    });
    container.appendChild(groupEl);
  });
  awardXP(5, "alphabet-viewed");
}

function showLetterModal(data, type) {
  const modal = document.getElementById("letter-modal");
  document.getElementById("modal-deva").textContent   = data.devanagari;
  document.getElementById("modal-roman").textContent  = data.roman;
  document.getElementById("modal-desc").textContent   = data.meaning;
  document.getElementById("modal-type").textContent   = type === "vowel" ? "Vowel (स्वर)" : `Consonant · ${data.group || ""}`;
  const exEl = document.getElementById("modal-example");
  if (exEl) exEl.textContent = data.example || (data.groupSkt ? "Group: " + data.groupSkt : "");
  modal.classList.add("open");
}

function closeModal() {
  document.getElementById("letter-modal").classList.remove("open");
}

/* ── WORDS ────────────────────────────────────────────────── */
let activeWordCategory = "All";

function renderWords() {
  const categories = ["All", ...new Set(SANSKRIT_DATA.vocabulary.map(v => v.category))];
  const filterEl = document.getElementById("word-filters");
  if (filterEl && filterEl.children.length === 0) {
    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = "filter-btn" + (cat === "All" ? " active" : "");
      btn.textContent = cat;
      btn.addEventListener("click", () => {
        activeWordCategory = cat;
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderWordCards();
      });
      filterEl.appendChild(btn);
    });
  }
  renderWordCards();
  awardXP(5, "words-viewed");
}

function renderWordCards() {
  const container = document.getElementById("word-grid");
  if (!container) return;
  const words = activeWordCategory === "All"
    ? SANSKRIT_DATA.vocabulary
    : SANSKRIT_DATA.vocabulary.filter(v => v.category === activeWordCategory);

  container.innerHTML = "";
  words.forEach((w, i) => {
    const card = document.createElement("div");
    card.className = "word-card";
    card.style.animationDelay = (i * 0.05) + "s";
    card.innerHTML = `
      <div class="word-deva">${w.devanagari}</div>
      <div class="word-roman">${w.roman}</div>
      <div class="word-meaning">${w.meaning}</div>
      <div class="word-sentence">${w.sentence}</div>
      <div class="word-category-badge">${w.category}</div>
    `;
    container.appendChild(card);
  });
}

/* ── GRAMMAR ──────────────────────────────────────────────── */
function renderGrammar() {
  const container = document.getElementById("grammar-container");
  if (!container || container.children.length > 0) return;

  SANSKRIT_DATA.grammar.forEach(lesson => {
    const section = document.createElement("div");
    section.className = "grammar-lesson";
    section.id = "grammar-" + lesson.id;

    let innerHTML = `
      <div class="grammar-header">
        <span class="grammar-icon">${lesson.icon}</span>
        <div>
          <h2 class="grammar-title">${lesson.title}</h2>
          <p class="grammar-subtitle">${lesson.subtitle}</p>
        </div>
      </div>
      <p class="grammar-intro">${lesson.intro}</p>
    `;

    if (lesson.sections) {
      if (lesson.id === "gender") {
        innerHTML += `<div class="gender-grid">`;
        lesson.sections.forEach(s => {
          innerHTML += `
            <div class="gender-card" style="--gender-color:${s.color}">
              <div class="gender-name">${s.name}</div>
              <div class="gender-examples">
                ${s.examples.map(e => `
                  <div class="gender-example">
                    <span class="ge-word">${e.word}</span>
                    <span class="ge-roman">${e.roman}</span>
                    <span class="ge-meaning">${e.meaning}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          `;
        });
        innerHTML += `</div>`;
      } else if (lesson.id === "cases") {
        innerHTML += `<div class="cases-list">`;
        lesson.sections.forEach((s, i) => {
          innerHTML += `
            <div class="case-row" style="animation-delay:${i*0.08}s">
              <div class="case-num">${i+1}</div>
              <div class="case-info">
                <div class="case-name">${s.name}</div>
                <div class="case-role">${s.role}</div>
              </div>
              <div class="case-example">
                <div class="case-skt">${s.example}</div>
                <div class="case-trans">${s.trans}</div>
              </div>
              <div class="case-ending">${s.ending}</div>
            </div>
          `;
        });
        innerHTML += `</div>`;
      }
    }

    if (lesson.table) {
      innerHTML += `
        <div class="verb-table-wrap">
          <div class="verb-root">${lesson.table.root}</div>
          <table class="verb-table">
            <thead><tr>${lesson.table.headers.map(h => `<th>${h}</th>`).join("")}</tr></thead>
            <tbody>${lesson.table.rows.map(r => `<tr>${r.map((c,i) => `<td class="${i===0?'row-label':''}">${c}</td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        </div>
      `;
    }

    if (lesson.rules) {
      innerHTML += `<div class="sandhi-rules">`;
      lesson.rules.forEach((r, i) => {
        innerHTML += `
          <div class="sandhi-rule" style="animation-delay:${i*0.1}s">
            <div class="sandhi-name">${r.name}</div>
            <div class="sandhi-formula">${r.rule}</div>
            <div class="sandhi-example">
              <span class="sandhi-skt">${r.example}</span>
              <span class="sandhi-roman">${r.romanExample}</span>
            </div>
            <div class="sandhi-note">${r.note}</div>
          </div>
        `;
      });
      innerHTML += `</div>`;
    }

    innerHTML += `
      <button class="complete-btn" onclick="completeGrammarLesson('${lesson.id}')">
        Mark as Complete ✓
      </button>
    `;

    section.innerHTML = innerHTML;
    container.appendChild(section);
  });
  updateGrammarCompletion();
}

function completeGrammarLesson(id) {
  const p = loadProgress();
  if (!p.grammarCompleted.includes(id)) {
    p.grammarCompleted.push(id);
    saveProgress(p);
    awardXP(20, "grammar-" + id);
    const btn = document.querySelector(`#grammar-${id} .complete-btn`);
    if (btn) { btn.textContent = "Completed! ✓"; btn.classList.add("completed"); }
  }
  updateGrammarCompletion();
}

function updateGrammarCompletion() {
  const p = loadProgress();
  SANSKRIT_DATA.grammar.forEach(l => {
    const btn = document.querySelector(`#grammar-${l.id} .complete-btn`);
    if (btn && p.grammarCompleted.includes(l.id)) {
      btn.textContent = "Completed! ✓";
      btn.classList.add("completed");
    }
  });
}

/* ── QUIZ ─────────────────────────────────────────────────── */
function renderQuizMenu() {
  document.getElementById("quiz-menu").style.display    = "block";
  document.getElementById("quiz-active").style.display  = "none";
  document.getElementById("quiz-result").style.display  = "none";
}

function startQuiz(category) {
  const pool = SANSKRIT_DATA.quizzes[category];
  STATE.quiz = {
    active: true, category,
    questions: shuffle([...pool]).slice(0, 7),
    current: 0, score: 0, answered: false
  };
  document.getElementById("quiz-menu").style.display    = "none";
  document.getElementById("quiz-active").style.display  = "block";
  document.getElementById("quiz-result").style.display  = "none";
  renderQuestion();
}

function renderQuestion() {
  const q = STATE.quiz;
  const question = q.questions[q.current];

  document.getElementById("quiz-question-num").textContent =
    `Question ${q.current + 1} of ${q.questions.length}`;
  document.getElementById("quiz-question-text").textContent = question.q;

  const qBar = document.getElementById("quiz-progress-bar");
  qBar.style.width = ((q.current / q.questions.length) * 100) + "%";

  const opts = document.getElementById("quiz-options");
  opts.innerHTML = "";
  question.opts.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.textContent = opt;
    btn.addEventListener("click", () => selectAnswer(i));
    opts.appendChild(btn);
  });

  document.getElementById("quiz-next").style.display = "none";
  q.answered = false;
}

function selectAnswer(idx) {
  if (STATE.quiz.answered) return;
  STATE.quiz.answered = true;
  const question = STATE.quiz.questions[STATE.quiz.current];
  const opts = document.querySelectorAll(".quiz-option");
  opts.forEach((btn, i) => {
    btn.disabled = true;
    if (i === question.answer) btn.classList.add("correct");
    if (i === idx && idx !== question.answer) btn.classList.add("wrong");
  });
  if (idx === question.answer) STATE.quiz.score++;
  document.getElementById("quiz-next").style.display = "block";
}

function nextQuestion() {
  STATE.quiz.current++;
  if (STATE.quiz.current >= STATE.quiz.questions.length) {
    showQuizResult();
  } else {
    renderQuestion();
  }
}

function showQuizResult() {
  const q = STATE.quiz;
  const pct = Math.round((q.score / q.questions.length) * 100);
  document.getElementById("quiz-active").style.display  = "none";
  document.getElementById("quiz-result").style.display  = "block";

  const emoji = pct >= 80 ? "🏆" : pct >= 60 ? "⭐" : "📚";
  document.getElementById("result-emoji").textContent  = emoji;
  document.getElementById("result-score").textContent  = `${q.score} / ${q.questions.length}`;
  document.getElementById("result-pct").textContent    = pct + "%";

  const msgs = {
    high: ["Excellent! You are a true Sanskrit scholar!", "Outstanding! शाबाश (Śābāś)! Well done!", "Perfect! Your dedication shines!"],
    mid:  ["Good effort! Keep practising daily.", "Nice work! Review the lessons and try again.", "You're making great progress!"],
    low:  ["Keep going! Every master was once a beginner.", "Sanskrit takes time — review and retry!", "Don't give up! Practice makes perfect."]
  };
  const arr = pct >= 80 ? msgs.high : pct >= 60 ? msgs.mid : msgs.low;
  document.getElementById("result-msg").textContent = arr[Math.floor(Math.random() * arr.length)];

  const xpEarned = q.score * 10;
  const p = loadProgress();
  const key = "quiz-" + q.category;
  if (!p.quizScores[key] || pct > p.quizScores[key]) {
    p.quizScores[key] = pct;
  }
  saveProgress(p);
  awardXP(xpEarned, null);
  document.getElementById("result-xp").textContent = `+${xpEarned} XP earned!`;

  // Stars
  const stars = document.querySelectorAll(".result-star");
  const filledStars = pct >= 80 ? 3 : pct >= 60 ? 2 : 1;
  stars.forEach((s, i) => {
    if (i < filledStars) setTimeout(() => s.classList.add("lit"), i * 300);
    else s.classList.remove("lit");
  });
}

/* ── PROGRESS PAGE ────────────────────────────────────────── */
function renderProgressPage() {
  const p = loadProgress();
  const el = id => document.getElementById(id);

  if (el("prog-xp"))      el("prog-xp").textContent      = p.xp;
  if (el("prog-streak"))  el("prog-streak").textContent   = p.streak + " day" + (p.streak !== 1 ? "s" : "");
  if (el("prog-lessons")) el("prog-lessons").textContent  = p.lessonsCompleted.length;

  // Quiz scores
  const scoreList = el("quiz-score-list");
  if (scoreList) {
    scoreList.innerHTML = "";
    const cats = ["alphabet", "vocabulary", "grammar"];
    cats.forEach(cat => {
      const key  = "quiz-" + cat;
      const best = p.quizScores[key] || 0;
      const row  = document.createElement("div");
      row.className = "score-row";
      row.innerHTML = `
        <span class="score-cat">${capitalize(cat)}</span>
        <div class="score-bar-wrap">
          <div class="score-bar" style="width:${best}%"></div>
        </div>
        <span class="score-pct">${best}%</span>
      `;
      scoreList.appendChild(row);
    });
  }

  // Badges
  const badgeEl = el("badge-container");
  if (badgeEl) {
    const badges = [
      { id: "first-step",   icon: "🌱", label: "First Step",       earned: p.xp > 0 },
      { id: "alphabet",     icon: "🔤", label: "Alphabet Explorer", earned: p.lessonsCompleted.includes("alphabet-viewed") },
      { id: "wordsmith",    icon: "📖", label: "Wordsmith",         earned: p.lessonsCompleted.includes("words-viewed") },
      { id: "grammarian",   icon: "⚖️", label: "Grammarian",       earned: p.grammarCompleted.length >= 2 },
      { id: "quiz-master",  icon: "🏆", label: "Quiz Master",       earned: Object.values(p.quizScores).some(s => s >= 80) },
      { id: "century",      icon: "💯", label: "Century",           earned: p.xp >= 100 },
      { id: "dedicated",    icon: "🔥", label: "Dedicated Learner", earned: p.streak >= 3 },
      { id: "scholar",      icon: "🎓", label: "Scholar",           earned: p.grammarCompleted.length >= 4 },
    ];
    badgeEl.innerHTML = "";
    badges.forEach(b => {
      const div = document.createElement("div");
      div.className = "badge" + (b.earned ? " earned" : " locked");
      div.innerHTML = `<div class="badge-icon">${b.icon}</div><div class="badge-label">${b.label}</div>`;
      badgeEl.appendChild(div);
    });
  }
}

/* ── FLASHCARD MODE ───────────────────────────────────────── */
let flashcardPool = [], flashIndex = 0, flashFlipped = false;

function startFlashcards() {
  const cat = document.getElementById("flashcard-cat").value;
  if (cat === "vowels")     flashcardPool = SANSKRIT_DATA.vowels.map(v => ({ front: v.devanagari, back: `${v.roman}\n${v.meaning}` }));
  else if (cat === "consonants") flashcardPool = SANSKRIT_DATA.consonants.map(c => ({ front: c.devanagari, back: `${c.roman}\n${c.meaning}` }));
  else                      flashcardPool = SANSKRIT_DATA.vocabulary.map(v => ({ front: v.devanagari, back: `${v.roman}\n${v.meaning}` }));

  flashcardPool = shuffle([...flashcardPool]);
  flashIndex = 0;
  flashFlipped = false;
  document.getElementById("flashcard-zone").style.display = "block";
  renderFlashcard();
  awardXP(3, "flashcard-" + cat);
}

function renderFlashcard() {
  const card = document.getElementById("flash-card");
  const fc   = flashcardPool[flashIndex];
  card.classList.remove("flipped");
  flashFlipped = false;
  document.getElementById("flash-front").textContent = fc.front;
  document.getElementById("flash-back").textContent  = fc.back;
  document.getElementById("flash-count").textContent =
    `${flashIndex + 1} / ${flashcardPool.length}`;
}

function flipFlashcard() {
  const card = document.getElementById("flash-card");
  flashFlipped = !flashFlipped;
  card.classList.toggle("flipped", flashFlipped);
}

function nextFlashcard() {
  flashIndex = (flashIndex + 1) % flashcardPool.length;
  renderFlashcard();
}

function prevFlashcard() {
  flashIndex = (flashIndex - 1 + flashcardPool.length) % flashcardPool.length;
  renderFlashcard();
}

/* ── UTILITIES ────────────────────────────────────────────── */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function resetProgress() {
  if (confirm("Reset all progress? This cannot be undone.")) {
    localStorage.removeItem(PROGRESS_KEY);
    renderProgressPage();
    updateProgressUI(loadProgress());
    showXPToast(0);
  }
}

/* ── INIT ─────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  // Nav
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => navigate(btn.dataset.section));
  });

  // Modal close
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("letter-modal").addEventListener("click", e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Quiz buttons
  document.getElementById("quiz-next").addEventListener("click", nextQuestion);

  // Flashcard buttons
  document.getElementById("flash-flip").addEventListener("click", flipFlashcard);
  document.getElementById("flash-next").addEventListener("click", nextFlashcard);
  document.getElementById("flash-prev").addEventListener("click", prevFlashcard);
  document.getElementById("start-flash-btn").addEventListener("click", startFlashcards);

  // Reset progress
  const resetBtn = document.getElementById("reset-progress-btn");
  if (resetBtn) resetBtn.addEventListener("click", resetProgress);

  // Tab switching in alphabet
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  // Init home
  renderHome();
  navigate("home");
});
