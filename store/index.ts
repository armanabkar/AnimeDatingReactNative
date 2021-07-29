import { CharacterT } from "./../types";
import { makeObservable, observable, action, runInAction, autorun } from "mobx";
import K from "../Constants/K";

class Store {
  characters: CharacterT[] = [
    {
      id: 0,
      name: "Kushina Uzumaki",
      age: 24,
      neighborhood: "Hidden Leaf Village",
      message:
        "You have nothing, nothing to threaten me with. Nothing to do with all your strength.",
      image: "images/kushinauzumaki.png",
    },
  ];
  suggestions: string[] = [];

  constructor() {
    makeObservable(this, {
      characters: observable,
      suggestions: observable,
      fetchCharacters: action,
      fetchSuggestions: action,
    });
    autorun(() => {
      this.fetchCharacters();
      this.fetchSuggestions();
    });
  }

  shuffle(array: CharacterT[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  async fetchCharacters() {
    try {
      const response = await fetch(K.charactersURL);
      const data = await response.json();
      runInAction(() => {
        this.characters.push(...data);
        this.shuffle(this.characters);
      });
    } catch (error) {
      console.log("Error:", error);
    }
  }

  async fetchSuggestions() {
    try {
      const response = await fetch(K.suggestionsURL);
      const data = await response.json();
      runInAction(() => {
        this.suggestions.push(...data);
      });
    } catch (error) {
      console.log("Error:", error);
    }
  }
}

const store = new Store();

export default store;
