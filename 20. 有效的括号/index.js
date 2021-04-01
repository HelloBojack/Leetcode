var isValid = function (s) {
  let stack = []
  let l = s.length

  if (s.length % 2 != 0) return false
  for (let item of s) {
    switch (item) {
      case '{':
      case '[':
      case '(':
        stack.push(item); break;
      case '}':
        if (stack.pop() != '{') return false; break
      case ']':
        if (stack.pop() != '[') return false; break
      case ')':

        if (stack.pop() != '(') return false; break
    }
  }
  return !stack.length
};
console.log(isValid('['))