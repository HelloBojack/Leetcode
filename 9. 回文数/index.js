// var isPalindrome = function (x) {
//   if (x == 0) return true
//   if (x < 0 || x % 10 == 0) return false
//   y = 0
//   tempx = x
//   while (tempx) {
//     y = tempx % 10 + y * 10
//     tempx = parseInt(tempx / 10)
//   }
//   return y == x
// };
var isPalindrome = function (x) {
  if (x == 0) return true
  if (x < 0 || x % 10 == 0) return false
  let arrx = x.toString().split('')
  let i = 0, l = arrx.length - 1
  // console.log(arseInt((l + 1) / 2))
  for (; i <= parseInt(l + 1 / 2); i++, l--) {
    console.log(i)
    console.log(l)
    console.log('---')
    // console.log(arrx[i] + '---' + arrx[l] + '---' + arrx[i] == arrx[l])
    if (arrx[i] == arrx[l]) { continue; }
    else { return false }
  }
  return true

}
console.log(isPalindrome(1000030001))