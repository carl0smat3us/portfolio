import { Project } from "../@types"

export const PROJECTS: Project[] = [
  {
    id: "kasaao",
    type: "mobile",
    title: "Kasa AO: A Real State App",
    creationYear: 2024,
    isFinished: false,
    description:
      "Kasa AO is an app that makes it easy to sell and rent homes. Developed with React Native, Expo & Supabase, it offers an intuitive and efficient experience for finding and negotiating properties.",
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
    cover: "/projects/kasaao/cover.png",
    photos: [
      {
        path: "/projects/kasaao/home.png",
        label: "Home",
      },
      {
        path: "/projects/kasaao/notifications.png",
        label: "Notifications",
      },
      {
        path: "/projects/kasaao/residence_detail.png",
        label: "Residence",
      },
      {
        path: "/projects/kasaao/residence_detail_2.png",
        label: "Residence part two",
      },
      {
        path: "/projects/kasaao/create.png",
        label: "Create",
      },
      {
        path: "/projects/kasaao/create-2.png",
        label: "Create part two",
      },
      {
        path: "/projects/kasaao/saved.png",
        label: "Saved",
      },
      {
        path: "/projects/kasaao/wishes.png",
        label: "Wishes",
      },
      {
        path: "/projects/kasaao/settings.png",
        label: "Settings",
      },
      {
        path: "/projects/kasaao/security.png",
        label: "Security",
      },
    ],
  },
  {
    id: "autospotify",
    type: "web",
    title: "Autospotify: A bot for Spotify",
    creationYear: 2025,
    preview: "https://github.com/carl0smat3us/autospotify",
    description:
      "A bot designed to automatically create Spotify accounts and effortlessly play entire playlists.",
    skills: [
      "Python",
      "Selenium",
      "Automation",
      "Chrome",
      "Microsft Edge",
      "Captcha bypass",
      "Undetected",
    ],
    cover: "/projects/autospotify/cover.png",
    photos: [
      {
        path: "/projects/autospotify/home.png",
        label: "CLI",
      },
    ],
  },
]
