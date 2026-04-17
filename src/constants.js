// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import codexLogo from './assets/company_logo/codexlogo.png';

// Education Section Logo's
import kclLogo from './assets/education_logo/kcl.png';
import valiaLogo from './assets/education_logo/Valialogo.png';
import bhutaLogo from './assets/education_logo/sndl.png';

// Project Section Logo's
import ecotraceLogo from './assets/work_logo/Ecotrace.png';
import carboncreditLogo from './assets/work_logo/Carbon_credit.jpg';
import cropdetectionLogo from './assets/work_logo/crop_detection.jpg';
import medicaliLogo from './assets/work_logo/medical_i.jpg';
import realestateLogo from './assets/work_logo/Realestate.png';
import jobportalLogo from './assets/work_logo/job_portal.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      // { name: 'C', logo: cLogo },
      // { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Java', logo: javaLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: codexLogo,
      role: "Python Development Intern",
      company: "CODEXINTERN",
      date: "April 2025 – April 2025",
      desc: "Worked on real-world Python-based projects, focusing on backend development, data processing, and application logic. Developed and implemented solutions using Python, including projects like voice assistants, sentiment analysis systems, and machine learning-based applications. Gained hands-on experience in writing clean, efficient code and integrating different technologies to build functional applications.",
      skills: [
        "Python",
        "Flask",
        "Machine Learning",
        "Data Analysis",
        "HTML",
        "CSS",
        "JavaScript",
        "Git & GitHub",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: kclLogo,
      school: "K.C. College of Engineering and Management Studies and Research, Mumbai",
      date: "November 2022 - May2026 (Expected)",
      grade: "7.87 CGPA",
      desc: "I am pursuing my Bachelor of Engineering in Information Technology. My studies focus on software development, data structures, algorithms, and modern web technologies. I am actively involved in hackathons and technical projects to apply my learning in real-world scenarios.",
      degree: "Bachelor of Engineering in Information Technology",
    },
    {
      id: 1,
      img: valiaLogo,
      school: "Cosmopolitan's Valia Lilavantiben Chhaganlal Junior College of Science, Mumbai",
      date: "August 2021 - March 2022",
      grade: "57%",
      desc: "Completed Higher Secondary Certificate (HSC) with a focus on Science subjects.",
      degree: "HSC (XII) – Science",
    },
    {
      id: 2,
      img: bhutaLogo,
      school: "Shree N.D. Bhuta High School, Mumbai",
      date: "June 2019 - March 2020",
      grade: "77%",
      desc: "Completed Secondary School Certificate (SSC) with distinction.",
      degree: "SSC (X)",
    },
  ];

  export const projects = [
    {
      id: 0,
      title: "EcoTrace: Carbon Footprint Accounting",
      description:
        "An intelligent AI-powered carbon accounting tool designed for academic institutions. Automates data extraction from utility bills and invoices using OCR (PaddleOCR) and analyzes emissions with NLP to provide actionable sustainability insights.",
      image: ecotraceLogo,
      tags: ["AI", "OCR", "NLP", "Python", "Flask", "React.js"],
      github: "https://github.com/AyushChaurasia2611/Ecotrace-Carbon_Footprint_Accounting",
      webapp: "https://github.com/AyushChaurasia2611/Ecotrace-Carbon_Footprint_Accounting",
    },
    {
      id: 1,
      title: "Decentralized Carbon Credit Trading Platform",
      description:
        "A blockchain-based platform using Ethereum smart contracts to automate carbon credit issuance, trading, and retirement. Ensures transparency, traceability, and secure document storage through IPFS, eliminating intermediaries and preventing double spending.",
      image: carboncreditLogo,
      tags: ["Blockchain", "Ethereum", "Solidity", "Smart Contracts", "React.js"],
      github: "https://github.com/AyushChaurasia2611",
      webapp: "https://github.com/AyushChaurasia2611",
    },
    {
      id: 2,
      title: "Crop Disease Detection",
      description:
        "An IoE-based system integrating sensor networks with image processing for real-time crop health monitoring. Developed using NodeMCU, Python, and TensorFlow/Keras to provide actionable insights for farmers and prevent disease spread.",
      image: cropdetectionLogo,
      tags: ["IoT", "Python", "Machine Learning", "OpenCV", "TensorFlow"],
      github: "https://github.com/AyushChaurasia2611/Crop-disease-detection",
      webapp: "https://github.com/AyushChaurasia2611/Crop-disease-detection",
    },
    {
      id: 3,
      title: "Medical Insurance Cost Prediction",
      description:
        "A high-performance prediction system using XGBoost to estimate medical insurance costs based on demographic and health factors. Features a Flask backend for real-time accurate cost forecasting and risk assessment.",
      image: medicaliLogo,
      tags: ["Python", "Machine Learning", "XGBoost", "Flask", "Data Analysis"],
      github: "https://github.com/AyushChaurasia2611/Medical_insurance_cost_prediction",
      webapp: "https://github.com/AyushChaurasia2611/Medical_insurance_cost_prediction",
    },
    {
      id: 4,
      title: "Real Estate Website",
      description:
        "A full-stack real estate platform built with the MERN stack. Features include dynamic property listings, advanced search filters, and an intuitive user interface for seamless property transactions and discovery.",
      image: realestateLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Fullstack"],
      github: "https://github.com/AyushChaurasia2611",
      webapp: "https://github.com/AyushChaurasia2611",
    },
    {
      id: 5,
      title: "Online Job Portal",
      description:
        "A robust web application built with Python and Django to bridge the gap between job seekers and recruiters. Features user-friendly interfaces for browsing job listings, profile management, and streamlined recruitment processes.",
      image: jobportalLogo,
      tags: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/AyushChaurasia2611",
      webapp: "https://github.com/AyushChaurasia2611",
    },
  ];