/* eslint-disable @next/next/no-img-element */
import { josephinSansFont, tanSpringFont, loraFont } from '../assets/fonts/loader';

import { colors } from '../assets/colors'

import Link from 'next/link'

import {FilterButtonProps} from '../interfaces'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function FilterButton({title, textClass = "text-black", bgClass = "bg-transparent", hoverClass = "hover:ring-romantic-rose", focusClass = "focus:ring-romantic-rose", ...rest} : FilterButtonProps) {
  return (
    <button {...rest} className={classNames(
      " inline-block my-2 rounded-md border border-transparent ",
      textClass,
      bgClass,
      hoverClass,
      focusClass,
      "py-2 px-4 text-sm font-medium focus:ring-2 focus:ring-offset-2"
      )}>
      {title}
    </button>
  )
}

export default FilterButton