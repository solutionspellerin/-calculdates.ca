/* ============================================================
   CalculDates.ca — Configuration centrale
   Menu dynamique, i18n partagé (FR/EN/ES), pieds de page, pubs
   Un seul point à modifier quand vous ajoutez une page.
   ============================================================ */
(function (global) {
  'use strict';

  // ── Liste des pages du site ───────────────────────────────
  // Pour ajouter une page : ajouter une entrée ici + un fichier .html
  const PAGES = [
    { key: 'home',     href: 'index.html',          fr: 'Calcul dates',          en: 'Date Calculator',    es: 'Calcular fechas' },
    { key: 'garde',    href: 'garde.html',          fr: 'Garde partagée',        en: 'Shared Custody',      es: 'Custodia compartida' },
    { key: 'rotation', href: 'rotation.html',       fr: 'Rotation de travail',   en: 'Work Rotation',       es: 'Rotación laboral' },
    { key: 'grossesse',href: 'grossesse.html',      fr: 'Grossesse (CNESST)',    en: 'Pregnancy (CNESST)',  es: 'Embarazo (CNESST)' },
    { key: 'about',    href: 'about.html',          fr: 'À propos',              en: 'About',               es: 'Acerca de' },
    { key: 'privacy',  href: 'privacy-policy.html', fr: 'Politique de conf.',    en: 'Privacy Policy',      es: 'Privacidad' },
  ];

  // ── Textes partagés (header, pied de page, boutons pub) ──
  const SHARED = {
    fr: {
      headerSubtitle: 'Outil gratuit · Québec',
      footerText:     '© 2026 CalculDates.ca — Outil informatif uniquement. Consultez un professionnel pour votre situation personnelle.',
      affiliateDisclosure: 'En tant que Partenaire Amazon, CalculDates.ca réalise un bénéfice sur les achats remplissant les conditions requises. Ce site contient aussi des liens d\'affiliation (ex: Le CFO masqué) — nous pouvons recevoir une commission sans frais supplémentaires pour vous.',
      adLabel: 'Annonce',
      cfoHeadline: 'Devenez un pro d\'Excel et Power BI',
      cfoSubline: 'Formations francophones pour analystes, contrôleurs et gestionnaires.',
      cfoPromo: 'Utilisez le code promo',
      cfoCTA: 'Voir les formations →',
      alchHeadline: 'Alchimix — le jeu de cartes',
      alchSubline: 'Le jeu de cartes stratégique et magique. Gratuit à essayer!',
      alchCTA: 'Jouez maintenant! →',
      amazonHeadline: 'Nos coups de cœur sur Amazon',
      amazonSubline: 'Livres, agendas et outils pour parents et familles du Québec.',
      amazonCTA: 'Voir sur Amazon →',
      donateTitle: 'Un petit café pour CalculDates.ca ? ☕',
      donateBody: "Ce site est <strong>100 % gratuit</strong> et sans abonnement. Pour couvrir les frais d'hébergement et continuer à développer de nouveaux outils, tout don — même petit — est grandement apprécié. Merci de votre soutien !",
      donateCta: "M'offrir un café ☕",
      donateDismiss: 'Plus tard',
      adblockTitle: 'Bloqueur de publicité détecté',
      adblockBody: "CalculDates.ca est <strong>100 % gratuit</strong> et financé par la publicité. Pour utiliser cet outil, merci de désactiver votre bloqueur (AdBlock, uBlock, Brave Shields, etc.) sur ce site, puis de recharger la page.",
      adblockCta: "J'ai désactivé — recharger la page",
      adblockDismiss: 'Continuer quand même',
    },
    en: {
      headerSubtitle: 'Free tool · Québec',
      footerText:     '© 2026 CalculDates.ca — For informational purposes only. Please consult a professional for your personal situation.',
      affiliateDisclosure: 'As an Amazon Associate, CalculDates.ca earns from qualifying purchases. This site also contains other affiliate links (e.g., Le CFO masqué) — we may earn a commission at no extra cost to you.',
      adLabel: 'Ad',
      cfoHeadline: 'Become an Excel & Power BI pro',
      cfoSubline: 'French-language training for analysts, controllers and managers.',
      cfoPromo: 'Use promo code',
      cfoCTA: 'See the training →',
      alchHeadline: 'Alchimix — the card game',
      alchSubline: 'The strategic and magical card game. Free to try!',
      alchCTA: 'Play now! →',
      amazonHeadline: 'Our Amazon picks',
      amazonSubline: 'Books, planners and tools for Québec parents and families.',
      amazonCTA: 'Shop on Amazon →',
      donateTitle: 'Buy CalculDates.ca a coffee? ☕',
      donateBody: "This site is <strong>100 % free</strong> with no subscription. To cover hosting costs and keep developing new tools, every donation — even a small one — is truly appreciated. Thank you for your support!",
      donateCta: 'Buy me a coffee ☕',
      donateDismiss: 'Maybe later',
      adblockTitle: 'Ad blocker detected',
      adblockBody: "CalculDates.ca is <strong>100 % free</strong> and supported by advertising. To use this tool, please disable your ad blocker (AdBlock, uBlock, Brave Shields, etc.) on this site, then reload the page.",
      adblockCta: 'I disabled it — reload the page',
      adblockDismiss: 'Continue anyway',
    },
    es: {
      headerSubtitle: 'Herramienta gratuita · Québec',
      footerText:     '© 2026 CalculDates.ca — Solo con fines informativos. Consulte a un profesional para su situación personal.',
      affiliateDisclosure: 'Como Afiliado de Amazon, CalculDates.ca obtiene ingresos por compras que cumplan los requisitos. Este sitio también contiene otros enlaces de afiliados (ej. Le CFO masqué) — podemos recibir una comisión sin costo adicional para usted.',
      adLabel: 'Anuncio',
      cfoHeadline: 'Conviértase en experto de Excel y Power BI',
      cfoSubline: 'Formaciones en francés para analistas, contables y gerentes.',
      cfoPromo: 'Use el código promo',
      cfoCTA: 'Ver las formaciones →',
      alchHeadline: 'Alchimix — el juego de cartas',
      alchSubline: 'El juego de cartas estratégico y mágico. ¡Gratis para probar!',
      alchCTA: '¡Juega ahora! →',
      amazonHeadline: 'Nuestras recomendaciones Amazon',
      amazonSubline: 'Libros, agendas y herramientas para padres y familias de Quebec.',
      amazonCTA: 'Ver en Amazon →',
      donateTitle: '¿Un cafecito para CalculDates.ca? ☕',
      donateBody: "Este sitio es <strong>100 % gratuito</strong>, sin suscripción. Para cubrir los gastos de alojamiento y seguir desarrollando nuevas herramientas, toda donación — por pequeña que sea — es muy apreciada. ¡Gracias por su apoyo!",
      donateCta: 'Invitarme un café ☕',
      donateDismiss: 'Más tarde',
      adblockTitle: 'Bloqueador de anuncios detectado',
      adblockBody: "CalculDates.ca es <strong>100 % gratuito</strong> y se financia con publicidad. Para usar esta herramienta, por favor desactive su bloqueador (AdBlock, uBlock, Brave Shields, etc.) en este sitio y recargue la página.",
      adblockCta: 'Lo desactivé — recargar la página',
      adblockDismiss: 'Continuar igualmente',
    },
  };

  // ── Détection langue (persistance via localStorage) ──────
  function getStoredLang() {
    try { return localStorage.getItem('calculdates_lang') || null; } catch (e) { return null; }
  }
  function setStoredLang(l) {
    try { localStorage.setItem('calculdates_lang', l); } catch (e) {}
  }

  // ── Rendu du menu ─────────────────────────────────────────
  function renderNav(lang, activeKey, containerId) {
    const c = document.getElementById(containerId || 'siteNav');
    if (!c) return;
    c.innerHTML = PAGES.map(function (p) {
      const label = p[lang] || p.fr;
      const isActive = p.key === activeKey ? ' active' : '';
      return '<a href="' + p.href + '" class="nav-link' + isActive + '">' + label + '</a>';
    }).join('');
  }

  // ── Rendu des liens du pied de page ───────────────────────
  function renderFooterLinks(lang, containerId) {
    const c = document.getElementById(containerId || 'footerLinks');
    if (!c) return;
    c.innerHTML = PAGES.map(function (p) {
      const label = p[lang] || p.fr;
      return '<a href="' + p.href + '">' + label + '</a>';
    }).join('');
  }

  // ── Toggle 3-langues ──────────────────────────────────────
  // Cycle: fr → en → es → fr
  function cycleLang(current) {
    return current === 'fr' ? 'en' : current === 'en' ? 'es' : 'fr';
  }

  // ── Génération du bloc pub CFO masqué ─────────────────────
  function cfoMasqueAd(lang) {
    const t = SHARED[lang] || SHARED.fr;
    return [
      '<a href="https://lecfomasque.com/ref/107/" target="_blank" rel="sponsored noopener" class="ad-cfo">',
      '  <div class="ad-cfo-inner">',
      '    <img src="images/cfo-masque.svg" alt="Le CFO masqué" class="ad-cfo-logo" loading="lazy" />',
      '    <div class="ad-cfo-text">',
      '      <div class="ad-cfo-headline">' + t.cfoHeadline + '</div>',
      '      <div class="ad-cfo-subline">' + t.cfoSubline + '</div>',
      '      <div class="ad-cfo-promo">' + t.cfoPromo + ' <span class="ad-cfo-code">MPP5%Rabais</span></div>',
      '      <div class="ad-cfo-cta">' + t.cfoCTA + '</div>',
      '    </div>',
      '  </div>',
      '  <div class="ad-label">' + t.adLabel + '</div>',
      '</a>'
    ].join('\n');
  }

  // ── Génération du bloc pub Alchimix ───────────────────────
  function alchimixAd(lang) {
    const t = SHARED[lang] || SHARED.fr;
    return [
      '<a href="https://alchimix-app.com/" target="_blank" rel="sponsored noopener" class="ad-alch">',
      '  <div class="ad-alch-inner">',
      '    <img src="images/alchimix.png" alt="Alchimix" class="ad-alch-banner" loading="lazy" />',
      '    <div class="ad-alch-text">',
      '      <div class="ad-alch-headline">' + t.alchHeadline + '</div>',
      '      <div class="ad-alch-subline">' + t.alchSubline + '</div>',
      '      <div class="ad-alch-cta">' + t.alchCTA + '</div>',
      '    </div>',
      '  </div>',
      '  <div class="ad-label">' + t.adLabel + '</div>',
      '</a>'
    ].join('\n');
  }

  // ── Pub Amazon (lien affilié simple) ──────────────────────
  // Le tag est : amazingam068f-20
  function amazonAd(lang) {
    const t = SHARED[lang] || SHARED.fr;
    const url = 'https://www.amazon.ca/?tag=amazingam068f-20';
    return [
      '<a href="' + url + '" target="_blank" rel="sponsored noopener" class="ad-amz">',
      '  <div class="ad-amz-inner">',
      '    <img src="images/amazon.svg" alt="Amazon" class="ad-amz-logo" loading="lazy" />',
      '    <div class="ad-amz-text">',
      '      <div class="ad-amz-headline">' + t.amazonHeadline + '</div>',
      '      <div class="ad-amz-subline">' + t.amazonSubline + '</div>',
      '      <div class="ad-amz-cta">' + t.amazonCTA + ' <span aria-hidden="true">›</span></div>',
      '    </div>',
      '  </div>',
      '  <div class="ad-label">' + t.adLabel + '</div>',
      '</a>'
    ].join('\n');
  }

  // ── Popup « Buy Me a Coffee » ─────────────────────────────
  // URL : https://buymeacoffee.com/solutionspellerin
  const DONATE_URL = 'https://buymeacoffee.com/solutionspellerin';
  const DONATE_SESSION_KEY = 'calculdates_donate_shown';

  function buildDonatePopup(lang) {
    const t = SHARED[lang] || SHARED.fr;
    // Évite les doublons
    let overlay = document.getElementById('donateOverlay');
    if (overlay) overlay.remove();
    overlay = document.createElement('div');
    overlay.id = 'donateOverlay';
    overlay.className = 'donate-overlay';
    overlay.innerHTML = [
      '<div class="donate-modal" role="dialog" aria-modal="true" aria-labelledby="donateTitle">',
      '  <button class="donate-close" aria-label="Fermer" onclick="CDSite.hideDonatePopup()">×</button>',
      '  <div class="donate-emoji">☕</div>',
      '  <h3 id="donateTitle" class="donate-title">' + t.donateTitle + '</h3>',
      '  <p class="donate-body">' + t.donateBody + '</p>',
      '  <div class="donate-actions">',
      '    <a href="' + DONATE_URL + '" target="_blank" rel="noopener" class="donate-cta" onclick="CDSite.hideDonatePopup()">' + t.donateCta + '</a>',
      '    <button class="donate-dismiss" onclick="CDSite.hideDonatePopup()">' + t.donateDismiss + '</button>',
      '  </div>',
      '</div>'
    ].join('\n');
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) hideDonatePopup();
    });
    document.body.appendChild(overlay);
    // Animation d'entrée
    requestAnimationFrame(function () { overlay.classList.add('is-visible'); });
  }

  function showDonatePopup(lang, opts) {
    opts = opts || {};
    lang = lang || getStoredLang() || 'fr';
    // Si déjà affiché dans cette session et pas forcé, on saute
    if (!opts.force) {
      try {
        if (sessionStorage.getItem(DONATE_SESSION_KEY) === '1') return false;
      } catch (e) {}
    }
    buildDonatePopup(lang);
    try { sessionStorage.setItem(DONATE_SESSION_KEY, '1'); } catch (e) {}
    return true;
  }

  function hideDonatePopup() {
    const overlay = document.getElementById('donateOverlay');
    if (!overlay) return;
    overlay.classList.remove('is-visible');
    setTimeout(function () { if (overlay && overlay.parentNode) overlay.remove(); }, 200);
  }

  // Attache le popup à un bouton (affichage différé)
  function attachDonateToButton(btnId, lang, delay) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener('click', function () {
      setTimeout(function () {
        showDonatePopup(lang || getStoredLang() || 'fr');
      }, delay || 500);
    });
  }

  // ── Popup « Adblock détecté » ────────────────────────────
  // Détecte les bloqueurs courants (AdBlock, uBlock, Brave Shields…)
  // et invite l'utilisateur à les désactiver pour soutenir le site.
  const ADBLOCK_SESSION_KEY = 'calculdates_adblock_dismissed';

  // Détection : combine deux signaux — un faux bloc « .ads/.adsbox »
  // que les filtres masquent + l'absence de la variable adsbygoogle
  // (script Google AdSense bloqué).
  function detectAdblock(callback) {
    try {
      const bait = document.createElement('div');
      bait.className = 'cd-adbait ads ad adsbox doubleclick ad-placement carbon-ads';
      bait.setAttribute('aria-hidden', 'true');
      bait.innerHTML = '&nbsp;';
      const append = function () { document.body.appendChild(bait); };
      if (document.body) append();
      else document.addEventListener('DOMContentLoaded', append);

      setTimeout(function () {
        let baitBlocked = true;
        try {
          if (bait.parentNode) {
            const cs = window.getComputedStyle(bait);
            baitBlocked = (
              bait.offsetParent === null ||
              bait.offsetHeight === 0 ||
              bait.offsetWidth === 0 ||
              bait.clientHeight === 0 ||
              cs.display === 'none' ||
              cs.visibility === 'hidden'
            );
            bait.parentNode.removeChild(bait);
          }
        } catch (e) { baitBlocked = true; }
        const adsbyMissing = (typeof window.adsbygoogle === 'undefined');
        // Bloqué si le bait est masqué ET adsbygoogle absent
        // (réduit les faux positifs pendant le chargement d'AdSense).
        callback(baitBlocked && adsbyMissing);
      }, 600);
    } catch (e) {
      callback(false);
    }
  }

  function buildAdblockPopup(lang) {
    const t = SHARED[lang] || SHARED.fr;
    let overlay = document.getElementById('adblockOverlay');
    if (overlay) overlay.remove();
    overlay = document.createElement('div');
    overlay.id = 'adblockOverlay';
    overlay.className = 'adblock-overlay';
    overlay.innerHTML = [
      '<div class="adblock-modal" role="dialog" aria-modal="true" aria-labelledby="adblockTitle">',
      '  <button class="adblock-close" aria-label="Fermer" onclick="CDSite.hideAdblockPopup()">×</button>',
      '  <div class="adblock-emoji">🛡️</div>',
      '  <h3 id="adblockTitle" class="adblock-title">' + t.adblockTitle + '</h3>',
      '  <p class="adblock-body">' + t.adblockBody + '</p>',
      '  <div class="adblock-actions">',
      '    <button class="adblock-cta" onclick="CDSite.reloadPage()">' + t.adblockCta + '</button>',
      '    <button class="adblock-dismiss" onclick="CDSite.hideAdblockPopup()">' + t.adblockDismiss + '</button>',
      '  </div>',
      '</div>'
    ].join('\n');
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) hideAdblockPopup();
    });
    document.body.appendChild(overlay);
    requestAnimationFrame(function () { overlay.classList.add('is-visible'); });
  }

  function showAdblockPopup(lang, opts) {
    opts = opts || {};
    lang = lang || getStoredLang() || 'fr';
    if (!opts.force) {
      try {
        if (sessionStorage.getItem(ADBLOCK_SESSION_KEY) === '1') return false;
      } catch (e) {}
    }
    buildAdblockPopup(lang);
    return true;
  }

  function hideAdblockPopup() {
    const overlay = document.getElementById('adblockOverlay');
    if (!overlay) return;
    overlay.classList.remove('is-visible');
    try { sessionStorage.setItem(ADBLOCK_SESSION_KEY, '1'); } catch (e) {}
    setTimeout(function () { if (overlay && overlay.parentNode) overlay.remove(); }, 200);
  }

  function reloadPage() {
    try { sessionStorage.removeItem(ADBLOCK_SESSION_KEY); } catch (e) {}
    window.location.reload();
  }

  // Détection automatique au chargement (léger délai pour laisser
  // AdSense le temps de tenter de charger).
  function autoCheckAdblock(lang, delay) {
    const run = function () {
      setTimeout(function () {
        detectAdblock(function (blocked) {
          if (blocked) showAdblockPopup(lang || getStoredLang() || 'fr');
        });
      }, delay || 1200);
    };
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run);
    }
  }

  // ── Exposition globale ────────────────────────────────────
  global.CDSite = {
    PAGES: PAGES,
    SHARED: SHARED,
    renderNav: renderNav,
    renderFooterLinks: renderFooterLinks,
    cycleLang: cycleLang,
    getStoredLang: getStoredLang,
    setStoredLang: setStoredLang,
    cfoMasqueAd: cfoMasqueAd,
    alchimixAd: alchimixAd,
    amazonAd: amazonAd,
    showDonatePopup: showDonatePopup,
    hideDonatePopup: hideDonatePopup,
    attachDonateToButton: attachDonateToButton,
    detectAdblock: detectAdblock,
    showAdblockPopup: showAdblockPopup,
    hideAdblockPopup: hideAdblockPopup,
    reloadPage: reloadPage,
    autoCheckAdblock: autoCheckAdblock,
  };

  // Bootstrap automatique : lance la détection adblock au chargement.
  // Pour désactiver sur une page : window.CDSITE_DISABLE_ADBLOCK_CHECK = true;
  if (!global.CDSITE_DISABLE_ADBLOCK_CHECK) {
    autoCheckAdblock();
  }
})(typeof window !== 'undefined' ? window : this);
