/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let m = new Map();
  m.set(0, 0);
  m.set(1, 0);
  for (let i = 0; i < students.length; i++) {
    if (m.get(students[i])) {
      m.set(students[i], m.get(students[i]) + 1);
    } else {
      m.set(students[i], 1);
    }
  }

  for (let i = 0; i < sandwiches.length; i++) {
    console.log(m.get(sandwiches[i]));
    if (m.get(sandwiches[i]) == 0) {
      return m.get(0) + m.get(1);
    }
    m.set(sandwiches[i], m.get(sandwiches[i]) - 1);
  }
  return 0;
};
