/* Copy for Home Page */
import { hero } from './shared'

export const copy = {
  hero,
  content: {
    primary: {
      title: "Service Projects",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      
    },
    secondary: [
      {
          title: "NFT LA Service Day",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          img: "/img/service_group.png",
      },
      {
        title: "Grant Application",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: "/img/grant_group.png",
        reverse: true,
        bg: "purple-wave-trans",
        button: {
          title: "Apply now",
          href: "/contact",
          bgClass: "bg-periwinkle-blue",
          hoverClass: "hover:bg-purple-illusion",
        },
    },
      
    ]
  }
  
}