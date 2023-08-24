import {
  react,
  node,
  vue,
  web,
  javascript,
  gsap,
  typescript,
  html,
  css,
  mysql,
  reactjs,
  redux,
  tailwind,
  vuejs,
  sass,
  sequelize,
  nodejs,
  git,
  stec,
  mecafegames,
  threejs,
  htmlMaterial,
  cssMaterial,
  jsMaterial,
  tsMaterial,
  reactMaterial,
  vueMaterial,
  reduxMaterial,
  tailwindMaterial,
  nodejsMaterial,
  mysqlMaterial,
  sequelizeMaterial,
  threejsMaterial,
  gitMaterial,
  gsapMaterial,
  sassMaterial,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "timeline",
    title: "Milestone",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const TYPED_STRINGS = [
  "I develop powerful web applications",
  "I design intuitive user interface",
  "I develop motions and interactions",
  "I develop captivating 3D visuals",
];

export const EMAIL = "ayush.singh.xda@gmail.com";

export const SOCIAL_LINKS = [
  {
    name: "website",
    icon: "mdi:web",
    url: "https://putong.info",
    color: "#915eff",
  },
  {
    name: "phone",
    icon: "ion:call",
    url: "tel:+65 81263882",
    color: "#555555",
  },
  {
    name: "wechat",
    icon: "ic:baseline-wechat",
    url: "/wechat.jpg",
    color: "#09b83e",
  },
  {
    name: "whatsapp",
    icon: "ri:whatsapp-fill",
    url: "https://wa.link/dm0irr",
    color: "#128C7E",
  },
  {
    name: "email",
    icon: "mdi:email",
    url: "mailto: xvpt28@gmail.com",
    color: "linear-gradient(135deg, #D44638, #F59E39)",
  },
  {
    name: "instagram",
    icon: "mingcute:ins-fill",
    url: "https://www.instagram.com/pu4113/",
    color:
      "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
  },
  {
    name: "facebook",
    icon: "ic:baseline-facebook",
    url: "https://www.facebook.com/profile.php?id=100004059918572",
    color: "#4267B2",
  },
  {
    name: "github",
    icon: "mdi:github",
    url: "https://github.com/xvpt28/PT",
    color: "#333",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
    bg: "webbg",
  },
  {
    title: "ReactJs Developer",
    icon: react,
    bg: "reactbg",
  },
  {
    title: "VueJs Developer",
    icon: vue,
    bg: "vuebg",
  },
  {
    title: "NodeJs Developer",
    icon: node,
    bg: "nodebg",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    material: htmlMaterial,
  },
  {
    name: "CSS 3",
    icon: css,
    material: cssMaterial,
  },
  {
    name: "JavaScript",
    icon: javascript,
    material: jsMaterial,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  //   material: tsMaterial,
  // },
  {
    name: "React JS",
    icon: reactjs,
    material: reactMaterial,
  },
  {
    name: "Vue JS",
    icon: vuejs,
    material: vueMaterial,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    material: reduxMaterial,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    material: tailwindMaterial,
  },
  {
    name: "Node JS",
    icon: nodejs,
    material: nodejsMaterial,
  },
  {
    name: "MySQL",
    icon: mysql,
    material: mysqlMaterial,
  },
  {
    name: "Sequelize",
    icon: sequelize,
    material: sequelizeMaterial,
  },
  {
    name: "Three JS",
    icon: threejs,
    material: threejsMaterial,
  },
  // {
  //   name: "git",
  //   icon: git,
  //   material: gitMaterial,
  // },
  {
    name: "gsap",
    icon: gsap,
    material: gsapMaterial,
  },
  {
    name: "sass",
    icon: sass,
    material: sassMaterial,
  },
];

const experiences = [
  {
    title: "Engineer",
    company_name: "Shanghai Tunnel Engineering Co.",
    icon: stec,
    iconBg: "#ebf4f6",
    lineBg: "#00a0b0",
    date: "April 2019 - Current",
    points: [
      "Successfully developed the project material management page and data management for the cutter head using React technology stack along with the Material-UI component library.",
      "Efficiently managed and retrieved data through Axios and RESTful APIs, ensuring smooth and reliable data flow.",
      "Utilized the Koa framework for backend development, optimizing the handling of asynchronous middleware and improving server response time, and combined it with Sequelize ORM for MySQL database management to enhance data management efficiency.",
    ],
    tech: [
      "React",
      "Vue2",
      "Redux",
      "Material-UI",
      "Koa",
      "Sequelize",
      "MySQL",
    ],
  },
  {
    title: "Web Developer (Part-time)",
    company_name: "Me Cafe Games Co.",
    icon: mecafegames,
    iconBg: "#f9f4f4",
    lineBg: "#8874a3",
    date: "July 2022 - Current",
    points: [
      "Developed frontend management tools for employee and cashier operations using React and the AntD component library.",
      "Established backend server using Express and managed database information using the Sequelize framework.",
      "Projects involved the development and management of a cashier system, printing system, employee scheduling system, and the implementation of other CRUD (Create, Read, Update, Delete) operations.",
      "Achieved successful project deployment using Nginx, ensuring seamless accessibility and performance for end users.",
    ],
    tech: ["React", "AntD", "Express", "Sequelize", "MySQL", "Nginx"],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export const Branch = {
  LEFT: "leftSide",
  RIGHT: "rightSide",
};

export const NodeTypes = {
  CONVERGE: "converge",
  DIVERGE: "diverge",
  CHECKPOINT: "checkpoint",
};

export const ItemSize = {
  SMALL: "small",
  LARGE: "large",
};

export const TIMELINE = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "Current",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Cutter Management System Initiated",
    size: ItemSize.SMALL,
    subtitle:
      "The TBM Cutting Tool Management Software efficiently tracks, manages, and predicts the lifespan of cutting tools on tunnel boring machines. It integrates advanced features like tool position tracking, data visualization, and an alert system to minimize operational downtimes.",
    company: "Shanghai Tunnel Engineering Co. Pte Ltd.",

    slideImage: "/timeline/cutterhead.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Management Software Initially Launched",
    size: ItemSize.SMALL,
    subtitle:
      "The software's initial features include employee scheduling, time-based billing, and account management.",
    company: "ME Cafe Games",
    slideImage: "/timeline/mework.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from National University of Singapore 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Spent 2 years expanding my knowledge in software and management-related fields.",
    image: "/timeline/nus.svg",
    slideImage: "/timeline/nus.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full Stack Developer (Part-time)",
    size: ItemSize.SMALL,
    subtitle:
      "Responsible for designing and developing the internal management system.",
    company: "ME Cafe Games",
    shouldDrawLine: true,
    slideImage: "/timeline/meweb.png",
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHt,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Research Project",
    size: ItemSize.SMALL,
    subtitle:
      "Engaged in a research project optimizing construction site layouts using Genetic Algorithms and Mixed-Integer Programming. Utilized skills in Python, optimization techniques, and libraries like Numpy, Pandas, Gurobi, and Sklearn.",
    slideImage: "/timeline/research.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Master of Science (Infrastructure Management in Engineering)",
    size: ItemSize.SMALL,
    subtitle:
      "Enrolled in National University of Singapore to pursue an science master degree",
    image: "/timeline/nus.svg",
    slideImage: "/timeline/transcript.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Engineer",
    company: "Shanghai tunnel engineering co.",
    size: ItemSize.SMALL,
    subtitle:
      "First job! 🥳. Design and develop material and supply chain software",
    slideImage: "/timeline/vba.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from Monash University 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Spent 4 years laying the foundation of Software Engineering and Civil Engineering.",
    image: "/timeline/monash.svg",
    slideImage: "/timeline/monash.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Acquired deeper web development knowledge.",
    size: ItemSize.SMALL,
    subtitle:
      "Proficient in advanced HTML, CSS, JavaScript, mainstream frameworks, responsive design, and front-back end interactions.",
    shouldDrawLine: true,
    slideImage: "/timeline/advanced.png",
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Acquired professional knowledges of civil engineering.",
    size: ItemSize.SMALL,
    subtitle:
      "Simultaneously, my other major is civil engineering, and I achieved a WAM of top 15%.",
    shouldDrawLine: true,
    slideImage: "/timeline/civil.png",
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2016",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Acquired basic web development knowledge.",
    size: ItemSize.SMALL,
    subtitle:
      "Acquired skills in Excel VBA, MATLAB, AutoCAD, and basic web development using HTML, CSS, and JavaScript.",
    shouldDrawLine: true,
    slideImage: "/timeline/basic.png",
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2015",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Bachelor of Engineering (Honors Degree) ",
    size: ItemSize.SMALL,
    subtitle: "Enrolled in Monash University to pursue an engineering degree",
    image: "/timeline/monash.svg",
    slideImage: "/timeline/monash.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export const PROJECTS = [
  {
    name: "Personal Website",
    image: "/project/personalWeb.png",
    blurImage: "/project/blur/personalWebBlur.jpg",
    description: "Design my personal website with jQuery and Js.",
    gradient: ["#ff5e7e", "#ff2c56"],
    url: "https://putong.info/personalInfo",
    tech: ["js", "jquery", "html", "css"],
  },
  {
    name: "Personal Blog Client",
    image: "/project/personalBlog.png",
    blurImage: "/project/blur/personalBlogBlur.jpg",
    description: "Design my personal blog client page with Vue2 and Sass.",
    gradient: ["#5E4C06", "#746528"],
    url: "https://putong.info/blog",
    tech: ["vue", "js", "sass"],
  },
  {
    name: "Personal Blog Admin",
    image: "/project/blogAdmin.png",
    blurImage: "/project/blur/blogAdminBlur.jpg",
    description:
      "Developed by Vue paired with the Element UI component library and use Node.js with Express framework as backend solution.",
    gradient: ["#245B57", "#004741"],
    url: "https://putong.info/blogadmin",
    tech: ["nodejs", "vue", "webpack"],
  },
  {
    name: "Store Internal System",
    image: "/project/storeSystem.png",
    blurImage: "/project/blur/storeSystemBlur.jpg",
    description:
      "Developed by React with AntD component library and use Node.js with Express framework as backend solution.",
    gradient: ["#17007B", "#3A2C79"],
    url: "http://www.mecafegames.work",
    tech: ["react", "redux", "nodejs", "gsap", "sass"],
  },
  {
    name: "Cutterhead System",
    image: "/project/cutterhead.png",
    blurImage: "/project/blur/cutterheadBlur.jpg",
    description:
      "Developed by React with MaterialUI component library and use Node.js with Koa framework as backend solution.",
    gradient: ["#172839", "#334659"],
    tech: ["react", "redux", "nodejs"],
  },

  {
    name: "Personal Profolio",
    image: "/project/portfolio.png",
    blurImage: "/project/blur/portfolioBlur.jpg",
    description:
      "Designed and developed the portfolio with React, three.js, and GSAP.",
    gradient: ["#3A0000", "#771E1E"],
    tech: ["react", "js", "threejs", "gsap"],
  },
];

export { services, technologies, experiences, testimonials };
