export type CardItemT = {
  neighborhood?: string;
  hasActions?: boolean;
  hasVariant?: boolean;
  image: string;
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
  image: string;
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
  image: string;
  isOnline: boolean;
  message: string;
};
