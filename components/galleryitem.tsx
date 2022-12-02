/* eslint-disable @next/next/no-img-element */
import { josephinSansFont, tanSpringFont, loraFont } from '../assets/fonts/loader';

import { colors } from '../assets/colors'

import Link from 'next/link'

import { SocialIcon } from 'react-social-icons'

import Modal from '../components/dialog';

import {GalleryItemProps} from '../interfaces'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function GalleryItem({title, content, img, button} : GalleryItemProps) {
  const signedIn = false;
  return (
    <div className="flex flex-col items-center justify-center mt-2 sm:h-max ">
            <Modal title={title} content={content} img={img} button={button} >
              <img alt={title} src={img} className="max-h-[7rem] ring-offset-2 rounded-lg mx-auto hover:ring-3 self-center"/>
            </Modal>
            <p className="text-romantic-rose">{title}</p>
    </div>
        
  )
}

export default GalleryItem