import localFont from '@next/font/local';
import { Josefin_Sans, Lora } from '@next/font/google';

export const tanSpringFont = localFont({ src: './tanspring.woff2'})
export const josephinSansFont = Josefin_Sans({subsets: ["latin"], weight: 'variable'})
export const loraFont = Lora({subsets: ["latin"]})