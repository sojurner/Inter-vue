// Use a trie

class Trie {
  constructor() {
    this.rootNode = {};
  }

  addWord(word) {
    let currentNode = this.rootNode;
    let isNewWord = false;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode.hasOwnProperty(char)) {
        isNewWord = true;
        currentNode[char] = {};
      }
      currentNode = currentNode[char];
    }

    if (!currentNode.hasOwnProperty('End of word')) {
      isNewWord = true;
      currentNode['End of word'] = {};
    }

    return isNewWord;
  }
}
