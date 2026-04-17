interface socialMedia {
    name: string;
    url: string;
    icon: string;
    isBlack?: boolean;
}

const baseUrl  = `/svgs/socials/`;

export const socialMedia: socialMedia[] = [
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
    }
];

export const publicSocials = socialMedia.filter((s) => s.name !== "Personal Website");
