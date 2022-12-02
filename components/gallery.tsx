/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, ReactNode, useEffect} from 'react'

import { GalleryFilter, GalleryItemProps } from '../interfaces'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { colors } from '../assets/colors'
import GalleryItem from './galleryitem'
import FilterButton from './filterbutton'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  title: string,
  searchLabel?: string,
  contractAddress?: string,
  nftStandard?: string, 
  chain?: string,
  filters: GalleryFilter[]
}

const Gallery= ({
  title = "NFT Gallery",
  searchLabel = "Search NFTs",
  contractAddress,
  nftStandard = "erc721",
  chain = "ethereum",
  filters = [],
}: Props) => {
  let [isOpen, setIsOpen] = useState(false)
  let [activeFilter, setActiveFilter] = useState(filters[0]?.subfilters?.[0] || filters[0])
  let [openFilter, setOpenFilter] = useState(0)
  let [filteredNFTs, setFilteredNFTs] = useState([{
    title: "Sweep Patch",
    img: "https://i.seadn.io/gae/kfdkyMuky9I7oCRPsFyeMRe_9IABjE9FoZZfBkTbkpcyqH715w_bXvliOVaPMjlSbfn2AP5l8yewTU3eUHapsOK3unU1JArlhP2g?auto=format&w=1000",
    content: "",
    button: {
      title: "View on Opensea",
      href: `https://opensea.io/assets/${chain}/${contractAddress}/4`,
    }
  }])

  let [galleryPage, setGalleryPage] = useState(0)

  return (
    <div className="text-romantic-rose w-full h-fit p-2 sm:p-14 flex flex-col sm:w-[60rem] bg-moon-honey bg-opacity-50 rounded-2xl">
      <h2 className="text-xl sm:text-4xl font-bold text-romantic-rose text-center sm:text-left mb-3">{title}</h2>
      <div className={classNames("flex flex-col ", filters.length > 0 ? 'sm:flex-row' : '')}>
        <div className="flex flex-col w-full sm:w-[14rem]">
          <div className="space-y-6 ">
            
                <div className="mt-1 flex rounded-xl border-romantic-rose border-2 shadow-sm p-1">
                  <input
                    type="text"
                    name="company-website"
                    id="company-website"
                    className="pl-4 block w-full text-xs placeholder:text-romantic-rose text-romantic-rose grow bg-transparent"
                    placeholder={searchLabel}
                  />
                  
                    <MagnifyingGlassIcon className="block h-4 w-4 text-romantic-rose" />
                  
                
            </div>
          </div>
          <div className="flex flex-col">
            {filters.map(((f, i)=> (
              <>
              <FilterButton key={f.title} textClass={openFilter === i ? 'text-moon-honey' : 'text-black'} bgClass={openFilter === i ? 'bg-periwinkle-blue' : 'bg-nostalgia-perfume'} title={f.title} onClick={() => {openFilter === i ? setOpenFilter(-1) : setOpenFilter(i)}} />
              {openFilter === i && f.subfilters?.map((sf, sfi) => (
                <FilterButton key={sf.title} title={sf.title} textClass={activeFilter.title === sf.title ? 'text-forest-fruit-red font-bold' : 'text-forest-fruit-red'} onClick={() => {setActiveFilter(sf)}} />
              ))}
              </>
              
            )))}
          </div>
        </div>
        <div className={classNames("pl-none", filters.length > 0 ? "sm:pl-14" : "")}>
          {activeFilter && 
          <>
            <h3 className="text-xl text-center sm:text-left font-bold">{activeFilter.title}</h3>
            <p className="text-center sm:text-left">{activeFilter.subtitle}</p>
          </>
          }
          <div className="h-fit grid grid-cols-2 sm:grid-cols-5">
            {filteredNFTs && filteredNFTs.slice(galleryPage*10, (galleryPage*10)+10).map((nft: GalleryItemProps, i) => (
              <GalleryItem key={`nft ${i}`} {...nft} />
            ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery;