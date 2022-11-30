/* eslint-disable @next/next/no-img-element */
import { josephinSansFont, tanSpringFont, loraFont } from '../assets/fonts/loader';

import { colors } from '../assets/colors'

import Link from 'next/link'

import { SocialIcon } from 'react-social-icons'

import {BioProps} from '../interfaces'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function Bio({name, title, bio, socials, img, reverse = false, uppercaseName = true} : BioProps) {
  const signedIn = false;
  return (
    <div className={classNames(!reverse ? "h-[22rem] purple-wave": "-mt-[8rem] -mb-[8rem]", "w-full items-center", "flex")}>
      <div className={classNames(
        "info flex w-[48rem] justify-evenly", !reverse ? "h-[16rem]" : "", "items-center mx-auto",
        
      )}>
        <div className={classNames("flex-col w-[16rem]", !reverse ? "order-last " : "order-first ")}></div>
        
        <div className={classNames(
          "infoText ",
          "items-center flex-col text-center",
          "w-[12rem]"
        )}>
          <h3 className={classNames(
            !reverse ? "text-romantic-rose" : "text-nostalgia-perfume",
            ' text-center leading-snug text-2xl font-bold',
            uppercaseName ? "uppercase": ""
            )}>
            {name}
          </h3>
          <p className={classNames(!reverse ? 'text-black' : 'text-moon-honey', 'text-xl leading-snug')}>{title}</p>
        </div>
        <div className={classNames("flex-col w-[16rem] ", !reverse ? "order-first pl-[4rem]" : "order-last pr-[4rem]")}>
        <div className="flex items-center justify-center space-x-4 mt-2 h-14 "></div>
          <img alt={title} src={img} className="h-[12rem] rounded-full mx-auto"/>
          <div className="flex items-center justify-center space-x-4 mt-1 h-14">
            {socials?.map((s) => (
              <SocialIcon key={`${name} ${s}`} url={s} bgColor="currentColor" fgColor={colors['moon-honey']} style={{height: "2rem", width: "2rem"}} className="text-romantic-rose rounded-full hover:ring-2 hover:ring-moon-honey hover:text-marquis-orange" />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Bio