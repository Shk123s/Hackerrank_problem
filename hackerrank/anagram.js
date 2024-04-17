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
function anagram2(str,str1){
  obj2 ={}
  for (const  char of str) {
    obj2[char] = (obj2[char] || 0)+1
    console.log(obj2)
  }
  
  for (const char of str1) {
    if (!obj2[char]) {
      return false
    }
    obj2[char]--
  }
  return true
}
// console.log(anagram("act", "cat"));
// console.log(anagram("hello", "ehllo"));
console.log(anagram2("earth", "heart"));
// console.log(anagram("silent", "listen"));

// need to check all the string count store in the variable

// and need to match all the stored element with the another string

// if matched true minus the element else false ..
