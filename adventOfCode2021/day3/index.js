var fs = require("fs");
const readline = require("readline");

function transposeArray(array, arrayLength) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push([]);
  }

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < arrayLength; j++) {
      newArray[j].push(array[i][j]);
    }
  }

  return newArray;
}

async function getEpsilonGamma(file) {
  const fileStream = fs.createReadStream(file);
  let epsilon;
  let gamma;

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  const arrayOfBits = [];

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    const getBits = line.split("");
    arrayOfBits.push(getBits);
  }
  console.log("arrayOfBits :>> ", arrayOfBits);

  const transposed = transposeArray(arrayOfBits, arrayOfBits[0].length).filter((arr) => arr.length > 0);

  const calculateSums = transposed.map((arr) =>
    arr.reduce((prev, curr) => {
      if (curr === "0") {
        return prev - 1;
      } else {
        return prev + 1;
      }
    }, 0)
  );

  const mostCommon = calculateSums.map((bit) => {
    if (bit < 0) {
      return "0";
    } else {
      return "1";
    }
  });

  const leastCommon = calculateSums.map((bit) => {
    if (bit < 0) {
      return "1";
    } else {
      return "0";
    }
  });

  gamma = parseInt(mostCommon.join(""), 2);
  epsilon = parseInt(leastCommon.join(""), 2);
  console.log("gamma, epsilon :>> ", gamma, epsilon);

  const multiplication = gamma * epsilon;
  console.log(`Multiplication is ` + multiplication);
}

getEpsilonGamma("entries.txt");
