function anagram(str1, str2) {
  let obj = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (const ch of str1) {
    obj[ch] = (obj[ch] || 0) + 1;
  }

  for (const ch of str2) {
    if (!obj[ch]) {
      return false;
    }

    obj[ch]--;
  }
  return true;
}

// console.log(anagram("act", "cat"));
console.log(anagram("hello", "ehllo"));

// need to check all the string count store in the variable

// and need to match all the stored element with the another string

// if matched true minus the element else false ..
