let terminals = {};
let startwords = [];
let wordstats = {};

const makeTweet = (tweets) => {

  const text = tweets.map(tweet => tweet.text);

  for(let i = 0; i < text.length; i++) {
    let words = text[i].split(' ');
    // console.log(words)
    terminals[words[words.length-1]] = true;
    startwords.push(words[0]);
    for(let j = 0; j < words.length - 1; j++) {
      if(wordstats.hasOwnProperty(words[j])) {
        wordstats[words[j]].push(words[j+1]);
      } else {
        wordstats[words[j]] = [words[j+1]];
      }
    }
  }

  let word = choice(startwords);
  let tweet = [word];

  while (wordstats.hasOwnProperty(word)) {
    let next_words = wordstats[word];
    word = choice(next_words);
    tweet.push(word);
  }

  return tweet.join(' ');
};

let choice = (a) => {
    let i = Math.floor(a.length * Math.random());
    return a[i];
};

export default makeTweet;
