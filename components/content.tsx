/* eslint-disable @next/next/no-img-element */
import { josephinSansFont, tanSpringFont, loraFont } from '../assets/fonts/loader';

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { ConnectButton } from '@rainbow-me/rainbowkit';

interface ContentProps {
  title: string;
  description: string;
  button?: any;
  img?: string;
  reverse?: boolean;
  bg?: string;
  titleColor?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function Content({title, description, button, img, reverse = false, bg = "purple-wave", titleColor = "romantic-rose"} : ContentProps) {
  const signedIn = false;
  return (
    <div className={classNames(bg, "w-full ", bg.includes("wave") ? "h-[36rem] items-center" : "", "items-top flex")}>
      <div className={classNames(
        "info flex w-[60rem] justify-between", bg.includes("wave") ? "h-[24rem] items-center" : "items-top", " mx-auto",
        
      )}>
        <div className={classNames(
          "infoText w-[28rem]",
          "justify-items-start flex-col",
          reverse ? "order-last ml-[6rem]" : "mr-[6rem]"
        )}>
        <h3 className={classNames(
          `text-${titleColor}`,
          'mb-3 text-left',
          )}>
          {title}
        </h3>
        { description.split('\n').map((d, i)=> (
          <p className='my-2 leading-relaxed' key={`${title} ${i}`} >
            {d}
          </p>
        ))}
        
        {button}
      
        </div>
        <img alt={title} src={img} className="h-[22rem]"/>
      </div>
    </div>
  )
}

export default Content