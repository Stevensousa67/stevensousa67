interface Project {
  name: string;
  status: string;
  image: string;
  description: string;
  link?: string;
  techStack?: string;
  techDetails?: string;
}

const baseURL = `/project-thumbnails/`;

export const projects: Project[] = [
  {
    name: "Holy Bible",
    status: "Under Development",
    image: `${baseURL}Holy Bible.jpg`,
    description:
      "Grow yourself spiritually and get closer to God by reading the Scriptures, studying customized study plans and devotionals.",
    techStack:
      "Stack: Next.js, TypeScript, Tailwind CSS, APIs, AWS RDS, S3, Vercel",
    techDetails:
      "The Bible Web App aims to make scripture accessible, intuitive, and meaningful for users worldwide, with a focus on inclusivity and user engagement. As a personal learning project, it serves to master modern web and mobile development technologies. Key goals include: Accessibility: Ensure the app is usable by all, including those with visual, auditory, or motor impairments. User Engagement: Provide features like study plans and community interaction to deepen Bible study. Scalability: Deploy a production-ready app to Vercel with a cloud database (e.g., Supabase, Neon). Mobile Expansion: Build a React Native app to extend the experience to mobile users. Personal Mission: Create a tool that supports spiritual growth, inspired by a commitment to making the Bible approachable for all.",
  },
  {
    name: "Silver Home Health Services",
    status: "Live",
    image: `${baseURL}SHHS.png`,
    description:
      "Freelance project: Built the complete online presence for Silver Home Health Services, a non-medical, private-pay home care business, including a responsive website with contact forms, service information, and client outreach features.",
    link: "https://silverhhs.com",
    techStack:
      "Stack: Next.js, TypeScript, Tailwind CSS, Shadcn, Resend, Cloudflare Turnstile, Vercel",
    techDetails:
      "Designed and developed a full-stack Next.js application for Silver Home Health Services - a non-medical, private-pay home care business - focusing on performance, security, and conversion. Built a responsive UI with Shadcn and Tailwind CSS, implemented secure contact workflows using Resend and Cloudflare Turnstile, and deployed via Vercel. Achieved a 96 performance score and perfect 100s in accessibility, best practices, and SEO on Google PageSpeed Insights.",
  },
  {
    name: "Resume Builder",
    status: "Live",
    image: `${baseURL}Resume Builder.jpg`,
    description:
      "Leverage Google Gemini AI to build resumes and cover letters tailored specifically to a selected job description.",
    link: "https://resume-builder-t6fw.onrender.com",
    techStack:
      "Stack: Django, Docker, Supabase, Bootstrap, Google Gemini API, AWS EC2 & ECR.",
    techDetails:
      "Resume Builder is a full-stack web application that utilizes Django and Docker to create a robust backend service. It integrates with the Google Gemini API to generate tailored resumes and cover letters based on user-selected job descriptions and user profiles (For example: Full-Stack Developer me vs Database Engineer me). The application uses Supabase for database management, ensuring efficient data storage and retrieval. The frontend is styled with Bootstrap, providing a modern and responsive user interface. Deployed on AWS EC2 with Docker, the application ensures scalability and reliability, making it easy for users to create professional resumes effortlessly.",
  },
  {
    name: "YelpCamp!",
    status: "Live",
    image: `${baseURL}YelpCamp!.jpeg`,
    description:
      "Love campgrounds? This app allows you to find, review, and create campgrounds. Perfect for camping enthusiasts looking to explore new sites.",
    link: "https://yelpcamp.stevensousa.com",
    techStack:
      "Stack: Node.js, Express, MongoDB Atlas, Cloudinary, EJS, Bootstrap",
    techDetails:
      "YelpCamp! is a full-stack web application that allows users to find, review, and create campgrounds. Built with Node.js and Express, it provides a RESTful API for campground management. MongoDB Atlas is used for data storage, while Cloudinary handles image uploads and storage. The frontend is designed with EJS and Bootstrap, ensuring a responsive and user-friendly interface. User authentication is managed with Passport.js, allowing users to create accounts, log in, and manage their campground reviews and submissions.",
  },
  {
    name: "Population Analysis",
    status: "Live",
    image: `${baseURL}AI.jpg`,
    description:
      "Are you a data nerd? This app allows you to analyze population data from the World Bank, providing insights into global trends and statistics.",
    link: "https://github.com/Stevensousa67/Artificial-Intelligence/tree/main/Population_History_App",
    techStack: "Stack: Python, Pandas, Matplotlib, Seaborn, Flask, Bootstrap",
    techDetails:
      "Population Analysis is a data visualization web application that allows users to explore and analyze population data from the World Bank by applying machine learning algorithms such as Linear Regression, ARIMA, and K-Means Clustering. It is built with Python and Flask, utilizing Pandas for data manipulation and Matplotlib/Seaborn for data visualization. The frontend is styled with Bootstrap, providing a clean and responsive user interface. Users can upload their own datasets to generate visualizations and insights, making it a powerful tool for data enthusiasts and researchers.",
  },
  {
    name: "Football",
    status: "Live",
    image: `${baseURL}Football.jpg`,
    description:
      "Track major football league standings, game schedules, and news. Perfect for those football junkies needing a quick fix.",
    link: "https://football.stevensousa.com",
    techStack:
      "Stack: Next.js, Shadcn, Tailwind CSS, ESPN API, Supabase, Vercel",
    techDetails:
      "Football is a full-stack web application that leverages Next.js and Shadcn to create a modern and responsive user interface. It interacts with the ESPN API to retrieve and process football data across seven major leagues around the world. Supabase stores supplementary data, ensuring fast querying and scalability. The frontend, built with Tailwind CSS, provides a dynamic and intuitive interface, enabling users to navigate seamlessly through league information and updates. Additionally, users can create accounts and save their favorite teams, enhancing the personalized experience.",
  },
  {
    name: "Meteorite Landings",
    status: "Live",
    image: `${baseURL}Meteorite Landings.jpg`,
    description:
      "Are you a metorite enthusiast? This app allows you to explore meteorite landing data, providing insights into their landings and characteristics - straight from NASA.",
    link: "https://github.com/Stevensousa67/COMP390/tree/main/Assignment%201.2",
    techStack: "Stack: Python, NASA API",
    techDetails:
      "Meteorite Landings is a data visualization terminal application that allows users to explore meteorite landing data provided by NASA. It is built with Python and utilizes a raw data file containing over 10 thousand meteorite landings around the world. Users can view detailed information about each meteorite, including its classification, fall status, and coordinates. This project serves as an educational tool for those interested in space science and meteorites.",
  },
  {
    name: "Enigma Machine",
    status: "Live",
    image: `${baseURL}Enigma Machine.jpg`,
    description:
      "Experience the mystery of the Enigma Machine, a fascinating piece of history. This app allows you to encrypt and decrypt messages just like the original machine.",
    link: "https://github.com/Stevensousa67/CSC105/tree/main/Moodle_Assignments/Capstone%20Project",
    techStack: "Stack: Python",
    techDetails:
      "Enigma Machine is a Python GUI applicattion that simulates the historical Enigma Machine used during World War II for secure communication. It allows users to encrypt and decrypt messages using the same principles as the original machine, providing an interactive way to understand the complexities of cryptography. The application features a user-friendly interface where users can input their messages, select rotor configurations, and see the encrypted or decrypted output in real-time. This project serves as both an educational tool and a tribute to the ingenuity of early cryptographic technology.",
  },
  {
    name: "Snake Game",
    status: "Live",
    image: `${baseURL}Snake Game.jpg`,
    description:
      "Relive the classic Snake game with a modern twist: Halloween themed. This app allows you to play the iconic game, testing your reflexes and strategy.",
    link: "https://github.com/Stevensousa67/CSC105/blob/main/Moodle_Assignments/Snake_Game.py",
    techStack: "Stack: Python, Pygame",
    techDetails:
      "Snake Game is a classic arcade game implemented in Python using the Pygame library. It features a Halloween theme, adding a festive twist to the traditional gameplay. Players control a snake that grows longer as it eats food, while avoiding collisions with the walls and itself. The game includes sound effects and animations to enhance the user experience. This project serves as a fun and engaging way to practice Python programming and game development concepts.",
  },
];
