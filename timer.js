
let myArgs = process.argv.slice(2);
myArgs = myArgs.map(num => Number(num));
myArgs = myArgs.filter(num => num >= 0);
const timer = function (myArgs) {
  for (let i = 0; i < myArgs.length; i++) {
    setTimeout(() => {
      process.stdout.write('beep');
    }, Number(myArgs[i]) * 1000);
  }
};

timer(myArgs);