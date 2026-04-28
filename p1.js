const NICHES = [
  { id:"gym",          name:"Gym & Weightlifting",  color:"#ff6b35,#f7931e", desc:"Forge elite strength through progressive overload, compound lifts, and disciplined recovery.",             img:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&fit=crop" },
  { id:"yoga",         name:"Yoga",                  color:"#7b2ff7,#f107a3", desc:"Master breath, flexibility and mindfulness through structured asana and meditation practice.",             img:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&fit=crop" },
  { id:"running",      name:"Running",               color:"#f7971e,#ffd200", desc:"Build unstoppable endurance through aerobic base training, tempo runs, and progressive mileage.",         img:"https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&fit=crop" },
  { id:"hiit",         name:"HIIT",                  color:"#eb3349,#f45c43", desc:"Ignite your metabolism with high-intensity intervals that torch fat and build explosive fitness.",          img:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&fit=crop" },
  { id:"cycling",      name:"Cycling",               color:"#11998e,#38ef7d", desc:"Conquer miles and mountains through structured power training and endurance builds on two wheels.",        img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&fit=crop" },
  { id:"martial_arts", name:"Martial Arts",          color:"#c94b4b,#4b134f", desc:"Develop discipline, precision, and combat flow through structured kata, sparring, and conditioning.",      img:"https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&fit=crop" },
  { id:"swimming",     name:"Swimming",              color:"#1a6dff,#00d2ff", desc:"Achieve full-body aquatic conditioning through stroke refinement and open-water endurance.",               img:"https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&fit=crop" },
  { id:"calisthenics", name:"Calisthenics",          color:"#f46b45,#eea849", desc:"Own your bodyweight through progressions toward muscle-ups, planches, and human flags.",                  img:"https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&fit=crop" },
  { id:"crossfit",     name:"CrossFit",              color:"#ff416c,#ff4b2b", desc:"Achieve functional fitness through constantly varied, high-intensity workouts across all energy pathways.", img:"https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?w=800&fit=crop" },
  { id:"pilates",      name:"Pilates",               color:"#9d50bb,#6e48aa", desc:"Refine posture, core stability and precise movement control through Pilates method training.",             img:"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&fit=crop" },
  { id:"dance",        name:"Dance & Flow",          color:"#f953c6,#b91d73", desc:"Sync rhythm, coordination, and artistry through structured dance training and freestyle flow.",             img:"https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&fit=crop" },
  { id:"tennis",       name:"Tennis",                color:"#d4fc79,#96e6a1", desc:"Dominate the court with precision groundstrokes, net play, and explosive lateral agility.",                img:"https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&fit=crop" },
  { id:"football",     name:"Football / Soccer",    color:"#1d976c,#93f9b9", desc:"Build elite stamina, tactical intelligence, and explosive speed for the beautiful game.",                   img:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&fit=crop" },
  { id:"basketball",   name:"Basketball",            color:"#f76d1e,#fba919", desc:"Elevate your vertical, sharpen your handles, and dominate both ends of the floor.",                       img:"https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&fit=crop" },
  { id:"powerlifting", name:"Powerlifting",          color:"#4e4376,#2b5876", desc:"Push absolute strength limits in the squat, bench press, and deadlift with precise programming.",          img:"https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&fit=crop" },
  { id:"bodybuilding", name:"Bodybuilding",          color:"#8e2de2,#4a00e0", desc:"Sculpt aesthetic muscle and definition through hypertrophy training and strategic nutrition.",              img:"https://upload.wikimedia.org/wikipedia/commons/0/05/Arnold_Schwarzenegger_1974.jpg" },
  { id:"mobility",     name:"Mobility & Recovery",  color:"#43c6ac,#191654", desc:"Restore and expand your full range of motion through targeted mobility drills and recovery protocols.",    img:"https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&fit=crop" },
  { id:"rock_climbing",name:"Rock Climbing",         color:"#8360c3,#2ebf91", desc:"Solve vertical puzzles with grip strength, precision footwork, and mental resilience.",                   img:"https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&fit=crop" },
  { id:"mma",          name:"MMA / Combat",          color:"#b21f1f,#1a1a1a", desc:"Integrate striking, grappling, and conditioning into a complete fighting system.",                         img:"https://images.unsplash.com/photo-1549476464-37392f717541?w=800&fit=crop" },
  { id:"volleyball",   name:"Volleyball",            color:"#f7971e,#ffd200", desc:"Build explosive jumps, sharp reflexes, and court IQ for high-level volleyball performance.",               img:"https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&fit=crop" },
  { id:"skiing",       name:"Skiing / Winter",       color:"#2980b9,#6dd5fa", desc:"Build alpine power, dynamic balance, and slope confidence across all conditions.",                         img:"https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800&fit=crop" },
  { id:"boxing",       name:"Boxing",                color:"#373b44,#4286f4", desc:"Sharpen your jab, develop power combinations, and build elite boxing conditioning.",                       img:"https://images.unsplash.com/photo-1517438322307-e67111335449?w=800&fit=crop" },
  { id:"golf",         name:"Golf",                  color:"#3d9970,#26d0ce", desc:"Refine your swing mechanics, course management, and mental focus for lower scores.",                       img:"https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&fit=crop" },
  { id:"rowing",       name:"Rowing",                color:"#005c97,#363795", desc:"Synchronize full-body power and endurance through structured on-water and erg-based training.",            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Harvard_Rowing_Crew_at_Henley_2004_-2.JPG/960px-Harvard_Rowing_Crew_at_Henley_2004_-2.JPG" },
  { id:"surfing",      name:"Surfing",               color:"#1a6dff,#00d2ff", desc:"Read the ocean, master your pop-up, and ride with power through progressive surf training.",              img:"https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&fit=crop" },
  { id:"gymnastics",   name:"Gymnastics",            color:"#f7971e,#ffd200", desc:"Achieve strength, flexibility, and body mastery through structured gymnastics progression.",               img:"https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&fit=crop" },
  { id:"track_field",  name:"Track & Field",         color:"#f09819,#edde5d", desc:"Chase personal records through scientifically structured sprint, jump, and throw programming.",           img:"https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?w=800&fit=crop" },
  { id:"baseball",     name:"Baseball",              color:"#c94b4b,#4b134f", desc:"Develop diamond IQ, explosive swing mechanics, and elite fielding through targeted drills.",               img:"https://images.unsplash.com/photo-1508344928928-7165b67de128?w=800&fit=crop" },
  { id:"cricket",      name:"Cricket",               color:"#1d976c,#93f9b9", desc:"Build batting technique, bowling accuracy, and the fitness for sustained elite performance.",              img:"https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&fit=crop" },
  { id:"badminton",    name:"Badminton",             color:"#f46b45,#eea849", desc:"Develop lightning reflexes, explosive footwork, and deceptive shot-making.",                              img:"https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&fit=crop" },
  { id:"triathlons",   name:"Triathlons",            color:"#005c97,#363795", desc:"Train across all three disciplines — swim, bike, run — for peak multi-sport endurance.",                  img:"https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&fit=crop" },
  { id:"strongman",    name:"Strongman",             color:"#4e4376,#2b5876", desc:"Build atlas-level functional strength through event-specific training in carries, pulls, and lifts.",     img:"https://images.unsplash.com/photo-1581009137042-c552e485697a?w=800&fit=crop" },
  { id:"hockey",       name:"Hockey",                color:"#2980b9,#6dd5fa", desc:"Combine skating power, stick skills, and team strategy for elite ice or field hockey.",                   img:"https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800&fit=crop" }
];

const DURATIONS = [
  { id: "1_week",   label: "1 Week",   sub: "Quick Start", color: "#67e8f9",  weeks: 1  },
  { id: "1_month",  label: "1 Month",  sub: "Foundation",  color: "#818cf8",  weeks: 4  },
  { id: "3_months", label: "3 Months", sub: "Progress",    color: "#fde047",  weeks: 12 },
  { id: "6_months", label: "6 Months", sub: "Transform",   color: "#fb7185",  weeks: 24 },
  { id: "1_year",   label: "1 Year",   sub: "Master",      color: "#ccff00",  weeks: 52 }
];

const LOADING_MSGS = [
  "Analyzing your training profile...",
  "Tailoring plan to your requirements...",
  "Designing your personalized phases...",
  "Crafting your weekly schedule...",
  "Setting your milestones...",
  "Finalizing your roadmap..."
];
const API_BASE = "/api";

let state = { niche: "", level: "beginner", duration: "1_month", goal: "", step: 1, plan: null };
let loadingInterval = null;

function showPage(id) {
  const current = document.querySelector(".page.active");
  const next = document.getElementById(id);
  if (!next) return;
  if (current && current !== next) {
    current.style.transition = "opacity 0.2s ease";
    current.style.opacity = "0";
    setTimeout(() => {
      current.classList.remove("active");
      current.style.opacity = "";
      next.classList.add("active");
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 200);
  } else {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    next.classList.add("active");
    window.scrollTo({ top: 0, behavior: "instant" });
  }
}

function initParticles() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let mouse = { x: -9999, y: -9999 };
  const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight };
  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  const cols = ["rgba(200,255,0,", "rgba(96,176,255,", "rgba(251,146,60,", "rgba(154,106,255,", "rgba(103,232,249,", "rgba(244,114,182,"];
  const pts = Array.from({ length: 30 }, () => ({
    x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
    vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35,
    r: Math.random() * 2.5 + .5, a: Math.random() * .5 + .1,
    c: cols[Math.floor(Math.random() * cols.length)],
    pulse: Math.random() * Math.PI * 2, pulseSpeed: Math.random() * 0.025 + 0.01
  }));
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach(p => {
      const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
      const md2 = mdx * mdx + mdy * mdy;
      if (md2 < 10000) { const md = Math.sqrt(md2); const f = (100 - md) / 100 * 0.3; p.vx += mdx / md * f; p.vy += mdy / md * f; }
      p.vx *= 0.995; p.vy *= 0.995;
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      p.pulse += p.pulseSpeed;
      const pr = p.r * (1 + 0.35 * Math.sin(p.pulse));
      ctx.beginPath(); ctx.arc(p.x, p.y, pr, 0, Math.PI * 2);
      ctx.fillStyle = p.c + p.a + ")"; ctx.fill();
    });
    const thresholdSq = 10000; ctx.lineWidth = 0.5;
    for (let i = 0; i < pts.length; i++) {
      const p1 = pts[i];
      for (let j = i + 1; j < pts.length; j++) {
        const p2 = pts[j]; const dx = p1.x - p2.x, dy = p1.y - p2.y;
        if (Math.abs(dx) > 100 || Math.abs(dy) > 100) continue;
        const distSq = dx * dx + dy * dy;
        if (distSq < thresholdSq) {
          ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(200,255,0,${(1 - distSq / thresholdSq) * 0.12})`; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  };
  draw();
}

function renderNiches() {
  const g = document.getElementById("niches-grid");
  if (!g) return;
  g.innerHTML = NICHES.map((n) => {
    const [c1, c2] = n.color.split(",");
    return `<div class="niche-card" data-id="${n.id}" onclick="selectNiche('${n.id}')" style="background:linear-gradient(135deg,${c1},${c2});">
    <div class="niche-card-bg" style="background-image:url('${n.img}');background-size:cover;background-position:center;background-repeat:no-repeat;position:absolute;inset:0;opacity:0.75;transition:transform 0.5s ease,opacity 0.4s;"></div>
    <div class="niche-card-overlay" style="position:absolute;inset:0;background:linear-gradient(to top,rgba(3,3,5,0.92) 0%,rgba(3,3,5,0.3) 60%,transparent 100%);z-index:1;"></div>
    <div class="niche-content-wrap" style="position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:20px;z-index:2;">
      <div class="niche-name">${n.name}</div>
      <div class="niche-info-bar">
        <div class="nib-inner">
          <p>${n.desc}</p>
          <div class="nib-cta">Select Protocol →</div>
        </div>
      </div>
    </div>
  </div>`;
  }).join("");
}

function renderDurations() {
  const dg = document.getElementById("durations-grid");
  if (!dg) return;
  dg.innerHTML = DURATIONS.map((d, i) => `<div class="dur-card ${state.duration === d.id ? 'selected' : ''}" data-dur="${d.id}" onclick="selectDuration('${d.id}')" style="animation-delay:${i * 0.05}s${state.duration === d.id ? `;border-color:${d.color};background:rgba(${hexToRgb(d.color)},0.1)` : ''}">
    <div class="dur-label" style="${state.duration === d.id ? `color:${d.color}` : ''}">${d.label}</div>
    <div class="dur-sublabel" style="${state.duration === d.id ? `color:${d.color}` : ''}">${d.sub}</div>
    <div class="dur-dot" style="background:${d.color}"></div>
  </div>`).join("");
}

function renderLevels() {
  const lg = document.getElementById("levels-grid");
  if (!lg) return;
  const LEVELS = [
    { id: "beginner", name: "Beginner", desc: "Just starting out. Learning foundations and building habits.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="30" height="30"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>', bg: "rgba(99,179,237,0.12)", color: "#63b3ed" },
    { id: "intermediate", name: "Intermediate", desc: "Trained consistently for 6+ months. Ready to push harder.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="30" height="30"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>', bg: "rgba(253,224,71,0.12)", color: "#fde047" },
    { id: "advanced", name: "Advanced", desc: "Years of dedicated training. Optimizing for peak performance.", icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="30" height="30"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>', bg: "rgba(204,255,0,0.12)", color: "#ccff00" }
  ];
  lg.innerHTML = LEVELS.map((l, i) => `<div class="level-card ${state.level === l.id ? 'selected' : ''}" data-level="${l.id}" onclick="selectLevel('${l.id}')" style="animation-delay:${i * 0.1}s${state.level === l.id ? `;background:linear-gradient(135deg,rgba(${hexToRgb(l.color)},0.08),var(--card));border-color:rgba(${hexToRgb(l.color)},0.35)` : ''}">
    <div class="level-icon" style="background:${l.bg};color:${l.color}">${l.icon}</div>
    <div class="level-name" style="color:${l.color}">${l.name}</div>
    <div class="level-desc">${l.desc}</div>
  </div>`).join("");
}

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroImg = document.querySelector(".hero-scroll-image");
  if (heroImg) heroImg.style.transform = `translate3d(0, ${scrolled * 0.3}px, 0) scale(1.1)`;
  const heroText = document.querySelector(".hero-text-content");
  if (heroText) { heroText.style.opacity = Math.max(0, 1 - scrolled / 500); heroText.style.transform = `translateY(${scrolled * 0.3}px)`; }
}, { passive: true });

function initWizard() {
  renderNiches();
  renderDurations();
  renderLevels();
  setStep(1);
  applyRevealAnimations();
}

function hexToRgb(hex) {
  if (!hex || hex[0] !== "#") return "100,100,100";
  return `${parseInt(hex.slice(1, 3), 16)},${parseInt(hex.slice(3, 5), 16)},${parseInt(hex.slice(5, 7), 16)}`;
}

function selectNiche(id) {
  state.niche = id;
  document.querySelectorAll(".niche-card").forEach(c => c.classList.toggle("selected", c.dataset.id === id));
  setTimeout(() => setStep(2), 350);
}

function selectLevel(l) {
  state.level = l;
  document.querySelectorAll(".level-card").forEach(c => c.classList.toggle("selected", c.dataset.level === l));
  setTimeout(() => setStep(3), 300);
}

function selectDuration(id) {
  state.duration = id;
  const d = DURATIONS.find(x => x.id === id);
  document.querySelectorAll(".dur-card").forEach(c => {
    const isSelected = c.dataset.dur === id;
    c.classList.toggle("selected", isSelected);
    const lbl = c.querySelector(".dur-label"), slbl = c.querySelector(".dur-sublabel");
    if (isSelected && d) {
      c.style.borderColor = d.color; c.style.background = `rgba(${hexToRgb(d.color)},0.1)`;
      if (lbl) lbl.style.color = d.color; if (slbl) slbl.style.color = d.color;
    } else {
      c.style.borderColor = ""; c.style.background = "";
      if (lbl) lbl.style.color = ""; if (slbl) slbl.style.color = "";
    }
  });
}

function setStep(n) {
  state.step = n;
  document.querySelectorAll(".step-content").forEach(s => s.classList.remove("active"));
  const el = document.getElementById("step-" + n);
  if (el) {
    el.classList.add("active");
    el.querySelectorAll(".niche-card,.level-card,.dur-card").forEach((c, i) => {
      c.style.opacity = "0"; c.style.transform = "translateY(16px)";
      setTimeout(() => { c.style.transition = "opacity 0.3s ease, transform 0.3s ease"; c.style.opacity = "1"; c.style.transform = "translateY(0)"; setTimeout(() => { c.style.transition = ""; }, 350); }, i * 30 + 50);
    });
  }
  updateProgress(n);
  const backBtn = document.getElementById("wizard-back-btn");
  if (backBtn) backBtn.classList.toggle("hidden", n <= 1 || n >= 5);
  if (n === 4) updateSummary();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function prevStep() { if (state.step > 1) setStep(state.step - 1); }

function updateProgress(n) {
  document.querySelectorAll(".progress-seg").forEach((s, i) => {
    s.className = "progress-seg" + (i + 1 < n ? " done" : i + 1 === n ? " active" : "");
  });
}

function updateSummary() {
  const n = NICHES.find(x => x.id === state.niche);
  const d = DURATIONS.find(x => x.id === state.duration);
  const g = (document.getElementById("goal-input") || {}).value || "";
  const el = document.getElementById("plan-summary-text");
  if (el) el.innerHTML = `<strong>Your plan:</strong> ${n ? n.name : state.niche} &middot; ${state.level} &middot; ${d ? d.label : state.duration}${g.trim() ? ` <span style="color:var(--primary)">with custom goal</span>` : ""}`;
  const badge = document.getElementById("goal-active-badge");
  if (badge) badge.classList.toggle("visible", !!g.trim());
}

async function doGenerate() {
  state.goal = ((document.getElementById("goal-input") || {}).value || "").trim();
  document.querySelectorAll(".step-content").forEach(s => s.classList.remove("active"));
  const loadingEl = document.getElementById("loading-screen");
  if (loadingEl) loadingEl.classList.add("active");
  const backBtn = document.getElementById("wizard-back-btn");
  if (backBtn) backBtn.classList.add("hidden");
  updateProgress(0);
  let msgIdx = 0;
  const msgEl = document.getElementById("loading-msg");
  if (msgEl) msgEl.textContent = LOADING_MSGS[0];
  const goalBadge = document.getElementById("loading-goal-badge");
  const goalText = document.getElementById("loading-goal-text");
  if (goalBadge && goalText && state.goal) {
    goalText.textContent = state.goal.slice(0, 60) + (state.goal.length > 60 ? "..." : "");
    goalBadge.style.display = "flex";
  } else if (goalBadge) {
    goalBadge.style.display = "none";
  }
  loadingInterval = setInterval(() => {
    msgIdx = (msgIdx + 1) % LOADING_MSGS.length;
    if (msgEl) { msgEl.style.opacity = 0; setTimeout(() => { msgEl.textContent = LOADING_MSGS[msgIdx]; msgEl.style.opacity = 1; }, 300); }
  }, 1800);
  try {
    const res = await fetch(API_BASE + "/training/generate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ niche: state.niche, level: state.level, duration: state.duration, goal: state.goal }) });
    const plan = await res.json(); clearInterval(loadingInterval); state.plan = plan; renderPlan(plan); showPage("page-plan");
  } catch (e) { clearInterval(loadingInterval); state.plan = getDemoPlan(); renderPlan(state.plan); showPage("page-plan"); }
}

const PHASE_COLORS = ["#ccff00", "#63b3ed", "#9a6aff", "#fb923c", "#67e8f9"];
const DAY_COLORS = { monday: "#63b3ed", tuesday: "#9a6aff", wednesday: "#ccff00", thursday: "#fb923c", friday: "#f472b6", saturday: "#67e8f9", sunday: "#fb7185" };

// ─── FIX 1 & 2: getDemoPlan now respects duration AND customizes based on goal ───
function getDemoPlan() {
  const n = NICHES.find(x => x.id === state.niche) || NICHES[0];
  const durObj = DURATIONS.find(x => x.id === state.duration) || DURATIONS[1];
  const totalWeeks = durObj.weeks;
  const hasGoal = state.goal && state.goal.trim().length > 0;

  // Build phases based on duration
  let phases = [];
  if (totalWeeks === 1) {
    // 1 Week — single phase, day-by-day detail
    phases = [
      {
        name: "Week 1 — Jump-Start Protocol",
        weeks: "Week 1",
        description: `A focused single-week blitz for ${n.name}. ${hasGoal ? `Every session is structured around your goal: ${state.goal}.` : "Each day targets a key component so you walk away with a clear baseline and immediate momentum."} Expect 4–5 sessions covering all major movement patterns. Track your reps and weights so you have a benchmark to beat next cycle.`,
        focus: ["Baseline Assessment", "Technique", "Habit Formation"],
        exercises: [
          { name: "Primary Compound Movement", sets: "3", reps: "10-12", rest: "90s", notes: "Establish your starting weight — it should feel challenging by rep 10" },
          { name: "Secondary Compound Movement", sets: "3", reps: "10-12", rest: "75s", notes: "Focus on full range of motion" },
          { name: "Isolation Exercise A", sets: "3", reps: "12-15", rest: "45s", notes: "Mind-muscle connection" },
          { name: "Isolation Exercise B", sets: "3", reps: "12-15", rest: "45s", notes: "Control the eccentric phase" },
          { name: "Core Stability Work", sets: "3", reps: "30-45s", rest: "30s", notes: "Brace through entire set" },
          { name: "Mobility & Cool-Down", sets: "1", reps: "10 min", rest: "—", notes: "Hold each stretch 30s" }
        ]
      }
    ];
  } else if (totalWeeks <= 4) {
    // 1 Month — 2 phases
    phases = [
      {
        name: "Foundation Phase",
        weeks: "Weeks 1–2",
        description: `Establish your movement baseline and build consistency. ${hasGoal ? `Your goal (${state.goal}) will inform exercise selection — we prioritize movements that directly transfer to your target outcome.` : `The first two weeks of ${n.name} training focus on perfect technique before adding load.`} Train 3–4 days per week. Every session ends with 10 minutes of dedicated mobility work. Keep a training log from day one.`,
        focus: ["Technique Mastery", "Baseline Strength", "Habit Formation", "Mobility"],
        exercises: [
          { name: "Primary Compound A", sets: "3", reps: "12", rest: "90s", notes: "Video your sets — check form weekly" },
          { name: "Primary Compound B", sets: "3", reps: "12", rest: "90s", notes: "Use a spotter if near max effort" },
          { name: "Unilateral Exercise", sets: "3", reps: "10 each", rest: "60s", notes: "Match left and right side strength" },
          { name: "Pull Movement", sets: "3", reps: "12-15", rest: "60s", notes: "Full scapular retraction" },
          { name: "Core Circuit", sets: "3", reps: "45s", rest: "20s", notes: "No rest between exercises in circuit" },
          { name: "Stretching Routine", sets: "1", reps: "10 min", rest: "—", notes: "Prioritize hips, thoracic spine, ankles" }
        ]
      },
      {
        name: "Build Phase",
        weeks: "Weeks 3–4",
        description: `Now that movement patterns are locked in, we increase volume and introduce progressive overload. ${hasGoal ? `Each session is tuned to your stated goal: ${state.goal}. Adjust intensity if you feel you are ahead of or behind the programmed targets.` : "Add 2.5–5% load to your compound lifts each week. Aim for 4 training days this phase."}  Recovery matters — aim for 7–8 hours of sleep and stay on top of nutrition.`,
        focus: ["Progressive Overload", "Volume Increase", "Strength Endurance"],
        exercises: [
          { name: "Primary Compound A", sets: "4", reps: "8-10", rest: "2 min", notes: "Increase weight from last week if all reps were clean" },
          { name: "Primary Compound B", sets: "4", reps: "8-10", rest: "2 min", notes: "Controlled tempo: 2s down, pause, 1s up" },
          { name: "Accessory Movement A", sets: "3", reps: "12", rest: "75s", notes: "Choose a weak-point exercise" },
          { name: "Accessory Movement B", sets: "3", reps: "12", rest: "75s", notes: "Superset with Accessory A if short on time" },
          { name: "Loaded Core", sets: "3", reps: "10-12", rest: "45s", notes: "Add external resistance when bodyweight is easy" },
          { name: "HIIT Finisher", sets: "5", reps: "30s on / 30s off", rest: "—", notes: "Optional — skip on heavy leg days" }
        ]
      }
    ];
  } else if (totalWeeks <= 12) {
    // 3 Months — 3 phases
    const w1 = Math.round(totalWeeks * 0.33);
    const w2 = Math.round(totalWeeks * 0.33);
    const w3 = totalWeeks - w1 - w2;
    phases = [
      {
        name: "Foundation Phase",
        weeks: `Weeks 1–${w1}`,
        description: `The first ${w1} weeks are your non-negotiable base. ${hasGoal ? `Your goal — ${state.goal} — shapes every element: exercise selection, rep ranges, and weekly structure are all calibrated toward it.` : `For ${n.name}, this means building strength in foundational patterns, correcting imbalances, and establishing a training rhythm.`} Expect 3–4 sessions per week with moderate volume. Film your sets to review form; small technical improvements here will compound massively over the full program.`,
        focus: ["Technique Mastery", "Baseline Fitness", "Habit Formation", "Mobility"],
        exercises: [
          { name: "Main Compound Lift A", sets: "3", reps: "10-12", rest: "2 min", notes: "Focus on bracing and full range — quality over load" },
          { name: "Main Compound Lift B", sets: "3", reps: "10-12", rest: "2 min", notes: "Mirror-movement to Lift A for balance" },
          { name: "Unilateral Strength", sets: "3", reps: "10 per side", rest: "90s", notes: "Expose and close the gap between dominant and non-dominant sides" },
          { name: "Horizontal Pull", sets: "3", reps: "12-15", rest: "60s", notes: "Retract scapulae fully at the top" },
          { name: "Vertical Pull", sets: "3", reps: "8-12", rest: "90s", notes: "Avoid shrugging — depress shoulders first" },
          { name: "Anti-Rotation Core", sets: "3", reps: "12 per side", rest: "30s", notes: "Pallof press or similar — resist rotation" },
          { name: "Loaded Stretch / Mobility", sets: "3", reps: "8-10", rest: "45s", notes: "End every session with 10 min targeted mobility" }
        ]
      },
      {
        name: "Build Phase",
        weeks: `Weeks ${w1+1}–${w1+w2}`,
        description: `Phase 2 cranks volume and progressive overload. ${hasGoal ? `With your goal of "${state.goal}" in mind, we introduce specialisation — extra work on the specific qualities that matter most for your target.` : "You should now be adding weight or reps every single session. This is where the majority of adaptation happens."} Train 4 days per week. Introduce a deload in the final week of this phase (reduce volume by 40%, keep intensity) to allow super-compensation before the peak phase.`,
        focus: ["Progressive Overload", "Volume Accumulation", "Specialisation"],
        exercises: [
          { name: "Main Compound Lift A", sets: "4", reps: "6-8", rest: "2.5 min", notes: "5% heavier than last phase's best set" },
          { name: "Main Compound Lift B", sets: "4", reps: "6-8", rest: "2.5 min", notes: "Track weekly PR — celebrate every 2.5 kg added" },
          { name: "Hypertrophy Accessory A", sets: "4", reps: "10-12", rest: "75s", notes: "3-second eccentric — time under tension is king" },
          { name: "Hypertrophy Accessory B", sets: "3", reps: "15", rest: "60s", notes: "Go to within 2 reps of failure" },
          { name: "Power / Plyometric Work", sets: "4", reps: "5", rest: "2 min", notes: "Maximum intent — reset fully between reps" },
          { name: "Loaded Carry or Farmer Hold", sets: "3", reps: "40 m / 45s", rest: "90s", notes: "Keep ribs down and shoulders packed" },
          { name: "Posterior Chain Focus", sets: "3", reps: "10-12", rest: "90s", notes: "Romanian deadlift, good morning, or Nordic curl" }
        ]
      },
      {
        name: "Peak & Test Phase",
        weeks: `Weeks ${w1+w2+1}–${totalWeeks}`,
        description: `This is the culmination of your ${durObj.label} commitment. ${hasGoal ? `Every session in this phase is aimed squarely at validating your goal: ${state.goal}. This is proof-of-work time.` : "Intensity hits its highest point. Volume tapers slightly to let the nervous system express full strength."} Test your benchmarks in the final week — compare directly to your Week 1 numbers. Document everything: photos, weights, times, skill levels. This data becomes the foundation for your next program cycle.`,
        focus: ["Peak Performance", "Intensity", "Testing & Validation"],
        exercises: [
          { name: "Competition / Test Lift", sets: "3", reps: "1-3", rest: "4 min", notes: "Max effort — warm up through 5, 3, 2 reps first" },
          { name: "Explosive Power Movement", sets: "5", reps: "3", rest: "2.5 min", notes: "Max velocity every rep — drop the weight if speed slows" },
          { name: "Heavy Accessory", sets: "4", reps: "5-6", rest: "2 min", notes: "Heaviest weights used in the entire program" },
          { name: "Sprint / Interval Finisher", sets: "6", reps: "20s max effort", rest: "100s", notes: "Full speed — do not pace yourself" },
          { name: "Benchmark Complex", sets: "3", reps: "as programmed", rest: "3 min", notes: "Same complex you used in Week 1 for direct comparison" },
          { name: "Recovery & Deload Protocol", sets: "1", reps: "final 3 days", rest: "—", notes: "Light movement, foam rolling, sleep 9 hrs, refeed carbohydrates" }
        ]
      }
    ];
  } else if (totalWeeks <= 24) {
    // 6 Months — 4 phases
    const phaseWeeks = [6, 6, 6, totalWeeks - 18];
    const names = ["Foundation", "Strength Build", "Peak Accumulation", "Competition & Mastery"];
    const descs = [
      `Lock in movement quality, establish baselines, and build the aerobic and muscular foundation that the rest of the program stacks on. ${hasGoal ? `Your personal goal — ${state.goal} — is tracked from day one.` : ""} Train 3–4 days per week.`,
      `Systematically add load and volume across all primary movements. Introduce weekly periodisation — heavy, moderate, and light days. ${hasGoal ? `Your goal (${state.goal}) is central to this phase's accessory work selection.` : ""} Expect PRs on compound lifts by end of week 12.`,
      `High-volume accumulation block — the hardest weeks of the program. Up to 5 training days per week. Strategically placed deloads every 4 weeks. ${hasGoal ? `Direct skill-transfer work toward your stated goal: ${state.goal}.` : ""}`,
      `Taper, test, and validate. Volume drops 30–40%, intensity stays high. Run all benchmark tests from Phase 1. ${hasGoal ? `Final validation: have you achieved — ${state.goal}? Measure, document, and plan the next cycle.` : "Document all PRs and plan the next training cycle."}`
    ];
    const focusSets = [
      ["Technique", "Aerobic Base", "Mobility", "Habit Formation"],
      ["Strength", "Progressive Overload", "Accessory Volume", "Nutrition Dialling"],
      ["Peak Volume", "Sport Specificity", "Mental Toughness", "Recovery Protocols"],
      ["Intensity", "Testing", "Deload", "Next-Cycle Planning"]
    ];
    let weekStart = 1;
    phases = names.map((name, i) => {
      const wEnd = weekStart + phaseWeeks[i] - 1;
      const label = `Weeks ${weekStart}–${wEnd}`;
      weekStart = wEnd + 1;
      return {
        name: `Phase ${i+1}: ${name}`,
        weeks: label,
        description: descs[i],
        focus: focusSets[i],
        exercises: [
          { name: "Primary Compound Lift", sets: String(3 + i), reps: i < 2 ? "10-12" : i === 2 ? "6-8" : "3-5", rest: i < 2 ? "90s" : "2.5 min", notes: "Add 2.5–5% load each week on successful sets" },
          { name: "Secondary Compound Lift", sets: String(3 + i), reps: i < 2 ? "10-12" : "6-8", rest: "2 min", notes: "Contrast movement pattern to primary" },
          { name: "Unilateral Exercise", sets: "3", reps: "10 per side", rest: "75s", notes: "Never let dominant side compensate" },
          { name: "Pull Variation", sets: "4", reps: "8-12", rest: "90s", notes: "Upper back density work" },
          { name: "Core Stability / Anti-Flexion", sets: "3", reps: "12", rest: "30s", notes: "Progress to weighted variations by Phase 3" },
          { name: "Conditioning Finisher", sets: "4", reps: "45s on / 15s off", rest: "—", notes: "Scale intensity to the training day — high on light days, low on heavy" }
        ]
      };
    });
  } else {
    // 1 Year — 5 phases (periodised annual plan)
    const quarterNames = ["Q1: Foundation & Base Building", "Q2: Strength Accumulation", "Q3: Hypertrophy & Specialisation", "Q4: Peak Power & Annual Tests"];
    const quarterWeeks = [13, 13, 13, totalWeeks - 39];
    const quarterDescs = [
      `The first quarter establishes the structural foundation the entire year is built on. ${hasGoal ? `Your year-long goal — ${state.goal} — is introduced and a plan-of-attack is built around it.` : ""} Focus: movement quality, aerobic conditioning, corrective work, and sustainable habit formation. Test and document all baseline metrics.`,
      `Systematic strength progression across all main lifts. Introduce block periodisation: 3 weeks of loading followed by 1 deload week. ${hasGoal ? `Secondary movements are chosen to directly serve ${state.goal}.` : ""} By end of Q2 you should surpass every baseline recorded in Q1 by 15–25%.`,
      `Volume peaks here. Hypertrophy-focused rep ranges, higher weekly frequency, and sport/goal-specific skill sessions. ${hasGoal ? `This is the quarter where your goal — ${state.goal} — gets the most dedicated direct training.` : "This is your highest-volume quarter — recovery and nutrition must match the training demand."} Expect 4–5 sessions per week.`,
      `Taper and peak for your annual benchmark test. ${hasGoal ? `Final drive toward ${state.goal} — everything this year has built toward this validation.` : "Review the year, test all benchmarks, and plan Year 2."} Intensity is highest; volume drops 35%. Document everything for next year's program.`
    ];
    const quarterFocus = [
      ["Movement Foundations", "Aerobic Base", "Baseline Testing", "Habit Systems"],
      ["Strength Periodisation", "Progressive Overload", "Deload Management", "Nutrition Optimisation"],
      ["Hypertrophy", "Sport Specificity", "Frequency Increase", "Mental Conditioning"],
      ["Peak Intensity", "Annual Testing", "Taper Protocol", "Year 2 Planning"]
    ];
    let ws = 1;
    phases = quarterNames.map((name, i) => {
      const we = ws + quarterWeeks[i] - 1;
      const label = `Weeks ${ws}–${we} (${Math.round(quarterWeeks[i]/4.33)} months)`;
      ws = we + 1;
      return {
        name,
        weeks: label,
        description: quarterDescs[i],
        focus: quarterFocus[i],
        exercises: [
          { name: "Annual Priority Lift", sets: String(3 + Math.min(i, 2)), reps: i === 0 ? "10-12" : i === 1 ? "6-8" : i === 2 ? "8-12" : "3-5", rest: i < 2 ? "2 min" : "3 min", notes: `Q${i+1} target: ${i === 0 ? "perfect technique" : i === 1 ? "+15% on Q1 max" : i === 2 ? "+25% total volume" : "annual PR"}` },
          { name: "Secondary Priority Lift", sets: "4", reps: i < 3 ? "8-10" : "4-6", rest: "2 min", notes: "Mirror the primary lift's progression scheme" },
          { name: "Accessory Stack (3 exercises)", sets: "3 each", reps: "10-15", rest: "60s", notes: "Choose based on current weak point — reassess quarterly" },
          { name: "Conditioning Block", sets: "3-5", reps: "varies by quarter", rest: "varies", notes: "Q1 & Q2: aerobic base; Q3: threshold; Q4: peak intervals" },
          { name: "Skill / Sport-Specific Work", sets: "as needed", reps: "quality reps only", rest: "full", notes: "Deliberate practice — not junk volume" },
          { name: "Recovery Session (dedicated)", sets: "1", reps: "weekly", rest: "—", notes: "Foam rolling, contrast shower, sleep audit, nutrition check-in" }
        ]
      };
    });
  }

  // Build milestones scaled to duration
  const milestones = buildMilestones(totalWeeks, n.name, hasGoal, state.goal);

  // Build weekly schedule
  const weeklySchedule = buildWeeklySchedule(n.name, totalWeeks, hasGoal, state.goal);

  // Goal-customised overview
  let overview = "";
  if (hasGoal) {
    overview = `This ${durObj.label} ${state.level} ${n.name} program is fully customised around your goal: "${state.goal}". Every phase, exercise selection, and progression scheme has been calibrated to deliver that outcome within your ${durObj.label} timeframe. Follow the plan consistently and trust the process — results compound.`;
  } else {
    overview = `A comprehensive ${state.level} ${n.name.toLowerCase()} training plan structured across ${durObj.label} (${totalWeeks} week${totalWeeks > 1 ? "s" : ""}). Phases progress logically from foundation to peak performance, with built-in progressive overload, recovery, and benchmark testing at key intervals.`;
  }

  return {
    title: hasGoal
      ? `${n.name} — ${durObj.label} Custom Blueprint`
      : `${n.name} ${durObj.label} Training Blueprint`,
    niche: n.name,
    level: state.level,
    duration: state.duration,
    goal: state.goal,
    overview,
    weeklySchedule,
    phases,
    milestones,
    equipment: buildEquipment(n.id),
    tips: buildTips(n.name, hasGoal, state.goal, state.level)
  };
}

function buildMilestones(totalWeeks, nicheName, hasGoal, goal) {
  if (totalWeeks === 1) {
    return [
      { week: "Day 2", achievement: "Baseline Logged", target: "Record starting weights and movement quality scores" },
      { week: "Day 5", achievement: "First Full Week Complete", target: "All programmed sessions completed — zero skipped" },
      { week: "Day 7", achievement: "Habit Seeded", target: `${hasGoal ? `First step toward: ${goal.slice(0,40)}` : "Momentum is real — plan your next cycle"}` }
    ];
  }
  if (totalWeeks <= 4) {
    return [
      { week: "Week 1", achievement: "Baseline Established", target: "All starting benchmarks tested and recorded" },
      { week: "Week 2", achievement: "Consistency Lock-In", target: "Zero missed sessions — habit formation confirmed" },
      { week: "Week 3", achievement: "First Strength Gains", target: `${hasGoal ? `Measurable progress toward: ${goal.slice(0,40)}` : "Add weight to at least 2 lifts from Week 1"}` },
      { week: "Week 4", achievement: "Month Complete", target: "Re-test benchmarks — compare to Week 1 and plan next cycle" }
    ];
  }
  if (totalWeeks <= 12) {
    const mid = Math.round(totalWeeks / 2);
    return [
      { week: "Week 2", achievement: "Foundation Solid", target: "Technique baseline established on all primary movements" },
      { week: `Week ${Math.round(totalWeeks * 0.33)}`, achievement: "Phase 1 Complete", target: "30% volume increase from Week 1 — zero form breakdowns" },
      { week: `Week ${mid}`, achievement: "Halfway Milestone", target: `${hasGoal ? `Halfway to: ${goal.slice(0,40)}` : "15–20% strength increase on main lifts"}` },
      { week: `Week ${Math.round(totalWeeks * 0.75)}`, achievement: "Peak Accumulation", target: "Highest training volume of the program — stay disciplined" },
      { week: `Week ${totalWeeks}`, achievement: "Program Complete", target: `${hasGoal ? `Final validation — have you achieved: ${goal.slice(0,40)}?` : "Test all benchmarks, document PRs, plan the next cycle"}` }
    ];
  }
  if (totalWeeks <= 24) {
    return [
      { week: "Week 2", achievement: "Baseline Complete", target: "All metrics tested and logged" },
      { week: "Week 6", achievement: "Phase 1 Done", target: "Movement quality score improved — technique is solid" },
      { week: "Week 12", achievement: "3-Month Check-In", target: `${hasGoal ? `Progress checkpoint: ${goal.slice(0,40)}` : "25% improvement across all benchmarks"}` },
      { week: "Week 18", achievement: "Peak Volume Block", target: "Highest total training volume — nutrition and sleep critical here" },
      { week: `Week ${totalWeeks}`, achievement: "6-Month Transformation", target: `${hasGoal ? `${goal.slice(0,50)} — achieved?` : "Full benchmark re-test — major PRs expected"}` }
    ];
  }
  return [
    { week: "Week 4",  achievement: "Q1 Underway", target: "All year-one baselines tested and documented" },
    { week: "Week 13", achievement: "Q1 Complete", target: "Foundation phase finished — movement quality locked in" },
    { week: "Week 26", achievement: "Half-Year Mark", target: `${hasGoal ? `6-month progress checkpoint: ${goal.slice(0,40)}` : "Strength benchmarks up 20–30% from Week 1"}` },
    { week: "Week 39", achievement: "Q3 Peak Volume", target: "Highest training volume of the year — body composition peak" },
    { week: `Week ${totalWeeks}`, achievement: "Annual Completion", target: `${hasGoal ? `Year-end validation: ${goal.slice(0,50)}` : "All PRs tested — Year 2 program built from lessons learned"}` }
  ];
}

function buildWeeklySchedule(nicheName, totalWeeks, hasGoal, goal) {
  const goalNote = hasGoal ? ` (${goal.slice(0,25)}…)` : "";
  if (totalWeeks === 1) {
    return {
      monday: `${nicheName} — Full Body Session A${goalNote}`,
      tuesday: "Active Recovery — Light Walk + Mobility 30 min",
      wednesday: `${nicheName} — Full Body Session B${goalNote}`,
      thursday: "Rest or Yoga / Stretching",
      friday: `${nicheName} — Full Body Session C${goalNote}`,
      saturday: "Optional: Technique Drills & Weak-Point Work",
      sunday: "Full Rest — Sleep 9 hrs, Rehydrate, Reflect"
    };
  }
  if (totalWeeks <= 4) {
    return {
      monday: `${nicheName} — Primary Strength Session${goalNote}`,
      tuesday: "Conditioning & Core Circuit — 45 min",
      wednesday: "Active Recovery — Mobility Flow + Walk",
      thursday: `${nicheName} — Secondary Strength Session${goalNote}`,
      friday: `${nicheName} — Volume & Technique Session${goalNote}`,
      saturday: "Optional: Skill Drills or Cardio Steady-State",
      sunday: "Full Rest — Prioritise Sleep & Nutrition"
    };
  }
  if (totalWeeks <= 12) {
    return {
      monday: `${nicheName} — Heavy Compound Day${goalNote}`,
      tuesday: "Cardio & Conditioning — 45–60 min",
      wednesday: `${nicheName} — Hypertrophy & Accessory Work${goalNote}`,
      thursday: "Active Recovery — Foam Roll + Stretch + Breathwork",
      friday: `${nicheName} — Power & Skill Session${goalNote}`,
      saturday: "Long Conditioning Session or Endurance Work — 60–90 min",
      sunday: "Complete Rest — Sleep 8–9 hrs, Meal Prep"
    };
  }
  return {
    monday: `${nicheName} — Heavy Lower Body / Compound Day${goalNote}`,
    tuesday: `${nicheName} — Upper Body Strength Day${goalNote}`,
    wednesday: "Sport-Specific Conditioning & Skill Practice",
    thursday: `${nicheName} — Volume / Hypertrophy Day${goalNote}`,
    friday: `${nicheName} — Power, Speed & Plyometrics${goalNote}`,
    saturday: "Long Aerobic Session + Mobility & Correctives (90 min)",
    sunday: "Complete Rest — Sleep, Nutrition, Mental Recovery"
  };
}

function buildEquipment(nicheId) {
  const map = {
    gym:          ["Barbell & Plates (20 kg bar)", "Dumbbells Set (5–40 kg)", "Power Rack / Squat Stand", "Adjustable Bench", "Pull-Up Bar", "Resistance Bands Set", "Foam Roller", "Chalk", "Weight Belt (optional)", "Timer"],
    yoga:         ["Non-Slip Yoga Mat (6mm)", "Yoga Blocks (2)", "Yoga Strap", "Bolster Pillow", "Blanket for Savasana", "Comfortable Clothing", "Timer or Yoga App"],
    running:      ["Running Shoes (replace every 700 km)", "GPS Watch or Phone App", "Running Socks", "Foam Roller", "Resistance Bands", "Heart Rate Monitor", "Hydration Belt or Vest"],
    hiit:         ["Timer or Interval App", "Jump Rope", "Kettlebell Set", "Resistance Bands", "Plyo Box", "Yoga Mat", "Dumbbells", "Pull-Up Bar"],
    cycling:      ["Road or Mountain Bike", "Cycling Helmet", "Cycling Shoes & Clipless Pedals", "Heart Rate Monitor", "Cycling Computer or GPS", "Chamois Shorts", "Stationary Trainer (indoor)", "Foam Roller"],
    boxing:       ["Boxing Gloves (12–16 oz)", "Hand Wraps", "Heavy Bag", "Speed Bag or Double-End Bag", "Skipping Rope", "Mouth Guard", "Sparring Headgear", "Timer"],
    swimming:     ["Racing Goggles", "Swim Cap", "Pull Buoy", "Kickboard", "Resistance Paddles", "Fins", "Waterproof HR Monitor"],
    calisthenics: ["Pull-Up / Dip Bar Station", "Gymnastics Rings", "Parallettes", "Resistance Bands", "Ab Wheel", "Yoga Mat", "Timer"],
    crossfit:     ["Barbell & Plates", "Kettlebells", "Pull-Up Bar", "Jump Rope", "Plyo Box", "Dumbbells", "Assault Bike or Rower", "Wall Ball"],
  };
  const def = ["Comfortable Training Shoes", "Water Bottle (2L)", "Resistance Bands Set", "Yoga Mat", "Foam Roller / Lacrosse Ball", "Stopwatch / Timer App", "Training Journal", "Comfortable Activewear"];
  return map[nicheId] || def;
}

function buildTips(nicheName, hasGoal, goal, level) {
  const base = [
    "Progressive overload is the single most important principle — add a small amount of resistance or volume each week.",
    "Sleep 7–9 hours every night. This is when adaptation and muscle growth actually happen — treat it as training.",
    "Track every session in a journal or app. You cannot optimise what you cannot measure.",
    `Eat ${level === "beginner" ? "at maintenance or a slight surplus" : "to fuel your training"} — ${nicheName} demands adequate protein (0.8–1g per lb of bodyweight).`,
    "Consistency beats perfection every time. A mediocre session you actually complete beats a perfect session you skip.",
    "Warm up for at least 8–10 minutes before every session. Cold muscles tear; warm muscles perform."
  ];
  if (hasGoal && goal.trim()) {
    base.unshift(`Keep your goal front and centre: "${goal.slice(0, 70)}${goal.length > 70 ? "..." : ""}". Write it somewhere visible. Review it before every session.`);
  }
  base.push(
    `Deload every 4–6 weeks — reduce volume by 40% for one week. It feels counterintuitive but produces faster long-term gains.`,
    `For ${nicheName}, video analysis is powerful. Film a set each week and compare form over time.`,
    "Hydrate before you feel thirsty — by then you are already 1–2% dehydrated, which measurably hurts performance."
  );
  return base;
}

function renderPlan(plan) {
  const el = id => document.getElementById(id);
  if (el("plan-title")) el("plan-title").textContent = plan.title;
  if (el("plan-overview")) el("plan-overview").textContent = plan.overview;
  if (el("plan-tags")) el("plan-tags").innerHTML = `<span class="tag tag-primary">${plan.level || ""}</span><span class="tag tag-blue">${(plan.duration || "").replace(/_/g, " ")}</span><span class="tag tag-violet">${plan.niche || ""}</span>`;
  const gBox = el("goal-highlight-box"), gTxt = el("goal-highlight-text");
  if (gBox && gTxt) { gBox.classList.toggle("visible", !!(plan.goal && plan.goal.trim())); if (plan.goal) gTxt.textContent = plan.goal; }
  if (el("weekly-grid") && plan.weeklySchedule) el("weekly-grid").innerHTML = Object.entries(plan.weeklySchedule).map(([day, act]) => { const col = DAY_COLORS[day] || "#ccff00"; return `<div class="day-card${(act||"").toLowerCase().includes("rest") ? " rest" : ""}" style="border-left-color:${col}"><div class="day-name" style="color:${col}">${day.slice(0,3).toUpperCase()}</div><div class="day-activity">${act}</div></div>`; }).join("");
  if (el("phases-list") && plan.phases) el("phases-list").innerHTML = plan.phases.map((ph, i) => { const pc = PHASE_COLORS[i % PHASE_COLORS.length]; return `<div class="phase-item${i===0?" open":""}" id="phase-${i}"><div class="phase-header" onclick="togglePhase(${i})"><span class="phase-badge" style="color:${pc};border-color:${pc}33;background:${pc}15">Phase ${i+1}</span><span class="phase-name">${ph.name}</span><span class="phase-weeks">${ph.weeks}</span><span class="phase-arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></span></div><div class="phase-body"><p class="phase-desc">${ph.description}</p><div class="focus-tags">${(ph.focus||[]).map(f=>`<span class="focus-tag">${f}</span>`).join("")}</div><div class="exercise-table"><div class="exercise-table-head"><div>Exercise</div><div>Sets</div><div>Reps</div><div>Rest</div></div>${(ph.exercises||[]).map(ex=>`<div class="exercise-row"><div><div class="exercise-name"><div class="exercise-bar" style="background:${pc}"></div>${ex.name}</div>${ex.notes?`<div class="exercise-note">${ex.notes}</div>`:""}</div><div class="exercise-stat">${ex.sets}</div><div class="exercise-stat">${ex.reps}</div><div class="exercise-stat">${ex.rest}</div></div>`).join("")}</div></div></div>`; }).join("");
  if (el("milestones-list") && plan.milestones) el("milestones-list").innerHTML = plan.milestones.map((ms,i)=>`<div class="milestone-item"><div class="milestone-dot" style="border-color:${i%2===0?"#ccff00":"#67e8f9"}"><svg viewBox="0 0 24 24" fill="none" stroke="${i%2===0?"#ccff00":"#67e8f9"}" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div><div class="milestone-card"><div class="milestone-week">${ms.week}</div><div class="milestone-achievement">${ms.achievement}</div><div class="milestone-target">${ms.target}</div></div></div>`).join("");
  if (el("equip-grid") && plan.equipment) el("equip-grid").innerHTML = plan.equipment.map(eq=>`<div class="equip-item"><div class="equip-dot" style="background:var(--primary)"></div>${eq}</div>`).join("");
  if (el("tips-list") && plan.tips) el("tips-list").innerHTML = plan.tips.map(t=>`<div class="tip-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>${t}</div>`).join("");
  applyRevealAnimations();
}

function togglePhase(i) { const el = document.getElementById("phase-" + i); if (el) el.classList.toggle("open"); }

function downloadPDF() {
  const btn = document.getElementById("download-btn");
  if (!btn) return;
  btn.disabled = true; btn.textContent = "Generating...";
  setTimeout(() => { try { buildAndSavePDF(state.plan); } catch (e) { alert("PDF generation failed."); } btn.disabled = false; btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download PDF`; }, 100);
}

// ─── FIX 3 & 4: PDF now uses the full color palette and is detailed / informative ───
function buildAndSavePDF(plan) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pw = doc.internal.pageSize.getWidth(), ph = doc.internal.pageSize.getHeight();
  const mg = 15, uw = pw - mg * 2;
  let y = 0;

  // ── Color palette (matches UI) ──
  const lime    = [204, 255, 0];
  const cyan    = [0,   240, 255];
  const orange  = [251, 146, 60];
  const violet  = [154, 106, 255];
  const pink    = [244, 114, 182];
  const yellow  = [253, 224, 71];
  const teal    = [103, 232, 249];
  const dark    = [13,  13,  20];
  const dark2   = [22,  22,  35];
  const dark3   = [30,  30,  48];
  const white   = [255, 255, 255];
  const sub     = [160, 160, 190];
  const sub2    = [120, 120, 155];

  // Phase colors — mirrors PHASE_COLORS in JS
  const phaseColorRGB = [
    [204, 255, 0],   // lime
    [99,  179, 237], // blue
    [154, 106, 255], // violet
    [251, 146, 60],  // orange
    [103, 232, 249]  // teal
  ];

  // Day colors — mirrors DAY_COLORS
  const dayColorsRGB = {
    monday:    [99,  179, 237],
    tuesday:   [154, 106, 255],
    wednesday: [204, 255, 0],
    thursday:  [251, 146, 60],
    friday:    [244, 114, 182],
    saturday:  [103, 232, 249],
    sunday:    [251, 113, 131]
  };

  const sectionColors = [lime, cyan, orange, violet, pink, yellow, teal];
  let secIdx = 0;
  const nextSectionColor = () => { const c = sectionColors[secIdx % sectionColors.length]; secIdx++; return c; };

  const newPage = () => {
    doc.addPage();
    y = 0;
    doc.setFillColor(...dark); doc.rect(0, 0, pw, ph, "F");
    // subtle top border strip
    doc.setFillColor(...dark2); doc.rect(0, 0, pw, 2, "F");
  };
  const checkY = (needed) => { if (y + needed > ph - 18) newPage(); };

  // ── Cover / Header ──
  doc.setFillColor(...dark); doc.rect(0, 0, pw, ph, "F");

  // Header bar with lime gradient effect
  doc.setFillColor(...dark2); doc.rect(0, 0, pw, 32, "F");
  doc.setFillColor(...lime); doc.rect(0, 0, pw, 3, "F");  // top accent line

  doc.setTextColor(...dark); doc.setFontSize(7); doc.setFont("helvetica", "bold");
  doc.setFillColor(...lime); doc.roundedRect(mg, 8, 52, 7, 1, 1, "F");
  doc.text("AI FOR SELF GROWTH", mg + 4, 13.2);

  doc.setTextColor(...sub); doc.setFont("helvetica", "normal"); doc.setFontSize(7);
  doc.text("PERSONALIZED TRAINING BLUEPRINT", pw - mg, 13.2, { align: "right" });

  // Niche color strip
  const nicheObj = NICHES.find(n => n.id === plan.niche);
  if (nicheObj) {
    const [c1hex] = nicheObj.color.split(",");
    try {
      const r = parseInt(c1hex.trim().slice(1, 3), 16);
      const g2 = parseInt(c1hex.trim().slice(3, 5), 16);
      const b = parseInt(c1hex.trim().slice(5, 7), 16);
      doc.setFillColor(r, g2, b); doc.setGState(doc.GState({ opacity: 0.15 }));
      doc.rect(0, 20, pw, 12, "F");
      doc.setGState(doc.GState({ opacity: 1 }));
    } catch(e) {}
  }

  y = 38;

  // Plan Title
  doc.setTextColor(...white); doc.setFontSize(20); doc.setFont("helvetica", "bold");
  const titleLines = doc.splitTextToSize(plan.title || "Training Plan", uw);
  checkY(titleLines.length * 9 + 12);
  doc.text(titleLines, mg, y); y += titleLines.length * 9 + 4;

  // Tags row
  let tx = mg;
  const tagData = [
    { text: (plan.level || "").toUpperCase(), color: lime },
    { text: (plan.duration || "").replace(/_/g, " ").toUpperCase(), color: cyan },
    { text: (plan.niche || "").toUpperCase(), color: violet }
  ];
  tagData.filter(t => t.text).forEach(t => {
    doc.setFillColor(...t.color.map(v => Math.round(v * 0.15 + dark2[0] * 0.85)));
    const tw = doc.getTextWidth(t.text) + 10;
    doc.setFillColor(t.color[0], t.color[1], t.color[2]);
    // Draw tag background at low opacity
    doc.setGState(doc.GState({ opacity: 0.18 }));
    doc.roundedRect(tx, y, tw, 6.5, 1.5, 1.5, "F");
    doc.setGState(doc.GState({ opacity: 1 }));
    // Border
    doc.setDrawColor(...t.color); doc.setLineWidth(0.3);
    doc.roundedRect(tx, y, tw, 6.5, 1.5, 1.5, "S");
    doc.setTextColor(...t.color); doc.setFontSize(7); doc.setFont("helvetica", "bold");
    doc.text(t.text, tx + 5, y + 4.4); tx += tw + 4;
  });
  y += 12;

  // Goal highlight box (if present)
  if (plan.goal && plan.goal.trim()) {
    checkY(18);
    doc.setFillColor(...lime); doc.setGState(doc.GState({ opacity: 0.08 }));
    doc.roundedRect(mg, y, uw, 14, 2, 2, "F");
    doc.setGState(doc.GState({ opacity: 1 }));
    doc.setDrawColor(...lime); doc.setLineWidth(0.4); doc.setGState(doc.GState({ opacity: 0.4 }));
    doc.roundedRect(mg, y, uw, 14, 2, 2, "S");
    doc.setGState(doc.GState({ opacity: 1 }));
    // Star icon area
    doc.setFillColor(...lime); doc.setGState(doc.GState({ opacity: 0.9 }));
    doc.roundedRect(mg + 2, y + 2, 10, 10, 1, 1, "F");
    doc.setGState(doc.GState({ opacity: 1 }));
    doc.setTextColor(...dark); doc.setFont("helvetica", "bold"); doc.setFontSize(7);
    doc.text("GOAL", mg + 3.5, y + 8);
    doc.setTextColor(...lime); doc.setFont("helvetica", "bold"); doc.setFontSize(7.5);
    doc.text("Tailored to your goal:", mg + 15, y + 5.5);
    doc.setTextColor(...white); doc.setFont("helvetica", "normal"); doc.setFontSize(7.5);
    const goalLines = doc.splitTextToSize(plan.goal, uw - 20);
    doc.text(goalLines[0] + (goalLines.length > 1 ? "..." : ""), mg + 15, y + 11);
    y += 18;
  }

  // Overview
  if (plan.overview) {
    checkY(30);
    const col = nextSectionColor();
    doc.setFillColor(...col); doc.setGState(doc.GState({ opacity: 0.9 }));
    doc.rect(mg, y, 3, 5, "F"); doc.setGState(doc.GState({ opacity: 1 }));
    doc.setTextColor(...col); doc.setFontSize(9); doc.setFont("helvetica", "bold");
    doc.text("PROGRAM OVERVIEW", mg + 6, y + 4);
    y += 8;
    doc.setFontSize(8.5); doc.setFont("helvetica", "normal"); doc.setTextColor(...sub);
    const overLines = doc.splitTextToSize(plan.overview, uw);
    overLines.forEach(l => { checkY(6); doc.text(l, mg, y); y += 5.5; });
    y += 5;
  }

  // ── Training Phases ──
  if (plan.phases && plan.phases.length) {
    checkY(20);
    const pCol = nextSectionColor();
    doc.setFillColor(...pCol); doc.setGState(doc.GState({ opacity: 0.9 }));
    doc.rect(mg, y, 3, 5, "F"); doc.setGState(doc.GState({ opacity: 1 }));
    doc.setTextColor(...pCol); doc.setFontSize(10); doc.setFont("helvetica", "bold");
    doc.text("TRAINING PHASES", mg + 6, y + 4);
    y += 10;

    plan.phases.forEach((ph, i) => {
      const pc = phaseColorRGB[i % phaseColorRGB.length];
      checkY(50);

      // Phase header bar
      doc.setFillColor(...dark2); doc.roundedRect(mg, y, uw, 9, 1.5, 1.5, "F");
      doc.setFillColor(...pc); doc.setGState(doc.GState({ opacity: 0.85 }));
      doc.roundedRect(mg, y, 4, 9, 1, 1, "F"); doc.setGState(doc.GState({ opacity: 1 }));
      doc.setTextColor(...pc); doc.setFontSize(8.5); doc.setFont("helvetica", "bold");
      doc.text(`Phase ${i + 1}: ${ph.name}`, mg + 8, y + 6);
      doc.setTextColor(...sub2); doc.setFont("helvetica", "normal"); doc.setFontSize(7.5);
      doc.text(ph.weeks || "", pw - mg - 2, y + 6, { align: "right" });
      y += 12;

      // Description
      if (ph.description) {
        checkY(20);
        doc.setFontSize(8); doc.setFont("helvetica", "normal"); doc.setTextColor(...sub);
        const descLines = doc.splitTextToSize(ph.description, uw - 4);
        descLines.forEach(l => { checkY(5.5); doc.text(l, mg + 2, y); y += 5; });
        y += 3;
      }

      // Focus tags
      if (ph.focus && ph.focus.length) {
        checkY(10);
        doc.setFontSize(7); doc.setFont("helvetica", "bold");
        let ftx = mg + 2;
        doc.setTextColor(...sub2);
        doc.text("Focus:", ftx, y + 3.5); ftx += 14;
        ph.focus.forEach(f => {
          const fw = doc.getTextWidth(f) + 8;
          if (ftx + fw > pw - mg) { y += 7; ftx = mg + 2 + 14; }
          doc.setFillColor(...pc); doc.setGState(doc.GState({ opacity: 0.14 }));
          doc.roundedRect(ftx, y - 1, fw, 6, 1, 1, "F"); doc.setGState(doc.GState({ opacity: 1 }));
          doc.setDrawColor(...pc); doc.setLineWidth(0.25); doc.setGState(doc.GState({ opacity: 0.5 }));
          doc.roundedRect(ftx, y - 1, fw, 6, 1, 1, "S"); doc.setGState(doc.GState({ opacity: 1 }));
          doc.setTextColor(...pc); doc.setFontSize(6.5);
          doc.text(f, ftx + 4, y + 3.3); ftx += fw + 3;
        });
        y += 9;
      }

      // Exercise table
      if (ph.exercises && ph.exercises.length) {
        checkY(14);
        // Table header
        const colW = [uw - 58, 13, 18, 14, 13];
        const headers = ["Exercise", "Sets", "Reps", "Rest", "Notes"];
        doc.setFillColor(...pc); doc.setGState(doc.GState({ opacity: 0.9 }));
        doc.roundedRect(mg, y, uw, 6, 1, 1, "F"); doc.setGState(doc.GState({ opacity: 1 }));
        doc.setTextColor(...dark); doc.setFontSize(6.5); doc.setFont("helvetica", "bold");
        let sx = mg;
        headers.forEach((h, hi) => { doc.text(h, sx + 2, y + 4.2); sx += colW[hi]; });
        y += 7;

        ph.exercises.forEach((ex, ei) => {
          const hasNote = ex.notes && ex.notes.length > 0;
          const noteLines = hasNote ? doc.splitTextToSize(ex.notes, colW[4] - 3) : [];
          const rowH = hasNote ? Math.max(6, noteLines.length * 4 + 3) : 6;
          checkY(rowH + 1);

          if (ei % 2 === 0) {
            doc.setFillColor(...dark3); doc.rect(mg, y, uw, rowH, "F");
          }

          // Exercise name with color bar
          doc.setFillColor(...pc); doc.rect(mg, y, 2.5, rowH, "F");
          doc.setTextColor(...white); doc.setFont("helvetica", "bold"); doc.setFontSize(7);
          doc.text(ex.name || "", mg + 5, y + 4);
          if (hasNote) {
            doc.setTextColor(...sub2); doc.setFont("helvetica", "normal"); doc.setFontSize(6);
            noteLines.forEach((nl, nli) => { doc.text(nl, pw - mg - colW[4] + 2, y + 3.8 + nli * 4); });
          }
          sx = mg + colW[0];
          doc.setTextColor(...sub); doc.setFont("helvetica", "normal"); doc.setFontSize(7);
          [ex.sets, ex.reps, ex.rest].forEach((v, vi) => { doc.text(String(v || ""), sx + 2, y + 4); sx += colW[vi + 1]; });
          y += rowH;
        });
        y += 8;
      }
    });
  }

  // ── Weekly Schedule ──
  if (plan.weeklySchedule) {
    checkY(20);
    const wCol = nextSectionColor();
    doc.setFillColor(...wCol); doc.rect(mg, y, 3, 5, "F");
    doc.setTextColor(...wCol); doc.setFontSize(10); doc.setFont("helvetica", "bold");
    doc.text("WEEKLY TRAINING RHYTHM", mg + 6, y + 4);
    y += 10;

    const days = Object.entries(plan.weeklySchedule);
    days.forEach(([day, act], di) => {
      const dc = dayColorsRGB[day.toLowerCase()] || lime;
      checkY(10);
      if (di % 2 === 0) { doc.setFillColor(...dark2); doc.rect(mg, y, uw, 9, "F"); }
      // Color left stripe
      doc.setFillColor(...dc); doc.rect(mg, y, 3, 9, "F");
      // Day label
      doc.setTextColor(...dc); doc.setFontSize(7.5); doc.setFont("helvetica", "bold");
      doc.text(day.slice(0, 3).toUpperCase(), mg + 5, y + 6);
      // Activity
      doc.setTextColor(...white); doc.setFont("helvetica", "normal"); doc.setFontSize(7.5);
      const actTrunc = doc.splitTextToSize(act || "", uw - 30);
      doc.text(actTrunc[0], mg + 24, y + 6);
      // Rest indicator
      if ((act || "").toLowerCase().includes("rest")) {
        doc.setFillColor(...dc); doc.setGState(doc.GState({ opacity: 0.2 }));
        doc.roundedRect(pw - mg - 18, y + 2, 15, 5, 1, 1, "F"); doc.setGState(doc.GState({ opacity: 1 }));
        doc.setTextColor(...dc); doc.setFontSize(6); doc.setFont("helvetica", "bold");
        doc.text("REST", pw - mg - 14, y + 5.5);
      }
      y += 10;
    });
    y += 6;
  }

  // ── Milestones ──
  if (plan.milestones && plan.milestones.length) {
    checkY(20);
    const mCol = nextSectionColor();
    doc.setFillColor(...mCol); doc.rect(mg, y, 3, 5, "F");
    doc.setTextColor(...mCol); doc.setFontSize(10); doc.setFont("helvetica", "bold");
    doc.text("KEY MILESTONES", mg + 6, y + 4);
    y += 10;

    plan.milestones.forEach((ms, i) => {
      const mc = i % 2 === 0 ? lime : teal;
      checkY(16);
      // Timeline dot
      doc.setFillColor(...mc); doc.circle(mg + 3, y + 5, 2.5, "F");
      doc.setFillColor(...dark); doc.circle(mg + 3, y + 5, 1, "F");
      // Connector line to next
      if (i < plan.milestones.length - 1) {
        doc.setFillColor(...mc); doc.setGState(doc.GState({ opacity: 0.25 }));
        doc.rect(mg + 2.5, y + 7, 1, 12, "F"); doc.setGState(doc.GState({ opacity: 1 }));
      }
      // Card background
      doc.setFillColor(...dark2); doc.roundedRect(mg + 8, y, uw - 8, 13, 1.5, 1.5, "F");
      doc.setFillColor(...mc); doc.setGState(doc.GState({ opacity: 0.12 }));
      doc.roundedRect(mg + 8, y, uw - 8, 13, 1.5, 1.5, "F"); doc.setGState(doc.GState({ opacity: 1 }));
      // Week badge
      doc.setFillColor(...mc); doc.setGState(doc.GState({ opacity: 0.85 }));
      const weekW = doc.getTextWidth(ms.week) + 8;
      doc.roundedRect(mg + 11, y + 2.5, weekW, 5.5, 1, 1, "F"); doc.setGState(doc.GState({ opacity: 1 }));
      doc.setTextColor(...dark); doc.setFontSize(6.5); doc.setFont("helvetica", "bold");
      doc.text(ms.week, mg + 14, y + 6.5);
      // Achievement
      doc.setTextColor(...mc); doc.setFontSize(7.5); doc.setFont("helvetica", "bold");
      doc.text(ms.achievement, mg + 14 + weekW, y + 6.5);
      // Target
      doc.setTextColor(...sub); doc.setFont("helvetica", "normal"); doc.setFontSize(7);
      const tgtLines = doc.splitTextToSize(ms.target, uw - 14);
      doc.text(tgtLines[0], mg + 11, y + 11.5);
      y += 16;
    });
    y += 6;
  }

  // ── Equipment ──
  if (plan.equipment && plan.equipment.length) {
    checkY(20);
    const eCol = nextSectionColor();
    doc.setFillColor(...eCol); doc.rect(mg, y, 3, 5, "F");
    doc.setTextColor(...eCol); doc.setFontSize(10); doc.setFont("helvetica", "bold");
    doc.text("EQUIPMENT REQUIRED", mg + 6, y + 4);
    y += 10;

    const half = Math.ceil(plan.equipment.length / 2);
    const col1 = plan.equipment.slice(0, half);
    const col2 = plan.equipment.slice(half);
    const colW2 = (uw - 6) / 2;
    const startY = y;

    col1.forEach((eq, i) => {
      checkY(7);
      doc.setFillColor(...eCol); doc.setGState(doc.GState({ opacity: 0.8 }));
      doc.circle(mg + 2, y + 3, 1.5, "F"); doc.setGState(doc.GState({ opacity: 1 }));
      doc.setTextColor(...sub); doc.setFont("helvetica", "normal"); doc.setFontSize(7.5);
      doc.text(eq, mg + 6, y + 4.5);
      y += 7;
    });

    const col2StartY = startY;
    col2.forEach((eq, i) => {
      const ey = col2StartY + i * 7;
      if (ey + 7 < y) {
        doc.setFillColor(...eCol); doc.setGState(doc.GState({ opacity: 0.8 }));
        doc.circle(mg + colW2 + 8, ey + 3, 1.5, "F"); doc.setGState(doc.GState({ opacity: 1 }));
        doc.setTextColor(...sub); doc.setFontSize(7.5);
        doc.text(eq, mg + colW2 + 12, ey + 4.5);
      }
    });
    y += 8;
  }

  // ── Pro Tips ──
  if (plan.tips && plan.tips.length) {
    checkY(20);
    const tCol = nextSectionColor();
    doc.setFillColor(...tCol); doc.rect(mg, y, 3, 5, "F");
    doc.setTextColor(...tCol); doc.setFontSize(10); doc.setFont("helvetica", "bold");
    doc.text("PRO TIPS & COACHING NOTES", mg + 6, y + 4);
    y += 10;

    plan.tips.forEach((tip, i) => {
      const tc = sectionColors[i % sectionColors.length];
      checkY(12);
      doc.setFillColor(...dark2); doc.roundedRect(mg, y, uw, 10, 1.5, 1.5, "F");
      doc.setFillColor(...tc); doc.setGState(doc.GState({ opacity: 0.15 }));
      doc.roundedRect(mg, y, uw, 10, 1.5, 1.5, "F"); doc.setGState(doc.GState({ opacity: 1 }));
      doc.setFillColor(...tc); doc.roundedRect(mg, y, 3, 10, 1, 1, "F");

      // Tip number badge
      doc.setFillColor(...tc); doc.setGState(doc.GState({ opacity: 0.85 }));
      doc.roundedRect(mg + 5, y + 2.5, 7, 5, 1, 1, "F"); doc.setGState(doc.GState({ opacity: 1 }));
      doc.setTextColor(...dark); doc.setFontSize(6.5); doc.setFont("helvetica", "bold");
      doc.text(String(i + 1).padStart(2, "0"), mg + 6.5, y + 6.3);

      doc.setTextColor(...white); doc.setFont("helvetica", "normal"); doc.setFontSize(7.5);
      const tipLines = doc.splitTextToSize(tip, uw - 20);
      if (tipLines.length > 1) {
        checkY(4 * tipLines.length + 4);
        tipLines.forEach((tl, tli) => { doc.text(tl, mg + 15, y + 4.5 + tli * 4); });
        y += tipLines.length * 4 + 5;
      } else {
        doc.text(tipLines[0], mg + 15, y + 6);
        y += 12;
      }
    });
  }

  // ── Footer on every page ──
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setFillColor(...dark2); doc.rect(0, ph - 12, pw, 12, "F");
    doc.setFillColor(...lime); doc.rect(0, ph - 12, pw, 1.5, "F");
    doc.setTextColor(...dark); doc.setFontSize(6.5); doc.setFont("helvetica", "bold");
    doc.setFillColor(...lime); doc.rect(mg, ph - 9, doc.getTextWidth("AI FOR SELF GROWTH") + 4, 6, "F");
    doc.setTextColor(...dark);
    doc.text("AI FOR SELF GROWTH", mg + 2, ph - 4.5);
    doc.setTextColor(...sub2); doc.setFont("helvetica", "normal");
    doc.text("PERSONALIZED TRAINING BLUEPRINT", mg + doc.getTextWidth("AI FOR SELF GROWTH") + 10, ph - 4.5);
    doc.setTextColor(...lime); doc.setFont("helvetica", "bold");
    doc.text(`${p} / ${totalPages}`, pw - mg, ph - 4.5, { align: "right" });
  }

  doc.save((plan.title || "training-plan").replace(/\s+/g, "-").toLowerCase() + ".pdf");
}

function initTiltEffect() {
  const selector = '.niche-card, .stat-card, .level-card, .dur-card, .day-card';
  document.addEventListener('mousemove', e => {
    const el = e.target.closest(selector); if (!el) return;
    const rect = el.getBoundingClientRect();
    const rotX = ((e.clientY - rect.top - rect.height/2) / rect.height) * -6;
    const rotY = ((e.clientX - rect.left - rect.width/2) / rect.width) * 6;
    el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`;
  }, { passive: true });
}

function initCursorGlow() {
  const glow = document.getElementById("cursor-glow"); if (!glow) return;
  document.addEventListener("mousemove", e => { glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`; });
}

function initScrollEffects() {
  window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty("--scroll-scale", Math.max(0.85, 1.0 - window.scrollY / 2000));
  }, { passive: true });
}

function applyRevealAnimations() {
  if (!window.revealObserver) {
    window.revealObserver = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); window.revealObserver.unobserve(e.target); } });
    }, { threshold: 0.05, rootMargin: "0px 0px -20px 0px" });
  }
  document.querySelectorAll(".reveal-anim:not(.visible)").forEach(el => window.revealObserver.observe(el));
}

function initLoader() {
  const loader = document.getElementById("loader-screen");
  const bar = document.querySelector(".loader-progress-bar");
  const subtext = document.querySelector(".loader-subtext");
  if (!loader || !bar) return;
  document.body.style.overflow = "hidden";
  const msgs = ["Initializing Neural Engine...", "Mapping Bio-mechanical Nodes...", "Synthesizing Discipline Protocols...", "Calibrating Motion Vectors...", "Ready."];
  let p = 0, mi = 0;
  const iv = setInterval(() => {
    p += Math.random() * 18 + 8;
    if (p >= 100) { p = 100; clearInterval(iv); setTimeout(() => { loader.classList.add("fade-out"); document.body.style.overflow = ""; }, 300); }
    bar.style.width = p + "%";
    if (subtext && mi < msgs.length && p >= (mi + 1) * 20) subtext.textContent = msgs[mi++];
  }, 80);
}

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initParticles();
  initCursorGlow();
  initScrollEffects();
  initTiltEffect();
  applyRevealAnimations();

  const getStarted = document.getElementById("get-started-btn");
  if (getStarted) getStarted.addEventListener("click", () => { showPage("page-wizard"); setTimeout(initWizard, 50); });

  const step3Btn = document.getElementById("step3-continue");
  if (step3Btn) step3Btn.addEventListener("click", () => setStep(4));

  const backBtn = document.getElementById("wizard-back-btn");
  if (backBtn) backBtn.addEventListener("click", prevStep);

  const generateBtn = document.getElementById("generate-btn");
  if (generateBtn) generateBtn.addEventListener("click", doGenerate);

  const goalInput = document.getElementById("goal-input");
  if (goalInput) goalInput.addEventListener("input", updateSummary);

  const startOverBtn = document.getElementById("start-over-btn");
  if (startOverBtn) startOverBtn.addEventListener("click", () => {
    state = { niche: "", level: "beginner", duration: "1_month", goal: "", step: 1, plan: null };
    showPage("page-wizard"); setTimeout(initWizard, 50);
  });

  const downloadBtn = document.getElementById("download-btn");
  if (downloadBtn) downloadBtn.addEventListener("click", downloadPDF);
});