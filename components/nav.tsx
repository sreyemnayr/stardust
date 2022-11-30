/* eslint-disable @next/next/no-img-element */
import { josephinSansFont, tanSpringFont, loraFont } from '../assets/fonts/loader';

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
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

    <Disclosure as="nav" className="bg-nostalgia-perfume bg-opacity-80 text-20px text-forest-fruit-red">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-24 items-center justify-between align-middle">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:justify-start">
                <div className="flex flex-shrink-0 grow items-center">
                  <img
                    className="block h-24 w-auto lg:hidden"
                    src="/img/logo.png"
                    alt="Stardust Society"
                  />
                  <img
                    className="hidden h-24 w-auto lg:block"
                    src="/img/logo.png"
                    alt="Stardust Society"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block  align-middle">
                  <div className="flex space-x-4 align-middle items-center">
                    {navigation.map((p) => (
                      <>
                      { p.sublinks && 
                      /*
                        <Menu as="div" className="relative inline-block text-left" key={p.slug}>
                          <div>
                            <Menu.Button className={classNames(
                                'hover:text-white',
                                'px-3 py-2 rounded-md text-sm '
                                )}
                            >
                              {p.label}
                              <ChevronDownIcon className="inline h-3 w-3 " aria-hidden="true" />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute left-0 z-10 mt-1 w-56 origin-top-right rounded-md bg-purple-illusion bg-opacity-70 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                {p.sublinks.map(sp => (
                                  <Menu.Item key={sp.slug}>
                                  {({ active }) => (
                                    <Link href={sp.slug} className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm hover:text-white'
                                    )}>
                                    {sp.label}
                                  </Link>
                                  )}
                                </Menu.Item>
                                ))}
                                
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                        */
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
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

  )
}

export default Nav