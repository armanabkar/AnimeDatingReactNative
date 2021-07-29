export type CardItemT = {
  neighborhood?: string;
  hasActions?: boolean;
  hasVariant?: boolean;
  image: any;
  isOnline?: boolean;
  name: string;
  age?: number;
};

export type IconT = {
  name: any;
  size: number;
  color: string;
  style?: any;
};

export type MessageT = {
  image: any;
  name: string;
};

export type ProfileItemT = {
  name: string;
  age: number;
  neighborhood: string;
};

export type TabBarIconT = {
  focused: boolean;
  iconName: any;
  text: string;
};

export type CharacterT = {
  id: number;
  name: string;
  neighborhood: string;
  age: number;
  image: any;
  isOnline: boolean;
  message: string;
};
