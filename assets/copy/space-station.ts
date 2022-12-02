/* Copy for Home Page */

export const copy = {
  hero: {
    title: "Space Station",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttons: [
      {
      title: "Join our Discord",
      href: "mint",
      bgClass: "bg-periwinkle-blue"
      },
      {
        title: "Partner with Us",
        href: "/contact",
        bgClass: "bg-transparent border-nostalgia-perfume "
      },
    ],
  },
  content: {
    primary: {
      title: "Events",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      
    },
    secondary: [
      {
          title: "Meditation",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          img: "/img/meditation.png",
          button: {
            title: "Apply now",
            href: "/contact",
            bgClass: "bg-periwinkle-blue",
            hoverClass: "hover:bg-purple-illusion",
          },
      },
      {
        title: "Astrology",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: "/img/astrology.png",
        reverse: true,
        bg: "purple-wave-trans",
        button: {
          title: "Apply now",
          href: "/contact",
          bgClass: "bg-periwinkle-blue",
          hoverClass: "hover:bg-purple-illusion",
        },
      },
      {
        title: "Wellness Assets",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        
        bg: "nobg",
        titleClass: "text-nostalgia-perfume",
        assets: [
          {
            title: "Journal Prompts",
            href: "/contact"
          },
          {
            title: "Something Else",
            href: "/contact"
          },
          {
            title: "Another Something",
            href: "/contact"
          }
        ]
      },
      
    ]
  }
  
}