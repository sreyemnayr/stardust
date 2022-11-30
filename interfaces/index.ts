export interface NavPage {
  label: string,
  slug: string,
  sublinks?: NavPage[], 
}

export interface Flyout {
  page: NavPage,
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