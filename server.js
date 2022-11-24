// hello
const shell = require("shelljs");
// shell.exec('./feature')
const { exec } = require("node:child_process");
// \n git commit -m \"hi\" \n git push --set-upstream origin main
// \n git commit -m "h1" \n git checkout feature \n git add . \n git commit -m "hi" \n git push --set-upstream origin feature
async function gitAdd() {
  exec("git add .", (error, stdout, stderr) => {
    if (error) {
      console.log(error);
    }
    if (stderr) {
      console.log(stderr);
    }
    console.log(stdout);
  });
}

async function gitCommit() {
  exec('git commit -m "hi"', (error, stdout, stderr) => {
    if (error) {
      console.log(error);
    }
    if (stderr) {
      console.log(stderr);
    }
    console.log(stdout);
  });
}
// async function gitPush() {
//   exec("git push", (error, stdout, stderr) => {
//     if (error) {
//       console.log(error);
//     }
//     if (stderr) {
//       console.log(stderr);
//     }
//     console.log(stdout);
//   });
// }

async function gitCheckout() {
  exec("git checkout feature", (error, stdout, stderr) => {
    if (error) {
      console.log(error);
    }
    if (stderr) {
      console.log(stderr);
    }
    console.log(stdout);
  });
}

async function f1() {
  await gitAdd();
  await gitCommit();
  // await gitPush();
  await gitCheckout();
}

f1();
// exec(

//   'git merge feature',
//   (error, stdout, stderr) => {
//     if (error) {
//       console.log(error);
//     }
//     if (stderr) {
//       console.log(stderr);
//     }
//     console.log(stdout);
//   }
// );
// let st=''
// exec(
//  "git diff --name-only ..origin/feature",
//   (error, stdout, stderr) => {
//     if (error) {
//       console.log(error);
//     }
//     if (stderr) {
//       console.log(stderr);
//     }
//     st=stdout
//     console.log('st',st);
//     console.log(stdout);
//   }
// );
// console.log(st);
