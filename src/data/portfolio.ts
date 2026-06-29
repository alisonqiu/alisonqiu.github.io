export const CONTACT = {
  name: "Alison Qiu",
  title: "Software Engineer",
  email: "alisonqiu4@gmail.com",
  phone: "909-919-9975",
  github: "https://github.com/alisonqiu",
  linkedin: "https://www.linkedin.com/in/alisonqiu",
};

export const EDUCATION = {
  school: "Rice University",
  location: "Houston, TX",
  degree: "B.S. Computer Science",
  minor: "Data Science",
  graduation: "May 2024",
  gpa: "4.0",
  awards: [
    "President's Honor Roll",
    "Louis J. Walsh Scholarship in Engineering",
    "Rice Engineering Leadership Excellence Award",
  ],
};

export const TIMELINE = [
  { year: "2025", event: "Software Engineer at ZipRecruiter" },
  { year: "2024", event: "Graduated from Rice University" },
  { year: "2024", event: "Software Engineer at Two Sigma" },
  { year: "2023", event: "Amazon SDE Intern" },
  { year: "2022", event: "SlaveVoyages Data Science Intern" },
  { year: "2021", event: "ML research at Scalable Health Labs" },
];

export const ABOUT = {
  identities: [
    "software engineer",
    "reader",
    "philosopher",
    "Christian",
    "a proud nerd",
    "board gamer",
    "traveler",
    "meme collector",
    "language learner",
    "podcast enthusiast",
    "simulation hypothesis believer",
    "museum enthusiast",
    "puzzle solver",
    "rollercoaster rider",
    "hiker",
    "..."
  ],
  work: `I currently work at ZipRecruiter and live in the greater Los Angeles area, after a previous relationship brought me from Texas to California. Prior to the move, I worked at Two Sigma in Houston. I graduated from Rice University with a degree in Computer Science and a minor in Data Science.`,
  freeTime:
    "In my free time, I explore whatever random topics I stumble upon. I'll (try to) keep this site updated with the most interesting ones.",
  rabbitHoles: [
    {
      label: "Hanayama puzzles",
      href: "https://hanayama-toys.com/product-category/puzzles/huzzle/",
    },
    {
      label: "Building iPhone automations and shortcuts",
      href: null,
    },
    {
      label: 'Looking up "rock remix of [insert popular song name]" on YouTube',
      href: null,
    },
  ],
};

export const EXPERIENCES = [
  {
    id: "ziprecruiter",
    company: "ZipRecruiter",
    role: "Software Engineer",
    period: "May 2025 – Present",
    color: "#8B6914",
    responsibilities: [
      "Architected an LLM-based tool to automate anomaly detection of campaign setup and performance issues",
      "Built and maintained internal and public APIs for collecting and sharing job seeker contacts and resumes",
      "Implemented data ingestion pipeline from DeltaLake output by Scala/Spark",
    ],
    architecture: ["API Gateway", "LLM Service", "DeltaLake", "Spark ETL", "Job Seeker DB"],
    technologies: ["Go", "Apache Spark", "TypeScript", "Next.js", "Perl"],
    impact: "Automated campaign anomaly detection at scale across production job-matching systems",
  },
  {
    id: "twosigma",
    company: "Two Sigma",
    role: "Software Engineer",
    period: "Jun 2024 – Apr 2025",
    color: "#5C4A32",
    responsibilities: [
      "Built and supported 30+ production ETL data pipelines across global Kubernetes clusters",
      "Optimized legacy pipelines to save $100k in annual compute cost",
      "Designed and launched an aggregate tool to measure compute and memory allocation for future pipelines",
    ],
    architecture: ["K8s Clusters", "ETL Pipelines", "AWS/GCP", "Cost Monitor", "Data Lake"],
    technologies: ["Java", "Python", "AWS", "Kubernetes", "GCP"],
    impact: "$100k annual compute savings · 30+ production pipelines maintained globally",
  },
  {
    id: "amazon",
    company: "Amazon",
    role: "SDE Intern",
    period: "May 2023 – Aug 2023",
    color: "#6B5344",
    responsibilities: [
      "Generated end-to-end workflow for synthesizing human faces — generation, augmentation, and metadata labeling",
      "Trained a generative AI model to augment facial expressions and poses, eliminating 75% manual work",
      "Built automation infrastructure to ETL data to an internal collection system",
    ],
    architecture: ["Face Gen Model", "Augmentation", "ETL Pipeline", "S3 Storage", "Labeling"],
    technologies: ["Java", "Python", "C++", "JavaScript", "Docker", "AWS"],
    impact: "75% reduction in manual labeling · 30% lower data collection cost",
  },
];

export const PROJECTS = [
  {
    id: "fueling-clean",
    title: "Fueling Clean Initiatives",
    date: "November 2023",
    overview: "Predicted top states for renewable energy investment using empirical data pipelines.",
    problem: "Identifying optimal collaborators and investment targets in renewable energy requires synthesizing disparate datasets.",
    solution: "Built predictive models and data pipelines achieving 100% accuracy on top-5 state predictions.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Data Pipelines"],
    github: "https://github.com/alisonqiu/-Fueling-Clean-Initiatives",
    highlight: "2nd Place — Rice Datathon 2023",
  },
  {
    id: "speech-classification",
    title: "Sociability via Speech Classification",
    date: "May 2022",
    overview: "Convolutional recurrent neural network for audio classification with 90%+ test accuracy.",
    problem: "Measuring sociability from speech requires robust classification on limited labeled data.",
    solution: "Engineered 1000+ augmented audio segments and trained a CRNN achieving 90%+ accuracy.",
    technologies: ["Python", "PyTorch", "TensorFlow", "NumPy"],
    github: "https://github.com/alisonqiu/Sociability-Measures-Using-Speech-Classification-",
    highlight: "Award for Mastery in Presentations — Research Symposium",
  },
  {
    id: "stock-prediction",
    title: "Stock Market Prediction",
    date: "October 2022",
    overview: "Statistical model for stock trading using two years of performance data and Markov chains.",
    problem: "Short-term price movement prediction for DJIA components requires probabilistic modeling.",
    solution: "Simulated future prices for DJIA, GOOG, and FSLR using Markov chain analysis.",
    technologies: ["Python", "Statistics", "Markov Chains", "Matplotlib"],
    github: null,
    highlight: "Multi-ticker probabilistic forecasting",
  },
  {
    id: "slave-voyage",
    title: "SlaveVoyages Data Visualization",
    date: "May 2022 – Aug 2022",
    overview: "Built and deployed a data visualization interface for the largest slave voyage repository spanning the 16th–19th centuries.",
    problem: "50,000+ voyage records needed an accessible, performant geographic interface for researchers and the public.",
    solution: "Developed an interactive Mapbox map displaying SQL data, deployed with Redis caching on Heroku.",
    technologies: ["Python", "Docker", "React", "Mapbox", "Heroku", "Redis"],
    github: "https://github.com/alisonqiu/Slave_Voyage",
    highlight: "50k monthly visitors · ~20% increase in website traffic",
  },
  {
    id: "scalable-health-labs",
    title: "Scalable Health Labs — Speech AI",
    date: "Oct 2021 – Jun 2024",
    overview: "Trained deep learning models to predict patients' depression levels from anonymous audio data.",
    problem: "Clinical depression assessment from speech requires robust models and cross-device audio compatibility.",
    solution: "Trained DL models on anonymous audio and built device simulation scripts for iPhone-to-raw audio feature extraction.",
    technologies: ["Python", "PyTorch", "Apache Spark", "NumPy", "Keras", "TensorFlow"],
    github: null,
    highlight: "Longitudinal health speech AI research spanning 3 years",
  },
  {
    id: "aware-ambiance-speakers",
    title: "AWARE Ambiance Speakers Plugin",
    date: "Dec 2022 – Aug 2023",
    overview: "iOS plug-in for audio collection and deep learning processing on the AWARE mobile research framework.",
    problem: "Mobile research frameworks need on-device audio capture and DNN processing pipelines.",
    solution: "Developed and deployed the Ambiance Speakers DNN plug-in on AWARE iOS, an open-source data collection framework.",
    technologies: ["Java", "Swift", "Objective-C", "Xcode", "C++"],
    github: "https://github.com/alisonqiu/AWAREFramework-iOS",
    highlight: "Production DNN deployment on open-source mobile research framework",
  },
  {
    id: "speech-recognition",
    title: "Speech Recognition iOS App",
    date: "2023",
    overview: "iOS application using PyTorch ML models with Swift and Objective-C integration.",
    problem: "On-device speech recognition requires bridging Python ML with native iOS.",
    solution: "Built iOS app integrating PyTorch models via Swift/ObjC bridge.",
    technologies: ["Swift", "Objective-C", "PyTorch", "iOS"],
    github: "https://github.com/alisonqiu/speech_recognition",
    highlight: "Cross-platform ML on mobile",
  },
  {
    id: "llm evaluation",
    title: "llm evaluation platform",
    date: "2025",
    overview: "Evaluation platform for Terminal-Bench tasks against the Terminus agent.",
    problem: "Agent benchmarking requires reproducible harness infrastructure.",
    solution: "Built Harbor harness evaluation platform for automated agent testing.",
    technologies: ["Python", "Docker", "CI/CD"],
    github: "https://github.com/alisonqiu/Terminal-Bench-Harbor-Evaluation-Platform",
    highlight: "Agent evaluation infrastructure",
  },
];

export const SKILL_CATEGORIES = [
  {
    name: "Languages",
    icon: "◈",
    skills: ["Java", "JavaScript", "Python", "Go", "C", "Swift", "TypeScript"],
  },
  {
    name: "Systems & Infra",
    icon: "⬡",
    skills: ["Docker", "Kubernetes", "AWS", "GCP", "Redis", "Apache Spark"],
  },
  {
    name: "Frontend",
    icon: "◇",
    skills: ["React", "Next.js", "HTML/CSS", "Mapbox", "Swift/iOS"],
  },
  {
    name: "Data & ML",
    icon: "◎",
    skills: ["PyTorch", "TensorFlow", "SQL", "Pandas", "R", "Tableau"],
  },
  {
    name: "Practices",
    icon: "✦",
    skills: ["API Design", "DevOps", "OOP", "Database Systems", "Web Scraping"],
  },
];

export const AFK = {
  subtitle: "my personal favorites outside of software engineering",
  goodreads: {
    label: "My Goodreads",
    href: "https://www.goodreads.com/user/show/172815531",
    note: "(Let's be friends on Goodreads!)",
  },
  quotes: [
    {
      text: "There are four good things worth practicing. Being kind toward everything alive. Staying level and steady. Feeling happy for any creature anywhere that is happy. And remembering that any suffering is also yours.",
      author: "Richard Powers",
    },
    {
      text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
      author: "Jeremiah 29:11",
    },
    {
      text: "The cosmos is within us. We are made of star-stuff.",
      author: "Carl Sagan",
    },
  ],
  twoTruthsAndALie: [
    { text: "I went on 10 rollercoasters in one day at Six Flags", isLie: false },
    { text: "I read 97 books in 2025", isLie: false },
    { text: "I can speak 4 languages", isLie: true },
  ],
};

export const CHAPTERS = [
  { id: "about", title: "About Me", spreadIndex: 1 },
  { id: "experience", title: "Experience", spreadIndex: 2 },
  { id: "projects", title: "Projects", spreadIndex: 3 },
  { id: "skills", title: "Skills", spreadIndex: 4 },
  { id: "afk", title: "AFK", spreadIndex: 5 },
] as const;

export const TOTAL_SPREADS = 6; // TOC + 5 chapters
