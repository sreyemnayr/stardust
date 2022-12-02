/* eslint-disable @next/next/no-img-element */
import { josephinSansFont, tanSpringFont, loraFont } from '../assets/fonts/loader';

import LinkButton from '../components/linkbutton'
import { LinkButtonProps } from '../interfaces';

import { ArrowDownCircleIcon } from '@heroicons/react/24/solid'

interface ContentProps {
  title: string;
  description: string;
  button?: any;
  img?: string;
  reverse?: boolean;
  bg?: string;
  titleClass?: string;
  hideImgMobile?: boolean;
  assets?: LinkButtonProps[],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function Content({title, description, button, img, reverse = false, bg = "purple-wave", titleClass = "text-romantic-rose", hideImgMobile = false, assets = []} : ContentProps) {
  const signedIn = false;
  return (
    <div className={
      classNames(bg,
        "w-full",
        bg.includes("wave") ? "bg-left sm:bg-top h-[36rem] items-center" : "mb-24",
        "items-top flex",
        reverse ? 'flipped-bg bg-opacity-50' : '')}
    >
      <div className={classNames(
        "info flex flex-col sm:flex-row w-[90vw] sm:w-[60rem] justify-evenly justify-between", bg.includes("wave") ? "h-[24rem] items-center" : "items-top", " mx-auto",
        
      )}>
        <div className={classNames(
          "infoText sm:w-[28rem]",
          "justify-items-start flex-col order-last",
          reverse ? "sm:ml-[6rem]" : "sm:order-first sm:mr-[6rem]"
        )}>
        <h3 className={classNames(
          titleClass,
          'mb-3 text-left font-bold sm:font-normal text-[8vw] sm:text-4xl',
          )}>
          {title}
        </h3>
        { description.split('\n').map((d, i)=> (
          <p className={classNames(
            'my-2 leading-relaxed', 
            bg.includes("wave") ? 'text-black' : 'text-moon-honey'
            )} key={`${title} ${i}`} >
            {d}
          </p>
        ))}
        {button && 
          <LinkButton {...button} />
        }
        
      
        </div>
        {img &&
        <img alt={title} src={img} className={classNames(
          "w-[60vw] sm:w-[24rem] self-center",
          hideImgMobile ? "hidden sm:block" : "block"
          )} />
        }
        {assets.length > 0 && 
          <div className="w-1/3">
            {assets.map(a=>(
              <LinkButton key={a.title} {...a} icon={<ArrowDownCircleIcon className="text-nostalgia-perfume h-6 w-6 block" />} bgClass="bg-periwinkle-blue w-full rounded-xl" />
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default Content