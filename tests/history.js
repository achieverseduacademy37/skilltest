/**
 * TEST FILE: General Awareness — History
 * Subject: History (Ancient + Medieval + Modern — Mixed)
 * Standard: SSC Steno Grade C & D — 2025 Pattern
 * Difficulty: Moderate to Hard (Indirect reasoning style)
 *
 * HOW TO ADD A NEW TEST:
 * 1. Duplicate this file, rename it (e.g., geography.js)
 * 2. Update META and QUESTIONS
 * 3. Link it from index.html as: href="test.html?test=geography"
 */

window.TEST_DATA = {

  meta: {
    name:            "History",
    subject:         "General Awareness",
    title:           "General Awareness — History",
    description:     "50 mixed questions covering Ancient, Medieval & Modern Indian History — SSC Steno 2025 equity pattern. Moderate to difficult level.",
    difficulty:      "Moderate–Hard",
    durationMinutes: 48,
    durationSeconds: 48 * 60,   // scaled from 200Q / 120min → 50Q / 30min
    totalMarks:      50,
    negativeMarks:   0.25
  },

  questions: [
    // ── Q1 ── Modern
    {
      sec:"Modern History", diff:"Hard",
      q:"Which of the following statements correctly explains the British policy of 'Subsidiary Alliance' introduced by Lord Wellesley?",
      ops:["Indian rulers retained full sovereignty in exchange for military assistance",
           "Indian rulers surrendered control of foreign relations and paid for a British force stationed in their territory",
           "British forces withdrew from Indian princely states in exchange for annual tributes",
           "Indian rulers were given British citizenship in return for military alliances"],
      ans:1,
      note:"<strong>Subsidiary Alliance</strong> (1798) by <strong>Lord Wellesley</strong> required Indian rulers to: (1) station a British force in their territory at <em>their own expense</em>, (2) surrender control of <strong>foreign affairs</strong> to the British, and (3) accept a British Resident at their court. States like Hyderabad, Mysore, Awadh, and Maratha chiefs signed it. It made them dependent on Britain while appearing to protect them.",
      src:"NCERT History Class 8"
    },
    // ── Q2 ── Ancient
    {
      sec:"Ancient History", diff:"Moderate",
      q:"The 'Stupa' at Sanchi is associated with Emperor Ashoka. What is the PRIMARY structural purpose of the Harmika (the square railing on top of the dome)?",
      ops:["It served as a window for light inside the stupa",
           "It symbolised the abode of the gods and marked the sacred space above the relic chamber",
           "It was used by monks to deliver sermons to the public below",
           "It functioned as a watchtower for security purposes"],
      ans:1,
      note:"A <strong>Stupa</strong> consists of: (1) Anda (dome), (2) <strong>Harmika</strong> — a square railing at the top symbolising <em>the abode of gods</em> and the seat of the Buddha, (3) Yashti — the central mast/pole, and (4) Chhatravali — umbrella tiers denoting sanctity. The <strong>Sanchi Stupa</strong> (commissioned by Ashoka, 3rd century BCE) is the oldest stone structure in India. The four gateways (Toranas) show Jataka tales.",
      src:"NCERT History Class 6"
    },
    // ── Q3 ── Modern
    {
      sec:"Modern History", diff:"Hard",
      q:"The Vernacular Press Act (1878) was introduced by Lord Lytton. What was the key difference between the treatment of English-language and Indian-language newspapers under this act?",
      ops:["English newspapers were taxed more heavily than Indian newspapers",
           "Indian-language newspapers could be censored without any judicial review, while English papers were not subject to this act",
           "Indian-language newspapers were given government subsidies while English papers were not",
           "English papers were prohibited from covering political news while Indian papers had no such restriction"],
      ans:1,
      note:"The <strong>Vernacular Press Act (1878)</strong> — dubbed the 'Gagging Act' by critics — allowed the government to <strong>confiscate printing presses and paper</strong> of Indian-language newspapers without any judicial remedy, simply by issuing a warning. English-language papers were completely exempt. The <em>Amrit Bazar Patrika</em> cleverly converted to an English paper overnight to escape the Act. The act was eventually repealed in 1882 by Lord Ripon.",
      src:"NCERT History Class 8"
    },
    // ── Q4 ── Medieval
    {
      sec:"Medieval History", diff:"Moderate",
      q:"The Chola king Rajendra I (1014–1044 CE) is often described as the greatest Chola ruler. Which of his military campaigns was UNPRECEDENTED in South Asian history?",
      ops:["Invasion of Sri Lanka and annexation of the Maldives",
           "Naval expedition to Southeast Asia and defeat of the Shailendra rulers of Srivijaya",
           "Conquest of the entire Deccan plateau from the Rashtrakutas",
           "Military alliance with the Pallava kingdom against the Western Chalukyas"],
      ans:1,
      note:"<strong>Rajendra Chola I</strong> launched a <strong>naval expedition</strong> across the Bay of Bengal around 1025 CE, defeating the <em>Shailendra kings of Srivijaya</em> (modern Malaysia/Indonesia). This was the <strong>first overseas empire-building naval campaign</strong> in South Asian history. He also conducted a northern campaign to the Ganga, earning the title <em>Gangaikondachola</em> ('the Chola who conquered the Ganga'). He built the new capital <em>Gangaikondacholapuram</em>.",
      src:"NCERT History Class 7"
    },
    // ── Q5 ── Modern
    {
      sec:"Modern History", diff:"Hard",
      q:"Consider the following pairs and identify which are INCORRECTLY matched:\n1. Swadeshi Movement — 1905 Partition of Bengal\n2. Home Rule League (Tilak) — Founded 1916, Pune\n3. Champaran Satyagraha — Indigo farmers, 1918\n4. Khilafat Movement — Abolition of Ottoman Caliphate",
      ops:["Only 3","Only 3 and 4","1, 2 and 4","2 and 3"],
      ans:0,
      note:"Analysis: (1) ✅ Swadeshi linked to 1905 Bengal Partition. (2) ✅ Tilak's Home Rule League founded in <strong>April 1916 in Belgaum</strong> (not Pune — Pune was Gokhale's Servants of India Society). Actually Tilak launched it from Pune — this is debated. (3) ❌ <strong>Champaran Satyagraha was in 1917</strong>, not 1918 — Gandhi's first civil disobedience in India against indigo farmers' exploitation by British planters in Bihar. (4) ✅ Khilafat Movement (1919–1924) protested the weakening of the Ottoman Caliphate post-WWI. Thus, Statement 3 is wrong.",
      src:"NCERT History Class 10"
    },
    // ── Q6 ── Ancient
    {
      sec:"Ancient History", diff:"Hard",
      q:"The concept of 'Chaturanga' (four-fold army: chariots, elephants, cavalry, infantry) is first systematically described in which ancient Indian text?",
      ops:["Rigveda","Arthashastra of Kautilya","Mahabharata","Ashtadhyayi of Panini"],
      ans:1,
      note:"The <strong>Arthashastra</strong> by <em>Kautilya</em> (c. 4th–3rd century BCE) provides the most systematic and detailed description of <strong>Chaturangabala</strong> — the fourfold military: <em>ratha</em> (chariots), <em>gaja</em> (elephants), <em>ashva</em> (cavalry), and <em>pada</em> (infantry). This is also the origin of the board game <strong>Chess (Chaturanga)</strong>. The Arthashastra also discusses war strategy, espionage (Sanstha), taxation, and diplomacy. It was composed in Sanskrit.",
      src:"NCERT History Class 6 + Arthashastra"
    },
    // ── Q7 ── Modern
    {
      sec:"Modern History", diff:"Moderate",
      q:"Who among the following was described as the 'Grand Old Man of India' and was famous for the 'Drain of Wealth' theory?",
      ops:["Bal Gangadhar Tilak","Dadabhai Naoroji","Gopal Krishna Gokhale","Surendranath Banerjee"],
      ans:1,
      note:"<strong>Dadabhai Naoroji</strong> (1825–1917) was called the <strong>'Grand Old Man of India'</strong>. His seminal work <em>Poverty and Un-British Rule in India</em> (1901) articulated the <strong>'Drain of Wealth' theory</strong> — that British rule systematically drained India's economic resources through: salaries to British officials, profits repatriated by British companies, and unequal trade terms. He was also the first Indian to be elected to the British Parliament (1892, as Liberal MP for Finsbury Central).",
      src:"NCERT History Class 8"
    },
    // ── Q8 ── Medieval
    {
      sec:"Medieval History", diff:"Hard",
      q:"Which of the following best describes the concept of 'Iqta' system in the Delhi Sultanate, and which ruler is credited with reorganising it?",
      ops:["A land grant given permanently to nobles; reorganised by Alauddin Khilji",
           "A revenue assignment where holders (Iqtadars) collected revenue in lieu of salary; reorganised by Iltutmish",
           "A tax levied exclusively on non-Muslim traders; reorganised by Balban",
           "A system of collective land ownership by village communities; reorganised by Firuz Shah Tughluq"],
      ans:1,
      note:"The <strong>Iqta system</strong> was a form of revenue assignment (not land grant) where <em>Iqtadars</em> (holders) collected revenue from assigned territories in lieu of cash salary and used it to maintain troops for the Sultan. It was NOT hereditary. <strong>Iltutmish</strong> (r. 1211–1236) reorganised and strengthened this system in India, borrowing from Persian/Abbasid practice. Later, Alauddin Khilji curtailed the power of Iqtadars and centralised control.",
      src:"NCERT History Class 7"
    },
    // ── Q9 ── Ancient
    {
      sec:"Ancient History", diff:"Moderate",
      q:"The 'Edicts of Ashoka' mention a term 'Dhamma Mahamattas'. What was the PRIMARY function of these officials?",
      ops:["Collection of land revenue across the empire",
           "Supervision of the construction of stupas and pillars",
           "Propagation of Dhamma and welfare of people across all communities",
           "Commanding the military campaigns in border regions"],
      ans:2,
      note:"<strong>Dhamma Mahamattas</strong> ('Officers of Dhamma') were special officers created by Ashoka specifically to <strong>propagate the principles of Dhamma</strong> — non-violence, compassion, tolerance, truthfulness, and respect for elders. They also attended to the welfare of prisoners, the aged, and minorities. Ashoka's <em>Rock Edicts</em> (13th Rock Edict in particular) mention them. The Mahamattas were posted throughout the empire and even sent abroad to spread Dhamma.",
      src:"NCERT History Class 6"
    },
    // ── Q10 ── Modern
    {
      sec:"Modern History", diff:"Hard",
      q:"The Poona Pact of 1932 was signed between Dr. B.R. Ambedkar and Mahatma Gandhi. Which of the following ACCURATELY describes what the Poona Pact changed from the Communal Award of 1932?",
      ops:["It replaced separate electorates for Muslims with joint electorates",
           "It replaced separate electorates for depressed classes with reserved seats within joint Hindu electorates",
           "It provided for a separate dominion status for the depressed classes",
           "It eliminated all reservation provisions that the Communal Award had included"],
      ans:1,
      note:"The <strong>Communal Award</strong> (August 1932) by British PM Ramsay MacDonald granted <em>separate electorates</em> to Depressed Classes (Dalits). Gandhi opposed this as divisive and began a fast-unto-death in Yerwada Jail. The resulting <strong>Poona Pact (September 1932)</strong> replaced separate electorates with <strong>reserved seats in joint Hindu electorates</strong> — increasing the reserved seats from 71 to 148. Ambedkar agreed reluctantly under pressure of Gandhi's fast.",
      src:"NCERT History Class 10"
    },
    // ── Q11 ── Medieval
    {
      sec:"Medieval History", diff:"Moderate",
      q:"The famous Sufi saint Kabir, who is revered by both Hindus and Muslims, was a disciple of which saint?",
      ops:["Chishti","Ramananda","Vallabhacharya","Mirabai"],
      ans:1,
      note:"<strong>Kabir</strong> (c. 1440–1518) was a disciple of <strong>Ramananda</strong>, a Vaishnava saint from Varanasi. Kabir rejected caste distinctions, idol worship, and sectarian religious practices. His compositions (<em>Dohas</em> — couplets) are found in the <em>Guru Granth Sahib</em>. He advocated a formless God accessible to all without ritual or scripture. His followers (Kabir Panthis) exist to this day. Kabir bridges the Bhakti and Sufi traditions of medieval India.",
      src:"NCERT History Class 7"
    },
    // ── Q12 ── Ancient
    {
      sec:"Ancient History", diff:"Hard",
      q:"The historian Megasthenes visited India during the reign of Chandragupta Maurya. His account 'Indica' describes Indian society with seven classes. Which of the following is NOT among the seven classes he describes?",
      ops:["Philosophers","Farmers","Soldiers","Merchants — a separate class distinct from artisans"],
      ans:3,
      note:"<strong>Megasthenes</strong> (Greek ambassador to the Mauryan court) described Indian society in <em>Indica</em> as having seven 'castes' (occupational groups): (1) Philosophers (Brahmins), (2) <strong>Farmers</strong>, (3) Herdsmen/Shepherds, (4) Artisans/Craftsmen, (5) <strong>Soldiers</strong>, (6) Overseers (inspectors/spies), (7) Councillors/Assessors. <strong>Merchants were NOT listed as a separate class</strong> by Megasthenes — they were included under artisans or traders broadly. This reflects Megasthenes' outsider interpretation of Indian society.",
      src:"Ancient Indian History — R.S. Sharma"
    },
    // ── Q13 ── Modern
    {
      sec:"Modern History", diff:"Moderate",
      q:"The 'Ilbert Bill Controversy' of 1883–1884 is significant in Indian history because it revealed:",
      ops:["The willingness of the British government to grant Indians full judicial equality",
           "The racial prejudice of European settlers in India who opposed Indian judges trying Europeans",
           "Indian nationalists' opposition to Western legal systems being imposed on India",
           "The British Parliament's support for Indian self-governance in criminal matters"],
      ans:1,
      note:"The <strong>Ilbert Bill</strong> (drafted by C.P. Ilbert, Law Member of Viceroy Ripon's council) proposed to allow Indian judges to try European criminals in the mofussil (rural areas). European settlers, especially indigo planters, furiously opposed this, citing <strong>racial superiority</strong>. Their campaign forced a humiliating retreat — a compromise was reached that effectively gutted the bill. This episode shocked Indians into realising British racial bias and accelerated the formation of the INC (1885).",
      src:"NCERT History Class 8"
    },
    // ── Q14 ── Medieval
    {
      sec:"Medieval History", diff:"Hard",
      q:"Match the following Mughal architecture with the correct emperor who commissioned it:\n1. Humayun's Tomb — Emperor ?\n2. Agra Fort (Red Sandstone) — Emperor ?\n3. Fatehpur Sikri — Emperor ?",
      ops:["1-Humayun, 2-Babur, 3-Akbar","1-Haji Begum (wife of Humayun), 2-Akbar, 3-Akbar","1-Akbar, 2-Jahangir, 3-Akbar","1-Haji Begum, 2-Jahangir, 3-Shah Jahan"],
      ans:1,
      note:"<strong>Humayun's Tomb</strong> (Delhi) was commissioned by his widow <strong>Haji Begum</strong> in 1565, designed by Persian architect Mirak Mirza Ghiyas — it is considered the <em>precursor of the Taj Mahal</em>. <strong>Agra Fort</strong> (red sandstone) was built by <strong>Akbar</strong> (1565–1573). <strong>Fatehpur Sikri</strong> was also built by <strong>Akbar</strong> (1571) as his new capital, later abandoned due to water shortage. Notable features: Buland Darwaza (Gate of Magnificence), Jama Masjid, Panch Mahal.",
      src:"NCERT History Class 7"
    },
    // ── Q15 ── Ancient
    {
      sec:"Ancient History", diff:"Moderate",
      q:"The 'Ashtadhyayi', considered the world's first descriptive grammar, was authored by the Sanskrit grammarian Panini. During whose reign did Panini most likely flourish?",
      ops:["Mauryan period under Ashoka","Pre-Mauryan/Nanda period or early 4th century BCE","Gupta period under Chandragupta II","Post-Vedic period around 1000 BCE"],
      ans:1,
      note:"<strong>Panini</strong> (c. 4th century BCE) is believed to have lived during the <strong>pre-Mauryan/Nanda period</strong>, likely in Shalatula (near modern Attock, Pakistan, in Gandhara). His <em>Ashtadhyayi</em> (Eight Chapters) contains 3,959 sutras (aphorisms) describing Sanskrit grammar with mathematical precision. Western scholars like Leonard Bloomfield called it the <em>greatest monument of human intelligence</em>. Panini's work is often compared to modern generative grammar.",
      src:"NCERT History Class 6"
    },
    // ── Q16 ── Modern
    {
      sec:"Modern History", diff:"Hard",
      q:"The 'August Offer' of 1940 made by Viceroy Linlithgow was rejected by the Indian National Congress. Which of the following was NOT part of the August Offer?",
      ops:["Expansion of the Viceroy's Executive Council to include more Indians",
           "Establishment of a War Advisory Council",
           "Promise of Dominion Status after the war",
           "Immediate transfer of all legislative powers to the Central Legislature"],
      ans:3,
      note:"The <strong>August Offer (8 August 1940)</strong> by Viceroy Linlithgow included: (1) Expansion of Viceroy's Executive Council with more Indian members, (2) Setting up a War Advisory Council, (3) Promise of <em>Dominion Status</em> after the war. It did NOT include immediate transfer of legislative powers. Congress rejected it as inadequate — demanding complete independence, not dominion status. The Muslim League also rejected it as it didn't guarantee Pakistan. This led directly to Gandhi launching Individual Satyagraha later.",
      src:"NCERT History Class 10"
    },
    // ── Q17 ── Medieval
    {
      sec:"Medieval History", diff:"Moderate",
      q:"The 'Tughluqabad Fort' and the city of Tughluqabad were built by which Delhi Sultan, who is also known for his ill-fated decision to shift the capital to Daulatabad?",
      ops:["Ghiyasuddin Tughluq","Muhammad bin Tughluq","Firuz Shah Tughluq","Balban"],
      ans:1,
      note:"<strong>Ghiyasuddin Tughluq</strong> (r. 1320–1325) built <em>Tughluqabad Fort</em> near Delhi. His son and successor <strong>Muhammad bin Tughluq</strong> (r. 1325–1351) is infamous for: (1) Shifting the capital from Delhi to <strong>Daulatabad (Devagiri)</strong> in the Deccan — forcing entire population to march 1,100 km, (2) Introducing token currency (copper and brass coins) which failed, (3) Ill-fated Khorasan and Qarachil expeditions. Ibn Battuta called him the most generous and simultaneously most violent of rulers.",
      src:"NCERT History Class 7"
    },
    // ── Q18 ── Ancient
    {
      sec:"Ancient History", diff:"Hard",
      q:"Which of the following correctly describes the 'Shreni' system of ancient India, and what was its significance in the economic life of the Gupta period?",
      ops:["Shreni were royal factories controlled by the state for weapon production",
           "Shreni were merchant and craft guilds that regulated trade, fixed prices, acted as bankers, and had quasi-judicial powers",
           "Shreni were religious endowments similar to temple trusts used for maintaining pilgrim routes",
           "Shreni were systems of agricultural cooperative farming introduced during the Mauryan period"],
      ans:1,
      note:"<strong>Shrenis</strong> (guilds) were autonomous organisations of merchants and craftsmen in ancient India. In the <strong>Gupta period</strong> (4th–6th century CE), they: (1) Regulated trade practices and prices, (2) Functioned as <em>banks</em> (accepting deposits, lending money), (3) Had <em>quasi-judicial powers</em> — their decisions were recognised by the state, (4) Set quality standards for crafts. Epigraphic evidence (Mandasor inscription) shows guilds investing in public works. They are analogous to medieval European guilds.",
      src:"NCERT History Class 6 + D.N. Jha"
    },
    // ── Q19 ── Modern
    {
      sec:"Modern History", diff:"Moderate",
      q:"The Indian National Army (INA) established by Subhash Chandra Bose had the following divisions named after Indian national heroes. Which option correctly identifies these?",
      ops:["Gandhi Brigade, Nehru Brigade, Patel Brigade","Gandhi Regiment, Azad Regiment, Nehru Brigade, Subhas Brigade","Bose Brigade, Azad Hind, Nehru Force, Tilak Division","Shivaji Brigade, Rani Laxmibai Regiment, Netaji Division"],
      ans:1,
      note:"The <strong>Indian National Army (Azad Hind Fauj)</strong> under <strong>Netaji Subhas Chandra Bose</strong> (reorganised 1943) had prominent units named: (1) <strong>Gandhi Brigade</strong>, (2) <strong>Azad (Nehru) Brigade</strong>, (3) <strong>Nehru Brigade</strong>, and (4) <strong>Subhas Brigade</strong>. A special all-women unit was the <strong>Rani of Jhansi Regiment</strong> led by Capt. Lakshmi Sahgal. The INA operated from Singapore and advanced to Imphal-Kohima with Japanese support. The INA trials (1945–46) after British capture created massive sympathy across India.",
      src:"NCERT History Class 10"
    },
    // ── Q20 ── Medieval
    {
      sec:"Medieval History", diff:"Hard",
      q:"The 'Ain-i-Akbari' is part of the larger historical work 'Akbarnama'. Which of the following facts about this work is INCORRECT?",
      ops:["It was written by Abul Fazl, Akbar's court historian",
           "It provides detailed statistics on the Mughal Empire including revenue, army size, and provincial administration",
           "The Akbarnama was written in Urdu as Akbar sought to promote a new court language",
           "Ain-i-Akbari contains descriptions of Akbar's administrative innovations like the Mansabdari system"],
      ans:2,
      note:"The <strong>Akbarnama</strong> (including <em>Ain-i-Akbari</em>) was written by <strong>Abul Fazl</strong> in <strong>Persian</strong> — NOT Urdu. Persian was the court language of the Mughals. Akbar <em>did not</em> promote Urdu as a court language; Persian remained dominant. The Ain-i-Akbari (Book of Akbar's Regulations) covers: imperial administration, revenue statistics, military organisation, arts, sciences, and Akbar's philosophy. It also describes Akbar's religious discussions at <em>Ibadat Khana</em> (House of Worship).",
      src:"NCERT History Class 7"
    },
    // ── Q21 ── Ancient
    {
      sec:"Ancient History", diff:"Moderate",
      q:"The Sangam Age in South India is characterised by the 'Five Tinais' (landscapes). Which of the following is NOT one of the five tinai landscapes?",
      ops:["Kurinji (mountains/forests — love/fidelity)","Neydal (seashore — separation/mourning)","Paalai (desert/wasteland — elopement)","Kaveri (riverine plains — war/heroism)"],
      ans:3,
      note:"The <strong>Five Tinais</strong> (ecological zones) in Sangam literature are: (1) <em>Kurinji</em> (mountains — union of lovers), (2) <em>Mullai</em> (pastoral forests — waiting), (3) <em>Marudam</em> (agricultural land — lovers' quarrel), (4) <em>Neydal</em> (seashore — separation), (5) <em>Paalai</em> (arid land — elopement/hardship). <strong>Kaveri (riverine plains)</strong> as a separate tinai is NOT among the five — <em>Marudam</em> covers agricultural land. The tinai system shows the sophisticated ecological-literary framework of Sangam Tamil poetry.",
      src:"NCERT History Class 6"
    },
    // ── Q22 ── Modern
    {
      sec:"Modern History", diff:"Hard",
      q:"The 'Government of India Act, 1935' was the longest Act passed by the British Parliament for India. Which of the following provisions of this Act was NEVER implemented?",
      ops:["Provincial autonomy in British Indian provinces",
           "Creation of the position of Federal Court of India",
           "Establishment of an All-India Federation including Princely States",
           "Introduction of direct elections for provincial assemblies"],
      ans:2,
      note:"The <strong>Government of India Act, 1935</strong> proposed an <em>All-India Federation</em> combining British India provinces and Princely States. However, this provision was <strong>never implemented</strong> because Princely States refused to join — they were not under direct British suzerainty and insisted on autonomy. <em>Provincial autonomy</em> (Part 5) was implemented from 1937 (Congress formed governments in 7 provinces). The <em>Federal Court</em> was established in 1937. Direct elections were held in 1937.",
      src:"NCERT History Class 10"
    },
    // ── Q23 ── Medieval
    {
      sec:"Medieval History", diff:"Moderate",
      q:"Which medieval Indian ruler introduced the 'Dagh' (branding of horses) and 'Chehra' (descriptive rolls of soldiers) system to prevent military corruption?",
      ops:["Akbar","Alauddin Khilji","Sher Shah Suri","Balban"],
      ans:1,
      note:"<strong>Alauddin Khilji</strong> (r. 1296–1316) introduced two anti-corruption measures for the military: (1) <strong>Dagh</strong> — branding of horses with royal marks to prevent nobles from substituting poor horses for good ones and pocketing the price difference; (2) <strong>Chehra</strong> — descriptive rolls (physical description of each soldier) to prevent nobles from presenting ghost soldiers. These were revolutionary administrative reforms that centralised military control and maximised efficiency.",
      src:"NCERT History Class 7"
    },
    // ── Q24 ── Ancient
    {
      sec:"Ancient History", diff:"Hard",
      q:"The Prayaga Prashasti (Allahabad Pillar inscription) composed by Harishena is the primary source of information about which ruler's conquests?",
      ops:["Ashoka Maurya","Chandragupta II (Vikramaditya)","Samudragupta","Harshavardhana"],
      ans:2,
      note:"The <strong>Prayaga Prashasti</strong> (Allahabad Pillar Inscription) was composed by the poet <strong>Harishena</strong> and records the military campaigns of <strong>Samudragupta</strong> (c. 335–375 CE). It describes his conquests of: 9 rulers of Aryavarta (northern India — completely uprooted), 12 rulers of Dakshinapatha (southern India — defeated and reinstated), and frontier kingdoms. Historian V.A. Smith called Samudragupta the '<em>Napoleon of India</em>' based on this inscription. It is engraved on an Ashokan pillar.",
      src:"NCERT History Class 6"
    },
    // ── Q25 ── Modern
    {
      sec:"Modern History", diff:"Moderate",
      q:"The first session of the Indian National Congress (1885) was presided over by W.C. Bonnerjee. Who among the following was the first WOMAN President of the Indian National Congress?",
      ops:["Sarojini Naidu","Annie Besant","Nellie Sengupta","Vijaya Lakshmi Pandit"],
      ans:1,
      note:"<strong>Annie Besant</strong> (theosophist and founder of the Home Rule League) was the <strong>first woman President of the INC</strong> — elected at the Calcutta session in 1917. <strong>Sarojini Naidu</strong> became the first Indian woman President of INC at the Kanpur session in <strong>1925</strong>. Annie Besant is often confused with Sarojini Naidu — the key distinction is 'first woman' vs 'first Indian woman'. Besant was of Irish origin but a naturalised Indian citizen.",
      src:"NCERT History Class 10"
    },
    // ── Q26 ── Medieval
    {
      sec:"Medieval History", diff:"Hard",
      q:"The Bahmani Kingdom (1347–1527) in the Deccan split into five successor states. Which of the following was NOT one of the five Deccan Sultanates?",
      ops:["Bijapur (Adil Shahi)","Golconda (Qutb Shahi)","Ahmadnagar (Nizam Shahi)","Malwa (Ghuri Sultanate)"],
      ans:3,
      note:"The <strong>Bahmani Kingdom</strong> fragmented into five Deccan Sultanates: (1) <em>Bijapur</em> (Adil Shahi), (2) <em>Golconda</em> (Qutb Shahi), (3) <em>Ahmadnagar</em> (Nizam Shahi), (4) <em>Berar</em> (Imad Shahi), (5) <em>Bidar</em> (Barid Shahi). <strong>Malwa</strong> was a separate Sultanate in central India (not a Bahmani successor state) — it had its own Ghuri and Khalji rulers before being absorbed by the Mughals in 1561. These five Deccan Sultanates later united to defeat Vijayanagara at Talikota (1565).",
      src:"NCERT History Class 7"
    },
    // ── Q27 ── Ancient
    {
      sec:"Ancient History", diff:"Moderate",
      q:"The Indus Valley Civilisation shows evidence of standardised weights and measures. The smallest weight unit found at IVC sites follows which ratio system?",
      ops:["Decimal (base 10) system exclusively","Binary-cum-decimal system (doubling ratio: 1, 2, 4, 8... then 10, 20, 40...)","Sexagesimal system (base 60) like ancient Babylon","Duodecimal (base 12) system"],
      ans:1,
      note:"IVC weights follow a <strong>binary-cum-decimal system</strong>: the ratio sequence is 1, 2, 4, 8, 16, 32, 64 (binary doubling) and then continues as 160, 200, 320, 640 (decimal multiples). The basic unit is approximately <strong>0.86 grams</strong>. These standardised cuboid weights made of chert were found across vast distances (Harappa, Mohenjo-daro, Lothal), indicating a <em>uniform metrological system</em> — extraordinary for 3rd millennium BCE. Lothal (Gujarat) had a dockyard showing maritime trade.",
      src:"NCERT History Class 6 + Archaeological surveys"
    },
    // ── Q28 ── Modern
    {
      sec:"Modern History", diff:"Hard",
      q:"Who wrote 'Hind Swaraj' (Indian Home Rule) in 1909, and what was the PRIMARY argument of this work that went against the prevailing Indian nationalist view?",
      ops:["Tilak; argued for violent revolution as the only means to independence",
           "Gandhi; argued that modern civilisation (including railways, hospitals and law courts) was itself a disease, not progress, and true independence required India to reject it",
           "Gokhale; argued that Indians should accept British rule temporarily until fully educated",
           "Aurobindo; argued for spiritual revolution before political independence"],
      ans:1,
      note:"<strong>Gandhi</strong> wrote <em>Hind Swaraj</em> (1909) in Gujarati on a ship returning from London. His central argument was <strong>radical and controversial</strong>: <em>Modern civilisation</em> — railways, hospitals, lawyers, doctors — was itself a disease spreading bodily weakness and moral corruption. He argued India should return to village self-sufficiency (Gram Swaraj). Even fellow nationalists like Gokhale found this too extreme. The British banned the book. It remains the foundational philosophical text of Gandhian thought.",
      src:"NCERT History Class 10"
    },
    // ── Q29 ── Medieval
    {
      sec:"Medieval History", diff:"Moderate",
      q:"The term 'Zabt' in Mughal revenue system refers to which of the following?",
      ops:["A fixed cash payment to the emperor by zamindars irrespective of harvest",
           "A measurement-based land revenue system where crops were assessed in cash based on measured land area and state-fixed crop rates",
           "A barter system where farmers paid revenue in kind (grain) to local nobles",
           "The military salary system for Mansabdars based on number of cavalry"],
      ans:1,
      note:"The <strong>Zabt</strong> (or <em>Zabti</em>) system was the primary Mughal land revenue system, perfected by <strong>Raja Todar Mal</strong> under Akbar. It involved: (1) Measurement of land (<em>jarib</em>), (2) Classification of land by productivity (polaj, parauti, chachar, banjar), (3) Assessment of average yield for each crop, (4) Calculation of revenue in <strong>cash</strong> at state-fixed rates. This was applied mainly in the fertile Gangetic plains. Other systems used were Nasaq (estimation) and Batai (crop-sharing).",
      src:"NCERT History Class 7"
    },
    // ── Q30 ── Ancient
    {
      sec:"Ancient History", diff:"Hard",
      q:"The 'Nayanmars' and 'Alvars' were poet-saints of South India. Which of the following correctly distinguishes them?",
      ops:["Nayanmars were Jain saints; Alvars were Buddhist saints",
           "Nayanmars were devotees of Shiva who composed Tamil Shaivite hymns; Alvars were devotees of Vishnu who composed Tamil Vaishnavite hymns",
           "Nayanmars were male saints; Alvars included only female saints like Andal",
           "Nayanmars composed in Sanskrit; Alvars composed in Tamil"],
      ans:1,
      note:"The <strong>Nayanmars</strong> (63 saints) were <strong>devotees of Shiva</strong> — their Tamil hymns were compiled as the <em>Thirumurai</em> (Devaram). Key Nayanmars: Appar, Sambandar, Sundarar, Manikkavasagar. The <strong>Alvars</strong> (12 saints) were <strong>devotees of Vishnu</strong> — their hymns compiled as <em>Nalayira Divya Prabandham</em> (4000 sacred verses). Key Alvars include Nammalvar, Tirumangai, and <em>Andal</em> — the only female Alvar. Both groups flourished from 6th–10th century CE in South India.",
      src:"NCERT History Class 7"
    },
    // ── Q31 ── Modern
    {
      sec:"Modern History", diff:"Moderate",
      q:"The Rowlatt Satyagraha of 1919 was the first all-India political protest organised by Gandhi. On what date did Gandhi declare a nationwide hartal (strike) and what unexpected event suspended the movement?",
      ops:["6 April 1919; suspended due to the Jallianwala Bagh massacre","6 April 1919; suspended due to the Chauri Chaura incident","13 April 1919; suspended after Lord Chelmsford's assurance","1 August 1920; suspended after Tilak's death"],
      ans:0,
      note:"Gandhi declared a nationwide hartal on <strong>6 April 1919</strong> against the Rowlatt Act. The movement involved hartals, prayers, fasting across India. However, it soon turned violent in several places. The <strong>Jallianwala Bagh Massacre (13 April 1919)</strong> by General Dyer at Amritsar transformed the protest into national outrage. Technically, Gandhi <em>suspended</em> the Rowlatt Satyagraha saying Indians were not yet ready for satyagraha (non-violent resistance). The Non-Cooperation Movement followed in 1920.",
      src:"NCERT History Class 10"
    },
    // ── Q32 ── Medieval
    {
      sec:"Medieval History", diff:"Hard",
      q:"Which Mughal emperor is credited with composing the autobiography 'Tuzuk-i-Jahangiri' (Jahangirnama), and which of his paintings is INCORRECTLY attributed to his court?",
      ops:["Jahangir; Ustad Mansur's nature paintings were actually made in Akbar's court",
           "Jahangir; he wrote the autobiography and Ustad Mansur (known for wildlife), Abul Hasan, and Bishandas were painters in his court",
           "Shah Jahan; Tuzuk-i-Jahangiri was a misattribution and was actually written by Jahangir's wife Nur Jahan",
           "Akbar; Tuzuk-i-Jahangiri was a continuation of Akbarnama commissioned by Jahangir"],
      ans:1,
      note:"<strong>Jahangir</strong> (r. 1605–1627) wrote <em>Tuzuk-i-Jahangiri</em> — a remarkable autobiography describing his court, nature observations, and personal emotions. He had an <strong>exceptional eye for art</strong>. His court painters included: <em>Ustad Mansur</em> (animals and birds — painted the Dodo and Siberian crane for Jahangir), <em>Abul Hasan</em> (portraits — titled 'wonder of the age'), and <em>Bishandas</em> (sent to Persia to paint the Shah's court). Jahangir himself is credited with recognising the styles of individual artists.",
      src:"NCERT History Class 7"
    },
    // ── Q33 ── Ancient
    {
      sec:"Ancient History", diff:"Moderate",
      q:"The 'Iron Pillar of Delhi' located in the Qutb Minar complex is famous for its rust-resistance. The Sanskrit inscription on it indicates it was originally erected as a:",
      ops:["War memorial for soldiers who died in Gupta campaigns","Victory pillar (Dhvaja) in honour of the god Vishnu, commissioned by King Chandra (likely Chandragupta II)","Boundary marker between the Gupta and Vakataka kingdoms","Astronomical instrument for measuring solar declination"],
      ans:1,
      note:"The <strong>Iron Pillar of Delhi</strong> (c. 4th–5th century CE) bears a Sanskrit inscription referring to king <strong>Chandra</strong> — widely identified as <em>Chandragupta II (Vikramaditya)</em>. It was originally a <strong>Vishnu Dhvaja</strong> (flag-staff/victory pillar dedicated to Vishnu) erected at a Vishnu temple, later moved to Delhi by Iltutmish. It is 98% pure iron (7.21 m tall, 6 tonnes) and has not rusted in 1,600+ years due to the formation of a protective phosphate compound layer — a remarkable metallurgical achievement.",
      src:"NCERT History Class 6"
    },
    // ── Q34 ── Modern
    {
      sec:"Modern History", diff:"Hard",
      q:"The partition of India in 1947 was based on the 'Mountbatten Plan' (also called the 3rd June Plan). Which of the following is CORRECT about the process of partition?",
      ops:["Bengal and Punjab were divided based on the recommendations of the Radcliffe Award published before independence",
           "The Radcliffe Line dividing Bengal and Punjab was published AFTER independence (on 17 August 1947), two days after both nations became independent",
           "Jinnah accepted a united India with regional autonomy for Muslim-majority areas",
           "The partition boundary was drawn jointly by Indian and Pakistani representatives"],
      ans:1,
      note:"The <strong>Radcliffe Award</strong> (boundary line drawn by Sir Cyril Radcliffe, who had never visited India before) was published on <strong>17 August 1947</strong> — TWO DAYS AFTER independence. This meant both India and Pakistan became independent without knowing their exact borders — causing massive confusion, migration, and violence. Radcliffe was given just 5 weeks to draw the boundary across Bengal and Punjab, affecting 88 million people. He left India immediately after and reportedly burned his papers.",
      src:"NCERT History Class 12"
    },
    // ── Q35 ── Medieval
    {
      sec:"Medieval History", diff:"Moderate",
      q:"The famous poet Amir Khusrau is associated with which Sufi order, and he is also credited with inventing which two musical instruments?",
      ops:["Chishti Order; credited with inventing the Sitar and Tabla","Qadiri Order; credited with inventing the Sarangi and Shehnai","Suhrawardi Order; credited with inventing the Veena and Mridangam","Naqshbandi Order; credited with inventing the Harmonium and Dholak"],
      ans:0,
      note:"<strong>Amir Khusrau</strong> (1253–1325) was a disciple of <strong>Hazrat Nizamuddin Auliya</strong> of the <strong>Chishti Order</strong> in Delhi. He is traditionally credited with (though historians debate this) inventing the <strong>Sitar</strong> (by modifying the Iranian Setar) and the <strong>Tabla</strong>. He pioneered <em>Qawwali</em> music and composed in both Persian and Hindi/Braj. He coined the term <em>Hindavi</em> for the emerging Indo-Islamic vernacular language. He is called the '<em>Parrot of India</em>' (Tuti-e-Hind).",
      src:"NCERT History Class 7"
    },
    // ── Q36 ── Ancient
    {
      sec:"Ancient History", diff:"Hard",
      q:"Harshavardhana's reign (606–647 CE) is known from multiple sources. Which Chinese pilgrim's account provides detailed information about Harsha's empire and the famous Kumbha Mela at Prayaga?",
      ops:["Fa Hien (Faxian)","Xuanzang (Hiuen Tsang)","I-Tsing (Yi Jing)","Marco Polo"],
      ans:1,
      note:"<strong>Xuanzang (Hiuen Tsang)</strong> visited India (629–645 CE) during Harsha's reign and left detailed records in <em>Si-Yu-Ki</em> (Great Tang Records on the Western Regions). He described: (1) Harsha's vast empire, piety, and daily charitable acts; (2) The <strong>Quinquennial Assembly at Prayaga</strong> (Kumbha Mela) where Harsha donated all his wealth; (3) The state of Buddhism. <em>Fa Hien</em> visited during the Gupta period (4th–5th century CE), <em>I-Tsing</em> visited slightly later than Xuanzang.",
      src:"NCERT History Class 6"
    },
    // ── Q37 ── Modern
    {
      sec:"Modern History", diff:"Moderate",
      q:"The 'Cripps Mission' of 1942 failed primarily because:",
      ops:["The British refused to offer any post-war concessions",
           "Congress rejected it as it offered only Dominion Status after the war and did not grant immediate self-governance; also because Indians could not control defence during the war",
           "The Muslim League accepted it fully, isolating Congress",
           "The Cripps Mission was withdrawn by Britain before any negotiation could begin"],
      ans:1,
      note:"<strong>Stafford Cripps</strong> came to India in 1942 offering: (1) Dominion Status <em>after the war</em>, (2) Right to secede from the Commonwealth, (3) Constituent Assembly to frame constitution, BUT (4) Indians would have <strong>no control over defence</strong> during the war. Gandhi called it 'a post-dated cheque on a crashing bank.' Congress rejected it demanding immediate independence and full defence control. The League rejected it too (opposing the constituent assembly). The failure led directly to the <strong>Quit India Movement (August 1942)</strong>.",
      src:"NCERT History Class 10"
    },
    // ── Q38 ── Medieval
    {
      sec:"Medieval History", diff:"Hard",
      q:"The Vijayanagara Empire's unique administrative system included a concept called 'Nayankara'. What does this refer to?",
      ops:["A hereditary priestly class that controlled temple revenues",
           "A system where military commanders (Nayakas) received land assignments (amaram) in exchange for military service and tribute",
           "A form of direct taxation collected by royal officials without intermediaries",
           "A network of royal spies used to monitor provincial governors"],
      ans:1,
      note:"The <strong>Nayankara system</strong> was the Vijayanagara equivalent of the Mughal Mansabdari. <strong>Nayakas</strong> (military chiefs) received land grants called <em>amaram</em> in exchange for: (1) Maintaining a fixed number of troops for the king, (2) Paying regular tribute. Unlike Mughal Mansabdars, Nayakas had more autonomy — they could collect revenue independently. As the empire weakened, Nayakas became increasingly independent, eventually establishing their own kingdoms (Thanjavur, Madurai, Ikkeri Nayak kingdoms) after 1565.",
      src:"NCERT History Class 7"
    },
    // ── Q39 ── Ancient
    {
      sec:"Ancient History", diff:"Moderate",
      q:"The Vedic period is broadly divided into Early Vedic (Rigvedic) and Later Vedic periods. Which of the following is a significant CHANGE between the two periods?",
      ops:["The Later Vedic period saw a decline in agriculture and return to nomadic pastoralism",
           "The Later Vedic period saw the eastward expansion into the Gangetic plains, increasing importance of agriculture, and the consolidation of the varna system into a rigid hierarchy",
           "The Rigvedic period had a fully developed caste system while the Later Vedic period moved to a more egalitarian society",
           "Vedic rituals became less elaborate in the Later Vedic period due to Buddhist influence"],
      ans:1,
      note:"The <strong>Rigvedic period</strong> (c. 1500–1000 BCE): mostly in Punjab/northwest, pastoral economy, relatively fluid social structure. <strong>Later Vedic period</strong> (c. 1000–600 BCE): expansion into <em>Doab and Gangetic plains</em>, <em>agriculture became primary</em> (iron ploughs), <em>varna system hardened</em> into a rigid hereditary hierarchy, elaborate <em>Srauta rituals</em> developed (Ashvamedha, Rajasuya), and 16 Mahajanapadas (great kingdoms) emerged. The Puranas, Upanishads, and Epics were composed in this period.",
      src:"NCERT History Class 6"
    },
    // ── Q40 ── Modern
    {
      sec:"Modern History", diff:"Hard",
      q:"Which of the following statements about the formation of Pakistan is INCORRECT?",
      ops:["The Lahore Resolution of 1940 (later called the Pakistan Resolution) demanded separate independent states for Muslim-majority regions",
           "Jinnah's Two-Nation Theory argued that Hindus and Muslims were two separate nations incapable of coexisting in a single state",
           "The Muslim League won an overwhelming majority of Muslim seats in the 1945–46 elections, strengthening the case for Pakistan",
           "The idea of Pakistan was first formally proposed by Allama Iqbal at the Lahore session of the Muslim League in 1930 as a demand for a separate country"],
      ans:3,
      note:"<strong>Allama Iqbal</strong> (1930 Allahabad address) proposed a <em>consolidated Muslim state</em> within a <strong>federal India</strong> (NW provinces) — NOT a separate country. The idea of a fully separate nation called 'Pakistan' was first articulated by <strong>Chaudhary Rahmat Ali</strong> in 1933 in his pamphlet 'Now or Never'. The <strong>Lahore Resolution (1940)</strong> formally demanded separate states. Iqbal is called the 'spiritual father' of Pakistan but his 1930 vision was of Muslim autonomy within India, not full separation.",
      src:"NCERT History Class 12"
    },
    // ── Q41 ── Medieval
    {
      sec:"Medieval History", diff:"Moderate",
      q:"Guru Nanak Dev, the founder of Sikhism, preached against which of the following? Choose the MOST comprehensive answer.",
      ops:["Only idol worship and rituals","Caste discrimination, ritualism, superstition, and the caste-based division of society — emphasising that all humans are equal before God (Ik Onkar)","Only the Mughal rulers' oppression of Hindus","Only the corrupt practices of Hindu priests (Brahmins)"],
      ans:1,
      note:"<strong>Guru Nanak Dev Ji</strong> (1469–1539) preached a comprehensive reform: (1) <em>Rejection of caste</em> — 'There is no Hindu, there is no Muslim' (all are equal), (2) Rejection of <em>idol worship</em> and empty rituals, (3) Rejection of <em>superstition</em> and priestly mediation, (4) Emphasis on <em>Naam Japna</em> (repeating God's name), <em>Kirat Karna</em> (honest work), <em>Vand Chakna</em> (sharing). His concept of <strong>Ik Onkar</strong> (One God/Reality) is the foundational teaching. His travels (<em>Udasis</em>) took him across India, Arabia, and Persia.",
      src:"NCERT History Class 7"
    },
    // ── Q42 ── Ancient
    {
      sec:"Ancient History", diff:"Hard",
      q:"The historian Romila Thapar describes 'social stratification' in Indus Valley Civilisation based on archaeological evidence. Which of the following is the CORRECT interpretation of available evidence?",
      ops:["Complete equality — no evidence of social differentiation anywhere in IVC sites",
           "Moderate social differentiation — large granaries, differentiated housing sizes, and presence of luxury items suggest stratification, but no confirmed evidence of kings or warrior class",
           "Clear evidence of a warrior-king ruling class with weapons and palatial structures identical to later Indian kingdoms",
           "Evidence shows IVC had a theocratic society ruled exclusively by priests with no merchants or craftsmen"],
      ans:1,
      note:"IVC shows <strong>moderate social stratification</strong>: (1) <em>Differentiated housing</em> — large multi-roomed 'citadel area' houses vs small 'lower town' structures, (2) <em>Luxury goods</em> (gold jewellery, faience beads) concentrated in some burials, (3) Large <em>Granaries</em> suggesting controlled food redistribution. However, unlike Egypt/Mesopotamia, there is <em>NO clear evidence</em> of a warrior class, palaces for kings, or royal burials with sacrificed servants. This is why IVC remains an enigma — the source of political authority is unknown.",
      src:"NCERT History Class 6 + Romila Thapar"
    },
    // ── Q43 ── Modern
    {
      sec:"Modern History", diff:"Moderate",
      q:"Which of the following revolutionary leaders was NOT associated with the Hindustan Socialist Republican Association (HSRA)?",
      ops:["Bhagat Singh","Chandrashekhar Azad","Sukhdev","Lala Lajpat Rai"],
      ans:3,
      note:"<strong>Lala Lajpat Rai</strong> was a senior Congress leader and Lal-Bal-Pal nationalist — NOT a member of HSRA. The <strong>HSRA</strong> (originally Hindustan Republican Association, founded 1924; reorganised as HSRA in 1928) included: <em>Bhagat Singh, Chandrashekhar Azad, Sukhdev, Rajguru, Batukeshwar Dutt</em>. They carried out: Kakori Train Robbery (1925), assassination of JP Saunders (avenging Lala Lajpat Rai's death), and the Central Assembly bomb throwing (1929). Bhagat Singh's famous statement: 'It takes a loud voice to make the deaf hear.'",
      src:"NCERT History Class 10"
    },
    // ── Q44 ── Medieval
    {
      sec:"Medieval History", diff:"Hard",
      q:"The 'Waqf' as an institution in medieval Islamic history in India refers to:",
      ops:["A military tax levied on non-Muslims by Sultanate rulers","A religious charitable endowment where property was permanently dedicated to God for pious purposes (mosques, madrasas, hospitals, etc.)","A system of revenue collection from agricultural land by Muslim nobles","A form of loan advanced by Islamic banks to merchants at zero interest"],
      ans:1,
      note:"A <strong>Waqf</strong> (plural: Awqaf) is an Islamic endowment in which the donor (waqif) permanently dedicates property to <em>Allah</em> for charitable purposes — building mosques, madrasas (schools), hospitals (bimaristans), and water sources. The property cannot be sold, inherited, or donated. A <em>Mutawalli</em> (administrator) manages it. In medieval India, Waqf institutions provided: education, healthcare, and welfare services. Sultans and nobles created large Waqfs. The institution continues in modern India under the <em>Waqf Act 1995</em>.",
      src:"NCERT History Class 7"
    },
    // ── Q45 ── Ancient
    {
      sec:"Ancient History", diff:"Moderate",
      q:"The concept of 'Ahimsa' (non-violence) in Jainism is considered to be more stringent than in Buddhism. Which Jain practice BEST illustrates this extreme form of non-violence?",
      ops:["Jain monks avoiding eating after sunset","Jain monks of the Digambara sect (sky-clad) wearing no clothes","Shvetambara Jain monks wearing a mouth-guard (muhpatti) and using a soft brush to sweep the path before walking, to avoid harming even micro-organisms","The practice of Paryushana festival involving 8 days of fasting"],
      ans:2,
      note:"<strong>Shvetambara Jain monks</strong> wear a <strong>muhpatti</strong> (mouth-cloth) to avoid accidentally inhaling and harming air-borne insects, and carry a <em>rajoharana</em> (soft brush) to gently sweep micro-organisms from the path before walking. <strong>Digambara monks</strong> (sky-clad) go completely naked, carry a peacock-feather brush (picchi), and eat from their hands. These practices stem from Jainism's belief that even micro-organisms (Nigodas) possess life (jiva) and must not be harmed — the most stringent interpretation of Ahimsa in any religion.",
      src:"NCERT History Class 6"
    },
    // ── Q46 ── Modern
    {
      sec:"Modern History", diff:"Hard",
      q:"The 'Transfer of Power' in 1947 involved three instruments of accession. Which princely state's accession to India became most problematic, requiring military intervention?",
      ops:["Hyderabad — because the Nizam rejected accession to both India and Pakistan and declared independence","Junagadh — because it had a Muslim ruler who acceded to Pakistan despite a Hindu majority population","Kashmir — because its Hindu ruler initially vacillated while Pakistan-backed tribal raiders invaded, forcing last-minute accession to India","All three above faced problems of the same intensity"],
      ans:2,
      note:"All three were problematic, but <strong>Kashmir</strong> became the most complex: (1) Maharaja Hari Singh was Hindu but had a Muslim majority; (2) He initially wanted independence; (3) Pakistan-backed <em>Pashtun tribal raiders</em> invaded in October 1947; (4) Hari Singh signed the <em>Instrument of Accession</em> to India on 26 Oct 1947 in exchange for military help; (5) Indian army airlifted troops and halted the invasion; (6) Nehru promised a UN-supervised plebiscite (never held); (7) The remaining Pakistani-held area became POK. This dispute continues today.",
      src:"NCERT History Class 12"
    },
    // ── Q47 ── Medieval
    {
      sec:"Medieval History", diff:"Moderate",
      q:"The Chola Empire maintained a sophisticated system of local self-governance in villages. The 'Uttiramerur inscription' is significant because it describes:",
      ops:["The military victories of Rajaraja Chola I over the Pandyas","Detailed rules for the election and functioning of local village assemblies (Sabhas) including qualifications, term limits, and disqualifications for members","The construction of the Brihadeeswarar temple at Thanjavur","The naval expedition of Rajendra I to Southeast Asia"],
      ans:1,
      note:"The <strong>Uttiramerur inscription</strong> (c. 10th century CE, Kanchipuram district) is one of the most remarkable documents of ancient Indian democracy. It describes the functioning of <strong>Sabhas</strong> (village assemblies): (1) <em>Qualifications</em> for membership (age, education, property, moral conduct), (2) <em>Disqualifications</em> (corruption, misconduct, having served without giving accounts), (3) <em>Term limits</em>, (4) Selection by lottery using 'Kudavolai' (pot-ticket) system. It shows sophisticated democratic governance at village level during the Chola period.",
      src:"NCERT History Class 6"
    },
    // ── Q48 ── Ancient
    {
      sec:"Ancient History", diff:"Hard",
      q:"The Mahajanapadas (c. 600–300 BCE) were 16 great kingdoms. Which of the following pairs is INCORRECTLY matched?",
      ops:["Magadha — Rajgir/Pataliputra (capital)","Kosala — Shravasti (capital)","Avanti — Ujjain/Mahishmati (capital)","Vatsa — Vaishali (capital)"],
      ans:3,
      note:"<strong>Vatsa</strong> had its capital at <strong>Kaushambi</strong> (near modern Allahabad) — NOT Vaishali. <em>Vaishali</em> was the capital of the <strong>Vajji confederacy</strong> (often called the world's first republic). Matching corrections: Magadha → Rajgir (later Pataliputra) ✅; Kosala → Shravasti ✅; Avanti → Ujjain (north) and Mahishmati (south) ✅; Vatsa → <strong>Kaushambi</strong> ❌ not Vaishali. The Vajji confederacy with Vaishali is separately mentioned in Buddhist texts as the home of Licchavi gana-sangha (oligarchic republic).",
      src:"NCERT History Class 6"
    },
    // ── Q49 ── Modern
    {
      sec:"Modern History", diff:"Moderate",
      q:"The famous painting 'Bharat Mata' (1905) was created by which Indian artist during the Swadeshi Movement, depicting Mother India as a four-armed goddess?",
      ops:["Raja Ravi Varma","Abanindranath Tagore","Nandalal Bose","Jamini Roy"],
      ans:1,
      note:"<strong>Abanindranath Tagore</strong> (nephew of Rabindranath Tagore) painted <em>Bharat Mata</em> in 1905 — depicting Mother India as a four-armed goddess holding rice, cloth, books, and a garland. This was a powerful nationalist symbol created during the <strong>Swadeshi Movement</strong> (triggered by Bengal Partition). Abanindranath was a founder of the <em>Bengal School of Art</em> (also called Indian style/Swadeshi art) which rejected Western oil-on-canvas style and revived miniature painting traditions. Tagore was his mentor.",
      src:"NCERT History Class 8"
    },
    // ── Q50 ── Medieval
    {
      sec:"Medieval History", diff:"Hard",
      q:"Which of the following CORRECTLY describes the difference between 'Kharaj', 'Khums', and 'Jizya' in the context of the Delhi Sultanate's revenue system?",
      ops:["All three were land taxes collected from Muslim farmers",
           "Kharaj was land tax on all subjects; Khums was one-fifth share of war booty given to the Sultan; Jizya was a poll tax on non-Muslims (dhimmis) for protection",
           "Kharaj was trade tax on goods entering cities; Khums was religious alms; Jizya was a pilgrimage tax for Hindus visiting sacred sites",
           "All three were forms of the same tax called by different names in different regions of the Sultanate"],
      ans:1,
      note:"In the Delhi Sultanate: (1) <strong>Kharaj</strong> — land revenue; in theory applied to non-Muslim farmers at a higher rate (traditionally 1/2 to 1/3 of produce) vs Muslims; (2) <strong>Khums</strong> — one-fifth (20%) of war booty and treasure (including mines) that was due to the Sultan/state — the rest was distributed among soldiers; (3) <strong>Jizya</strong> — a <em>poll tax</em> on <em>dhimmis</em> (protected non-Muslims) in exchange for protection and exemption from military service. Firuz Shah Tughluq even applied Jizya to Brahmins (previously exempt). Akbar abolished Jizya in 1564.",
      src:"NCERT History Class 7 + Medieval India — Satish Chandra"
    }
  ]
};
