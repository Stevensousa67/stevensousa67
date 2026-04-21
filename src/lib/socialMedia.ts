export interface SocialMedia {
    name: string;
    url: string;
    icon: string;
    isBlack?: boolean;
    type?: "link" | "email" | "phone";
}

const baseUrl = `/svgs/socials/`;

export const socialMedia: SocialMedia[] = [
    {
        name: "GitHub",
        url: "https://www.github.com/Stevensousa67",
        icon: `${baseUrl}github.svg`,
        isBlack: true,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/stevenssousa/",
        icon: `${baseUrl}linkedin.svg`,
        isBlack: true,
    },
    {
        name: "Personal Website",
        url: "https://www.stevensousa.com",
        icon: `${baseUrl}earth.svg`,
        isBlack: true,
    },
    {
        name: "X",
        url: "https://x.com/stevensousa1776",
        icon: `${baseUrl}x.svg`,
        isBlack: true,
    },
    {
        name: "Discord",
        url: "https://discord.com/users/359507591447183361",
        icon: `${baseUrl}discord.svg`,
        isBlack: true,
    },
    {
        name: "Youtube",
        url: "https://www.youtube.com/@shadelessghost",
        icon: `${baseUrl}youtube.svg`,
        isBlack: true,
    },
    {
        name: "Email",
        url: "mailto:silver.steven67@gmail.com",
        icon: `${baseUrl}mail.svg`,
        isBlack: true,
        type: "email",
    },
    {
        name: "Phone",
        url: "tel:+15083643532",
        icon: `${baseUrl}phone.svg`,
        isBlack: true,
        type: "phone",
    },
];

// Footer + hero: GitHub, LinkedIn, Email, Phone
export const publicSocials = socialMedia.filter((s) =>
    ["GitHub", "LinkedIn", "Email", "Phone"].includes(s.name)
);

// Contact "Find me on": GitHub, LinkedIn, Discord, YouTube, X
export const contactSocials = socialMedia.filter((s) =>
    ["GitHub", "LinkedIn", "Discord", "Youtube", "X"].includes(s.name)
);
