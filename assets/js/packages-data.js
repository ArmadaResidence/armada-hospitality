/* =====================================================================
   ضيافة أرمادا ريزيدنس — بيانات الباقات (عربي / English)
   Armada Residence Hospitality — packages data (Arabic / English)

   هذا الملف هو المصدر الوحيد لمحتوى الموقع ولنسخة الـPDF الإنجليزية.
   This file is the single source for the website and the English PDF.

   - كل نص له نسختان: ar و en.  Every text has two versions: ar and en.
   - عدد الأصناف يُحسب تلقائيًا.  Item counts are calculated automatically.
   - الأسعار أرقام فقط (بالريال).  Prices are numbers only (SAR).
   ===================================================================== */

(function () {
  "use strict";

  /* ---- أدوات مختصرة / helpers ---------------------------------------- */
  // صنف: i("الاسم بالعربية", "English name", وسم اختياري)
  function i(ar, en, tag) { var o = { ar: ar, en: en }; if (tag) o.tag = tag; return o; }
  // مجموعة داخل قسم (مثل: ساخنة / باردة / الإضافات)
  function g(label, items) { return { label: label || null, items: items }; }
  // قسم من قائمة الباقة
  function s(key, title, groups, note) { var o = { key: key, title: title, groups: groups }; if (note) o.note = note; return o; }

  /* ---- عناوين الأقسام / section titles -------------------------------- */
  var T = {
    canapes:    { ar: "الكنابيه والساندوتشات", en: "Canapés & Sandwiches" },
    savory:     { ar: "المخبوزات المالحة",      en: "Savory Pastries" },
    appetizers: { ar: "المقبلات والسلطات",      en: "Appetizers & Salads" },
    sweets:     { ar: "الحلويات",               en: "Sweets" },      // للكوفي بريك
    desserts:   { ar: "الحلويات",               en: "Desserts" },    // للبوفيهات
    fruitNuts:  { ar: "الفاكهة والمكسرات",      en: "Fruit & Nuts" },
    fruit:      { ar: "الفاكهة",                en: "Fruit" },
    drinks:     { ar: "المشروبات",              en: "Beverages" },
    soups:      { ar: "الشوربات",               en: "Soups" },
    mains:      { ar: "الأطباق الرئيسية",       en: "Main Courses" },
    sides:      { ar: "الأطباق الجانبية",       en: "Side Dishes" },
    bread:      { ar: "الخبز",                  en: "Bread" }
  };

  /* ---- تسميات المجموعات / group labels -------------------------------- */
  var L = {
    hot:    { ar: "ساخنة",    en: "Hot" },
    cold:   { ar: "باردة",    en: "Cold" },
    extras: { ar: "الإضافات", en: "Accompaniments" }
  };

  /* ---- الوسوم / item tags ---------------------------------------------- */
  var TAG = {
    chickenOrBeef: { ar: "دجاج أو لحم",  en: "chicken or beef" },
    choice:        { ar: "حسب الاختيار", en: "your choice" }
  };

  /* ---- أصناف متكررة / repeated items ----------------------------------- */
  var BREAD = [i("خبز أبيض", "White bread"), i("خبز بر", "Whole-wheat bread")];
  var OIL = i("زيت زيتون", "Olive oil");
  var DRESSING_A = i("صوص دريسنج", "Dressing");
  var DRESSING_B = i("دريسنج صوص", "Dressing");

  /* =================================================================== */
  var DATA = {

    /* ---------- الصور / photos ---------- */
    photos: {
      "group-buffet":      { src: "assets/img/photos/group-buffet.jpg",             caption: { ar: "بوفيه المجموعات",        en: "Group Buffet" } },
      "dessert-flowers":   { src: "assets/img/photos/dessert-corner-flowers.jpg",   caption: { ar: "ركن الحلويات",           en: "Dessert Corner" } },
      "salads-corner":     { src: "assets/img/photos/salads-appetizers-corner.jpg", caption: { ar: "ركن السلطات والمقبلات",  en: "Salads & Appetizers Corner" } },
      "bakery-corner":     { src: "assets/img/photos/bakery-corner.jpg",            caption: { ar: "ركن المخبوزات",          en: "Bakery Corner" } },
      "coffee-shop":       { src: "assets/img/photos/coffee-shop.jpg",              caption: { ar: "الكوفي شوب",             en: "The Coffee Shop" } },
      "dessert-cups":      { src: "assets/img/photos/dessert-corner-cups.jpg",      caption: { ar: "ركن الحلويات",           en: "Dessert Corner" } },
      "hospitality-corner":{ src: "assets/img/photos/hospitality-corner.jpg",       caption: { ar: "ركن الضيافة",            en: "Hospitality Corner" } },
      "coffee-service":    { src: "assets/img/photos/coffee-service.jpg",           caption: { ar: "ضيافة القهوة",           en: "Coffee Service" } },
      "buffet-styling":    { src: "assets/img/photos/buffet-styling.jpg",           caption: { ar: "تزيين البوفيه",          en: "Buffet Styling" } },
      "hot-grills":        { src: "assets/img/photos/hot-dishes-grills.jpg",        caption: { ar: "الأطباق الساخنة",        en: "Hot Dishes" } },
      "hot-fish":          { src: "assets/img/photos/hot-dishes-fish.jpg",          caption: { ar: "الأطباق الساخنة",        en: "Hot Dishes" } },
      "hot-rice":          { src: "assets/img/photos/hot-dishes-rice.jpg",          caption: { ar: "الأطباق الساخنة",        en: "Hot Dishes" } }
    },

    /* ---------- النصوص العامة / general texts ---------- */
    site: {
      brand:   { ar: "ضيافة أرمادا ريزيدنس", en: "Armada Residence Hospitality" },
      footer:  { ar: "ضيافة أرمادا ريزيدنس — الطائف", en: "Armada Residence Hospitality — Taif" },
      title1:  { ar: "ضيافة", en: "Armada Residence" },
      title2:  { ar: "أرمادا ريزيدنس", en: "Hospitality" },
      tagline: { ar: "لكل مناسبة مائدتها", en: "A table for every occasion" },
      intro: {
        ar: "من استراحة القهوة إلى بوفيهات الغداء والعشاء، ومن قوائم الرياضيين إلى البوفيه الآسيوي — اثنتا عشرة باقة تُقدَّم في أرمادا ريزيدنس بالطائف.",
        en: "From coffee breaks to lunch and dinner buffets, and from athletes’ menus to an Asian buffet — twelve packages served at Armada Residence in Taif."
      },
      coverPhotos: ["group-buffet", "dessert-flowers", "salads-corner", "bakery-corner"],
      overviewPhotos: ["coffee-shop", "dessert-cups", "hospitality-corner"],
      bookingPhotos: ["buffet-styling", "coffee-service", "dessert-cups", "coffee-shop"],
      pricesIntro: {
        ar: "جميع الأسعار بالريال السعودي — متوسط سعر الفرد، شاملة الضرائب والرسوم. وتفاصيل كل باقة في صفحتها.",
        en: "All prices are in Saudi riyals — average price per guest, inclusive of taxes and fees. Each package is detailed on its own page."
      },
      pricesIntroWeb: {
        ar: "جميع الأسعار بالريال السعودي — متوسط سعر الفرد، شاملة الضرائب والرسوم. وتفاصيل كل باقة في قسمها أدناه.",
        en: "All prices are in Saudi riyals — average price per guest, inclusive of taxes and fees. Each package is detailed in its section below."
      },
      terms: [
        { kicker: "MINIMUM",   value: { ar: "20", en: "20" },  label: { ar: "شخصًا — أقل عدد لبوفيهات الأكل", en: "guests — minimum for food buffets" } },
        { kicker: "LEAD TIME", value: { ar: "3", en: "3" },    label: { ar: "أيام — مهلة الحجز قبل الموعد", en: "days — booking notice before the event" } },
        { kicker: "DEPOSIT",   value: { ar: "50%", en: "50%" }, label: { ar: "عند التأكيد", en: "upon confirmation" } },
        { kicker: "VOLUME",    value: { ar: "كلما زاد العدد", en: "The more guests" }, label: { ar: "قلّ السعر", en: "the lower the price" }, highlight: true }
      ],
      termsNote: {
        ar: "الكوفي بريك بلا حد أدنى للعدد · مدة الخدمة حسب المتفق عليه · الصور من بوفيهات ومطعم أرمادا ريزيدنس وتعبّر عن أسلوب التقديم، والأصناف المعتمدة لكل باقة هي المذكورة في قائمتها.",
        en: "Coffee breaks have no minimum number of guests · Service duration as agreed · Photos are from Armada Residence buffets and restaurant and illustrate our serving style; the confirmed items for each package are those listed on its menu."
      },
      steps: [
        { title: { ar: "حدّد الباقة وعدد الضيوف", en: "Choose your package and guest count" }, text: { ar: "أقل عدد لبوفيهات الأكل 20 شخصًا", en: "Minimum of 20 guests for food buffets" } },
        { title: { ar: "أرسل موعد المناسبة",      en: "Send us your event date" },             text: { ar: "قبل 3 أيام على الأقل",            en: "At least 3 days in advance" } },
        { title: { ar: "أكّد الحجز",              en: "Confirm your booking" },                text: { ar: "بدفع 50% من المبلغ",              en: "With a 50% payment of the total" } },
        { title: { ar: "نُرتّب الخدمة",            en: "We arrange the service" },              text: { ar: "ومدتها حسب المتفق عليه",          en: "And its duration, as agreed" } }
      ],
      moreBetter: {
        kicker: "THE MORE, THE BETTER",
        title1: { ar: "كلما زاد العدد", en: "The more guests," },
        title2: { ar: "قلّ السعر", en: "the lower the price" },
        text: {
          ar: "أرسلوا عدد الضيوف وموعد المناسبة، ويصلكم السعر المناسب لحجم مجموعتكم — شاملًا الضرائب والرسوم.",
          en: "Send us your guest count and event date, and we will send you the right price for your group size — inclusive of taxes and fees."
        }
      },
      contact: {
        phone: "+966 53 662 2288",
        phoneHref: "tel:+966536622288",
        whatsappHref: "https://wa.me/966536622288",
        person: { ar: "محمد دقاش — المدير التجاري", en: "Mohamed Daqqash — Commercial Director" },
        reservations: "reservation@armadaresidence.com",
        reservationsLabel: { ar: "قسم الحجوزات", en: "Reservations Department" },
        info: "info@armadaresidence.com",
        handle: "@ArmadaR25",
        website: "www.armadaresidence.com",
        websiteHref: "https://www.armadaresidence.com",
        b2bHref: "https://b2b.armadaresidence.com",
        b2bLabel: { ar: "بوابة الشراكات", en: "B2B Portal" },
        qr: "assets/img/qr-b2b-portal.jpg"
      }
    },

    /* ---------- الفئات والباقات / categories & packages ---------- */
    categories: [

      /* ========================= الكوفي بريك ========================= */
      {
        id: "coffee-break",
        kicker: "COFFEE BREAK",
        name: { ar: "الكوفي بريك", en: "Coffee Break" },
        navName: { ar: "الكوفي بريك", en: "Coffee Break" },
        note: { ar: "بلا حد أدنى للعدد", en: "No minimum number of guests" },
        packages: [
          {
            id: "welcome",
            name: { ar: "ضيافة الترحيب", en: "Welcome Hospitality" },
            price: 15,
            minGuests: null,
            photo: "coffee-shop",
            pdfExtraPhotos: ["bakery-corner", "coffee-service"],
            pdfColumns: [["canapes", "sweets"], ["drinks"]],
            sections: [
              s("canapes", T.canapes, [g(null, [
                i("ميني ساندوتش جبنة", "Mini cheese sandwich"),
                i("ميني ساندوتش مرتديلا", "Mini mortadella sandwich", TAG.chickenOrBeef),
                i("ميني ساندوتش تونة", "Mini tuna sandwich")
              ])]),
              s("sweets", T.sweets, [g(null, [
                i("كوكيز", "Cookies")
              ])]),
              s("drinks", T.drinks, [
                g(L.hot,  [i("شاي", "Tea"), i("قهوة", "Coffee")]),
                g(L.cold, [i("عصير تانج", "Tang juice"), i("مياه", "Water")])
              ])
            ]
          },
          {
            id: "gathering",
            name: { ar: "ضيافة اللقاء", en: "Gathering Hospitality" },
            price: 25,
            minGuests: null,
            photo: "bakery-corner",
            pdfExtraPhotos: ["coffee-shop", "hospitality-corner"],
            pdfColumns: [["canapes", "savory", "sweets"], ["drinks"]],
            sections: [
              s("canapes", T.canapes, [g(null, [
                i("ميني ساندوتش مشكّل", "Assorted mini sandwiches")
              ])]),
              s("savory", T.savory, [g(null, [
                i("ميني بيتزا مشكّلة", "Assorted mini pizzas"),
                i("ميني كرواسون", "Mini croissants")
              ])]),
              s("sweets", T.sweets, [g(null, [
                i("إنجليش كيك شوكولاتة", "Chocolate English cake"),
                i("إنجليش كيك فانيليا", "Vanilla English cake"),
                i("مافن كيك شوكولاتة", "Chocolate muffins"),
                i("مافن كيك فانيليا", "Vanilla muffins"),
                i("كوكيز", "Cookies")
              ])]),
              s("drinks", T.drinks, [
                g(L.hot,  [i("قهوة اليوم", "Coffee of the day"), i("شاي", "Tea"), i("ستيشن شاي", "Tea station")]),
                g(L.cold, [i("مياه", "Water"), i("عصير تانج برتقال", "Tang orange juice")])
              ])
            ]
          },
          {
            id: "elite",
            name: { ar: "ضيافة النخبة", en: "Elite Hospitality" },
            price: 60,
            minGuests: null,
            photo: "dessert-flowers",
            pdfExtraPhotos: ["dessert-cups", "buffet-styling"],
            pdfColumns: [["canapes", "savory"], ["appetizers", "sweets"], ["fruitNuts", "drinks"]],
            sections: [
              s("canapes", T.canapes, [g(null, [
                i("كنابيه سلمون مدخن", "Smoked salmon canapés"),
                i("كنابيه جمبري", "Shrimp canapés"),
                i("ميني ساندوتش تركي مدخن", "Mini smoked turkey sandwiches"),
                i("ميني ساندوتش بيف مدخن", "Mini smoked beef sandwiches")
              ])]),
              s("savory", T.savory, [g(null, [
                i("ميني كرواسون مشكّل", "Assorted mini croissants"),
                i("ميني بيتزا مشكّلة", "Assorted mini pizzas"),
                i("فطائر مشكّلة", "Assorted savory pies (fatayer)"),
                i("باتون ساليه", "Bâtons salés")
              ])]),
              s("appetizers", T.appetizers, [g(null, [
                i("سلطة خضار طازجة", "Fresh vegetable salad")
              ])]),
              s("sweets", T.sweets, [g(null, [
                i("ميني سواريه (حلى غربي)", "Mini soirée pastries (Western sweets)"),
                i("ميني حلويات شرقية", "Mini Oriental sweets"),
                i("مافن كيك مشكّل", "Assorted muffins"),
                i("إنجليش كيك مشكّل", "Assorted English cake"),
                i("دونات مشكّلة", "Assorted doughnuts"),
                i("كاسات", "Dessert cups"),
                i("كاثرينا", "Katharina")
              ])]),
              s("fruitNuts", T.fruitNuts, [g(null, [
                i("فاكهة", "Fruit"),
                i("مكسرات", "Nuts")
              ])]),
              s("drinks", T.drinks, [
                g(L.hot,  [i("قهوة أمريكية", "American coffee"), i("قهوة عربية", "Arabic coffee"), i("ستيشن شاي أخضر وشاي أحمر", "Green and black tea station")]),
                g(L.cold, [i("عصير فريش", "Fresh juice"), i("مياه", "Water")])
              ])
            ]
          }
        ]
      },

      /* ===================== بوفيهات الغداء والعشاء ===================== */
      {
        id: "lunch-dinner",
        kicker: "LUNCH & DINNER",
        name: { ar: "بوفيهات الغداء والعشاء", en: "Lunch & Dinner Buffets" },
        navName: { ar: "الغداء والعشاء", en: "Lunch & Dinner" },
        note: { ar: "أقل عدد 20 شخصًا", en: "Minimum of 20 guests" },
        packages: [
          {
            id: "al-dar",
            name: { ar: "مائدة الدار", en: "Al-Dar Table" },
            price: 35,
            minGuests: 20,
            photo: "group-buffet",
            pdfColumns: [["soups", "appetizers"], ["mains", "sides", "bread"], ["desserts", "drinks"]],
            sections: [
              s("soups", T.soups, [g(null, [
                i("شوربة كريمة دجاج", "Cream of chicken soup"),
                i("شوربة لسان عصفور", "Orzo soup")
              ])]),
              s("appetizers", T.appetizers, [
                g(null, [
                  i("حمص", "Hummus"),
                  i("سلطة خضراء", "Green salad"),
                  i("متبل", "Mutabal"),
                  i("فتوش", "Fattoush"),
                  i("سلطة زبادي", "Yogurt salad"),
                  i("سلطة ذرة", "Corn salad")
                ]),
                g(L.extras, [OIL])
              ]),
              s("mains", T.mains, [g(null, [
                i("مشاوي مشكّلة", "Mixed grills"),
                i("بامية باللحم الضاني", "Okra with lamb"),
                i("مكرونة بشاميل", "Pasta béchamel")
              ])]),
              s("sides", T.sides, [g(null, [
                i("أرز أبيض", "White rice"),
                i("بطاطس بالفرن", "Oven-roasted potatoes")
              ])]),
              s("bread", T.bread, [g(null, BREAD)]),
              s("desserts", T.desserts, [g(null, [
                i("جيلي", "Jelly"),
                i("أرز باللبن", "Rice pudding"),
                i("كريم كراميل", "Crème caramel")
              ])]),
              s("drinks", T.drinks, [
                g(L.hot,  [i("شاي", "Tea")]),
                g(L.cold, [i("مياه", "Water"), i("عصير تانج", "Tang juice")])
              ])
            ]
          },
          {
            id: "al-karam",
            name: { ar: "مائدة الكرم", en: "Al-Karam Table" },
            price: 60,
            minGuests: 20,
            photo: "salads-corner",
            pdfColumns: [["soups"], ["appetizers"], ["mains", "sides", "bread"], ["desserts", "drinks"]],
            sections: [
              s("soups", T.soups, [g(null, [
                i("شوربة حريرة مغربية", "Moroccan harira soup"),
                i("شوربة كريمة دجاج", "Cream of chicken soup")
              ])]),
              s("appetizers", T.appetizers, [
                g(null, [
                  i("حمص", "Hummus"),
                  i("سلطة خضراء", "Green salad"),
                  i("متبل", "Mutabal"),
                  i("سلطة فتوش", "Fattoush salad"),
                  i("بابا غنوج", "Baba ghanoush"),
                  i("سلطة ذرة", "Corn salad"),
                  i("ورق عنب", "Stuffed vine leaves"),
                  i("سلطة خضار طازجة", "Fresh vegetable salad")
                ]),
                g(L.extras, [OIL, DRESSING_A])
              ]),
              s("mains", T.mains, [g(null, [
                i("مشاوي مشكّلة", "Mixed grills"),
                i("سمك مقلي", "Fried fish"),
                i("طاجن لحم ضاني", "Lamb tagine"),
                i("مكرونة بشاميل", "Pasta béchamel")
              ])]),
              s("sides", T.sides, [g(null, [
                i("أرز بخاري", "Bukhari rice"),
                i("خضار بالفرن", "Oven-roasted vegetables")
              ])]),
              s("bread", T.bread, [g(null, BREAD)]),
              s("desserts", T.desserts, [g(null, [
                i("حلى شرقي", "Oriental dessert"),
                i("كريم كراميل", "Crème caramel"),
                i("أرز باللبن", "Rice pudding"),
                i("جيلي", "Jelly")
              ])]),
              s("drinks", T.drinks, [
                g(L.hot,  [i("شاي", "Tea")]),
                g(L.cold, [i("مياه", "Water"), i("عصير تانج أو مشروبات غازية", "Tang juice or soft drinks", TAG.choice)])
              ])
            ]
          },
          {
            id: "al-asala",
            name: { ar: "مائدة الأصالة", en: "Al-Asala Table" },
            price: 90,
            minGuests: 20,
            photo: "hot-grills",
            pdfColumns: [["soups"], ["appetizers"], ["mains", "sides", "bread"], ["desserts", "drinks"]],
            sections: [
              s("soups", T.soups, [g(null, [
                i("شوربة عدس", "Lentil soup"),
                i("شوربة شعيرية بالدجاج", "Chicken vermicelli soup")
              ])]),
              s("appetizers", T.appetizers, [
                g(null, [
                  i("سلطة حمص", "Hummus"),
                  i("سلطة فتوش", "Fattoush salad"),
                  i("تبولة", "Tabbouleh"),
                  i("سلطة طحينة", "Tahini salad"),
                  i("سلطة خضراء", "Green salad"),
                  i("سلطة خضار طازجة", "Fresh vegetable salad"),
                  i("مخللات", "Pickles"),
                  i("طماطم مخللة", "Pickled tomatoes"),
                  i("ورق عنب", "Stuffed vine leaves"),
                  i("باذنجان مكدوس", "Eggplant makdous")
                ]),
                g(L.extras, [OIL, DRESSING_A])
              ]),
              s("mains", T.mains, [g(null, [
                i("مشويات مشكّلة", "Mixed grills"),
                i("ملوخية بالدجاج", "Molokhia with chicken"),
                i("سمك صيادية", "Sayadieh fish"),
                i("محاشي مشكّلة", "Assorted mahshi (stuffed vegetables)"),
                i("كباب حلة", "Kebab halla"),
                i("طاجن مكرونة بالدجاج", "Chicken pasta tagine"),
                i("جلاش باللحم المفروم", "Phyllo pie with minced meat")
              ])]),
              s("sides", T.sides, [g(null, [
                i("أرز بالخلطة", "Khalta rice"),
                i("طاجن بامية", "Okra tagine")
              ])]),
              s("bread", T.bread, [g(null, BREAD)]),
              s("desserts", T.desserts, [g(null, [
                i("حلى شرقي", "Oriental dessert"),
                i("أرز باللبن", "Rice pudding"),
                i("كريم كراميل", "Crème caramel"),
                i("مهلبية", "Muhallabia")
              ])]),
              s("drinks", T.drinks, [
                g(L.hot,  [i("شاي", "Tea")]),
                g(L.cold, [i("مياه", "Water"), i("عصير تانج أو مشروبات غازية", "Tang juice or soft drinks", TAG.choice)])
              ])
            ]
          },
          {
            id: "al-bahr",
            name: { ar: "مائدة البحر", en: "Al-Bahr Table" },
            price: 100,
            minGuests: 20,
            photo: "hot-fish",
            pdfColumns: [["soups", "appetizers"], ["mains"], ["sides", "bread", "desserts"], ["fruit", "drinks"]],
            sections: [
              s("soups", T.soups, [g(null, [
                i("شوربة سي فود", "Seafood soup"),
                i("شوربة مشروم كريمي", "Creamy mushroom soup")
              ])]),
              s("appetizers", T.appetizers, [g(null, [
                i("حمص", "Hummus"),
                i("طحينة", "Tahini"),
                i("سلطة سي فود", "Seafood salad"),
                i("سلطة خضراء", "Green salad"),
                i("سلطة زبادي", "Yogurt salad"),
                i("متبل", "Mutabal"),
                i("سلطة جرجير", "Rocket salad"),
                i("سلطة يونانية", "Greek salad")
              ])]),
              s("mains", T.mains, [g(null, [
                i("سمك بانيه", "Breaded fish (pané)"),
                i("جمبري مقلي مع شيبس", "Fried shrimp with chips"),
                i("سمك سنجاري", "Sengari fish"),
                i("طاجن سي فود", "Seafood tagine"),
                i("سمك صيادية", "Sayadieh fish"),
                i("مكرونة بصوص السي فود والصلصة الحارة", "Pasta with seafood sauce and hot sauce"),
                i("ملوخية بالجمبري", "Molokhia with shrimp"),
                i("سمك مشوي بالزيت والليمون", "Grilled fish with oil and lemon")
              ])]),
              s("sides", T.sides, [g(null, [
                i("أرز سي فود", "Seafood rice"),
                i("طاجن بطاطس بالفرن", "Oven-baked potato tagine")
              ])]),
              s("bread", T.bread, [g(null, BREAD)]),
              s("desserts", T.desserts, [g(null, [
                i("حلى شرقي", "Oriental dessert"),
                i("كسترد", "Custard"),
                i("جيلي", "Jelly"),
                i("أرز باللبن", "Rice pudding")
              ])]),
              s("fruit", T.fruit, [g(null, [
                i("فاكهة الموسم", "Seasonal fruit")
              ])]),
              s("drinks", T.drinks, [
                g(L.hot,  [i("شاي", "Tea")]),
                g(L.cold, [i("مياه", "Water"), i("عصير تانج أو مشروبات غازية", "Tang juice or soft drinks", TAG.choice)])
              ])
            ]
          },
          {
            id: "al-tamayuz",
            name: { ar: "مائدة التميّز", en: "Al-Tamayuz Table" },
            price: 100,
            minGuests: 20,
            photo: "dessert-cups",
            pdfColumns: [["soups", "appetizers"], ["mains", "sides", "bread"], ["desserts", "fruit"], ["drinks"]],
            sections: [
              s("soups", T.soups, [g(null, [
                i("شوربة سي فود", "Seafood soup"),
                i("شوربة مشروم آلا كريم", "Mushroom soup à la crème")
              ])]),
              s("appetizers", T.appetizers, [
                g(null, [
                  i("سلطة سيزر", "Caesar salad"),
                  i("سلطة خضراء", "Green salad"),
                  i("سلطة يونانية", "Greek salad"),
                  i("سلطة حمص", "Hummus"),
                  i("سلطة متبل", "Mutabal"),
                  i("سلطة زبادي", "Yogurt salad"),
                  i("ورق عنب", "Stuffed vine leaves"),
                  i("سلطة خضار طازجة", "Fresh vegetable salad"),
                  i("مخللات", "Pickles")
                ]),
                g(L.extras, [DRESSING_A, OIL])
              ]),
              s("mains", T.mains, [g(null, [
                i("مندي لحم ضاني", "Lamb mandi"),
                i("مشاوي مشكّلة", "Mixed grills"),
                i("سمك بانيه مع شيبس", "Breaded fish with chips"),
                i("مسقعة باللحم المفروم", "Moussaka with minced meat"),
                i("طاجن بامية باللحم الضاني", "Okra and lamb tagine"),
                i("مكرونة نجريسكو بالدجاج", "Chicken pasta Negresco")
              ])]),
              s("sides", T.sides, [g(null, [
                i("أرز مندي بالمكسرات", "Mandi rice with nuts"),
                i("بطاطس مكسيكي", "Mexican potatoes")
              ])]),
              s("bread", T.bread, [g(null, [
                i("خبز أبيض عربي", "Arabic white bread"),
                i("خبز بر", "Whole-wheat bread")
              ])]),
              s("desserts", T.desserts, [g(null, [
                i("حلى شرقي مشكّل", "Assorted Oriental desserts"),
                i("كريم كراميل", "Crème caramel"),
                i("حلى غربي", "Western dessert"),
                i("جيلي", "Jelly"),
                i("كسترد", "Custard"),
                i("مهلبية", "Muhallabia"),
                i("كنافة", "Kunafa")
              ])]),
              s("fruit", T.fruit, [g(null, [
                i("فاكهة الموسم", "Seasonal fruit")
              ])]),
              s("drinks", T.drinks, [
                g(L.hot,  [i("شاي", "Tea")]),
                g(L.cold, [i("مياه", "Water"), i("مشروبات غازية أو عصير حسب الاختيار", "Soft drinks or juice, as preferred")])
              ])
            ]
          }
        ]
      },

      /* ========================= قوائم الرياضيين ========================= */
      {
        id: "athletes",
        kicker: "ATHLETES’ MENUS",
        name: { ar: "قوائم الرياضيين", en: "Athletes’ Menus" },
        navName: { ar: "قوائم الرياضيين", en: "Athletes’ Menus" },
        note: { ar: "أقل عدد 20 شخصًا", en: "Minimum of 20 guests" },
        packages: [
          {
            id: "al-himma-select",
            name: { ar: "مائدة الهمّة — مختارة", en: "Al-Himma Table — Select" },
            nameParts: { ar: ["مائدة الهمّة", "— مختارة"], en: ["Al-Himma Table", "— Select"] },
            subtitle: { ar: "بوفيه الفرق والمجموعات الرياضية", en: "Buffet for sports teams and groups" },
            note: { ar: "أعدّها شيف متخصص في التغذية الرياضية", en: "Designed by a chef specializing in sports nutrition" },
            price: 50,
            minGuests: 20,
            photo: "salads-corner",
            pdfColumns: [["soups", "appetizers"], ["mains", "sides", "bread"], ["desserts", "fruit"], ["drinks"]],
            sections: [
              s("soups", T.soups, [g(null, [
                i("شوربة خضار", "Vegetable soup"),
                i("شوربة لسان عصفور", "Orzo soup")
              ])]),
              s("appetizers", T.appetizers, [
                g(null, [
                  i("سلطة خضراء", "Green salad"),
                  i("سلطة ذرة", "Corn salad"),
                  i("سلطة زبادي", "Yogurt salad"),
                  i("سلطة حمص", "Hummus"),
                  i("سلطة خضار طازجة", "Fresh vegetable salad"),
                  i("سلطة متبل", "Mutabal"),
                  i("فتوش / سلطة شامية", "Fattoush / Levantine salad")
                ]),
                g(L.extras, [DRESSING_B, OIL])
              ]),
              s("mains", T.mains, [g(null, [
                i("صدور دجاج مشوية بيكاتا", "Grilled chicken breast piccata"),
                i("سمك مشوي", "Grilled fish"),
                i("مكرونة اسباغيتي (صوص طماطم منفصل)", "Spaghetti (tomato sauce served separately)")
              ])]),
              s("sides", T.sides, [g(null, [
                i("أرز أبيض", "White rice"),
                i("خضار سوتيه", "Sautéed vegetables"),
                i("بطاطس بوريه (مهروسة)", "Mashed potatoes (purée)")
              ])]),
              s("bread", T.bread, [g(null, BREAD)]),
              s("desserts", T.desserts, [g(null, [
                i("جيلي", "Jelly"),
                i("أم علي", "Umm Ali"),
                i("كاسترد", "Custard"),
                i("أرز باللبن", "Rice pudding"),
                i("حلويات شرقية", "Oriental sweets")
              ])], { ar: "للإداريين — اختيار من الأصناف الموجودة", en: "For team officials — a choice from the items listed" }),
              s("fruit", T.fruit, [g(null, [
                i("فاكهة طازجة", "Fresh fruit")
              ])]),
              s("drinks", T.drinks, [
                g(L.hot,  [i("شاي", "Tea")]),
                g(L.cold, [i("مياه", "Water"), i("عصير برتقال", "Orange juice")])
              ])
            ]
          },
          {
            id: "al-himma-classic",
            name: { ar: "مائدة الهمّة — كلاسيكية", en: "Al-Himma Table — Classic" },
            nameParts: { ar: ["مائدة الهمّة", "— كلاسيكية"], en: ["Al-Himma Table", "— Classic"] },
            subtitle: { ar: "بوفيه الفرق والمجموعات الرياضية", en: "Buffet for sports teams and groups" },
            note: { ar: "أعدّها شيف متخصص في التغذية الرياضية", en: "Designed by a chef specializing in sports nutrition" },
            price: 40,
            minGuests: 20,
            photo: "hot-rice",
            pdfColumns: [["soups", "appetizers"], ["mains", "sides", "bread"], ["fruit", "drinks"]],
            sections: [
              s("soups", T.soups, [g(null, [
                i("شوربة خضار", "Vegetable soup")
              ])]),
              s("appetizers", T.appetizers, [
                g(null, [
                  i("سلطة خضراء", "Green salad"),
                  i("سلطة زبادي", "Yogurt salad"),
                  i("سلطة حمص", "Hummus"),
                  i("سلطة خضار طازجة", "Fresh vegetable salad")
                ]),
                g(L.extras, [DRESSING_B, OIL])
              ]),
              s("mains", T.mains, [g(null, [
                i("صدور دجاج مشوية بيكاتا", "Grilled chicken breast piccata"),
                i("مكرونة اسباغيتي (صوص طماطم منفصل)", "Spaghetti (tomato sauce served separately)")
              ])]),
              s("sides", T.sides, [g(null, [
                i("أرز أبيض", "White rice"),
                i("خضار سوتيه", "Sautéed vegetables")
              ])]),
              s("bread", T.bread, [g(null, BREAD)]),
              s("fruit", T.fruit, [g(null, [
                i("فاكهة طازجة", "Fresh fruit")
              ])]),
              s("drinks", T.drinks, [
                g(L.hot,  [i("شاي", "Tea")]),
                g(L.cold, [i("مياه", "Water"), i("عصير برتقال", "Orange juice")])
              ])
            ]
          }
        ]
      },

      /* ========================= البوفيه الآسيوي ========================= */
      {
        id: "asian",
        kicker: "ASIAN BUFFET",
        name: { ar: "البوفيه الآسيوي", en: "Asian Buffet" },
        navName: { ar: "البوفيه الآسيوي", en: "Asian Buffet" },
        subtitle: { ar: "الماليزي والإندونيسي والتايلندي", en: "Malaysian, Indonesian & Thai" },
        note: { ar: "أقل عدد 20 شخصًا", en: "Minimum of 20 guests" },
        packages: [
          {
            id: "al-mashreq-select",
            name: { ar: "مائدة المشرق — مختارة", en: "Al-Mashreq Table — Select" },
            nameParts: { ar: ["مائدة المشرق", "— مختارة"], en: ["Al-Mashreq Table", "— Select"] },
            subtitle: { ar: "بوفيه المأكولات الآسيوية", en: "Asian cuisine buffet" },
            price: 50,
            minGuests: 20,
            photo: "hot-grills",
            pdfColumns: [["soups"], ["appetizers"], ["mains", "sides", "bread"], ["desserts", "fruit", "drinks"]],
            sections: asianSections(false)
          },
          {
            id: "al-mashreq-classic",
            name: { ar: "مائدة المشرق — كلاسيكية", en: "Al-Mashreq Table — Classic" },
            nameParts: { ar: ["مائدة المشرق", "— كلاسيكية"], en: ["Al-Mashreq Table", "— Classic"] },
            subtitle: { ar: "بوفيه المأكولات الآسيوية", en: "Asian cuisine buffet" },
            note: { ar: "صنف بروتين واحد حسب الاختيار", en: "One protein dish of your choice" },
            price: 35,
            minGuests: 20,
            photo: "hot-fish",
            pdfColumns: [["soups"], ["appetizers"], ["mains", "sides", "bread"], ["desserts", "fruit", "drinks"]],
            sections: asianSections(true)
          }
        ]
      }
    ],

    /* ---------- نصوص الواجهة / interface labels ---------- */
    ui: {
      pageTitle:     { ar: "باقات الضيافة — أرمادا ريزيدنس، الطائف", en: "Hospitality Packages — Armada Residence, Taif" },
      metaDesc:      { ar: "باقات الكوفي بريك وبوفيهات الغداء والعشاء وقوائم الرياضيين والبوفيه الآسيوي في أرمادا ريزيدنس بالطائف، بأسعار شاملة الضرائب والرسوم.", en: "Coffee breaks, lunch and dinner buffets, athletes’ menus and an Asian buffet at Armada Residence, Taif — prices inclusive of taxes and fees." },
      skip:          { ar: "انتقل إلى الباقات", en: "Skip to packages" },
      langGroup:     { ar: "اللغة", en: "Language" },
      download:      { ar: "تحميل الباقات PDF", en: "Download PDF" },
      pdfFile:       { ar: "files/armada-coffee-break-buffet-ar.pdf", en: "files/armada-coffee-break-buffet-en.pdf" },
      pdfName:       { ar: "armada-coffee-break-buffet-ar.pdf", en: "armada-coffee-break-buffet-en.pdf" },
      navLabel:      { ar: "فئات الباقات", en: "Package categories" },
      navPrices:     { ar: "الأسعار", en: "Prices" },
      navBook:       { ar: "الحجز والتواصل", en: "Book & Contact" },
      statPackages:  { ar: "باقة ضيافة", en: "hospitality packages" },
      statCategories:{ ar: "فئات تقديم", en: "service categories" },
      statFrom:      { ar: "من", en: "From" },
      statFromLabel: { ar: "ريالًا متوسط سعر الفرد", en: "SAR average per guest" },
      statPricing:   { ar: "شاملة", en: "Inclusive" },
      statPricingLabel: { ar: "الضرائب والرسوم", en: "of taxes and fees" },
      pricesTitle:   { ar: "الباقات والأسعار", en: "Packages & Prices" },
      termsTitle:    { ar: "شروط الحجز", en: "Booking Terms" },
      currency:      { ar: "ريال", en: "SAR" },
      perGuest:      { ar: "متوسط سعر الفرد", en: "Average per guest" },
      inclusive:     { ar: "شاملة الضرائب والرسوم", en: "Inclusive of taxes and fees" },
      includes:      { ar: "تشمل الباقة", en: "Package includes" },
      minGuests:     { ar: "أقل عدد {n} شخصًا", en: "Minimum {n} guests" },
      packageOf:     { ar: "الباقة {a} من {b}", en: "Package {a} of {b}" },
      bookTitle:     { ar: "احجز باقتك", en: "Book Your Package" },
      contactTitle:  { ar: "تواصل معنا", en: "Contact Us" },
      phoneLabel:    { ar: "الهاتف وواتساب", en: "Phone & WhatsApp" },
      call:          { ar: "اتصال", en: "Call" },
      whatsapp:      { ar: "واتساب", en: "WhatsApp" },
      reservations:  { ar: "الحجوزات", en: "Reservations" },
      emailBtn:      { ar: "مراسلة", en: "Email" },
      emailWeb:      { ar: "البريد والموقع", en: "Email & Web" },
      b2bText:       { ar: "للشركات والجهات المتعاقدة", en: "For companies and corporate partners" },
      downloadAgain: { ar: "القائمة الكاملة بصيغة PDF", en: "The full menu as a PDF" },
      backTop:       { ar: "العودة إلى الأعلى", en: "Back to top" },
      photoNote:     { ar: "الصورة تعبّر عن أسلوب التقديم", en: "Photo shows our serving style" },
      viewPackage:   { ar: "عرض تفاصيل الباقة", en: "View package details" }
    }
  };

  /* قائمة البوفيه الآسيوي — الكلاسيكية تختلف في الأطباق الرئيسية فقط */
  function asianSections(classic) {
    var mains = classic
      ? [
          i("دجاج كاري أو سمك مقلي أو بيف شريدد", "Chicken curry, fried fish or shredded beef", TAG.choice),
          i("مكرونة نودلز مع الخضار والصويا صوص", "Noodles with vegetables and soy sauce")
        ]
      : [
          i("دجاج كاري", "Chicken curry"),
          i("سمك مقلي", "Fried fish"),
          i("بيف شريدد", "Shredded beef"),
          i("مكرونة نودلز مع الخضار والصويا صوص", "Noodles with vegetables and soy sauce")
        ];
    return [
      s("soups", T.soups, [g(null, [
        i("شوربة خضار بالدجاج", "Chicken and vegetable soup"),
        i("شوربة لسان عصفور", "Orzo soup")
      ])]),
      s("appetizers", T.appetizers, [
        g(null, [
          i("سلطة الكابوتشا", "Kabocha salad"),
          i("سلطة خضراء", "Green salad"),
          i("سلطة ذرة", "Corn salad"),
          i("سلطة زبادي", "Yogurt salad"),
          i("سلطة بنجر", "Beetroot salad"),
          i("سلطة حمص", "Hummus"),
          i("سلطة خضار طازجة", "Fresh vegetable salad"),
          i("سلطة متبل", "Mutabal"),
          i("فتوش / سلطة شامية", "Fattoush / Levantine salad")
        ]),
        g(L.extras, [DRESSING_B, OIL])
      ]),
      s("mains", T.mains, [g(null, mains)]),
      s("sides", T.sides, [g(null, [
        i("أرز أبيض", "White rice"),
        i("خضار استير فرايد", "Stir-fried vegetables"),
        i("بطاطس روستو بالسمسم والصويا صوص", "Roasted potatoes with sesame and soy sauce")
      ])]),
      s("bread", T.bread, [g(null, BREAD)]),
      s("desserts", T.desserts, [g(null, [
        i("جيلي", "Jelly"),
        i("كاسترد", "Custard"),
        i("أرز باللبن", "Rice pudding"),
        i("حلويات شرقية", "Oriental sweets")
      ])]),
      s("fruit", T.fruit, [g(null, [
        i("فاكهة طازجة (الفاكهة الموسمية)", "Fresh fruit (seasonal)")
      ])]),
      s("drinks", T.drinks, [
        g(L.hot,  [i("شاي", "Tea")]),
        g(L.cold, [i("مياه", "Water"), i("عصير تانج برتقال أو مشروب غازي", "Tang orange juice or a soft drink", TAG.choice)])
      ])
    ];
  }

  /* ---- حسابات مشتركة / shared helpers ---- */
  DATA.countItems = function (pkg) {
    var n = 0;
    pkg.sections.forEach(function (sec) { sec.groups.forEach(function (gr) { n += gr.items.length; }); });
    return n;
  };
  DATA.allPackages = function () {
    var out = [];
    DATA.categories.forEach(function (c) { c.packages.forEach(function (p) { out.push(p); }); });
    return out;
  };

  window.ARMADA = DATA;
})();
