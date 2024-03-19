var busyStudent = function (startTime, endTime, queryTime) {
    let count = 0;
    for (let i in startTime) {
      if (startTime[i] <= queryTime && queryTime <= endTime[i]) count++;
    }
    return count;
  };

const startTime = [1, 2, 3],
  endTime = [3, 2, 7],
  queryTime = 4;
console.log(busyStudent(startTime, endTime, queryTime));
