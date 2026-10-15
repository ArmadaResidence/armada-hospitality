/* =====================================================================
   Armada Residence — Hospitality packages site
   يقرأ المحتوى من packages-data.js ويعرضه باللغة المختارة.
   Reads content from packages-data.js and renders it in the active language.
   ===================================================================== */
(function () {
  "use strict";

  var D = window.ARMADA;
  var STORAGE_KEY = "armada-lang";
  var lang = document.documentElement.lang === "en" ? "en" : "ar";

  /* ---------------- helpers ---------------- */
  function t(o) { return o ? (o[lang] != null ? o[lang] : o.ar) : ""; }
  function esc(v) {
    return String(v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fmt(str, vars) { return str.replace(/\{(\w+)\}/g, function (_, k) { return vars[k]; }); }
  function pad(n) { return n < 10 ? "0" + n : String(n); }
  function ui(key) { return t(D.ui[key]); }
  // يسمح بكسر البريد عند @ في الشاشات الضيقة / let e-mails wrap at "@" on narrow screens
  function mailText(m) { return esc(m).replace("@", "<wbr>@"); }

  // عدد الأصناف بصيغة عربية صحيحة / correct Arabic plural for item counts
  function itemsLabel(n) {
    if (lang === "en") return n + (n === 1 ? " item" : " items");
    if (n === 1) return "صنف واحد";
    if (n === 2) return "صنفان";
    if (n <= 10) return n + " أصناف";
    return n + " صنفًا";
  }
  function packagesLabel(n) {
    if (lang === "en") return n + (n === 1 ? " package" : " packages");
    if (n === 1) return "باقة واحدة";
    if (n === 2) return "باقتان";
    if (n <= 10) return n + " باقات";
    return n + " باقة";
  }

  var ICON = {
    download: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
    phone: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3.5h3.2l1.6 4.2-2.1 1.4a11.5 11.5 0 0 0 7.2 7.2l1.4-2.1 4.2 1.6V19a1.8 1.8 0 0 1-1.9 1.8A16.5 16.5 0 0 1 3.2 5.4 1.8 1.8 0 0 1 5 3.5z"/></svg>',
    chat: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.6-4.4a8.4 8.4 0 1 1 15.4-4.5z"/></svg>',
    mail: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/></svg>',
    globe: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19"/><path d="M12 2.5c2.6 2.6 3.9 5.8 3.9 9.5s-1.3 6.9-3.9 9.5c-2.6-2.6-3.9-5.8-3.9-9.5S9.4 5.1 12 2.5z"/></svg>',
    portal: '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="7.5" width="17" height="12" rx="2"/><path d="M8.5 7.5V5.8A1.8 1.8 0 0 1 10.3 4h3.4a1.8 1.8 0 0 1 1.8 1.8v1.7"/><path d="M3.5 13h17"/></svg>'
  };

  function pdfLink(cls) {
    return '<a class="btn-pdf js-pdf ' + (cls || "") + '" href="./' + esc(t(D.ui.pdfFile)) + '" download="' + esc(t(D.ui.pdfName)) +
      '" type="application/pdf">' + ICON.download + "<span>" + esc(ui("download")) + "</span></a>";
  }

  /* ---------------- render: hero ---------------- */
  function renderHero() {
    var pk = D.allPackages();
    var minPrice = Math.min.apply(null, pk.map(function (p) { return p.price; }));
    var S = D.site;
    var mosaic = S.coverPhotos.map(function (key) {
      var ph = D.photos[key];
      return '<figure class="mosaic-item"><img src="./' + esc(ph.src) + '" alt="' + esc(t(ph.caption)) + '" width="900" height="675"' +
        ' decoding="async"><figcaption>' + esc(t(ph.caption)) + "</figcaption></figure>";
    }).join("");

    return '<section class="hero" id="top" data-anchor>' +
      '<div class="wrap hero-grid">' +
        '<div class="hero-text">' +
          '<h1 class="hero-title"><span class="ht-1">' + esc(t(S.title1)) + '</span> <span class="ht-2">' + esc(t(S.title2)) + "</span></h1>" +
          '<p class="hero-tagline">' + esc(t(S.tagline)) + "</p>" +
          '<p class="hero-intro">' + esc(t(S.intro)) + "</p>" +
          '<div class="hero-cta">' + pdfLink("btn-pdf--lg") + "</div>" +
          '<ul class="facts">' +
            '<li><span class="fact-num">' + pk.length + '</span><span class="fact-lbl">' + esc(ui("statPackages")) + "</span></li>" +
            '<li><span class="fact-num">' + D.categories.length + '</span><span class="fact-lbl">' + esc(ui("statCategories")) + "</span></li>" +
            '<li><span class="fact-num"><small>' + esc(ui("statFrom")) + "</small> " + minPrice + '</span><span class="fact-lbl">' + esc(ui("statFromLabel")) + "</span></li>" +
            '<li><span class="fact-num fact-word">' + esc(ui("statPricing")) + '</span><span class="fact-lbl">' + esc(ui("statPricingLabel")) + "</span></li>" +
          "</ul>" +
        "</div>" +
        '<div class="mosaic">' + mosaic + "</div>" +
      "</div>" +
    "</section>";
  }

  /* ---------------- render: price index + terms ---------------- */
  function renderPrices() {
    var groups = D.categories.map(function (c) {
      var rows = c.packages.map(function (p) {
        return '<li><a class="prow" href="#pkg-' + esc(p.id) + '">' +
          '<span class="prow-name">' + esc(t(p.name)) + (p.subtitle ? "<small>" + esc(t(p.subtitle)) + "</small>" : "") + "</span>" +
          '<span class="prow-lead" aria-hidden="true"></span>' +
          '<span class="prow-price"><b>' + p.price + "</b> " + esc(ui("currency")) + "</span></a></li>";
      }).join("");
      return '<article class="pgroup">' +
        '<header class="pgroup-head"><h3><a href="#' + esc(c.id) + '">' + esc(t(c.name)) + "</a></h3>" +
        '<span class="pgroup-count">' + esc(packagesLabel(c.packages.length)) + "</span></header>" +
        (c.subtitle ? '<p class="pgroup-sub">' + esc(t(c.subtitle)) + "</p>" : "") +
        '<ul class="prows">' + rows + "</ul></article>";
    }).join("");

    var terms = D.site.terms.map(function (tm) {
      return '<li class="term' + (tm.highlight ? " term--hl" : "") + '"><span class="term-val">' + esc(t(tm.value)) +
        '</span><span class="term-lbl">' + esc(t(tm.label)) + "</span></li>";
    }).join("");

    return '<section class="prices" id="prices" data-anchor aria-labelledby="h-prices">' +
      '<div class="wrap">' +
        '<h2 class="sec-title" id="h-prices">' + esc(ui("pricesTitle")) + "</h2>" +
        '<p class="sec-lead">' + esc(t(D.site.pricesIntroWeb)) + "</p>" +
        '<div class="pgroups">' + groups + "</div>" +
        '<div class="terms" id="terms" data-anchor>' +
          '<h3 class="terms-title">' + esc(ui("termsTitle")) + "</h3>" +
          '<ul class="terms-list">' + terms + "</ul>" +
          '<p class="terms-note">' + esc(t(D.site.termsNote)) + "</p>" +
        "</div>" +
      "</div>" +
    "</section>";
  }

  /* ---------------- render: packages ---------------- */
  function renderItem(it) {
    return "<li>" + esc(t(it)) + (it.tag ? ' <span class="tag">' + esc(t(it.tag)) + "</span>" : "") + "</li>";
  }

  function renderSection(sec) {
    var groups = sec.groups.map(function (gr) {
      return (gr.label ? '<p class="grp">' + esc(t(gr.label)) + "</p>" : "") +
        '<ul class="items">' + gr.items.map(renderItem).join("") + "</ul>";
    }).join("");
    return '<section class="msec"><h4>' + esc(t(sec.title)) + "</h4>" +
      (sec.note ? '<p class="msec-note">' + esc(t(sec.note)) + "</p>" : "") + groups + "</section>";
  }

  function renderPackage(p, idx, total) {
    var ph = D.photos[p.photo];
    var name = p.nameParts
      ? '<span class="pn-1">' + esc(t(p.nameParts)[0]) + '</span> <span class="pn-2">' + esc(t(p.nameParts)[1]) + "</span>"
      : esc(t(p.name));
    var chips = '<li class="chip">' + esc(itemsLabel(D.countItems(p))) + "</li>" +
      (p.minGuests ? '<li class="chip chip--b">' + esc(fmt(ui("minGuests"), { n: p.minGuests })) + "</li>" : "");
    var incl = p.sections.map(function (sec) { return "<li>" + esc(t(sec.title)) + "</li>"; }).join("");

    return '<article class="pkg" id="pkg-' + esc(p.id) + '" data-anchor aria-labelledby="t-' + esc(p.id) + '">' +
      '<div class="pkg-rail"><div class="rail-in">' +
        '<p class="pkg-idx" aria-label="' + esc(fmt(ui("packageOf"), { a: idx, b: total })) + '"><span aria-hidden="true">' + pad(idx) + " / " + pad(total) + "</span></p>" +
        '<h3 class="pkg-name" id="t-' + esc(p.id) + '">' + name + "</h3>" +
        (p.subtitle ? '<p class="pkg-sub">' + esc(t(p.subtitle)) + "</p>" : "") +
        (p.note ? '<p class="pkg-note">' + esc(t(p.note)) + "</p>" : "") +
        '<ul class="chips">' + chips + "</ul>" +
        '<div class="price">' +
          '<p class="price-fig"><span class="price-num">' + p.price + '</span> <span class="price-cur">' + esc(ui("currency")) + "</span></p>" +
          '<p class="price-lbl">' + esc(ui("perGuest")) + "</p>" +
          '<p class="price-inc">' + esc(ui("inclusive")) + "</p>" +
        "</div>" +
        '<div class="incl"><h4>' + esc(ui("includes")) + "</h4><ul>" + incl + "</ul></div>" +
      "</div></div>" +
      '<div class="pkg-body">' +
        '<figure class="pkg-photo"><img src="./' + esc(ph.src) + '" alt="' + esc(t(ph.caption) + " — " + ui("photoNote")) + '" loading="lazy" decoding="async">' +
          "<figcaption>" + esc(t(ph.caption)) + "</figcaption></figure>" +
        '<div class="menu">' + p.sections.map(renderSection).join("") + "</div>" +
      "</div>" +
    "</article>";
  }

  function renderCategories() {
    return D.categories.map(function (c) {
      var meta = [packagesLabel(c.packages.length)];
      if (c.subtitle) meta.push(t(c.subtitle));
      if (c.note) meta.push(t(c.note));
      return '<section class="cat" id="' + esc(c.id) + '" data-anchor data-nav aria-labelledby="h-' + esc(c.id) + '">' +
        '<div class="wrap">' +
          '<header class="cat-head"><h2 class="cat-title" id="h-' + esc(c.id) + '">' + esc(t(c.name)) + "</h2>" +
          '<p class="cat-meta">' + meta.map(function (m) { return "<span>" + esc(m) + "</span>"; }).join("") + "</p></header>" +
          c.packages.map(function (p, k) { return renderPackage(p, k + 1, c.packages.length); }).join("") +
        "</div>" +
      "</section>";
    }).join("");
  }

  /* ---------------- render: booking + contact ---------------- */
  function renderBooking() {
    var S = D.site, C = S.contact;
    var steps = S.steps.map(function (st, k) {
      return '<li class="step"><span class="step-num" aria-hidden="true">' + pad(k + 1) + "</span>" +
        '<h3 class="step-title">' + esc(t(st.title)) + '</h3><p class="step-text">' + esc(t(st.text)) + "</p></li>";
    }).join("");

    var mailRes = '<a href="mailto:' + esc(C.reservations) + '" class="ltr">' + mailText(C.reservations) + "</a>";
    var mailInfo = '<a href="mailto:' + esc(C.info) + '" class="ltr">' + mailText(C.info) + "</a>";

    return '<section class="book" id="book" data-anchor data-nav aria-labelledby="h-book">' +
      '<div class="wrap">' +
        '<h2 class="sec-title" id="h-book">' + esc(ui("bookTitle")) + "</h2>" +
        '<ol class="steps">' + steps + "</ol>" +
        '<div class="more">' +
          '<p class="more-title"><span>' + esc(t(S.moreBetter.title1)) + '</span> <span class="more-2">' + esc(t(S.moreBetter.title2)) + "</span></p>" +
          '<p class="more-text">' + esc(t(S.moreBetter.text)) + "</p>" +
        "</div>" +
        '<h2 class="sec-title sec-title--sm" id="contact">' + esc(ui("contactTitle")) + "</h2>" +
        '<div class="contacts">' +
          '<div class="ccard"><p class="ccard-k">' + esc(ui("phoneLabel")) + "</p>" +
            '<p class="ccard-v"><a href="' + esc(C.phoneHref) + '" class="ltr">' + esc(C.phone) + "</a></p>" +
            '<p class="ccard-s">' + esc(t(C.person)) + "</p>" +
            '<p class="ccard-actions"><a class="cbtn" href="' + esc(C.phoneHref) + '">' + ICON.phone + "<span>" + esc(ui("call")) + "</span></a>" +
            '<a class="cbtn" href="' + esc(C.whatsappHref) + '" target="_blank" rel="noopener">' + ICON.chat + "<span>" + esc(ui("whatsapp")) + "</span></a></p></div>" +
          '<div class="ccard"><p class="ccard-k">' + esc(ui("reservations")) + "</p>" +
            '<p class="ccard-v">' + mailRes + "</p>" +
            '<p class="ccard-s">' + esc(t(C.reservationsLabel)) + "</p>" +
            '<p class="ccard-actions"><a class="cbtn" href="mailto:' + esc(C.reservations) + '">' + ICON.mail + "<span>" + esc(ui("emailBtn")) + "</span></a></p></div>" +
          '<div class="ccard"><p class="ccard-k">' + esc(ui("emailWeb")) + "</p>" +
            '<p class="ccard-v">' + mailInfo + "</p>" +
            '<p class="ccard-s"><span class="ltr">' + esc(C.handle) + '</span><br><a href="' + esc(C.websiteHref) + '" target="_blank" rel="noopener" class="ltr">' + esc(C.website) + "</a></p>" +
            '<p class="ccard-actions"><a class="cbtn" href="' + esc(C.websiteHref) + '" target="_blank" rel="noopener">' + ICON.globe + '<span class="ltr">armadaresidence.com</span></a></p></div>' +
          '<div class="ccard ccard--b2b"><p class="ccard-k">B2B</p>' +
            '<p class="ccard-v">' + esc(t(C.b2bLabel)) + "</p>" +
            '<p class="ccard-s">' + esc(ui("b2bText")) + "</p>" +
            '<p class="ccard-actions"><a class="cbtn" href="' + esc(C.b2bHref) + '" target="_blank" rel="noopener">' + ICON.portal + "<span>" + esc(t(C.b2bLabel)) + "</span></a></p></div>" +
        "</div>" +
        '<div class="end-cta"><p>' + esc(ui("downloadAgain")) + "</p>" + pdfLink("btn-pdf--lg") + "</div>" +
      "</div>" +
    "</section>";
  }

  /* ---------------- render: category nav ---------------- */
  function renderNav() {
    var items = ['<li><a href="#prices" data-target="prices">' + esc(ui("navPrices")) + "</a></li>"];
    D.categories.forEach(function (c) {
      items.push('<li><a href="#' + esc(c.id) + '" data-target="' + esc(c.id) + '">' + esc(t(c.navName || c.name)) + "</a></li>");
    });
    items.push('<li><a href="#book" data-target="book">' + esc(ui("navBook")) + "</a></li>");
    document.getElementById("catnav-list").innerHTML = items.join("");
    document.getElementById("catnav").setAttribute("aria-label", ui("navLabel"));
  }

  /* ---------------- static strings + document attributes ---------------- */
  function applyStatic() {
    var root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = ui("pageTitle");
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", ui("metaDesc"));

    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = ui(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-site]").forEach(function (el) { el.textContent = t(D.site[el.getAttribute("data-i18n-site")]); });

    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-set-lang") === lang ? "true" : "false");
    });
    document.querySelector(".lang").setAttribute("aria-label", ui("langGroup"));
    document.getElementById("to-top").setAttribute("aria-label", ui("backTop"));
  }

  // يربط كل أزرار التنزيل بملف اللغة النشطة / bind every download link to the active language file
  function bindPdfLinks() {
    var href = "./" + t(D.ui.pdfFile), name = t(D.ui.pdfName);
    document.querySelectorAll(".js-pdf").forEach(function (a) {
      a.setAttribute("href", href);
      a.setAttribute("download", name);
      a.setAttribute("hreflang", lang);
      var span = a.querySelector("span");
      if (span) span.textContent = ui("download");
    });
  }

  function render() {
    applyStatic();
    renderNav();
    document.getElementById("app").innerHTML = renderHero() + renderPrices() + renderCategories() + renderBooking();
    bindPdfLinks();
    updateNav();
  }

  /* ---------------- keep the reader's place when switching ---------------- */
  function stickyOffset() {
    var h = document.querySelector(".site-header").getBoundingClientRect().height;
    var n = document.getElementById("catnav").getBoundingClientRect().height;
    return h + n;
  }
  function captureAnchor() {
    var off = stickyOffset(), best = null;
    var els = document.querySelectorAll("[data-anchor]");
    for (var k = 0; k < els.length; k++) {
      var r = els[k].getBoundingClientRect();
      if (r.top - off <= 4) best = { id: els[k].id, ratio: r.height ? (off - r.top) / r.height : 0 };
    }
    return best;
  }
  function restoreAnchor(a) {
    if (!a) return;
    var el = document.getElementById(a.id);
    if (!el) return;
    var off = stickyOffset();
    var r = el.getBoundingClientRect();
    var y = window.pageYOffset + r.top - off + Math.max(0, Math.min(1, a.ratio)) * r.height;
    window.scrollTo({ top: Math.max(0, y), left: 0, behavior: "instant" });
  }

  function setLang(next) {
    if (next !== "ar" && next !== "en") return;
    if (next === lang) return;
    var anchor = captureAnchor();
    lang = next;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    try {
      var url = new URL(location.href);
      if (url.searchParams.has("lang")) { url.searchParams.set("lang", lang); history.replaceState(null, "", url.toString()); }
    } catch (e) {}
    render();
    restoreAnchor(anchor);
    // ثبات الموضع بعد تحميل الخطوط والصور / re-apply after fonts settle
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { restoreAnchor(anchor); updateNav(); });
  }

  /* ---------------- category nav highlight ---------------- */
  var navTicking = false;
  function updateNav() {
    navTicking = false;
    var off = stickyOffset() + 24, current = null;
    ["prices"].concat(D.categories.map(function (c) { return c.id; }), ["book"]).forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top - off <= 0) current = id;
    });
    // في أسفل الصفحة يكون القسم الأخير هو الحالي / at the very bottom, the last section is current
    if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 2) current = "book";
    var links = document.querySelectorAll("#catnav-list a");
    links.forEach(function (a) {
      var on = a.getAttribute("data-target") === current;
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
      if (on && a.dataset.shown !== "1") {
        links.forEach(function (o) { o.dataset.shown = ""; });
        a.dataset.shown = "1";
        var list = document.getElementById("catnav-list");
        var lr = list.getBoundingClientRect(), ar = a.getBoundingClientRect();
        if (ar.left < lr.left || ar.right > lr.right) {
          list.scrollBy({ left: (ar.left + ar.width / 2) - (lr.left + lr.width / 2), behavior: "smooth" });
        }
      }
    });
    var toTop = document.getElementById("to-top");
    toTop.hidden = window.pageYOffset < 900;
  }
  window.addEventListener("scroll", function () {
    if (!navTicking) { navTicking = true; window.requestAnimationFrame(updateNav); }
  }, { passive: true });
  window.addEventListener("resize", function () { updateNav(); });

  /* ---------------- events ---------------- */
  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-set-lang]") : null;
    if (b) { e.preventDefault(); setLang(b.getAttribute("data-set-lang")); }
  });

  /* ---------------- start ---------------- */
  render();
  if (location.hash && location.hash.length > 1) {
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) window.requestAnimationFrame(function () { target.scrollIntoView(); });
  }

  // للاختبار / for testing
  window.ArmadaSite = { setLang: setLang, getLang: function () { return lang; } };
})();
