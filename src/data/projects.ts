import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [

    {
      id: "portfolio-website",
      title: "Portfolio Website",
      description:
        "This repository contains the source code for a portfolio website built using Next.js and Sass.",
      icon: "/skills/nextjs.png",
      repoType: RepoType.Public,
      projectType: ProjectType.Personal,
      githubUrl: "https://github.com/Nikith-S/",
      url: "https://nikith-portfolio-z7kv.vercel.app",
      tags: ["Next.js", "Sass", "Web Development"],
    },
    {
    id: "e-commerce-app-mern",
    title: "E-commerce App",
    description:
      "An e-commerce web application developed using React.js, Material UI, Redux, and Stripe.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Nikith-S",
    url: "https://nixlab-shop.vercel.app",
    tags: ["React.js", "Redux", "Material UI", "Stripe"],
  },

  {
    id: "solana token generator",
    title: "Blockchain App",
    description:
      "A solana token generator blockchain app built using next.js, typescript,web3.js",
    icon: "/skills/blockchain.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Nikith-S/SolanaSols",
    url: "https://nikith-solana-sols.vercel.app/",
    tags: ["Next.js", "Typescript", "Web3.js", "Tailwind"],
  },
  {
    id: "e-commerce-api-nodejs",
    title: "E-commerce API",
    description:
      "A RESTful API developed using Node.js, Express.js, MongoDB, and Stripe to integrate e-commerce backend.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Nikith-S/",
    tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  },

  {
    id: "bus-reservation-system-management",
    title: "Bus Reservation System Management",
    description:
      "This repository contains the Bus Reservation System Management project developed using Object Oriented Programming (OOP) and File Handling concepts in C++.",
    icon: "/skills/cpp.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Nikith-S",
    tags: ["C++", "OOP", "File Handling"],
  },


  {
    id: "Devops Project",
    title: "Devops Containerization Project",
    description:
      "This repository contains the devops practises which are made using tools like Docker, Kubernets and many other devops tools to get hands on exprience on Devops pratices .",
    icon: "/skills/devops.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Nikith-S/Devops/tree/main/go-web-app-devops-main",
    tags: ["Docker", "Kubernetes", "DevOps", "Grafana", "Helm"],
  },

];
export default projects;
