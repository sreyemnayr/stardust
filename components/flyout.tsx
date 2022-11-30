import { Fragment, useRef, useState, useEffect, forwardRef } from "react"
import { Popover, Menu, Transition, } from "@headlessui/react"
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import {Flyout} from '../interfaces'

// eslint-disable-next-line react/display-name
const LLink = forwardRef((props: any, ref) => {
  let { href, children, ...rest } = props
  return (
    <Link href={href} ref={ref} {...rest}>
        {children}
    </Link>
  )
})


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function FlyoutMenu({page}: Flyout) {
  let timeout: NodeJS.Timeout | undefined // NodeJS.Timeout
  const timeoutDuration = 200

  const buttonRef = useRef<HTMLButtonElement>(null) // useRef<HTMLButtonElement>(null)
  const [openState, setOpenState] = useState(false)

  const toggleMenu = (_open: any) => {
    // log the current open state in React (toggle open state)
    setOpenState((openState) => !openState)
    // toggle the menu by clicking on buttonRef
    buttonRef?.current?.click() // eslint-disable-line
  }

  // Open the menu after a delay of timeoutDuration
  const onHover = (open: boolean, action: string) => {
    // if the modal is currently closed, we need to open it
    // OR
    // if the modal is currently open, we need to close it
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      // clear the old timeout, if any
      clearTimeout(timeout)
      // open the modal after a timeout
      timeout = setTimeout(() => toggleMenu(open), timeoutDuration)
    }
    // else: don't click! 😁
  }

  const handleClick = (open: any) => {
    setOpenState(!open) // toggle open state in React state
    clearTimeout(timeout) // stop the hover timer if it's running
  }

  const handleClickOutside = (event: { target: any; stopPropagation: () => void }) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation()
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  })
  return (
    <div className="relative inline-block text-left" key={page.slug}>
    <Menu>
      {({ open }) => (
        <div 
          onMouseEnter={() => onHover(open, "onMouseEnter")}
          onMouseLeave={() => onHover(open, "onMouseLeave")}
        >
        
          <Menu.Button className={classNames(
              open ? 'font-bold': 'hover:font-bold',
              'border-none px-3 py-2 rounded-md text-sm ring-none focus:font-bold focus:underline focus:border-none'
              )}
              ref={buttonRef}
              
          >
            {page.label}
            <ChevronDownIcon className="inline h-3 w-3 " aria-hidden="true" />
          </Menu.Button>
        
        <Transition
          show={open}
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-10 pt-1 w-56 origin-top-right rounded-md bg-purple-illusion bg-opacity-70 shadow-lg focus:outline-none">
            
              {page.sublinks && page.sublinks.map(sp => (
                <Menu.Item key={sp.slug}>
                  {({active}) => (  
                    <LLink href={sp.slug} className={classNames(
                      active ? 'font-bold' : 'hover:font-bold',
                      'block px-4 py-2 text-sm focus:font-bold '
                    )} >
                    {sp.label}
                    </LLink>
                  )}
                </Menu.Item>
              ))}
              
          </Menu.Items>
        </Transition>
        </div>
      )}
      </Menu>
      </div>
  )
}
