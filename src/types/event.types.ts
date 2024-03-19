export type TChildren = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export type TEvent = {
  _id: string;
  name: string;
  img: string;
};

export type TRecent = {
  _id: string;
  img: string;
  description: string;
};

export type TService = {
  _id: string;
  name: string;
  img: string;
  description: string;
  services: [];
};
