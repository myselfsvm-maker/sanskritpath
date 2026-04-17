# 🕉️ Sanskrit Path — Interactive Sanskrit Learning App

A beautiful, fully browser-based Sanskrit learning app with lessons, quizzes,
flashcards and progress tracking. No server required — open `index.html` to start.

---

## 📁 Folder Structure

```
sanskrit-app/
├── index.html          ← Open this in your browser
├── css/
│   └── styles.css      ← Full stylesheet (ancient-meets-modern aesthetic)
├── js/
│   ├── data.js         ← All Sanskrit content (alphabet, vocabulary, grammar, quizzes)
│   └── app.js          ← Application logic (navigation, rendering, progress, quizzes)
└── README.md           ← This file
```

---

## 🚀 How to Run

1. Download
2. Double-click `index.html`  
   *(or drag it into any modern browser — Chrome, Firefox, Safari, Edge)*
3. No internet required after page load (fonts load from Google Fonts on first visit)

---

## 📚 Features

| Section        | What You Get |
|----------------|-------------|
| 🔤 **Alphabet** | 13 vowels + 34 consonants in Devanagari with Roman transliteration, IPA, examples. Click any card for details. |
| 📚 **Words**    | 30+ vocabulary words across 6 categories (Nature, Body, Numbers, Greetings, Verbs). Filter by category. |
| ⚖️ **Grammar**  | 4 complete lessons: Gender (3 types), 8 Cases, Verb conjugation table, Sandhi rules. Mark each complete for XP. |
| 🎯 **Quiz**     | 3 quiz categories (Alphabet, Vocabulary, Grammar), 7 questions each, instant feedback, star ratings. |
| 🃏 **Flashcards**| Flip-card practice for vowels, consonants or vocabulary. 3D card flip animation. |
| 📊 **Progress** | XP points, daily streak, best quiz scores, 8 achievement badges stored in localStorage. |

---

## 🎨 Design Notes

- **Palette:** Saffron, warm cream, gold, ink — inspired by ancient manuscripts
- **Typography:** Cormorant Garamond (display) · Crimson Pro (body) · Noto Serif Devanagari (script)
- **Animations:** Staggered card reveals, 3D flashcard flip, smooth modal entrance
- **Responsive:** Works on desktop, tablet and mobile

---

## 💾 Progress Storage

Progress is saved automatically to `localStorage` under the key `sanskrit_progress_v2`.  
To reset, go to **Progress → Reset All Progress** or clear site data in your browser.

---

## ✏️ Customising Content

All Sanskrit content lives in `js/data.js`:

- **Add vocabulary:** append objects to `SANSKRIT_DATA.vocabulary`
- **Add quiz questions:** append to `SANSKRIT_DATA.quizzes.vocabulary` (or `.alphabet` / `.grammar`)
- **Add grammar lessons:** append to `SANSKRIT_DATA.grammar`
- **Change mantras:** edit `SANSKRIT_DATA.mantras`

---

## 🌐 Browser Support

Works in all modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+).
Requires JavaScript enabled and localStorage available.

---

*संस्कृतं पठामः — Let us learn Sanskrit!*
