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
    "Heures de sommeil/nuit :": "Heures de sommeil/nuit :",
    "Consommation de cannabis :": "Consommation de cannabis :",
    "Temps sur écran/téléphone (hors devoirs) :": "Temps sur écran/téléphone (hors devoirs) :",
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
    "Heures de sommeil/nuit :": "Sleep hours/night:",
    "Consommation de cannabis :": "Cannabis use:",
    "Temps sur écran/téléphone (hors devoirs) :": "Screen/phone time (excluding homework):",
    "Facteurs sociaux & psychologiques": "Social & psychological factors",
    "Climat de la classe :": "Classroom climate:",
    "Soutien familial :": "Family support:",
    "Estime de soi scolaire :": "Academic self-esteem:",
    "Santé mentale / bien-être :": "Mental health / well-being:",
    "Participation en classe :": "Class participation:",
    "Fréquentations positives :": "Positive friendships:",
    "Poursuite d'études": "Further studies",
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
    fruits: `<b>Fruits & légumes</b> = aliments végétaux frais ou cuits (hors jus industriels).<br><u>Exemples</u> : pomme, banane, salade, carottes, haricots verts, poêlée de légumes, compote sans sucre ajouté.<br><i>Consommer 5 à 7 portions/jour améliore la concentration et les résultats scolaires (+15%).</i><br><a href="https://www.santepubliquefrance.fr/determinants-de-sante/nutrition-et-activite-physique/articles/consommation-de-fruits-et-legumes-en-france-resultats-de-l-enquete-nutrinet-sante-2021" target="_blank">Santé publique France, NutriNet-Santé 2021</a>`,
    laitiers: `<b>Produits laitiers</b> = lait, yaourt, fromage, fromage blanc.<br><u>Exemples</u> : verre de lait, yaourt nature, emmental, fromage frais.<br><i>Apportent calcium et protéines, favorisent le développement cognitif.</i><br><a href="https://www.anses.fr/fr/content/avis-et-rapports-de-lanses-sur-les-produits-laitiers" target="_blank">ANSES, 2022</a>`,
    feculents: `<b>Féculents complets</b> = céréales riches en fibres, non raffinées.<br><u>Exemples</u> : pain complet, riz complet, pâtes complètes, quinoa, flocons d’avoine.<br><i>Fournissent une énergie durable, essentielle à la mémoire et à la concentration.</i><br><a href="https://www.inserm.fr/dossier/alimentation-cerebrale/" target="_blank">Inserm, Dossier Alimentation cérébrale</a>`,
    sucres: `<b>Sucres rapides</b> = aliments à index glycémique élevé, sucrés ou très raffinés.<br><u>Exemples</u> : sodas, jus de fruits industriels, bonbons, viennoiseries, céréales sucrées, pain blanc, biscuits.<br><i>En excès, surtout au petit-déjeuner, ils provoquent des coups de fatigue et nuisent à la concentration.</i><br><a href="https://www.hsph.harvard.edu/nutritionsource/carbohydrates/carbohydrates-and-blood-sugar/" target="_blank">Harvard School of Public Health, 2021</a>`,
    graisses: `<b>Graisses saturées</b> = graisses animales ou industrielles.<br><u>Exemples</u> : beurre, crème, charcuterie, fromage gras, viennoiseries, frites, chips, plats industriels.<br><i>En excès, elles sont associées à de moins bons résultats scolaires et à des problèmes de santé.</i><br><a href="https://www.inserm.fr/actualite/cerveau-alimentation/" target="_blank">Inserm, 2020</a>`,
    petitdej: `<b>Petit-déjeuner équilibré</b> = fruit, produit laitier, féculent complet, boisson, peu de sucre.<br><u>Exemple</u> : pain complet + fromage blanc + pomme + eau ou thé.<br><i>Améliore la mémoire et la réussite scolaire.</i><br><a href="https://academic.oup.com/ajcn/article/109/5/1462/5475525" target="_blank">American Journal of Clinical Nutrition, 2019</a>`,
    sport: `Pratiquer une activité physique régulière augmente la réussite scolaire (+60%) et le salaire futur.<br><a href="https://injep.fr/publication/pratiques-sportives-et-reussite-scolaire/" target="_blank">INJEP, 2022</a>`,
    sommeil: `Dormir 8h/nuit optimise la concentration et la mémoire.<br><a href="https://www.inserm.fr/actualite/sommeil-adolescents/" target="_blank">Inserm, 2021</a>`,
    drogues: `La consommation régulière de cannabis réduit de 17% les chances d'obtenir le bac et diminue le salaire futur.<br><a href="https://www.ofdt.fr/BDD/publications/docs/eftxofls.pdf" target="_blank">OFDT, 2020</a>`,
    ecran: `<b>Temps sur écran/téléphone</b> = temps passé sur smartphone, tablette, ordinateur (hors devoirs).<br><u>Exemples</u> : réseaux sociaux, vidéos, jeux, navigation web.<br><i>Au-delà de 4h/jour, le temps d'écran est associé à une baisse des résultats scolaires, à des troubles du sommeil et à une augmentation du stress et de l'anxiété chez les adolescents.</i><br><a href="https://www.santepubliquefrance.fr/determinants-de-sante/sante-numerique/documents/article/temps-d-ecran-des-jeunes-en-france-en-2022" target="_blank">Santé Publique France, 2022</a><br><a href="https://www.inserm.fr/actualite/ecrans-et-sante-mentale-des-jeunes/" target="_blank">Inserm, 2023</a>`,
    climat: `Un bon climat de classe (entraide, respect) favorise la réussite scolaire et le bien-être.<br><a href="https://www.cnesco.fr/wp-content/uploads/2017/10/170929_performances.pdf" target="_blank">CNESCO, 2017</a>`,
    famille: `Un accompagnement familial régulier (aide aux devoirs, encouragements) est corrélé à de meilleurs résultats.<br><a href="https://www.education.gouv.fr/les-effets-du-soutien-parental-sur-la-reussite-scolaire-5890" target="_blank">Ministère de l'Éducation nationale, 2021</a>`,
    estime: `Plus un élève croit en ses capacités, plus il a de chances de réussir.<br><a href="https://www.cairn.info/revue-education-et-formations-2010-2-page-5.htm" target="_blank">Éducation & Formations, 2010</a>`,
    mental: `Un bon équilibre psychologique améliore la concentration et les résultats scolaires.<br><a href="https://www.inserm.fr/actualite/sante-mentale-adolescents/" target="_blank">Inserm, 2023</a>`,
    participation: `Les élèves qui participent activement en classe obtiennent de meilleurs résultats.<br><a href="https://www.oecd.org/fr/education/EDU_pisa2015_fiche_fr.pdf" target="_blank">OCDE, PISA 2015</a>`,
    frequentations: `Être entouré d'amis positifs et motivés favorise la réussite scolaire et réduit le risque de décrochage.<br><a href="https://www.inserm.fr/actualite/amis-adolescence/" target="_blank">Inserm, 2022</a>`,
    etudes: `<b>Poursuite d’études</b> = niveau de diplôme atteint après le bac.<br><u>Exemples</u> : 0 = arrêt après le bac, 1 = Bac+2 (BTS, DUT), 2 = Bac+3 (Licence), 3 = Bac+5 (Master, école d’ingénieur), 4 = Bac+8 (Doctorat).<br><i>Plus le niveau d’études est élevé, plus le salaire moyen augmente : un Bac+5 gagne en moyenne 1,8 fois plus qu’un bachelier (INSEE 2023, OCDE 2022).</i><br><a href="https://www.insee.fr/fr/statistiques/2381474" target="_blank">INSEE, Diplômes et salaires 2023</a>`,
    note: `<b>Comment la note est-elle calculée ?</b><br>La note affichée est une estimation basée sur la moyenne réelle d’un lycéen (12,5/20 en Bretagne), ajustée selon vos comportements :<ul><li>Alimentation, sommeil, sport, hygiène de vie : chaque bon choix ajoute des points, chaque excès en retire.</li><li>Facteurs sociaux et psychologiques : climat de classe, soutien familial, estime de soi, etc.</li></ul><i>Ce n’est pas une note officielle, mais une modélisation pédagogique pour illustrer l’impact global de vos habitudes sur la réussite scolaire.</i>`,
    salaire: `<b>Comment le salaire est-il calculé ?</b><br>Le salaire affiché est une estimation pédagogique basée sur :<ul><li>Votre note scolaire : chaque point en plus augmente le salaire estimé.</li><li>Le niveau de diplôme atteint (poursuite d’études) : chaque niveau ajoute environ 300 € (source : INSEE, OCDE).</li><li>Hygiène de vie, soutien social, santé mentale : chaque facteur positif ajoute un bonus.</li><li>Consommation de drogues, mauvaise alimentation, temps d'écran : impact négatif.</li></ul><i>Ce n’est pas un calcul officiel, mais une illustration de l’impact des choix de vie sur l’insertion professionnelle.</i>`
  },
  // ... (la suite des tooltips EN dans le prochain message)
};
tooltips.en = {
  fruits: `<b>Fruits & vegetables</b> = fresh or cooked plant foods (except industrial juices).<br><u>Examples</u>: apple, banana, salad, carrots, green beans, mixed vegetables, unsweetened compote.<br><i>Eating 5 to 7 servings/day improves concentration and school performance (+15%).</i><br><a href="https://www.santepubliquefrance.fr/determinants-de-sante/nutrition-et-activite-physique/articles/consommation-de-fruits-et-legumes-en-france-resultats-de-l-enquete-nutrinet-sante-2021" target="_blank">Santé publique France, NutriNet-Santé 2021</a>`,
  laitiers: `<b>Dairy products</b> = milk, yogurt, cheese, cottage cheese.<br><u>Examples</u>: glass of milk, plain yogurt, Emmental cheese, fresh cheese.<br><i>Provide calcium and protein, support cognitive development.</i><br><a href="https://www.anses.fr/fr/content/avis-et-rapports-de-lanses-sur-les-produits-laitiers" target="_blank">ANSES, 2022</a>`,
  feculents: `<b>Whole grains</b> = fiber-rich, unrefined grains.<br><u>Examples</u>: wholemeal bread, brown rice, whole wheat pasta, quinoa, oats.<br><i>Provide lasting energy, essential for memory and concentration.</i><br><a href="https://www.inserm.fr/dossier/alimentation-cerebrale/" target="_blank">Inserm, Brain Nutrition</a>`,
  sucres: `<b>Fast sugars</b> = high glycemic index, sweet or very refined foods.<br><u>Examples</u>: sodas, industrial fruit juices, candies, pastries, sugary cereals, white bread, cookies.<br><i>Too much, especially at breakfast, causes fatigue and harms concentration.</i><br><a href="https://www.hsph.harvard.edu/nutritionsource/carbohydrates/carbohydrates-and-blood-sugar/" target="_blank">Harvard School of Public Health, 2021</a>`,
  graisses: `<b>Saturated fats</b> = animal or industrial fats.<br><u>Examples</u>: butter, cream, cold cuts, fatty cheese, pastries, fries, chips, processed foods.<br><i>Too much is linked to lower school results and health issues.</i><br><a href="https://www.inserm.fr/actualite/cerveau-alimentation/" target="_blank">Inserm, 2020</a>`,
  petitdej: `<b>Balanced breakfast</b> = fruit, dairy, whole grain, drink, little sugar.<br><u>Example</u>: wholemeal bread + cottage cheese + apple + water or tea.<br><i>Improves memory and school success.</i><br><a href="https://academic.oup.com/ajcn/article/109/5/1462/5475525" target="_blank">American Journal of Clinical Nutrition, 2019</a>`,
  sport: `Regular physical activity increases academic achievement (+60%) and future salary.<br><a href="https://injep.fr/publication/pratiques-sportives-et-reussite-scolaire/" target="_blank">INJEP, 2022</a>`,
  sommeil: `Sleeping 8h/night optimizes concentration and memory.<br><a href="https://www.inserm.fr/actualite/sommeil-adolescents/" target="_blank">Inserm, 2021</a>`,
  drogues: `Regular cannabis use reduces the chance of getting the baccalaureate by 17% and lowers future salary.<br><a href="https://www.ofdt.fr/BDD/publications/docs/eftxofls.pdf" target="_blank">OFDT, 2020</a>`,
  ecran: `<b>Screen/phone time</b> = time spent on smartphone, tablet, computer (excluding homework).<br><u>Examples</u>: social networks, videos, games, web browsing.<br><i>Over 4h/day, screen time is linked to lower school results, sleep disorders, and increased stress and anxiety in teens.</i><br><a href="https://www.santepubliquefrance.fr/determinants-de-sante/sante-numerique/documents/article/temps-d-ecran-des-jeunes-en-france-en-2022" target="_blank">Santé Publique France, 2022</a><br><a href="https://www.inserm.fr/actualite/ecrans-et-sante-mentale-des-jeunes/" target="_blank">Inserm, 2023</a>`,
  climat: `A good classroom climate (help, respect) promotes academic success and well-being.<br><a href="https://www.cnesco.fr/wp-content/uploads/2017/10/170929_performances.pdf" target="_blank">CNESCO, 2017</a>`,
  famille: `Regular family support (help with homework, encouragement) is linked to better results.<br><a href="https://www.education.gouv.fr/les-effets-du-soutien-parental-sur-la-reussite-scolaire-5890" target="_blank">French Ministry of Education, 2021</a>`,
  estime: `The more a student believes in their abilities, the more likely they are to succeed.<br><a href="https://www.cairn.info/revue-education-et-formations-2010-2-page-5.htm" target="_blank">Éducation & Formations, 2010</a>`,
  mental: `Good psychological balance improves concentration and school results.<br><a href="https://www.inserm.fr/actualite/sante-mentale-adolescents/" target="_blank">Inserm, 2023</a>`,
  participation: `Students who participate actively in class get better results.<br><a href="https://www.oecd.org/fr/education/EDU_pisa2015_fiche_fr.pdf" target="_blank">OECD, PISA 2015</a>`,
  frequentations: `Being surrounded by positive, motivated friends helps academic success and reduces dropout risk.<br><a href="https://www.inserm.fr/actualite/amis-adolescence/" target="_blank">Inserm, 2022</a>`,
  etudes: `<b>Further studies</b> = degree level after high school.<br><u>Examples</u>: 0 = stop after high school, 1 = Bac+2 (BTS, DUT), 2 = Bac+3 (Bachelor), 3 = Bac+5 (Master, engineering school), 4 = Bac+8 (PhD).<br><i>The higher the degree, the higher the average salary: a Bac+5 earns on average 1.8 times more than a high school graduate (INSEE 2023, OECD 2022).</i><br><a href="https://www.insee.fr/fr/statistiques/2381474" target="_blank">INSEE, Diplomas and salaries 2023</a>`,
  note: `<b>How is the grade calculated?</b><br>The displayed grade is an estimate based on the real average of a high school student (12.5/20 in Brittany), adjusted according to your behaviors:<ul><li>Nutrition, sleep, sport, lifestyle: each good choice adds points, each excess removes some.</li><li>Social and psychological factors: classroom climate, family support, self-esteem, etc.</li></ul><i>This is not an official grade, but a pedagogical model to illustrate the overall impact of your habits on academic success.</i>`,
  salaire: `<b>How is the salary calculated?</b><br>The displayed salary is a pedagogical estimate based on:<ul><li>Your grade: each extra point increases the estimated salary.</li><li>Degree level: each level adds about €300 (source: INSEE, OECD).</li><li>Lifestyle, social support, mental health: each positive factor adds a bonus.</li><li>Drug use, poor nutrition, screen time: negative impact.</li></ul><i>This is not an official calculation, but an illustration of the impact of life choices on professional integration.</i>`
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
      • Wholemeal bread + cottage cheese + kiwi + tea or water<br>
      • Oat flakes + milk + banana + nuts<br><br>
      <b>Lunch</b>:<br>
      • Grated carrot salad + brown rice + chicken fillet + green beans + plain yogurt + apple<br>
      • Lentils + hard-boiled egg + tomatoes + wholemeal bread + fruit<br><br>
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
      <li><a href="https://stewdy.com/vie-etudiante/alimentation-et-performance-scolaire/" target="_blank">Stewdy – L’alimentation impacte-t-elle la performance scolaire ? (2024)</a></li>
      <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7002815/" target="_blank">NCBI – L'alimentation en milieu scolaire et la performance scolaire (2020)</a></li>
      <li><a href="https://www.unesco.org/fr/articles/education-lunesco-appelle-ameliorer-la-qualite-des-repas-scolaires" target="_blank">UNESCO – Améliorer la qualité des repas scolaires (2024)</a></li>
      <li><a href="https://schoolmealscoalition.org/sites/default/files/2024-06/Planet-Friendly-School-Meals-White-Paper-Executive-Summary_FR.pdf" target="_blank">School Meals Coalition – Repenser les systèmes alimentaires scolaires (2024, PDF)</a></li>
      <li><a href="https://www.cerin.org/breves-scientifiques/insecurite-alimentaire-et-consequences-chez-l-enfant-resultats-d-une-synthese-d-etudes-qualitatives-europeennes/" target="_blank">Cerin – Insécurité alimentaire et conséquences chez l'enfant (2022)</a></li>
      <li><a href="https://www.tableedeschefs.fr/post/panorama-de-l-%C3%A9ducation-culinaire-dans-le-monde" target="_blank">Table des Chefs – Panorama de l’éducation culinaire (2024)</a></li>
      <li><a href="https://www.alloprof.qc.ca/fr/parents/articles/saines-habitudes-de-vie-et-activites-pedagogiques/alimentation-reussite-scolaire" target="_blank">Alloprof – Les bienfaits d'une saine alimentation sur la réussite scolaire</a></li>
      <li><a href="https://www.mysherpa.be/fr/nos-conseils/lalimentation-un-pilier-de-la-reussite-academique/" target="_blank">My Sherpa – L'alimentation, un pilier de la réussite académique</a></li>
      <li><a href="https://www.inserm.fr/dossier/sommeil/" target="_blank">Inserm – Dossier Sommeil et santé</a></li>
      <li><a href="https://www.inserm.fr/dossier/sante-mentale-des-jeunes/" target="_blank">Inserm – Dossier Santé mentale des jeunes</a></li>
      <li><a href="https://www.education.gouv.fr/les-effets-du-soutien-parental-sur-la-reussite-scolaire-5890" target="_blank">Ministère de l'Éducation nationale – Effets du soutien parental sur la réussite scolaire</a></li>
      <li><a href="https://www.hcsp.fr/explore.cgi/avisrapportsdomaine?clefr=1102" target="_blank">HCSP – Avis sur l’usage des écrans chez les jeunes (2020)</a></li>
      <li><a href="https://www.insee.fr/fr/statistiques/2381474" target="_blank">INSEE – Diplômes et salaires (2023)</a></li>
    </ul>
  `,
  en: `
    <h3>Scientific sources</h3>
    <ul>
      <li><a href="https://stewdy.com/vie-etudiante/alimentation-et-performance-scolaire/" target="_blank">Stewdy – How does nutrition impact school performance? (2024, FR)</a></li>
      <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7002815/" target="_blank">NCBI – School food environment and academic performance (2020, EN)</a></li>
      <li><a href="https://www.unesco.org/en/articles/education-unesco-calls-improve-quality-school-meals" target="_blank">UNESCO – UNESCO calls to improve the quality of school meals (2024, EN)</a></li>
      <li><a href="https://schoolmealscoalition.org/sites/default/files/2024-06/Planet-Friendly-School-Meals-White-Paper-Executive-Summary_EN.pdf" target="_blank">School Meals Coalition – Rethinking school food systems (2024, PDF, EN)</a></li>
      <li><a href="https://www.cerin.org/breves-scientifiques/insecurite-alimentaire-et-consequences-chez-l-enfant-resultats-d-une-synthese-d-etudes-qualitatives-europeennes/" target="_blank">Cerin – Food insecurity and consequences for children (2022, FR)</a></li>
      <li><a href="https://www.tableedeschefs.fr/post/panorama-de-l-%C3%A9ducation-culinaire-dans-le-monde" target="_blank">Table des Chefs – Culinary education worldwide (2024, FR)</a></li>
      <li><a href="https://www.alloprof.qc.ca/fr/parents/articles/saines-habitudes-de-vie-et-activites-pedagogiques/alimentation-reussite-scolaire" target="_blank">Alloprof – Benefits of healthy eating on school success (FR)</a></li>
      <li><a href="https://www.mysherpa.be/fr/nos-conseils/lalimentation-un-pilier-de-la-reussite-academique/" target="_blank">My Sherpa – Nutrition, a pillar of academic success (FR)</a></li>
      <li><a href="https://www.inserm.fr/en/dossier/sleep/" target="_blank">Inserm – Sleep and health (EN)</a></li>
      <li><a href="https://www.inserm.fr/en/dossier/mental-health-of-young-people/" target="_blank">Inserm – Mental health of young people (EN)</a></li>
      <li><a href="https://www.education.gouv.fr/en/effects-parental-support-school-success-5890" target="_blank">French Ministry of Education – Effects of parental support on school success (EN)</a></li>
      <li><a href="https://www.hcsp.fr/explore.cgi/avisrapportsdomaine?clefr=1102" target="_blank">HCSP – Screen use among young people (2020, FR)</a></li>
      <li><a href="https://www.insee.fr/en/statistiques/2381474" target="_blank">INSEE – Degrees and salaries (2023, EN)</a></li>
    </ul>
  `
};
// --- Suite : interactions, calculs, traduction, modales, etc. ---
// --- Interactions tooltips, modales, boutons ---

function showInfo(id, event) {
  event.stopPropagation();
  document.querySelectorAll('.info-tooltip').forEach(div => div.style.display = 'none');
  const tooltip = document.getElementById(id);
  if (tooltip) tooltip.style.display = 'block';
}
document.addEventListener('click', () => {
  document.querySelectorAll('.info-tooltip').forEach(div => div.style.display = 'none');
  document.querySelectorAll('.results-info-tooltip').forEach(div => div.style.display = 'none');
});

function showResultsInfo(id, event) {
  event.stopPropagation();
  document.querySelectorAll('.results-info-tooltip').forEach(div => div.style.display = 'none');
  const tooltip = document.getElementById(id);
  if (tooltip) tooltip.style.display = 'block';
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

  let notes =
    12.5 +
    (fruits - 3) * 0.25 +
    (lait - 2) * 0.15 +
    (fec - 1) * 0.1 +
    (petitdej - 4) * 0.1 -
    (sucres - 2) * 0.25 -
    (gras - 2) * 0.2 +
    (sport - 2) * 0.2 +
    (sommeil - 7) * 0.7 +
    (drogues - 0.2) * -1.2 +
    (climat - 6) * 0.08 +
    (famille - 6) * 0.08 +
    (estime - 5) * 0.08 +
    (mental - 6) * 0.08 +
    (participation - 5) * 0.08 +
    (frequentations - 6) * 0.08
    - (ecran - 4) * 0.35;

  let salaire =
    1400 +
    notes * 60 +
    (sport - 2) * 80 -
    (drogues - 0.2) * 300 -
    (sucres - 2) * 50 -
    (gras - 2) * 40 +
    (famille - 6) * 30 +
    (frequentations - 6) * 30 +
    (estime - 5) * 25 +
    (mental - 6) * 25 +
    etudes * 300
    - (ecran - 4) * 60;

  document.getElementById('notes').textContent = Math.max(8, Math.min(20, notes.toFixed(1))) + '/20';
  document.getElementById('salaire').textContent = Math.max(1000, salaire.toFixed(0)) + '€';
}

// --- Traduction et initialisation ---

function setLang(lang) {
  document.getElementById('fr-btn').classList.toggle('active', lang === 'fr');
  document.getElementById('en-btn').classList.toggle('active', lang === 'en');
  document.querySelectorAll('[data-tr]').forEach(el => {
    const key = el.getAttribute('data-tr');
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  for(const key in tooltips[lang]) {
    let el = document.querySelector(`[data-tr-tooltip="${key}"]`);
    if(el) el.innerHTML = tooltips[lang][key];
  }
  document.getElementById('note-info').innerHTML = tooltips[lang]['note'];
  document.getElementById('salaire-info').innerHTML = tooltips[lang]['salaire'];
  document.getElementById('menu-modal-inner').innerHTML = menus[lang];
  document.getElementById('sources-modal-inner').innerHTML = sourcesList[lang];
  calculImpact();
}

// --- Initialisation sliders et events ---

window.onload = function () {
  Object.entries(valeursMoyennes).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if(el) el.value = val;
  });
  setLang('fr');
  calculImpact();

  // Ajout des écouteurs sur tous les sliders
  Object.keys(valeursMoyennes).forEach(id => {
    const el = document.getElementById(id);
    if(el) el.addEventListener('input', calculImpact);
  });
};
