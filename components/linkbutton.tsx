/* eslint-disable @next/next/no-img-element */
import { josephinSansFont, tanSpringFont, loraFont } from '../assets/fonts/loader';

import { colors } from '../assets/colors'

import Link from 'next/link'

import {LinkButtonProps} from '../interfaces'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function LinkButton({title, href, textClass = "text-moon-honey", bgClass = "bg-mazzy-star", hoverClass = "hover:bg-romantic-rose", focusClass = "focus:ring-romantic-rose", icon = ""} : LinkButtonProps) {
  return (
    <Link href={href} className={classNames(
      " inline-flex my-4 rounded-md border border-transparent justify-between items-center",
      textClass,
      bgClass,
      hoverClass,
      focusClass,
      "py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-offset-2"
      )}>
      {title}{icon}
    </Link>
  )
}

export default LinkButton