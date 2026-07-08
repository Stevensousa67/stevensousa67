interface Accomplishments {
  date: string;
  title: string;
  company: string;
  description: string;
  type: string;
  icon: string;
  isBlack?: boolean;
}

const baseURL  = `/svgs/myJourney/`;

export const myJourney: Accomplishments[] = [
  {
    type: "work",
    date: "December 2025 - Present",
    title: "Freelance Web Developer",
    company: "Silver Home Health Services",
    description: "● Built the complete online presence for Silver Home Health Services, a non-medical, private-pay home care business, including a responsive website with contact forms, service information, and client outreach features. \n● Implemented secure contact workflows using Resend and Cloudflare Turnstile. \n● Achieved a 96 Performance score and perfect 100s in Accessibility, Best Practices, and SEO on Google Search Console PageSpeed Insights audits, ensuring an optimal user experience across all devices.",
    icon: `${baseURL}work.svg`,
    isBlack: true,
  },
  {
    type: "work",
    date: "September 2025 - Present",
    title: "Software Engineer",
    company: "Symmons Industries, Inc.",
    description: "● Serve as the technical owner of the Evolution mobile application, responsible for feature development, QA processes, release management, and production support across iOS and Android.\n● Established and implemented mobile QA procedures, including regression testing workflows and release validation processes, improving consistency and reliability of production releases.\n● Develop and deliver mobile features using React Native, TypeScript, and Expo, owning implementation from requirements through production deployment.\n● Manage a weekly to biweekly mobile release cadence, including App Store and Google Play submissions, release documentation, and post-release monitoring.\n ● Design and develop Spring Boot backend services, controllers, DTOs and REST APIs powering the Evolution platform, enabling shared functionality across web and mobile applications.\n ● Design and implement Salesforce integrations to synchronize business data across enterprise systems and automate workflows.\n● Contribute to the Evolution web application by developing features and resolving defects using Vue.js.",
    icon: `${baseURL}work.svg`,
    isBlack: true,
  },
  {
    type: "work",
    date: "Aug 2022 - September 2025",
    title: "Business Intelligence Developer",
    company: "Tech Etch Inc.",
    description: "● Drove a $3.4M annual revenue increase by engineering a Power BI visibility report that provided critical operational insights, enabling early job delivery.\n● Enhanced profitability by creating a Power BI report that analyzed key metrics for all internal part numbers, identifying over 147 opportunities for cost and efficiency optimizations.\n● Architected and launched a centralized, responsive Power BI reporting hub, overcoming default portal limitations to streamline report discovery and significantly boost data accessibility for stakeholders across the organization.\n● Optimized operational efficiency by automating a critical daily reporting process with Power BI, eliminating 31 hours of manual work annually.\n● Acted as a key liaison between technical and business units, translating complex requirements from diverse stakeholders—from operations to the executive team—into intuitive Power BI dashboards and actionable solutions.",
    icon: `${baseURL}work.svg`,
    isBlack: true,
  },
  {
    type: "education",
    date: "Sep 2023 - May 2025: Summa Cum Laude (3.9 GPA)",
    title: "BS in Computer Science",
    company: "Bridgewater State University",
    description: "● Software Engineering & Core Concepts: Analysis of Algorithms, Operating Systems, Software Engineering, and Web Application Development.\n● Data & Cloud Technologies: Databases, Cloud Computing, Computer Networks, and Computer Forensics.\n● Artificial Intelligence: Machine Learning and Intro to Artificial Intelligence.\n● Capstone Experience: Applied cumulative knowledge in a semester-long Senior Design and Development project, building a full-scale application from concept to deployment.",
    icon: `${baseURL}education.svg`,
    isBlack: true,
  },
  {
    type: "education",
    date: "Sep 2020 - Dec 2022: 3.7 GPA",
    title: "AA in Computer Science",
    company: "Cape Cod Community College",
    description: "● Programming Paradigms: Mastered core programming techniques through comprehensive coursework in Procedural Programming and Object-Oriented Programming (OOP).\n● CS Theory & Logic: Developed critical problem-solving abilities with in-depth study of Data Structures & Algorithms and Discrete Structures.\n● Systems Fundamentals: Gained a strong understanding of how software interacts with hardware through courses like Computer Architecture and Intro to Computer Systems.",
    icon: `${baseURL}education.svg`,
    isBlack: true,
  },
];
