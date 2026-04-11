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
  { id: "1_week", label: "1 Week", sub: "Quick Start", color: "#67e8f9" },
  { id: "1_month", label: "1 Month", sub: "Foundation", color: "#818cf8" },
  { id: "3_months", label: "3 Months", sub: "Progress", color: "#fde047" },
  { id: "6_months", label: "6 Months", sub: "Transform", color: "#fb7185" },
  { id: "1_year", label: "1 Year", sub: "Master", color: "#ccff00" }
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

function renderPlan(plan) {
  const el = id => document.getElementById(id);
  if (el("plan-title")) el("plan-title").textContent = plan.title;
  if (el("plan-overview")) el("plan-overview").textContent = plan.overview;
  if (el("plan-tags")) el("plan-tags").innerHTML = `<span class="tag tag-primary">${plan.level || ""}</span><span class="tag tag-blue">${(plan.duration || "").replace("_", " ")}</span><span class="tag tag-violet">${plan.niche || ""}</span>`;
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

function getDemoPlan() {
  const n = NICHES.find(x => x.id === state.niche) || NICHES[0];
  return { title: `${n.name} Training Blueprint`, niche: n.name, level: state.level, duration: state.duration, goal: "", overview: `A comprehensive ${state.level} ${n.name.toLowerCase()} training plan designed to build strength, technique, and endurance progressively.`, weeklySchedule: { monday: "Strength & Power", tuesday: "Technique & Skill", wednesday: "Active Recovery", thursday: "Conditioning", friday: "Sport-Specific Drills", saturday: "Long Session", sunday: "Full Rest" }, phases: [ { name: "Foundation Phase", weeks: "Weeks 1-3", description: "Establish baseline strength and movement quality.", focus: ["Technique", "Base Strength"], exercises: [{ name: "Goblet Squat", sets: "3", reps: "12", rest: "60s", notes: "Focus on depth" }, { name: "Push-Up", sets: "3", reps: "15", rest: "45s" }, { name: "Plank", sets: "3", reps: "45s", rest: "60s" }, { name: "Romanian Deadlift", sets: "3", reps: "10", rest: "90s" }, { name: "Band Pull-Apart", sets: "3", reps: "20", rest: "30s" }] }, { name: "Build Phase", weeks: "Weeks 4-8", description: "Increase volume and progressive overload.", focus: ["Volume", "Progressive Overload"], exercises: [{ name: "Barbell Squat", sets: "4", reps: "8", rest: "2 min", notes: "Add 5lbs/week" }, { name: "Bench Press", sets: "4", reps: "8", rest: "90s" }, { name: "Weighted Pull-Ups", sets: "3", reps: "6", rest: "2 min" }, { name: "Deadlift", sets: "4", reps: "5", rest: "3 min" }, { name: "Dumbbell Rows", sets: "3", reps: "12", rest: "60s" }] }, { name: "Peak Phase", weeks: "Weeks 9-12", description: "Maximum performance and testing.", focus: ["Peak Performance", "Testing"], exercises: [{ name: "1RM Test", sets: "3", reps: "1-3", rest: "4 min", notes: "Max effort" }, { name: "Box Jumps", sets: "4", reps: "5", rest: "2 min" }, { name: "Sprint Intervals", sets: "6", reps: "30s", rest: "90s" }, { name: "Heavy Compound", sets: "3", reps: "3", rest: "3 min" }, { name: "Core Circuit", sets: "3", reps: "60s", rest: "45s" }] } ], milestones: [{ week: "Week 2", achievement: "Technique Baseline", target: "Solid movement in all exercises" }, { week: "Week 4", achievement: "First Milestone", target: "Complete all sessions" }, { week: "Week 8", achievement: "Strength Benchmark", target: "30% improvement from starting weights" }, { week: "Week 12", achievement: "Peak Performance", target: "Personal bests across all lifts" }], equipment: ["Barbell & Plates", "Dumbbells Set", "Resistance Bands", "Pull-Up Bar", "Foam Roller", "Yoga Mat", "Jump Rope", "Bench", "Kettlebell", "Timer"], tips: ["Progressive overload is the #1 driver of adaptation.", "Sleep 7-9 hours — growth happens during recovery.", "Track workouts to spot patterns.", "0.8-1g protein per pound of bodyweight.", "Consistency beats perfection."] };
}

function downloadPDF() {
  const btn = document.getElementById("download-btn");
  if (!btn) return;
  btn.disabled = true; btn.textContent = "Generating...";
  setTimeout(() => { try { buildAndSavePDF(state.plan); } catch (e) { alert("PDF generation failed."); } btn.disabled = false; btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download PDF`; }, 100);
}

function buildAndSavePDF(plan) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pw = doc.internal.pageSize.getWidth(), ph = doc.internal.pageSize.getHeight();
  const mg = 18, uw = pw - mg * 2;
  let y = 0;
  const lime=[204,255,0], dark=[13,13,20], white=[255,255,255], sub=[160,160,190], cardBg=[22,22,35];
  const newPage = () => { doc.addPage(); y = 0; doc.setFillColor(...dark); doc.rect(0,0,pw,ph,"F"); };
  const checkY = needed => { if (y + needed > ph - 20) newPage(); };
  doc.setFillColor(...dark); doc.rect(0,0,pw,ph,"F");
  doc.setFillColor(...lime); doc.rect(0,0,pw,28,"F");
  doc.setTextColor(...dark); doc.setFontSize(18); doc.setFont("helvetica","bold");
  doc.text("AI FOR SELF GROWTH", mg, 18);
  doc.setFontSize(8); doc.setFont("helvetica","normal");
  doc.text("PERSONALIZED TRAINING BLUEPRINT", pw-mg, 18, {align:"right"});
  y = 38;
  doc.setTextColor(...white); doc.setFontSize(22); doc.setFont("helvetica","bold");
  const titleLines = doc.splitTextToSize(plan.title || "Training Plan", uw);
  doc.text(titleLines, mg, y); y += titleLines.length * 9 + 4;
  let tx = mg;
  [plan.level, (plan.duration||"").replace(/_/g," "), plan.niche].filter(Boolean).forEach(tag => {
    doc.setFillColor(...lime); doc.setTextColor(...dark); doc.setFontSize(8); doc.setFont("helvetica","bold");
    const tw = doc.getTextWidth(tag.toUpperCase()) + 8; doc.roundedRect(tx, y, tw, 6, 1, 1, "F"); doc.text(tag.toUpperCase(), tx+4, y+4.2); tx += tw + 4;
  });
  y += 12;
  if (plan.overview) { doc.setFontSize(9); doc.setFont("helvetica","normal"); doc.setTextColor(...sub); doc.splitTextToSize(plan.overview, uw).forEach(l => { checkY(6); doc.text(l, mg, y); y += 5; }); y += 4; }
  doc.setTextColor(...lime); doc.setFontSize(10); doc.setFont("helvetica","bold"); doc.text("TRAINING PHASES", mg, y); y += 6;
  (plan.phases||[]).forEach((ph2, i) => {
    checkY(40);
    doc.setFillColor(...cardBg); doc.roundedRect(mg, y, uw, 8, 2, 2, "F");
    doc.setTextColor(...lime); doc.setFontSize(8); doc.setFont("helvetica","bold"); doc.text(`Phase ${i+1}: ${ph2.name}`, mg+4, y+5.2);
    doc.setTextColor(...sub); doc.setFont("helvetica","normal"); doc.text(ph2.weeks||"", pw-mg-2, y+5.2, {align:"right"}); y += 12;
    if (ph2.description) { doc.setFontSize(8); doc.setTextColor(...sub); doc.splitTextToSize(ph2.description, uw-4).forEach(l => { checkY(5); doc.text(l, mg+2, y); y += 4.5; }); y += 2; }
    const colW=[uw-60,20,20,20]; let sx=mg;
    doc.setFillColor(...lime); doc.rect(mg, y, uw, 5.5, "F"); doc.setTextColor(...dark); doc.setFontSize(7); doc.setFont("helvetica","bold");
    ["Exercise","Sets","Reps","Rest"].forEach((h,hi)=>{ doc.text(h, sx+2, y+3.8); sx += colW[hi]; }); y += 6.5;
    (ph2.exercises||[]).forEach((ex, ei) => {
      checkY(7); if (ei%2===0) { doc.setFillColor(28,28,42); doc.rect(mg, y, uw, 5.5, "F"); }
      sx=mg; doc.setTextColor(...white); doc.setFont("helvetica","normal"); doc.setFontSize(7.5); doc.text(ex.name||"", sx+6, y+3.8); sx+=colW[0];
      doc.setTextColor(180,180,200); [ex.sets,ex.reps,ex.rest].forEach((v,vi)=>{ doc.text(String(v||""), sx+2, y+3.8); sx+=colW[vi+1]; }); y += 5.5;
    }); y += 6;
  });
  checkY(30); doc.setTextColor(...lime); doc.setFontSize(10); doc.setFont("helvetica","bold"); doc.text("WEEKLY SCHEDULE", mg, y); y += 6;
  Object.entries(plan.weeklySchedule||{}).forEach(([day, act], di) => {
    checkY(8); if (di%2===0) { doc.setFillColor(28,28,42); doc.rect(mg, y, uw, 7, "F"); }
    doc.setTextColor(...lime); doc.setFontSize(7); doc.setFont("helvetica","bold"); doc.text(day.slice(0,3).toUpperCase(), mg+3, y+4.5);
    doc.setTextColor(...white); doc.setFont("helvetica","normal"); doc.setFontSize(8); doc.text(act||"", mg+20, y+4.5); y += 7;
  }); y += 4;
  if (plan.tips && plan.tips.length) {
    checkY(20); doc.setTextColor(...lime); doc.setFontSize(10); doc.setFont("helvetica","bold"); doc.text("PRO TIPS", mg, y); y += 6;
    plan.tips.forEach(tip => { checkY(8); doc.setTextColor(...sub); doc.setFont("helvetica","normal"); doc.setFontSize(8); doc.splitTextToSize("• "+tip, uw-4).forEach(l => { checkY(5); doc.text(l, mg+2, y); y += 4.5; }); y += 2; });
  }
  doc.setFillColor(...lime); doc.rect(0, ph-10, pw, 10, "F");
  doc.setTextColor(...dark); doc.setFontSize(7); doc.setFont("helvetica","bold");
  doc.text("AI FOR SELF GROWTH — YOUR PERSONALIZED TRAINING BLUEPRINT", pw/2, ph-4.5, {align:"center"});
  doc.save((plan.title||"training-plan").replace(/\s+/g,"-").toLowerCase()+".pdf");
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

  const startOverBtn = document.getElementById("start-over-btn");
  if (startOverBtn) startOverBtn.addEventListener("click", () => {
    state = { niche: "", level: "beginner", duration: "1_month", goal: "", step: 1, plan: null };
    showPage("page-wizard"); setTimeout(initWizard, 50);
  });

  const downloadBtn = document.getElementById("download-btn");
  if (downloadBtn) downloadBtn.addEventListener("click", downloadPDF);
});