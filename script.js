
// Language switcher: English / Italian
const languageToggle = document.getElementById("languageToggle");
const ageGate = document.getElementById("ageGate");
const ageYes = document.getElementById("ageYes");
const ageError = document.getElementById("ageError");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const dobDay = document.getElementById("dobDay");
const dobMonth = document.getElementById("dobMonth");
const dobYear = document.getElementById("dobYear");
const rememberAge = document.getElementById("rememberAge");
const ageLanguageToggle = document.getElementById("ageLanguageToggle");
let currentLanguage = localStorage.getItem("lugLanguage") || "en";

const translations = {
  en: {
    ageKicker: "Before you enter",
    ageTitle: "Please enter your date of birth",
    ageRequirement: "You must be 18 or older to enter this website.",
    dobDay: "Day", dobMonth: "Month", dobYear: "Year",
    enterSite: "Enter", under18: "I’m under 18", rememberAge: "Remember me on this device",
    ageLegal: "By entering this site, you confirm that you are of legal drinking age.",
    responsible: "Drink responsibly.",
    navSelection: "Selection", navComing: "Coming Soon", navCommitment: "Commitment", navStory: "Our Story", navDistillers: "Distillers", navFollow: "Follow",
    heroKicker: "Irish Selection · Italy", heroTitle: "The spirit of Ireland,<br><em>poured with Italian style.</em>",
    heroCopy: "Characterful whiskey and botanical gin, selected for restaurants, cocktail bars and Italian connoisseurs.", discover: "Discover",
    selectionKicker: "01 · The Selection", selectionTitle: "Irish character.<br><em>Italian appreciation.</em>", selectionLabel: "The Selection",
    whiskeyLabel: "Irish Whiskey", ginLabel: "Irish Gin",
    whiskeyKicker: "IRISH WHISKEY", whiskeyTitle: "Deep, smooth, unmistakably Irish.", whiskeyCopy: "From harmonious blends to patiently matured single malts, a selection made for sipping neat and for cocktails with a distinctive signature.", whiskeyNotes: "Honey · toasted wood · warm spice",
    ginKicker: "IRISH GIN", ginTitle: "Bold botanicals, contemporary spirit.", ginCopy: "Small-batch gins with juniper berries and surprising botanicals: bright in a gin and tonic, refined in signature cocktails.", ginNotes: "Juniper · citrus · aromatic botanicals",
    comingKicker: "02 · On the Horizon", comingCopy: "See the exciting distilleries.<br>Discover what's next.",
    commitKicker: "03 · Our Commitment", commitTitle: "From distillery<br><em>to your venue.</em>", commitLead: "A considered selection from independent Irish producers.", commit1: "Quality and traceability for the Italian market", commit2: "Characterful bottles, made to be shared", commit3: "A direct connection between exceptional producers and the people who serve them",
    storyKicker: "04 · Our Story", storyTitle: "From Ireland,<br><em>with purpose.</em>", storyCopy: "We look for spirits with a sense of place, personality and a story worth pouring.", storyLink: "Discover our story",
    distillersKicker: "05 · Our Distillers", distillersTitle: "Meet the<br><em>makers.</em>", distillersCopy: "Independent Irish producers whose craft deserves a place at the Italian table.", distillersLink: "Meet our distillers",
    socialKicker: "06 · Stay in the know", socialTitle: "Follow <em>us.</em>", socialCopy: "New bottles, new producers, Irish stories and where to find us."
  },
  it: {
    ageKicker: "Prima di entrare",
    ageTitle: "Inserisci la tua data di nascita",
    ageRequirement: "Devi avere almeno 18 anni per accedere a questo sito.",
    dobDay: "Giorno", dobMonth: "Mese", dobYear: "Anno",
    enterSite: "Entra", under18: "Ho meno di 18 anni", rememberAge: "Ricordami su questo dispositivo",
    ageLegal: "Entrando nel sito confermi di avere l'età legale per consumare alcolici.",
    responsible: "Bevi responsabilmente.",
    navSelection: "Selezione", navComing: "In arrivo", navCommitment: "Il nostro impegno", navStory: "La nostra storia", navDistillers: "I distillatori", navFollow: "Seguici",
    heroKicker: "Selezione irlandese · Italia", heroTitle: "Lo spirito d'Irlanda,<br><em>versato con stile italiano.</em>",
    heroCopy: "Whiskey di carattere e gin botanici, selezionati per ristoranti, cocktail bar e intenditori italiani.", discover: "Scopri",
    selectionKicker: "01 · La selezione", selectionTitle: "Carattere irlandese.<br><em>Gusto italiano.</em>", selectionLabel: "La selezione",
    whiskeyLabel: "Irish Whiskey", ginLabel: "Irish Gin",
    whiskeyKicker: "IRISH WHISKEY", whiskeyTitle: "Profondo, morbido, inconfondibilmente irlandese.", whiskeyCopy: "Da blend armoniosi a single malt maturati con pazienza, una selezione da gustare liscia o in cocktail dalla firma distintiva.", whiskeyNotes: "Miele · legno tostato · spezie calde",
    ginKicker: "IRISH GIN", ginTitle: "Botaniche audaci, spirito contemporaneo.", ginCopy: "Gin artigianali con bacche di ginepro e botaniche sorprendenti: brillanti nel gin tonic, raffinati nei cocktail d'autore.", ginNotes: "Ginepro · agrumi · botaniche aromatiche",
    comingKicker: "02 · All'orizzonte", comingCopy: "Scopri i distillatori più interessanti.<br>Scopri cosa sta arrivando.",
    commitKicker: "03 · Il nostro impegno", commitTitle: "Dalla distilleria<br><em>al tuo locale.</em>", commitLead: "Una selezione curata di produttori irlandesi indipendenti.", commit1: "Qualità e tracciabilità per il mercato italiano", commit2: "Bottiglie di carattere, da condividere", commit3: "Un legame diretto tra produttori eccezionali e chi porta i loro distillati al pubblico",
    storyKicker: "04 · La nostra storia", storyTitle: "Dall'Irlanda,<br><em>con uno scopo.</em>", storyCopy: "Cerchiamo distillati con un senso del luogo, personalità e una storia che meriti di essere raccontata.", storyLink: "Scopri la nostra storia",
    distillersKicker: "05 · I nostri distillatori", distillersTitle: "Incontra i<br><em>produttori.</em>", distillersCopy: "Produttori irlandesi indipendenti il cui savoir-faire merita un posto sulla tavola italiana.", distillersLink: "Scopri i nostri distillatori",
    socialKicker: "06 · Resta aggiornato", socialTitle: "Seguici <em>sui social.</em>", socialCopy: "Nuove bottiglie, nuovi produttori, storie irlandesi e dove trovarci."
  }
};

function applyLanguage(lang) {
  currentLanguage = lang;
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.title = lang === "it" ? "L’Ultima Goccia | Irish Whiskey & Gin in Italia" : "L'Ultima Goccia | Irish Spirits · Italy";
  document.querySelector('meta[name="description"]').setAttribute("content", lang === "it" ? "L’Ultima Goccia porta in Italia una selezione curata di Irish whiskey e gin botanici per ristoranti, cocktail bar e intenditori." : "L'Ultima Goccia — Irish spirits selected for the Italian market.");
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.innerHTML = dict[key];
  });
  languageToggle.textContent = lang === "en" ? "IT" : "EN";
  languageToggle.setAttribute("aria-label", lang === "en" ? "Switch to Italian" : "Passa all'inglese");
  ageLanguageToggle.textContent = lang === "en" ? "IT" : "EN";
  ageLanguageToggle.setAttribute("aria-label", lang === "en" ? "Switch to Italian" : "Passa all'inglese");
  localStorage.setItem("lugLanguage", lang);
}

languageToggle.addEventListener("click", () => applyLanguage(currentLanguage === "en" ? "it" : "en"));
applyLanguage(currentLanguage);

// Age verification. The visitor can choose to remember the confirmation on this device.

function closeAgeGate() {
  ageGate.classList.add("hidden");
  document.body.classList.remove("locked");
}

if (localStorage.getItem("lugAgeVerified") === "yes" || sessionStorage.getItem("lugAgeVerified") === "yes") {
  closeAgeGate();
}

function is18OrOlder(day, month, year) {
  const d = Number(day);
  const m = Number(month);
  const y = Number(year);
  if (!Number.isInteger(d) || !Number.isInteger(m) || !Number.isInteger(y)) return false;
  if (y < 1900 || y > new Date().getFullYear() || m < 1 || m > 12 || d < 1 || d > 31) return false;

  const dob = new Date(y, m - 1, d);
  if (dob.getFullYear() !== y || dob.getMonth() !== m - 1 || dob.getDate() !== d) return false;

  const today = new Date();
  let age = today.getFullYear() - y;
  const monthDiff = today.getMonth() - (m - 1);
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < d)) age--;
  return age >= 18;
}

function getAgeError() {
  return currentLanguage === "it"
    ? "Inserisci una data di nascita valida. Devi avere almeno 18 anni per entrare."
    : "Please enter a valid date of birth. You must be 18 or older to enter.";
}

[dobDay, dobMonth, dobYear].forEach((input, index, fields) => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "");
    ageError.textContent = "";
    if (input.value.length === input.maxLength && fields[index + 1]) fields[index + 1].focus();
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") ageYes.click();
  });
});

ageYes.addEventListener("click", () => {
  if (is18OrOlder(dobDay.value, dobMonth.value, dobYear.value)) {
    if (rememberAge.checked) {
      localStorage.setItem("lugAgeVerified", "yes");
    } else {
      sessionStorage.setItem("lugAgeVerified", "yes");
    }
    closeAgeGate();
  } else {
    ageError.textContent = getAgeError();
    dobDay.focus();
  }
});

ageLanguageToggle.addEventListener("click", () => applyLanguage(currentLanguage === "en" ? "it" : "en"));

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.classList.toggle("active", open);
  menuToggle.setAttribute("aria-expanded", open);
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Reveal sections as they enter the viewport.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Respect reduced-motion preferences.
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.style.scrollBehavior = "auto";
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
}
