// Valeurs moyennes initiales
const valeursMoyennes = {
  fruits: 3, laitiers: 2, feculents: 1, sucres: 2, graisses: 2, petitdej: 4,
  sport: 2, sommeil: 7, drogues: 0, ecran: 4, climat: 6, famille: 6, estime: 5, mental: 6,
  participation: 5, frequentations: 6, etudes: 1,
};

// Traductions
const translations = {
  fr: {
    "Alimentation": "Alimentation",
    "Exemples de menus équilibrés 🍽️": "Exemples de menus équilibrés 🍽️",
    "Fruits & légumes/jour :": "Fruits & légumes/jour :",
    "Produits laitiers/jour :": "Produits laitiers/jour :",
    "Féculents complets/jour :": "Féculents complets/jour :",
    "Sucres rapides/jour :": "Sucres rapides/jour :",
    "Graisses saturées/jour :": "Graisses saturées/jour :",
    "Petit-déjeuner équilibré/semaine :": "Petit-déjeuner équilibré/semaine :",
    "Hygiène de vie": "Hygiène de vie",
    "Activité sportive/semaine :": "Activité sportive/semaine :",
    "Heures de sommeil/nuits :": "Heures de sommeil/nuits :",
    "Consommation de cannabis :": "Consommation de cannabis :",
    "Temps sur écran/téléphone :": "Temps sur écran/téléphone :",
    "Facteurs sociaux & psychologiques": "Facteurs sociaux & psychologiques",
    "Climat de la classe :": "Climat de la classe :",
    "Soutien familial :": "Soutien familial :",
    "Estime de soi scolaire :": "Estime de soi scolaire :",
    "Santé mentale / bien-être :": "Santé mentale / bien-être :",
    "Participation en classe :": "Participation en classe :",
    "Fréquentations positives :": "Fréquentations positives :",
    "Poursuite d'études": "Poursuite d'études",
    "Niveau d’études après le bac :": "Niveau d’études après le bac :",
    "Impact sur vos résultats": "Impact sur vos résultats",
    "Notes scolaires": "Notes scolaires",
    "Salaire futur estimé": "Salaire futur estimé",
    "Sources scientifiques": "Sources scientifiques"
  },
  en: {
    "Alimentation": "Nutrition",
    "Exemples de menus équilibrés 🍽️": "Sample balanced menus 🍽️",
    "Fruits & légumes/jour :": "Fruits & vegetables/day:",
    "Produits laitiers/jour :": "Dairy products/day:",
    "Féculents complets/jour :": "Whole grains/day:",
    "Sucres rapides/jour :": "Fast sugars/day:",
    "Graisses saturées/jour :": "Saturated fats/day:",
    "Petit-déjeuner équilibré/semaine :": "Balanced breakfast/week:",
    "Hygiène de vie": "Lifestyle",
    "Activité sportive/semaine :": "Physical activity/week:",
    "Heures de sommeil/nuits :": "Sleep hours/night:",
    "Consommation de cannabis :": "Cannabis use:",
    "Temps sur écran/téléphone :": "Screen/phone time:",
    "Facteurs sociaux & psychologiques": "Social & psychological factors",
    "Climat de la classe :": "Classroom climate:",
    "Soutien familial :": "Family support:",
    "Estime de soi scolaire :": "Academic self-esteem:",
    "Santé mentale / bien-être :": "Mental health / well-being:",
    "Participation en classe :": "Class participation:",
    "Fréquentations positives :": "Positive friendships:",
    "Niveau d’études après le bac :": "Education level after high school:",
    "Impact sur vos résultats": "Impact on your results",
    "Notes scolaires": "Academic grades",
    "Salaire futur estimé": "Estimated future salary",
    "Sources scientifiques": "Scientific sources"
  }
};

// Tooltips FR/EN
const tooltips = {
  fr: {
    fruits: `<b>Fruits & légumes</b> = aliments végétaux frais ou cuits (hors jus industriels).<br><u>Exemples</u> : pomme, banane, salade, carottes, haricots verts, poêlée de légumes, compote sans sucre ajouté.<br><i>Consommer 5 à 7 portions/jour améliore la concentration et les résultats scolaires (+15%).</i><br><a href="https://www.who.int/fr/news-room/fact-sheets/detail/healthy-diet" target="_blank">OMS - Alimentation saine</a>`,
    laitiers: `<b>Produits laitiers</b> = lait, yaourt, fromage, fromage blanc.<br><u>Exemples</u> : verre de lait, yaourt nature, emmental, fromage frais.<br><i>Apportent calcium et protéines, favorisent le développement cognitif.</i><br><a href="https://www.santepubliquefrance.fr/content/download/35744/683783" target="_blank">Santé publique France - Recommandations sur l'alimentation (2019)</a>`,
    feculents: `<b>Féculents complets</b> = céréales riches en fibres, non raffinées.<br><u>Exemples</u> : pain complet, riz complet, pâtes complètes, quinoa, flocons d’avoine.<br><i>Fournissent une énergie durable, essentielle à la mémoire et à la concentration.</i><br><a href="https://www.inserm.fr/dossier/alimentation-cerebrale/" target="_blank">Inserm, Dossier Alimentation cérébrale</a>`,
    sucres: `<b>Sucres rapides</b> = aliments à index glycémique élevé, sucrés ou très raffinés.<br><u>Exemples</u> : sodas, jus de fruits industriels, bonbons, viennoiseries, céréales sucrées, pain blanc, biscuits.<br><i>En excès, surtout au petit-déjeuner, ils provoquent des coups de fatigue et nuisent à la concentration.</i><br><a href="https://www.who.int/fr/news-room/fact-sheets/detail/healthy-diet" target="_blank">OMS - Alimentation saine (Sucres)</a>`,
    graisses: `<b>Graisses saturées</b> = graisses animales ou industrielles.<br><u>Exemples</u> : beurre, crème, charcuterie, fromage gras, viennoiseries, frites, chips, plats industriels.<br><i>En excès, elles sont associées à de moins bons résultats scolaires et à des problèmes de santé.</i><br><a href="https://www.who.int/fr/news-room/fact-sheets/detail/healthy-diet" target="_blank">OMS - Alimentation saine (Graisses)</a>`,
    petitdej: `<b>Petit-déjeuner équilibré</b> = fruit, produit laitier, féculent complet, boisson, peu de sucre.<br><u>Exemple</u> : pain complet + fromage blanc + pomme + eau ou thé.<br><i>Améliore la mémoire et la réussite scolaire.</i><br><a href="https://www.pharmacie-homeopathie.com/fr/news/pourquoi-le-petit-dejeuner-augmente-la-reussite-scolaire-a111.html" target="_blank">Pharmacie-Homéopathie.com - Pourquoi le petit-déjeuner augmente la réussite scolaire ?</a>`,
    sport: `Pratiquer une activité physique régulière augmente la réussite scolaire et le salaire futur.<br><a href="https://www.polytechnique-insights.com/tribunes/societe/baisse-des-performances-scolaires-lactivite-physique-a-la-rescousse/" target="_blank">Polytechnique Insights - Baisse des notes : l'activité physique à la rescousse ?</a><br><a href="https://www.reseau-canope.fr/fileadmin/user_upload/Projets/conseil_scientifique_education_nationale/Note_CSEN_2022_06.pdf" target="_blank">Note du CSEN - Activité physique et performances scolaires (PDF)</a>`,
    sommeil: `Dormir 8h/nuits optimise la concentration et la mémoire.<br><a href="https://presse.inserm.fr/le-manque-de-sommeil-altere-le-cerveau-des-ados/27478/" target="_blank">Inserm - Le manque de sommeil altère le cerveau des ados (2017)</a><br><a href="https://uqo.ca/biblio/le-sommeil-comme-facteur-reussite-scolaire" target="_blank">UQO - Le sommeil comme facteur de réussite scolaire</a><br><a href="https://www.reseau-canope.fr/fileadmin/user_upload/Projets/conseil_scientifique_education_nationale/CSEN_Synthese_Mieux_dormir_pour_mieux_apprendre_WEB.pdf" target="_blank">Réseau Canopé - Mieux dormir pour mieux apprendre (PDF)</a>`,
    drogues: `La consommation régulière de cannabis réduit les chances de réussite scolaire et diminue le salaire futur.<br><a href="https://presse.inserm.fr/wp-content/uploads/2017/01/2001_11_22_CP_CannabisVsSante.pdf" target="_blank">Inserm - Cannabis et santé (PDF)</a>`,
    ecran: `<b>Temps sur écran/téléphone</b> = temps passé sur smartphone, tablette, ordinateur.<br><u>Exemples</u> : réseaux sociaux, vidéos, jeux, navigation web.<br><i>Un usage excessif des écrans (notamment du smartphone) a un impact négatif sur l'attention, le sommeil, la santé mentale et les résultats scolaires. La commission "Enfants et écrans" recommande de limiter fortement l'accès au téléphone portable avant 11 ans.</i><br><a href="https://education.newstank.fr/article/view/330555/usage-ecrans-reussite-scolaire-dit-recherche-internationale-romuald-normand.html" target="_blank">News Tank Éducation - Usage écrans et réussite scolaire</a><br><a href="https://www.elysee.fr/admin/upload/default/0001/16/fbec6abe9d9cc1bff3043d87b9f7951e62779b09.pdf" target="_blank">Rapport officiel de la commission "Enfants et écrans" (PDF)</a>`,
    climat: `Un bon climat de classe (entraide, respect) favorise la réussite scolaire et le bien-être.<br><a href="https://www.cnesco.fr/wp-content/uploads/2017/10/170929_performances.pdf" target="_blank">CNESCO, Climat scolaire et performances des élèves (2017, PDF)</a>`,
    famille: `Un accompagnement familial régulier (aide aux devoirs, encouragements) est corrélé à de meilleurs résultats. La recherche montre une relation positive entre la participation parentale et la réussite scolaire des élèves. Le soutien parental a un effet tangible sur la persévérance et le rendement scolaire.<br><a href="https://www.erudit.org/fr/revues/ncre/2009-v12-n2-ncre0744/1017469ar.pdf" target="_blank">Érudit - Influence parentale sur le rendement scolaire</a><br><a href="https://learningportal.iiep.unesco.org/fr/fiches-pratiques/ameliorer-les-apprentissages/soutien-parental-a-lapprentissage" target="_blank">UNESCO - Soutien parental à l’apprentissage</a>`,
    estime: `Plus un élève croit en ses capacités, plus il a de chances de réussir.<br><a href="https://www.education.gouv.fr/media/116467/download" target="_blank">Ministère de l'Éducation nationale - L'estime de soi, une ressource pour l'apprentissage</a>`,
    mental: `Un bon équilibre psychologique améliore la concentration et les résultats scolaires.<br><a href="https://www.inserm.fr/actualite/sante-mentale-adolescents/" target="_blank">Inserm, Santé mentale des adolescents : les clés pour comprendre et agir (2023)</a>`,
    participation: `Les élèves qui participent activement en classe obtiennent de meilleurs résultats.<br><a href="https://www.oecd.org/fr/education/EDU_pisa2015_fiche_fr.pdf" target="_blank">OCDE, PISA 2015 : Les élèves les plus performants (2016, PDF)</a>`,
    frequentations: `Être entouré d'amis positifs et motivés favorise la réussite scolaire et réduit le risque de décrochage.<br><a href="https://www.inserm.fr/actualite/amis-adolescence/" target="_blank">Inserm, L'amitié à l'adolescence : un facteur protecteur (2022)</a>`,
    etudes: `<b>Poursuite d’études</b> = niveau de diplôme atteint après le bac.<br><u>Exemples</u> : 0 = arrêt après le bac, 1 = Bac+2 (BTS, DUT), 2 = Bac+3 (Licence), 3 = Bac+5 (Master, école d’ingénieur), 4 = Bac+8 (Doctorat).<br><i>Plus le niveau d’études est élevé, plus le salaire moyen augmente : un Bac+5 gagne en moyenne 1,8 fois plus qu’un bachelier (INSEE 2023, OCDE 2022).</i><br><a href="https://www.insee.fr/fr/statistiques/2381474" target="_blank">INSEE, Diplômes et salaires (2023)</a>`,
    note: `<b>Comment la note est-elle calculée ?</b><br>La note affichée est une estimation basée sur la moyenne réelle d’un lycéen (12,5/20 en Bretagne), ajustée selon vos comportements :<ul><li>Alimentation, sommeil, sport, hygiène de vie : chaque bon choix ajoute des points, chaque excès en retire.</li><li>Facteurs sociaux et psychologiques : climat de classe, soutien familial, estime de soi, etc.</li></ul><i>Ce n’est pas une note officielle, mais une modélisation pédagogique pour illustrer l’impact global de vos habitudes sur la réussite scolaire.</i>`,
    salaire: `<b>Comment le salaire est-il calculé ?</b><br>Le salaire affiché est une estimation pédagogique basée sur :<ul><li>Votre note scolaire : chaque point en plus augmente le salaire estimé.</li><li>Le niveau de diplôme atteint (poursuite d’études) : chaque niveau ajoute environ 300 € (source : INSEE, OCDE).</li><li>Hygiène de vie, soutien social, santé mentale : chaque facteur positif ajoute un bonus.</li><li>Consommation de drogues, mauvaise alimentation, temps d'écran : impact négatif.</li></ul><i>Ce n’est pas un calcul officiel, mais une illustration de l’impact des choix de vie sur l’insertion professionnelle.</i>`
  },
  en: {
    fruits: `<b>Fruits & vegetables</b> = fresh or cooked plant foods (except industrial juices).<br><u>Examples</u>: apple, banana, salad, carrots, green beans, mixed vegetables, unsweetened compote.<br><i>Eating 5 to 7 servings/day improves concentration and school performance (+15%).</i><br><a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" target="_blank">WHO - Healthy Diet</a>`,
    laitiers: `<b>Dairy products</b> = milk, yogurt, cheese, cottage cheese.<br><u>Examples</u>: glass of milk, plain yogurt, Emmental cheese, fresh cheese.<br><i>Provide calcium and protein, support cognitive development.</i><br><a href="https://www.who.int/news-room/fact-sheets/detail/adolescent-health" target="_blank">WHO - Adolescent health</a>`,
    feculents: `<b>Whole grains</b> = fiber-rich, unrefined grains.<br><u>Examples</u>: wholemeal bread, brown rice, whole wheat pasta, quinoa, oats.<br><i>Provide lasting energy, essential for memory and concentration.</i><br><a href="https://www.inserm.fr/en/dossier/brain-nutrition/" target="_blank">Inserm, Brain Nutrition</a>`,
    sucres: `<b>Fast sugars</b> = high glycemic index, sweet or very refined foods.<br><u>Examples</u>: sodas, industrial fruit juices, candies, pastries, sugary cereals, white bread, cookies.<br><i>Too much, especially at breakfast, causes fatigue and harms concentration.</i><br><a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" target="_blank">WHO - Healthy Diet (Sugars)</a>`,
    graisses: `<b>Saturated fats</b> = animal or industrial fats.<br><u>Examples</u>: butter, cream, cold cuts, fatty cheese, pastries, fries, chips, processed foods.<br><i>Too much is linked to lower school results and health issues.</i><br><a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" target="_blank">WHO - Healthy Diet (Fats)</a>`,
    petitdej: `<b>Balanced breakfast</b> = fruit, dairy, whole grain, drink, little sugar.<br><u>Example</u>: wholemeal bread + cottage cheese + kiwi + water or tea.<br><i>Améliore la mémoire et la réussite scolaire.</i><br><a href="https://family-action.org.uk/news-insight/impact-of-breakfast-on-learning-in-children/" target="_blank">Family Action - The impact of breakfast on learning in children</a><br><a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.700989/full" target="_blank">Frontiers - Breakfast Consumption and Academic Achievement Among Chinese Adolescents: A Moderated Mediation Model</a>`,
    sport: `Regular physical activity increases academic achievement and future salary.<br><a href="https://www.cdc.gov/healthyschools/physicalactivity/facts.htm" target="_blank">CDC - Physical Activity Facts</a><br><a href="https://www.ncbi.nlm.nih.gov/books/NBK201501/" target="_blank">NCBI - Physical Activity, Fitness, and Physical Education: Effects on Academic Performance (2012)</a>`,
    sommeil: `Dormir 8h/nuits optimise la concentration et la mémoire.<br><a href="https://presse.inserm.fr/le-manque-de-sommeil-altere-le-cerveau-des-ados/27478/" target="_blank">Inserm - Le manque de sommeil altère le cerveau des ados (2017)</a><br><a href="https://uqo.ca/biblio/le-sommeil-comme-facteur-reussite-scolaire" target="_blank">UQO - Le sommeil comme facteur de réussite scolaire</a><br><a href="https://www.reseau-canope.fr/fileadmin/user_upload/Projets/conseil_scientifique_education_nationale/CSEN_Synthese_Mieux_dormir_pour_mieux_apprendre_WEB.pdf" target="_blank">Réseau Canopé - Mieux dormir pour mieux apprendre (PDF)</a>`,
    drogues: `Regular cannabis use reduces the chance of getting the baccalaureate by 17% and lowers future salary.<br><a href="https://www.drugabuse.gov/publications/research-reports/marijuana/what-are-marijuanas-effects-school-work-and-social-life" target="_blank">NIDA - What are marijuana's effects on school, work, and social life?</a>`,
    ecran: `<b>Temps sur écran/téléphone</b> = time spent on smartphone, tablet, computer.<br><u>Examples</u> : social networks, videos, games, web Browse.<br><i>Excessive screen time (especially smartphone use) negatively impacts attention, sleep, mental health, and academic results. The "Children and Screens" commission recommends strongly limiting mobile phone access before age 11.</i><br><a href="https://school-education.ec.europa.eu/en/discover/publications/neset-report-screen-time-and-educational-outcomes" target="_blank">NESET Report - Screen time and educational outcomes (2024)</a><br><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8900769/" target="_blank">NCBI - Screen Time and Academic Performance in Adolescents: A Systematic Review (2022)</a>`,
    climat: `A good classroom climate (help, respect) promotes academic success and well-being.<br><a href="https://www.oecd.org/education/pisa-2015-results-volume-iii-student-well-being-9789264273856-en.htm" target="_blank">OECD, PISA 2015 Results (Volume III): Student Well-Being (2017)</a>`,
    famille: `Regular family support (help with homework, encouragement) is linked to better results. Research shows a positive relationship between parental involvement and student academic success. Parental support has a tangible effect on perseverance and academic performance.<br><a href="https://www.erudit.org/fr/revues/ncre/2009-v12-n2-ncre0744/1017469ar.pdf" target="_blank">Érudit - Parental influence on academic performance</a><br><a href="https://learningportal.iiep.unesco.org/fr/fiches-pratiques/ameliorer-les-apprentissages/soutien-parental-a-lapprentissage" target="_blank">UNESCO - Parental support for learning</a>`,
    estime: `The more a student believes in their abilities, the more likely they are to succeed.<br><a href="https://www.education.gouv.fr/media/116467/download" target="_blank">French Ministry of Education - Self-esteem, a resource for learning</a>`,
    mental: `Good psychological balance improves concentration and school results.<br><a href="https://www.inserm.fr/en/actualite/mental-health-adolescents/" target="_blank">Inserm – Mental health of adolescents: keys to understanding and acting (2023)</a>`,
    participation: `Students who participate actively in class get better results.<br><a href="https://www.oecd-ilibrary.org/education/pisa-2015-results-volume-iii_9789264273856-en" target="_blank">OECD – PISA 2015 Results (Volume III): Student Well-Being (2017)</a>`,
    frequentations: `Being surrounded by positive, motivated friends helps academic success and reduces dropout risk.<br><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7950290/" target="_blank">NCBI - The Influence of Peer Relationships on Academic Achievement: A Systematic Review (2021)</a>`,
    etudes: `<b>Further studies</b> = degree level after high school.<br><u>Examples</u>: 0 = stop after high school, 1 = Bac+2 (BTS, DUT), 2 = Bac+3 (Bachelor), 3 = Bac+5 (Master, engineering school), 4 = Bac+8 (PhD).<br><i>The higher the degree, the higher the average salary: a Bac+5 earns on average 1.8 times more than a high school graduate (INSEE 2023, OCDE 2022).</i><br><a href="https://www.insee.fr/en/statistiques/2381474" target="_blank">INSEE, Diplomas and salaries (2023)</a>`,
    note: `<b>How is the grade calculated?</b><br>The displayed grade is an estimate based on the real average of a high school student (12,5/20 en Bretagne), adjusted according to your behaviors:<ul><li>Nutrition, sleep, sport, lifestyle: each good choice adds points, each excess removes some.</li><li>Facteurs sociaux et psychologiques : climat de classe, soutien familial, estime de soi, etc.</li></ul><i>This is not an official grade, but a pedagogical model to illustrate the overall impact of your habits on academic success.</i>`,
    salaire: `<b>How is the salary calculated?</b><br>The displayed salary is a pedagogical estimate based on:<ul><li>Your grade: each extra point increases the estimated salary.</li><li>Degree level: each level adds about €300 (source: INSEE, OECD).</li><li>Lifestyle, social support, mental health: each positive factor adds a bonus.</li><li>Drug use, poor nutrition, screen time: negative impact.</li></ul><i>This is not an official calculation, but an illustration of the impact of life choices on professional integration.</i>`
  }
};

// Menus équilibrés
const menus = {
  fr: `<h3>Exemples de menus équilibrés</h3>
      <b>Petit-déjeuner</b> :<br>
      • Pain complet + fromage blanc + kiwi + thé ou eau<br>
      • Flocons d’avoine + lait + banane + noix<br><br>
      <b>Déjeuner</b> :<br>
      • Salade de carottes râpées + riz complet + filet de poulet + haricots verts + yaourt nature + pomme<br>
      • Lentilles + œuf dur + tomates + pain complet + fruit<br><br>
      <b>Dîner</b> :<br>
      • Soupe de légumes + poisson + pommes de terre vapeur + fromage + compote sans sucre<br>
      • Omelette aux légumes + salade + riz complet + yaourt nature + poire<br><br>
      <i>Astuce : évite les sodas, les plats industriels, les biscuits et les viennoiseries au quotidien !</i>`,
  en: `<h3>Sample balanced menus</h3>
      <b>Breakfast</b>:<br>
      • Wholemeal bread + cottage cheese + kiwi + water or tea<br>
      • Oat flakes + milk + banana + nuts<br><br>
      <b>Lunch</b>:<br>
      • Grated carrot salad + brown rice + chicken fillet + green beans + plain yogurt + apple<br>
      • Lentilles + hard-boiled egg + tomatoes + wholemeal bread + fruit<br><br>
      <b>Dinner</b>:<br>
      • Vegetable soup + fish + steamed potatoes + cheese + unsweetened compote<br>
      • Vegetable omelet + salad + brown rice + plain yogurt + pear<br><br>
      <i>Tip: avoid sodas, processed foods, cookies and pastries daily!</i>`
};

// Sources scientifiques
const sourcesList = {
  fr: `
    <h3>Sources scientifiques</h3>
    <ul>
      <li><a href="https://www.who.int/fr/news-room/fact-sheets/detail/healthy-diet" target="_blank">OMS - Alimentation saine</a></li>
      <li><a href="https://www.santepubliquefrance.fr/content/download/35744/683783" target="_blank">Santé publique France - Recommandations sur l'alimentation, l'activité physique et la sédentarité pour les adultes (2019)</a></li>
      <li><a href="https://www.inserm.fr/dossier/alimentation-cerebrale/" target="_blank">Inserm – Dossier Alimentation cérébrale</a></li>
      <li><a href="https://www.pharmacie-homeopathie.com/fr/news/pourquoi-le-petit-dejeuner-augmente-la-reussite-scolaire-a111.html" target="_blank">Pharmacie-Homéopathie.com - Pourquoi le petit-déjeuner augmente la réussite scolaire ?</a></li>
      <li><a href="https://www.polytechnique-insights.com/tribunes/societe/baisse-des-performances-scolaires-lactivite-physique-a-la-rescousse/" target="_blank">Polytechnique Insights - Baisse des notes : l'activité physique à la rescousse ?</a></li>
      <li><a href="https://www.reseau-canope.fr/fileadmin/user_upload/Projets/conseil_scientifique_education_nationale/Note_CSEN_2022_06.pdf" target="_blank">Note du CSEN - Activité physique et performances scolaires (PDF)</a></li>
      <li><a href="https://presse.inserm.fr/le-manque-de-sommeil-altere-le-cerveau-des-ados/27478/" target="_blank">Inserm - Le manque de sommeil altère le cerveau des ados (2017)</a></li>
      <li><a href="https://uqo.ca/biblio/le-sommeil-comme-facteur-reussite-scolaire" target="_blank">Université du Québec en Outaouais - Le sommeil comme facteur de réussite scolaire</a></li>
      <li><a href="https://www.reseau-canope.fr/fileadmin/user_upload/Projets/conseil_scientifique_education_nationale/CSEN_Synthese_Mieux_dormir_pour_mieux_apprendre_WEB.pdf" target="_blank">Réseau Canopé - Mieux dormir pour mieux apprendre (PDF)</a></li>
      <li><a href="https://presse.inserm.fr/wp-content/uploads/2017/01/2001_11_22_CP_CannabisVsSante.pdf" target="_blank">Inserm - Cannabis et santé (PDF)</a></li>
      <li><a href="https://education.newstank.fr/article/view/330555/usage-ecrans-reussite-scolaire-dit-recherche-internationale-romuald-normand.html" target="_blank">News Tank Éducation - Synthèse de la recherche internationale sur l'usage des écrans et la réussite scolaire</a></li>
      <li><a href="https://www.elysee.fr/admin/upload/default/0001/16/fbec6abe9d9cc1bff3043d87b9f7951e62779b09.pdf" target="_blank">Rapport officiel de la commission "Enfants et écrans" (Élysée, PDF)</a></li>
      <li><a href="https://etudiant.lefigaro.fr/vos-etudes/magazine/40258-ecran-ecole/" target="_blank">Le Figaro Étudiant - L'écran à l'école</a></li>
      <li><a href="https://datanews.levif.be/actualite/lutilisation-intensive-du-smartphone-provoque-lechec-scolaire/" target="_blank">DataNews Le Vif - L’utilisation intensive du smartphone provoque l’échec scolaire</a></li>
      <li><a href="https://www.mysherpa.be/fr/nos-conseils/ecrans-jeux-video-et-scolarite/" target="_blank">My Sherpa - Écrans, jeux vidéo et scolarité</a></li>
      <li><a href="https://www.cnesco.fr/wp-content/uploads/2017/10/170929_performances.pdf" target="_blank">CNESCO – Climat scolaire et performances des élèves (2017, PDF)</a></li>
      <li><a href="https://www.rvpaternite.org/wp-content/uploads/2019/09/roy_jacques.pdf" target="_blank">Observatoire Jeunes et Société - Soutien parental et réussite</a></li>
      <li><a href="https://www.erudit.org/fr/revues/ncre/2009-v12-n2-ncre0744/1017469ar.pdf" target="_blank">Érudit - Influence parentale sur le rendement scolaire</a></li>
      <li><a href="https://www.education.gouv.fr/media/19733/download" target="_blank">Ministère de l’Éducation nationale français - Implication des parents dans la réussite à l’école : éclairages internationaux</a></li>
      <li><a href="https://learningportal.iiep.unesco.org/fr/fiches-pratiques/ameliorer-les-apprentissages/soutien-parental-a-lapprentissage" target="_blank">UNESCO - Soutien parental à l’apprentissage</a></li>
      <li><a href="https://www.education.gouv.fr/media/116467/download" target="_blank">Ministère de l'Éducation nationale - L'estime de soi, une ressource pour l'apprentissage</a></li>
      <li><a href="https://www.inserm.fr/actualite/sante-mentale-adolescents/" target="_blank">Inserm – Santé mentale des adolescents : les clés pour comprendre et agir (2023)</a></li>
      <li><a href="https://www.oecd.org/fr/education/EDU_pisa2015_fiche_fr.pdf" target="_blank">OCDE – PISA 2015 : Les élèves les plus performants (2016, PDF)</a></li>
      <li><a href="https://www.inserm.fr/actualite/amis-adolescence/" target="_blank">Inserm – L'amitié à l'adolescence : un facteur protecteur (2022)</a></li>
      <li><a href="https://www.insee.fr/fr/statistiques/2381474" target="_blank">INSEE – Diplômes et salaires (2023)</a></li>
      <li><a href="https://www.education.gouv.fr/les-diplomes-et-les-salaires-323491" target="_blank">Ministère de l'Éducation nationale - Les diplômes et les salaires (2024)</a></li>
    </ul>
  `,
  en: `
    <h3>Scientific sources</h3>
    <ul>
      <li><a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" target="_blank">WHO - Healthy Diet</a></li>
      <li><a href="https://www.who.int/news-room/fact-sheets/detail/adolescent-health" target="_blank">WHO - Adolescent health</a></li>
      <li><a href="https://www.inserm.fr/en/dossier/brain-nutrition/" target="_blank">Inserm – Brain Nutrition</a></li>
      <li><a href="https://family-action.org.uk/news-insight/impact-of-breakfast-on-learning-in-children/" target="_blank">Family Action - The impact of breakfast on learning in children</a></li>
      <li><a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.700989/full" target="_blank">Frontiers - Breakfast Consumption and Academic Achievement Among Chinese Adolescents: A Moderated Mediation Model</a></li>
      <li><a href="https://www.cdc.gov/mmwr/volumes/73/su/su7304a10.htm" target="_blank">CDC - Skipping Breakfast and Academic Grades, Persistent Feelings of Sadness or Hopelessness, and School Connectedness Among High School Students (2023)</a></li>
      <li><a href="https://www.cdc.gov/healthyschools/physicalactivity/facts.htm" target="_blank">CDC - Physical Activity Facts</a></li>
      <li><a href="https://www.ncbi.nlm.nih.gov/books/NBK201501/" target="_blank">NCBI - Physical Activity, Fitness, and Physical Education: Effects on Academic Performance (2012)</a></li>
      <li><a href="https://presse.inserm.fr/en/lack-of-sleep-alter adolescent-brains/27478/" target="_blank">Inserm - Lack of sleep alters adolescent brains (2017)</a></li>
      <li><a href="https://longevity.stanford.edu/lifestyle/2024/01/10/sleep-and-academic-excellence-a-deeper-look/" target="_blank">Stanford Center on Longevity - Sleep and Academic Excellence: A Deeper Look</a></li>
      <li><a href="https://www.pnas.org/doi/10.1073/pnas.2209123120" target="_blank">PNAS - Nightly sleep duration predicts grade point average in the first year of college</a></li>
      <li><a href="https://www.drugabuse.gov/publications/research-reports/marijuana/what-are-marijuanas-effects-school-work-and-social-life" target="_blank">NIDA - What are marijuana's effects on school, work, and social life?</a></li>
      <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8309192/" target="_blank">NCBI - Cannabis use and academic achievement in adolescents: a systematic review (2021)</a></li>
      <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9345241/" target="_blank">NCBI - Long-term associations of adolescent cannabis use with educational attainment, occupational success, and mental health (2022)</a></li>
      <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10784918/" target="_blank">NCBI - Long-term impact of cannabis use on educational attainment and socioeconomic status: A systematic review and meta-analysis (2024)</a></li>
      <li><a href="https://school-education.ec.europa.eu/en/discover/publications/neset-report-screen-time-and-educational-outcomes" target="_blank">NESET Report - Screen time and educational outcomes (2024)</a></li>
      <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8900769/" target="_blank">NCBI - Screen Time and Academic Performance in Adolescents: A Systematic Review (2022)</a></li>
      <li><a href="https://www.unicef.org/parenting/managing-your-childs-screen-time" target="_blank">UNICEF - Managing your child's screen time (2024)</a></li>
      <li><a href="https://www.oecd.org/education/pisa-2015-results-volume-iii-student-well-being-9789264273856-en.htm" target="_blank">OECD, PISA 2015 Results (Volume III): Student Well-Being (2017)</a></li>
      <li><a href="https://www.rvpaternite.org/wp-content/uploads/2019/09/roy_jacques.pdf" target="_blank">Observatoire Jeunes et Société - Parental support and success</a></li>
      <li><a href="https://www.erudit.org/fr/revues/ncre/2009-v12-n2-ncre0744/1017469ar.pdf" target="_blank">Érudit - Parental influence on academic performance</a></li>
      <li><a href="https://www.education.gouv.fr/media/19733/download" target="_blank">French Ministry of Education - Parental involvement in school success: international insights</a></li>
      <li><a href="https://learningportal.iiep.unesco.org/fr/fiches-pratiques/ameliorer-les-apprentissages/soutien-parental-a-lapprentissage" target="_blank">UNESCO - Parental support for learning</a></li>
      <li><a href="https://www.education.gouv.fr/media/116467/download" target="_blank">French Ministry of Education - Self-esteem, a resource for learning</a></li>
      <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6642193/" target="_blank">NCBI - The Relationship between Self-Esteem and Academic Performance in College Students (2019)</a></li>
      <li><a href="https://www.inserm.fr/en/actualite/mental-health-adolescents/" target="_blank">Inserm – Mental health of adolescents: keys to understanding and acting (2023)</a></li>
      <li><a href="https://www.oecd-ilibrary.org/education/pisa-2015-results-volume-iii_9789264273856-en" target="_blank">OECD – PISA 2015 Results (Volume III): Student Well-Being (2017)</a></li>
      <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7950290/" target="_blank">NCBI - The Influence of Peer Relationships on Academic Achievement: A Systematic Review (2021)</a></li>
      <li><a href="https://www.insee.fr/en/statistiques/2381474" target="_blank">INSEE – Diplomas and salaries (2023)</a></li>
      <li><a href="https://www.oecd.org/education/education-at-a-glance-2023_a5198006-en.htm" target="_blank">OECD - Education at a Glance 2023 (Earnings by educational attainment)</a></li>
    </ul>
  `
};

// --- Suite : interactions, calculs, traduction, modales, etc. ---


function showInfo(id, event) {
  event.stopPropagation();
  // Cache tous les autres tooltips
  document.querySelectorAll('.info-tooltip').forEach(div => {
    if (div.id !== id) { // Ne cache pas le tooltip que nous sommes sur le point d'afficher
      div.style.display = 'none';
    }
  });
  // Cache aussi les tooltips de résultats
  document.querySelectorAll('.results-info-tooltip').forEach(div => div.style.display = 'none');

  const tooltip = document.getElementById(id);
  if (tooltip) {
    tooltip.style.display = (tooltip.style.display === 'block') ? 'none' : 'block';
  }
}

document.addEventListener('click', (event) => {
  // Cacher tous les tooltips si le clic n'est pas sur un bouton info nor à l'intérieur d'un tooltip
  if (!event.target.closest('.info-btn') && !event.target.closest('.info-tooltip') &&
      !event.target.closest('.results-info-btn') && !event.target.closest('.results-info-tooltip')) {
    document.querySelectorAll('.info-tooltip').forEach(div => div.style.display = 'none');
    document.querySelectorAll('.results-info-tooltip').forEach(div => div.style.display = 'none');
  }
});


function showResultsInfo(id, event) {
  event.stopPropagation();
  // Cache tous les autres tooltips de résultats
  document.querySelectorAll('.results-info-tooltip').forEach(div => {
    if (div.id !== id) { // Ne cache pas le tooltip que nous sommes sur le point d'afficher
      div.style.display = 'none';
    }
  });
  // Cache aussi les tooltips des sliders
  document.querySelectorAll('.info-tooltip').forEach(div => div.style.display = 'none');

  const tooltip = document.getElementById(id);
  if (tooltip) {
    tooltip.style.display = 'block';
  }
}
function hideResultsInfo(id) {
  const tooltip = document.getElementById(id);
  if (tooltip) tooltip.style.display = 'none';
}

function showMenuExamples() {
  document.getElementById('menu-modal').style.display = 'flex';
}
function closeMenuExamples() {
  document.getElementById('menu-modal').style.display = 'none';
}

function showSourcesModal() {
  const lang = document.getElementById('en-btn').classList.contains('active') ? 'en' : 'fr';
  document.getElementById('sources-modal-inner').innerHTML = sourcesList[lang];
  document.getElementById('sources-modal').style.display = 'flex';
}
function closeSourcesModal() {
  document.getElementById('sources-modal').style.display = 'none';
}

// --- Calcul et affichage des résultats ---


function z(val, mean, std) {
  return (val - mean) / std;
}


function calculImpact() {
  const fruits = parseInt(document.getElementById('fruits').value);
  const lait = parseInt(document.getElementById('laitiers').value);
  const fec = parseInt(document.getElementById('feculents').value);
  const sucres = parseInt(document.getElementById('sucres').value);
  const gras = parseInt(document.getElementById('graisses').value);
  const petitdej = parseInt(document.getElementById('petitdej').value);
  const sport = parseInt(document.getElementById('sport').value);
  const sommeil = parseInt(document.getElementById('sommeil').value);
  const drogues = parseFloat(document.getElementById('drogues').value);
  const ecran = parseInt(document.getElementById('ecran').value);
  const climat = parseInt(document.getElementById('climat').value);
  const famille = parseInt(document.getElementById('famille').value);
  const estime = parseInt(document.getElementById('estime').value);
  const mental = parseInt(document.getElementById('mental').value);
  const participation = parseInt(document.getElementById('participation').value);
  const frequentations = parseInt(document.getElementById('frequentations').value);
  const etudes = parseInt(document.getElementById('etudes').value);


  document.getElementById('fruits-val').textContent = fruits + ' portion' + (fruits > 1 ? 's' : '');
  document.getElementById('laitiers-val').textContent = lait + ' produit' + (lait > 1 ? 's' : '');
  document.getElementById('feculents-val').textContent = fec + ' portion' + (fec > 1 ? 's' : '');
  document.getElementById('sucres-val').textContent = sucres + ' portion' + (sucres > 1 ? 's' : '');
  document.getElementById('graisses-val').textContent = gras + ' portion' + (gras > 1 ? 's' : '');
  document.getElementById('petitdej-val').textContent = petitdej + ' matin' + (petitdej > 1 ? 's' : '');
  document.getElementById('sport-val').textContent = sport + ' séance' + (sport > 1 ? 's' : '');
  document.getElementById('sommeil-val').textContent = sommeil + ' h';
  document.getElementById('drogues-val').textContent = drogues;
  document.getElementById('ecran-val').textContent = ecran + ' h';
  document.getElementById('climat-val').textContent = climat + '/10';
  document.getElementById('famille-val').textContent = famille + '/10';
  document.getElementById('estime-val').textContent = estime + '/10';
  document.getElementById('mental-val').textContent = mental + '/10';
  document.getElementById('participation-val').textContent = participation + '/10';
  document.getElementById('frequentations-val').textContent = frequentations + '/10';

  const niveauxEtudes = ['Bac', 'Bac +2', 'Bac +3', 'Bac +5', 'Bac +8'];
  document.getElementById('etudes-val').textContent = niveauxEtudes[etudes];

  let libelles = ['Jamais', 'Occasionnelle', 'Régulière'];
  document.getElementById('drogues-label').textContent = libelles[Math.round(drogues)];


  let note = 12.5;
  note += 0.5 * z(fruits, 3, 2);
  note += 0.3 * z(lait, 2, 1.5);
  note += 0.3 * z(fec, 1, 1.5);
  note -= 0.6 * z(sucres, 2, 1.5);
  note -= 0.5 * z(gras, 2, 1.5);
  note += 0.3 * z(petitdej, 4, 2);
  note += 0.8 * z(sport, 2, 1.5);
  note += 1.0 * z(sommeil, 7, 1.5);
  note -= 1.2 * z(drogues, 0.2, 0.7);
  note -= 0.8 * z(ecran, 4, 2);
  note += 0.4 * z(climat, 6, 2);
  note += 0.4 * z(famille, 6, 2);
  note += 0.4 * z(estime, 5, 2);
  note += 0.4 * z(mental, 6, 2);
  note += 0.4 * z(participation, 5, 2);
  note += 0.3 * z(frequentations, 6, 2);

  note = Math.max(8, Math.min(20, note.toFixed(1)));

  let salaire = 1400 + note * 60 + etudes * 300;
  salaire += 1.0 * z(sport, 2, 1.5) * 80;
  salaire += 0.3 * z(famille, 6, 2) * 30;
  salaire += 0.3 * z(estime, 5, 2) * 25;
  salaire += 0.3 * z(mental, 6, 2) * 25;
  salaire += 0.3 * z(frequentations, 6, 2) * 30;
  salaire -= 1.5 * z(drogues, 0.2, 0.7) * 300;
  salaire -= 0.4 * z(sucres, 2, 1.5) * 50;
  salaire -= 0.3 * z(gras, 2, 1.5) * 40;
  salaire -= 0.5 * z(ecran, 4, 2) * 60;

  document.getElementById('notes').textContent = note + '/20';
  document.getElementById('salaire').textContent = Math.max(1000, salaire.toFixed(0)) + '€';

  const percentile = estimerPositionNationale(note);

  document.getElementById('benchmark').textContent = `Tu fais mieux que ${percentile.toFixed(1)} % des élèves.`;
  

  // Calcul benchmark
  
}

// --- Traduction et initialisation ---

function setLang(lang) {
  document.getElementById('fr-btn').classList.toggle('active', lang === 'fr');
  document.getElementById('en-btn').classList.toggle('active', lang === 'en');
  document.querySelectorAll('[data-tr]').forEach(el => {
    const key = el.getAttribute('data-tr');
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  // Remplir les tooltips avec les bonnes langues
  for(const key in tooltips[lang]) {
    let el = document.querySelector(`[data-tr-tooltip="${key}"]`);
    if(el) el.innerHTML = tooltips[lang][key];
  }
  document.getElementById('note-info').innerHTML = tooltips[lang]['note'];
  document.getElementById('salaire-info').innerHTML = tooltips[lang]['salaire'];
  document.getElementById('menu-modal-inner').innerHTML = menus[lang];
  document.getElementById('sources-modal-inner').innerHTML = sourcesList[lang]; // Remplir la modale des sources
  calculImpact();
}

// --- Initialisation sliders et events ---

window.onload = function () {
  Object.entries(valeursMoyennes).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if(el) el.value = val;
  });
  setLang('fr'); // Initialise la langue et remplira les tooltips
  calculImpact();

  // Ajout des écouteurs sur tous les sliders
  Object.keys(valeursMoyennes).forEach(id => {
    const el = document.getElementById(id);
    if(el) el.addEventListener('input', calculImpact);
  });
};
  // Calcul du benchmark
  function normalCDF(x, mean, std) {
    return 0.5 * (1 + erf((x - mean) / (std * Math.sqrt(2))));
  }

  function erf(x) {
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;
    const sign = (x >= 0) ? 1 : -1;
    x = Math.abs(x);
    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return sign * y;
  }



function estimerPositionNationale(note) {
  if (note < 10) return (note / 10) * 13.7;
  if (note < 12) return 13.7 + ((note - 10) / 2) * (43.5 - 13.7);
  if (note < 14) return 43.5 + ((note - 12) / 2) * (68.4 - 43.5);
  if (note < 16) return 68.4 + ((note - 14) / 2) * (87.6 - 68.4);
  return 87.6 + ((note - 16) / 4) * (100 - 87.6);
}


