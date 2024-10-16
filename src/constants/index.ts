import { Project } from "../@types";

export const PROJECTS:Project[] = [
  {
    id: "privadodomicilio",
    title: "Privado Domicílio lading page",
    description: "Privado Domicílio is committed to providing specialized and personalized care for seniors and individuals in need, right in the comfort of their own homes. With a dedicated and caring team, we strive to ensure the well-being and quality of life of our clients with every service we provide.",
    skills: [
      "React JS", "Next.JS", "Tailwind CSS", "Swiper JS", "Javascript", "TypeScript"
    ],
    cover: "/projects/privadodomicilio/cover.png",
    photos: [
      {
        path: "/projects/privadodomicilio/home.png",
        label: "Home"
      }
    ],
    preview: "https://www.privadodomicilio.com/"
  },
  {
    id: "raciuscare",
    title: "Racius Care",
    description: "Racius Care is an online store specializing in health and hygiene, focused on promoting well-being. It offers quality products and exceptional customer service.",
    skills: [
      "Ecommerce", "Ecommerce Website", "Firebase", "Swiper JS", "JavaScript", "Google Cloud Platform", "TypeScript", "React", "Python", "Flask"
    ],
    cover: "/projects/raciuscare/cover.png",
    photos: [
      {
        path: "/projects/raciuscare/home.png",
        label: "Home"
      },
      {
        path: "/projects/raciuscare/product.png",
        label: "Product page"
      },
      {
        path: "/projects/raciuscare/cart.png",
        label: "Products cart"
      },
      {
        path: "/projects/raciuscare/cart.png",
        label: "Products cart"
      },
      {
        path: "/projects/raciuscare/dashboard.png",
        label: "Admin dashboard"
      }
    ],
    preview: "https://www.raciuscare.com/"
  }
]