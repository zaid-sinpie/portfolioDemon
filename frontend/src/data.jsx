export const dataForCards = [
  {
    logo: <i className="fa-solid fa-code text-text text-4xl"></i>,
    heading: "Frontend Web Developer",
    paragraph: "Crafting seamless web experiences with code and creativity.",
  },
  {
    logo: <i className="fa-solid fa-laptop text-text text-4xl"></i>,
    heading: "UI/UX Designer",
    paragraph: "Designing intuitive experiences that connect users and ideas.",
  },
  {
    logo: <i className="fa-solid fa-laptop-code text-text text-4xl"></i>,
    heading: "Mern stack Developer",
    paragraph: "Building seamless web solutions with the power of MERN.",
  },
];

export const dataForSkills = [
  {
    icon: <i className="fa-brands fa-html5 text-textYellow text-[2rem]"></i>,
    heading: "HTML/CSS",
    paragraph:
      "Building responsive and structured web pages with semantic HTML and modern CSS techniques.",
  },
  {
    icon: <i className="fa-brands fa-css3-alt text-textYellow text-[2rem]"></i>,
    heading: "Tailwind Css",
    paragraph:
      "Creating utility-first and responsive designs efficiently using Tailwind CSS.",
  },
  {
    icon: <i className="fa-brands fa-js text-textYellow text-[2rem]"></i>,
    heading: "Javascript",
    paragraph:
      "Developing dynamic and interactive web applications using JavaScript.",
  },
  {
    icon: <i className="fa-brands fa-react text-textYellow text-[2rem]"></i>,
    heading: "ReactJs",
    paragraph:
      "Building component-based and scalable front-end applications using ReactJS.",
  },
  {
    icon: <i className="fa-brands fa-react text-textYellow text-[2rem]"></i>,
    heading: "Redux",
    paragraph:
      "Managing application state effectively with Redux for predictable and maintainable code.",
  },
  // {
  //   icon: "",
  //   heading: "NextJs",
  //   paragraph:
  //     "Developing server-side rendered and static websites using Next.js for enhanced performance.",
  // },
  {
    icon: <i className="fa-brands fa-node text-textYellow text-[2rem]"></i>,
    heading: "NodeJs",
    paragraph:
      "Building scalable server-side applications and APIs using Node.js.",
  },
  {
    icon: <i className="fa-brands fa-node-js text-textYellow text-[2rem]"></i>,
    heading: "ExpressJS",
    paragraph:
      "Creating robust backend frameworks and RESTful APIs using Express.js.",
  },
  {
    icon: <i className="fa-brands fa-python text-textYellow text-[2rem]"></i>,
    heading: "Python",
    paragraph:
      "Writing clean and versatile code for web development, data analysis, and automation using Python.",
  },
  {
    icon: <i className="fa-solid fa-database text-textYellow text-[2rem]"></i>,
    heading: "SQL",
    paragraph:
      "Designing and managing relational databases efficiently using SQL.",
  },
  {
    icon: <i className="fa-solid fa-server text-textYellow text-[2rem]"></i>,
    heading: "MongoDB",
    paragraph:
      "Implementing NoSQL database solutions for flexible and scalable data storage using MongoDB.",
  },
  {
    icon: <i className="fa-brands fa-github text-textYellow text-[2rem]"></i>,
    heading: "Git/Github",
    paragraph:
      "Version controlling and collaborating on projects effectively using Git and GitHub.",
  },
];

// import one from "./assets/one.jpg";
// import two from "./assets/two.jpg";
// import three from "./assets/three.jpg";
// import four from "./assets/four.jpg";
import Goushala from "./assets/goushala.jpg";
import NotFound from "./assets/notFound.jpg";
import TicTacToe from "./assets/ticTacToe.jpg";
import ToursAndTravers from "./assets/toursAndTravers.jpg";
import todoMern from "./assets/todoMern.jpg";

export const slides = [
  {
    id: 1,
    img: Goushala,
    content: "Slide 1: Welcome to the Slider",
    title: "Goushala",
    paragraph:
      "Goushala website created using MERN stack. It utilizes React, React Router, Tailwind CSS, Node.js, and Express.js. Currently ongoing, and MongoDB will be integrated for database functionalities in the future & payment gateways are also a part of the project in future. 'ONGOING'",
    githubLink: "https://github.com/zaid-sinpie/Goushala_SKGGG",
    liveLink: "",
  },
  {
    id: 2,
    img: ToursAndTravers,
    content: "Slide 2: This is the second slide",
    title: "Tours & Travers",
    paragraph:
      "The Tours & Travers web app is for planning tours solo or group adventures. It leverages React, Tailwind CSS, Node.js, and Express.js, and is currently a work in progress. 'ONGOING'",
    githubLink: "https://github.com/zaid-sinpie/Tours-Travers",
    liveLink: "",
  },
  {
    id: 3,
    img: todoMern,
    content: "Slide 3: Enjoy navigating through slides",
    title: "ToDo WebApp (MERN)",
    paragraph:
      "The ToDo web app is a single-page application built with React and styled using Tailwind CSS. It uses MongoDB for data storage and is fully functional. This app was developed using React and Vite.",
    githubLink: "https://github.com/zaid-sinpie/todoMERN",
    liveLink: "",
  },
  {
    id: 4,
    img: TicTacToe,
    content: "Slide 4: Enjoy navigating through slides",
    title: "Tic Tac Toe Game",
    paragraph:
      "The Tic Tac Toe game is built with React, Vite, and CSS. It offers smooth gameplay experience, showcasing a practical implementation of React's capabilities.",
    githubLink: "https://github.com/zaid-sinpie/TicTacToe",
    liveLink: "https://zaid-sinpie-tictactoe.netlify.app/",
  },
];
