class K {
  static baseURL = "http://localhost:5000/";
  static charactersURL = `${this.baseURL}api/v1/characters`;
  static suggestionsURL = `${this.baseURL}api/v1/suggestions`;
}

export default K;
