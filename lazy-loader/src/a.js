function runProgram(input) {
  var newInput = input.split("\n");
  var l = Number(newInput[0]);
  for (a = 0; a < l; a++) {
    var n = Number(newInput[3 * a + 1]);
    var arr = newInput[3 * a + 2].split(" ").map(Number);
    var k = Number(newInput[3 * a + 3]);

    var sum = 0;
    var arr2 = [];
    for (var i = 0; i < n; i++) {
      for (var j = i + 1; j < n; j++) {
        sum = arr[i] + arr[j];
        if (sum < k) {
          arr2.push(sum);
        }
      }
    }
    if (arr2.length === 0) {
      console.log("-1");
    } else {
      var maximum = arr2[0];
      for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] > maximum) {
          maximum = arr2[i];
        }
      }
      console.log(maximum);
    }
  }
}
if (process.env.USERNAME === "Shubham Kumar") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);

    process.exit(0);
  });
}
