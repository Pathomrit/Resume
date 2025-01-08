import {
  faGithub,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import pic from "../assets/image.png";
import shopping from "../assets/shopping.png";
import todolist from "../assets/todolist.png";
import resume from "../assets/resume.png";
export const data = [
  {
    date: "2024-present",
    title: "Resume",
    link: "https://ecom2024-web-five.vercel.app/",
    material: [
      {
        type: faGithub,
        link: "https://github.com/Pathomrit/ecom2024-web",
      },
    ],
    description: [
      "A simple and minimalist portfolio for developers built with React and TailwindCSS.",
    ],
    skill: [["React", "Tailwind"]],
    picture: resume,
  },
  {
    date: "2024-present",
    title: "E-commerce",
    link: "https://ecom2024-web-five.vercel.app/",
    material: [
      {
        type: faGithub,
        link: "https://github.com/Pathomrit/ecom2024-web",
      },
    ],
    description: [
      "It features both a front-end and back-end system. The front-end allows users to browse and add products to their shopping cart, make payments, and view product details. The back-end provides tools for managing users, adding categories, and creating or updating products.",
    ],
    skill: [
      ["React", "Tailwind"],
      ["Node.js", "Express", "MySql", "Supabase", "Prisma", "Javascript"],
    ],
    picture: shopping,
  },
  {
    date: "2024-present",
    title: "Login Test",
    link: "",
    material: [
      {
        type: faGithub,
        link: "https://github.com/Pathomrit/login_test",
      },
    ],
    description: ["Login and Register use backend."],
    skill: [
      ["React", "Tailwind"],
      ["Node.js", "Postman", "Express.js", "Javascript", "MySql"],
    ],
  },
  {
    date: "2024-present",
    title: "Todo List",
    link: "",
    material: [
      {
        type: faGithub,
        link: "https://github.com/Pathomrit/To-Do-List-React",
      },
    ],
    description: ["CRUD Todo List."],
    skill: [
      ["React", "Tailwind"],
      ["Node.js", "Postman", "Express.js", "Javascript", "MySql"],
    ],
    picture: todolist,
  },
  {
    date: "2023-2024",
    title: "MatchingCard",
    link: "",
    material: [
      {
        type: faGithub,
        link: "https://github.com/Pathomrit/final_MatchingCardGame",
      },
    ],
    description: [
      "Matching Card Game Single player and Multiplayer and add picture to play game.",
    ],
    skill: [
      ["Dart", "Flutter"],
      ["Firebase", "sqllite"],
    ],
    picture: pic,
  },
];
