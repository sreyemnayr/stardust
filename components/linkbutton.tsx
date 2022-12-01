/* eslint-disable @next/next/no-img-element */
import { josephinSansFont, tanSpringFont, loraFont } from '../assets/fonts/loader';

import { colors } from '../assets/colors'

import Link from 'next/link'

interface LinkButtonProps {
  title: string;
  href: string;
  textClass?: string;
  bgClass?: string;
  hoverClass?: string;
  focusClass?: string;
}


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function LinkButton({title, href, textClass = "text-moon-honey", bgClass = "bg-mazzy-star", hoverClass = "hover:ring-romantic-rose", focusClass = "focus:ring-romantic-rose"} : LinkButtonProps) {
  return (
    <Link href={href} className={classNames(
      " inline-block my-4 rounded-md border border-transparent ",
      textClass,
      bgClass,
      hoverClass,
      focusClass,
      "py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-offset-2"
      )}>
      {title}
    </Link>
  )
}

export default LinkButton