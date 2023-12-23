export interface IProjectProps {
  title: string;
  popUpImg: string;
  summary: string;
  summary_es: string;
  context: string;
  context_es: string;
  planning: string;
  planning_es: string;
  technologies: string;
  technologies_es: string;
  features: any;
  features_es: any;
  results: string;
  results_es: string;
  link: string;
}

interface ICredentialsValues {
  serviceId?: string;
  templateId?: string;
  publicKey?: string;
}

export interface ICredentialsProps {
  credentials: ICredentialsValues;
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
