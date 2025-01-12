import { Project } from "../@types"

export const PROJECTS: Project[] = [
  {
    id: "privadodomicilio",
    title: "Privado Domicílio",
    creationYear: 2023,
    type: "web",
    description:
      "Privado Domicílio is committed to providing specialized and personalized care for seniors and individuals in need, right in the comfort of their own homes. With a dedicated and caring team, we strive to ensure the well-being and quality of life of our clients with every service we provide.",
    skills: [
      "React JS",
      "Next.JS",
      "Tailwind CSS",
      "Swiper JS",
      "Javascript",
      "TypeScript",
    ],
    cover: "/projects/privadodomicilio/cover.png",
    photos: [
      {
        path: "/projects/privadodomicilio/home.png",
        label: "Home",
      },
      {
        path: "/projects/privadodomicilio/q_and_a.png",
        label: "Questions and answers",
      },
      {
        path: "/projects/privadodomicilio/contact.png",
        label: "Contact page",
      },
    ],
  },
  {
    id: "raciuscare",
    title: "Racius Care",
    creationYear: 2023,
    description:
      "Racius Care is an online store specializing in health and hygiene, focused on promoting well-being. It offers quality products and exceptional customer service.",
    skills: [
      "Ecommerce",
      "Ecommerce Website",
      "Firebase",
      "Swiper JS",
      "JavaScript",
      "Google Cloud Platform",
      "TypeScript",
      "React",
      "Python",
      "Flask",
    ],
    type: "web",
    cover: "/projects/raciuscare/cover.png",
    photos: [
      {
        path: "/projects/raciuscare/home.png",
        label: "Home",
      },
      {
        path: "/projects/raciuscare/product.png",
        label: "Product page",
      },
      {
        path: "/projects/raciuscare/cart.png",
        label: "Products cart",
      },
      {
        path: "/projects/raciuscare/cart.png",
        label: "Products cart",
      },
      {
        path: "/projects/raciuscare/dashboard.png",
        label: "Admin dashboard",
      },
    ],
  },
  {
    id: "beeva",
    type: "mobile",
    title: "Beeva",
    creationYear: 2024,
    description:
      "Beeva is an app that makes it easy to sell and rent homes. Developed with React Native, Expo & Supabase, it offers an intuitive and efficient experience for finding and negotiating properties.",
    skills: [
      "React",
      "React Native",
      "Expo",
      "Supabase",
      "Android",
      "PostgreSQL",
      "Figma",
      "Tailwind CSS",
      "NativeWind",
    ],
    cover: "/projects/beeva/cover.png",
    photos: [
      {
        path: "/projects/beeva/home.png",
        label: "Home",
      },
      {
        path: "/projects/beeva/notifications.png",
        label: "Notifications",
      },
      {
        path: "/projects/beeva/residence_detail.png",
        label: "Residence",
      },
      {
        path: "/projects/beeva/residence_detail_2.png",
        label: "Residence part two",
      },
      {
        path: "/projects/beeva/create.png",
        label: "Create",
      },
      {
        path: "/projects/beeva/create-2.png",
        label: "Create part two",
      },
      {
        path: "/projects/beeva/saved.png",
        label: "Saveds",
      },
      {
        path: "/projects/beeva/wishes.png",
        label: "Wishes",
      },
      {
        path: "/projects/beeva/settings.png",
        label: "Settings",
      },
      {
        path: "/projects/beeva/security.png",
        label: "Security",
      },
    ],
    preview: "https://www.github.com/kamajus/beeva.git",
  },
  {
    id: "tinychat",
    type: "web",
    title: "Tinychat",
    creationYear: 2022,
    description:
      "Tinychat is a real-time chat application that leverages WebSocket technology. Built with Python, Flask, and Socket.IO, it provides a seamless and efficient communication platform.",
    skills: [
      "Python",
      "Flask",
      "Pydantic",
      "Socket.IO",
      "MongoDB",
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
    ],
    cover: "/projects/tinychat/cover.png",
    photos: [
      {
        path: "/projects/tinychat/login.png",
        label: "Login",
      },
      {
        path: "/projects/tinychat/chat.png",
        label: "Chatroom",
      },
    ],
    preview: "https://github.com/kamajus/tinychat.git",
  },
  {
    id: "Invoice generator",
    type: "web",
    title: "Tinychat",
    creationYear: 2023,
    description: "Automated invoice generation in an e-commerce scenario.",
    skills: [
      "Python",
      "FastAPI",
      "Pydantic",
      "WeasyPrint",
      "Jinja2",
      "PyQt5",
      "Docker",
      "Html && Css",
    ],
    cover: "/projects/invoice-generator/cover.png",
    photos: [
      {
        path: "/projects/invoice-generator/gui.png",
        label: "GUI",
      },
      {
        path: "/projects/invoice-generator/invoice.png",
        label: "Invoice example",
      },
    ],
    preview: "https://github.com/kamajus/invoice.git",
  },
]
