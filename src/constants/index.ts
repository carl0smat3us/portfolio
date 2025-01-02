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
    preview: "https://www.privadodomicilio.com",
  },
  {
    id: "raciuscare",
    title: "Racius Care",
    creationYear: 2024,
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
    preview: "https://www.raciuscare.com",
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
    preview: "https://www.github.com/kamajus3/beeva.git",
  },
]
