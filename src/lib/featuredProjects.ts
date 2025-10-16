interface Project {
  name: string;
  status: string;
  image: string;
  description: string;
  link?: string;
  techStack?: string;
  techDetails?: string;
}

const baseURL = `${process.env.NEXT_PUBLIC_AWS_S3_BASE_URL}project-thumbnails/`;

export const projects: Project[] = [
  {
    name: "Holy Bible",
    status: "Under Development",
    image: `${baseURL}Holy+Bible.jpg`,
    description:
      "Grow yourself spiritually and get closer to God by reading the Scriptures, studying customized study plans and devotionals.",
    techStack:
      "Stack: Next.js, TypeScript, Tailwind CSS, AWS RDS, AWS S3, APIs, Vercel",
    techDetails:
      "The Bible Web App aims to make scripture accessible, intuitive, and meaningful for users worldwide, with a focus on inclusivity and user engagement. As a personal learning project, it serves to master modern web and mobile development technologies. Key goals include: Accessibility: Ensure the app is usable by all, including those with visual, auditory, or motor impairments. User Engagement: Provide features like study plans and community interaction to deepen Bible study. Scalability: Deploy a production-ready app to Vercel with a cloud database (e.g., Supabase, Neon). Mobile Expansion: Build a React Native app to extend the experience to mobile users. Personal Mission: Create a tool that supports spiritual growth, inspired by a commitment to making the Bible approachable for all.",
  },
  {
    name: "Resume Builder",
    status: "Live",
    image: `${baseURL}Resume+Builder.jpg`,
    description:
      "Leverage Google Gemini AI to build resumes and cover letters tailored specifically to a selected job description.",
    link: "https://resume-builder-t6fw.onrender.com",
    techStack:
      "Stack: Django, Docker, Supabase, Tailwind CSS, Google Gemini API, AWS EC2, AWS ECR.",
    techDetails:
      "Resume Builder is a full-stack web application that utilizes Django and Docker to create a robust backend service. It integrates with the Google Gemini API to generate tailored resumes and cover letters based on user-selected job descriptions and user profiles (For example: Full-Stack Developer me vs Database Engineer me). The application uses Supabase for database management, ensuring efficient data storage and retrieval. The frontend is styled with Tailwind CSS, providing a modern and responsive user interface. Deployed on AWS EC2 with Docker, the application ensures scalability and reliability, making it easy for users to create professional resumes effortlessly.",
  },
  {
    name: "Football",
    status: "Live",
    image: `${baseURL}Football.jpg`,
    description:
      "Track major football league standings, game schedules, and news. Perfect for those football junkies needing a quick fix.",
    link: "https://football.stevensousa.com",
    techStack: "Stack: Next.js, Shadcn, Tailwind CSS, ESPN API, Supabase, Vercel",
    techDetails:
      "Football is a full-stack web application that leverages Next.js and Shadcn to create a modern and responsive user interface. It interacts with the ESPN API to retrieve and process football data across seven major leagues around the world. Supabase stores supplementary data, ensuring fast querying and scalability. The frontend, built with Tailwind CSS, provides a dynamic and intuitive interface, enabling users to navigate seamlessly through league information and updates. Additionally, users can create accounts and save their favorite teams, enhancing the personalized experience.",
  },
];
