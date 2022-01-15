/* 
Hercy 想要为购买第一辆车存钱。他 每天 都往力扣银行里存钱。

最开始，他在周一的时候存入 1 块钱。从周二到周日，他每天都比前一天多存入 1 块钱。在接下来每一个周一，他都会比 前一个周一 多存入 1 块钱。

给你 n ，请你返回在第 n 天结束的时候他在力扣银行总共存了多少块钱。

*/

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let week = 0, day = 1, money = 0;
  for (let index = 1; index < n + 1; index++, day++) {
    if (day == 8) {
      day = 1
      week++
    }
    console.log(week, day, money);

    money = money + week + day

  }
  return money
};

// console.log(totalMoney(4));
console.log(totalMoney(10));
// console.log(totalMoney(20));