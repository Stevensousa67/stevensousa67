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
    name: "Silver Home Health Services",
    status: "Live",
    image: `${baseURL}SHHS.png`,
    description:
      "Freelance project: Built the online presence for Silver Home Health Services, a non-medical, private-pay home care business.",
    link: "https://silverhhs.com",
    techStack:
      "Stack: Next.js, TypeScript, Tailwind CSS, Shadcn, Resend, Cloudflare Turnstile, Vercel",
    techDetails:
      "Designed and developed a full-stack Next.js application for Silver Home Health Services - a non-medical, private-pay home care business - focusing on performance, security, and conversion. Built a responsive UI with Shadcn and Tailwind CSS, implemented secure contact workflows using Resend and Cloudflare Turnstile, and deployed via Vercel. Achieved a 96 performance score and perfect 100s in accessibility, best practices, and SEO on Google PageSpeed Insights.",
  },
  {
    name: "Holy Bible",
    status: "Under Development",
    image: `${baseURL}Holy Bible.jpg`,
    description:
      "Grow yourself spiritually and get closer to God by reading the Scriptures, studying customized study plans and devotionals.",
    techStack:
      "Stack: Next.js, TypeScript, Tailwind CSS, AWS RDS, AWS S3, APIs, Vercel",
    techDetails:
      "The Bible Web App aims to make scripture accessible, intuitive, and meaningful for users worldwide, with a focus on inclusivity and user engagement. As a personal learning project, it serves to master modern web and mobile development technologies. Key goals include: Accessibility: Ensure the app is usable by all, including those with visual, auditory, or motor impairments. User Engagement: Provide features like study plans and community interaction to deepen Bible study. Scalability: Deploy a production-ready app to Vercel with a cloud database (e.g., Supabase, Neon). Mobile Expansion: Build a React Native app to extend the experience to mobile users. Personal Mission: Create a tool that supports spiritual growth, inspired by a commitment to making the Bible approachable for all.",
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
