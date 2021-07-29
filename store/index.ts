import { CharacterT } from "./../types";
import { makeObservable, observable, action, runInAction, autorun } from "mobx";

class Store {
  characters: CharacterT[] = [
    {
      id: 0,
      name: "Kushina Uzumaki",
      age: 24,
      neighborhood: "Hidden Leaf Village",
      isOnline: true,
      message:
        "You have nothing, nothing to threaten me with. Nothing to do with all your strength.",
      image: "images/kushinauzumaki.png",
    },
  ];

  constructor() {
    makeObservable(this, {
      characters: observable,
      fetchCharacters: action,
    });
    autorun(() => this.fetchCharacters());
  }

  async fetchCharacters() {
    try {
      const response = await fetch("http://localhost:5000/api/v1/characters");
      const data = await response.json();
      runInAction(() => {
        this.characters.push(...data);
      });
    } catch (error) {
      console.log("Error:", error);
    }
  }
}

const store = new Store();

export default store;
