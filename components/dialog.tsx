/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, ReactNode} from 'react'

import { colors } from '../assets/colors'

import { SocialIcon } from 'react-social-icons'
import { OpenSeaIcon } from '../assets/icons/icons'
import LinkButton from './linkbutton'

type Props = {
  title: string,
  subtitle?: string,
  img?: string,
  content?: ReactNode,
  socials?: string[], 
  button?: any,
  children: ReactNode
}

const Modal= ({
  title,
  subtitle,
  img,
  content,
  socials,
  button,
  children
}: Props) => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div onClick={openModal}>
        {children}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full ring-8 ring-mazzy-star sm:max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-col sm:flex-row items-center justify-center">
                    <img alt={title} src={img} className="hidden sm:flex max-w-[14rem] max-h-[14rem] rounded-2xl" />
                    <div className="m-0 sm:mx-12 flex flex-col items-center justify-center">
                      <Dialog.Title
                        as="h2"
                        className="text-[12vw] text-center sm:text-2xl font-medium leading-none text-romantic-rose"
                      >
                        {title}
                      </Dialog.Title>
                      <Dialog.Title
                        as="p"
                        className="font-medium text-romantic-rose"
                      >
                        {socials && 
                        <a href={socials ? socials[0]:''} target="_blank" rel="noreferrer"
                        className="text-mazzy-star mr-2 focus:underline border-transparent focus:outline-none focus:border-transparent focus:ring-0"
                        >
                        @{socials ? socials[0].split('/').slice(-1)[0] : ''}, 
                        </a>
                        }
                        {subtitle}
                      </Dialog.Title>
                    <img alt={title} src={img} className="flex sm:hidden max-w-[60vw] max-h-[60vh] rounded-full" />
                    <div className="mt-2">
                      <p className="text-sm text-black">
                        {content}
                      </p>
                    </div>

                  {socials && 
                  <>
                    <p className="hidden sm:flex mt-3">
                      Find me <a href={socials[0]} target="_blank" rel="noreferrer"
                        className="text-mazzy-star focus:underline border-transparent focus:outline-none focus:border-transparent focus:ring-0"
                      >
                        @{socials[0].split('/').slice(-1)[0]}
                        </a>
                    </p>
                    <div className="flex space-x-4 mx-auto mt-3">
                      {socials?.map((s) => (
                        <SocialIcon key={`${title} ${s}`} url={s} bgColor="currentColor" fgColor={colors['moon-honey']} style={{height: "2rem", width: "2rem"}} className="text-romantic-rose rounded-full hover:ring-2 hover:ring-moon-honey hover:text-marquis-orange" />
                      ))}
                    </div>
                    </>
                  }
                  {button && 
                    <LinkButton {...button} />
                  }
                  
                  </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal;
