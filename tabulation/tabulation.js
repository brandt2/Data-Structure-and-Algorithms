// tabulation strategy
// fib(0) => 0
// fib(1) => 1
// fib(2) => 1
// fib(3) => 2
// fib(6) => 8
// fib(7) => 13

function fib(n) {
  let table = new Array(n + 1);
  table[0] = 0;
  table[1] = 1;

  for (let i = 2; i < table.length; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}

// Leet Code 139. Word Break
// Given a non-empty string s and a dictionary wordDict containing a list of non-empty
// words, determine if s can be segmented into a space-separated sequence of one
// or more dictinoary words.
// wordBreak("leetcode", wordDict = ["leet", "code"]) => true
// wordBreak("applepenapple", wordDict = ["apple", "pen"]) => true
// wordBreak("catsandog", wordDict = ["cats", "dogs", "sand", "and", "cat"]) => false

function wordBreak(s, wordDict) {
  let table = new Array(s.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i < table.length; i++) {
    if (table[i] === false) continue;

    for (let j = i + 1; j < table.length; j++) {
      let word = s.slice(i, j);
      if (wordDict.includes(word)) {
        table[j] = true;
      }
    }
  }

  return table[table.length - 1];
}