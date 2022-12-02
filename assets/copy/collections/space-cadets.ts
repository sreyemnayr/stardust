export const copy = {
  hero: {
    
    title: "Space Cadets",
    img: "/img/space_cadets.png",
    subtitle: "Stardust Space Cadets is our airdrop rewards program for holders.     Receive badges for minting during each moon phase, holding Dreamers with all the zodiac symbols, and being an active member of the Stardust Society community. These badges can be collected and traded, or save them up for future perk redemption.",
    buttons: [
      {
      title: "Mint a Dreamer",
      href: "mint",
      },
      {
        title: "View on Opensea",
        href: "https://opensea.io/collection/stardustspacecadets",
        bgClass: "bg-transparent border-nostalgia-perfume "
      },
    ],
  },
  content: {
    gallery: {
      title: "Patch & Pin Gallery",
      searchLabel: "Search patches and pins",
      contractAddress: "0xb639cc08FbEcAF4c11BF0DB09fAa80b07bDE39d2",
      nftStandard: "erc1155",
      chain: "ethereum",
      filters: [
        {
          title: "Patches",
          attributes: [
            {
              trait_type: "Type",
              match: "Patch",
            }
          ],
          subfilters: [
            {
              title: "Moon Patches",
              subtitle: "Mint during the Moon Phase to be rewarded these badges",
              attributes: [
                {
                  trait_type: "Moon",
                  exists: true,
                }
              ]
            },
            {
              title: "Equinox Patches",
              subtitle: "A reward to those who join us for an equinox celebration.",
              attributes: [
                {
                  trait_type: "Equinox",
                  exists: true,
                }
              ]
            },
            {
              title: "Zodiac Patches",
              attributes: [
                {
                  trait_type: "Zodiac Sign",
                  exists: true,
                }
              ]
            },
            {
              title: "More Patches",
              subtitle: "Earn additional patches by getting involved in our community.",
              attributes: [
                {
                  trait_type: "Zodiac Sign",
                  exists: false,
                },
                {
                  trait_type: "Equinox",
                  exists: false,
                },
                {
                  trait_type: "Moon",
                  exists: false,
                },
              ]
            }
          ]
        },
        {
          title: "Pins",
          attributes: [
            {
              trait_type: "Type",
              match: "Pin",
            }
          ],
          subfilters: [
            {
              title: "Zodiac Pins",
              attributes: [
                {
                  trait_type: "Zodiac Sign",
                  exists: true,
                }
              ]
            },
            {
              title: "More Pins",
              attributes: [
                {
                  trait_type: "Zodiac Sign",
                  exists: false,
                },
              ]
            }
          ]
        },
      ]
    }
  }
}