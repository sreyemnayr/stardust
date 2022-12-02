export interface NavPage {
  label: string,
  slug: string,
  sublinks?: NavPage[], 
}

export interface Flyout {
  page: NavPage,
}

export interface LinkButtonProps {
  title: string;
  href: string;
  textClass?: string;
  bgClass?: string;
  hoverClass?: string;
  focusClass?: string;
  icon?: any;
}

export interface FilterButtonProps {
  title: string;
  textClass?: string;
  bgClass?: string;
  hoverClass?: string;
  focusClass?: string;
  [x:string]: any;
}

export interface BioProps {
  name: string; 
  title: string;
  bio: string;
  socials?: string[];
  img?: string;
  reverse?: boolean;
  uppercaseName?: boolean;
}

export interface GalleryItemProps {
  title: string; 
  content: any;
  img?: string;
  button?: LinkButtonProps;
}

export interface FilterAttribute {
  trait_type: string;
  match?: string;
  exists?: boolean;
}

export interface GalleryFilter {
  title: string;
  subtitle?: string;
  attributes?: FilterAttribute[];
  subfilters?: GalleryFilter[];
}