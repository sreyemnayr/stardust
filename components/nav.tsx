/* eslint-disable @next/next/no-img-element */
import { josephinSansFont, tanSpringFont, loraFont } from '../assets/fonts/loader';

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

import { CustomConnectButton } from '../components/connect'
import { NavPage } from '../interfaces'
import FlyoutMenu from './flyout';


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const navigation: NavPage[] = [
  {
    label: "About",
    slug: "about",
  },
  {
    label: "Collections",
    slug: "collections",
    sublinks: [
      {
        label: "Stardust Generation",
        slug: "collections/stardust-generation",
      },
      {
        label: "Space Cadets",
        slug: "collections/space-cadets",
      },
      {
        label: "Derividust",
        slug: "collections/derividust",
      },
    ],
  },
  {
    label: "Space Station",
    slug: "space-station",
  },
  {
    label: "Community",
    slug: "community",
  },
  {
    label: "Contact",
    slug: "about",
  },
]

function Nav() {
  const signedIn = false;
  return (

    <Disclosure as="nav" className="bg-nostalgia-perfume sm:bg-opacity-80 text-20px text-forest-fruit-red">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-24 items-center justify-between align-middle">
              <div className="inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 text-romantic-rose stroke-[3px]" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:justify-start">
                <div className="flex flex-shrink-0 grow items-center justify-center">
                <Link href="/">
                  <img
                    className="block h-24 w-auto mx-auto lg:hidden"
                    src="/img/logo.png"
                    alt="Stardust Society"
                  />
                  <img
                    className="hidden h-24 w-auto lg:block"
                    src="/img/logo.png"
                    alt="Stardust Society"
                  />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block  align-middle">
                  <div className="flex space-x-4 align-middle items-center">
                    {navigation.map((p) => (
                      <>
                      { p.sublinks && 
                       <FlyoutMenu page={p} />
                      }
                      {!p.sublinks && 
                      
                        <Link href={p.slug} className={classNames(
                          'hover:font-bold',
                          'px-3 py-2 rounded-md text-sm focus:outline-none focus:underline focus:font-bold'
                          )}>{p.label} </Link>
                      
                      }
                      </>
                    ))}
                    <button className=" flex rounded-[15px] border border-transparent bg-romantic-rose py-3 px-6 text-sm  text-white hover:bg-forest-fruit-red focus:outline-none focus:ring-2 focus:ring-romantic-rose focus:ring-offset-2">
                    Shop
                  </button>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                
                  <CustomConnectButton />
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((p) => (
                <>
                { p.sublinks && 
                  <Disclosure as="nav" className="bg-nostalgia-perfume sm:bg-opacity-80 text-20px text-forest-fruit-red">
                        {({ open }) => (
                          <>
                          <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:text-white">
                          {p.label}
                          {open ? (
                            <ChevronRightIcon className="ml-2 block h-4 w-4" aria-hidden="true" />
                          ) : (
                            <ChevronDownIcon className="ml-2 block h-4 w-4 stroke-[3px]" aria-hidden="true" />
                          )}
                        </Disclosure.Button>
                        <Disclosure.Panel className="sm:hidden">
                          <div className="space-y-1 px-2 pt-2 pb-3">
                            {p.sublinks?.map(sp => (
                              <Disclosure.Button
                              key={sp.slug}
                              as={Link}
                              href={sp.slug}
                              className={classNames(
                                'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block px-3 py-2 rounded-md text-base '
                              )}
                              
                            >
                              {sp.label}
                            </Disclosure.Button>
                            ))}
                          </div>
                          </Disclosure.Panel>
                        </>
                        )}
                  </Disclosure>
                      
                      }
                      {!p.sublinks && 
                <Disclosure.Button
                  key={p.slug}
                  as={Link}
                  href={p.slug}
                  className={classNames(
                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base '
                  )}
                  
                >
                  {p.label}
                </Disclosure.Button>
                }
                </>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

  )
}

export default Nav