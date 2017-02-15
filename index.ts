// import numRef from './numbers';
const numRef = [{
  "num": 1,
  "word": "One"
}, {
  "num": 2,
  "word": "Two"
}, {
  "num": 3,
  "word": "Three"
}, {
  "num": 4,
  "word": "Four"
}, {
  "num": 5,
  "word": "Five"
}, {
  "num": 0,
  "word": "Zero"
}];


function createTranslator() {
  return {
    numtoword: (num: number) => {
      return num < 0 || num > 5 ? 'This is a failure' : converttoword(num);
    },
    wordtonum: (word: string) => {
      const num = converttonum(word);
      return num === -1 ? 'This is a failure' : num;
    }
  };
}

const converttoword = (num: number) => {
  return numRef.reduce((accum, ref) => {
    return ref.num === num ? ref.word : accum;
  }, '');

};

const converttonum = (word: string) => {
  return numRef.reduce((accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum;
  }, -1);
};

export default createTranslator;
