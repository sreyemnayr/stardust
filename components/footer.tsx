/* eslint-disable @next/next/no-img-element */

import { colors } from '../assets/colors'

import { SocialIcon } from 'react-social-icons'
import { OpenSeaIcon } from '../assets/icons/icons'

function Footer() {
  
  return (
    <footer className="h-72 pt-32 px-5 flex justify-between items-center">
        <img src="/img/logo.png" className="h-32" alt="Stardust Society" />
        <img src="/img/madeofstardust.png" className="h-14 mt-6" alt="We are all made of stardust" />
        <div className="h-10 flex space-x-4">
          
          <SocialIcon url="https://twitter.com/stardust7inc" bgColor="currentColor" fgColor={colors['moon-honey']} className="text-romantic-rose rounded-full hover:ring-2 hover:ring-moon-honey hover:text-marquis-orange" />
          <SocialIcon url="https://instagram.com/stardust7inc" bgColor="currentColor" fgColor={colors['moon-honey']} className="text-romantic-rose rounded-full hover:ring-2 hover:ring-moon-honey hover:text-marquis-orange"  />
          <SocialIcon url="http://discord.gg/stardustsociety" bgColor="currentColor" fgColor={colors['moon-honey']} className="text-romantic-rose rounded-full hover:ring-2 hover:ring-moon-honey hover:text-marquis-orange"  />
          <SocialIcon url="https://opensea.io/collection/stardustgeneration" defaultSVG={OpenSeaIcon} bgColor="currentColor" fgColor={colors['moon-honey']} className="text-romantic-rose rounded-full hover:ring-2 hover:ring-moon-honey hover:text-marquis-orange"  />
          
        </div>
    </footer>
  )
}

export default Footer
