interface IProjectProps {
  title: string;
  img: string;
  popUpImg: string;
  imgSupport1: string;
  imgSupport2: string;
  imgSupport3: string;
  description: string;
  description_es: string;
  summary: string;
  summary_es: string;
  context: string;
  context_es: string;
  planning: string;
  planning_es: string;
  technologies: string;
  technologies_es: string;
  features: string[];
  features_es: string[];
  results: string;
  results_es: string;
  link: string;
}

export interface IProjectPopUpProps {
  lan: string;
  project: IProjectProps;
  onClick: () => void;
}

interface ISectionProps {
  id: number;
  titleEn: string;
  titleEs: string;
  contentEn: string | string[];
  contentEs: string | string[];
  isList?: boolean;
}

export type typeSection = ISectionProps[];

interface ICredentialsValues {
  serviceId?: string;
  templateId?: string;
  publicKey?: string;
}

export type typeCredential = ICredentialsValues;

export interface IAccordionArrowProps {
  id: number;
  open: number;
}

export interface INavButtonProps {
  isTop?: boolean;
  onClick: any;
  title: string;
}

export type color =
  | "blue-gray"
  | "gray"
  | "brown"
  | "deep-orange"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "light-green"
  | "green"
  | "teal"
  | "cyan"
  | "light-blue"
  | "blue"
  | "indigo"
  | "deep-purple"
  | "purple"
  | "pink"
  | "red";
