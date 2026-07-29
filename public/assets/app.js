(() => {
  const key = 'maskido-smart-bin-progress-v1';
  function readProgress() {
    try {
      const value = JSON.parse(window.localStorage.getItem(key) || '[]');
      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  }
  const completed = new Set(readProgress());

  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  const mobileProgressBar = document.getElementById('mobileProgressBar');
  const mobileProgressText = document.getElementById('mobileProgressText');
  const navLinks = [...document.querySelectorAll('.module-nav a')];
  const buttons = [...document.querySelectorAll('[data-complete]')];

  function save() {
    try {
      window.localStorage.setItem(key, JSON.stringify([...completed]));
    } catch {
      // Progress still works for the current session when storage is blocked.
    }
  }

  function updateProgress() {
    const pct = Math.round((completed.size / 8) * 100);
    [progressBar, mobileProgressBar].forEach(el => { if (el) el.style.width = `${pct}%`; });
    [progressText, mobileProgressText].forEach(el => { if (el) el.textContent = `${pct}%`; });

    navLinks.forEach(link => {
      const n = Number(link.dataset.module);
      link.classList.toggle('done', completed.has(n));
    });
    buttons.forEach(button => {
      const n = Number(button.dataset.complete);
      const isDone = completed.has(n);
      button.classList.toggle('done', isDone);
      if (isDone) button.textContent = n === 8 ? 'Project completed ✓' : `Mission ${String(n).padStart(2, '0')} completed ✓`;
    });
  }

  function celebrate() {
    const box = document.getElementById('confetti');
    if (!box) return;
    const colors = ['#FF7A00','#00B8D9','#16A36A','#071A33','#FFB347'];
    for (let i = 0; i < 70; i++) {
      const piece = document.createElement('i');
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.setProperty('--c', colors[Math.floor(Math.random() * colors.length)]);
      piece.style.setProperty('--r', `${Math.random() * 180}deg`);
      piece.style.animationDelay = `${Math.random() * .35}s`;
      box.appendChild(piece);
      setTimeout(() => piece.remove(), 2400);
    }
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.disabled) return;
      const n = Number(button.dataset.complete);
      if (!completed.has(n)) {
        completed.add(n);
        save();
        updateProgress();
        if (n === 8 || completed.size === 8) celebrate();
      }
    });
  });

  document.querySelectorAll('.component button').forEach(button => {
    button.addEventListener('click', () => button.closest('.component').classList.toggle('open'));
  });

  const heroBin = document.getElementById('heroBin');
  const demoBtn = document.getElementById('demoBtn');
  let demoOpen = false;
  const setDemo = open => {
    demoOpen = open;
    heroBin?.classList.toggle('open', open);
    if (demoBtn) demoBtn.textContent = open ? 'Move hand away' : 'Bring hand closer';
  };
  demoBtn?.addEventListener('click', () => setDemo(!demoOpen));
  heroBin?.addEventListener('click', () => setDemo(!demoOpen));

  const distanceSlider = document.getElementById('distanceSlider');
  const distanceValue = document.getElementById('distanceValue');
  const distanceStatus = document.getElementById('distanceStatus');
  function updateDistance() {
    const value = Number(distanceSlider.value);
    distanceValue.textContent = value;
    const open = value <= 12;
    distanceStatus.textContent = open ? 'Lid opens' : 'Lid stays closed';
    distanceStatus.classList.toggle('closed', !open);
  }
  distanceSlider?.addEventListener('input', updateDistance);
  updateDistance();

  const angleSlider = document.getElementById('angleSlider');
  const angleValue = document.getElementById('angleValue');
  const angleStatus = document.getElementById('angleStatus');
  function updateAngle() {
    const value = Number(angleSlider.value);
    angleValue.textContent = value;
    angleStatus.textContent = value < 20 ? 'Closed position' : value < 70 ? 'Opening...' : 'Open position';
    angleStatus.classList.toggle('closed', value < 20);
  }
  angleSlider?.addEventListener('input', updateAngle);
  updateAngle();

  const safetyInputs = [...document.querySelectorAll('#safetyChecklist input')];
  const safetyStatus = document.getElementById('safetyStatus');
  const safetyButton = document.querySelector('[data-complete="3"]');
  function updateSafety() {
    const count = safetyInputs.filter(input => input.checked).length;
    safetyStatus.textContent = `${count} of ${safetyInputs.length} safety promises confirmed.`;
    if (!completed.has(3)) safetyButton.disabled = count !== safetyInputs.length;
  }
  safetyInputs.forEach(input => input.addEventListener('change', updateSafety));
  updateSafety();

  document.getElementById('copyCode')?.addEventListener('click', async (event) => {
    const text = document.getElementById('codeBlock').innerText;
    try {
      await navigator.clipboard.writeText(text);
      const old = event.currentTarget.textContent;
      event.currentTarget.textContent = 'Copied ✓';
      setTimeout(() => event.currentTarget.textContent = old, 1600);
    } catch {
      alert('Select the code and copy it manually.');
    }
  });

  const quiz = document.getElementById('finalQuiz');
  const answers = {q1:'b',q2:'a',q3:'b',q4:'c',q5:'a',q6:'a',q7:'b',q8:'b'};
  quiz?.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(quiz);
    let score = 0;
    Object.entries(answers).forEach(([q, answer]) => { if (data.get(q) === answer) score++; });
    const result = document.getElementById('quizResult');
    document.getElementById('scoreText').textContent = `${score}/8`;
    const title = document.getElementById('scoreTitle');
    const message = document.getElementById('scoreMessage');
    if (score === 8) {
      title.textContent = 'Outstanding - system engineer level!';
      message.textContent = 'You understand the components, wiring, code logic and safety. Complete your build evidence to earn the badge.';
      celebrate();
    } else if (score >= 6) {
      title.textContent = 'Strong work!';
      message.textContent = 'Review the questions you missed, then try again for a perfect score.';
    } else {
      title.textContent = 'Good first attempt.';
      message.textContent = 'Revisit the Sensor Lab, Servo Lab and Safety Gate, then try the challenge again.';
    }
    result.classList.add('show');
    result.scrollIntoView({behavior:'smooth', block:'center'});
  });

  const sections = [...document.querySelectorAll('.section[data-module]')];
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const n = visible.target.dataset.module;
    navLinks.forEach(link => link.classList.toggle('active', link.dataset.module === n));
  }, {rootMargin:'-20% 0px -65% 0px', threshold:[0,.2,.5]});
  sections.forEach(section => observer.observe(section));

  updateProgress();
})();

// Sync course progress completed inside the Live Invention Lab.
(() => {
  try {
    const courseKey = 'maskido-smart-bin-progress-v1';
    const completed = new Set(JSON.parse(localStorage.getItem(courseKey) || '[]'));
    if (localStorage.getItem('maskido-quiz-complete')) completed.add(8);
    if (completed.size) localStorage.setItem(courseKey, JSON.stringify([...completed]));
  } catch {}
})();
