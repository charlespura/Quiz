import './style.css';

type Question = { category: string; prompt: string; answers: readonly string[]; correct: number; explanation: string };
const questions: readonly Question[] = [
  { category: 'Geography', prompt: 'Which country is home to the most islands?', answers: ['The Philippines', 'Indonesia', 'Sweden', 'Japan'], correct: 2, explanation: 'Sweden has over 260,000 islands. A little unexpected, right?' },
  { category: 'Science', prompt: 'Which planet has the most prominent ring system?', answers: ['Mars', 'Saturn', 'Venus', 'Mercury'], correct: 1, explanation: 'Saturn’s spectacular rings are made mostly of ice, with rock and dust.' },
  { category: 'Nature', prompt: 'What is the largest animal on Earth?', answers: ['African elephant', 'Whale shark', 'Blue whale', 'Giraffe'], correct: 2, explanation: 'The blue whale is the largest animal known to have lived on Earth.' },
];
const team = [
  ['Charles Pura', 'charlespuracp'], ['Jhales Santiago', 'jhales016'], ['Sofia Signo', 'sofia.291021'],
  ['Marcus Pelaez', 'marcus.pelaez.2024'], ['Ceejay Domdom', 'ceejayjayjayjay'], ['Elvert Valdez', 'elvert.valdez'],
  ['James Ryan O. Vergara', 'gm.cfmigs'], ['Stephanie Racal', 'stephanie.racal.750'],
] as const;
const base = import.meta.env.BASE_URL;
const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('Missing application root');
app.innerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="header"><a class="brand" href="#home" aria-label="QuizApp home"><span class="brand-mark">q<span>✦</span></span>quizapp<span class="brand-dot">.</span></a>
    <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="navigation">☰</button>
    <nav id="navigation" aria-label="Main navigation"><a href="#about">The experience</a><a href="#team">Our team</a><a href="#app-info">App details</a><button class="button button-small download">Get the app <span aria-hidden="true">↗</span></button></nav>
  </header>
  <main id="main">
    <section id="home" class="hero container">
      <div class="hero-copy"><span class="eyebrow"><span class="status-dot"></span> A LITTLE CURIOSITY GOES A LONG WAY</span>
        <h1>Big questions.<br>Little <span class="serif">aha!</span><br>moments<span class="accent">.</span></h1>
        <p>Turn your spare minutes into something brilliant. Challenge what you know, discover what you don’t, and have fun along the way.</p>
        <div class="hero-actions"><button class="button download">Download for Android <span aria-hidden="true">↗</span></button><a class="text-link" href="#try-it">Try a question <span aria-hidden="true">↓</span></a></div>
        <div class="platform-note"><span aria-hidden="true">◉</span> Made for curious minds. Available on Android 10+.</div>
      </div>
      <div class="quiz-stage" id="try-it"><span class="spark spark-one" aria-hidden="true">✳</span><div class="floating-label">YOUR NEXT AHA! MOMENT ↙</div>
        <article class="quiz-card" aria-label="Interactive quiz preview"><div class="quiz-top"><span class="pill">THE QUICK QUIZ</span><span id="question-count"></span></div><div class="quiz-progress"><span id="progress"></span></div>
          <div class="question-category" id="category"></div><h2 id="question"></h2><div id="answers" class="answers"></div>
          <div class="quiz-bottom"><span id="quiz-status" role="status" aria-live="polite">A little guess. A little discovery.</span><button id="next-question" aria-label="Next question" hidden>Next →</button></div>
        </article><div class="learning-note"><span aria-hidden="true">✦</span><div><strong>Learning looks good on you.</strong><span>One question at a time.</span></div></div><span class="spark spark-two" aria-hidden="true">✧</span>
      </div>
    </section>
    <div class="topic-strip" aria-label="Quiz topics"><div class="container"><span>A WORLD TO DISCOVER</span><span>Science <i>✧</i></span><span>Geography <i>✧</i></span><span>General knowledge <i>✧</i></span><span>And a little more <i>↗</i></span></div></div>
    <section id="about" class="section container"><div class="section-heading"><div><span class="eyebrow">BUILT AROUND YOUR CURIOSITY</span><h2>More than a right answer.</h2></div><p>Small challenges. Fresh discoveries.<br>A better way to spend your screen time.</p></div>
      <div class="feature-grid"><article class="feature"><span class="feature-icon">✳</span><span class="feature-number">01 / EXPLORE</span><h3>Follow your curiosity</h3><p>Jump between topics, put your knowledge to the test, and find a new favorite subject.</p></article><article class="feature"><span class="feature-icon">↗</span><span class="feature-number">02 / CHALLENGE</span><h3>Make every guess count</h3><p>Learn through interactive quizzes. There’s something to discover in every answer.</p></article><article class="feature"><span class="feature-icon">⌘</span><span class="feature-number">03 / DO MORE</span><h3>A few useful extras</h3><p>Explore built-in tools, including a password generator, alongside your next quiz.</p></article></div>
    </section>
    <section id="app-info" class="details-section"><div class="container details-grid"><div><span class="eyebrow">A LITTLE ABOUT THE APP</span><h2>Easy to pick up.<br>Hard to stop <em>learning.</em></h2><p>Built for students, trivia lovers, and anyone who’s ever wondered “what if?”</p><button class="button download">Get QuizApp <span aria-hidden="true">↗</span></button></div><div class="detail-list"><div><span>01</span><div><h3>Your own space to learn</h3><p>Account registration, email verification, and password recovery powered by Firebase.</p></div></div><div><span>02</span><div><h3>Made for Android</h3><p>Native Java and Android SDK, with Material Design. Minimum Android 10 (SDK 29); target SDK 35.</p></div></div><div><span>03</span><div><h3>The first chapter · v1.0</h3><p>The initial release brings together topic-based quizzes, account features, and a password generator.</p></div></div></div></div></section>
    <section id="team" class="section container"><div class="section-heading"><div><span class="eyebrow">THE PEOPLE BEHIND THE QUESTIONS</span><h2>Curious minds. Shared vision.</h2></div><p>Meet the team that brought<br>QuizApp to life.</p></div><div class="team-grid">${team.map(([name, profile], i) => `<a class="team-member" href="https://facebook.com/${profile}" target="_blank" rel="noopener noreferrer"><span class="avatar avatar-${i % 4}" aria-hidden="true">${name.split(' ').map(part => part[0]).slice(0, 2).join('')}</span><span><strong>${name}</strong><small>Meet the developer ↗</small></span></a>`).join('')}</div></section>
    <section class="closing container"><span aria-hidden="true">✳</span><h2>Your next discovery<br>is a question away.</h2><button class="button button-light download">Let’s get curious <span aria-hidden="true">↗</span></button><p>QuizApp for Android · Free to download</p></section>
  </main>
  <footer class="container"><a class="brand" href="#home">quizapp<span class="brand-dot">.</span></a><p>A little wiser, every day.</p><span>© ${new Date().getFullYear()} QuizApp Team</span><a href="https://github.com/charlespura/Quiz" target="_blank" rel="noopener noreferrer">GitHub ↗</a></footer>
  <dialog id="download-dialog" aria-labelledby="download-title"><form method="dialog"><button class="dialog-close" aria-label="Close download dialog">×</button></form><span class="eyebrow">TAKE YOUR CURIOSITY WITH YOU</span><h2 id="download-title">Meet your next<br>learning companion.</h2><p>Download QuizApp v1.0 for Android 10 or later. This is the project’s debug APK (approximately 44 MB), installed outside Google Play.</p><a class="button" id="confirm-download" href="${base}app-debug.apk" download>Download APK <span aria-hidden="true">↓</span></a><p class="download-note">Open the downloaded file on your Android device to install. Only allow installation if you trust this app.</p></dialog>
`;
function element<T extends HTMLElement>(selector: string): T {
  const found = document.querySelector<T>(selector);
  if (!found) throw new Error(`Missing element: ${selector}`);
  return found;
}
let current = 0;
let answered = false;
function renderQuestion(): void {
  answered = false;
  const question = questions[current]!;
  element('#question-count').textContent = `${String(current + 1).padStart(2, '0')} / 03`;
  element('#progress').style.width = `${((current + 1) / questions.length) * 100}%`;
  element('#category').textContent = question.category;
  element('#question').textContent = question.prompt;
  element('#quiz-status').textContent = 'A little guess. A little discovery.';
  element('#next-question').hidden = true;
  const answers = element('#answers');
  answers.replaceChildren();
  question.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.className = 'answer';
    const letter = document.createElement('span');
    letter.textContent = String.fromCharCode(65 + index);
    button.append(letter, document.createTextNode(answer));
    button.addEventListener('click', () => {
      if (answered) return;
      answered = true;
      answers.querySelectorAll<HTMLButtonElement>('button').forEach((item, answerIndex) => {
        item.disabled = true;
        if (answerIndex === question.correct) item.classList.add('correct');
        if (answerIndex === index && index !== question.correct) item.classList.add('incorrect');
      });
      element('#quiz-status').textContent = `${index === question.correct ? 'You got it! ' : 'Now you know! '}${question.explanation}`;
      element('#next-question').hidden = false;
    });
    answers.append(button);
  });
}
element('#next-question').addEventListener('click', () => {
  current = (current + 1) % questions.length;
  renderQuestion();
  element<HTMLButtonElement>('.answer').focus();
});
renderQuestion();
const menu = element<HTMLButtonElement>('.menu-toggle');
const navigation = element('nav');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a, button').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open navigation');
}));
const dialog = element<HTMLDialogElement>('#download-dialog');
document.querySelectorAll<HTMLButtonElement>('.download').forEach(button => button.addEventListener('click', () => dialog.showModal()));
dialog.addEventListener('click', event => { if (event.target === dialog) { const bounds = dialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close(); } });
element('#confirm-download').addEventListener('click', () => dialog.close());
