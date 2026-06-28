// --- DATA CONSTANTS ---
const surahNames = ["الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس", "هود", "يوسف", "الرعد", "إبراهيم", "الحجر", "النحل", "الإسراء", "الكهف", "مريم", "طه", "الأنبياء", "الحج", "المؤمنون", "النور", "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم", "لقمان", "السجدة", "الأحزاب", "سبأ", "فاطر", "يس", "الصافات", "ص", "الزمر", "غافر", "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية", "الأحقاف", "محمد", "الفتح", "الحجرات", "ق", "الذاريات", "الطور", "النجم", "القمر", "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة", "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم", "الملك", "القلم", "الحاقة", "المعارج", "نوح", "الجن", "المزمل", "المدثر", "القيامة", "الإنسان", "المرسلات", "النبأ", "النازعات", "عبس", "التكوير", "الإنفطار", "المطففين", "الانشقاق", "البروج", "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد", "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق", "القدر", "البينة", "الزلزلة", "العاديات", "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل", "قريش", "الماعون", "الكوثر", "الكافرون", "النصر", "المسد", "الإخلاص", "الفلق", "الناس"];
const surahMeta = [
    { t: "مكية", a: 7 }, { t: "مدنية", a: 286 }, { t: "مدنية", a: 200 }, { t: "مدنية", a: 176 }, { t: "مدنية", a: 120 }, { t: "مكية", a: 165 }, { t: "مكية", a: 206 }, { t: "مدنية", a: 75 }, { t: "مدنية", a: 129 }, { t: "مكية", a: 109 },
    { t: "مكية", a: 123 }, { t: "مكية", a: 111 }, { t: "مدنية", a: 43 }, { t: "مكية", a: 52 }, { t: "مكية", a: 99 }, { t: "مكية", a: 128 }, { t: "مكية", a: 111 }, { t: "مكية", a: 110 }, { t: "مكية", a: 98 }, { t: "مكية", a: 135 },
    { t: "مكية", a: 112 }, { t: "مدنية", a: 78 }, { t: "مكية", a: 118 }, { t: "مدنية", a: 64 }, { t: "مكية", a: 77 }, { t: "مكية", a: 227 }, { t: "مكية", a: 93 }, { t: "مكية", a: 88 }, { t: "مكية", a: 69 }, { t: "مكية", a: 60 },
    { t: "مكية", a: 34 }, { t: "مكية", a: 30 }, { t: "مدنية", a: 73 }, { t: "مكية", a: 54 }, { t: "مكية", a: 45 }, { t: "مكية", a: 83 }, { t: "مكية", a: 182 }, { t: "مكية", a: 88 }, { t: "مكية", a: 75 }, { t: "مكية", a: 85 },
    { t: "مكية", a: 54 }, { t: "مكية", a: 53 }, { t: "مكية", a: 89 }, { t: "مكية", a: 59 }, { t: "مكية", a: 37 }, { t: "مكية", a: 35 }, { t: "مدنية", a: 38 }, { t: "مدنية", a: 29 }, { t: "مدنية", a: 18 }, { t: "مكية", a: 45 },
    { t: "مكية", a: 60 }, { t: "مكية", a: 49 }, { t: "مكية", a: 62 }, { t: "مكية", a: 55 }, { t: "مدنية", a: 78 }, { t: "مكية", a: 96 }, { t: "مدنية", a: 29 }, { t: "مدنية", a: 22 }, { t: "مدنية", a: 24 }, { t: "مدنية", a: 13 },
    { t: "مدنية", a: 14 }, { t: "مدنية", a: 11 }, { t: "مدنية", a: 11 }, { t: "مدنية", a: 18 }, { t: "مدنية", a: 12 }, { t: "مدنية", a: 12 }, { t: "مكية", a: 30 }, { t: "مكية", a: 52 }, { t: "مكية", a: 52 }, { t: "مكية", a: 44 },
    { t: "مكية", a: 28 }, { t: "مكية", a: 28 }, { t: "مكية", a: 20 }, { t: "مكية", a: 56 }, { t: "مكية", a: 40 }, { t: "مدنية", a: 31 }, { t: "مكية", a: 50 }, { t: "مكية", a: 40 }, { t: "مكية", a: 46 }, { t: "مكية", a: 42 },
    { t: "مكية", a: 29 }, { t: "مكية", a: 19 }, { t: "مكية", a: 36 }, { t: "مكية", a: 25 }, { t: "مكية", a: 22 }, { t: "مكية", a: 17 }, { t: "مكية", a: 19 }, { t: "مكية", a: 26 }, { t: "مكية", a: 30 }, { t: "مكية", a: 20 },
    { t: "مكية", a: 15 }, { t: "مكية", a: 21 }, { t: "مكية", a: 11 }, { t: "مكية", a: 8 }, { t: "مكية", a: 8 }, { t: "مكية", a: 19 }, { t: "مكية", a: 5 }, { t: "مدنية", a: 8 }, { t: "مدنية", a: 8 }, { t: "مكية", a: 11 },
    { t: "مكية", a: 11 }, { t: "مكية", a: 8 }, { t: "مكية", a: 3 }, { t: "مكية", a: 9 }, { t: "مكية", a: 5 }, { t: "مكية", a: 4 }, { t: "مكية", a: 7 }, { t: "مكية", a: 3 }, { t: "مكية", a: 6 }, { t: "مدنية", a: 3 },
    { t: "مكية", a: 5 }, { t: "مكية", a: 4 }, { t: "مكية", a: 5 }, { t: "مكية", a: 6 }
];

const azkarDB = {
    morning: [
        { t: "اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا، وَبِكَ نَحْـيَا وَبِكَ نَمُوتُ وَإِلَـيْكَ النُّشُـورُ", c: 1, ref: "أبو داود" },
        { t: "آية الكرسي: اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ", c: 1, ref: "البقرة: 255" },
        { t: "سُبْحـانَ اللهِ وَبِحَمْـدِهِ، سُبْحَانَ اللهِ الْعَظِيمِ", c: 10, ref: "البخاري" },
        { t: "أَصْبَـحْـنا وَأَصْبَـحَ المُـلْكُ للهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", c: 1, ref: "البخاري" },
        { t: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، عَلَيْكَ تَوَكَّلْتُ وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ", c: 1, ref: "البخاري" },
        { t: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", c: 3, ref: "مسلم" },
        { t: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", c: 3, ref: "أبو داود، الترمذي" }
    ],
    evening: [
        { t: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ", c: 1, ref: "البخاري" },
        { t: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ", c: 1, ref: "البخاري" },
        { t: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", c: 3, ref: "مسلم" },
        { t: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحُزْنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ", c: 1, ref: "البخاري" },
        { t: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ النَّفْسِ وَالطَّمَعِ، وَأَعُوذُ بِكَ مِنَ الْهَمِّ وَالْغَمِّ", c: 1, ref: "مسلم" }
    ],
    sleep: [
        { t: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، إِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا", c: 1, ref: "البخاري" },
        { t: "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ", c: 1, ref: "البخاري" },
        { t: "سورة الملك", c: 1, ref: "مسلم" },
        { t: "آية الكرسي", c: 1, ref: "البقرة: 255" },
        { t: "سُبْحَانَ اللَّهِ (33 مرة)، الْحَمْدُ لِلَّهِ (33 مرة)، اللَّهُ أَكْبَرُ (34 مرة)", c: 100, ref: "البخاري" }
    ],
    prayer: [
        { t: "أَسْتَغْفِرُ اللهَ (أقولها ثلاث مرات)", c: 3, ref: "مسلم" },
        { t: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ", c: 1, ref: "مسلم" },
        { t: "لَا إِلَٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", c: 1, ref: "البخاري" },
        { t: "اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ", c: 1, ref: "البخاري" },
        { t: "سُبْحَانَ اللَّهِ (33)، الْحَمْدُ لِلَّهِ (33)، اللَّهُ أَكْبَرُ (33)", c: 33, ref: "البخاري" }
    ],
    quran: [
        { t: "وَاللَّهُ غَالِبٌ عَلَىٰ أَمْرِهِ وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ", c: 1, ref: "يوسف: 21" },
        { t: "وَتَوَكَّلْ عَلَى اللَّهِ ۚ وَكَفَىٰ بِاللَّهِ وَكِيلًا", c: 1, ref: "النساء: 81" },
        { t: "وَمَا يَعْلَمُ جُنُودَ رَبِّكَ إِلَّا هُوَ ۚ وَمَا هِيَ إِلَّا ذِكْرَىٰ لِلْبَشَرِ", c: 1, ref: "المدثر: 31" },
        { t: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ", c: 1, ref: "البقرة: 152" },
        { t: "وَسَبِّحُوهُ بُكْرَةً وَأَصِيلًا", c: 1, ref: "الذاريات: 18" }
    ],
    supplications: [
        { t: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", c: 1, ref: "البقرة: 201" },
        { t: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى", c: 1, ref: "مسلم" },
        { t: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ", c: 1, ref: "الترمذي" },
        { t: "اللَّهُمَّ مُصَرِّفَ الْقُلُوبِ صَرِّفْ قُلُوبَنَا عَلَى طَاعَتِكَ", c: 1, ref: "مسلم" },
        { t: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحُزْنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ، وَغَلَبَةِ الرِّجَالِ", c: 1, ref: "البخاري" },
        { t: "اللَّهُمَّ اغْفِرْ لِي خَطِيئَتِي وَجَهْلِي، وَإِسْرَافِي فِي أَمْرِي، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي", c: 1, ref: "البخاري" },
        { t: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ", c: 1, ref: "الأنبياء: 87" },
        { t: "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ، وَارْحَمْنِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ", c: 1, ref: "البخاري" },
        { t: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيعِ سَخَطِكَ", c: 1, ref: "مسلم" },
        { t: "اللَّهُمَّ رَحْمَتَكَ أَرْجُو، فَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ، وَأَصْلِحْ لِي شَأْنِي كُلَّهُ، لَا إِلَهَ إِلَّا أَنْتَ", c: 1, ref: "أبو داود" },
        { t: "اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي، وَأَصْلِحْ لِي آخِرَتِي الَّتِي فِيهَا مَعَادِي", c: 1, ref: "مسلم" },
        { t: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنَ الْخَيْرِ كُلِّهِ عَاجِلِهِ وَآجِلِهِ، مَا عَلِمْتُ مِنْهُ وَمَا لَمْ أَعْلَمْ، وَأَعُوذُ بِكَ مِنَ الشَّرِّ كُلِّهِ", c: 1, ref: "ابن ماجه" },
        { t: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَنْ دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ", c: 1, ref: "نوح: 28" },
        { t: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ", c: 1, ref: "الترمذي" },
        { t: "اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ", c: 1, ref: "البخاري" }
    ],
    travel: [
        { t: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ", c: 1, ref: "الزخرف: 13-14" },
        { t: "اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى", c: 1, ref: "مسلم" },
        { t: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ (عند النزول منزلاً)", c: 1, ref: "مسلم" }
    ],
    illness: [
        { t: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ، اشْفِ أنتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا", c: 1, ref: "البخاري" },
        { t: "بِسْمِ اللَّهِ (3 مرات)، أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ (7 مرات)", c: 1, ref: "مسلم" },
        { t: "أَسْأَلُ اللَّهَ الْعَظِيمَ، رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ (7 مرات)", c: 7, ref: "الترمذي" }
    ],
    food: [
        { t: "بِسْمِ اللَّهِ", c: 1, ref: "البخاري" },
        { t: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ", c: 1, ref: "أبو داود" },
        { t: "اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَأَطْعِمْنَا خَيْرًا مِنْهُ", c: 1, ref: "الترمذي" }
    ],
    home: [
        { t: "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا", c: 1, ref: "أبو داود" },
        { t: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", c: 1, ref: "مسلم" }
    ],
    khatm: [
        { t: "اللَّهُمَّ ارْحَمْنِي بِالقُرْآنِ وَاجْعَلْهُ لِي إِمَاماً وَنُوراً وَهُدًى وَرَحْمَةً", c: 1, ref: "دعاء الختم" },
        { t: "اللَّهُمَّ ذَكِّرْنِي مِنْهُ مَا نَسِيتُ وَعَلِّمْنِي مِنْهُ مَا جَهِلْتُ وَارْزُقْنِي تِلاَوَتَهُ آنَاءَ اللَّيْلِ وَأَطْرَافَ النَّهَارِ وَاجْعَلْهُ لِي حُجَّةً يَا رَبَّ العَالَمِينَ", c: 1, ref: "دعاء الختم" },
        { t: "اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي، وَأَصْلِحْ لِي آخِرَتِي الَّتِي فِيهَا مَعَادِي، وَاجْعَلِ الحَيَاةَ زِيَادَةً لِي فِي كُلِّ خَيْرٍ وَاجْعَلِ المَوْتَ رَاحَةً لِي مِنْ كُلِّ شَرٍّ", c: 1, ref: "دعاء الختم" },
        { t: "اللَّهُمَّ اجْعَلْ خَيْرَ عُمْرِي آخِرَهُ وَخَيْرَ عَمَلِي خَوَاتِمَهُ وَخَيْرَ أَيَّامِي يَوْمَ أَلْقَاكَ فِيهِ", c: 1, ref: "دعاء الختم" },
        { t: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِيشَةً هَنِيَّةً وَمِيتَةً سَوِيَّةً وَمَرَدًّا غَيْرَ مُخْزٍ وَلاَ فَاضِحٍ", c: 1, ref: "دعاء الختم" },
        { t: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ المَسْأَلَةِ وَخَيْرَ الدُّعَاءِ وَخَيْرَ النَّجَاحِ وَخَيْرَ العِلْمِ وَخَيْرَ العَمَلِ وَخَيْرَ الثَّوَابِ وَخَيْرَ الحَيَاةِ وَخَيْرَ Mَمَاتِ وَثَبِّتْنِي وَثَقِّلْ مَوَازِينِي وَحَقِّقْ إِيمَانِي وَارْفَعْ دَرَجَتِي وَتَقَبَّلْ صَلاَتِي وَاغْفِرْ خَطِيئَاتِي وَأَسْأَلُكَ العُلَا مِنَ الجَنَّةِ", c: 1, ref: "دعاء الختم" }
    ],
    tashahhud: [
        { t: "التَحيَّاتُ للهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلامُ عَلَيْنَا وَعَلَى عِبَادِ اللهِ الصَّالِحِينَ. أَشْهَدُ أَنْ لا إلهَ إلا اللهُ وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ.", c: 1, ref: "البخاري (التشهد الأول)" },
        { t: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ، وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ، وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، وَبَارِكْ عَلَى مُحَمَّدٍ، وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ، وَعَلَى آلِ إِبْرَاهِيمَ، [فِي الْعَالَمِينَ] إِنَّكَ حَمِيدٌ مَجِيدٌ.", c: 1, ref: "البخاري (الصلاة الإبراهيمية)" }
    ]
};

// إضافة أذكار مخصصة للمستخدم
let customAzkar = JSON.parse(localStorage.getItem('custom_azkar')) || {};

const azkarMeta = {
    morning: { t: "أذكار الصباح", i: "fa-sun" },
    evening: { t: "أذكار المساء", i: "fa-moon" },
    sleep: { t: "أذكار النوم", i: "fa-bed" },
    prayer: { t: "أذكار الصلاة", i: "fa-pray" },
    quran: { t: "آيات مختارة", i: "fa-book-open" },
    supplications: { t: "أدعية جامعة", i: "fa-hands-praying" },
    travel: { t: "أذكار السفر", i: "fa-plane" },
    illness: { t: "أذكار المرض", i: "fa-heartbeat" },
    food: { t: "أذكار الطعام", i: "fa-utensils" },
    home: { t: "أذكار المنزل", i: "fa-home" },
    khatm: { t: "دعاء ختم القرآن", i: "fa-award" },
    tashahhud: { t: "التشهد والصلاة", i: "fa-praying-hands" }
};

const allahNames = ["الله", "الرحمن", "الرحيم", "الملك", "القدوس", "السلام", "المؤمن", "المهيمن", "العزيز", "الجبار", "المتكبر", "الخالق", "البارئ", "المصور", "الغفار", "القهار", "الوهاب", "الرزاق", "الفتاح", "العليم", "القابض", "الباسط", "الخافض", "الرافع", "المعز", "المذل", "السميع", "البصير", "الحكم", "العدل", "اللطيف", "الخبير", "الحليم", "العظيم", "الغفور", "الشكور", "العلي", "الكبير", "الحفيظ", "المقيت", "الحسيب", "الجليل", "الكريم", "الرقيب", "المجيب", "الواسع", "الحكيم", "الودود", "المجيد", "الباعث", "الشهيد", "الحق", "الوكيل", "القوي", "المتين", "الولي", "الحميد", "المحصي", "المبدئ", "المعيد", "المحيي", "المميت", "الحي", "القيوم", "الواجد", "الماجد", "الواحد", "الصمد", "القادر", "المقتدر", "المقدم", "المؤخر", "الأول", "الآخر", "الظاهر", "الباطن", "الوالي", "المتعالي", "البر", "التواب", "المنتقم", "العفو", "الرؤوف", "مالك الملك", "ذو الجلال والإكرام", "المقسط", "الجامع", "الغني", "المغني", "المانع", "الضار", "النافع", "النور", "الهادي", "البديع", "الباقي", "الوارث", "الرشيد", "الصبور"];

// --- STORIES DATABASE ---
const islamicStoriesDB = {
    prophets: {
        title: "قصص الأنبياء",
        icon: "fa-user-tie",
        color: "#FFD700",
        stories: [
            {
                title: "آدم عليه السلام",
                content: `
                <p>تبدأ قصة آدم عليه السلام عندما أخبر الله الملائكة بأنه سيخلق بشراً من طين ليكون خليفة في الأرض. خلق الله آدم بيده ونفخ فيه من روحه، وأمر الملائكة بالسجود له تكريماً، فسجدوا جميعاً إلا إبليس أبى واستكبر وكان من الكافرين.</p>
                <p>عاش آدم وزوجته حواء في الجنة، وأباح الله لهما كل ثمارها إلا شجرة واحدة. لكن الشيطان وسوس لهما وأقنعهما بأن الأكل منها سيجعلهما ملكين أو مخلدين، فأكلا منها، وبدت لهما سواءتهما.</p>
                <p>تاب آدم وحواء إلى الله، فقبل توبتهما ولكنه أهبطهما إلى الأرض ليعمراها ويعبدا الله فيها، فكان آدم أول نبي وأول بشر، ومن ذريته جاءت البشرية جمعاء.</p>
                `
            },
            {
                title: "نوح عليه السلام",
                content: `
                <p>بعث الله نوحاً عليه السلام إلى قومه ليدعوهم إلى عبادة الله وحده وترك الأصنام التي كانوا يعكفون عليها (وداً وسواعاً ويغوث ويعوق ونسراً). ظل نوح يدعو قومه 950 عاماً ليلاً ونهاراً، سراً وعلانية، فلم يؤمن معه إلا قليل.</p>
                <p>عندما استكبر القوم وأصروا على الكفر، أمر الله نوحاً بصنع سفينة عظيمة. وكان قومه يمرون به ويسخرون منه لأنه يصنع سفينة في الصحراء. ولما جاء أمر الله وفار التنور، حمل نوح في السفينة من كل زوجين اثنين ومن آمن معه.</p>
                <p>انهمرت السماء بماء منهمر وتفجرت الأرض عيوناً، فأغرق الله الأرض ومن عليها من الكافرين، بمن فيهم ابن نوح الذي رفض ركوب السفينة. ونجى الله نوحاً والمؤمنين لتكون بداية جديدة للبشرية.</p>
                `
            },
            {
                title: "إبراهيم عليه السلام",
                content: `
                <p>خليل الله إبراهيم عليه السلام، نشأ في قوم يعبدون الكواكب والأصنام، وكان أبوه آزر يصنع الأصنام. رفض إبراهيم هذه العبادة وحاور قومه بالعقل والحجة، حتى حطم أصنامهم إلا كبيراً لهم لعلهم يرجعون إليه.</p>
                <p>غضب القوم وقرروا حرقه، فألقوه في نار عظيمة، لكن الله أمر النار أن تكون برداً وسلاماً على إبراهيم، فخرج منها سالماً. هاجر إبراهيم في الأرض يدعو إلى الله، ورزقه الله على كبر إسماعيل وإسحاق.</p>
                <p>من أعظم ابتلاءاته أمره بترك زوجته هاجر وابنه الرضيع إسماعيل في وادٍ غير ذي زرع (مكة)، ثم أمره بذبح ابنه فاستسلما لأمر الله، ففداه الله بذبح عظيم. وبنى إبراهيم وإسماعيل الكعبة المشرفة لتكون قبلة للموحدين.</p>
                `
            },
            {
                title: "يوسف عليه السلام",
                content: `
                <p>الكريم ابن الكريم، رأى وهو صغير أحد عشر كوكباً والشمس والقمر له ساجدين. حسده إخوته على حب أبيه يعقوب له، فدبروا مكيدة وألقوه في البئر، ثم بيع كعبد في مصر لعزيزها.</p>
                <p>تعرض يوسف لفتنة امرأة العزيز فاستعصم، ثم سجن بضع سنين ظلماً. في السجن نبأ الله يوسف بتأويل الرؤى، حتى فسر رؤيا الملك عن البقرات السمان والسنبلات، التي أنقذت مصر من مجاعة محققة.</p>
                <p>مكن الله ليوسف في الأرض وأصبح عزيز مصر، وجاء إخوته محتاجين، فعرفهم وعفا عنهم قائلاً: "لا تثريب عليكم اليوم"، وجمع الله شمله بأبيه وأهله وتحققت رؤياه القديمة بسجودهم له تكريماً.</p>
                `
            },
            {
                title: "موسى عليه السلام",
                content: `
                <p>كليم الله موسى، ولد في عام كان يقتل فيه فرعون المواليد الذكور، فأوحى الله لآمه أن تلقيه في اليم، ليلتقطه آل فرعون ويربى في قصر عدوه. كبر موسى، وقتل خطأً رجلاً من القبط، فهرب إلى مدين حيث تزوج وعمل راعياً.</p>
                <p>كلمه الله في الوادي المقدس طوى، وأرسله وآخاه هارون إلى فرعون ليدعواه لتوحيد الله ويرسلا معه بني إسرائيل. واجه موسى سحرة فرعون بعصاه التي تحولت لثعبان مبين، فآمن السحرة.</p>
                <p>خرج موسى بقومه، فتبعهم فرعون وجنوده، فأوحى الله لموسى أن يضرب بعصاه البحر، فانفلق فكان كل فرق كالطود العظيم. عبر موسى وقومه، وأطبق البحر على فرعون وجنوده فغرقوا.</p>
                `
            },
            {
                title: "عيسى عليه السلام",
                content: `
                <p>المسيح عيسى ابن مريم، كلمة الله التي ألقاها إلى مريم البتول. ولد بمعجزة من غير أب، وتكلم في المهد صبياً ليبرئ أمه. أيده الله بالمعجزات العظيمة، فكان يخلق من الطين كهيئة الطير فينفخ فيه فيكون طيراً بإذن الله، ويبرئ الأكمه والأبرص ويحيي الموتى بإذن الله.</p>
                <p>دعا بني إسرائيل إلى عبادة الله وحده وتحليل ما حرم عليهم، لكنهم كذبوه وتآمروا لقتله. رفعه الله إليه ونجاه من كيدهم، فلم يصلبوه ولم يقتلوه ولكن شبه لهم.</p>
                <p>سينزل عيسى عليه السلام في آخر الزمان ليقتل الدجال ويحكم بالإسلام ويملأ الأرض عدلاً كما ملئت جوراً.</p>
                `
            },
            {
                title: "محمد ﷺ",
                content: `
                <p>خاتم النبيين وسيد المرسلين، ولد يتيماً في مكة، وعرف بالصادق الأمين. نزل عليه الوحي وهو في الأربعين من عمره في غار حراء. دعا إلى الإسلام سراً ثم جهراً، وتحمل هو وأصحابه أذى كبيراً من قريش.</p>
                <p>هاجر إلى المدينة المنورة حيث أسس دولة الإسلام، وجاهد في سبيل الله لنشر التوحيد والعدل. أيده الله بالمعجزات وأعظمها القرآن الكريم، الكتاب الخالد المحفوظ من التحريف.</p>
                <p>فتح مكة وعفا عن أهلها، واكتمل الدين وأتم الله نعمته على المؤمنين. توفي ﷺ بعد أن بلغ الرسالة وأدى الأمانة ونصح الأمة، وتركنا على المحجة البيضاء ليلها كنهارها لا يزيغ عنها إلا هالك.</p>
                `
            }
        ]
    },
    companions: {
        title: "قصص الصحابة",
        icon: "fa-users",
        color: "#4CAF50",
        stories: [
            { title: "أبو بكر الصديق", content: "<p>أول الخلفاء الراشدين وأحب الناس إلى النبي ﷺ ورفيقه في الهجرة.</p>" },
            { title: "عمر بن الخطاب", content: "<p>الفاروق الذي أعز الله به الإسلام ونشر العدل في الآفاق.</p>" },
            { title: "عثمان بن عفان", content: "<p>ذو النورين الذي جمع القرآن الكريم وكان مثالاً للحياء والكرم.</p>" },
            { title: "علي بن أبي طالب", content: "<p>باب مدينة العلم وأول من أسلم من الصبيان والشجاع الذي فدى النبي ﷺ.</p>" },
            { title: "خالد بن الوليد", content: "<p>سيف الله المسلول الذي لم يُهزم في معركة قط ونصر الإسلام في فتوحات عظيمة.</p>" }
        ]
    },
    moral: {
        title: "قصص وعبر",
        icon: "fa-heart",
        color: "#E91E63",
        stories: [
            { title: "أصحاب الكهف", content: "<p>فتية آمنوا بربهم فزادهم هدى وأنامهم في الكهف مئات السنين حفظاً لدينهم.</p>" },
            { title: "الرجل الذي قتل 100 نفس", content: "<p>تاب الله عليه وسبقت رحمة الله غضبه ليمحو عنه ذنوباً عظيمة بصدق توبته.</p>" },
            { title: "صاحب الجنتين", content: "<p>قصة الرجل الذي اغتر بماله فدمره الله ليبين أن الدنيا فانية والباقي هو العمل الصالح.</p>" }
        ]
    },
    miracles: {
        title: "المعجزات",
        icon: "fa-star",
        color: "#9C27B0",
        stories: [
            { title: "انشقاق القمر", content: "<p>معجزة للنبي ﷺ حين أشار للقمر فانشق نصفين تأييداً لصدق رسالته.</p>" },
            { title: "الإسراء والمعراج", content: "<p>رحلة النبي ﷺ من مكة للأقصى ثم للسماوات العلى في ليلة واحدة.</p>" },
            { title: "نبع الماء", content: "<p>نبع الماء من بين أصابع النبي ﷺ ليشرب الجيش كله في غزوة الحديبية.</p>" }
        ]
    }
};

// --- STATE ---
const App = {
    dhikr: JSON.parse(localStorage.getItem('dhikr_v2')) || {},
    chart: null,
    audio: document.getElementById('main-audio'),
    isPlaying: false,
    currSurah: 1,
    location: { lat: 30.0444, lng: 31.2357 },
    qiblaOffset: 136, // Default Cairo
    showTafseer: false,
    selectedAyah: null,
    lastAdhan: null,
    countdownInterval: null,
    keepAliveInterval: null,
    hijriAdj: 0,
    imsakiyaDate: new Date(),
    imsakiyaHijriYear: null
};

function initQuiz() {
    updateGamification();
}

const recitersList = [
    { name: "خالد الجليل", url: "https://server10.mp3quran.net/jleel/" },
    { name: "مشاري العفاسي", url: "https://server8.mp3quran.net/afs/" },
    { name: "عبدالباسط عبدالصمد (مجود)", url: "https://server11.mp3quran.net/basit_mojawad/" },
    { name: "عبدالباسط عبدالصمد (مرتل)", url: "https://server7.mp3quran.net/basit/" },
    { name: "ماهر المعيقلي", url: "https://server12.mp3quran.net/maher/" },
    { name: "سعد الغامدي", url: "https://server7.mp3quran.net/s_gmd/" },
    { name: "أحمد العجمي", url: "https://server10.mp3quran.net/ajm/" },
    { name: "ياسر الدوسري", url: "https://server11.mp3quran.net/yasser/" },
    { name: "محمود خليل الحصري", url: "https://server13.mp3quran.net/husr/" },
    { name: "عبدالرحمن السديس", url: "https://server11.mp3quran.net/sds/" },
    { name: "سعود الشريم", url: "https://server7.mp3quran.net/shur/" },
    { name: "محمد صديق المنشاوي", url: "https://server10.mp3quran.net/minsh/" },
    { name: "فارس عباد", url: "https://server8.mp3quran.net/frs_a/" },
    { name: "إدريس أبكر", url: "https://server6.mp3quran.net/abkr/" },
    { name: "هزاع البلوشي", url: "https://server11.mp3quran.net/hazza/" },
    { name: "وديع اليمني", url: "https://server7.mp3quran.net/wadi/" }
];

function initLists() {
    const rSelect = document.getElementById('surah-select-read');
    const aSelect = document.getElementById('surah-select-audio');
    const reciterSelect = document.getElementById('reciter-select');

    if (rSelect && aSelect) {
        rSelect.innerHTML = '';
        aSelect.innerHTML = '';
        surahNames.forEach((n, i) => {
            const meta = surahMeta[i] || { t: "--", a: "--" };
            let opt = `<option value="${i + 1}">${i + 1}. سورة ${n} (${meta.t} - ${meta.a} آيات)</option>`;
            rSelect.innerHTML += opt;
            aSelect.innerHTML += opt;
        });
    }

    if (reciterSelect) {
        reciterSelect.innerHTML = '';
        recitersList.forEach(r => {
            let opt = document.createElement('option');
            opt.value = r.url;
            opt.text = r.name;
            reciterSelect.add(opt);
        });

        const savedReciter = localStorage.getItem('audio_reciter');
        if (savedReciter) {
            reciterSelect.value = savedReciter;
        }
    }

    const lastViewed = localStorage.getItem('current_surah_view');
    const b = localStorage.getItem('bookmark');

    if (lastViewed && rSelect) {
        rSelect.value = lastViewed;
        loadSurahText(lastViewed);
    } else if (b && rSelect) {
        try {
            const data = JSON.parse(b);
            if (typeof data === 'object') {
                rSelect.value = data.surah;
                loadSurahText(data.surah, data.ayah);
            } else {
                rSelect.value = b;
                loadSurahText(b);
            }
        } catch (e) {
            rSelect.value = b;
            loadSurahText(b);
        }
    } else if (rSelect) {
        rSelect.value = "1";
        loadSurahText("1");
    }
}

async function loadSurahText(num, scrollToAyah = null) {
    const sSelect = document.getElementById('surah-select-read');
    if (sSelect) sSelect.style.display = 'block';
    
    const jTitle = document.getElementById('juz-title-read');
    if (jTitle) jTitle.style.display = 'none';
    
    App.currSurah = num;
    localStorage.setItem('current_surah_view', num);
    App.selectedAyah = scrollToAyah;
    const box = document.getElementById('quran-content');
    box.innerHTML = `<div class="flex-center" style="height:200px"><div class="spinner"></div></div>`;

    try {
        let quranAyahs = [];
        
        // Check offline QURAN_DATA first
        if (typeof QURAN_DATA !== 'undefined' && QURAN_DATA[num]) {
            quranAyahs = QURAN_DATA[num].ayahs.map((txt, idx) => ({
                text: txt,
                numberInSurah: idx + 1
            }));
        } else {
            // Fallback to cache or API
            const cachedQuran = localStorage.getItem(`qtext_${num}`);
            if (cachedQuran) {
                quranAyahs = JSON.parse(cachedQuran);
            } else {
                const res = await fetch(`https://api.alquran.cloud/v1/surah/${num}`);
                const data = await res.json();
                quranAyahs = data.data.ayahs;
                try {
                    localStorage.setItem(`qtext_${num}`, JSON.stringify(quranAyahs));
                } catch (e) { console.warn("Storage full, skipping cache"); }
            }
        }

        if (App.showTafseer) {
            let tafseerAyahs = null;
            if (typeof QURAN_DATA !== 'undefined' && QURAN_DATA[num] && QURAN_DATA[num].tafseer) {
                tafseerAyahs = QURAN_DATA[num].tafseer.map((txt, idx) => ({
                    text: txt,
                    numberInSurah: idx + 1
                }));
            } else {
                const cachedTafseer = localStorage.getItem(`tafseer_${num}`);
                if (cachedTafseer) {
                    tafseerAyahs = JSON.parse(cachedTafseer);
                } else {
                    if (quranAyahs.length > 0) box.innerHTML = `<div class="flex-center" style="height:200px"><div class="spinner"></div><p style="margin-right:10px">جاري تحميل التفسير...</p></div>`;
                    const res = await fetch(`https://api.alquran.cloud/v1/surah/${num}/ar.muyassar`);
                    const data = await res.json();
                    tafseerAyahs = data.data.ayahs;
                    try {
                        localStorage.setItem(`tafseer_${num}`, JSON.stringify(tafseerAyahs));
                    } catch (e) { console.warn("Storage full, skipping tafseer cache"); }
                }
            }
            renderSurah(quranAyahs, num, tafseerAyahs, scrollToAyah);
        } else {
            renderSurah(quranAyahs, num, null, scrollToAyah);
        }

    } catch (e) {
        console.error(e);
        box.innerHTML = `<div style="text-align:center; padding:20px; color:var(--text-sec);">
            <i class="fas fa-wifi-slash" style="font-size:2rem; color:var(--accent); margin-bottom:10px;"></i>
            <p>تعذر تحميل السورة</p>
            <p style="font-size:0.8rem">تأكد من تشغيل ملف download_quran.py لتعمل كافة السور أوفلاين دون إنترنت.</p>
            <button class="secondary" style="width:auto; margin-top:10px;" onclick="loadSurahText(${num})">إعادة المحاولة</button>
        </div>`;
    }
}

function removeBasmala(text) {
    if (!text) return '';
    
    // Robust Regex to match Basmala with any diacritics, zero-width chars, and spelling variations (like الرحمان vs الرحمن)
    const basmalaRegex = /^[\u200B-\u200D\uFEFF\u200E\u200F]*ب[\u064B-\u065F\u0670\u0671\u0656]*س[\u064B-\u065F\u0670\u0671\u0656]*م[\u064B-\u065F\u0670\u0671\u0656]*\s+[اٱآإأ][\u064B-\u065F\u0670\u0671\u0656]*ل[\u064B-\u065F\u0670\u0671\u0656]*ل[\u064B-\u065F\u0670\u0671\u0656]*ه[\u064B-\u065F\u0670\u0671\u0656]*\s+[اٱآإأ][\u064B-\u065F\u0670\u0671\u0656]*ل[\u064B-\u065F\u0670\u0671\u0656]*ر[\u064B-\u065F\u0670\u0671\u0656]*ح[\u064B-\u065F\u0670\u0671\u0656]*م[\u064B-\u065F\u0670\u0671\u0656]*[اأإآ]?[\u064B-\u065F\u0670\u0671\u0656]*ن[\u064B-\u065F\u0670\u0671\u0656]*\s+[اٱآإأ][\u064B-\u065F\u0670\u0671\u0656]*ل[\u064B-\u065F\u0670\u0671\u0656]*ر[\u064B-\u065F\u0670\u0671\u0656]*ح[\u064B-\u065F\u0670\u0671\u0656]*[يى][\u064B-\u065F\u0670\u0671\u0656]*م[\u064B-\u065F\u0670\u0671\u0656]*/;
    
    return text.replace(basmalaRegex, '').trim();
}

function renderSurah(ayahs, num, tafseer = null, scrollToAyah = null) {
    const box = document.getElementById('quran-content');
    box.className = 'mushaf-text';

    const savedSize = localStorage.getItem('quran_font_size');
    if (savedSize) box.style.fontSize = savedSize + 'rem';

    const header = document.getElementById('surah-info-premium');
    const titleText = document.getElementById('surah-title-text');
    const metaText = document.getElementById('surah-meta-text');
    if (header && titleText) {
        header.style.display = 'block';
        const meta = surahMeta[num - 1] || { t: '', a: '' };
        const sType = meta.t === 'مكية' || meta.t === 'مدنية' ? meta.t : (meta.t === 'Meccan' ? 'مكية' : 'مدنية');
        titleText.textContent = `سورة ${surahNames[num - 1] || ''}`;
        if (metaText) metaText.textContent = `${sType} ● ${ayahs.length} آية`;
    }

    // Set up single double-click listener on the parent container (Event Delegation)
    if (!box.dataset.hasDblClickListener) {
        box.addEventListener('dblclick', (e) => {
            const target = e.target.closest('.ayah-span, .tafseer-box');
            if (target) {
                const sId = parseInt(target.getAttribute('data-s'));
                const aId = parseInt(target.getAttribute('data-a'));
                const text = decodeURIComponent(target.getAttribute('data-ayah'));
                if (sId && aId) {
                    showAyahOptions(sId, aId, text);
                }
            }
        });
        box.dataset.hasDblClickListener = "true";
    }

    if (tafseer) {
        let html = `<div style="padding-bottom:15px;">`;
        ayahs.forEach((a, index) => {
            const tafseerText = tafseer[index] ? tafseer[index].text : '...';
            const isSelected = scrollToAyah == a.numberInSurah ? 'selected-ayah' : '';
            const vNum = a.numberInSurah.toLocaleString('ar-EG');
            html += `
                <div class="tafseer-box ${isSelected}" id="ayah-${a.numberInSurah}" data-s="${num}" data-a="${a.numberInSurah}" data-ayah="${encodeURIComponent(a.text)}">
                    <div class="tafseer-ayah">${a.text} <span class="verse-num">${vNum}</span></div>
                    <div class="tafseer-text">
                        <i class="fas fa-book-open" style="color:#c9a84c; margin-left:5px; font-size:0.8rem;"></i>
                        ${tafseerText}
                    </div>
                </div>`;
        });
        box.innerHTML = html + `</div>`;
        if (scrollToAyah) {
            setTimeout(() => {
                const el = document.getElementById(`ayah-${scrollToAyah}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        }
        return;
    }

    let html = '';
    if (num != 1 && num != 9) {
        html += `<div class="mushaf-basmala"><div class="mushaf-basmala-text">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div></div>`;
    }

    let textHtml = '';
    ayahs.forEach((a, index) => {
        let text = a.text;
        if (index === 0 && num != 1 && num != 9) {
            text = removeBasmala(text);
        }
        const isSelected = scrollToAyah == a.numberInSurah ? 'selected-ayah' : '';
        const vNum = a.numberInSurah.toLocaleString('ar-EG');
        textHtml += `<span class="ayah-span ${isSelected}" id="ayah-${a.numberInSurah}" data-s="${num}" data-a="${a.numberInSurah}" data-ayah="${encodeURIComponent(a.text)}" style="cursor:pointer;">${text}<span class="verse-num">${vNum}</span>‌ </span>`;
    });

    box.innerHTML = html + textHtml;

    const bmk = JSON.parse(localStorage.getItem('bookmark'));
    if (bmk && bmk.surah == num) {
        const el = document.getElementById(`ayah-${bmk.ayah}`);
        if (el) { el.style.background = 'rgba(201,168,76,0.12)'; el.style.borderRadius = '6px'; }
    }

    if (scrollToAyah) {
        setTimeout(() => {
            const el = document.getElementById(`ayah-${scrollToAyah}`);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    }
}

function handleAyahClick(ayahNum) {
    document.querySelectorAll('.selected-ayah').forEach(el => el.classList.remove('selected-ayah'));
    const el = document.getElementById(`ayah-${ayahNum}`);
    if (el) el.classList.add('selected-ayah');
    App.selectedAyah = ayahNum;
}

function toggleTafseer() {
    App.showTafseer = !App.showTafseer;
    const btn = document.getElementById('btn-tafseer');

    if (App.showTafseer) {
        if (btn) { btn.style.background = 'var(--primary)'; btn.style.color = '#fff'; }
    } else {
        if (btn) { btn.style.background = 'rgba(255,255,255,0.1)'; btn.style.color = 'var(--text-main)'; }
    }
    const curVal = document.getElementById('surah-select-read')?.value;
    if (curVal) loadSurahText(curVal, App.selectedAyah);
}

function changeSurahRead(d) {
    let s = document.getElementById('surah-select-read');
    if (s) {
        let n = parseInt(s.value) + d;
        if (n >= 1 && n <= 114) { s.value = n; loadSurahText(n); }
    }
}

function toggleReadingMode() {
    document.body.classList.toggle('reading-mode');
    const btn = document.getElementById('btn-exit-reading');
    if (document.body.classList.contains('reading-mode')) {
        if (btn) btn.style.display = 'block';
        if (navigator.vibrate) navigator.vibrate(50);
    } else {
        if (btn) btn.style.display = 'none';
    }
}

function saveBookmark(sId = null, aId = null) {
    const surahId = sId || document.getElementById('surah-select-read')?.value;
    if (!surahId) return;
    
    let ayahId = aId || App.selectedAyah;

    if (!ayahId) {
        const elements = document.querySelectorAll('[id^="ayah-"]');
        for (let el of elements) {
            const rect = el.getBoundingClientRect();
            if (rect.top >= 80 && rect.top < window.innerHeight) {
                ayahId = parseInt(el.id.replace('ayah-', ''));
                break;
            }
        }
        if (!ayahId && elements.length > 0) ayahId = 1;
    }

    handleAyahClick(ayahId);

    const bookmarkData = { surah: surahId, ayah: ayahId || 1 };
    localStorage.setItem('bookmark', JSON.stringify(bookmarkData));

    let history = JSON.parse(localStorage.getItem('bookmark_history')) || [];
    history = history.filter(h => !(h.id == surahId && h.ayah == ayahId));
    
    const sName = surahNames[surahId - 1] || '';
    const dateStr = new Date().toLocaleDateString('ar-EG', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
    history.unshift({
        id: surahId,
        ayah: ayahId || 1,
        name: sName,
        date: dateStr
    });
    
    if (history.length > 20) history.pop();
    localStorage.setItem('bookmark_history', JSON.stringify(history));
}

function showToast(msg, duration = 3000) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translate(-50%, 20px);
        background: rgba(12, 18, 28, 0.95);
        color: var(--primary, #d4af37);
        border: 1px solid var(--primary, #d4af37);
        padding: 12px 24px;
        border-radius: 12px;
        font-family: 'Cairo', sans-serif;
        font-size: 0.95rem;
        font-weight: bold;
        z-index: 99999;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        pointer-events: none;
        text-align: center;
        white-space: nowrap;
    `;
    toast.innerText = msg;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translate(-50%, 0)';
    }, 50);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translate(-50%, -20px)';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// --- INIT ---
function initStories() {
    console.log("Stories Initialized");
}

function initApp() {
    // Load saved theme (Defaults to royal_blue Royal Blue at user request)
    const savedTheme = localStorage.getItem('theme') || 'royal_blue';
    changeTheme(savedTheme);
    document.getElementById('theme-select').value = savedTheme;
    renderThemeSelector();

    // Load sound setting
    const soundEnabled = localStorage.getItem('sound_enabled');
    if (soundEnabled !== null) {
        document.getElementById('sound-toggle').checked = soundEnabled === 'true';
    }

    // Load pre-notify setting
    const preNotify = localStorage.getItem('pre_notify');
    if (preNotify !== null) {
        document.getElementById('pre-notify-toggle').checked = preNotify === 'true';
    }

    // Load wake lock setting
    const wakeLockEnabled = localStorage.getItem('wakelock_enabled');
    if (wakeLockEnabled === 'true' || wakeLockEnabled === null) {
        document.getElementById('wakelock-toggle').checked = true;
        toggleWakeLock();
    }

    // Load adhan voice
    const savedAdhan = localStorage.getItem('adhan_voice') || 'https://www.islamcan.com/audio/adhan/azan1.mp3';

    // Check for custom adhan
    const customName = localStorage.getItem('custom_adhan_name');
    if (customName) {
        const select = document.getElementById('adhan-voice-select');
        const opt = document.createElement('option');
        opt.value = 'custom';
        opt.text = 'ملف خاص: ' + customName;
        select.add(opt);
    }
    document.getElementById('adhan-voice-select').value = savedAdhan;

    // Load Hijri Adjustment
    App.hijriAdj = parseInt(localStorage.getItem('hijri_adj') || '0');

    // Load custom dhikr
    loadCustomDhikr();
    showCustomDhikrList();

    setTimeout(initHijriCalendar, 1000);
    initStories();
    initHadith();
    initQuiz();
    initJuz();
    initDailyVerse();
    initLists();
    initRamadanCountdown();
    initPrayerTimes();
    initAzkar();
    initImsakiya();
    initRamadanDuas();
    initWallpapers();
    renderNames();
    loadDhikrStats();
    updateGamification();
    updateHomeDhikrCounter();

    // Audio Listeners
    App.audio.ontimeupdate = updateProgress;
    App.audio.onended = () => changeTrack(1);
    App.audio.onplay = () => updatePlayIcon(true);
    App.audio.onpause = () => updatePlayIcon(false);

    // Show redirect prompt (Disabled at user request to start directly on home page)
    // setTimeout(showRedirectPrompt, 1500);

    // Always open on home page
    navTo('home', false);

    // Smart Loader
    if (sessionStorage.getItem('session_active')) {
        document.getElementById('loader').style.display = 'none';
    } else {
        sessionStorage.setItem('session_active', 'true');
        setTimeout(() => {
            document.getElementById('loader').style.opacity = '0';
            setTimeout(() => document.getElementById('loader').style.display = 'none', 500);
        }, 1200);
    }

    // Request notification permission
    if (Notification.permission === 'default') {
        Notification.requestPermission();
    }

    // Unlock audio
    ['click', 'touchstart', 'keydown', 'scroll'].forEach(evt =>
        document.addEventListener(evt, unlockAudio, { once: true })
    );

    // Check if opened from notification
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('autoplay_adhan') === 'true') {
        setTimeout(() => manualPlayAdhan(), 1000);
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Set initial history state
    history.replaceState({ page: 'home' }, null, '#home');

    // Save scroll position
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('app_scroll_pos', window.scrollY);
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) localStorage.setItem('app_scroll_pos', window.scrollY);
    }, { passive: true });
}

// --- PROMPTS & ANNOUNCEMENTS ---
function showRedirectPrompt() {
    if (sessionStorage.getItem('redirect_shown')) return;
    sessionStorage.setItem('redirect_shown', 'true');

    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background: rgba(0,0,0,0.6); z-index: 12000; 
        display: flex; justify-content: center; align-items: center; 
        backdrop-filter: blur(3px); animation: fadeIn 0.3s;
    `;

    modal.innerHTML = `
        <div style="
            background: var(--bg-card); 
            border: 1px solid var(--primary); 
            border-radius: 16px; 
            padding: 25px; 
            width: 85%; 
            max-width: 350px; 
            text-align: center; 
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            animation: scaleUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        ">
            <i class="fas fa-bell" style="font-size:2.5rem; color:var(--primary); margin-bottom:15px; animation: ring 2s infinite;"></i>
            <h3 style="margin-bottom:10px; color:var(--primary);">تنبيه هام!</h3>
            <p style="color:var(--text-main); margin-bottom:20px; line-height:1.6; font-size:1.1rem;">
                تم إضافة مميزات حصرية جديدة للإصدار الذهبي.
                <br><span style="color:var(--text-sec); font-size:0.9rem;">يرجى التوجه لقسم الإعدادات لاستعراضها فوراً.</span>
            </p>
            <button onclick="this.closest('div').parentElement.remove(); navTo('settings');" 
                style="background:var(--primary); color:#000; width:100%; padding:12px; 
                border-radius:10px; font-weight:bold; border:none; cursor:pointer; font-size:1rem;">
                الذهاب للإعدادات الآن
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

function checkPromoVisibility() {
    const count = parseInt(localStorage.getItem('promo_view_count') || '0');
    const promoSection = document.getElementById('promo-section');
    if (promoSection) {
        if (count < 2) {
            promoSection.style.display = 'block';
        } else {
            promoSection.style.display = 'none';
        }
    }
}

function showSettingsAnnouncement() {
    let count = parseInt(localStorage.getItem('promo_view_count') || '0');
    if (count >= 2) return;
    if (document.getElementById('announcement-modal')) return;

    count++;
    localStorage.setItem('promo_view_count', count);
    checkPromoVisibility();

    const modal = document.createElement('div');
    modal.id = 'announcement-modal';
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background: rgba(0,0,0,0.92); z-index: 13000; 
        display: flex; justify-content: center; align-items: center; 
        backdrop-filter: blur(10px); animation: fadeIn 0.5s;
    `;

    modal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); 
            border: 2px solid var(--primary); 
            border-radius: 25px; 
            padding: 40px 30px; 
            width: 90%; 
            max-width: 500px; 
            text-align: center; 
            box-shadow: 0 0 50px rgba(212, 175, 55, 0.5);
            position: relative;
            animation: slideUpFade 0.6s;
        ">
            <div style="position:absolute; top:20px; right:20px; color:rgba(255,255,255,0.3); font-size:0.8rem;">إعلان التحديثات (${count}/2)</div>
            
            <div style="width:80px; height:80px; background:var(--primary); border-radius:50%; margin:0 auto 20px; display:flex; align-items:center; justify-content:center; box-shadow:0 0 20px var(--primary);">
                <i class="fas fa-crown" style="font-size:2.5rem; color:#000;"></i>
            </div>

            <h2 style="color:var(--primary); font-family:'Cairo'; font-size:1.8rem; margin-bottom:15px; text-transform:uppercase; letter-spacing:1px;">الإصدار الماسي</h2>
            <p style="color:#fff; font-size:1.2rem; margin-bottom:30px;">
                اكتشف الآن المميزات الجديدة التي تمت إضافتها خصيصاً لك اليوم!
            </p>

            <div style="text-align:right; background:rgba(255,255,255,0.05); padding:20px; border-radius:15px; margin-bottom:30px;">
                <div style="margin-bottom:10px; font-size:1.1rem; color:#eee; display:flex; align-items:center;">
                    <i class="fas fa-book-open" style="color:var(--primary); margin-left:10px;"></i> قصص الأنبياء كاملة + قراءة صوتية
                </div>
                <div style="margin-bottom:10px; font-size:1.1rem; color:#eee; display:flex; align-items:center;">
                    <i class="fas fa-palette" style="color:var(--primary); margin-left:10px;"></i> ثيمات الياقوت والزمرد الجديدة
                </div>
                <div style="font-size:1.1rem; color:#eee; display:flex; align-items:center;">
                    <i class="fas fa-rocket" style="color:var(--primary); margin-left:10px;"></i> تحسينات شاملة في الأداء والسرعة
                </div>
            </div>

            <div style="font-size:3rem; font-weight:bold; color:var(--primary); margin-bottom:5px; font-family:monospace;" id="ad-timer">30</div>
            <div style="font-size:0.9rem; color:#888; margin-bottom:25px;">ثانية للإغلاق التلقائي</div>

            <button onclick="this.closest('#announcement-modal').remove()" 
                style="background:transparent; border:1px solid rgba(255,255,255,0.2); color:#fff; 
                padding:12px 30px; border-radius:30px; cursor:pointer; font-weight:bold; transition:0.3s;"
                onmouseover="this.style.background='rgba(255,255,255,0.1)'"
                onmouseout="this.style.background='transparent'">
                إغلاق الإعلان
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    let timeLeft = 30;
    const timerEl = modal.querySelector('#ad-timer');
    const interval = setInterval(() => {
        timeLeft--;
        if (timerEl) timerEl.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(interval);
            if (document.body.contains(modal)) modal.remove();
        }
    }, 1000);
}

// --- NAVIGATION ---
function navTo(id, pushHistory = true) {
    window.scrollTo(0, 0);
    localStorage.setItem('last_active_page', id);
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('p-' + id).classList.add('active');

    if (id === 'azkar') showAzkarCategories();
    if (id === 'imsakiya') loadImsakiya();
    if (id === 'settings') {
        checkPromoVisibility();
        // showSettingsAnnouncement is disabled to prevent annoying interstitial countdowns
    }

    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    const idx = ['home', 'read', 'azkar', 'dhikr', 'qibla', 'settings'].indexOf(id === 'hadith' || id === 'names' || id === 'listen' || id === 'calendar' || id === 'stories' || id === 'quiz' || id === 'juz' || id === 'imsakiya' || id === 'ramadan_duas' || id === 'wallpapers' ? 'home' : id);
    if (idx > -1) document.querySelectorAll('.nav-item')[idx].classList.add('active');

    const backBtn = document.getElementById('back-btn');
    if (backBtn) backBtn.classList.toggle('hidden', id === 'home');

    const mini = document.getElementById('mini-player');
    if (id === 'listen') mini.style.display = 'none';
    else if (App.audio.src) mini.style.display = 'flex';

    if (id === 'settings') {
        renderBookmarkHistory();
        if (typeof updateNotifyStatusUI === 'function') updateNotifyStatusUI();
    }

    if (pushHistory) {
        history.pushState({ page: id }, null, `#${id}`);
    }
}

function goBack() {
    if (history.state && history.state.page && history.state.page !== 'home') {
        history.back();
    } else {
        navTo('home');
    }
}

window.onpopstate = (e) => {
    if (e.state && e.state.page) {
        navTo(e.state.page, false);
    } else {
        navTo('home', false);
    }
};

function testNotification() {
    Notification.requestPermission().then(perm => {
        if (perm === 'granted') {
            new Notification("تطبيق النور", {
                body: "الإشعارات تعمل بنجاح! سيتم تنبيهك عند الصلاة.",
                icon: 'https://cdn-icons-png.flaticon.com/512/5146/5146011.png'
            });
            manualPlayAdhan();
        } else {
            alert("يرجى السماح بالإشعارات أولاً");
        }
    });
}

// --- PRAYER TIMES ---
function initPrayerTimes() {
    // Default location fallback: Cairo, Egypt
    App.location = { lat: 30.0444, lng: 31.2357 };
    App.qiblaOffset = calculateQibla(App.location.lat, App.location.lng);

    const savedLoc = JSON.parse(localStorage.getItem('user_location'));
    if (savedLoc) {
        App.location = savedLoc;
        App.qiblaOffset = calculateQibla(App.location.lat, App.location.lng);
        const statusEl = document.getElementById('location-status');
        if (statusEl) statusEl.innerText = "موقع محفوظ";
        fetchPrayers();
    } else {
        const statusEl = document.getElementById('location-status');
        if (statusEl) statusEl.innerText = "الموقع الافتراضي (القاهرة)";
        fetchPrayers();
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            App.location = { lat: pos.coords.latitude, lng: pos.coords.longitude };
            localStorage.setItem('user_location', JSON.stringify(App.location));
            App.qiblaOffset = calculateQibla(App.location.lat, App.location.lng);
            const statusEl = document.getElementById('location-status');
            if (statusEl) statusEl.innerText = "تم تحديد الموقع";
            fetchPrayers();
        }, () => {
            // Geolocation failed or denied, we keep using the default Cairo or savedLoc
        });
    }
}

async function fetchPrayers() {
    const d = new Date();
    const pad = (n) => n < 10 ? '0' + n : n;
    const str = `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()}`;
    
    const lat = App.location ? App.location.lat : 30.0444;
    const lng = App.location ? App.location.lng : 31.2357;
    const cacheKey = `prayers_${str}_${lat}_${lng}`;

    let cached = localStorage.getItem(cacheKey);
    
    // Offline recovery: if no cache for today, look for any old prayer times in localStorage
    if (!cached) {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('prayers_')) {
                cached = localStorage.getItem(key);
                console.log("[Prayer] Found offline fallback cache:", key);
                break;
            }
        }
    }

    if (cached) {
        try {
            renderPrayers(JSON.parse(cached));
        } catch (e) {
            console.error("Failed to parse cached prayers", e);
        }
    }

    try {
        const res = await fetch(`https://api.aladhan.com/v1/timings/${str}?latitude=${lat}&longitude=${lng}&method=5&adjustment=${App.hijriAdj}`);
        const data = await res.json();
        if (data.code === 200 && data.data) {
            localStorage.setItem(cacheKey, JSON.stringify(data.data));
            renderPrayers(data.data);
        }
    } catch (e) {
        console.log("Prayer fetch error:", e);
        if (!cached) {
            const listEl = document.getElementById('prayers-list');
            if (listEl) {
                listEl.innerHTML = '<div style="text-align:center; padding:10px; color:var(--accent); grid-column: 1 / -1;"><i class="fas fa-wifi-slash"></i> وضع عدم الاتصال<br><small>تعذر تحديث المواقيت. يرجى الاتصال بالإنترنت لتحديث البيانات.</small></div>';
            }
        }
    }
}

function renderPrayers(data) {
    let timings = data.timings;
    const hijriStr = `${data.date.hijri.day} ${data.date.hijri.month.ar} ${data.date.hijri.year}`;
    const gregStr = data.date.readable;

    const oldG = document.getElementById('gregorian-date'); if (oldG) oldG.innerText = gregStr;
    const oldH = document.getElementById('hijri-date'); if (oldH) oldH.innerText = hijriStr;

    const homeG = document.getElementById('greg-date-home'); if (homeG) homeG.innerText = gregStr;
    const homeH = document.getElementById('hijri-date-home'); if (homeH) homeH.innerText = hijriStr;

    const _d = new Date();
    const todayDate = new Date(_d.getFullYear(), _d.getMonth(), _d.getDate());
    const ramadanStart = new Date(2026, 1, 19);
    const diffTime = todayDate - ramadanStart;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays >= 0 && diffDays <= 30) {
        const _hStr = `${diffDays + 1} رمضان 1447`;
        if (homeH) homeH.innerText = _hStr;
        if (oldH) oldH.innerText = _hStr;
    }

    const strip = document.getElementById('prayers-strip');
    if (strip) {
        strip.innerHTML = '';
        const pList = [
            { k: 'Fajr', n: 'الفجر' }, { k: 'Sunrise', n: 'الشروق' }, { k: 'Dhuhr', n: 'الظهر' },
            { k: 'Asr', n: 'العصر' }, { k: 'Maghrib', n: 'المغرب' }, { k: 'Isha', n: 'العشاء' }
        ];
        pList.forEach(p => {
            if (timings[p.k]) {
                let [h, m] = timings[p.k].split(':');
                let h12 = h % 12 || 12;
                strip.innerHTML += `<div class="prayer-mini" id="strip-${p.k}"><span class="name">${p.n}</span><span class="time">${h12}:${m}</span></div>`;
            }
        });
    }

    const map = {
        Fajr: { name: "الفجر", icon: "fa-cloud-sun" },
        Sunrise: { name: "الشروق", icon: "fa-sun" },
        Dhuhr: { name: "الظهر", icon: "fa-sun" },
        Asr: { name: "العصر", icon: "fa-cloud" },
        Maghrib: { name: "المغرب", icon: "fa-cloud-moon" },
        Isha: { name: "العشاء", icon: "fa-moon" }
    };
    const list = document.getElementById('prayers-list');
    if (list) {
        list.innerHTML = "";
        list.className = "prayers-grid";
        for (let k in map) {
            if (timings[k]) {
                let [h, m] = timings[k].split(':');
                let suffix = h >= 12 ? 'م' : 'ص';
                let h12 = h % 12 || 12;
                list.innerHTML += `
                <div class="prayer-item" id="row-${k}">
                    <div class="flex-center" style="gap:15px;">
                        <div class="prayer-icon"><i class="fas ${map[k].icon}"></i></div>
                        <span class="prayer-name">${map[k].name}</span>
                    </div>
                    <span class="prayer-time">${h12}:${m} <small style="font-size:0.8em">${suffix}</small></span>
                </div>`;
            }
        }
    }
    startCountdown(timings);
}

function startCountdown(timings) {
    if (App.countdownInterval) clearInterval(App.countdownInterval);
    let timingsDay = new Date().getDate();

    App.countdownInterval = setInterval(() => {
        const now = new Date();
        if (now.getDate() !== timingsDay) {
            clearInterval(App.countdownInterval);
            fetchPrayers();
            return;
        }

        const order = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
        const ar = { Fajr: "الفجر", Dhuhr: "الظهر", Asr: "العصر", Maghrib: "المغرب", Isha: "العشاء" };

        order.forEach(p => {
            if (timings[p] && App.lastAdhan !== p) {
                let timeStr = timings[p].split(' ')[0];
                let [h, m] = timeStr.split(':');
                let pDate = new Date();
                pDate.setHours(parseInt(h), parseInt(m), 0, 0);

                let diff = now.getTime() - pDate.getTime();
                if (diff >= 0 && diff < 300000) {
                    playAdhan(p, ar[p]);
                }
            }
        });

        let next = "Fajr", minDiff = Infinity;
        order.forEach(p => {
            let [h, m] = timings[p].split(':');
            let pDate = new Date(); pDate.setHours(h, m, 0);
            let diff = pDate - now;
            if (diff > 0 && diff < minDiff) { minDiff = diff; next = p; }
        });

        if (minDiff === Infinity) {
            let [h, m] = timings.Fajr.split(':');
            let pDate = new Date(); pDate.setDate(pDate.getDate() + 1); pDate.setHours(h, m, 0);
            minDiff = pDate - now;
        }

        const oldName = document.getElementById('next-prayer-name');
        if (oldName) oldName.innerText = ar[next];

        let h = Math.floor(minDiff / 3600000).toString().padStart(2, '0');
        let m = Math.floor((minDiff % 3600000) / 60000).toString().padStart(2, '0');
        let s = Math.floor((minDiff % 60000) / 1000).toString().padStart(2, '0');

        if (document.getElementById('cd-h')) {
            document.getElementById('cd-h').innerText = h;
            document.getElementById('cd-m').innerText = m;
            document.getElementById('cd-s').innerText = s;
        }
        document.getElementById('row-' + next)?.classList.add('current');

        const homeName = document.getElementById('next-prayer-name-home');
        if (homeName) homeName.innerText = ar[next];

        const homeTimer = document.getElementById('cd-timer-home');
        if (homeTimer) homeTimer.innerText = `${h}:${m}:${s}`;

        document.querySelectorAll('.prayer-mini').forEach(item => {
            item.classList.remove('active');
            item.style.color = 'var(--text-sec)';
            item.style.fontWeight = 'normal';
        });
        const activeStrip = document.getElementById('strip-' + next);
        if (activeStrip) {
            activeStrip.classList.add('active');
            activeStrip.style.color = '#000';
            activeStrip.style.background = 'linear-gradient(135deg, #FFD700, #FDB931)';
            activeStrip.style.fontWeight = 'bold';
            activeStrip.style.borderRadius = '12px';
            activeStrip.style.padding = '2px 8px';
            activeStrip.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.5)';
        }

        if (minDiff <= 900000 && minDiff > 899000) {
            const preEnabled = localStorage.getItem('pre_notify') !== 'false';
            if (preEnabled && Notification.permission === 'granted') {
                new Notification(`تطبيق النور — اقترب وقت صلاة ${ar[next]} (بقي 15 دقيقة)`, {
                    icon: 'app_icon_1782665380376.png',
                    badge: 'app_icon_1782665380376.png'
                });
            }
        }
    }, 1000);
}

function unlockAudio() {
    const a = document.getElementById('adhan-audio');
    a.muted = true;
    a.play().then(() => {
        a.pause();
        a.currentTime = 0;
        a.muted = false;
    }).catch(e => { });

    if (document.getElementById('wakelock-toggle').checked) {
        const s = document.getElementById('silent-audio');
        if (s) s.play().catch(e => { });

        const statusEl = document.getElementById('auto-adhan-status');
        if (statusEl) statusEl.style.display = 'block';
    }
}

function playAdhan(prayerKey, prayerName) {
    const lastPlayed = sessionStorage.getItem('last_adhan_played');
    if (lastPlayed === prayerKey) {
        App.lastAdhan = prayerKey;
        return;
    }

    App.lastAdhan = prayerKey;
    sessionStorage.setItem('last_adhan_played', prayerKey);

    let adhanSrc = localStorage.getItem('adhan_voice') || 'https://www.islamcan.com/audio/adhan/azan1.mp3';
    if (adhanSrc === 'custom') {
        adhanSrc = localStorage.getItem('custom_adhan_data') || 'https://www.islamcan.com/audio/adhan/azan1.mp3';
    }

    const wakeLockEnabled = document.getElementById('wakelock-toggle').checked;
    const silentAudio = document.getElementById('silent-audio');
    const standardPlayer = document.getElementById('adhan-audio');
    let activePlayer = standardPlayer;

    if (wakeLockEnabled && silentAudio && !silentAudio.paused) {
        activePlayer = silentAudio;
        const restoreSilent = () => {
            activePlayer.src = 'data:audio/mp3;base64,//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq';
            activePlayer.loop = true;
            activePlayer.volume = 0.1;
            activePlayer.play().catch(e => { });
            activePlayer.removeEventListener('ended', restoreSilent);
        };
        activePlayer.addEventListener('ended', restoreSilent);
        activePlayer.loop = false;
    }

    const playWithFallback = (player, url, isRetry = false) => {
        player.src = url;
        player.volume = 1.0;
        player.play().catch(e => {
            if (!isRetry) {
                playWithFallback(player, 'https://www.islamcan.com/audio/adhan/azan2.mp3', true);
            } else if (player === silentAudio) {
                playWithFallback(standardPlayer, url, true);
            }
        });
    };

    playWithFallback(activePlayer, adhanSrc);

    if (Notification.permission === 'granted') {
        try {
            const notif = new Notification("تطبيق النور — حان وقت الصلاة", {
                body: `حان الآن موعد صلاة ${prayerName}`,
                icon: 'app_icon_1782665380376.png',
                badge: 'app_icon_1782665380376.png',
                requireInteraction: true
            });
            notif.onclick = function () { window.focus(); notif.close(); };
        } catch (e) { }
    }
}

function manualPlayAdhan() {
    const adhanAudio = document.getElementById('adhan-audio');
    let src = localStorage.getItem('adhan_voice') || 'https://www.islamcan.com/audio/adhan/azan1.mp3';

    if (src === 'custom') {
        src = localStorage.getItem('custom_adhan_data') || 'https://www.islamcan.com/audio/adhan/azan1.mp3';
    }

    adhanAudio.src = src;
    adhanAudio.play().catch(e => {
        alert("تعذر تشغيل الصوت. تأكد من تفعيل الصوت في المتصفح.");
    });
}

function togglePlay() {
    const vinyl = document.querySelector('.vinyl-record');
    const wave = document.getElementById('playing-animation');
    const glow = document.querySelector('.vinyl-glow-ring');

    if (App.audio.paused) {
        if (!App.audio.src) updatePlayerSource();
        App.audio.play();
        if (vinyl) vinyl.classList.add('spinning');
        if (wave) wave.style.opacity = '1';
        if (wave) wave.classList.add('pulse');
        if (glow) { glow.style.opacity = '0.35'; glow.classList.add('spinning'); }
    } else {
        App.audio.pause();
        if (vinyl) vinyl.classList.remove('spinning');
        if (wave) wave.style.opacity = '0';
        if (wave) wave.classList.remove('pulse');
        if (glow) { glow.style.opacity = '0'; glow.classList.remove('spinning'); }
    }
}

function updatePlayIcon(playing) {
    const icon = playing ? 'fa-pause' : 'fa-play';
    const el = document.getElementById('main-play-icon');
    if (el) el.className = `fas ${icon}`;

    const mini = document.getElementById('mini-play-icon');
    if (mini) mini.className = `fas ${icon}`;

    // Sync animation state with actual playing state
    const vinyl = document.querySelector('.vinyl-record');
    const wave = document.getElementById('playing-animation');
    const glow = document.querySelector('.vinyl-glow-ring');

    if (playing) {
        if (vinyl) vinyl.classList.add('spinning');
        if (wave) { wave.style.opacity = '1'; wave.classList.add('pulse'); }
        if (glow) { glow.style.opacity = '0.35'; glow.classList.add('spinning'); }
    } else {
        if (vinyl) vinyl.classList.remove('spinning');
        if (wave) { wave.style.opacity = '0'; wave.classList.remove('pulse'); }
        if (glow) { glow.style.opacity = '0'; glow.classList.remove('spinning'); }
    }
}

function updateProgress() {
    const dur = App.audio.duration;
    const cur = App.audio.currentTime;
    if (isNaN(dur)) return;

    const pct = (cur / dur) * 100;
    document.getElementById('progress-bar').style.width = pct + "%";
    document.getElementById('curr-time').innerText = fmtTime(cur);
    document.getElementById('total-time').innerText = fmtTime(dur);
}

function seekAudio(e) {
    const width = e.target.clientWidth;
    const clickX = e.offsetX;
    const dur = App.audio.duration;
    App.audio.currentTime = (clickX / width) * dur;
}

function seekRelative(sec) { App.audio.currentTime += sec; }

function changeTrack(dir) {
    let next = App.currSurah + dir;
    if (next < 1) next = 114;
    if (next > 114) next = 1;
    document.getElementById('surah-select-audio').value = next;
    updatePlayerSource(true);
}

function toggleSpeed() {
    let s = App.audio.playbackRate;
    let next = s === 1 ? 1.5 : (s === 1.5 ? 2 : 1);
    App.audio.playbackRate = next;
    document.getElementById('speed-display').innerText = next + 'x';
}

function fmtTime(s) {
    let m = Math.floor(s / 60);
    s = Math.floor(s % 60);
    return `${m}:${s < 10 ? '0' + s : s}`;
}

// Test reciter functionality (updated)
function testReciter() {
    // Use the improved testing function
    testCurrentReciter();
}

// Auto-test all reciters on page load
function testAllReciters() {
    const select = document.getElementById('reciter-select');
    const options = Array.from(select.options);
    let testedCount = 0;
    let workingCount = 0;

    options.forEach((option, index) => {
        setTimeout(() => {
            let testUrl = `${option.value}001.mp3`;

            console.log(`Testing: ${option.text} -> ${testUrl}`);

            fetch(testUrl, { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        workingCount++;
                        console.log(`✅ ${option.text} - Working perfectly`);
                    } else {
                        console.log(`❌ ${option.text} - Not available (${response.status})`);
                    }
                })
                .catch(() => {
                    console.log(`❌ ${option.text} - Connection failed`);
                })
                .finally(() => {
                    testedCount++;
                    if (testedCount === options.length) {
                        console.log(`🎯 Reciter test completed: ${workingCount}/${options.length} working`);
                        if (workingCount > 0) {
                            console.log('🎉 Some reciters are working! The app should function properly.');
                        } else {
                            console.log('⚠️ No reciters are currently accessible. Check your internet connection.');
                        }
                    }
                });
        }, index * 300); // Stagger requests
    });
}

// Quick reciter test for individual testing
function testCurrentReciter() {
    const btn = document.getElementById('btn-test-reciter');
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري...'; }

    const reciterUrl = document.getElementById('reciter-select').value;
    const reciterName = document.getElementById('reciter-select').options[document.getElementById('reciter-select').selectedIndex].text;
    const surahVal = document.getElementById('surah-select-audio').value || "1";

    const surahPad = surahVal.toString().padStart(3, '0');
    const testUrl = `${reciterUrl}${surahPad}.mp3`;

    // استخدام كائن الصوت للاختبار بدلاً من fetch لتجنب مشاكل CORS
    const tempAudio = new Audio(testUrl);
    tempAudio.volume = 0; // كتم الصوت أثناء الاختبار

    const timeout = setTimeout(() => {
        alert(`⚠️ القارئ ${reciterName} يستغرق وقتاً طويلاً للاستجابة.`);
        tempAudio.src = "";
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-check"></i> اختبار القارئ'; }
    }, 8000);

    tempAudio.onloadedmetadata = () => {
        clearTimeout(timeout);
        alert(`✅ القارئ ${reciterName} يعمل بنجاح!`);
        tempAudio.src = "";
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-check"></i> اختبار القارئ'; }
    };

    tempAudio.onerror = () => {
        clearTimeout(timeout);
        alert(`❌ تعذر الوصول إلى القارئ ${reciterName}.`);
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-check"></i> اختبار القارئ'; }
    };
}

function testReciter() {
    testCurrentReciter();
}

// Enhanced audio player with better error recovery
function enhancedUpdatePlayerSource(autoplay = false) {
    const reciter = document.getElementById('reciter-select').value;
    const surahVal = document.getElementById('surah-select-audio').value || "1";
    App.currSurah = parseInt(surahVal);

    // Standard mp3quran format
    const surahPad = surahVal.toString().padStart(3, '0');
    const url = `${reciter}${surahPad}.mp3`;

    // UI Update
    const selectedIndex = document.getElementById('reciter-select').selectedIndex;
    const reciterName = document.getElementById('reciter-select').options[selectedIndex].text;

    document.getElementById('player-surah-name').innerText = "سورة " + surahNames[App.currSurah - 1];
    const meta = surahMeta[App.currSurah - 1];
    if (meta) {
        const mInfo = document.getElementById('player-surah-meta-info');
        const sType = meta.t === 'مكية' || meta.t === 'مدنية' ? meta.t : (meta.t === 'Meccan' ? 'مكية' : 'مدنية');
        if (mInfo) mInfo.innerText = `${sType} • رقم ${App.currSurah} • ${meta.a} آيات`;
    }
    document.getElementById('player-reciter-name').innerText = reciterName;
    document.getElementById('mini-surah').innerText = surahNames[App.currSurah - 1];
    document.getElementById('mini-reciter').innerText = reciterName;

    // Download Link
    document.getElementById('download-btn').href = url;

    // Show loading state
    const playIcon = document.getElementById('main-play-icon');
    playIcon.className = 'fas fa-spinner fa-spin';

    // Audio Logic with multiple fallback attempts
    if (App.audio.src !== url) {
        App.audio.src = url;
        App.audio.load();

        // Add comprehensive event listeners
        App.audio.onloadstart = () => {
            playIcon.className = 'fas fa-spinner fa-spin';
        };

        App.audio.oncanplay = () => {
            playIcon.className = 'fas fa-play';
            if (autoplay) App.audio.play().catch(e => {
                console.log('Autoplay failed:', e);
            });
        };

        App.audio.onerror = (e) => {
            console.log('Audio load error:', e);
            const playIcon = document.getElementById('main-play-icon');
            playIcon.className = 'fas fa-exclamation-triangle';
            alert('عذراً، حدث خطأ في تحميل الملف الصوتي. يرجى التحقق من الاتصال بالإنترنت.');
        };
    } else {
        playIcon.className = 'fas fa-play';
        if (autoplay) App.audio.play().catch(e => console.log('Autoplay failed:', e));
    }
}

function updatePlayerSource(autoplay = false) {
    enhancedUpdatePlayerSource(autoplay);
}

// --- AZKAR ---
function initAzkar() {
    const grid = document.getElementById('azkar-grid');
    if (!grid) return;
    const term = document.getElementById('azkar-search').value.toLowerCase();
    grid.innerHTML = '';

    const gradients = {
        'm': 'linear-gradient(135deg, #FF9966, #FF5E62)',
        'e': 'linear-gradient(135deg, #2c3e50, #3498db)',
        's': 'linear-gradient(135deg, #8E2DE2, #4A00E0)',
        'w': 'linear-gradient(135deg, #00B4DB, #0083B0)',
        'p': 'linear-gradient(135deg, #11998e, #38ef7d)',
        'default': 'linear-gradient(135deg, #4b6cb7, #182848)'
    };

    for (let key in azkarDB) {
        const meta = azkarMeta[key] || { t: key, i: "fa-star" };
        const bg = gradients[key] || gradients['default'];

        if (!term || meta.t.includes(term)) {
            grid.innerHTML += `
                <div class="card text-center azkar-card" onclick="openAzkarCategory('${key}')" 
                     style="background: ${bg}; border: none; position: relative; overflow: hidden; color: white;">
                    
                    <!-- Decorative BG Icon -->
                    <i class="fas ${meta.i}" style="position: absolute;  opacity: 0.15; right: -15px; bottom: -15px; font-size: 6rem; transform: rotate(-15deg);"></i>
                    
                    <div style="position: relative; z-index: 2;">
                        <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.2);">
                            <i class="fas ${meta.i}" style="font-size: 1.8rem; color: #fff;"></i>
                        </div>
                        <h3 style="font-size: 1.2rem; font-weight: bold; margin-bottom: 5px; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">${meta.t}</h3>
                        <div style="font-size: 0.8rem; opacity: 0.9; background: rgba(0,0,0,0.2); padding: 4px 12px; border-radius: 12px; display: inline-block;">
                            ${azkarDB[key].length} ذكر
                        </div>
                    </div>
                </div>
            `;
        }
    }
}

function openAzkarCategory(type) {
    document.getElementById('azkar-categories-view').classList.add('hidden');
    document.getElementById('azkar-list-view').classList.remove('hidden');
    const meta = azkarMeta[type] || { t: type };
    document.getElementById('azkar-category-title').innerText = meta.t;
    loadAzkar(type);
    window.scrollTo(0, 0);
}

function showAzkarCategories() {
    document.getElementById('azkar-list-view').classList.add('hidden');
    document.getElementById('azkar-categories-view').classList.remove('hidden');
}

function loadAzkar(type) {
    const list = azkarDB[type] || [];
    const div = document.getElementById('azkar-container');
    if (!div) return;
    div.innerHTML = "";

    list.forEach((z, i) => {
        let isJumpable = z.t.startsWith('سورة ') || z.t.includes('آية') || z.t.includes('الكرسي') || z.t.includes('آمن الرسول') || (z.ref && z.ref.includes(':') && !z.ref.includes('رواه'));
        let jumpRef = z.ref ? z.ref : z.t;
        let onclickAction = isJumpable ? `onclick="openSurahFromAzkar('${jumpRef.replace(/'/g, "\\\\'")}')"` : `onclick="clickZikr(${i}, ${z.c})"`;
        div.innerHTML += `
        <div class="card" id="zcard-${i}" ${onclickAction} style="cursor:pointer; border: ${isJumpable ? '1px solid var(--primary)' : 'none'}; position:relative; min-height:80px; display:flex; flex-direction:column; justify-content:center;">
            <button onclick="event.stopPropagation(); shareZikr('${z.t.replace(/'/g, "\\\\\\'").replace(/"/g, "&quot;")}', '${jumpRef ? jumpRef.replace(/'/g, "\\\\\\'").replace(/"/g, "&quot;") : ''}')" 
                style="position:absolute; top:12px; left:12px; background:rgba(212, 175, 55, 0.15); width:34px; height:34px; border:1px solid var(--primary); border-radius:10px; color:var(--primary); display:flex; align-items:center; justify-content:center; cursor:pointer; transition:0.3s; z-index:10;" title="مشاركة">
                <i class="fas fa-share-alt" style="font-size:0.9rem;"></i>
            </button>
            <p style="font-size:1.1rem; padding-left:55px; margin:0; line-height:1.5;">${z.t}</p>
            ${z.ref ? `<div class="quran-ref" style="padding-left:55px;">📖 ${z.ref}</div>` : ''}
            ${!isJumpable ? `
            <div class="flex-between" style="margin-top:10px; font-size:0.9rem; color:var(--text-sec)">
                <span>التكرار: ${z.c}</span>
                <span style="color:var(--primary); font-weight:bold" id="zcount-${i}">0</span>
            </div>
            <div class="azkar-progress"><div class="azkar-bar" id="zbar-${i}"></div></div>
            ` : `<div style="margin-top:10px; text-align:center; color:var(--primary); font-size:0.95rem;"><i class="fas fa-book-open"></i> اضغط للانتقال للمصحف وقراءتها</div>`}
        </div>`;
    });

    // Load saved progress
    loadAzkarProgress(type);
}

function clickZikr(idx, target) {
    const countEl = document.getElementById(`zcount-${idx}`);
    const barEl = document.getElementById(`zbar-${idx}`);
    const cardEl = document.getElementById(`zcard-${idx}`);
    let curr = parseInt(countEl.innerText);

    if (curr < target) {
        curr++;
        countEl.innerText = curr;
        barEl.style.width = (curr / target) * 100 + "%";

        // Enhanced feedback
        if (navigator.vibrate && localStorage.getItem('sound_enabled') !== 'false') {
            navigator.vibrate(40);
        }

        // Add visual feedback
        cardEl.classList.add('pulse');
        setTimeout(() => cardEl.classList.remove('pulse'), 200);

        if (curr === target) {
            cardEl.style.opacity = '0.6';
            cardEl.classList.add('shake');
            setTimeout(() => cardEl.classList.remove('shake'), 500);

            // Add points to global stats
            let totalDhikrCount = parseInt(localStorage.getItem('total_dhikr_count') || '0');
            let totalDhikr = parseInt(localStorage.getItem('total_dhikr') || '0');
            localStorage.setItem('total_dhikr_count', totalDhikrCount + 1);
            localStorage.setItem('total_dhikr', totalDhikr + 1);

            // Show completion message
            if (Notification.permission === 'granted') {
                new Notification('تطبيق النور — أحسنت! 🎉', {
                    body: 'تم إكمال الذكر بنجاح',
                    icon: 'app_icon_1782665380376.png',
                    badge: 'app_icon_1782665380376.png'
                });
            }
        }

        // Increment total clicks for daily goal independently
        let dailyDhikr = parseInt(localStorage.getItem('daily_dhikr') || '0');
        localStorage.setItem('daily_dhikr', dailyDhikr + 1);

        // Update home daily achievement counter live (from real data)
        if (typeof updateHomeDhikrCounter === 'function') updateHomeDhikrCounter();

        // Save progress
        saveAzkarProgress(idx, curr);
    }
}

function openSurahFromAzkar(title) {
    let surahPart = title.replace("سورة ", "").trim();
    let ayahPart = null;

    if (title.includes(':')) {
        surahPart = title.split(':')[0].trim().replace("سورة ", "");
        let aMatch = title.split(':')[1].match(/\d+/);
        if (aMatch) ayahPart = parseInt(aMatch[0]);
    } else if (title.includes("آية الكرسي")) {
        surahPart = "البقرة";
        ayahPart = 255;
    } else if (title.includes("الرسول")) {
        surahPart = "البقرة";
        ayahPart = 285;
    }

    const idx = surahNames.findIndex(n => n.includes(surahPart) || surahPart.includes(n));
    if (idx !== -1) {
        navTo('read');
        document.getElementById('surah-select-read').value = idx + 1;
        loadSurahText(idx + 1, ayahPart);
    } else {
        showToast("عذراً، لم نتمكن من العثور على السورة المطلوبة.");
    }
}

// Save Azkar Progress
function saveAzkarProgress(azkarId, count) {
    const progress = JSON.parse(localStorage.getItem('azkar_progress')) || {};
    const today = new Date().toDateString();

    if (!progress[today]) progress[today] = {};
    progress[today][azkarId] = count;

    localStorage.setItem('azkar_progress', JSON.stringify(progress));
}

// Load Azkar Progress
function loadAzkarProgress(category) {
    const progress = JSON.parse(localStorage.getItem('azkar_progress')) || {};
    const today = new Date().toDateString();
    const todayProgress = progress[today] || {};

    Object.keys(todayProgress).forEach(azkarId => {
        const count = todayProgress[azkarId];
        const countEl = document.getElementById(`zcount-${azkarId}`);
        const barEl = document.getElementById(`zbar-${azkarId}`);
        const cardEl = document.getElementById(`zcard-${azkarId}`);

        if (countEl && barEl && cardEl) {
            countEl.innerText = count;

            // Find the target count for this azkar
            const azkar = azkarDB[category] || [];
            const target = azkar[parseInt(azkarId)]?.c || 1;

            barEl.style.width = (count / target) * 100 + "%";

            if (count >= target) {
                cardEl.style.opacity = '0.6';
            }
        }
    });
}

// --- DHIKR (TASBIH) ---
function incrementDhikr() {
    const type = document.getElementById('dhikr-type').value;
    const today = new Date().toDateString();

    if (!App.dhikr[type]) App.dhikr[type] = { total: 0, history: {} };
    if (!App.dhikr[type].history[today]) App.dhikr[type].history[today] = 0;

    App.dhikr[type].total++;
    App.dhikr[type].history[today]++;

    // Save to localStorage immediately so subsequent functions read fresh data
    localStorage.setItem('dhikr_v2', JSON.stringify(App.dhikr));

    // Update global stats
    let totalDhikr = parseInt(localStorage.getItem('total_dhikr') || '0');
    let dailyDhikr = parseInt(localStorage.getItem('daily_dhikr') || '0');
    let totalDhikrCount = parseInt(localStorage.getItem('total_dhikr_count') || '0');

    localStorage.setItem('total_dhikr', totalDhikr + 1);
    localStorage.setItem('daily_dhikr', dailyDhikr + 1);
    localStorage.setItem('total_dhikr_count', totalDhikrCount + 1);

    // Update home daily achievement counter live (from real data)
    if (typeof updateHomeDhikrCounter === 'function') updateHomeDhikrCounter();

    // Enhanced animation
    const ring = document.querySelector('.dhikr-ring');
    if (ring) {
        ring.style.transform = "scale(0.95)";
        ring.style.boxShadow = "0 0 30px var(--primary)";
        setTimeout(() => {
            ring.style.transform = "scale(1)";
            ring.style.boxShadow = "0 0 25px rgba(0,0,0,0.5)";
        }, 100);
    }

    if (navigator.vibrate && localStorage.getItem('sound_enabled') !== 'false') {
        navigator.vibrate([30, 50, 30]);
    }

    // Show encouragement message every 100 times
    if (App.dhikr[type].history[today] % 100 === 0) {
        showEncouragement();
    }

    loadDhikrStats();
}

function loadDhikrStats() {
    const type = document.getElementById('dhikr-type').value;
    const today = new Date().toDateString();

    // Update counter for selected type
    const typeData = App.dhikr[type];
    const dhikrCountEl = document.getElementById('dhikr-count');
    if (dhikrCountEl) dhikrCountEl.innerText = typeData?.history[today] || 0;

    // Chart: Show TOTAL daily activity (All types combined)
    const chartEl = document.getElementById('dhikrChart');
    if (!chartEl) return;
    const ctx = chartEl.getContext('2d');
    if (App.chart) App.chart.destroy();

    const labels = [];
    const values = [];

    for (let i = 6; i >= 0; i--) {
        let d = new Date(); d.setDate(d.getDate() - i);
        const dateStr = d.toDateString();
        labels.push(d.toLocaleDateString('ar-EG', { weekday: 'short' }));

        // Sum all types for this day
        let dayTotal = 0;
        for (let key in App.dhikr) {
            if (App.dhikr[key].history && App.dhikr[key].history[dateStr]) {
                dayTotal += App.dhikr[key].history[dateStr];
            }
        }
        values.push(dayTotal);
    }

    App.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'مجموع الأذكار',
                data: values,
                backgroundColor: getComputedStyle(document.body).getPropertyValue('--primary'),
                borderRadius: 5
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } },
            animation: { duration: 1000 }
        }
    });
}

// --- UNDO SYSTEM ---
let undoState = null;
let undoTimer = null;

function showUndoButton(text) {
    const btn = document.getElementById('btn-undo');
    if (btn) {
        btn.innerHTML = `<i class="fas fa-undo"></i> ${text}`;
        btn.classList.remove('hidden');

        if (undoTimer) clearTimeout(undoTimer);
        undoTimer = setTimeout(() => {
            btn.classList.add('hidden');
            undoState = null;
        }, 5000);
    }
}

function executeUndo() {
    if (!undoState) return;

    if (undoState.action === 'reset') {
        const { type, date, count, deducted } = undoState;
        if (App.dhikr[type]) {
            App.dhikr[type].history[date] = count;
            // Restore total if it was deducted
            if (deducted) {
                App.dhikr[type].total = (App.dhikr[type].total || 0) + deducted;
            }
            localStorage.setItem('dhikr_v2', JSON.stringify(App.dhikr));
            loadDhikrStats();
        }
    } else if (undoState.action === 'delete_custom') {
        const { item, index } = undoState;
        const customDhikr = JSON.parse(localStorage.getItem('custom_dhikr')) || [];
        customDhikr.splice(index, 0, item);
        localStorage.setItem('custom_dhikr', JSON.stringify(customDhikr));

        // Refresh UI
        const select = document.getElementById('dhikr-type');
        if (select) {
            const options = Array.from(select.options);
            options.forEach(opt => { if (opt.value.startsWith('custom_')) opt.remove(); });
        }
        loadCustomDhikr();
        if (select) select.value = item.type;
        showCustomDhikrList();
        loadDhikrStats();
    }

    document.getElementById('btn-undo').classList.add('hidden');
    undoState = null;
    if (undoTimer) clearTimeout(undoTimer);
}

function resetDhikr() {
    if (confirm("تصفير عداد اليوم؟")) {
        const type = document.getElementById('dhikr-type').value;
        if (App.dhikr[type]) {
            const today = new Date().toDateString();
            const count = App.dhikr[type].history[today] || 0;

            // Save state for undo
            undoState = {
                action: 'reset',
                type: type,
                date: today,
                count: count,
                deducted: count
            };

            App.dhikr[type].history[today] = 0;
            // Update total (remove the reset amount)
            if (App.dhikr[type].total >= count) {
                App.dhikr[type].total -= count;
            }

            localStorage.setItem('dhikr_v2', JSON.stringify(App.dhikr));
            loadDhikrStats();
            showUndoButton("تراجع عن التصفير");
        }
    }
}

function showDhikrHistory() {
    // Aggregate totals by date
    const historyMap = {};
    for (let key in App.dhikr) {
        const hist = App.dhikr[key].history;
        for (let date in hist) {
            if (!historyMap[date]) historyMap[date] = 0;
            historyMap[date] += hist[date];
        }
    }

    // Sort by date descending
    const sortedDates = Object.keys(historyMap).sort((a, b) => new Date(b) - new Date(a));

    let html = `<div style="max-height:300px; overflow-y:auto; padding-right:5px;">`;

    if (sortedDates.length === 0) {
        html += `<div style="text-align:center; padding:20px; color:var(--text-sec)">لا يوجد سجل نشاط حتى الآن</div>`;
    } else {
        sortedDates.forEach(date => {
            const d = new Date(date);
            const dateStr = d.toLocaleDateString('ar-EG', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
            const count = historyMap[date];

            html += `
                <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:rgba(255,255,255,0.03); border-radius:8px; margin-bottom:8px; border:1px solid rgba(255,255,255,0.05);">
                    <div style="font-size:0.9rem; color:var(--text-main);">${dateStr}</div>
                    <div style="font-weight:bold; color:var(--primary); font-family:'Cairo'; font-size:1.1rem;">${count}</div>
                </div>`;
        });
    }
    html += `</div>`;

    // Create Modal
    const modal = document.createElement('div');
    modal.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.85); z-index: 10000; display: flex; justify-content: center; align-items: center; padding: 20px; backdrop-filter: blur(5px); animation: fadeIn 0.3s;`;

    modal.innerHTML = `
        <div style="background: var(--bg-card); border: 1px solid var(--primary); border-radius: 20px; padding: 25px; width: 100%; max-width: 450px; max-height: 85vh; display: flex; flex-direction: column; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
            <div style="text-align:center; margin-bottom:20px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:15px;">
                <h3 style="color:var(--primary); font-family:'Cairo'; margin:0;"><i class="fas fa-history"></i> سجل الأيام الشامل</h3>
                <p style="font-size:0.8rem; color:var(--text-sec); margin-top:5px;">مجموع كل الأذكار لكل يوم</p>
            </div>
            <div style="flex:1; overflow:hidden;">${html}</div>
            <button onclick="this.parentElement.parentElement.remove()" style="margin-top:20px;">إغلاق</button>
        </div>`;

    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    document.body.appendChild(modal);
}

function getDhikrDisplayName(type) {
    const names = {
        'subhan': 'سبحان الله',
        'hamd': 'الحمد لله',
        'akbar': 'الله أكبر',
        'istighfar': 'أستغفر الله',
        'la_ilaha': 'لا إله إلا الله',
        'salat': 'اللهم صل على محمد',
        'astaghfirullah': 'أستغفر الله العظيم',
        'subhan_allah': 'سبحان الله العظيم',
        'alhamdulillah': 'الحمد لله رب العالمين',
        'allahu_akbar': 'الله أكبر من كل شيء',
        'la_hawla': 'لا حول ولا قوة إلا بالله',
        'hasbi_allah': 'حسبنا الله ونعم الوكيل',
        'barak_allah': 'بارك الله فيك',
        'jazak_allah': 'جزاك الله خيراً',
        'rabbana': 'ربنا آتنا في الدنيا حسنة',
        'astaghfirullah_allah': 'أستغفر الله من كل ذنب',
        'subhan_allah_wa_bihamdihi': 'سبحان الله وبحمده',
        'subhan_allah_azim': 'سبحان الله العظيم',
        'astaghfirullah_wa_atubu': 'أستغفر الله وأتوب إليه'
    };
    return names[type] || type;
}

function showEncouragement() {
    const encouragements = [
        'بارك الله فيك! 🌟',
        'أحنست! استمر 💪',
        'ممتاز! جزاك الله خيراً 🎯',
        'رائع! هذا هو الطريق 🚀',
        'مستمر! بارك الله فيك ✨',
        'رائع جداً! أثابك الله 🎊'
    ];

    const message = encouragements[Math.floor(Math.random() * encouragements.length)];
    if (Notification.permission === 'granted') {
        new Notification('تطبيق النور — تهانينا! 🎉', {
            body: message,
            icon: 'app_icon_1782665380376.png',
            badge: 'app_icon_1782665380376.png'
        });
    }
}

// Add Custom Dhikr
function addCustomDhikr() {
    const text = document.getElementById('custom-dhikr-text').value.trim();
    if (!text) {
        alert('يرجى إدخال نص الذكر المخصص');
        return;
    }

    const customDhikr = JSON.parse(localStorage.getItem('custom_dhikr')) || [];
    const type = 'custom_' + (customDhikr.length + 1);

    // Add to select
    const select = document.getElementById('dhikr-type');
    if (select) {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = text;
        select.appendChild(option);
    }

    customDhikr.push({ type, text });
    localStorage.setItem('custom_dhikr', JSON.stringify(customDhikr));

    // Clear input
    document.getElementById('custom-dhikr-text').value = '';

    // Select the new option
    if (select) select.value = type;
    loadDhikrStats();

    alert('تم إضافة الذكر المخصص بنجاح! 🎉');
}

// Load Custom Dhikr on startup
function loadCustomDhikr() {
    const customDhikr = JSON.parse(localStorage.getItem('custom_dhikr')) || [];
    const select = document.getElementById('dhikr-type');
    if (!select) return;

    customDhikr.forEach(dhikr => {
        const option = document.createElement('option');
        option.value = dhikr.type;
        option.textContent = dhikr.text;
        select.appendChild(option);
    });
}

// Show custom dhikr list
function showCustomDhikrList() {
    const customDhikr = JSON.parse(localStorage.getItem('custom_dhikr')) || [];
    const container = document.getElementById('custom-dhikr-list');
    if (!container) return;

    if (customDhikr.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:var(--text-sec); font-size:0.8rem;">لا توجد أذكار مخصصة</p>';
        return;
    }

    container.innerHTML = customDhikr.map((dhikr, index) => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:8px; background:rgba(0,0,0,0.2); border-radius:8px; margin-bottom:5px;">
            <span style="font-size:0.8rem; flex: 1; text-align: right; margin-left: 10px;">${dhikr.text}</span>
            <div style="display: flex; gap: 5px;">
                <button onclick="editCustomDhikr(${index})" style="background:var(--primary); color:#000; padding:4px 8px; font-size:0.7rem; border:none; border-radius:4px; cursor:pointer;"><i class="fas fa-edit"></i></button>
                <button onclick="removeCustomDhikr(${index})" style="background:#f44336; color:#fff; padding:4px 8px; font-size:0.7rem; border:none; border-radius:4px; cursor:pointer;"><i class="fas fa-trash"></i></button>
            </div>
        </div>`).join('');
}

function editCustomDhikr(index) {
    const customDhikr = JSON.parse(localStorage.getItem('custom_dhikr')) || [];
    const dhikr = customDhikr[index];
    if (!dhikr) return;

    // Create Modal Element
    const modal = document.createElement('div');
    modal.id = 'edit-dhikr-modal';
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background: rgba(0,0,0,0.7); z-index: 15000; 
        display: flex; justify-content: center; align-items: center; 
        backdrop-filter: blur(5px); animation: fadeIn 0.25s;
    `;

    modal.innerHTML = `
        <div class="card" style="
            width: 90%; 
            max-width: 400px; 
            padding: 25px; 
            border: 1px solid var(--primary);
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            animation: scaleUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            text-align: center;
        ">
            <h3 style="color:var(--primary); font-family:'Cairo'; margin-bottom:15px; font-size:1.25rem;">تعديل الذكر المخصص</h3>
            <textarea id="edit-dhikr-input" style="
                width: 100%; 
                height: 80px; 
                background: rgba(0,0,0,0.3); 
                border: 1px solid rgba(255,255,255,0.1); 
                border-radius: 8px; 
                color: #fff; 
                padding: 10px; 
                font-family: 'Cairo', sans-serif;
                font-size: 0.95rem; 
                resize: none; 
                margin-bottom: 20px;
                text-align: right;
            ">${dhikr.text}</textarea>
            
            <div style="display:flex; gap:10px;">
                <button id="save-edit-dhikr-btn" style="
                    flex: 1; 
                    background: var(--primary); 
                    color: #000; 
                    border: none; 
                    padding: 10px; 
                    border-radius: 8px; 
                    font-weight: bold; 
                    cursor: pointer;
                    font-family: 'Cairo', sans-serif;
                ">حفظ التعديل</button>
                <button id="cancel-edit-dhikr-btn" style="
                    flex: 1; 
                    background: rgba(255,255,255,0.1); 
                    color: #fff; 
                    border: 1px solid rgba(255,255,255,0.2); 
                    padding: 10px; 
                    border-radius: 8px; 
                    font-weight: bold; 
                    cursor: pointer;
                    font-family: 'Cairo', sans-serif;
                ">إلغاء</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Cancel action
    modal.querySelector('#cancel-edit-dhikr-btn').onclick = () => {
        modal.remove();
    };

    // Save action
    modal.querySelector('#save-edit-dhikr-btn').onclick = () => {
        const inputVal = modal.querySelector('#edit-dhikr-input').value.trim();
        if (!inputVal) {
            alert("لا يمكن أن يكون نص الذكر فارغاً");
            return;
        }

        // Update text
        dhikr.text = inputVal;
        localStorage.setItem('custom_dhikr', JSON.stringify(customDhikr));

        // Update in dropdown
        const select = document.getElementById('dhikr-type');
        if (select) {
            const option = select.querySelector(`option[value="${dhikr.type}"]`);
            if (option) option.textContent = inputVal;
        }

        showCustomDhikrList();
        loadDhikrStats();
        modal.remove();
        alert('تم تعديل الذكر بنجاح! ✏️');
    };
}

function removeCustomDhikr(index) {
    const customDhikr = JSON.parse(localStorage.getItem('custom_dhikr')) || [];
    const dhikr = customDhikr[index];

    if (confirm('هل تريد حذف هذا الذكر المخصص؟')) {
        // Remove from select
        const select = document.getElementById('dhikr-type');
        if (select) {
            const option = select.querySelector(`option[value="${dhikr.type}"]`);
            if (option) option.remove();
        }

        // Save for undo
        undoState = {
            action: 'delete_custom',
            index: index,
            item: dhikr
        };

        // Remove from data
        customDhikr.splice(index, 1);
        localStorage.setItem('custom_dhikr', JSON.stringify(customDhikr));

        showCustomDhikrList();
        showUndoButton("تراجع عن الحذف");
    }
}

// Toggle sound
function toggleSound() {
    const soundEnabled = document.getElementById('sound-toggle').checked;
    localStorage.setItem('sound_enabled', soundEnabled.toString());
}

// Toggle pre-notification
function togglePreNotify() {
    const enabled = document.getElementById('pre-notify-toggle').checked;
    localStorage.setItem('pre_notify', enabled.toString());
}

let wakeLock = null;
async function toggleWakeLock() {
    const enabled = document.getElementById('wakelock-toggle').checked;
    localStorage.setItem('wakelock_enabled', enabled.toString());

    const silentAudio = document.getElementById('silent-audio');
    const statusDot = document.getElementById('bg-status');

    if (enabled) {
        // 1. محاولة منع إغلاق الشاشة (Screen Wake Lock)
        try {
            if ('wakeLock' in navigator) {
                wakeLock = await navigator.wakeLock.request('screen');
            }
        } catch (err) { console.log(err); }

        // 2. تشغيل الصوت الصامت (لإبقاء المعالج يعمل في الخلفية)
        if (silentAudio) {
            silentAudio.volume = 0.1; // Ensure not zero
            silentAudio.play().then(() => {
                silentAudio.loop = true;
                // Update Metadata for Lock Screen Control
                if ('mediaSession' in navigator) {
                    navigator.mediaSession.metadata = new MediaMetadata({
                        title: 'تطبيق النور - نشط',
                        artist: 'مراقبة الصلاة في الخلفية',
                        album: 'انقر للعودة للتطبيق',
                        artwork: [{ src: 'https://cdn-icons-png.flaticon.com/512/5146/5146011.png', sizes: '192x192', type: 'image/png' }]
                    });
                    navigator.mediaSession.playbackState = "playing";
                    navigator.mediaSession.setActionHandler('play', () => silentAudio.play());
                    navigator.mediaSession.setActionHandler('pause', () => { }); // Do nothing on pause
                }
            }).catch(e => {
                console.log("Silent play waiting for interaction");
                // Alert removed at user request to avoid startup interruption
            });
        }

        // 3. مؤشر العمل في الخلفية (النقطة الخضراء)
        if (statusDot) statusDot.style.display = 'inline-block';
        if (document.getElementById('auto-adhan-status')) document.getElementById('auto-adhan-status').style.display = 'block';

        // 4. تكرار التنشيط لضمان عدم توقف النظام (APK Keep Alive)
        if (!App.keepAliveInterval) {
            App.keepAliveInterval = setInterval(() => {
                // Revive if paused and not playing Quran
                if (silentAudio && silentAudio.paused && !App.isPlaying) {
                    silentAudio.play().catch(e => { });
                }
            }, 10000);
        }
    } else {
        if (wakeLock) {
            wakeLock.release();
            wakeLock = null;
        }
        if (silentAudio) {
            silentAudio.pause();
        }

        if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = "none";
        }

        if (statusDot) statusDot.style.display = 'none';
        if (document.getElementById('auto-adhan-status')) document.getElementById('auto-adhan-status').style.display = 'none';

        if (App.keepAliveInterval) {
            clearInterval(App.keepAliveInterval);
            App.keepAliveInterval = null;
        }
    }
}

// Change adhan voice
function changeAdhanVoice(url) {
    localStorage.setItem('adhan_voice', url);
    const adhanAudio = document.getElementById('adhan-audio');
    adhanAudio.pause();
    adhanAudio.currentTime = 0;
}

// Change reciter from settings page
function changeReciterFromSettings(url) {
    localStorage.setItem('audio_reciter', url);
    // Also sync with reciter-select in the audio/listen page if exists
    const reciterSelect = document.getElementById('reciter-select');
    if (reciterSelect) reciterSelect.value = url;
    showToast('تم تغيير القارئ بنجاح ✓');
}

// Toggle auto-play next surah
function toggleAutoNext() {
    const enabled = document.getElementById('auto-next-toggle').checked;
    localStorage.setItem('auto_next_surah', enabled ? 'true' : 'false');
    App.autoNext = enabled;
}

// Toggle repeat surah
function toggleRepeatSurah() {
    const enabled = document.getElementById('repeat-surah-toggle').checked;
    localStorage.setItem('repeat_surah', enabled ? 'true' : 'false');
    const mainAudio = document.getElementById('main-audio');
    if (mainAudio) mainAudio.loop = enabled;
}

// Change playback speed
function changePlaybackSpeed(val) {
    const speed = parseFloat(val);
    const label = document.getElementById('speed-label');
    if (label) label.textContent = '×' + speed;
    const mainAudio = document.getElementById('main-audio');
    if (mainAudio) mainAudio.playbackRate = speed;
    localStorage.setItem('playback_speed', speed);
}

// Update notification status in settings UI
function updateNotifyStatusUI() {
    const icon = document.getElementById('notif-status-icon');
    const text = document.getElementById('notif-status-text');
    const btn = document.getElementById('btn-enable-notif');
    if (!icon || !text) return;

    if (!('Notification' in window)) {
        icon.style.color = '#ef4444';
        text.textContent = 'متصفحك لا يدعم الإشعارات';
        if (btn) btn.style.display = 'none';
        return;
    }

    const perm = Notification.permission;
    if (perm === 'granted') {
        icon.style.color = '#22c55e';
        text.textContent = 'الإشعارات مفعّلة ✅';
        if (btn) btn.style.display = 'none';
        // Show token if exists
        const token = localStorage.getItem('fcm_token');
        const tokenInput = document.getElementById('fcm-token-display');
        if (token && tokenInput) {
            tokenInput.value = token;
            tokenInput.closest('.fcm-token-box')?.setAttribute('style', 'display:block');
        }
    } else if (perm === 'denied') {
        icon.style.color = '#ef4444';
        text.textContent = 'الإشعارات محظورة ❌ — فعّلها من إعدادات المتصفح';
        if (btn) btn.innerHTML = '<i class="fas fa-cog"></i> كيفية تفعيلها';
    } else {
        icon.style.color = '#f59e0b';
        text.textContent = 'الإشعارات غير مفعّلة — اضغط للتفعيل';
    }
}

// ╔══════════════════════════════════════════════════════════════╗
// ║          🔔 نظام الإشعارات المحلية (بدون Firebase)          ║
// ╚══════════════════════════════════════════════════════════════╝

const Notifier = {
    sw: null,   // Service Worker registration

    // ── تهيئة النظام ──────────────────────────────────────────
    async init() {
        if (!('serviceWorker' in navigator) || !('Notification' in window)) return;
        try {
            this.sw = await navigator.serviceWorker.ready;
            // ابدأ الـ checker كل دقيقة
            setInterval(() => this.checkAlarms(), 60000);
            // Periodic Background Sync (حد تتيح)
            if ('periodicSync' in this.sw) {
                try {
                    await this.sw.periodicSync.register('check-alarms', { minInterval: 60000 });
                } catch { }
            }
        } catch (e) { console.warn('[Notifier] init error:', e); }
    },

    // ── طلب الإذن ──────────────────────────────────────────────
    async requestPermission() {
        if (Notification.permission === 'granted') return true;
        const result = await Notification.requestPermission();
        updateNotifyStatusUI();
        return result === 'granted';
    },

    // ── جدولة إشعار ────────────────────────────────────────────
    async schedule(id, title, body, fireAt, opts = {}) {
        if (!this.sw) return;
        const alarm = {
            id, title, body, fireAt,
            icon: opts.icon || 'app_icon_1782665380376.png',
            badge: 'app_icon_1782665380376.png',
            url: opts.url || '/',
            requireInteraction: opts.important || false
        };
        this.sw.active?.postMessage({ type: 'SCHEDULE_ALARM', payload: alarm });
        // Also use setTimeout as fallback (works while app is open)
        const delay = fireAt - Date.now();
        if (delay > 0 && delay < 8 * 60 * 60 * 1000) {
            setTimeout(() => {
                if (Notification.permission === 'granted') {
                    navigator.serviceWorker.ready.then(sw =>
                        sw.active?.postMessage({ type: 'SHOW_NOW', payload: { title: 'تطبيق النور — ' + title, body, icon: 'app_icon_1782665380376.png', badge: 'app_icon_1782665380376.png', ...opts } })
                    );
                }
            }, delay);
        }
    },

    // ── إشعار فوري ─────────────────────────────────────────────
    async showNow(title, body, opts = {}) {
        if (Notification.permission !== 'granted') return;
        if (!this.sw?.active) return;
        this.sw.active.postMessage({ type: 'SHOW_NOW', payload: { title, body, ...opts } });
    },

    // ── إلغاء إشعار ────────────────────────────────────────────
    async cancel(id) {
        this.sw?.active?.postMessage({ type: 'CANCEL_ALARM', payload: { id } });
    },

    // ── تشغيل الفحص ────────────────────────────────────────────
    checkAlarms() {
        this.sw?.active?.postMessage({ type: 'CHECK_ALARMS' });
    },

    // ── جدولة إشعارات الصلاة ───────────────────────────────────
    async schedulePrayerNotifications() {
        if (Notification.permission !== 'granted') return;
        if (!App.prayerTimes) return;

        const prayers = [
            { key: 'Fajr', name: '🌙 أذان الفجر', emoji: '🌙' },
            { key: 'Dhuhr', name: '☀️ أذان الظهر', emoji: '☀️' },
            { key: 'Asr', name: '🌤️ أذان العصر', emoji: '🌤️' },
            { key: 'Maghrib', name: '🌅 أذان المغرب', emoji: '🌅' },
            { key: 'Isha', name: '🌃 أذان العشاء', emoji: '🌃' }
        ];

        const preNotify = localStorage.getItem('pre_notify') !== 'false';
        const today = new Date();

        for (const p of prayers) {
            const timeStr = App.prayerTimes[p.key];
            if (!timeStr) continue;

            const [h, m] = timeStr.split(':').map(Number);
            const fireTime = new Date(today);
            fireTime.setHours(h, m, 0, 0);

            if (fireTime <= Date.now()) continue;

            // إشعار وقت الصلاة
            await this.schedule(
                `prayer_${p.key}`,
                p.name,
                `حان الآن وقت ${p.name.replace(/[🌙☀️🌤️🌅🌃]/g, '').trim()} — حيّ على الصلاة`,
                fireTime.getTime(),
                { url: '/#home', important: true }
            );

            // إشعار قبل الصلاة بـ 15 دقيقة
            if (preNotify) {
                const preTime = new Date(fireTime.getTime() - 15 * 60000);
                if (preTime > Date.now()) {
                    await this.schedule(
                        `pre_${p.key}`,
                        `⏰ تنبيه — ${p.name}`,
                        `بعد 15 دقيقة ${p.name.replace(/[🌙☀️🌤️🌅🌃]/g, '').trim()} — استعد للصلاة`,
                        preTime.getTime(),
                        { url: '/#home' }
                    );
                }
            }
        }

        console.log('[Notifier] تم جدولة إشعارات الصلاة ✅');
    },

    // ── جدولة أذكار الصباح والمساء ─────────────────────────────
    async scheduleDailyReminders() {
        if (Notification.permission !== 'granted') return;

        const now = new Date();
        const today = new Date();

        // أذكار الصباح — 7:00 ص
        const morning = new Date(today);
        morning.setHours(7, 0, 0, 0);
        if (morning > now) {
            await this.schedule('azkar_morning', '🌄 أذكار الصباح', 'ابدأ يومك بذكر الله — "ومن يتوكل على الله فهو حسبه"', morning.getTime(), { url: '/#azkar' });
        }

        // أذكار المساء — 5:00 م
        const evening = new Date(today);
        evening.setHours(17, 0, 0, 0);
        if (evening > now) {
            await this.schedule('azkar_evening', '🌆 أذكار المساء', 'لا تنسَ أذكار المساء — أحصن ليلتك بذكر الله', evening.getTime(), { url: '/#azkar' });
        }

        // تذكير قرآن — 9:00 م
        const quran = new Date(today);
        quran.setHours(21, 0, 0, 0);
        if (quran > now) {
            await this.schedule('quran_daily', '📖 وردك اليومي', 'لا تنسَ قراءة القرآن الكريم اليوم', quran.getTime(), { url: '/#read' });
        }

        // تسبيح قبل النوم — 10:30 م
        const sleep = new Date(today);
        sleep.setHours(22, 30, 0, 0);
        if (sleep > now) {
            await this.schedule('sleep_azkar', '😴 أذكار النوم', 'احرص على أذكار النوم قبل أن تخلد للراحة', sleep.getTime(), { url: '/#azkar' });
        }

        console.log('[Notifier] تم جدولة التذكيرات اليومية ✅');
    },

    // ── تشغيل كل الجدولة ────────────────────────────────────────
    async scheduleAll() {
        await this.schedulePrayerNotifications();
        await this.scheduleDailyReminders();
        showToast('تم جدولة الإشعارات ليومنا هذا ✅', 3000);
    }
};

// تهيئة عند تحميل التطبيق
async function initNotifier() {
    await Notifier.init();
    if (Notification.permission === 'granted') {
        // أعد الجدولة كل يوم عند فتح التطبيق
        const lastScheduled = localStorage.getItem('notif_scheduled_date');
        const today = new Date().toDateString();
        if (lastScheduled !== today) {
            await Notifier.scheduleAll();
            localStorage.setItem('notif_scheduled_date', today);
        }
    }
}

// Load audio settings on startup
function loadAudioSettings() {
    const savedReciter = localStorage.getItem('audio_reciter');
    if (savedReciter) {
        const settingsSelect = document.getElementById('reciter-select-settings');
        if (settingsSelect) settingsSelect.value = savedReciter;
    }
    const autoNext = localStorage.getItem('auto_next_surah');
    if (autoNext === 'false') {
        const toggle = document.getElementById('auto-next-toggle');
        if (toggle) toggle.checked = false;
    }
    const repeat = localStorage.getItem('repeat_surah');
    if (repeat === 'true') {
        const toggle = document.getElementById('repeat-surah-toggle');
        if (toggle) toggle.checked = true;
    }
    const speed = parseFloat(localStorage.getItem('playback_speed') || '1');
    const speedSlider = document.getElementById('playback-speed');
    const speedLabel = document.getElementById('speed-label');
    if (speedSlider) speedSlider.value = speed;
    if (speedLabel) speedLabel.textContent = '×' + speed;
    const mainAudio = document.getElementById('main-audio');
    if (mainAudio) mainAudio.playbackRate = speed;
}

// Handle Custom Adhan Upload
function handleAdhanUpload(input) {
    if (input.files && input.files[0]) {
        const file = input.files[0];

        // Check size (limit to ~4MB to be safe for localStorage)
        if (file.size > 2.5 * 1024 * 1024) {
            alert("عذراً، حجم الملف كبير جداً. يرجى اختيار ملف أصغر من 2.5 ميجابايت لضمان عمل التطبيق.");
            return;
        }

        const reader = new FileReader();

        reader.onload = function (e) {
            try {
                const base64 = e.target.result;
                localStorage.setItem('custom_adhan_data', base64);
                localStorage.setItem('custom_adhan_name', file.name);

                // Update Select
                const select = document.getElementById('adhan-voice-select');
                // Remove existing custom option if any
                const existing = select.querySelector('option[value="custom"]');
                if (existing) existing.remove();

                const opt = document.createElement('option');
                opt.value = 'custom';
                opt.text = 'ملف خاص: ' + file.name;
                select.add(opt);
                select.value = 'custom';
                changeAdhanVoice('custom');

                alert("تم رفع ملف الأذان بنجاح!");
            } catch (err) {
                console.error(err);
                alert("حدث خطأ أثناء حفظ الملف. قد تكون مساحة التخزين ممتلئة.");
            }
        };

        reader.readAsDataURL(file);
    }
}

function changeHijriAdjustment(val) {
    App.hijriAdj = parseInt(val);
    localStorage.setItem('hijri_adj', App.hijriAdj);
    initHijriCalendar();
    fetchPrayers(); // Refresh to get new hijri date
}

// Test adhan
function testAdhan() {
    const adhanAudio = document.getElementById('adhan-audio');
    const btn = document.getElementById('btn-test-adhan');

    // Toggle Stop
    if (!adhanAudio.paused && !adhanAudio.ended && adhanAudio.currentTime > 0) {
        adhanAudio.pause();
        adhanAudio.currentTime = 0;
        if (btn) btn.innerHTML = '<i class="fas fa-play"></i> اختبار صوت الأذان';
        return;
    }

    const selectedUrl = document.getElementById('adhan-voice-select').value;
    let playUrl = selectedUrl;
    if (playUrl === 'custom') {
        playUrl = localStorage.getItem('custom_adhan_data');
    }

    // إضافة طابع زمني لمنع التخزين المؤقت (Caching) وضمان تشغيل الملف الجديد
    if (!playUrl.startsWith('data:')) {
        playUrl += (playUrl.includes('?') ? '&' : '?') + 't=' + new Date().getTime();
    }

    if (btn) btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحميل...';

    // Reset settings
    adhanAudio.muted = false;
    adhanAudio.volume = 1.0;

    // تعيين المصدر وتشغيله مباشرة
    adhanAudio.src = playUrl;
    adhanAudio.load(); // إجبار المتصفح على إعادة تحميل الملف

    const p = adhanAudio.play();
    if (p !== undefined) {
        p.then(() => {
            if (btn) btn.innerHTML = `<i class="fas fa-stop"></i> إيقاف الاختبار`;
        }).catch(e => {
            console.error("Play failed:", e);
            if (btn) btn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> فشل التشغيل';
            alert("تعذر تشغيل هذا الصوت. قد يكون الرابط محجوباً أو الملف غير مدعوم.");
        });
    }

    adhanAudio.onended = () => {
        if (btn) btn.innerHTML = '<i class="fas fa-play"></i> اختبار صوت الأذان';
    };
}

// --- NAMES ---
function renderNames() {
    const g = document.getElementById('names-grid');
    if (!g) return;
    g.innerHTML = '';
    allahNames.forEach((name, index) => {
        g.innerHTML += `
            <div class="name-card" onclick="showNameMeaning('${name}', ${index + 1})">
                <div class="name-number">${index + 1}</div>
                <div class="name-title">${name}</div>
            </div>`;
    });
}

// Search names function
function searchNames() {
    const searchInput = document.getElementById('names-search');
    const clearBtn = document.getElementById('clear-names-search');
    const searchTerm = searchInput.value.trim();

    if (searchTerm) {
        clearBtn.classList.add('visible');
    } else {
        clearBtn.classList.remove('visible');
    }

    const g = document.getElementById('names-grid');
    g.innerHTML = '';

    allahNames.forEach((name, index) => {
        if (name.includes(searchTerm)) {
            g.innerHTML += `
                <div class="name-card" onclick="showNameMeaning('${name}', ${index + 1})">
                    <div class="name-number">${index + 1}</div>
                    <div class="name-title">${name}</div>
                </div>`;
        }
    });

    if (g.innerHTML === '') {
        g.innerHTML = '<p style="text-align:center; color:var(--text-sec); grid-column:1/-1;">لا توجد نتائج</p>';
    }
}

// Clear names search
function clearNamesSearch() {
    document.getElementById('names-search').value = '';
    document.getElementById('clear-names-search').classList.remove('visible');
    renderNames();
}

// Show name meaning
function showNameMeaning(name, number) {
    const meanings = {
        "الله": "الإله الحق الذي لا إله إلا هو",
        "الرحمن": "ذو الرحمة الواسعة الذي وسعت رحمته كل شيء",
        "الرحيم": "الذي يوصل الرحمة إلى خلقه",
        "الملك": "المتصرف في خلقه بأمره ونهيه",
        "القدوس": "المتنزه عن كل عيب ونقص",
        "السلام": "المصدر للأمان والطمأنينة",
        "المؤمن": "المصدق بوعده ووعيده",
        "المهيمن": "الرقيب والشاهد على الخلق",
        "العزيز": "الذي لا يغلبه شيء",
        "الجبار": "القاهر الذي لا يُقهر",
        "المتكبر": "ذو العظمة والكبرياء",
        "الخالق": "المبدع للمخلوقات",
        "البارئ": "المصور للمخلوقات",
        "المصور": "الذي يعطي كل شيء صورته",
        "الغفار": "المكثر من المغفرة",
        "القهار": "الغالب على كل شيء",
        "الوهاب": "الكثير العطاء والهبة",
        "الرزاق": "معطي الأرزاق",
        "الفتاح": "فتح أبواب الخيرات",
        "العليم": "ذو العلم المحيط بكل شيء",
        "القابض": "يقبض الأرواح في وقت الموت",
        "الباسط": "يبسط الرزق والحياة",
        "الخافض": "يخفض مستوى الأشرار",
        "الرافع": "يرفع درجات المؤمنين",
        "المعز": "يعطي العزة لمن يشاء",
        "المذل": "يذل من يشاء",
        "السميع": "يسمع كل شيء",
        "البصير": "يرى كل شيء",
        "الحكم": "صاحب الحكمة والحكم",
        "العدل": "منصف في حكمه",
        "اللطيف": "الرفيق بخلقه",
        "الخبير": "العليم بدقائق الأمور",
        "الحليم": "صاحب الاناة والحلم",
        "العظيم": "ذو العظمة التي لا نهاية لها",
        "الغفور": "المغفر لعباده",
        "الشكور": "يقدر القليل من العمل ويعط عليه أجراً جزيلاً",
        "العلي": "المرتفع عن كل عيب",
        "الكبير": "العظيم في ذاته وصفاته",
        "الحفيظ": "حافظ لأمور عباده",
        "المقيت": "المعطي للقوت",
        "الحسيب": "الكافي من يحاسب خلقه",
        "الجليل": "ذو الجلال والعظمة",
        "الكريم": "ذو الكرم الذي يعطي قبل السؤال",
        "الرقيب": "الراقب لكل شيء",
        "المجيب": "يجيب دعاء من دعاه",
        "الواسع": "وسع علمه كل شيء",
        "الحكيم": "صاحب الحكمة التامة",
        "الودود": "الذي يحب عباده ويحبونه",
        "المجيد": "ذو المجد والفضل",
        "الباعث": "يبعث الأرواح إلى الأبدان",
        "الشهيد": "الشاهد على خلقه",
        "الحق": "صادق في كلامه ووعده",
        "الوكيل": "الحفيظ لأمور عباده",
        "القوي": "ذو القوة التي لا تُغلب",
        "المتين": "ذو المتانة والاقتدار",
        "الولي": "الناصر والمعين",
        "الحميد": "ذو الحمد والثناء",
        "المحصي": "يحصي كل شيء",
        "المبدئ": "أوجد المخلوقات من العدم",
        "المعيد": "يعيد الخلق بعد موتهم",
        "المحيي": "يحيي الأموات",
        "المميت": "يميت الأحياء",
        "الحي": "الذي لا يموت",
        "القيوم": "القائم على كل شيء",
        "الواجد": "لا يعجزه شيء",
        "الماجد": "ذو المجد والكبرياء",
        "الواحد": "لا ثاني له",
        "الصمد": "المصمود إليه في الحوائج",
        "القادر": "ذي القدرة التامة",
        "المقتدر": "ذي القدرة التامة أيضاً",
        "المقدم": "يقدم من يشاء",
        "المؤخر": "يؤخر من يشاء",
        "الأول": "ليس قبله شيء",
        "الآخر": "ليس بعده شيء",
        "الظاهر": "ظاهر للعقول",
        "الباطن": "باطن عن الحواس",
        "الوالي": "المتولي للأمور",
        "المتعالي": "المرتفع عن كل عيب",
        "البر": "ذي البر والعدل",
        "التواب": "التواب من الذنوب",
        "المنتقم": "ينتقم من الظالمين",
        "العفو": "العافي عن ذنوب عباده",
        "الرؤوف": "ذو الرأفة والرحمة",
        "مالك الملك": "ملك الملوك ومالك كل شيء",
        "ذو الجلال والإكرام": "ذو العظمة والجود",
        "المقسط": "المنصف في حكمه",
        "الجامع": "يجمع الخلق يوم القيامة",
        "الغني": "الغني عن كل شيء",
        "المغني": "يعطي من يحتاج",
        "المانع": "يمنع من يشاء",
        "الضار": "يضر من يشاء",
        "النافع": "ينفع من يشاء",
        "النور": "نور السماوات والأرض",
        "الهادي": "هداية الخلق إلى الحق",
        "البديع": "المبدع الذي لا يُقتد",
        "الباقي": "لا يزول ولا يفنى",
        "الوارث": "يرث كل شيء بعد فناء خلقه",
        "الرشيد": "ذي الرشدة والحكمة",
        "الصبور": "ذو الصبر والأناة"
    };

    const meaning = meanings[name] || "ذكر جميل من أسماء الله الحسنى";

    // Create a modal-like alert with better styling
    const modal = document.createElement('div');
    modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.8); z-index: 10000; display: flex;
            justify-content: center; align-items: center; padding: 20px;
            `;

    modal.innerHTML = `
                <div style="
            background:var(--bg-card);
            border: 2px solid var(--primary);
            border-radius: 20px;
            padding: 30px;
            max-width: 400px;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            ">
                <div style="color: var(--primary); font-size: 1.3rem; margin-bottom: 15px; font-weight: bold;" >
                    الاسم ${number}
            </div>
            <div style="font-size: 1.5rem; margin-bottom: 20px; color: var(--text-main); font-weight: bold;">
                ${name}
            </div>
            <div style="color: var(--text-sec); line-height: 1.6; margin-bottom: 25px;">
                ${meaning}
            </div>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: var(--primary);
                color: white;
                border: none;
                padding: 10px 25px;
                border-radius: 25px;
                cursor: pointer;
            ">
                إغلاق
            </button>
        </div>
                `;

    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };

    document.body.appendChild(modal);
}

// Helper for Arabic Normalization (تحسين دقة البحث)
function normalizeText(text) {
    if (!text) return "";
    return text
        .replace(/(آ|إ|أ)/g, 'ا')
        .replace(/(ة)/g, 'ه')
        .replace(/(ى)/g, 'ي')
        .replace(/(ؤ)/g, 'ء')
        .replace(/(ئ)/g, 'ء')
        .replace(/[\u064B-\u065F]/g, ''); // إزالة التشكيل
}

let searchTimeout;

// Enhanced search in Quran - Search for Surah Names (محسن)
function searchQuran() {
    const searchInput = document.getElementById('quran-search');
    const clearBtn = document.getElementById('clear-quran-search');
    const rawTerm = searchInput.value.trim();
    const contentDiv = document.getElementById('quran-content');

    if (rawTerm) {
        if (clearBtn) clearBtn.style.display = 'block';
    } else {
        if (clearBtn) clearBtn.style.display = 'none';
        // Reload current surah if search is cleared
        const currentSurah = document.getElementById('surah-select-read').value;
        if (currentSurah) loadSurahText(currentSurah);
        return;
    }

    // Debounce (تحسين الأداء)
    if (searchTimeout) clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
        const searchTerm = normalizeText(rawTerm);

        // Filter Surah Names
        const matches = [];
        surahNames.forEach((name, index) => {
            if (normalizeText(name).includes(searchTerm)) {
                matches.push({ id: index + 1, name: name });
            }
        });

        if (matches.length === 0) {
            contentDiv.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--text-sec);" >
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; color: var(--primary);"></i>
                    <h3>لم يتم العثور على نتائج</h3>
                    <p>لا توجد سورة باسم "${rawTerm}"</p>
                    <div style="margin-top:20px; border-top:1px solid rgba(255,255,255,0.1); padding-top:15px;">
                        <button onclick="searchQuranText('${rawTerm}')" class="secondary" style="width:auto;">
                            <i class="fas fa-search"></i> بحث شامل عن "${rawTerm}"
                        </button>
                    </div>
                </div>
                `;
            return;
        }

        // Display Results
        let html = `
                <div style="margin-bottom: 15px; text-align: center; color: var(--primary);" > نتائج البحث(${matches.length})</div>
            <div class="grid-2">
        `;

        matches.forEach(m => {
            html += `
                <div class="card text-center" onclick="selectSurahFromSearch(${m.id})" style="cursor: pointer; border: 1px solid var(--primary); transition: 0.3s;">
                    <div style="font-size: 1.2rem; font-weight: bold; color: var(--text-main);">
                        <span style="color: var(--accent); font-size: 0.9rem;">${m.id}.</span> سورة ${m.name}
                    </div>
                </div>
            `;
        });

        // Add Deep Search Option
        html += `</div>
        <div style="margin-top:20px; text-align:center; border-top:1px solid rgba(255,255,255,0.1); padding-top:15px;">
            <p style="color:var(--text-sec); font-size:0.9rem; margin-bottom:10px;">هل تبحث عن نص آية محددة؟</p>
            <button onclick="searchQuranText('${rawTerm}')" class="secondary" style="width:auto;">
                <i class="fas fa-search"></i> بحث عن "${rawTerm}" في كل الآيات
            </button>
        </div>`;

        contentDiv.innerHTML = html;
    }, 300); // 300ms delay
}

function searchQuranTextOffline(query) {
    const matches = [];
    const normalizedQuery = normalizeText(query);
    
    for (let num in QURAN_DATA) {
        const surah = QURAN_DATA[num];
        surah.ayahs.forEach((ayahText, idx) => {
            if (normalizeText(ayahText).includes(normalizedQuery)) {
                matches.push({
                    text: ayahText,
                    numberInSurah: idx + 1,
                    surah: {
                        number: parseInt(num),
                        name: surah.name
                    }
                });
            }
        });
    }
    
    return {
        data: {
            count: matches.length,
            matches: matches
        }
    };
}

// Deep Text Search
async function searchQuranText(query) {
    const contentDiv = document.getElementById('quran-content');
    contentDiv.innerHTML = `<div class="flex-center" style="height:150px; flex-direction:column;" ><div class="spinner"></div><p style="margin-top:15px; color:var(--text-sec)">جاري البحث في المصحف كاملاً...</p></div> `;

    // Check Cache (تحسين السرعة)
    const cacheKey = `search_quran_${query}`;
    const cachedData = sessionStorage.getItem(cacheKey);

    if (cachedData) {
        renderSearchResults(JSON.parse(cachedData), query);
        return;
    }

    try {
        let data;
        if (typeof QURAN_DATA !== 'undefined') {
            data = searchQuranTextOffline(query);
        } else {
            const res = await fetch(`https://api.alquran.cloud/v1/search/${query}/all/ar`);
            data = await res.json();
            if (data.code !== 200) throw new Error('API Error');
        }

        try {
            sessionStorage.setItem(cacheKey, JSON.stringify(data));
        } catch (e) { console.log('SessionStorage full'); }
        renderSearchResults(data, query);

    } catch (e) {
        contentDiv.innerHTML = `<div style="text-align:center; color:red; padding:20px;">
            <i class="fas fa-wifi-slash" style="font-size:2rem; margin-bottom:10px;"></i>
            <p>حدث خطأ في الاتصال بالخادم</p>
            <p style="font-size:0.8rem; color:var(--text-sec);">يرجى تشغيل ملف download_quran.py لتمكين البحث دون إنترنت.</p>
            <button class="secondary" onclick="searchQuranText('${query}')" style="width:auto; margin-top:10px;">إعادة المحاولة</button>
        </div>`;
    }
}

function renderSearchResults(data, query) {
    const contentDiv = document.getElementById('quran-content');

    if (data.data.count === 0) {
        contentDiv.innerHTML = `
            <div style="text-align:center; padding:30px;">
                <i class="fas fa-search-minus" style="font-size:2rem; color:var(--text-sec); margin-bottom:10px;"></i>
                <p>لم يتم العثور على أي آية تحتوي على "${query}"</p>
                <button class="secondary" onclick="searchQuran()" style="width:auto; margin-top:10px;">عودة</button>
            </div>`;
        return;
    }

    let html = `
        <div class="flex-between" style="margin-bottom:15px;">
            <div style="color:var(--primary);">نتائج البحث النصي (${data.data.count})</div>
            <button class="secondary" onclick="searchQuran()" style="width:auto; font-size:0.8rem;">عودة</button>
        </div>
        <div style="display:flex; flex-direction:column; gap:10px;">
    `;

    data.data.matches.forEach(m => {
        let cleanText = m.text.replace(/<\/?[^>]+(>|$)/g, "")
            .replace(/[a-zA-Z]/g, "") // Remove English letters (codes)
            .replace(/[0-9]/g, match => match) // Keep numbers (verses)
            .replace(/[\{\}\[\]\"\'\\]/g, "");

        // Highlight
        const regex = new RegExp(query, 'gi');
        const highlightedText = cleanText.replace(regex, match => `<span style="color:var(--primary); text-decoration:underline; font-weight:bold;">${match}</span>`);

        html += `
        <div class="card" onclick="loadSurahText(${m.surah.number}, ${m.numberInSurah})" style="cursor:pointer; border:1px solid rgba(255,255,255,0.05);">
            <div style="font-size:0.85rem; color:var(--accent); margin-bottom:8px; display:flex; justify-content:space-between;">
                <span>سورة ${m.surah.name}</span>
                <span>آية ${m.numberInSurah}</span>
            </div>
            <div class="quran-text" style="font-size:1.1rem; line-height:1.8;">${highlightedText}</div>
        </div>`;
    });

    html += `</div>`;
    contentDiv.innerHTML = html;
}

function selectSurahFromSearch(id) {
    document.getElementById('surah-select-read').value = id;
    document.getElementById('quran-search').value = '';
    const clrBtn = document.getElementById('clear-quran-search'); if (clrBtn) clrBtn.style.display = 'none';
    loadSurahText(id);
}

function showAyahOptions(surahNum, ayahNum, ayahTextRaw) {
    const modal = document.createElement('div');
    modal.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:20000; display:flex; justify-content:center; align-items:center; backdrop-filter:blur(5px); animation:fadeIn 0.3s; padding: 20px; box-sizing: border-box;";
    const ayahText = decodeURIComponent(ayahTextRaw);
    const sName = surahNames[surahNum - 1] || '';

    modal.innerHTML = `
        <div style="background:var(--bg-card); border:2px solid var(--primary); border-radius:20px; width:100%; max-width:400px; text-align:center; overflow:hidden; box-shadow:0 0 20px rgba(0,0,0,0.5);">
            <div style="padding:20px; border-bottom:1px solid rgba(255,255,255,0.1);">
                <h3 style="color:var(--primary); font-family:'Cairo'; margin:0 0 10px 0;">﴿ سورة ${sName} - آية ${ayahNum} ﴾</h3>
                <p style="font-family:'Amiri', serif; font-size:1.3rem; color:var(--text-main); line-height:1.8; margin:0;">${ayahText}</p>
            </div>
            <div style="display:flex; flex-direction:column;">
                <button onclick="saveBookmark(${surahNum}, ${ayahNum}); this.closest('div').parentElement.parentElement.remove(); showToast('تم حفظ العلامة بنجاح');" 
                    style="padding:15px; background:transparent; border:none; border-bottom:1px solid rgba(255,255,255,0.1); color:var(--text-main); font-size:1.1rem; cursor:pointer; font-family:'Cairo'; display:flex; align-items:center; justify-content:center; gap:10px;">
                    <i class="fas fa-bookmark" style="color:var(--primary); font-size:1.2rem;"></i> <span>حفظ كعلامة توقف</span>
                </button>
                <button onclick="showAyahTafseer(${surahNum}, ${ayahNum}); this.closest('div').parentElement.parentElement.remove();" 
                    style="padding:15px; background:transparent; border:none; border-bottom:1px solid rgba(255,255,255,0.1); color:var(--text-main); font-size:1.1rem; cursor:pointer; font-family:'Cairo'; display:flex; align-items:center; justify-content:center; gap:10px;">
                    <i class="fas fa-book-open" style="color:var(--primary); font-size:1.2rem;"></i> <span>عرض تفسير الآية</span>
                </button>
                <button onclick="shareSpecificAyah(${surahNum}, ${ayahNum}, encodeURIComponent('${encodeURIComponent(ayahText)}')); this.closest('div').parentElement.parentElement.remove();" 
                    style="padding:15px; background:transparent; border:none; border-bottom:1px solid rgba(255,255,255,0.1); color:var(--text-main); font-size:1.1rem; cursor:pointer; font-family:'Cairo'; display:flex; align-items:center; justify-content:center; gap:10px;">
                    <i class="fas fa-share-alt" style="color:var(--primary); font-size:1.2rem;"></i> <span>مشاركة الآية</span>
                </button>
                <button onclick="this.closest('div').parentElement.parentElement.remove();" 
                    style="padding:15px; background:rgba(255,0,0,0.1); border:none; color:#ff4d4d; font-size:1.1rem; cursor:pointer; font-weight:bold; font-family:'Cairo';">
                    إلغاء
                </button>
            </div>
        </div>
    `;
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); }
    document.body.appendChild(modal);
}

async function showAyahTafseer(surahNum, ayahNum) {
    let loaderId = 'tafseer-loader-' + Date.now();
    try {
        const loader = document.createElement('div');
        loader.id = loaderId;
        loader.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:22000; display:flex; justify-content:center; align-items:center;";
        loader.innerHTML = '<div class="spinner"></div>';
        document.body.appendChild(loader);

        const res = await fetch(`https://api.alquran.cloud/v1/ayah/${surahNum}:${ayahNum}/ar.muyassar`);
        const data = await res.json();

        const loaderEl = document.getElementById(loaderId);
        if (loaderEl) loaderEl.remove();

        if (data && data.data && data.data.text) {
            const tText = data.data.text;
            const sName = surahNames[surahNum - 1];
            const modal = document.createElement('div');
            modal.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); z-index:21000; display:flex; justify-content:center; align-items:center; padding:20px; box-sizing: border-box; backdrop-filter:blur(5px); animation:fadeIn 0.3s;";
            modal.innerHTML = `
                <div style="background:var(--bg-card); border:2px solid var(--primary); border-radius:20px; width:100%; max-width:500px; max-height:80vh; display:flex; flex-direction:column; overflow:hidden; box-shadow:0 0 20px rgba(0,0,0,0.5);">
                    <div style="padding:20px; border-bottom:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                        <h3 style="color:var(--primary); margin:0; font-family:'Cairo';">التفسير المُيسّر</h3>
                        <button onclick="this.closest('div').parentElement.parentElement.remove()" style="background:none; border:none; color:var(--text-sec); font-size:1.2rem; cursor:pointer;"><i class="fas fa-times"></i></button>
                    </div>
                    <div style="padding:20px; overflow-y:auto; font-family:'Amiri', serif; font-size:1.3rem; color:var(--text-main); line-height:1.8; text-align:justify;">
                        <h4 style="color:var(--accent); margin-top:0;">﴿ سورة ${sName} - آية ${ayahNum} ﴾</h4>
                        ${tText}
                    </div>
                </div>
            `;
            modal.onclick = (e) => { if (e.target === modal) modal.remove(); }
            document.body.appendChild(modal);
        } else {
            showToast('تعذر تحميل التفسير');
        }
    } catch (err) {
        const loaderEl = document.getElementById(loaderId);
        if (loaderEl) loaderEl.remove();
        showToast('خطأ في الاتصال بالانترنت');
    }
}

function shareSpecificAyah(surahNum, ayahNum, textRaw) {
    let text;
    try { text = decodeURIComponent(decodeURIComponent(textRaw)); }
    catch (e) { text = decodeURIComponent(textRaw); }
    const sName = surahNames[surahNum - 1] || '';
    const shareText = `﴿ ${text} ﴾\n[سورة ${sName} : ${ayahNum}]\n\nتمت المشاركة من تطبيقنا`;
    if (navigator.share) {
        navigator.share({ title: 'مشاركة آية', text: shareText });
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            showToast('تم نسخ الآية للحافظة');
        });
    }
}

function shareSurah() {
    const currentSurah = document.getElementById('surah-select-read').value;
    const surahName = surahNames[currentSurah - 1] || '';
    const shareText = `اقرأ سورة ${surahName} عبر تطبيق النور.\n\nتطبيق النور يعينك على ختم القرآن والمواظبة على الأذكار.`;
    if (navigator.share) {
        navigator.share({ title: 'مشاركة السورة', text: shareText });
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            showToast('تم نسخ الرسالة للحافظة');
        }).catch(() => {
            alert(shareText);
        });
    }
}

function shareZikr(text, ref) {
    const shareText = ref ? `${text}\n[${ref}]\n\nتمت المشاركة من تطبيق النور` : `${text}\n\nتمت المشاركة من تطبيق النور`;
    if (navigator.share) {
        navigator.share({ title: 'مشاركة ذكر/دعاء', text: shareText }).catch(console.error);
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            showToast('تم نسخ الذكر للحافظة');
        });
    }
}

// Clear Quran search
function clearQuranSearch() {
    document.getElementById('quran-search').value = '';
    const clearBtn = document.getElementById('clear-quran-search');
    if (clearBtn) clearBtn.style.display = 'none';
    const results = document.getElementById('quran-search-results');
    if (results) { results.style.display = 'none'; results.innerHTML = ''; }
    const currentSurah = document.getElementById('surah-select-read').value;
    if (currentSurah) loadSurahText(currentSurah);
}

// --- SETTINGS ---
const themesList = [
    { id: "default", name: "الذهبي (الافتراضي)", primary: "#EAB308", bg: "#0F172A" },
    { id: "oled_gold", name: "الذهبي الأسود", primary: "#FFD700", bg: "#000000" },
    { id: "royal_blue", name: "الأزرق الملكي", primary: "#EAB308", bg: "#0F172A" },
    { id: "modern_white", name: "الأبيض الحديث", primary: "#0F172A", bg: "#F8FAFC" },
    { id: "light", name: "الأبيض (نهاري)", primary: "#059669", bg: "#F3F4F6" },
    { id: "luxury", name: "الفخامة", primary: "#D4AF37", bg: "#000000" },
    { id: "midnight", name: "منتصف الليل", primary: "#818CF8", bg: "#0F172A" },
    { id: "night", name: "الليلي العميق", primary: "#60A5FA", bg: "#0B0F19" },
    { id: "emerald", name: "الزمردي (أخضر)", primary: "#34D399", bg: "#022C22" },
    { id: "ruby", name: "الياقوت (أحمر)", primary: "#FB7185", bg: "#4C0519" },
    { id: "sapphire", name: "الياقوت الأزرق", primary: "#60A5FA", bg: "#172554" },
    { id: "nature", name: "الطبيعة", primary: "#84CC16", bg: "#14532D" },
    { id: "forest", name: "الغابة", primary: "#4ADE80", bg: "#022C22" },
    { id: "ocean", name: "المحيط", primary: "#38BDF8", bg: "#0C4A6E" },
    { id: "teal", name: "الفيروزي", primary: "#2DD4BF", bg: "#042F2E" },
    { id: "royal", name: "الملكي (بنفسجي)", primary: "#C084FC", bg: "#2E1065" },
    { id: "purple", name: "البنفسجي", primary: "#E879F9", bg: "#4A044E" },
    { id: "rose", name: "الوردي", primary: "#FB7185", bg: "#4C0519" },
    { id: "sunset", name: "الغروب", primary: "#FB923C", bg: "#431407" },
    { id: "coffee", name: "القهوة", primary: "#D4A373", bg: "#2C241B" }
];

function renderThemeSelector() {
    const grid = document.getElementById('theme-grid-visual');
    if (!grid) return;

    const currentTheme = localStorage.getItem('theme') || 'royal_blue';

    grid.innerHTML = '';
    themesList.forEach(t => {
        const isActive = t.id === currentTheme;
        const activeClass = isActive ? 'active-theme-card' : '';
        const activeStyle = isActive ? 'border-color: var(--primary) !important; box-shadow: 0 0 10px rgba(212,175,55,0.2);' : 'border-color: rgba(255,255,255,0.08);';
        
        grid.innerHTML += `
            <div class="theme-card-visual ${activeClass}" data-id="${t.id}" onclick="changeTheme('${t.id}')" style="
                background: var(--bg-card);
                border: 2px solid;
                ${activeStyle}
                border-radius: 12px;
                padding: 10px 8px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
                text-align: center;
            ">
                <div style="display: flex; gap: 6px; justify-content: center;">
                    <div style="width: 18px; height: 18px; border-radius: 50%; background: ${t.primary}; border: 1px solid rgba(255,255,255,0.15);"></div>
                    <div style="width: 18px; height: 18px; border-radius: 50%; background: ${t.bg}; border: 1px solid rgba(255,255,255,0.15);"></div>
                </div>
                <span style="font-size: 0.8rem; font-weight: bold; color: var(--text-main); font-family: 'Cairo'; line-height: 1.2;">${t.name}</span>
            </div>
        `;
    });
}

function changeTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);

    // Sync HTML Select value just in case
    const select = document.getElementById('theme-select');
    if (select) select.value = t;

    // Highlight active card
    document.querySelectorAll('.theme-card-visual').forEach(card => {
        if (card.getAttribute('data-id') === t) {
            card.classList.add('active-theme-card');
            card.style.borderColor = 'var(--primary)';
            card.style.boxShadow = '0 0 12px rgba(212,175,55,0.25)';
        } else {
            card.classList.remove('active-theme-card');
            card.style.borderColor = 'rgba(255,255,255,0.08)';
            card.style.boxShadow = 'none';
        }
    });

    // Update chart color dynamically
    if (App.chart) {
        App.chart.data.datasets[0].backgroundColor = getComputedStyle(document.body).getPropertyValue('--primary');
        App.chart.update();
    }
}

function toggleQuickTheme() {
    const current = localStorage.getItem('theme') || 'royal_blue';
    const nextTheme = (current === 'royal_blue') ? 'oled_gold' : 'royal_blue';
    changeTheme(nextTheme);
    showToast('تم تغيير المظهر بنجاح! 🎨', 2000);
}

function changeFontSize(delta) {
    const qc = document.getElementById('quran-content');
    if (!qc) return;
    let currentSize = parseFloat(qc.style.fontSize) || 1.7;
    let newSize = Math.min(Math.max(currentSize + (delta * 0.05), 1.2), 3.0);
    newSize = Math.round(newSize * 100) / 100;
    qc.style.fontSize = newSize + 'rem';
    localStorage.setItem('quran_font_size', newSize);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'night';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function switchSettingsTab(id) {
    document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.settings-content').forEach(c => c.classList.remove('active'));

    document.getElementById(`tab-btn-${id}`).classList.add('active');
    document.getElementById(`tab-content-${id}`).classList.add('active');
}

// --- BOOKMARK HISTORY ---
function renderBookmarkHistory() {
    const list = document.getElementById('bookmark-history-list');
    if (!list) return;

    const history = JSON.parse(localStorage.getItem('bookmark_history')) || [];

    if (history.length === 0) {
        list.innerHTML = '<p style="text-align:center; color:var(--text-sec); font-size:0.9rem;">لا يوجد سجل محفوظ</p>';
        return;
    }

    list.innerHTML = history.map((item, index) => `
        <div style="
            display:flex; justify-content:space-between; align-items:center; 
            padding:10px; background:rgba(0,0,0,0.2); border-radius:8px; 
            margin-bottom:5px; border:1px solid rgba(255,255,255,0.05);">
            
            <div onclick="loadBookmarkFromHistory(${item.id}, ${item.ayah || 1})" style="flex:1; cursor:pointer;">
                <div style="font-weight:bold; color:var(--primary);">سورة ${item.name} <span style="font-size:0.8em; color:var(--text-main)">- آية ${item.ayah || 1}</span></div>
                <div style="font-size:0.75rem; color:var(--text-sec);">${item.date}</div>
            </div>

            <button onclick="deleteBookmarkItem(${index})" style="background:transparent; border:none; color:#ff4d4d; padding:10px; cursor:pointer;">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    `).join('');
}

function deleteBookmarkItem(index) {
    if (!confirm('هل تريد حذف هذه العلامة؟')) return;
    const history = JSON.parse(localStorage.getItem('bookmark_history')) || [];
    history.splice(index, 1);
    localStorage.setItem('bookmark_history', JSON.stringify(history));
    renderBookmarkHistory();
}

function loadBookmarkFromHistory(id, ayah = 1) {
    navTo('read');
    document.getElementById('surah-select-read').value = id;
    loadSurahText(id, ayah);
}

function clearBookmarkHistory() {
    if (confirm('هل أنت متأكد من مسح سجل العلامات؟')) {
        localStorage.removeItem('bookmark_history');
        renderBookmarkHistory();
    }
}

// --- BACKUP & RESTORE ---
function backupData() {
    const data = {};
    const keys = ['bookmark', 'bookmark_history', 'dhikr_v2', 'custom_dhikr', 'azkar_progress', 'user_location', 'theme', 'font_size', 'sound_enabled', 'pre_notify', 'wakelock_enabled', 'adhan_voice', 'hijri_adj', 'custom_azkar'];

    keys.forEach(k => {
        const v = localStorage.getItem(k);
        if (v) data[k] = v;
    });

    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `NoorApp_Backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function restoreData(input) {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (confirm('سيتم استبدال البيانات الحالية بالبيانات المستعادة. هل أنت متأكد؟')) {
                Object.keys(data).forEach(k => localStorage.setItem(k, data[k]));
                alert('تم استعادة البيانات بنجاح! سيتم إعادة تشغيل التطبيق.');
                location.reload();
            }
        } catch (err) {
            alert('ملف غير صالح أو تالف');
            console.error(err);
        }
    };
    reader.readAsText(file);
    input.value = ''; // Reset input
}

// --- ABOUT APP ---
function showAboutApp() {
    const features = [
        { icon: 'fa-book-open',       color: '#d4af37,#b8860b', title: 'المصحف الشريف',         desc: 'تلاوة كاملة مع التفسير الميسر والبحث السريع وحفظ العلامات المرجعية' },
        { icon: 'fa-headphones',      color: '#6366F1,#4F46E5', title: 'مشغل القرآن',           desc: 'استمع بصوت كبار القراء مع التحكم الكامل في التشغيل والتكرار' },
        { icon: 'fa-hands-praying',   color: '#10B981,#059669', title: 'الأذكار والأدعية',       desc: 'أذكار الصباح والمساء والأدعية المأثورة مع عداد ذكي تفاعلي' },
        { icon: 'fa-dharmachakra',    color: '#F59E0B,#D97706', title: 'السبحة الإلكترونية',    desc: 'سبحة رقمية مع إحصائيات يومية وأسبوعية ورسوم بيانية للتقدم' },
        { icon: 'fa-clock',           color: '#0EA5E9,#0284C7', title: 'مواقيت الصلاة',          desc: 'حساب دقيق لأوقات الصلاة حسب موقعك مع أذان تلقائي' },
        { icon: 'fa-calendar-alt',    color: '#8B5CF6,#6D28D9', title: 'التقويم الهجري',          desc: 'عرض التاريخ الهجري الكامل والمناسبات الإسلامية القادمة' },
        { icon: 'fa-compass',         color: '#EC4899,#BE185D', title: 'بوصلة القبلة',           desc: 'تحديد اتجاه القبلة بدقة عالية باستخدام GPS وخرائط تفاعلية' },
        { icon: 'fa-book-reader',     color: '#EF4444,#B91C1C', title: 'قصص الأنبياء',           desc: 'مكتبة شاملة لقصص الأنبياء والصحابة الكرام بمعلومات موثقة' },
        { icon: 'fa-broadcast-tower', color: '#F97316,#EA580C', title: 'إذاعة القرآن',            desc: 'بث مباشر لإذاعات القرآن الكريم يعمل في الخلفية بسلاسة' },
        { icon: 'fa-moon',            color: '#1D4ED8,#1E40AF', title: 'الإمساكية الرمضانية',    desc: 'إمساكية احترافية مع مواقيت السحور والإفطار وعد تنازلي' },
        { icon: 'fa-trophy',          color: '#D97706,#B45309', title: 'نظام التميز',             desc: 'أوسمة وإنجازات تفاعلية تكافئك على القراءة والالتزام اليومي' },
        { icon: 'fa-palette',         color: '#7C3AED,#6D28D9', title: 'التخصيص الكامل',         desc: 'أكثر من 15 سمة لونية فاخرة مع تحكم كامل في الخط والمظهر' },
        { icon: 'fa-image',           color: '#059669,#047857', title: 'صانع البطاقات',           desc: 'صمّم بطاقات تهنئة رمضانية فاخرة باسمك وشاركها مع أحبابك' },
        { icon: 'fa-question-circle', color: '#DC2626,#B91C1C', title: 'المسابقات الإسلامية',    desc: 'اختبر معلوماتك الدينية مع نظام نقاط وإحصائيات شاملة' },
    ];

    let featuresHtml = features.map(f => `
        <div style="background:rgba(255,255,255,0.03); padding:14px; border-radius:14px; display:flex; gap:14px; align-items:center; border:1px solid rgba(255,255,255,0.06);">
            <div style="width:46px; height:46px; background:linear-gradient(135deg,${f.color}); border-radius:12px; display:flex; align-items:center; justify-content:center; flex-shrink:0; box-shadow:0 4px 12px rgba(0,0,0,0.3);">
                <i class="fas ${f.icon}" style="font-size:1.15rem; color:#fff;"></i>
            </div>
            <div>
                <div style="font-weight:bold; color:var(--text-main); margin-bottom:3px; font-size:0.95rem;">${f.title}</div>
                <div style="font-size:0.78rem; color:var(--text-sec); line-height:1.5;">${f.desc}</div>
            </div>
        </div>`).join('');

    const modal = document.createElement('div');
    modal.style.cssText = `position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.92); z-index:10000; display:flex; justify-content:center; align-items:flex-end; backdrop-filter:blur(12px); animation:fadeIn 0.3s;`;

    modal.innerHTML = `
        <div style="background:var(--bg-card); border:1px solid rgba(212,175,55,0.2); border-radius:24px 24px 0 0; width:100%; max-width:520px; max-height:92vh; display:flex; flex-direction:column; box-shadow:0 -20px 60px rgba(0,0,0,0.6); overflow:hidden; animation: slideUp 0.35s cubic-bezier(0.175,0.885,0.32,1.1);">

            <style>@keyframes slideUp { from { transform:translateY(100%); opacity:0; } to { transform:translateY(0); opacity:1; } }</style>

            <!-- Header -->
            <div style="background:linear-gradient(135deg,#d4af37,#b8860b); padding:22px 20px 18px; display:flex; align-items:center; gap:14px; flex-shrink:0;">
                <div style="width:52px; height:52px; background:rgba(0,0,0,0.2); border-radius:14px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                    <i class="fas fa-quran" style="font-size:1.6rem; color:#fff;"></i>
                </div>
                <div style="flex:1; text-align:right;">
                    <div style="font-family:'Cairo'; font-weight:bold; font-size:1.3rem; color:#000;">تطبيق النور</div>
                    <div style="font-size:0.8rem; color:rgba(0,0,0,0.7);">جميع المميزات — الإصدار 2.5.0</div>
                </div>
                <button onclick="this.closest('[style*=fixed]').remove()" style="width:36px; height:36px; background:rgba(0,0,0,0.2); border:none; border-radius:50%; color:#fff; font-size:1rem; cursor:pointer; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <!-- Stats Strip -->
            <div style="display:grid; grid-template-columns:repeat(3,1fr); background:rgba(0,0,0,0.3); border-bottom:1px solid rgba(255,255,255,0.05); flex-shrink:0;">
                <div style="text-align:center; padding:12px;"><div style="font-size:1.3rem; font-weight:bold; color:#d4af37;">114</div><div style="font-size:0.7rem; color:var(--text-sec);">سورة</div></div>
                <div style="text-align:center; padding:12px; border-left:1px solid rgba(255,255,255,0.05); border-right:1px solid rgba(255,255,255,0.05);"><div style="font-size:1.3rem; font-weight:bold; color:#10B981;">6236</div><div style="font-size:0.7rem; color:var(--text-sec);">آية كريمة</div></div>
                <div style="text-align:center; padding:12px;"><div style="font-size:1.3rem; font-weight:bold; color:#818cf8;">14+</div><div style="font-size:0.7rem; color:var(--text-sec);">خدمة إسلامية</div></div>
            </div>

            <!-- Features List -->
            <div style="overflow-y:auto; padding:16px; display:grid; gap:10px; flex:1;">
                ${featuresHtml}
                <div style="text-align:center; margin-top:10px; padding-bottom:10px;">
                    <p style="font-size:0.75rem; color:var(--text-sec); opacity:0.6;">صُنع بـ ❤️ لوجه الله — AMR Ehab © ${new Date().getFullYear()}</p>
                </div>
            </div>
        </div>`;

    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    document.body.appendChild(modal);
}

// --- DAILY VERSE ---
function initDailyVerse() {
    const verses = [
        { t: "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا", r: "الشرح: 5" },
        { t: "لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا", r: "البقرة: 286" },
        { t: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ", r: "البقرة: 186" },
        { t: "وَبَشِّرِ ٱلصَّٰبِرِينَ", r: "البقرة: 155" },
        { t: "إِنَّ ٱللَّهَ مَعَ ٱلصَّٰبِرِينَ", r: "البقرة: 153" },
        { t: "رَبِّ ٱشْرَحْ لِى صَدْرِى وَيَسِّرْ لِىٓ أَمْرِى", r: "طه: 25-26" }
    ];
    const today = new Date().getDate();
    const v = verses[today % verses.length];
    
    const textEl = document.getElementById('daily-verse-text-home');
    const refEl = document.getElementById('daily-verse-ref-home');
    const cardEl = document.getElementById('daily-content-home');
    
    if (textEl) textEl.innerText = v.t;
    if (refEl) refEl.innerText = v.r;
    if (cardEl) cardEl.style.display = 'block';
}

// --- HADITH (40 NAWAWI) ---
const hadiths = [
    { t: "إنما الأعمال بالنيات", txt: "عن أمير المؤمنين أبي حفص عمر بن الخطاب رضي الله عنه قال: سمعت رسول الله صلى الله عليه وسلم يقول: «إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى، فمن كانت هجرته إلى الله ورسوله فهجرته إلى الله ورسوله، ومن كانت هجرته لدنيا يصيبها أو امرأة ينكحها فهجرته إلى ما هاجر إليه»." },
    { t: "مراتب الدين", txt: "عن عمر رضي الله عنه أيضاً قال: بينما نحن جلوس عند رسول الله صلى الله عليه وسلم ذات يوم، إذ طلع علينا رجل شديد بياض الثياب، شديد سواد الشعر، لا يرى عليه أثر السفر، ولا يعرفه منا أحد، حتى جلس إلى النبي صلى الله عليه وسلم... (الحديث بطوله)." },
    { t: "أركان الإسلام", txt: "عن أبي عبد الرحمن عبد الله بن عمر بن الخطاب رضي الله عنهما قال: سمعت رسول الله صلى الله عليه وسلم يقول: «بني الإسلام على خمس: شهادة أن لا إله إلا الله وأن محمداً رسول الله، وإقام الصلاة، وإيتاء الزكاة، وحج البيت، وصوم رمضان»." },
    { t: "مراحل خلق الإنسان", txt: "عن أبي عبد الرحمن عبد الله بن مسعود رضي الله عنه قال: حدثنا رسول الله صلى الله عليه وسلم وهو الصادق المصدوق: «إن أحدكم يجمع خلقه في بطن أمه أربعين يوماً نطفة، ثم يكون علقة مثل ذلك، ثم يكون مضغة مثل ذلك، ثم يرسل إليه الملك فينفخ فيه الروح، ويؤمر بأربع كلمات: بكتب رزقه، وأجله، وعمله، وشقي أو سعيد...»." },
    { t: "النهي عن الابتداع", txt: "عن أم المؤمنين أم عبد الله عائشة رضي الله عنها قالت: قال رسول الله صلى الله عليه وسلم: «من أحدث في أمرنا هذا ما ليس منه فهو رد»." },
    { t: "الحلال بين والحرام بين", txt: "عن أبي عبد الله النعمان بن بشير رضي الله عنهما قال: سمعت رسول الله صلى الله عليه وسلم يقول: «إن الحلال بين، وإن الحرام بين، وبينهما أمور مشتبهات لا يعلمهن كثير من الناس، فمن اتقى الشبهات فقد استبرأ لدينه وعرضه، ومن وقع في الشبهات وقع في الحرام...»." },
    { t: "الدين النصيحة", txt: "عن أبي رقية تميم بن أوس الداري رضي الله عنه أن النبي صلى الله عليه وسلم قال: «الدين النصيحة». قلنا: لمن؟ قال: «له، ولكتابه، ولرسوله، ولأئمة المسلمين وعامتهم»." },
    { t: "حرمة دم المسلم", txt: "عن ابن عمر رضي الله عنهما أن رسول الله صلى الله عليه وسلم قال: «أمرت أن أقاتل الناس حتى يشهدوا أن لا إله إلا الله وأن محمداً رسول الله، ويقيموا الصلاة، ويؤتوا الزكاة، فإذا فعلوا ذلك عصموا مني دماءهم وأموالهم إلا بحق الإسلام، وحسابهم على الله تعالى»." },
    { t: "النهي عن كثرة السؤال", txt: "عن أبي هريرة رضي الله عنه قال: سمعت رسول الله صلى الله عليه وسلم يقول: «ما نهيتكم عنه فاجتنبوه، وما أمرتكم به فأتوا منه ما استطعتم، فإنما أهلك الذين من قبلكم كثرة مسائلهم واختلافهم على أنبيائهم»." },
    { t: "من حُسن إسلام المرء", txt: "عن أبي هريرة رضي الله عنه قال: قال رسول الله صلى الله عليه وسلم: «من حسن إسلام المرء تركه ما لا يعنيه»." },
    { t: "كمال الإيمان", txt: "عن أبي حمزة أنس بن مالك رضي الله عنه خادم رسول الله صلى الله عليه وسلم عن النبي صلى الله عليه وسلم قال: «لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه»." },
    { t: "عظمة الإسلام والرحمة", txt: "عن معاذ بن جبل رضي الله عنه قال: قلت: يا رسول الله، أخبرني بعمل يدخلني الجنة ويباعدني من النار؟ قال: «لقد سألت عن عظيم، وإنه ليسير على من يسره الله عليه...»" }
];

function initHadith() {
    const container = document.getElementById('hadith-list');
    if (!container) return;
    container.innerHTML = '';
    hadiths.forEach((h, i) => {
        container.innerHTML += `
                <div class="card" onclick="showHadith(${i})" style="cursor:pointer; text-align:center; transition:0.3s;">
                    <div style="font-weight:bold; color:var(--primary); margin-bottom:5px;">الحديث ${i + 1}</div>
                    <div style="font-size:0.9rem; color:var(--text-main);">${h.t}</div>
                </div>`;
    });
}

function showHadith(index) {
    const h = hadiths[index];
    const modal = document.createElement('div');
    modal.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 10000; display: flex; justify-content: center; align-items: center; padding: 20px; backdrop-filter: blur(5px); animation: fadeIn 0.3s;`;

    modal.innerHTML = `
                <div style="background: var(--bg-card); border: 1px solid var(--primary); border-radius: 20px; padding: 25px; width: 100%; max-width: 500px; max-height: 80vh; display: flex; flex-direction: column; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
                    <div style="text-align:center; margin-bottom:15px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">
                        <h3 style="color:var(--primary); font-family:'Cairo'; margin:0;">${h.t}</h3>
                    </div>
                    <div style="overflow-y:auto; padding-right:5px; margin-bottom:20px; flex:1; line-height:1.8; text-align:justify; font-size:1.1rem;">
                        ${h.txt}
                    </div>
                    <button onclick="this.parentElement.parentElement.remove()" style="margin-top:auto;">إغلاق</button>
                </div>`;

    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    document.body.appendChild(modal);
}

// Function to show stories by category
function showStoriesCategory(category) {
    const data = islamicStoriesDB[category];
    if (!data) return;

    const categoriesDiv = document.getElementById('stories-categories');
    const listDiv = document.getElementById('stories-list');

    categoriesDiv.classList.add('hidden');
    listDiv.classList.remove('hidden');

    let html = `
                <div class="flex-between" style="margin-bottom:15px; background:var(--bg-card); padding:12px; border-radius:12px; border:1px solid rgba(255,255,255,0.05);">
                    <button class="secondary" style="width:auto; padding:8px 15px; margin:0;" onclick="document.getElementById('stories-list').classList.add('hidden'); document.getElementById('stories-categories').classList.remove('hidden');"><i class="fas fa-arrow-right"></i></button>
                    <h3 style="color:var(--primary); margin:0; font-size:1.1rem;"><i class="fas ${data.icon}" style="color:${data.color}; margin-left:8px;"></i> ${data.title}</h3>
                    <div style="width:40px;"></div>
                </div>
                <div style="display:flex; flex-direction:column; gap:12px;">
            `;

    data.stories.forEach((story, index) => {
        html += `
                    <div class="card" onclick="openStoryReader('${category}', ${index})" style="cursor:pointer; transition:0.3s; border-left:4px solid ${data.color};">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <i class="fas fa-book-reader" style="font-size:1.5rem; color:${data.color};"></i>
                            <div>
                                <div style="font-weight:bold; color:var(--text-main); font-size:1.05rem;">${story.title}</div>
                                <div style="font-size:0.8rem; color:var(--text-sec); margin-top:3px;">اضغط للقراءة</div>
                            </div>
                        </div>
                    </div>
                `;
    });

    html += `</div>`;
    listDiv.innerHTML = html;
}

function openStoryReader(category, index) {
    const story = islamicStoriesDB[category].stories[index];
    showStoryModal(story.title, story.content);
}

// Function to show story in modal with TTS
function showStoryModal(title, content) {
    if (window.speechSynthesis) window.speechSynthesis.cancel();

    const modal = document.createElement('div');
    modal.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.92); z-index: 10000; display: flex; justify-content: center; align-items: center; padding: 20px; backdrop-filter: blur(8px); animation: fadeIn 0.3s;`;

    modal.innerHTML = `
                <div style="background: linear-gradient(135deg, var(--bg-card) 0%, rgba(0,0,0,0.8) 100%); border: 2px solid var(--primary); border-radius: 20px; padding: 25px; width: 100%; max-width: 650px; max-height: 85vh; display: flex; flex-direction: column; box-shadow: 0 20px 60px rgba(0,0,0,0.7);">
                    <div style="text-align:center; margin-bottom:20px; border-bottom:2px solid rgba(212, 175, 55, 0.3); padding-bottom:15px; display:flex; flex-direction:column; align-items:center;">
                        <h2 style="color:var(--primary); font-family:'Cairo'; margin:0 0 12px 0; font-size:1.4rem; text-shadow: 0 2px 10px rgba(212, 175, 55, 0.3);">${title}</h2>
                        <button class="story-listen-btn" onclick="toggleStorySpeech(this)" style="background:rgba(212, 175, 55, 0.1); border:1px solid rgba(212, 175, 55, 0.3); color:var(--primary); padding:8px 20px; border-radius:30px; cursor:pointer; font-size:0.95rem; display:flex; align-items:center; gap:8px; transition:0.3s; width:auto; border:1px solid var(--primary);">
                            <i class="fas fa-volume-up"></i> <span>استمع للقصة</span>
                        </button>
                    </div>
                    <div id="story-content-text" style="overflow-y:auto; padding-right:10px; flex:1; line-height:2; font-size:1.1rem; color:var(--text-main); text-align:justify;">
                        ${content}
                    </div>
                    <button class="close-modal-btn" style="margin-top:20px; background:var(--primary); color:#000; border:none; padding:10px 20px; border-radius:10px; font-weight:bold; cursor:pointer; align-self:center; box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4); transition:0.3s;">إغلاق القصة</button>
                </div>`;

    const close = () => {
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        modal.remove();
    };

    modal.querySelector('.close-modal-btn').onclick = close;
    modal.onclick = (e) => { if (e.target === modal) close(); };

    document.body.appendChild(modal);
}

function toggleStorySpeech(btn) {
    if (!('speechSynthesis' in window)) {
        alert("للأسف، متصفحك لا يدعم خاصية القراءة الصوتية.");
        return;
    }

    const icon = btn.querySelector('i');
    const textSpan = btn.querySelector('span');
    const contentDiv = document.getElementById('story-content-text');

    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        icon.className = 'fas fa-volume-up';
        textSpan.innerText = 'استمع';
        btn.style.background = 'rgba(255,255,255,0.1)';
        btn.style.color = 'var(--primary)';
    } else {
        const text = contentDiv.innerText;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar-SA';
        utterance.rate = 0.9;

        utterance.onend = () => {
            icon.className = 'fas fa-volume-up';
            textSpan.innerText = 'استمع';
            btn.style.background = 'rgba(255,255,255,0.1)';
            btn.style.color = 'var(--primary)';
        };

        utterance.onerror = (e) => {
            console.error("Speech error", e);
            if (e.error !== 'canceled' && e.error !== 'interrupted') {
                icon.className = 'fas fa-volume-up';
                textSpan.innerText = 'استمع';
                btn.style.background = 'rgba(255,255,255,0.1)';
                btn.style.color = 'var(--primary)';
            }
        };

        icon.className = 'fas fa-stop';
        textSpan.innerText = 'إيقاف';
        btn.style.background = 'rgba(255,0,0,0.2)';
        btn.style.color = '#ff6b6b';

        window.speechSynthesis.speak(utterance);
    }
}

// --- JUZ (PARTS) ---
const juzStart = [
    { s: 1, a: 1 }, { s: 2, a: 142 }, { s: 2, a: 253 }, { s: 3, a: 93 }, { s: 4, a: 24 }, { s: 4, a: 148 },
    { s: 5, a: 82 }, { s: 6, a: 111 }, { s: 7, a: 88 }, { s: 8, a: 41 }, { s: 9, a: 93 }, { s: 11, a: 6 },
    { s: 12, a: 53 }, { s: 15, a: 1 }, { s: 17, a: 1 }, { s: 18, a: 75 }, { s: 21, a: 1 }, { s: 23, a: 1 },
    { s: 25, a: 21 }, { s: 27, a: 56 }, { s: 29, a: 46 }, { s: 33, a: 31 }, { s: 36, a: 28 }, { s: 39, a: 32 },
    { s: 41, a: 47 }, { s: 46, a: 1 }, { s: 51, a: 31 }, { s: 58, a: 1 }, { s: 67, a: 1 }, { s: 78, a: 1 }
];

function initJuz() {
    const container = document.getElementById('juz-list');
    if (!container) return;
    container.innerHTML = '';
    juzStart.forEach((j, i) => {
        container.innerHTML += `
                <div class="card text-center" onclick="openJuz(${i})" style="cursor:pointer; transition:0.3s;">
                    <div style="font-weight:bold; color:var(--primary); font-size:1.1rem;">الجزء ${i + 1}</div>
                    <div style="font-size:0.8rem; color:var(--text-sec); margin-top:5px;">بداية: سورة ${surahNames[j.s - 1]}</div>
                </div>`;
    });
}

function openJuz(index) {
    navTo('read');
    loadJuzText(index + 1);
}

function getJuzAyahsOffline(juzNum) {
    const juzMapping = [
        { startS: 1, startA: 1, endS: 2, endA: 141 }, // Juz 1
        { startS: 2, startA: 142, endS: 2, endA: 252 }, // Juz 2
        { startS: 2, startA: 253, endS: 3, endA: 92 }, // Juz 3
        { startS: 3, startA: 93, endS: 4, endA: 23 }, // Juz 4
        { startS: 4, startA: 24, endS: 4, endA: 147 }, // Juz 5
        { startS: 4, startA: 148, endS: 5, endA: 81 }, // Juz 6
        { startS: 5, startA: 82, endS: 6, endA: 110 }, // Juz 7
        { startS: 6, startA: 111, endS: 7, endA: 87 }, // Juz 8
        { startS: 7, startA: 88, endS: 8, endA: 40 }, // Juz 9
        { startS: 8, startA: 41, endS: 9, endA: 92 }, // Juz 10
        { startS: 9, startA: 93, endS: 10, endA: 109 }, // Juz 11
        { startS: 11, startA: 1, endS: 12, endA: 52 }, // Juz 12
        { startS: 12, startA: 53, endS: 14, endA: 52 }, // Juz 13
        { startS: 15, startA: 1, endS: 16, endA: 128 }, // Juz 14
        { startS: 17, startA: 1, endS: 18, endA: 74 }, // Juz 15
        { startS: 18, startA: 75, endS: 20, endA: 135 }, // Juz 16
        { startS: 21, startA: 1, endS: 22, endA: 78 }, // Juz 17
        { startS: 23, startA: 1, endS: 25, endA: 20 }, // Juz 18
        { startS: 25, startA: 21, endS: 27, endA: 55 }, // Juz 19
        { startS: 27, startA: 56, endS: 29, endA: 45 }, // Juz 20
        { startS: 29, startA: 46, endS: 33, endA: 30 }, // Juz 21
        { startS: 33, startA: 31, endS: 36, endA: 27 }, // Juz 22
        { startS: 36, startA: 28, endS: 39, endA: 31 }, // Juz 23
        { startS: 39, startA: 32, endS: 41, endA: 46 }, // Juz 24
        { startS: 41, startA: 47, endS: 45, endA: 37 }, // Juz 25
        { startS: 46, startA: 1, endS: 51, endA: 30 }, // Juz 26
        { startS: 51, startA: 31, endS: 57, endA: 29 }, // Juz 27
        { startS: 58, startA: 1, endS: 66, endA: 12 }, // Juz 28
        { startS: 67, startA: 1, endS: 77, endA: 50 }, // Juz 29
        { startS: 78, startA: 1, endS: 114, endA: 6 }  // Juz 30
    ];

    const map = juzMapping[juzNum - 1];
    const ayahs = [];

    for (let s = map.startS; s <= map.endS; s++) {
        const surah = QURAN_DATA[s];
        if (!surah) continue;
        
        const startIdx = (s === map.startS) ? map.startA - 1 : 0;
        const endIdx = (s === map.endS) ? map.endA - 1 : surah.ayahs.length - 1;

        for (let a = startIdx; a <= endIdx; a++) {
            ayahs.push({
                text: surah.ayahs[a],
                numberInSurah: a + 1,
                surah: {
                    number: s,
                    name: surah.name
                }
            });
        }
    }
    return ayahs;
}

async function loadJuzText(juzNum) {
    document.getElementById('surah-select-read').style.display = 'none';
    const juzTitle = document.getElementById('juz-title-read');
    juzTitle.style.display = 'block';
    juzTitle.innerText = `الجزء ${juzNum}`;

    const box = document.getElementById('quran-content');
    box.innerHTML = `<div class="flex-center" style="height:200px"><div class="spinner"></div></div>`;

    try {
        let ayahs;
        if (typeof QURAN_DATA !== 'undefined') {
            ayahs = getJuzAyahsOffline(juzNum);
        } else {
            const cacheKey = `juz_text_${juzNum}`;
            const cached = localStorage.getItem(cacheKey);
            if (cached) {
                ayahs = JSON.parse(cached);
            } else {
                const res = await fetch(`https://api.alquran.cloud/v1/juz/${juzNum}/quran-uthmani`);
                const data = await res.json();
                ayahs = data.data.ayahs;
                try { localStorage.setItem(cacheKey, JSON.stringify(ayahs)); } catch (e) { }
            }
        }

        const surahInfoBar = document.getElementById('surah-info-bar');
        const surahInfoText = document.getElementById('surah-info-text');
        if (surahInfoBar && surahInfoText) {
            surahInfoBar.style.display = 'block';
            surahInfoText.textContent = `الجزء ${juzNum} | ${ayahs.length} آية`;
        }

        renderJuz(ayahs, juzNum);

    } catch (e) {
        console.error(e);
        box.innerHTML = `<div class="text-center" style="padding:20px; color:var(--text-sec)">حدث خطأ أثناء تحميل الجزء. تحقق من اتصالك بالإنترنت.</div>`;
    }
}

function renderJuz(ayahs, juzNum) {
    const box = document.getElementById('quran-content');
    const savedSize = localStorage.getItem('quran_font_size');
    if (savedSize) box.style.fontSize = savedSize + 'rem';

    let html = '<div style="text-align:justify; padding:0 5px; line-height:2.4;">';
    let currentSurah = -1;

    ayahs.forEach(a => {
        if (a.surah.number !== currentSurah) {
            currentSurah = a.surah.number;
            html += `</div>
                        <div class="basmala-header" style="
                            text-align: center; 
                            margin: 30px auto 20px auto; 
                            padding: 10px; 
                            width: 100%; 
                            background: radial-gradient(circle, rgba(255, 215, 0, 0.05) 0%, transparent 70%);
                            border-bottom: 2px solid rgba(255, 215, 0, 0.2);
                            border-top: 2px solid rgba(255, 215, 0, 0.2);
                        ">
                            <h3 style="color:var(--primary); font-family:'Amiri'; margin:0; padding-bottom:10px;">سورة ${a.surah.name.replace('سُورَةُ ', '').replace('سورة ', '')}</h3>
                            ${(currentSurah !== 1 && currentSurah !== 9) ? `<div style="font-family:'Amiri'; color:var(--primary); font-size:1.5rem;">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>` : ''}
                        </div>
                    <div style="text-align:justify; padding:0 5px; line-height:2.4;">`;
        }

        let t = a.text;
        if (currentSurah !== 1 && currentSurah !== 9 && a.numberInSurah === 1) {
            t = t.replace(/^[\u0600-\u06FF\s]*بِسْمِ[\u0600-\u06FF\s]*ٱللَّهِ[\u0600-\u06FF\s]*ٱلرَّحْمَٰنِ[\u0600-\u06FF\s]*ٱلرَّحِيمِ[\u0600-\u06FF\s]*/, "")
                .replace(/^[\u0600-\u06FF\s]*بِسْمِ[\u0600-\u06FF\s]*اللَّهِ[\u0600-\u06FF\s]*الرَّحْمَنِ[\u0600-\u06FF\s]*الرَّحِيمِ[\u0600-\u06FF\s]*/, "")
                .replace("بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", "")
                .trim();
        }

        html += `
                    <span class="ayah-span" id="ayah-${a.numberInSurah}" data-ayah="${encodeURIComponent(t)}" ondblclick="showAyahOptions(${a.surah.number}, ${a.numberInSurah}, this.getAttribute('data-ayah'))" style="font-family:'Amiri', serif; font-size:1.6rem; margin-left:5px;">
                        ${t} 
                        <span class="verse-number" style="font-family:'Amiri', serif; color:var(--accent); font-size:1.2rem; margin:0 5px;">
                            ﴿${a.numberInSurah.toLocaleString('ar-EG')}﴾
                        </span> 
                    </span>
                `;
    });
    html += '</div>';
    box.innerHTML = html;
}

// --- IMSAKIYA ---
async function initImsakiya() {
    const tbody = document.getElementById('imsakiya-body');
    const mName = document.getElementById('imsakiya-month-name');
    if (!tbody) return;

    if (!App.imsakiyaHijriYear || isNaN(App.imsakiyaHijriYear)) {
        try {
            // Get current Hijri year using moment-hijri
            const now = moment().add(App.hijriAdj, 'days');
            const parsedYear = parseInt(now.format('iYYYY'));
            if (isNaN(parsedYear) || parsedYear < 1300 || parsedYear > 1600) {
                App.imsakiyaHijriYear = 1447; // Fallback for 2026
            } else {
                App.imsakiyaHijriYear = parsedYear;
            }
        } catch (e) {
            console.warn("Moment-hijri not ready or error parsing year, using fallback", e);
            App.imsakiyaHijriYear = 1447; // Fallback
        }
    }

    mName.innerText = `رمضان ${App.imsakiyaHijriYear} هـ | جاري التحميل...`;
    tbody.innerHTML = '<tr><td colspan="9" style="padding:20px;">جاري تحميل إمساكية شهر رمضان المبارك...<br><i class="fas fa-spinner fa-spin" style="margin-top:10px; color:var(--primary);"></i></td></tr>';

    const lat = App.location.lat || 30.0444;
    const lng = App.location.lng || 31.2357;
    const method = App.calcMethod || 5;

    const apiUrl = `https://api.aladhan.com/v1/hijriCalendar/${App.imsakiyaHijriYear}/9?latitude=${lat}&longitude=${lng}&method=${method}`;
    console.log("Fetching Imsakiya from URL:", apiUrl);

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.code !== 200) throw new Error(`API returned code ${data.code}: ${data.status}`);

        const days = data.data; // Array of 29 or 30 days
        if (!days || !Array.isArray(days)) throw new Error("Invalid data format received from API");
        let html = '';

        const format12 = (tStr) => {
            try {
                let cleanTStr = tStr.split(' ')[0].replace(/\(.*\)/, '');
                let parts = cleanTStr.split(':');
                let h = parseInt(parts[0]);
                let m = parseInt(parts[1]);
                let H = h;
                let ampm = H < 12 ? "ص" : "م";
                h = (H % 12) || 12;
                return `<span style="font-size:1.1rem; font-weight:bold;">${h}:${m.toString().padStart(2, '0')}</span><span style="font-size:0.75rem; color:var(--text-sec); margin-right:4px;">${ampm}</span>`;
            } catch (e) { return tStr; }
        };

        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth() + 1;
        const currentDateVal = today.getDate();

        // Find corresponding Gregorian range to display in the header
        let gregStart = '';
        let gregEnd = '';

        if (days && days.length > 0) {
            const firstDay = days[0].date.gregorian;
            const lastDay = days[days.length - 1].date.gregorian;
            // Aladhan API month object contains ar and en names
            const firstMonthName = firstDay.month.ar || firstDay.month.en;
            const lastMonthName = lastDay.month.ar || lastDay.month.en;
            gregStart = `${firstDay.day} ${firstMonthName}`;
            gregEnd = `${lastDay.day} ${lastMonthName} ${lastDay.year}`;
        }

        mName.innerText = `رمضان ${App.imsakiyaHijriYear} هـ | (${gregStart} - ${gregEnd})`;

        days.forEach((dayData, idx) => {
            const greg = dayData.date.gregorian;
            const hijri = dayData.date.hijri;
            
            const d = parseInt(greg.day);
            const m = greg.month.number;
            const y = parseInt(greg.year);

            const timings = dayData.timings;

            // Arabic day name
            const dayName = hijri.weekday.ar || greg.weekday.en;

            // Check if this day is today
            let isToday = (currentDateVal === d && currentMonth === m && currentYear === y);
            let rowStyle = isToday ? `style="background:rgba(212,175,55,0.15); border:2px solid var(--primary); box-shadow:0 0 10px rgba(212,175,55,0.2) inset;"` : `style="border-bottom:1px solid rgba(255,255,255,0.05);"`;
            let highlightText = isToday ? `color:var(--primary); font-weight:bold;` : `color:var(--text-sec);`;

            html += `
                    <tr ${rowStyle}>
                        <td style="font-weight:bold; color:var(--primary); font-family:'Amiri'; font-size:1.2rem; border-right: ${isToday ? '4px solid var(--primary)' : 'none'}">${idx + 1}</td>
                        <td style="font-size:0.9rem; ${highlightText}">${dayName} <br><span style="font-size:0.7rem; opacity:0.7;">${d}/${m}</span></td>
                        <td>${format12(timings.Imsak)}</td>
                        <td>${format12(timings.Fajr)}</td>
                        <td>${format12(timings.Sunrise)}</td>
                        <td>${format12(timings.Dhuhr)}</td>
                        <td>${format12(timings.Asr)}</td>
                        <td>${format12(timings.Maghrib)}</td>
                        <td>${format12(timings.Isha)}</td>
                    </tr>`;
        });

        tbody.innerHTML = html;

    } catch (e) {
        console.error("Imsakiya loading failed:", e);
        tbody.innerHTML = '<tr><td colspan="9" style="color:#ef4444; padding:20px;">حدث خطأ في تحميل المواقيت.<br>تأكد من الاتصال بالإنترنت.</td></tr>';
    }
}

function loadImsakiya() {
    initImsakiya();
}

function changeImsakiyaYear(dir) {
    if (!App.imsakiyaHijriYear || isNaN(App.imsakiyaHijriYear)) {
        try {
            const now = moment().add(App.hijriAdj, 'days');
            App.imsakiyaHijriYear = parseInt(now.format('iYYYY'));
        } catch (e) {
            App.imsakiyaHijriYear = 1447;
        }
    }
    if (isNaN(App.imsakiyaHijriYear)) {
        App.imsakiyaHijriYear = 1447;
    }
    App.imsakiyaHijriYear += dir;
    initImsakiya();
}

function showRuqyah() {
    const modal = document.createElement('div');
    modal.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 10000; display: flex; justify-content: center; align-items: center; padding: 20px; backdrop-filter: blur(5px); animation: fadeIn 0.3s;`;

    const ruqyahData = {
        verses: [
            { t: "الفاتحة", txt: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧﴾" },
            { t: "آية الكرسي", txt: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ" },
            { t: "المعوذات (الإخلاص، الفلق، الناس)", txt: "قُلْ هُوَ اللَّهُ أَحَدٌ ... قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ... قُلْ أَعُوذُ بِرَبِّ النَّاسِ ..." }
        ]
    };

    let versesHtml = '';
    ruqyahData.verses.forEach(v => {
        versesHtml += `
                    <div style="margin-bottom:20px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:15px;">
                        <h4 style="color:var(--primary); margin-bottom:10px;">${v.t}</h4>
                        <p class="quran-text" style="font-size:1.4rem;">${v.txt}</p>
                    </div>
                `;
    });

    modal.innerHTML = `
                <div style="background: var(--bg-card); border: 1px solid var(--primary); border-radius: 20px; padding: 20px; width: 100%; max-width: 600px; max-height: 90vh; display: flex; flex-direction: column; position:relative;">
                    <div style="text-align:center; margin-bottom:15px;">
                        <h2 style="color:var(--primary); font-family:'Cairo';">الرقية الشرعية</h2>
                        <p style="font-size:0.9rem; color:var(--text-sec);">حصن نفسك وأهلك (آيات مختارة)</p>
                    </div>
                    
                    <div style="overflow-y:auto; flex:1; padding-right:5px;">
                        ${versesHtml}
                    </div>

                    <div style="margin-top:15px; border-top:1px solid rgba(255,255,255,0.1); padding-top:15px;">
                        <button onclick="navTo('listen'); document.getElementById('surah-select-audio').value=1; updatePlayerSource();" style="margin-bottom:10px;"><i class="fas fa-play"></i> الانتقال للاستماع وتشغيل الفاتحة</button>
                        <button class="secondary" onclick="this.parentElement.parentElement.parentElement.remove()">إغلاق</button>
                    </div>
                </div>`;

    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    document.body.appendChild(modal);
}

// --- AUDIO LOOP FEATURE ---
let isAyahLooping = false;

function toggleAyahLoop() {
    isAyahLooping = !isAyahLooping;
    const btn = document.getElementById('btn-loop-ayah');
    const icon = document.getElementById('loop-icon');
    const status = document.getElementById('loop-status');
    const audio = document.getElementById('main-audio');

    if (isAyahLooping) {
        audio.loop = true;
        if (btn) {
            btn.style.borderColor = "var(--primary)";
            btn.style.background = "rgba(var(--primary), 0.2)";
        }
        if (icon) icon.style.color = "var(--primary)";
        if (status) {
            status.innerText = "مفعل (تكرار الملف الحالي)";
            status.style.color = "var(--primary)";
        }
    } else {
        audio.loop = false;
        if (btn) {
            btn.style.borderColor = "transparent";
            btn.style.background = "rgba(255, 255, 255, 0.1)";
        }
        if (icon) icon.style.color = "var(--text-sec)";
        if (status) {
            status.innerText = "معطل";
            status.style.color = "var(--text-sec)";
        }
    }
}

function downloadImsakiyaImage() {
    const element = document.querySelector('#p-imsakiya .card');
    if (!element) return;
    const btn = element.querySelector('button[onclick="downloadImsakiyaImage()"]');
    const navBtns = element.querySelectorAll('.secondary');

    if (btn) btn.style.display = 'none';
    navBtns.forEach(b => b.style.visibility = 'hidden');

    const scrollContainer = element.querySelector('div[style*="overflow-x:auto"]');
    const originalOverflow = scrollContainer ? scrollContainer.style.overflow : '';
    const originalMaxHeight = scrollContainer ? scrollContainer.style.maxHeight : '';

    if (scrollContainer) {
        scrollContainer.style.overflow = 'visible';
        scrollContainer.style.maxHeight = 'none';
    }

    html2canvas(element, {
        scale: 2,
        backgroundColor: getComputedStyle(document.body).getPropertyValue('--bg-card'),
        useCORS: true
    }).then(canvas => {
        if (btn) btn.style.display = 'flex';
        navBtns.forEach(b => b.style.visibility = 'visible');
        if (scrollContainer) {
            scrollContainer.style.overflow = originalOverflow;
            scrollContainer.style.maxHeight = originalMaxHeight;
        }

        const dateText = document.getElementById('imsakiya-month-name').innerText.split('|')[1] || 'imsakiya';

        const link = document.createElement('a');
        link.download = `Imsakiya_${dateText.trim().replace(/\s/g, '_')}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }).catch(err => {
        alert("حدث خطأ أثناء حفظ الصورة");
        console.error(err);
        if (btn) btn.style.display = 'flex';
        navBtns.forEach(b => b.style.visibility = 'visible');
        if (scrollContainer) {
            scrollContainer.style.overflow = originalOverflow;
            scrollContainer.style.maxHeight = originalMaxHeight;
        }
    });
}

// --- RAMADAN DUAS ---
const ramadanDuasDB = [
    { d: 1, t: "دعاء اليوم 1", c: "اللهم اجعل صيامي فيه صيام الصائمين وقيامي فيه قيام القائمين، ونبهني فيه عن نومة الغافلين، وهب لي جرمي فيه يا إله العالمين، واعف عني يا عافياً عن المجرمين." },
    { d: 2, t: "دعاء اليوم 2", c: "اللهم قربني فيه إلى مرضاتك، وجنبني فيه من سخطك ونقماتك، ووفقني فيه لقراءة آياتك، برحمتك يا أرحم الراحمين." },
    { d: 3, t: "دعاء اليوم 3", c: "اللهم ارزقني فيه الذهن والتنبيه، وباعدني فيه من السفاهة والتمويه، واجعل لي نصيباً من كل خير تنزل فيه، بجودك يا أجود الأجودين." },
    { d: 4, t: "دعاء اليوم 4", c: "اللهم قوني فيه على إقامة أمرك، وأذقني فيه حلاوة ذكرك، وأوزعني فيه لأداء شكرك بكرمك، واحفظني فيه بحفظك وسترك يا أبصر الناظرين." },
    { d: 5, t: "دعاء اليوم 5", c: "اللهم اجعلني فيه من المستغفرين، واجعلني فيه من عبادك الصالحين القانتين، واجعلني فيه من أوليائك المقربين، برأفتك يا أرحم الراحمين." },
    { d: 6, t: "دعاء اليوم 6", c: "اللهم لا تخذلني فيه لتعرض معصيتك، ولا تضربني بسياط نقمتك، وزحزحني فيه من موجبات سخطك بمنك وأياديك يا منتهى رغبة الراغبين." },
    { d: 7, t: "دعاء اليوم 7", c: "اللهم أعني فيه على صيامه وقيامه، وجنبني فيه من هفواته وآثامه، وارزقني فيه ذكرك بدوامه، بتوفيقك يا هادي المضلين." },
    { d: 8, t: "دعاء اليوم 8", c: "اللهم ارزقني فيه رحمة الأيتام، وإطعام الطعام، وإفشاء السلام، وصحبة الكرام، بطولك يا ملجأ الآملين." },
    { d: 9, t: "دعاء اليوم 9", c: "اللهم اجعل لي فيه نصيباً من رحمتك الواسعة، واهدني فيه لبراهينك الساطعة، وخذ بناصيتي إلى مرضاتك الجامعة بمحبتك يا أمل المشتاقين." },
    { d: 10, t: "دعاء اليوم 10", c: "اللهم اجعلني فيه من المتوكلين عليك، واجعلني فيه من الفائزين لديك، واجعلني فيه من المقربين إليك بإحسانك يا غاية الطالبين." },
    { d: 11, t: "دعاء اليوم 11", c: "اللهم حبب إلي فيه الإحسان، وكره إلي فيه الفسوق والعصيان، وحرم علي فيه السخط والنيران بعونك يا غياث المستغيثين." },
    { d: 12, t: "دعاء اليوم 12", c: "اللهم زيني فيه بالستر والعفاف، واسترني فيه بلباس القنوع والكفاف، واحملني فيه على العدل والإنصاف، وآمني فيه من كل ما أخاف بعصمتك يا عصمة الخائفين." },
    { d: 13, t: "دعاء اليوم 13", c: "اللهم طهرني فيه من الدنس والأقذار، وصبرني فيه على كائنات الأقدار، ووفقني فيه للتقى وصحبة الأبرار بعونك يا قرة عين المساكين." },
    { d: 14, t: "دعاء اليوم 14", c: "اللهم لا تؤاخذني فيه بالعثرات، وأقلني فيه من الخطايا والهفوات، ولا تجعلني فيه غرضاً للبلايا والآفات بعزتك يا عز المسلمين." },
    { d: 15, t: "دعاء اليوم 15", c: "اللهم ارزقني فيه طاعة الخاشعين، واشرح فيه صدري بإنابة المخبتين، بأمانك يا أمان الخائفين." },
    { d: 16, t: "دعاء اليوم 16", c: "اللهم وفقني فيه لموافقة الأبرار، وجنبني فيه مرافقة الأشرار، وآوني فيه برحمتك إلى دار القرار بإلهيتك يا إله العالمين." },
    { d: 17, t: "دعاء اليوم 17", c: "اللهم اهدني فيه لصالح الأعمال، واقض لي فيه الحوائج والآمال، يا من لا يحتاج إلى التفسير والسؤال، يا عالماً بما في صدور العالمين." },
    { d: 18, t: "دعاء اليوم 18", c: "اللهم نبهني فيه لبركات أسحاره، ونور قلبي بضياء أنواره، وخذ بكل أعضائي إلى اتباع آثاره بنورك يا منور قلوب العارفين." },
    { d: 19, t: "دعاء اليوم 19", c: "اللهم وفر فيه حظي من بركاته، وسهل سبيلي إلى خيراته، ولا تحرمني قبول حسناته يا هادياً إلى الحق المبين." },
    { d: 20, t: "دعاء اليوم 20", c: "اللهم افتح لي فيه أبواب الجنان، وأغلق عني فيه أبواب النيران، ووفقني فيه لتلاوة القرآن يا منزل السكينة في قلوب المؤمنين." },
    { d: 21, t: "دعاء اليوم 21", c: "اللهم اجعل لي فيه إلى مرضاتك دليلاً، ولا تجعل للشيطان فيه علي سبيلاً، واجعل الجنة لي منزلاً ومقيلاً يا قاضي حوائج الطالبين." },
    { d: 22, t: "دعاء اليوم 22", c: "اللهم افتح لي فيه أبواب فضلك، وأنزل علي فيه بركاتك، ووفقني فيه لموجبات مرضاتك، وأسكنّي فيه بحبوحات جناتك يا مجيب دعوة المضطرين." },
    { d: 23, t: "دعاء اليوم 23", c: "اللهم اغسلني فيه من الذنوب، وطهرني فيه من العيوب، وامتحن قلبي فيه بتقوى القلوب، يا مقيل عثرات المذنبين." },
    { d: 24, t: "دعاء اليوم 24", c: "اللهم إني أسألك فيه ما يرضيك، وأعوذ بك مما يؤذيك، وأسألك التوفيق فيه لأن أطيعك ولا أعصيك، يا جواد السائلين." },
    { d: 25, t: "دعاء اليوم 25", c: "اللهم اجعلني فيه محباً لأوليائك، ومعادياً لأعدائك، مستناً بسنة خاتم أنبيائك، يا عاصم قلوب النبيين." },
    { d: 26, t: "دعاء اليوم 26", c: "اللهم اجعل سعيي فيه مشكوراً، وذنبي فيه مغفوراً، وعملي فيه مقبولاً، وعيبي فيه مستوراً يا أسمع السامعين." },
    { d: 27, t: "دعاء اليوم 27", c: "اللهم ارزقني فيه فضل ليلة القدر، وصير أموري فيه من العسر إلى اليسر، واقبل معاذيري وحط عني الذنب والوزر، يا رؤوفاً بعباده الصالحين." },
    { d: 28, t: "دعاء اليوم 28", c: "اللهم وفر حظي فيه من النوافل, وأكرمني فيه بإحضار المسائل، وقرب فيه وسيلتي إليك من بين الوسائل، يا من لا يشغله إلحاح الملحين." },
    { d: 29, t: "دعاء اليوم 29", c: "اللهم غشني فيه بالرحمة، وارزقني فيه التوفيق والعصمة، وطهر قلبي من غياهب التهمة، يا رحيماً بعباده المؤمنين." },
    { d: 30, t: "دعاء اليوم 30", c: "اللهم اجعل صيامي فيه بالشكر والقبول على ما ترضاه ويرضاه الرسول محكمة فروعه بالأصول، بحق سيدنا محمد وآله الطاهرين، والحمد لله رب العالمين." },
    { d: 100, t: "دعاء الإفطار", c: "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ، وَثَبَتَ الأَجْرُ إِنْ شَاءَ اللهُ. اللَّهُمَّ إِنِّي أَسْأَلُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ أَنْ تَغْفِرَ لِي." },
    { d: 101, t: "دعاء السحور", c: "اللَّهُمَّ بَارِكْ لَنَا فِي سُحُورِنَا، وَاجْعَلْهُ عَوْناً لَنَا عَلَى صِيَامِنَا، وَاغْفِرْ لَنَا مَا قَدَّمْنَا وَمَا أَخَّرْنَا." },
    { d: 102, t: "دعاء ليلة القدر", c: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي. (يكرر كثيراً في العشر الأواخر)" },
    { d: 103, t: "دعاء القنوت", c: "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ، إِنَّكَ تَقْضِي وَلاَ يُقْضَى عَلَيْكَ." },
    { d: 104, t: "وداع رمضان", c: "اللَّهُمَّ لاَ تَجْعَلْهُ آخِرَ الْعَهْدِ مِنْ صِيَامِنَا إِيَّاهُ، فَإِنْ جَعَلْتَهُ فَاجْعَلْنِي مَرْحُوماً وَلاَ تَجْعَلْنِي مَحْرُوماً. تَقَبَّلَ اللهُ مِنَّا وَمِنْكُمْ صَالِحَ الأَعْمَالِ." }
];

function initRamadanDuas() {
    const container = document.getElementById('ramadan-duas-list');
    if (!container) return;
    container.innerHTML = '';
    ramadanDuasDB.forEach(dua => {
        container.innerHTML += `
                <div class="card text-center" onclick="showRamadanDua(${dua.d})" style="cursor:pointer; transition:0.3s;">
                    <div style="font-weight:bold; color:var(--primary); font-size:1.1rem;">${dua.t}</div>
                    <div style="font-size:0.8rem; color:var(--text-sec); margin-top:5px;">اضغط للقراءة</div>
                </div>`;
    });
}

function showRamadanDua(day) {
    const dua = ramadanDuasDB.find(d => d.d === day);
    if (!dua) return;

    const modal = document.createElement('div');
    modal.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 10000; display: flex; justify-content: center; align-items: center; padding: 20px; backdrop-filter: blur(5px); animation: fadeIn 0.3s;`;

    modal.innerHTML = `
                <div style="background: var(--bg-card); border: 1px solid var(--primary); border-radius: 20px; padding: 25px; width: 100%; max-width: 500px; max-height: 80vh; display: flex; flex-direction: column; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
                    <div style="text-align:center; margin-bottom:15px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">
                        <h3 style="color:var(--primary); font-family:'Cairo'; margin:0;">${dua.t}</h3>
                    </div>
                    <div style="overflow-y:auto; padding-right:5px; margin-bottom:20px; flex:1; line-height:2; text-align:center; font-size:1.2rem; font-family:'Amiri';">
                        ${dua.c}
                    </div>
                    <button onclick="this.parentElement.parentElement.remove()" style="margin-top:auto;">إغلاق</button>
                </div>`;

    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    document.body.appendChild(modal);
}

// --- WALLPAPERS ---
const wallpapersDB = [
    { t: "الكعبة المشرفة", u: "https://images.unsplash.com/photo-1565552629477-e254f3a367c9?q=80&w=600&auto=format&fit=crop" },
    { t: "المسجد النبوي", u: "https://images.unsplash.com/photo-1537702858992-8f3695d7b50f?q=80&w=600&auto=format&fit=crop" },
    { t: "القرآن الكريم", u: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=600&auto=format&fit=crop" },
    { t: "مساجد", u: "https://images.unsplash.com/photo-1557431177-36141475c676?q=80&w=600&auto=format&fit=crop" },
    { t: "فانوس رمضان", u: "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=600&auto=format&fit=crop" },
    { t: "طبيعة وتفكر", u: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=600&auto=format&fit=crop" },
    { t: "زخارف إسلامية", u: "https://images.unsplash.com/photo-1580418827493-f2b22c438568?q=80&w=600&auto=format&fit=crop" },
    { t: "دعاء", u: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=600&auto=format&fit=crop" }
];

function initWallpapers() {
    const grid = document.getElementById('wallpapers-grid');
    if (!grid) return;
    grid.innerHTML = '';
    wallpapersDB.forEach(wp => {
        const highRes = wp.u.replace('w=600', 'w=1080');
        grid.innerHTML += `
                    <div class="wallpaper-item" onclick="viewWallpaper('${highRes}', '${wp.t}')">
                        <img src="${wp.u}" class="wallpaper-img" loading="lazy">
                        <div class="wallpaper-overlay">
                            <span style="font-size:0.8rem; font-weight:bold;">${wp.t}</span>
                            <i class="fas fa-expand"></i>
                        </div>
                    </div>
                `;
    });
}

function viewWallpaper(url, title) {
    const modal = document.createElement('div');
    modal.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); z-index: 10000; display: flex; flex-direction: column; justify-content: center; align-items: center; animation: fadeIn 0.3s;`;

    modal.innerHTML = `
                <div style="position:absolute; top:20px; right:20px; z-index:2;">
                    <button onclick="this.parentElement.parentElement.remove()" style="background:rgba(0,0,0,0.5); width:40px; height:40px; border-radius:50%; color:#fff; border:1px solid #fff;"><i class="fas fa-times"></i></button>
                </div>
                <img src="${url}" style="max-width:100%; max-height:80vh; border-radius:10px; box-shadow:0 0 30px rgba(0,0,0,0.5);">
                <div style="margin-top:20px; display:flex; gap:15px;">
                    <a href="${url}" download="Islamic_Wallpaper_${Date.now()}.jpg" target="_blank">
                        <button style="background:var(--primary); color:#000; font-weight:bold; padding:10px 25px; border-radius:25px;"><i class="fas fa-download"></i> تحميل / فتح</button>
                    </a>
                </div>
            `;
    document.body.appendChild(modal);
}

// --- HIJRI CALENDAR ---
function convertGregToHijri(dateStr) {
    if (!dateStr) return;
    const date = new Date(dateStr);
    if (typeof moment !== 'undefined') {
        const m = moment(date);
        const h = m.format('iD iMMMM iYYYY');
        document.getElementById('conv-hijri-result').innerText = h;
    } else {
        document.getElementById('conv-hijri-result').innerText = "المكتبة غير محملة";
    }
}

function initHijriCalendar() {
    if (typeof moment === 'undefined' || typeof moment.fn.iMonth === 'undefined') return;

    const now = moment().add(App.hijriAdj, 'days');
    const hijriMonth = now.format('iMMMM iYYYY');
    document.getElementById('current-hijri-month').innerText = hijriMonth;

    const events = [
        { m: 1, d: 1, n: "رأس السنة الهجرية" },
        { m: 1, d: 10, n: "عاشوراء" },
        { m: 3, d: 12, n: "المولد النبوي الشريف" },
        { m: 7, d: 27, n: "الإسراء والمعراج" },
        { m: 9, d: 1, n: "بداية شهر رمضان" },
        { m: 10, d: 1, n: "عيد الفطر المبارك" },
        { m: 12, d: 9, n: "يوم عرفة" },
        { m: 12, d: 10, n: "عيد الأضحى المبارك" }
    ];

    const startOfMonth = moment().startOf('iMonth');
    const endOfMonth = moment().endOf('iMonth');
    const daysInMonth = (typeof endOfMonth.iDate === 'function') ? endOfMonth.iDate() : endOfMonth.date();
    const startDay = startOfMonth.day();

    let html = `<table style="width:100%; text-align:center; border-collapse:collapse;">
                <thead>
                    <tr style="color:var(--text-sec); font-size:0.8rem;">
                        <th>أحد</th><th>إثنين</th><th>ثلاثاء</th><th>أربعاء</th><th>خميس</th><th>جمعة</th><th>سبت</th>
                    </tr>
                </thead>
                <tbody><tr>`;

    for (let i = 0; i < startDay; i++) html += `<td></td>`;

    const today = now.iDate();

    for (let d = 1; d <= daysInMonth; d++) {
        if ((startDay + d - 1) % 7 === 0 && d > 1) html += `</tr><tr>`;

        const currentM = now.iMonth() + 1;
        const event = events.find(e => e.m === currentM && e.d === d);
        const hasEventClass = event ? 'has-event' : '';
        const eventAttr = event ? `onclick="alert('${event.n}')"` : '';

        const isToday = d === today ? 'background:var(--primary); color:#fff; box-shadow:0 0 10px var(--primary);' : '';

        html += `<td style="padding:10px 0;">
                    <div class="calendar-day ${hasEventClass}" style="${isToday}" ${eventAttr}>${d}</div>
                </td>`;
    }
    html += `</tr></tbody></table>`;

    document.getElementById('hijri-calendar-container').innerHTML = html;

    const converterHTML = `
                <div class="card" style="margin-top:20px; border:1px solid var(--primary);">
                    <h3 style="color:var(--primary); font-size:1rem; margin-bottom:15px; display:flex; align-items:center; gap:10px;">
                        <i class="fas fa-exchange-alt"></i> محول التاريخ
                    </h3>
                    <div class="flex-between" style="gap:10px; flex-wrap:wrap;">
                        <div style="flex:1; min-width:120px;">
                            <label style="font-size:0.8rem; color:var(--text-sec);">ميلادي</label>
                            <input type="date" id="conv-greg" onchange="convertGregToHijri(this.value)" 
                                style="width:100%; padding:10px; border-radius:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:var(--text-main);">
                        </div>
                        <div style="display:flex; align-items:flex-end; padding-bottom:10px;">
                            <i class="fas fa-arrow-left" style="color:var(--primary);"></i>
                        </div>
                        <div style="flex:1; min-width:120px;">
                            <label style="font-size:0.8rem; color:var(--text-sec);">هجري (تقريبي)</label>
                            <div id="conv-hijri-result" style="padding:10px; border-radius:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:var(--primary); min-height:42px; display:flex; align-items:center;">--</div>
                        </div>
                    </div>
                </div>
            `;
    document.getElementById('hijri-calendar-container').innerHTML += converterHTML;

    const currentM = now.iMonth() + 1;
    const upcoming = events.filter(e => e.m > currentM || (e.m === currentM && e.d >= today));
    upcoming.sort((a, b) => (a.m - currentM) * 30 + a.d - ((b.m - currentM) * 30 + b.d));

    let eventsHtml = '';
    upcoming.slice(0, 3).forEach(e => {
        eventsHtml += `<div style="background:rgba(255,255,255,0.05); padding:15px; border-radius:12px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center; border-right:4px solid var(--accent);">
                    <span style="font-weight:bold;">${e.n}</span>
                    <span style="color:var(--primary); background:rgba(0,0,0,0.3); padding:5px 10px; border-radius:8px; font-size:0.9rem;">${e.d} / ${e.m}</span>
                </div>`;
    });
    if (!eventsHtml) eventsHtml = '<p style="color:var(--text-sec); font-size:0.9rem;">لا توجد مناسبات قريبة</p>';
    document.getElementById('upcoming-events').innerHTML = eventsHtml;
}

// --- RAMADAN COUNTDOWN ---
function initRamadanCountdown() {
    updateRamadanTimer();
    setInterval(updateRamadanTimer, 1000);
}

function updateRamadanTimer() {
    const card = document.getElementById('ramadan-card');
    const container = document.getElementById('ramadan-timer-container');
    const msg = document.getElementById('ramadan-message');
    const status = document.getElementById('ramadan-status');
    if (!card) return;

    let targetDate = null;
    let isRamadanNow = false;
    let currentRamadanDay = 0;

    const now = new Date();
    const ramadan2026Start = new Date("2026-02-19T00:00:00");
    const ramadan2026End = new Date("2026-03-20T00:00:00");

    if (now >= ramadan2026Start && now < ramadan2026End) {
        isRamadanNow = true;
        const startMidnight = new Date(ramadan2026Start.getFullYear(), ramadan2026Start.getMonth(), ramadan2026Start.getDate());
        const nowMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const msPerDay = 1000 * 60 * 60 * 24;
        currentRamadanDay = Math.floor((nowMidnight - startMidnight) / msPerDay) + 1;
    } else if (now < ramadan2026Start) {
        targetDate = ramadan2026Start;
    } else {
        const currentYear = now.getFullYear();
        const dates = { 2027: '2027-02-08', 2028: '2028-01-28' };
        let nextDateStr = dates[currentYear] || dates[currentYear + 1];
        if (nextDateStr) targetDate = new Date(nextDateStr);
    }

    if (isRamadanNow) {
        card.style.display = 'block';
        if (status) {
            status.style.display = 'block';
            status.innerText = "اليوم هو:";
        }
        if (container) container.style.display = 'none';
        if (msg) {
            msg.style.display = 'block';
            msg.innerHTML = `<span style="font-size:3rem; color:var(--primary); font-family:'Cairo'; text-shadow:0 0 10px rgba(0,0,0,0.5);">${currentRamadanDay}</span> <span style="font-size:1.5rem; font-family:'Cairo';">رمضان</span>`;
        }
    } else if (targetDate) {
        let diff = targetDate - now;

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            card.style.display = 'block';
            if (status) {
                status.style.display = 'block';
                status.innerText = "متبقي على الشهر الفضيل";
            }
            if (container) {
                container.style.display = 'flex';
                container.innerHTML = `
                            <div class="timer-box"><span class="timer-val">${days}</span><span class="timer-label">يوم</span></div>
                            <div class="timer-box"><span class="timer-val">${hours}</span><span class="timer-label">ساعة</span></div>
                            <div class="timer-box"><span class="timer-val">${minutes}</span><span class="timer-label">دقيقة</span></div>
                            <div class="timer-box"><span class="timer-val">${seconds}</span><span class="timer-label">ثانية</span></div>
                        `;
            }
            if (msg) msg.style.display = 'none';
        }
    }
}

// --- QIBLA COMPASS ---
function calculateQibla(lat, lng) {
    const kaabaLat = 21.422487;
    const kaabaLng = 39.826206;

    const y = Math.sin((kaabaLng - lng) * Math.PI / 180) * Math.cos(kaabaLat * Math.PI / 180);
    const x = Math.cos(lat * Math.PI / 180) * Math.sin(kaabaLat * Math.PI / 180) -
        Math.sin(lat * Math.PI / 180) * Math.cos(kaabaLat * Math.PI / 180) * Math.cos((kaabaLng - lng) * Math.PI / 180);

    let brng = Math.atan2(y, x) * 180 / Math.PI;
    return (brng + 360) % 360;
}

function initQibla() {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then(response => {
                if (response === 'granted') {
                    startCompass();
                } else {
                    alert('يجب السماح بالوصول للمستشعرات لتشغيل البوصلة');
                }
            })
            .catch(console.error);
    } else {
        startCompass();
    }
}

function startCompass() {
    const btn = document.getElementById('btn-qibla-start');
    if (btn) btn.style.display = 'none';

    let absoluteListenerAdded = false;
    let currentHeading = 0;
    const smoothingFactor = 0.15;

    const handleOrientation = (e, isAbsolute) => {
        let compass = null;

        if (e.webkitCompassHeading) {
            compass = e.webkitCompassHeading;
        } else {
            if (e.alpha !== null) {
                compass = 360 - e.alpha;
            }
        }

        if (compass !== null) {
            let delta = compass - currentHeading;
            if (delta > 180) delta -= 360;
            if (delta < -180) delta += 360;

            currentHeading += delta * smoothingFactor;

            const container = document.getElementById('compass-container');
            const pointer = document.getElementById('kaaba-pointer');
            const display = document.getElementById('heading-display');

            if (container) container.style.transform = `rotate(${-currentHeading}deg)`;
            if (pointer) pointer.style.transform = `translateX(-50%) rotate(${App.qiblaOffset}deg)`;
            if (display) display.innerText = Math.round(compass) + "°";

            if (!isAbsolute && !e.webkitCompassHeading && e.absolute === false) {
                const hint = document.querySelector("#p-qibla p");
                if (hint) hint.innerHTML = '<span style="color:#FFD700"><i class="fas fa-exclamation-triangle"></i> الدقة منخفضة. حرك الهاتف شكل 8 للمعايرة</span>';
            }
        }
    };

    if (window.DeviceOrientationEvent) {
        if ('ondeviceorientationabsolute' in window) {
            window.addEventListener('deviceorientationabsolute', (e) => {
                absoluteListenerAdded = true;
                handleOrientation(e, true);
            }, true);
        }

        window.addEventListener('deviceorientation', (e) => {
            if (!absoluteListenerAdded || e.webkitCompassHeading) {
                handleOrientation(e, false);
            }
        }, true);
    } else {
        alert("عذراً، جهازك لا يدعم البوصلة");
        if (btn) btn.style.display = 'block';
    }
}

function shareApp() {
    const appLink = "https://ehabamr062-ux.github.io/Quran/";

    if (navigator.share) {
        navigator.share({
            title: 'تطبيق النور',
            text: 'أدعوك لتصفح واستخدام تطبيق النور الشامل: قرآن، استماع، أذكار، مواقيت، قبلة. تطبيق رائع جداً!',
            url: appLink
        }).catch(console.error);
    } else {
        prompt("انسخ رابط التطبيق وأرسله لأصدقائك:", appLink);
    }
}

// ---- REAL Daily Achievement Counter ----
function calcTodayDhikr() {
    const today = new Date().toDateString();
    let total = 0;

    try {
        const dhikrData = JSON.parse(localStorage.getItem('dhikr_v2')) || {};
        for (const key in dhikrData) {
            const hist = dhikrData[key].history || {};
            total += (hist[today] || 0);
        }
    } catch (e) { }

    try {
        const azkarProg = JSON.parse(localStorage.getItem('azkar_progress')) || {};
        const todayAzkar = azkarProg[today] || {};
        for (const k in todayAzkar) {
            total += (todayAzkar[k] || 0);
        }
    } catch (e) { }

    return total;
}

function updateHomeDhikrCounter() {
    const el = document.getElementById('home-daily-dhikr');
    if (el) el.innerText = calcTodayDhikr();
}

// --- ADVANCED QUIZ SYSTEM ---
const quizDB = [
    { q: "ما هي السورة التي تسمى بقلب القرآن؟", o: ["سورة يس", "سورة الرحمن", "سورة الملك", "سورة البقرة"], a: 0 },
    { q: "كم عدد أركان الإيمان؟", o: ["5", "6", "4", "7"], a: 1 },
    { q: "من هو أول مؤذن في الإسلام؟", o: ["بلال بن رباح", "عثمان بن عفان", "علي بن أبي طالب", "أبو بكر الصديق"], a: 0 },
    { q: "في أي سنة كانت غزوة بدر؟", o: ["2 هجرياً", "3 هجرياً", "4 هجرياً", "5 هجرياً"], a: 0 },
    { q: "ما هي أطول سورة في القرآن الكريم؟", o: ["سورة البقرة", "سورة النساء", "سورة آل عمران", "سورة المائدة"], a: 0 },
    { q: "من هو النبي الذي ابتلعه الحوت؟", o: ["يونس عليه السلام", "يوسف عليه السلام", "موسى عليه السلام", "عيسى عليه السلام"], a: 0 },
    { q: "ما هي الصلاة التي ليس فيها ركوع ولا سجود؟", o: ["صلاة الجنازة", "صلاة العيد", "صلاة الجمعة", "صلاة الوتر"], a: 0 },
    { q: "كم عدد سور القرآن الكريم؟", o: ["114", "110", "120", "112"], a: 0 },
    { q: "من هو خاتم الأنبياء؟", o: ["محمد ﷺ", "عيسى عليه السلام", "موسى عليه السلام", "إبراهيم عليه السلام"], a: 0 },
    { q: "ما هو الشهر الذي أنزل فيه القرآن؟", o: ["شهر رمضان", "شهر شعبان", "شهر رجب", "شهر شوال"], a: 0 },
    { q: "ما هي عاصمة الدولة الأموية؟", o: ["دمشق", "بغداد", "المدينة", "مكة"], a: 0 },
    { q: "من هو الصحابي الذي تستحي منه الملائكة؟", o: ["عثمان بن عفان", "عمر بن الخطاب", "أبو بكر الصديق", "علي بن أبي طالب"], a: 0 },
    { q: "كم سنة استمرت خلافة أبو بكر الصديق؟", o: ["سنتان وثلاثة أشهر", "4 سنوات", "10 سنوات", "سنة واحدة"], a: 0 },
    { q: "ما اسم ناقة الرسول ﷺ؟", o: ["القصواء", "البراق", "الشهباء", "الجدعاء"], a: 0 },
    { q: "من هو سيف الله المسلول؟", o: ["خالد بن الوليد", "حمزة بن عبدالمطلب", "عمر بن الخطاب", "علي بن أبي طالب"], a: 0 },
    { q: "ما هي الغزوة التي جرح فيها النبي ﷺ وشج رأسه؟", o: ["غزوة أحد", "غزوة بدر", "غزوة الخندق", "غزوة حنين"], a: 0 },
    { q: "كم عدد سور الجزء الأخير من القرآن الكريم (جزء عم)؟", o: ["37 سورة", "30 سورة", "40 سورة", "25 سورة"], a: 0 },
    { q: "من هي المرأة التي فرعون كان زوجها وبنت لها بيتاً في الجنة؟", o: ["آسية بنت مزاحم", "مريم ابنت عمران", "خديجة بنت خويلد", "فاطمة الزهراء"], a: 0 },
    { q: "كم استمرت دعوة الرسول ﷺ سراً؟", o: ["3 سنوات", "5 سنوات", "10 سنوات", "سنة واحدة"], a: 0 },
    { q: "ما هو الجبل الذي كلم الله عليه موسى عليه السلام؟", o: ["الطور", "عرفات", "النور", "أحد"], a: 0 },
    { q: "من هو أول من بنى الكعبة المشرفة؟", o: ["الملائكة", "آدم عليه السلام", "إبراهيم وإسماعيل", "إدريس عليه السلام"], a: 0 },
    { q: "ما اسم الملك الموكل بالنفخ في الصور؟", o: ["إسرافيل", "ميكائيل", "جبريل", "ملك الموت"], a: 0 },
    { q: "من التي قال عنها رسول الله ﷺ 'أم أبيها'؟", o: ["فاطمة الزهراء", "عائشة", "خديجة", "زينب"], a: 0 },
    { q: "ما السورة التي تسمى عروس القرآن؟", o: ["الرحمن", "يوسف", "يس", "البقرة"], a: 0 },
    { q: "من هو أشد الأمة حياءً؟", o: ["عثمان بن عفان", "عمر بن الخطاب", "علي بن أبي طالب", "أبو بكر الصديق"], a: 0 },
    { q: "ما السورة التي نزلت كاملة دفعة واحدة؟", o: ["المدثر", "الأنعام", "الفاتحة", "البقرة"], a: 1 },
    { q: "ما هي المدينة التي كانت تسمى يثرب؟", o: ["المدينة المنورة", "مكة المكرمة", "الطائف", "جدة"], a: 0 },
    { q: "من أول من ألف في علم أصول الفقه؟", o: ["الإمام الشافعي", "الإمام مالك", "الإمام أبو حنيفة", "الإمام أحمد"], a: 0 },
    { q: "من هو الصحابي الذي أشار بحفر الخندق؟", o: ["سلمان الفارسي", "عمر بن الخطاب", "أبو بكر الصديق", "علي بن أبي طالب"], a: 0 }
];

let quizState = {
    score: 0,
    streak: 0,
    currentQ: null,
    pool: [],
    totalQ: 10,
    currentIndex: 0,
    correct: 0,
    wrong: 0,
    skipped: 0
};

function startQuiz() {
    let selectCount = parseInt(document.getElementById('quiz-count-select').value);
    let actualCount = Math.min(selectCount, quizDB.length);

    quizState.score = 0;
    quizState.streak = 0;
    quizState.totalQ = actualCount;
    quizState.currentIndex = 0;
    quizState.correct = 0;
    quizState.wrong = 0;
    quizState.skipped = 0;

    quizState.pool = [...quizDB].sort(() => 0.5 - Math.random()).slice(0, actualCount);

    document.getElementById('quiz-start-screen').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('quiz-content').style.display = 'block';

    updateScoreUI();
    nextQuizQuestion();
}

function updateScoreUI() {
    document.getElementById('quiz-score').innerText = quizState.score;
    const streakEl = document.getElementById('quiz-streak');
    if (quizState.streak > 1) {
        streakEl.style.visibility = 'visible';
        streakEl.innerText = 'x' + quizState.streak + ' 🔥';
    } else {
        streakEl.style.visibility = 'hidden';
    }
}

function showQuizResults() {
    document.getElementById('quiz-content').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';

    document.getElementById('quiz-final-score').innerText = quizState.score;
    document.getElementById('quiz-res-correct').innerText = quizState.correct;
    document.getElementById('quiz-res-wrong').innerText = quizState.wrong;
    document.getElementById('quiz-res-skipped').innerText = quizState.skipped;

    const currentTotalScore = parseInt(localStorage.getItem('total_quiz_score') || '0');
    localStorage.setItem('total_quiz_score', currentTotalScore + quizState.score);

    updateGamification();
}

function nextQuizQuestion(skipped = false) {
    if (skipped) {
        quizState.streak = 0;
        quizState.skipped++;
        updateScoreUI();
        showToast("تم تخطي السؤال");
        quizState.currentIndex++;
    }

    if (quizState.currentIndex >= quizState.totalQ) {
        showQuizResults();
        return;
    }

    document.getElementById('quiz-feedback').innerText = "";
    document.getElementById('quiz-feedback').className = "";

    document.getElementById('quiz-progress-text').innerText = `سؤال ${quizState.currentIndex + 1} من ${quizState.totalQ}`;

    quizState.currentQ = quizState.pool[quizState.currentIndex];

    const qEl = document.getElementById('quiz-question');
    qEl.innerText = quizState.currentQ.q;
    qEl.classList.add('fade-in');
    setTimeout(() => qEl.classList.remove('fade-in'), 500);

    const optsDiv = document.getElementById('quiz-options');
    optsDiv.innerHTML = '';

    quizState.currentQ.o.forEach((opt, i) => {
        optsDiv.innerHTML += `
                    <button class="quiz-option" onclick="checkQuizAnswer(${i}, this)" 
                        style="
                            width:100%; padding:15px; text-align:right; 
                            background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); 
                            border-radius:12px; color:var(--text-main); font-size:1rem; cursor:pointer;
                            transition: all 0.2s; display:flex; justify-content:space-between; align-items:center;">
                        <span>${opt}</span>
                        <i class="fas fa-circle-notch" style="opacity:0.3; font-size:0.8rem;"></i>
                    </button>
                `;
    });
}

function checkQuizAnswer(selectedIdx, btn) {
    const btns = document.querySelectorAll('.quiz-option');
    btns.forEach(b => { b.disabled = true; b.style.cursor = 'default'; });

    const correctIdx = quizState.currentQ.a;

    if (selectedIdx === correctIdx) {
        btn.style.background = 'rgba(76, 175, 80, 0.2)';
        btn.style.borderColor = '#4CAF50';
        btn.querySelector('i').className = 'fas fa-check-circle';
        btn.querySelector('i').style.color = '#4CAF50';
        btn.querySelector('i').style.opacity = '1';

        quizState.score += (10 + (quizState.streak * 2));
        quizState.streak++;
        quizState.correct++;

        if (navigator.vibrate) navigator.vibrate(50);

        document.getElementById('quiz-feedback').innerHTML = '<span style="color:#4CAF50">إجابة صحيحة! أحسنت 🌟</span>';
    } else {
        btn.style.background = 'rgba(244, 67, 54, 0.2)';
        btn.style.borderColor = '#f44336';
        btn.querySelector('i').className = 'fas fa-times-circle';
        btn.querySelector('i').style.color = '#f44336';
        btn.querySelector('i').style.opacity = '1';
        btn.classList.add('shake');

        const correctBtn = btns[correctIdx];
        correctBtn.style.background = 'rgba(76, 175, 80, 0.2)';
        correctBtn.style.borderColor = '#4CAF50';
        correctBtn.querySelector('i').className = 'fas fa-check-circle';
        correctBtn.querySelector('i').style.color = '#4CAF50';
        correctBtn.querySelector('i').style.opacity = '1';

        quizState.streak = 0;
        quizState.wrong++;

        if (navigator.vibrate) navigator.vibrate([50, 50, 50]);

        document.getElementById('quiz-feedback').innerHTML = '<span style="color:#f44336">إجابة خاطئة، حظاً أوفر!</span>';
    }

    quizState.currentIndex++;
    updateScoreUI();

    setTimeout(() => {
        nextQuizQuestion();
    }, 2000);
}

// GAMIFICATION & ACHIEVEMENTS SYSTEM
function updateGamification() {
    const dhikrCount = parseInt(localStorage.getItem('total_dhikr') || '0');
    const totalDaily = parseInt(localStorage.getItem('daily_dhikr') || '0');
    const combinedDhikrScore = dhikrCount + Math.floor(totalDaily / 10);

    const quizScoreStr = localStorage.getItem('total_quiz_score') || '0';
    let quizScore = parseInt(quizScoreStr);

    const totalPoints = combinedDhikrScore + quizScore;

    let levelId = 1;
    let levelTitle = "قارئ مبتدئ";
    let levelIcon = "🥉";
    let nextLevelMsg = "اجمع النقاط لترتقي للدرجة الفضية";

    if (totalPoints >= 10000) {
        levelId = 5;
        levelTitle = "ختمة ماسية 👑";
        levelIcon = "💎";
        nextLevelMsg = "ما شاء الله! أنت في أعلى الدرجات";
    } else if (totalPoints >= 5000) {
        levelId = 4;
        levelTitle = "بطل رمضان 🏆";
        levelIcon = "🏆";
        nextLevelMsg = "رائع.. استمر لتصل للدرجة الماسية (10000 نقطة)";
    } else if (totalPoints >= 2000) {
        levelId = 3;
        levelTitle = "مداوم ذهبي 🥇";
        levelIcon = "🥇";
        nextLevelMsg = "ممتاز.. الطريق مفتوح لبطل رمضان (5000 نقطة)";
    } else if (totalPoints >= 500) {
        levelId = 2;
        levelTitle = "مداوم فضي 🥈";
        levelIcon = "🥈";
        nextLevelMsg = "أحسنت.. اقتربت من الدرجة الذهبية (2000 نقطة)";
    }

    const iconEl = document.getElementById('user-badge-icon');
    const titleEl = document.getElementById('user-badge-title');
    const msgEl = document.getElementById('user-points-title');
    const totalEl = document.getElementById('user-total-points');
    const quizEl = document.getElementById('user-quiz-score-ui');
    const dhikrEl = document.getElementById('user-dhikr-score-ui');

    if (iconEl) iconEl.innerText = levelIcon;
    if (titleEl) titleEl.innerText = levelTitle;
    if (msgEl) msgEl.innerText = nextLevelMsg;
    if (totalEl) totalEl.innerText = totalPoints;
    if (quizEl) quizEl.innerText = quizScore;
    if (dhikrEl) dhikrEl.innerText = combinedDhikrScore;

    // Check for level up promotion
    const lastLevel = parseInt(localStorage.getItem('last_reached_level') || '1');
    if (levelId > lastLevel) {
        localStorage.setItem('last_reached_level', levelId);
        setTimeout(() => {
            showLevelCongratulation(levelTitle, levelIcon);
        }, 1000);
    }

    // Synchronize the home daily dhikr counter as well
    if (typeof updateHomeDhikrCounter === 'function') {
        updateHomeDhikrCounter();
    }
}

function showLevelCongratulation(levelTitle, levelIcon) {
    const modal = document.createElement('div');
    modal.id = 'level-congratulation-modal';
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background: rgba(0,0,0,0.85); z-index: 16000; 
        display: flex; justify-content: center; align-items: center; 
        backdrop-filter: blur(8px); animation: fadeIn 0.4s;
    `;

    modal.innerHTML = `
        <div id="congrat-card-container" class="card" style="
            width: 90%; 
            max-width: 440px; 
            padding: 30px 20px; 
            border: 2px solid var(--primary);
            box-shadow: 0 0 30px rgba(212,175,55,0.4);
            animation: scaleUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            text-align: center;
            background: linear-gradient(135deg, #0d131f 0%, #05080f 100%);
            border-radius: 20px;
            position: relative;
        ">
            <div style="font-size:3.5rem; margin-bottom:15px; animation: pulseLogo 1.5s infinite alternate;">🎉 ${levelIcon} 🎉</div>
            
            <h2 style="color:var(--primary); font-family:'Cairo'; font-size:1.6rem; margin-bottom:10px;">تهانينا الحارة! 🎉</h2>
            <p style="color:#fff; font-size:1.1rem; margin-bottom:20px; font-family:'Cairo';">
                لقد ارتقيت بجدارة إلى رتبة:
                <br><span style="font-size:1.3rem; color:var(--primary); font-weight:bold; display:inline-block; margin-top:8px;">${levelTitle}</span>
            </p>

            <div id="congrat-input-area">
                <p style="color:var(--text-sec); font-size:0.85rem; margin-bottom:15px;">اكتب اسمك الكريم لتوليد شهادة التقدير الخاصة بك:</p>
                <input type="text" id="congrat-user-name" placeholder="اسمك الكريم هنا..." style="
                    width: 85%;
                    padding: 12px;
                    border: 1px solid rgba(212,175,55,0.3);
                    background: rgba(0,0,0,0.4);
                    border-radius: 10px;
                    color: #fff;
                    text-align: center;
                    font-family: 'Cairo', sans-serif;
                    font-size: 1rem;
                    margin-bottom: 20px;
                    outline: none;
                ">
                <br>
                <button id="generate-congrat-card-btn" style="
                    width: 85%;
                    background: linear-gradient(135deg, var(--primary), #b8860b);
                    color: #000;
                    border: none;
                    padding: 12px;
                    border-radius: 10px;
                    font-weight: bold;
                    cursor: pointer;
                    font-family: 'Cairo', sans-serif;
                    font-size: 1rem;
                ">توليد شهادة التقدير 📜</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('#generate-congrat-card-btn').onclick = () => {
        const userName = modal.querySelector('#congrat-user-name').value.trim();
        if (!userName) {
            alert("يرجى إدخال اسمك أولاً");
            return;
        }

        // Show the beautiful certificate design
        const cardContainer = modal.querySelector('#congrat-card-container');
        cardContainer.style.maxWidth = "500px";
        cardContainer.innerHTML = `
            <div style="
                border: 2px double var(--primary);
                padding: 25px 15px;
                border-radius: 15px;
                background: rgba(255,215,0,0.02);
                position: relative;
            ">
                <div style="position:absolute; top:10px; right:10px; font-size:1.2rem; opacity:0.3;">🌙</div>
                <div style="position:absolute; top:10px; left:10px; font-size:1.2rem; opacity:0.3;">🕌</div>
                
                <h3 style="color:var(--primary); font-family:'Cairo'; font-size:1.25rem; margin-bottom:5px; letter-spacing:1px;">شهادة تهنئة وتقدير</h3>
                <div style="font-size:0.75rem; color:var(--text-sec); margin-bottom:20px;">تطبيق النور الشامل</div>

                <p style="color:var(--text-sec); font-size:0.9rem; margin-bottom:10px; font-family:'Cairo';">يَسر أسرة تطبيق النور أن تتقدم بخالص التهنئة للمثابر:</p>
                <h2 style="color:#fff; font-family:'Cairo'; font-size:1.7rem; margin:10px 0; border-bottom:1px dashed var(--primary); display:inline-block; padding:0 20px;">${userName}</h2>

                <p style="color:var(--text-main); font-size:0.95rem; line-height:1.6; margin:15px 0 25px; font-family:'Cairo';">
                    وذلك لارتقائه بجدارة وعلوّ همته إلى رتبة:
                    <br><b style="color:var(--primary); font-size:1.15rem;">${levelTitle}</b>
                    <br><span style="font-size:0.8rem; color:var(--text-sec);">بعد وصوله للتحصيل المطلوب من الذكر والعبادة والمسابقات الدينية اليومية.</span>
                </p>

                <p style="color:var(--primary); font-family:'Amiri'; font-size:1.1rem; font-style:italic; margin-bottom:20px;">
                    "وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ"
                </p>

                <div style="font-size:0.7rem; color:var(--text-sec); margin-bottom:15px;">يمكنك تصوير الشاشة (Screenshot) للاحتفاظ بالشهادة والافتخار بها 📸</div>

                <button id="close-congrat-btn" style="
                    background: rgba(255,255,255,0.08); 
                    color: #fff; 
                    border: 1px solid rgba(255,255,255,0.15); 
                    padding: 8px 30px; 
                    border-radius: 8px; 
                    cursor: pointer;
                    font-family: 'Cairo', sans-serif;
                    font-size: 0.9rem;
                    transition: 0.2s;
                " onmouseover="this.style.background='rgba(255,255,255,0.15)'" onmouseout="this.style.background='rgba(255,255,255,0.08)'">إغلاق الشهادة</button>
            </div>
        `;

        cardContainer.querySelector('#close-congrat-btn').onclick = () => {
            modal.remove();
        };
    };
}

function showPointsSystem() {
    const modal = document.createElement('div');
    modal.id = 'points-system-modal';
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background: rgba(0,0,0,0.75); z-index: 15000; 
        display: flex; justify-content: center; align-items: center; 
        backdrop-filter: blur(5px); animation: fadeIn 0.25s;
    `;

    modal.innerHTML = `
        <div class="card" style="
            width: 90%; 
            max-width: 420px; 
            padding: 25px; 
            border: 1px solid var(--primary);
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            animation: scaleUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            text-align: right;
            max-height: 85vh;
            overflow-y: auto;
        ">
            <h3 style="color:var(--primary); font-family:'Cairo'; margin-bottom:20px; text-align:center; font-size:1.4rem; display:flex; align-items:center; justify-content:center; gap:8px;">
                <i class="fas fa-trophy"></i> دليل مستويات تطبيق النور
            </h3>
            
            <p style="color:var(--text-main); font-size:0.9rem; line-height:1.6; margin-bottom:20px; text-align:center;">
                اجمع النقاط اليومية من خلال قراءة القرآن والأذكار واجتياز المسابقات لترتقي بمستواك الإيماني!
            </p>

            <h4 style="color:var(--primary); font-family:'Cairo'; margin-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:5px;"><i class="fas fa-star"></i> نظام احتساب النقاط:</h4>
            <ul style="color:var(--text-sec); font-size:0.85rem; line-height:1.8; padding-right:20px; margin-bottom:20px; list-style-type:square;">
                <li><b>التسبيح والذكر:</b> تحصل على نقطة واحدة لكل تسبيحة، و10 نقاط عند إكمال ورد الأذكار اليومية.</li>
                <li><b>المسابقات الدينية:</b> تحصل على 10 نقاط لكل إجابة صحيحة تجيب عليها في قسم المسابقات.</li>
            </ul>

            <h4 style="color:var(--primary); font-family:'Cairo'; margin-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:5px;"><i class="fas fa-award"></i> رتب ومستويات المستخدم:</h4>
            <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:25px;">
                <div style="display:flex; align-items:center; gap:12px; background:rgba(255,255,255,0.03); padding:8px 12px; border-radius:10px;">
                    <span style="font-size:1.8rem;">🥉</span>
                    <div>
                        <div style="color:var(--text-main); font-weight:bold; font-size:0.9rem;">قارئ مبتدئ</div>
                        <div style="color:var(--text-sec); font-size:0.75rem;">من 0 إلى 499 نقطة</div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:12px; background:rgba(255,255,255,0.03); padding:8px 12px; border-radius:10px;">
                    <span style="font-size:1.8rem;">🥈</span>
                    <div>
                        <div style="color:var(--text-main); font-weight:bold; font-size:0.9rem;">مداوم فضي</div>
                        <div style="color:var(--text-sec); font-size:0.75rem;">من 500 إلى 1,999 نقطة</div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:12px; background:rgba(255,255,255,0.03); padding:8px 12px; border-radius:10px;">
                    <span style="font-size:1.8rem;">🥇</span>
                    <div>
                        <div style="color:var(--text-main); font-weight:bold; font-size:0.9rem;">حريص ذهبي</div>
                        <div style="color:var(--text-sec); font-size:0.75rem;">من 2,000 إلى 4,999 نقطة</div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:12px; background:rgba(255,255,255,0.03); padding:8px 12px; border-radius:10px;">
                    <span style="font-size:1.8rem;">🏆</span>
                    <div>
                        <div style="color:var(--text-main); font-weight:bold; font-size:0.9rem;">بطل النور</div>
                        <div style="color:var(--text-sec); font-size:0.75rem;">من 5,000 إلى 9,999 نقطة</div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:12px; background:rgba(212,175,55,0.15); border:1px solid rgba(212,175,55,0.3); padding:8px 12px; border-radius:10px;">
                    <span style="font-size:1.8rem;">👑</span>
                    <div>
                        <div style="color:var(--primary); font-weight:bold; font-size:0.9rem;">ختمة ماسية</div>
                        <div style="color:var(--text-sec); font-size:0.75rem;">10,000 نقطة فما فوق</div>
                    </div>
                </div>
            </div>

            <button id="close-points-btn" style="
                width: 100%; 
                background: var(--primary); 
                color: #000; 
                border: none; 
                padding: 12px; 
                border-radius: 10px; 
                font-weight: bold; 
                cursor: pointer;
                font-family: 'Cairo', sans-serif;
                font-size: 1rem;
            ">فهمت ذلك</button>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('#close-points-btn').onclick = () => {
        modal.remove();
    };
}

const originalNavTo = window.navTo;
window.navTo = function (pageId) {
    if (originalNavTo) originalNavTo(pageId);
    if (pageId === 'home') {
        updateGamification();
    }
};

// Quran Live Radio
let currentRadioBtn = null;
function toggleLiveRadio(url, title, desc, btnEl) {
    const player = document.getElementById('radio-player');
    const playBtn = document.getElementById('radio-play-btn');
    const titleEl = document.getElementById('radio-title');
    const descEl = document.getElementById('radio-desc');

    if (player.src === url && !player.paused) {
        player.pause();
        if (btnEl) btnEl.querySelector('i').className = 'fas fa-headphones';
        playBtn.querySelector('i').className = 'fas fa-play';
    } else {
        if (currentRadioBtn && currentRadioBtn !== playBtn) {
            currentRadioBtn.querySelector('i').className = 'fas fa-headphones';
        }
        currentRadioBtn = btnEl;

        titleEl.innerText = title;
        descEl.innerText = desc;

        player.src = url;
        player.play().catch(e => {
            showToast("حدث خطأ في التشغيل، تأكد من اتصال الإنترنت");
        });

        if (btnEl) btnEl.querySelector('i').className = 'fas fa-pause';
        playBtn.querySelector('i').className = 'fas fa-pause';

        playBtn.onclick = function () { toggleLiveRadio(url, title, desc, playBtn); };
    }
}

// Greeting Cards
let selectedGreetingTemplate = 0;
const greetingTemplates = [
    { bg: '#0A0A0A', accent: '#D4AF37', text: 'مبارك عليكم الشهر', pattern: 'radial-gradient(circle at center, rgba(212,175,55,0.2) 0%, transparent 60%)' },
    { bg: '#0F172A', accent: '#38BDF8', text: 'رمضان كريم', pattern: 'linear-gradient(45deg, rgba(56,189,248,0.1) 25%, transparent 25%)' },
    { bg: '#14532D', accent: '#FDE047', text: 'شهر الرحمة والغفران', pattern: 'repeating-linear-gradient(45deg, rgba(253,224,71,0.05) 0px, transparent 10px)' },
    { bg: '#4C0519', accent: '#FDA4AF', text: 'تقبل الله طاعتكم', pattern: 'radial-gradient(circle at top right, rgba(253,164,175,0.2) 0%, transparent 50%)' }
];

function initGreetingCard() {
    const container = document.getElementById('greeting-templates');
    if (!container) return;
    container.innerHTML = '';

    greetingTemplates.forEach((t, i) => {
        const div = document.createElement('div');
        div.style.background = `linear-gradient(135deg, ${t.bg}, #000)`;
        div.style.border = `2px solid ${i === selectedGreetingTemplate ? 'var(--primary)' : 'transparent'}`;
        div.style.borderRadius = '10px';
        div.style.padding = '20px 10px';
        div.style.cursor = 'pointer';
        div.style.transition = '0.3s';
        div.style.color = t.accent;
        div.style.fontFamily = 'Cairo';
        div.style.fontSize = '0.9rem';
        div.innerHTML = `<i class="fas fa-moon" style="display:block; margin-bottom:5px; font-size:1.5rem;"></i>${t.text}`;

        div.onclick = () => {
            selectedGreetingTemplate = i;
            initGreetingCard();
        };

        container.appendChild(div);
    });
}

function generateGreetingCard() {
    const name = document.getElementById('greeting-name').value.trim();
    if (!name) {
        showToast("الرجاء كتابة اسمك أولاً");
        return;
    }

    const canvas = document.getElementById('greeting-canvas');
    const ctx = canvas.getContext('2d');
    const tpl = greetingTemplates[selectedGreetingTemplate];

    canvas.width = 1080;
    canvas.height = 1080;

    const bgGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    bgGrad.addColorStop(0, tpl.bg);
    bgGrad.addColorStop(1, '#050505');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const glowGrad = ctx.createRadialGradient(canvas.width / 2, 0, 0, canvas.width / 2, 0, 800);
    glowGrad.addColorStop(0, tpl.accent + '4D');
    glowGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = glowGrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = tpl.accent;
    ctx.lineWidth = 4;
    ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);

    const cornerSize = 80;
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.moveTo(30, 30 + cornerSize); ctx.lineTo(30, 30); ctx.lineTo(30 + cornerSize, 30);
    ctx.moveTo(canvas.width - 30 - cornerSize, 30); ctx.lineTo(canvas.width - 30, 30); ctx.lineTo(canvas.width - 30, 30 + cornerSize);
    ctx.moveTo(30, canvas.height - 30 - cornerSize); ctx.lineTo(30, canvas.height - 30); ctx.lineTo(30 + cornerSize, canvas.height - 30);
    ctx.moveTo(canvas.width - 30 - cornerSize, canvas.height - 30); ctx.lineTo(canvas.width - 30, canvas.height - 30); ctx.lineTo(canvas.width - 30, canvas.height - 30 - cornerSize);
    ctx.stroke();

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillStyle = tpl.accent;
    ctx.font = "bold 160px Arial";
    ctx.shadowColor = tpl.accent;
    ctx.shadowBlur = 30;
    ctx.fillText("☪", canvas.width / 2, canvas.height / 2 - 320);

    ctx.shadowBlur = 0;
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 90px Cairo, Arial";
    ctx.fillText(tpl.text, canvas.width / 2, canvas.height / 2 - 120);

    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "italic 45px Cairo";
    ctx.fillText("نهنئكم بحلول شهر الخير والبركات، تقبل الله منا ومنكم", canvas.width / 2, canvas.height / 2 + 20);

    ctx.shadowColor = tpl.accent;
    ctx.shadowBlur = 20;
    ctx.fillStyle = tpl.accent;
    ctx.font = "bold 110px Cairo, Arial";
    ctx.fillText(name, canvas.width / 2, canvas.height / 2 + 230);

    ctx.shadowBlur = 0;

    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font = "30px Cairo";
    ctx.fillText("━ صُمم بواسطة تطبيق النور ━", canvas.width / 2, canvas.height - 80);

    document.getElementById('greeting-result-container').style.display = 'block';
    showToast("تم تصميم البطاقة بنجاح!");

    document.getElementById('greeting-result-container').scrollIntoView({ behavior: "smooth" });
}

function downloadGreetingCard() {
    const canvas = document.getElementById('greeting-canvas');
    const link = document.createElement('a');
    link.download = `ramadan_greeting_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}

async function shareGreetingCard() {
    const canvas = document.getElementById('greeting-canvas');
    canvas.toBlob(async (blob) => {
        if (!blob) return;
        const file = new File([blob], "ramadan_greeting.png", { type: "image/png" });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            try {
                await navigator.share({
                    title: 'تهنئة رمضان',
                    text: 'بطاقة تهنئة بشهر رمضان المبارك من تطبيق النور',
                    files: [file]
                });
            } catch (err) {
                console.error("Share failed", err);
            }
        } else {
            showToast("جهازك لا يدعم مشاركة الصور مباشرة، يرجى حفظها أولاً");
        }
    });
}

function showNearestMosques() {
    const btn = document.querySelector('button[onclick="showNearestMosques()"]');
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري تحديد الموقع...';
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;

            if (btn) {
                btn.disabled = false;
                btn.innerHTML = '<i class="fas fa-map-marker-alt"></i> أقرب المساجد إليك';
            }

            const url = `https://www.google.com/maps/search/mosques/@${lat},${lng},16z/data=!3m1!4b1`;
            window.open(url, '_blank');
        }, (err) => {
            console.error(err);
            if (btn) { btn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> تعذر تحديد الموقع'; btn.disabled = false; }
            if (err.code === err.PERMISSION_DENIED) {
                alert("يرجى إعطاء صلاحية الوصول للموقع للبحث عن أقرب المساجد.");
            } else {
                showToast('تعذر تحديد موقعك. تأكد من تفعيل GPS.');
            }
        }, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        });
    } else {
        showToast('المتصفح لا يدعم تحديد الموقع.');
    }
}

// --- KHATMA PLANNER ---
let currentKhatmaCount = 1;

function changeKhatmaCount(delta) {
    if (delta === 0) currentKhatmaCount = 1;
    else currentKhatmaCount += delta;

    if (currentKhatmaCount < 1) currentKhatmaCount = 1;
    if (currentKhatmaCount > 10) currentKhatmaCount = 10;

    updateKhatmaUI();
    localStorage.setItem('khatma_mode_advanced', currentKhatmaCount);
}

function updateKhatmaUI() {
    const display = document.getElementById('khatma-count-display');
    const perPrayer = document.getElementById('pages-per-prayer');
    const perDay = document.getElementById('pages-per-day');
    const levelText = document.getElementById('khatma-level-text');

    if (!display) return;

    const dailyTarget = 20 * currentKhatmaCount;
    const prayerTarget = 4 * currentKhatmaCount;

    display.innerText = currentKhatmaCount;
    if (perDay) perDay.innerText = dailyTarget;
    if (perPrayer) perPrayer.innerText = prayerTarget;

    if (levelText) {
        if (currentKhatmaCount === 1) {
            levelText.innerText = "⭐ مستوى سهل (ختمة واحدة)";
            levelText.style.color = "#10B981";
        } else if (currentKhatmaCount === 2) {
            levelText.innerText = "⭐⭐ مستوى متوسط (ختمتين)";
            levelText.style.color = "#F59E0B";
        } else if (currentKhatmaCount >= 3 && currentKhatmaCount <= 5) {
            levelText.innerText = "🔥 مستوى متقدم (" + currentKhatmaCount + " ختمات)";
            levelText.style.color = "#EF4444";
        } else {
            levelText.innerText = "🏆 مستو أبطال (" + currentKhatmaCount + " ختمات)";
            levelText.style.color = "#8B5CF6";
        }
    }
}

function initKhatma() {
    currentKhatmaCount = parseInt(localStorage.getItem('khatma_mode_advanced')) || 1;
    updateKhatmaUI();
}

function showKhatmaModal(type) {
    const container = document.createElement('div');
    container.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                background: rgba(0,0,0,0.8); z-index: 20000; 
                display: flex; justify-content: center; align-items: center; 
                backdrop-filter: blur(5px); animation: fadeIn 0.3s;
            `;

    const isPrayer = type === 'prayer';
    const pages = currentKhatmaCount * (isPrayer ? 4 : 20);
    const title = isPrayer ? 'ورد كل صلاة 🕌' : 'المجموع اليومي 📖';

    let details = '';
    if (isPrayer) {
        details = `
                    <div style="text-align: right; margin-top: 15px; color: var(--text-main); font-size: 1.1rem; line-height: 1.8;">
                        <p>لتحقيق هدفك في ختم القرآن <b>${currentKhatmaCount} مرات</b> شهرياً، يتوجب عليك قراءة <b>${pages} صفحات</b> بعد كل صلاة مفروضة:</p>
                        <ul style="list-style: none; padding: 0; margin-top: 10px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
                            <li><i class="fas fa-sun" style="color:var(--primary); margin-left:8px;"></i> الفجر: ${pages} صفحات</li>
                            <li><i class="fas fa-sun" style="color:var(--primary); margin-left:8px;"></i> الظهر: ${pages} صفحات</li>
                            <li><i class="fas fa-cloud-sun" style="color:var(--primary); margin-left:8px;"></i> العصر: ${pages} صفحات</li>
                            <li><i class="fas fa-moon" style="color:var(--primary); margin-left:8px;"></i> المغرب: ${pages} صفحات</li>
                            <li><i class="fas fa-star" style="color:var(--primary); margin-left:8px;"></i> العشاء: ${pages} صفحات</li>
                        </ul>
                    </div>`;
    } else {
        details = `
                    <div style="text-align: center; margin-top: 15px; color: var(--text-main); font-size: 1.1rem; line-height: 1.8;">
                        <p>لكي تختم القرآن <b>${currentKhatmaCount} مرات</b> خلال الشهر، فإن هدفك اليومي هو قراءة <b>${pages} صفحة</b> (أي ما يعادل تقريباً ${currentKhatmaCount} جزء يومياً).</p>
                        <i class="fas fa-book-reader" style="font-size: 3rem; color: var(--primary); margin-top: 20px;"></i>
                    </div>`;
    }

    container.innerHTML = `
                <div style="background: var(--bg-card); border: 2px solid var(--primary); border-radius: 20px; padding: 25px; width: 90%; max-width: 400px; text-align: center; position: relative;">
                    <h2 style="color: var(--primary); margin-bottom: 10px; font-family: 'Amiri';">${title}</h2>
                    ${details}
                    <button onclick="this.closest('div').parentElement.remove()" style="margin-top: 25px; width: 100%; background: var(--primary); color: #000; padding: 12px; border-radius: 12px; font-weight: bold; border: none; cursor: pointer;">حسناً، فهمت</button>
                </div>
            `;
    document.body.appendChild(container);
}

function showDailyAchievement() {
    const totalDhikrCount = calcTodayDhikr();
    const container = document.createElement('div');
    container.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                background: rgba(0,0,0,0.8); z-index: 20000; 
                display: flex; justify-content: center; align-items: center; 
                backdrop-filter: blur(5px); animation: fadeIn 0.3s;
            `;

    container.innerHTML = `
                <div style="background: var(--bg-card); border: 2px solid var(--primary); border-radius: 20px; padding: 25px; width: 90%; max-width: 400px; text-align: center; position: relative;">
                    <i class="fas fa-chart-pie" style="font-size: 3rem; color: var(--primary); margin-bottom: 15px;"></i>
                    <h2 style="color: var(--primary); margin-bottom: 15px; font-family: 'Amiri';">إنجازك اليومي</h2>
                    <p style="color: var(--text-main); font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;">
                        إجمالي التسابيح والأذكار المنجزة اليوم حتى الآن: 
                        <br><span style="font-size: 2rem; font-weight: bold; color: var(--accent); font-family: 'Cairo';">${totalDhikrCount}</span>
                    </p>
                    <p style="color: var(--text-sec); font-size: 0.9rem;">استمر في الذكر لتزيد من رصيد حسناتك!</p>
                    <button onclick="this.closest('div').parentElement.remove()" style="margin-top: 25px; width: 100%; background: var(--primary); color: #000; padding: 12px; border-radius: 12px; font-weight: bold; border: none; cursor: pointer;">متابعة</button>
                </div>
            `;
    document.body.appendChild(container);
}

// --- Security & Protection (Disabled as requested) ---

// Auto Init
setTimeout(initKhatma, 500);

if ("serviceWorker" in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register("service-worker.js").then(function (registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// --- Firebase Push Notifications ---
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAYn_oxYFaN8Rz7J_CrjWpCL5nCPPpa69s",
    authDomain: "quran-app-ea45d.firebaseapp.com",
    projectId: "quran-app-ea45d",
    storageBucket: "quran-app-ea45d.firebasestorage.app",
    messagingSenderId: "1010593301120",
    appId: "1:1010593301120:web:d32d22d817eba744bf1c65",
    measurementId: "G-SKR6MX0ELT"
};
const VAPID_KEY = "BCQpkRCLaSl3jHexHmgjaQLEFU75-gJiW3lZ57AuS1Ide69T7vjFAS2m0G2AEO0qJeAkLKDFFylzLkciqNMS7JM";

let firebaseMessaging = null;

function initFirebaseNotifications() {
    if (location.protocol === 'file:') {
        console.info('[Notify] يعمل محلياً — الإشعارات تحتاج HTTPS');
        return;
    }
    if (FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY') {
        console.warn('[Notify] لم يتم تعيين إعدادات Firebase');
        return;
    }
    try {
        if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
        firebaseMessaging = firebase.messaging();
        navigator.serviceWorker.register('/firebase-messaging-sw.js').then(reg => {
            try { firebaseMessaging.useServiceWorker(reg); } catch (e) { }
            requestNotifyPermission();
        }).catch(err => console.error('[Notify] SW Error:', err));

        firebaseMessaging.onMessage((payload) => {
            const title = payload.notification?.title || 'تطبيق النور';
            const body = payload.notification?.body || '';
            showInAppNotification(title, body, payload.data?.link);
        });
    } catch (err) { console.error('[Notify]', err); }
}

async function requestNotifyPermission() {
    if (!('Notification' in window)) {
        showToast('متصفحك لا يدعم الإشعارات', 3000);
        return;
    }
    const granted = await Notifier.requestPermission();
    if (granted) {
        showToast('✅ تم تفعيل الإشعارات!', 3000);
        await Notifier.scheduleAll();
        localStorage.setItem('notif_scheduled_date', new Date().toDateString());
        setTimeout(() => Notifier.showNow('🔔 تطبيق النور', 'الإشعارات تعمل الآن بنجاح! ستصلك تنبيهات الصلاة والأذكار يومياً 🌙', { url: '/' }), 3000);
    } else {
        showToast('❌ تم رفض الإشعارات — يمكن تفعيلها من إعدادات المتصفح', 4000);
    }
}

async function getFCMToken() {
    if (!firebaseMessaging) return;
    try {
        const token = await firebaseMessaging.getToken({ vapidKey: VAPID_KEY });
        if (token) {
            console.log('[Notify] Token:', token);
            localStorage.setItem('fcm_token', token);
            const el = document.getElementById('fcm-token-display');
            if (el) { el.value = token; el.closest('.fcm-token-box')?.setAttribute('style', 'display:block'); }
        }
    } catch (err) { console.error('[Notify] Token Error:', err); }
}

function showInAppNotification(title, body, link) {
    const box = document.createElement('div');
    box.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;display:flex;justify-content:center;padding-top:15px;pointer-events:none;';
    box.innerHTML = `<div onclick="this.parentElement.remove()${link ? ';window.location.href=\'' + link + '\'' : ''}" style="
            max-width:340px;width:90%;pointer-events:auto;cursor:pointer;
            background:linear-gradient(135deg,#0e1520,#1a2535);
            border:1px solid rgba(212,175,55,0.6);border-radius:16px;
            padding:15px 18px;box-shadow:0 8px 30px rgba(0,0,0,0.7);
            display:flex;gap:12px;align-items:flex-start;direction:rtl;
            font-family:'Cairo',sans-serif;animation:notifSlide .4s ease;
        ">
            <i class="fas fa-bell" style="color:#d4af37;font-size:1.3rem;margin-top:3px;"></i>
            <div style="flex:1">
                <div style="color:#d4af37;font-weight:bold;font-size:0.97rem;margin-bottom:4px;">${title}</div>
                <div style="color:rgba(255,255,255,0.8);font-size:0.85rem;line-height:1.6;">${body}</div>
            </div>
            <i class="fas fa-times" style="color:rgba(255,255,255,0.3);font-size:0.9rem;margin-top:3px;"></i>
        </div>`;
    document.body.appendChild(box);
    setTimeout(() => { box.style.opacity = '0'; box.style.transition = 'opacity .4s'; setTimeout(() => box.remove(), 400); }, 6000);
}

const notifStyle = document.createElement('style');
notifStyle.textContent = `
            @keyframes notifSlide {
                from { transform:translateY(-80px); opacity:0; }
                to   { transform:translateY(0);     opacity:1; }
            }
            @keyframes arrowBounce {
                0%,100% { transform:translateY(0);   opacity:1; }
                50%      { transform:translateY(6px); opacity:0.6; }
            }
            @keyframes khatmaPulse {
                0%,100% { box-shadow: 0 0 10px rgba(212,175,55,0.15), 0 0 0 0   rgba(212,175,55,0.25); }
                50%      { box-shadow: 0 0 22px rgba(212,175,55,0.35), 0 0 0 5px rgba(212,175,55,0);  }
            }
            @keyframes shineSweep {
                0%   { left:-100%; }
                50%,100% { left:150%; }
            }
        `;
document.head.appendChild(notifStyle);

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    setTimeout(initFirebaseNotifications, 2500);
});

// Hide Loader on load
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});



