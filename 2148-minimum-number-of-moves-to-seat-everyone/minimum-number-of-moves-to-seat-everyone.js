/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {

     let s = seats.sort((a,b)=>a-b)
    let st = students.sort((a,b)=>a-b)
    let sum = 0

    for (let i = 0; i < s.length; i++) {
        sum += Math.abs(s[i] - st[i])
    }

    return sum
};