let exploreCount = 0;

function trackExplore() {
  exploreCount++;

  if (exploreCount >= 5) {
    document.getElementById("final-btn").classList.remove("hidden");
  }
}

function showFinalSurprise() {
  const content = document.getElementById("content");

  content.innerHTML = `
    <h2 style="font-family:'Great Vibes'; font-size:2.8rem;">
      You found everything… 💖
    </h2>
    <p style="font-size:1.3rem; margin-top:15px;">
      But the best surprise here was never in these boxes.
    </p>
    <p style="font-size:1.4rem; margin-top:10px;">
      It was always <b>you 🫵🏻🎀💝</b>.
    </p>
  `;
}

const noBtn = document.getElementById("no-btn");

document.addEventListener("DOMContentLoaded", () => {

const noBtn = document.getElementById("no-btn");
const clickSound = document.getElementById("clickSound");
const kissSound = document.getElementById("kissSound");
const bgMusic = document.getElementById("bgMusic");

let slideIndex = 1;
setInterval(() => {
  const h = document.createElement("div");
  h.className = "floating-heart";
  h.textContent = "💖";
  h.style.left = Math.random() * window.innerWidth + "px";
  h.style.animationDuration = (5 + Math.random() * 5) + "s";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 9000);
}, 500);


/* ---------- MOVE NO BUTTON ---------- */
window.moveNo = function () {
  if (!noBtn) return;

  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // 💗 Heart trail effect
  const trail = document.createElement("div");
  trail.innerHTML = "💗";
  trail.style.position = "absolute";
  trail.style.left = x + "px";
  trail.style.top = y + "px";
  trail.style.opacity = "0.7";
  trail.style.fontSize = "22px";
  trail.style.pointerEvents = "none";
  trail.style.transition = "1s ease";
  document.body.appendChild(trail);

  setTimeout(() => {
    trail.style.opacity = "0";
    trail.style.transform = "translateY(-25px)";
  }, 10);

  setTimeout(() => trail.remove(), 1000);
};

window.startExperience = function () {
  const intro = document.getElementById("intro-screen");
  if (!intro) return;
  intro.style.opacity = "0";
  setTimeout(() => intro.remove(), 800);
};



/* ---------- YES CLICK ---------- */
window.yesClicked = function () {
  bgMusic?.play();
  clickSound?.play();
  startConfetti();

  document.getElementById("main-page")?.classList.add("hidden");
  document.getElementById("surprise-page")?.classList.remove("hidden");
  for (let i = 0; i < 20; i++) {
  const flower = document.createElement("div");
  flower.innerHTML = "🌹";
  flower.className = "glow-heart";
  flower.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 6000);
}

};

/* ---------- CONFETTI ---------- */
function startConfetti() {
  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
  script.onload = () => {
    if (typeof confetti === "function") {
      confetti({ particleCount: 200, spread: 120 });
    }
  };
  document.body.appendChild(script);
}
const muteBtn = document.getElementById("toggleBgMusic");

muteBtn.addEventListener("click", () => {
  bgMusic.muted = !bgMusic.muted;
  muteBtn.textContent = bgMusic.muted ? "Unmute 🔊" : "Mute 🔇";
});


/* ---------- OPEN BOX ---------- */
window.openBox = function (type) {
  trackExplore();
  stopLoveGame();
  const timeline = document.getElementById("timeline");
  const content = document.getElementById("content");

  if (!content || !timeline) return;

  timeline.classList.add("hidden");

  if (type === "letter") {
    clickSound?.play();
    content.innerHTML = `
      <h2>To My Love 💌</h2>
      <p>
        To My Love 💌
        I just wanted to take a moment to tell you how special you are to me.
        Having you in my life makes even ordinary days feel brighter.
        Your smile, your kindness, and the way you understand me mean more than I can explain in words.
        No matter the distance or the busy days, I always carry a little piece of you with me.
        You inspire me to be better and remind me that love is about caring, trusting, and supporting each other.
        Today is just one day to celebrate us, but I’m grateful for you every single day. Thank you for being you and for sharing your world with me.
        I’m really lucky to have you. Choosing you is the easiest thing I do every morning and sorry if you felt im doubting you recently i never intended to do that ,
        You are the one person I never want to let go of you’re my safe place, my favorite story, and the love of my life. A few months ago, 
        you came into my life and quietly stole my heart. I’m so glad you did, and I hope you’ll keep it for the rest of my life. Will you be my Valentine?
        🥺 Happy Valentine’s Day, my princess🫴. Every moment with you is magic. Being with you makes my heart soar 💗
      </p>`;
  }

  if (type === "voice") {
    clickSound?.play();
    content.innerHTML = `
      <h2>Listen to this 🎤</h2>
      <audio controls src="sounds/voice.mp3"></audio>`;
  }

  if (type === "memories") {
    clickSound?.play();

    content.innerHTML = `
      <h2>Our Memories 📸</h2>
      <div class="slideshow-container">

        <div class="slide fade">
          <div class="heart-frame">
            <img src="images/you1.jpg" onclick="heartBurst(event)">
          </div>
          <div class="caption-text">You 💗</div>
        </div>

        <div class="slide fade">
          <div class="heart-frame">
            <img src="images/you2.jpg" onclick="heartBurst(event)">
          </div>
          <div class="caption-text">You again 😊</div>
        </div>

        <div class="slide fade">
          <div class="heart-frame">
            <img src="images/you3.jpg" onclick="heartBurst(event)">
          </div>
          <div class="caption-text">You being awesome 😍</div>
        </div>

        <div class="slide fade">
          <div class="heart-frame">
            <img src="images/us.jpg" onclick="heartBurst(event)">
          </div>
          <div class="caption-text">Us 💖</div>
        </div>

        <div class="slide fade">
          <div class="heart-frame">
            <img src="images/me1.jpg" onclick="heartBurst(event)">
          </div>
          <div class="caption-text">Me 😎</div>
        </div>

        <div class="slide fade">
          <div class="heart-frame">
            <img src="images/me2.jpg" onclick="heartBurst(event)">
          </div>
          <div class="caption-text">Me again 😂</div>
        </div>

        <div class="slide fade">
          <div class="heart-frame">
            <img src="images/me3.jpg" onclick="heartBurst(event)">
          </div>
          <div class="caption-text">Me silly 😁</div>
        </div>

        <a class="prev" onclick="changeSlide(-1)">❮</a>
        <a class="next" onclick="changeSlide(1)">❯</a>
      </div>

      <div class="dots-container">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
        <span class="dot" onclick="currentSlide(4)"></span>
        <span class="dot" onclick="currentSlide(5)"></span>
        <span class="dot" onclick="currentSlide(6)"></span>
        <span class="dot" onclick="currentSlide(7)"></span>
      </div>`;

    enableSwipe();

    slideIndex = 1;
    showSlides(slideIndex);
  }

  if (type === "kiss") {
  kissSound?.play();
  content.innerHTML = `
    <h2>Here’s your kiss 😘 😘 😘 😘 😘 😘 One for your smile One for your eyes And the rest just because you’re you 💕</h2>
    <p>😘 😘 😘 😘 😘</p>
    <h1>💋💋💋</h1>`;
}

};
window.openWhen = function () {
  trackExplore();
  stopLoveGame();
  const content = document.getElementById("content");

  content.innerHTML = `
    <h2>Open When… 💌</h2>

    <button onclick="showLetter('sad')">Open when you're sad</button>
    <button onclick="showLetter('miss')">Open when you miss me</button>
    <button onclick="showLetter('sleep')">Open when you can't sleep</button>
  `;
};

window.showLetter = function (type) {
  resetPage();
  const messages = {
    sad: "Hey… I’m always here for you. Even on bad days, you’re stronger than you think 💗 and here's an helpline number for you (only for you😋): 8086542081🌝 Don’t hesitate to call me if you need to hear my voice.",
    miss: "If you miss me, just remember I’m thinking of you too every second,im always with you my love 💞   ",
    sleep: "Close your eyes and imagine me hugging you. Sleep peacefully 😴💖 ,Let my love be your cozy blanket and drift into sweet dreams. Don’t hesitate to call me if you want to talk or just hear my voice. 🌙💤   "
  };

  document.getElementById("content").innerHTML =
    `<h2>${messages[type]}</h2>`;
};

/* ---------- SLIDESHOW ---------- */
window.changeSlide = function (n) {
  resetPage();
  showSlides((slideIndex += n));
};

window.currentSlide = function (n) {
  showSlides((slideIndex = n));
};

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (!slides.length) return;

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let s of slides) s.style.display = "none";
  for (let d of dots) d.classList.remove("active");

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1]?.classList.add("active");
}

/* ---------- SWIPE ---------- */
function enableSwipe() {
  const container = document.querySelector(".slideshow-container");
  if (!container) return;

  let startX = 0;

  container.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  container.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    if (endX < startX - 40) changeSlide(1);
    if (endX > startX + 40) changeSlide(-1);
  });
}

/* ---------- TIMELINE ---------- */
window.showTimeline = function () {
  trackExplore();
  stopLoveGame();
  clickSound?.play();

  const content = document.getElementById("content");
  const tl = document.getElementById("timeline");

  if (!content || !tl) return;

  content.innerHTML = "";
  tl.classList.remove("hidden");

  tl.innerHTML = `
    <div class="timeline-event">
      <div class="timeline-date">2025-10-1</div>
      <img src="images/memory0.jpg" class="timeline-img">
      <div class="timeline-caption">we start texing 💗</div>
    </div>

    <div class="timeline-event">
      <div class="timeline-date">2025-10-3</div>
      <img src="images/memory4.jpg" class="timeline-img">
      <div class="timeline-caption">i heard mah baby singing 💗</div>
    </div>

    <div class="timeline-event">
      <div class="timeline-date">2025-10-10</div>
      <img src="images/memory1.jpg" class="timeline-img">
      <div class="timeline-caption">we start dating 💗</div>
    </div>

    <div class="timeline-event">
      <div class="timeline-date">2025-11-21</div>
      <img src="images/memory2.jpg" class="timeline-img">
      <div>it was my birthday and u made it special 🥰</div>
    </div>

    <div class="timeline-event">
      <div class="timeline-date">2026-01-01</div>
      <img src="images/memory3.jpg" class="timeline-img">
      <div class="timeline-caption">starting a year together ✨</div>
    </div>

    <button class="back-tl-btn" onclick="backFromTimeline()">⟵ Back</button>
  `;
};

window.backFromTimeline = function () {
  clickSound?.play();
  document.getElementById("timeline")?.classList.add("hidden");
};

/* ---------- HOME ---------- */
window.goHome = function () {
  resetPage();
  stopLoveGame();
  document.getElementById("surprise-page")?.classList.add("hidden");
  document.getElementById("main-page")?.classList.remove("hidden");
  document.getElementById("content").innerHTML = "";
  document.getElementById("timeline")?.classList.add("hidden");
};

/* ---------- HEART BURST ---------- */
window.heartBurst = function (e) {
  const heart = document.createElement("div");
  heart.className = "heartexplosion";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
};

/* ---------- LOVE METER ---------- */
window.loveMeter = function () {
  trackExplore();
  resetPage();
  stopLoveGame();
  const percent = Math.floor(Math.random() * 11) + 90;
  document.getElementById("content").innerHTML =
    `<h2>Love compatibility: ${percent}% 💖</h2>`;
};

/* ---------- FLOWER RAIN ---------- */
window.flowerRain = function () {
  trackExplore();
  stopLoveGame();
  resetPage();
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const flower = document.createElement("div");
      flower.innerHTML = "🌹";
      flower.style.position = "fixed";
      flower.style.left = Math.random() * window.innerWidth + "px";
      flower.style.top = "-20px";
      flower.style.fontSize = "24px";
      flower.style.transition = "top 3s linear";
      document.body.appendChild(flower);

      setTimeout(() => {
        flower.style.top = window.innerHeight + "px";
      }, 50);

      setTimeout(() => flower.remove(), 3000);
    }, i * 100);
  }
};
/* ===== COUPLE QUIZ FIX ===== */

/* ===== COUPLE QUIZ FIX ===== */

window.coupleQuiz = function () {
  trackExplore();
  stopLoveGame();
  resetPage();
  const content = document.getElementById("content");

  if (!content) {
    alert("Content div not found!");
    return;
  }

  content.innerHTML = `
    <h2>Couple Quiz 💘</h2>
    <p>Who loves who more?</p>
    <button onclick="quizAnswer()">You love me more</button>
    <button onclick="quizAnswer()">I love you more</button>
  `;
};

window.quizAnswer = function () {
  document.getElementById("content").innerHTML =
    "<h2>Correct answer: We both love each other infinitely 💖</h2>";
};



/* ---------- SECRET MESSAGE ---------- */
window.secretMessage = function () {
  trackExplore();
  resetPage();
  stopLoveGame();
  const code = prompt("Enter the secret word:");
  if (code === "muawahhh") {
    document.getElementById("content").innerHTML =
      "<h2> you really thought i keep secrets from you ?🧐 ,i dont hide anything from you babe 😽💗.anddddd now you are officially  charged with stealing my heart. sentence : lifetime of love ,hugs and annoying me😁😝</h2>";
  } else {
    alert("Wrong secret 😜");
  }
};

/* ---------- COUNTDOWN ---------- */
window.countdown = function () {
  trackExplore();
  resetPage();
  stopLoveGame();
  const target = new Date("Oct 10, 2026").getTime();
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById("content").innerHTML =
      "<h2>Happy Anniversary!!! 💘</h2>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("content").innerHTML =
    `<h2>${days} days until our 1 year anniversary 💘</h2>`;
};
window.toggleMusic = function () {
  const song = document.getElementById("loveSong");
  const btn = document.querySelector("#musicPlayer button");
  

  if (song.paused) {
    song.play();
    btn.textContent = "⏸";
  } else {
    song.pause();
    btn.textContent = "▶";
  }
};
/* ---------- LOVE CATCH GAME ---------- */

let gameInterval;
let fallIntervals = [];

window.startLoveGame = function () {
  trackExplore();
  resetPage();
  const content = document.getElementById("content");
  if (!content) return;


  // clear old content + stop previous game
  stopLoveGame();

  content.innerHTML = `
    <h2>Love Catch Game 🎯</h2>
    <p>Score: <span id="score">0 / 100</span></p>

    <div id="gameArea" style="
      position:relative;
      width:100%;
      max-width:400px;
      height:320px;
      margin:auto;
      border:2px solid pink;
      overflow:hidden;
    ">
      <div id="basket" style="
        position:absolute;
        bottom:0;
        left:150px;
        font-size:40px;
      ">🧺</div>
    </div>

    <button id="restartBtn">Restart 🔄</button>
  `;

  let score = 0;
  let combo = 0;

  const basket = document.getElementById("basket");
  const area = document.getElementById("gameArea");
  const scoreDisplay = document.getElementById("score");
  const restartBtn = document.getElementById("restartBtn");

  const catchSound = new Audio("sounds/catch.mp3");

  let basketX = basket.offsetLeft;

  /* ---------- DESKTOP CONTROL ---------- */
  document.onkeydown = e => {
    if (e.key === "ArrowLeft") basketX -= 25;
    if (e.key === "ArrowRight") basketX += 25;

    basketX = Math.max(
      0,
      Math.min(basketX, area.offsetWidth - basket.offsetWidth)
    );

    basket.style.left = basketX + "px";
  };

  /* ---------- MOBILE CONTROL ---------- */
  area.addEventListener("touchmove", e => {
    const touchX = e.touches[0].clientX;
    const rect = area.getBoundingClientRect();

    basketX = touchX - rect.left - basket.offsetWidth / 2;

    basketX = Math.max(
      0,
      Math.min(basketX, area.offsetWidth - basket.offsetWidth)
    );

    basket.style.left = basketX + "px";
  });

  /* ---------- HEART SPAWN ---------- */
  /* ---------- HEART SPAWN (DIFFICULTY INCREASES) ---------- */

let spawnRate = 800;
let fallSpeed = 4;

function spawnHeart() {
  const heart = document.createElement("div");
  heart.textContent = "❤️";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * (area.clientWidth - 30) + "px";
  heart.style.top = "0px";
  heart.style.fontSize = "30px";

  area.appendChild(heart);

  const fall = setInterval(() => {
    heart.style.top = heart.offsetTop + fallSpeed + "px";

    // caught
    if (
      heart.offsetTop > 260 &&
      Math.abs(heart.offsetLeft - basket.offsetLeft) < 40
    ) {
      score++;
      combo++;
      scoreDisplay.textContent = score + " / 100";

      heart.remove();
      clearInterval(fall);

      // 🔥 increase difficulty every 5 points
      if (score % 5 === 0) {
        fallSpeed += 0.7;                 // fall faster
        spawnRate = Math.max(250, spawnRate - 60); // spawn faster
      }

      if (score >= 100) endGame(true);
    }

    // missed
    if (heart.offsetTop > 320) {
      combo = 0;
      heart.remove();
      clearInterval(fall);
    }
  }, 30);

  fallIntervals.push(fall);
}

// spawner loop that adapts to spawnRate
function spawner() {
  spawnHeart();
  gameInterval = setTimeout(spawner, spawnRate);
}

spawner();


  /* ---------- END GAME ---------- */
  function endGame(win) {
    stopLoveGame();

    const message = document.createElement("div");
    message.style.position = "absolute";
    message.style.top = "50%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, -50%)";
    message.style.background = "rgba(0,0,0,0.7)";
    message.style.color = "white";
    message.style.padding = "20px";
    message.style.borderRadius = "10px";
    message.style.textAlign = "center";

    message.innerHTML = win
      ? "💖 You Win! Love Master! 💖"
      : "Game Over 💔";

    area.appendChild(message);
  }

  /* ---------- RESTART ---------- */
  restartBtn.onclick = () => {
    startLoveGame();
  };
};

/* ---------- STOP GAME CLEANLY ---------- */
function stopLoveGame() {
  clearInterval(gameInterval);

  fallIntervals.forEach(i => clearInterval(i));
  fallIntervals = [];

  document.onkeydown = null;
}
function resetPage() {
document.getElementById("timeline")?.classList.add("hidden");
}


});
