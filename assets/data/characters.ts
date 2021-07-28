import { CharacterT } from "../../types";
import IMAGE_01 from "../images/kenkaneki.png";
import IMAGE_02 from "../images/celicaarfonia.jpg";
import IMAGE_03 from "../images/hinatahyuga.jpg";
import IMAGE_04 from "../images/ryukomatoi.jpg";
import IMAGE_05 from "../images/madarauchiha.png";
import IMAGE_06 from "../images/riasgremory.jpg";
import IMAGE_07 from "../images/anntakamaki.jpg";
import IMAGE_08 from "../images/jiraiya.png";
import IMAGE_09 from "../images/sakuraharuno.jpg";
import IMAGE_10 from "../images/kushinauzumaki.png";

const characters: CharacterT[] = [
  {
    id: 1,
    name: "Ken Kaneki",
    isOnline: true,
    age: 19,
    neighborhood: "Tokyo",
    message:
      "I will go back to Gotham and I will fight men Iike this but I will not become an executioner.",
    info1: 'Ghoul, Single, 5"10',
    info2: "Tea Totaller, Loves Photography & Travel",
    info3: "Beaches, Mountain, Cafe, Movies",
    info4: "Last seen: 23h ago",
    image: IMAGE_01,
  },
  {
    id: 2,
    name: "Celica Arfonia",
    age: 400,
    neighborhood: "Melgalius' Sky Castle",
    isOnline: false,
    message: "Someone like you. Someone who'll rattle the cages.",
    image: IMAGE_02,
  },
  {
    id: 3,
    name: "Hinata Hyuga",
    age: 19,
    neighborhood: "Hidden Leaf Village",
    isOnline: false,
    message:
      "Oh, hee-hee, aha. Ha, ooh, hee, ha-ha, ha-ha. And I thought my jokes were bad.",
    image: IMAGE_03,
  },
  {
    id: 4,
    name: "Ryuko Matoi",
    age: 17,
    neighborhood: "Honnōji Academy",
    isOnline: true,
    message: "Bats frighten me. It's time my enemies shared my dread.",
    image: IMAGE_04,
  },
  {
    id: 5,
    name: "Madara Uchiha",
    age: 90,
    neighborhood: "Hidden Leaf Village",
    isOnline: false,
    message: "It's not who I am underneath but what I do that defines me.",
    image: IMAGE_05,
  },
  {
    id: 6,
    name: "Rias Gremory",
    age: 19,
    neighborhood: "Kuoh Town",
    isOnline: true,
    message:
      "You have nothing, nothing to threaten me with. Nothing to do with all your strength.",
    image: IMAGE_06,
  },
  {
    id: 7,
    name: "Ann Takamaki",
    age: 16,
    neighborhood: "Yongen-Jaya",
    isOnline: true,
    message:
      "You have nothing, nothing to threaten me with. Nothing to do with all your strength.",
    image: IMAGE_07,
  },
  {
    id: 8,
    name: "Jiraiya",
    age: 54,
    neighborhood: "Hidden Leaf Village",
    isOnline: true,
    message:
      "You have nothing, nothing to threaten me with. Nothing to do with all your strength.",
    image: IMAGE_08,
  },
  {
    id: 9,
    name: "Sakura Haruno",
    age: 33,
    neighborhood: "Hidden Leaf Village",
    isOnline: true,
    message:
      "You have nothing, nothing to threaten me with. Nothing to do with all your strength.",
    image: IMAGE_09,
  },
  {
    id: 10,
    name: "Kushina Uzumaki",
    age: 24,
    neighborhood: "Hidden Leaf Village",
    isOnline: true,
    message:
      "You have nothing, nothing to threaten me with. Nothing to do with all your strength.",
    image: IMAGE_10,
  },
];

export default characters;
