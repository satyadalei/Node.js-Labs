let s = "applepenapple";
let wordDict = ["apple", "pen", "apple", "pen"];
let wordBreak = function (s, wordDict) {
    let n = wordDict.length;
    let state ;
    wordDict.forEach((word, index) => {
        if (s.includes(word)) {
            s = s.replace(word, "");
            if (index === n - 1) {
                state = true;
            }
        } else {
            state = false;
        }
    })
    return state;
};
console.log(wordBreak(s, wordDict));