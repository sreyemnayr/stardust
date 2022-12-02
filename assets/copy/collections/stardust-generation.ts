export const copy = {
  hero: {
    
    title: "Stardust Generation",
    subtitle: "Is the first generative collection from Stardust Society of 7777 unique dreamers!",
    img: "/img/sg.png",
    buttons: [
      {
      title: "Mint a Dreamer",
      href: "/mint",
      },
      {
        title: "View on Opensea",
        href: "https://opensea.io/collection/stardustgeneration",
        bgClass: "bg-transparent border-nostalgia-perfume "
      },
    ]
  },
  content: { 
    gallery: {
      title: "Dreamer Gallery",
      searchLabel: "Search Dreamers",
      contractAddress: "0xb639cc08FbEcAF4c11BF0DB09fAa80b07bDE39d2",
      nftStandard: "erc1155",
      chain: "ethereum",
      filters: [
        {
          title: "Legendaries",
          attributes: [
            {
              trait_type: "Legendary",
              exists: true,
            }
          ],
          subfilters: []
        },
        
      ]
    }
  }
}