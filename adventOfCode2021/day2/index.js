var fs = require("fs");
const readline = require("readline");

async function getFinalHorizontalPosition(file) {
  const fileStream = fs.createReadStream(file);
  let depth = 0;
  let horizontal = 0;

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    const getCommand = line.split(" ");
    const command = getCommand[0];
    const value = parseFloat(getCommand[1]);
    if (command === "forward") {
      horizontal += value;
    } else if (command === "up") {
      depth -= value;
    } else if (command === "down") {
      depth += value;
    }
  }
  const multiplication = depth * horizontal;
  console.log(`Multiplication is ` + multiplication);
}

async function getFinalAimHorizontalPosition(file) {
  const fileStream = fs.createReadStream(file);
  let depth = 0;
  let horizontal = 0;
  let aim = 0;

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    const getCommand = line.split(" ");
    const command = getCommand[0];
    const value = parseFloat(getCommand[1]);
    if (command === "forward") {
      horizontal += value;
      depth += aim * value;
    } else if (command === "up") {
      aim -= value;
    } else if (command === "down") {
      aim += value;
    }
  }
  const multiplication = depth * horizontal;
  console.log(`Multiplication is ` + multiplication);
}

getFinalHorizontalPosition("entries.txt");
getFinalAimHorizontalPosition("entries.txt");
