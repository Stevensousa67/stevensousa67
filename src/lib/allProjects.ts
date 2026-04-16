export interface Project {
  name: string;
  status: "Live" | "Under Development";
  image: string;
  description: string;
  link?: string;
  techStack: string[];
  techDetails?: string;
  category: "professional" | "web" | "python";
  featured?: boolean;
  highlights?: string[];
}

const baseURL = `/project-thumbnails/`;

export const projects: Project[] = [
  {
    name: "Silver Home Health Services",
    status: "Live",
    image: `${baseURL}SHHS.png`,
    description:
      "Built the complete online presence for Silver Home Health Services — a non-medical, private-pay home care business — including a responsive website with contact forms, service information, and client outreach features.",
    link: "https://silverhhs.com",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "Resend",
      "Cloudflare Turnstile",
      "Vercel",
    ],
    techDetails:
      "Designed and developed a full-stack Next.js application for Silver Home Health Services — a non-medical, private-pay home care business — focusing on performance, security, and conversion. Built a responsive UI with Shadcn and Tailwind CSS, implemented secure contact workflows using Resend and Cloudflare Turnstile, and deployed via Vercel. Achieved a 96 performance score and perfect 100s in Accessibility, Best Practices, and SEO on Google PageSpeed Insights.",
    category: "professional",
    featured: true,
    highlights: ["96 Performance", "100 Accessibility", "100 SEO", "100 Best Practices"],
  },
  {
    name: "Acme Landscaping",
    status: "Live",
    image: `${baseURL}Acme Landscaping.png`,
    description:
      "Spec work — designed and built a modern marketing website for a landscaping company, featuring service pages, a project gallery, and a contact form for lead generation.",
    link: "https://acmeland.stevensousa.com",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "Resend",
      "Vercel",
    ],
    techDetails:
      "Spec work built to demonstrate what a high-quality web presence could look like for a local landscaping business. Designed a conversion-focused marketing site with service detail pages, a project gallery, and a contact form powered by Resend. Deployed on Vercel with a focus on performance and SEO.",
    category: "professional",
  },
  {
    name: "Holy Bible",
    status: "Under Development",
    image: `${baseURL}Holy Bible.jpg`,
    description:
      "Grow yourself spiritually and get closer to God by reading the Scriptures, studying customized study plans and devotionals.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AWS RDS", "S3", "Vercel"],
    techDetails:
      "The Bible Web App aims to make scripture accessible, intuitive, and meaningful for users worldwide. Key goals include accessibility for all users, study plans and community interaction for engagement, a production-ready cloud deployment via Vercel and Supabase, and a future React Native mobile expansion. Built as a personal project to master modern web development while supporting spiritual growth.",
    category: "web",
  },
  {
    name: "Resume Builder",
    status: "Live",
    image: `${baseURL}Resume Builder.jpg`,
    description:
      "Leverage Google Gemini AI to build resumes and cover letters tailored specifically to a selected job description.",
    link: "https://resume-builder-t6fw.onrender.com",
    techStack: [
      "Django",
      "Docker",
      "Supabase",
      "Bootstrap",
      "Google Gemini API",
      "AWS EC2",
      "AWS ECR",
    ],
    techDetails:
      "Resume Builder is a full-stack web application that integrates with the Google Gemini API to generate tailored resumes and cover letters based on user-selected job descriptions and role-specific profiles. Built with Django and containerized via Docker, deployed on AWS EC2 with ECR. Supabase handles database management, and Bootstrap provides a modern, responsive frontend.",
    category: "web",
  },
  {
    name: "YelpCamp!",
    status: "Live",
    image: `${baseURL}YelpCamp!.jpeg`,
    description:
      "Find, review, and create campgrounds. Perfect for camping enthusiasts looking to explore new sites and share their experiences.",
    link: "https://yelpcamp.stevensousa.com",
    techStack: ["Node.js", "Express", "MongoDB Atlas", "Cloudinary", "EJS", "Bootstrap"],
    techDetails:
      "YelpCamp! is a full-stack web application providing a RESTful API for campground management. MongoDB Atlas handles data storage, Cloudinary manages image uploads, and the frontend uses EJS and Bootstrap for a responsive interface. User authentication is managed with Passport.js, allowing users to create accounts, log in, and manage campground reviews and submissions.",
    category: "web",
  },
  {
    name: "Football",
    status: "Live",
    image: `${baseURL}Football.jpg`,
    description:
      "Track major football league standings, game schedules, and news across seven leagues worldwide. Perfect for football junkies needing a quick fix.",
    link: "https://football.stevensousa.com",
    techStack: ["Next.js", "Shadcn", "Tailwind CSS", "ESPN API", "Supabase", "Vercel"],
    techDetails:
      "Football is a full-stack Next.js application that interacts with the ESPN API to retrieve and process football data across seven major leagues. Supabase stores supplementary data for fast querying, and Tailwind CSS provides a dynamic, responsive interface. Users can create accounts and save favorite teams for a personalized experience.",
    category: "web",
  },
  {
    name: "Population Analysis",
    status: "Live",
    image: `${baseURL}AI.jpg`,
    description:
      "Explore and analyze population data from the World Bank using machine learning algorithms, providing insights into global trends and statistics.",
    link: "https://github.com/Stevensousa67/Artificial-Intelligence/tree/main/Population_History_App",
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Flask", "Bootstrap"],
    techDetails:
      "Population Analysis is a data visualization web application that applies machine learning algorithms — Linear Regression, ARIMA, and K-Means Clustering — to World Bank population data. Built with Python and Flask, using Pandas for data manipulation and Matplotlib/Seaborn for visualization. Users can upload their own datasets to generate custom insights and charts.",
    category: "python",
  },
  {
    name: "Meteorite Landings",
    status: "Live",
    image: `${baseURL}Meteorite Landings.jpg`,
    description:
      "Explore meteorite landing data straight from NASA, providing insights into landings and characteristics across over 10,000 recorded events.",
    link: "https://github.com/Stevensousa67/COMP390/tree/main/Assignment%201.2",
    techStack: ["Python", "NASA API"],
    techDetails:
      "Meteorite Landings is a terminal application that allows users to explore meteorite landing data provided by NASA. It processes a raw dataset of over 10,000 meteorite landings worldwide, letting users view classification, fall status, and coordinates for each event. Built as an educational tool for those interested in space science.",
    category: "python",
  },
  {
    name: "Enigma Machine",
    status: "Live",
    image: `${baseURL}Enigma Machine.jpg`,
    description:
      "Experience the mystery of the Enigma Machine. Encrypt and decrypt messages just like the cipher device used during World War II.",
    link: "https://github.com/Stevensousa67/CSC105/tree/main/Moodle_Assignments/Capstone%20Project",
    techStack: ["Python"],
    techDetails:
      "Enigma Machine is a Python GUI application that simulates the historical cipher device used during World War II. Users can input messages, select rotor configurations, and see encrypted or decrypted output in real-time. Serves as both an educational tool and a tribute to early cryptographic ingenuity.",
    category: "python",
  },
  {
    name: "Snake Game",
    status: "Live",
    image: `${baseURL}Snake Game.jpg`,
    description:
      "Relive the classic Snake game with a Halloween-themed modern twist. Test your reflexes and strategy in this iconic arcade experience.",
    link: "https://github.com/Stevensousa67/CSC105/blob/main/Moodle_Assignments/Snake_Game.py",
    techStack: ["Python", "Pygame"],
    techDetails:
      "Snake Game is a classic arcade game implemented in Python using the Pygame library, featuring a Halloween theme with custom sound effects and animations. Players control a growing snake, avoiding collisions with walls and itself. Built to practice Python programming and game development fundamentals.",
    category: "python",
  },
];
