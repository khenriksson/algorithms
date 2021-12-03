var fs = require("fs");
const readline = require("readline");

const slicingWindows = (arr, size) => {
  if (size > arr.length) {
    return arr;
  }
  let result = [];
  let lastWindow = arr.length - size;
  for (let i = 0; i <= lastWindow; i += 1) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

async function getThreeIncreasingDepths() {
  const fileStream = fs.createReadStream("entries.txt");
  let prev = 0;
  let sum = 0;

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const entries = [];
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    entries.push(line);
  }

  let slidingWindow = [];

  for (i = 2; i < entries.length; i++) {
    slidingWindow.push([entries[i - 2], entries[i - 1], entries[i]]);
  }

  const mappedWindow = slidingWindow.map((window) => {
    return window.reduce((previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue), 0);
  });

  mappedWindow.forEach((window, i) => {
    console.log("window :>> ", window);
    if (i !== 0) {
      if (window > prev) {
        sum += 1;
        prev = window;
      } else {
        prev = window;
      }
    }
  });

  console.log(`Three increasing sum is ` + sum);
}

async function getIncreasingDepths() {
  const fileStream = fs.createReadStream("entries.txt");
  let prev = 0;
  let sum = 0;

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    if (line > prev) {
      sum += 1;
      prev = line;
    } else {
      prev = line;
    }
  }
  console.log(`Sum is ` + sum);
}

// const getEntries = () =>
//   fs.readFileSync("entries.txt", "utf8", function (err, data) {
//     if (err) throw err;
//     console.log("OK: ");
//     console.log("data.toString() :>> ", data.toString());
//     console.log('data.split("\n") :>> ', data.split("\n"));
//     return data;
//   });

getIncreasingDepths();
getThreeIncreasingDepths();
