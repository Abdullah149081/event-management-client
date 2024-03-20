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
  services: [
    {
      label: string;
      value: string;
    },
  ];
};

export type TReview = {
  _id: string;
  img: string;
  name: string;
  title: string;
  review: string;
};

export type TPlan = {
  _id: string;
  name: string;
  icon: string;
  price: number;
  description: string;
  features: [
    {
      text: string;
      value: boolean;
    },
  ];
};
