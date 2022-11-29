const simpleGit = require("simple-git");
const url = require("url");
const fs = require("fs");
const shellJs = require("shelljs");

simpleGit().clean(simpleGit.CleanOptions.FORCE);

this.gitURL = "https://github.com/IlaBhatt/Simple-Git.git";
// const localURL = url.parse(this.gitURL);
const localRepoName = "Simple-Git";
this.localPath = `C:/Users/ilabhatt/Desktop/simple-git/${localRepoName}`;
// this.options = ["--depth", "1"];
this.callback = () => {
  console.log("DONE");
};

if (fs.existsSync(this.localPath)) {
  console.log("File Already present");
} else {
  simpleGit().clone(this.gitURL, this.localPath, this.options, this.callback);
}

// console.log(simpleGit().branchLocal());

// shellJs.cd(this.localPath);
// simpleGit().addRemote("origin", this.gitURL);
// simpleGit()
//   .checkout("feature")
//   .then(
//     (success) => {
//       console.log("Successfully checked out");
//     },
//     (failed) => {
//       console.log("Checkout failed!");
//     }
//   );
//Shows the branch summary result
// simpleGit()
//   .branch(["--all"])
//   .then(
//     (success) => {
//       console.log(success);
//     },
//     (failed) => {
//       console.log(failed);
//     }
//   );

// Add all files for commit
// simpleGit()
//   .add(".")
//   .then(
//     (addSuccess) => {
//       console.log(addSuccess + "Added successfully");
//     },
//     (failedAdd) => {
//       console.log("adding files failed" + failedAdd);
//     }
//   );

// Commit files as Initial Commit
// simpleGit()
//   .commit("Intial commit by simplegit")
//   .then(
//     (successCommit) => {
//       console.log(successCommit + "Changes commited!");
//     },
//     (failed) => {
//       console.log("failed commmit");
//     }
//   );

// Finally push to online repository
// simpleGit()
//   .push("origin", "main")
//   .then(
//     (success) => {
//       console.log("repo successfully pushed!");
//     },
//     (failed) => {
//       console.log("repo push failed");
//     }
//   );

//Pulling changes from remote repo
// simpleGit()
//   .pull("origin", "test")
//   .then(
//     (success) => {
//       console.log("repo successfully pulled!");
//     },
//     (failed) => {
//       console.log("repo pull failed");
//     }
//   );

// simpleGit()
//   .checkout("feature")
//   .then(
//     (success) => {
//       console.log("Successfully checked out" + success);
//     },
//     (failed) => {
//       console.log("Checkout failed!" + failed);
//     }
//   );

// simpleGit()
//   .merge("feature", ["--commit"])
//   .then(
//     (success) => {
//       console.log("Merge successful " + success);
//     },
//     (failed) => {
//       console.log("Merge failed! " + failed);
//     }
//   );

// simpleGit()
//   .fetch(["--all"])
//   .then(
//     (success) => {
//       console.log("Successfully Fetched " + success);
//     },
//     (failed) => {
//       console.log("Fetch failed! " + failed);
//     }
//   );

async function checkoutandcommit() {
  const add = await simpleGit().add(".");
  const commit = await simpleGit().commit("hello");
  const push = await simpleGit().push();
  const checkout = await simpleGit().checkout("feature");
}
checkoutandcommit();
