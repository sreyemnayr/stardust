/* eslint-disable @next/next/no-img-element */
import { josephinSansFont, tanSpringFont, loraFont } from '../assets/fonts/loader';

import LinkButton from '../components/linkbutton'

interface ContentProps {
  title: string;
  description: string;
  button?: any;
  img?: string;
  reverse?: boolean;
  bg?: string;
  titleClass?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function Content({title, description, button, img, reverse = false, bg = "purple-wave", titleClass = "text-romantic-rose"} : ContentProps) {
  const signedIn = false;
  return (
    <div className={
      classNames(bg,
        "w-full ",
        bg.includes("wave") ? "bg-left sm:bg-top h-[36rem] items-center" : "mb-24",
        "items-top flex")}
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
        
        <LinkButton {...button} />
      
        </div>
        <img alt={title} src={img} className={classNames(
          "w-[60vw] sm:w-[24rem] self-center",
          bg.includes("wave") ? "hidden sm:block" : "block"
          )} />
      </div>
    </div>
  )
}

export default Content