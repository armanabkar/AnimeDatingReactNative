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
  lastMessage: string;
  name: string;
};

export type ProfileItemT = {
  age?: number;
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
  neighborhood?: string;
  name: string;
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
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
};
