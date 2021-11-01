const { Octokit } = require("octokit");
const core = require("@actions/core");
const token = core.getInput("token");
const octokit = new Octokit({
  auth: token,
});
octokit.rest.issues.create({
  owner: "pengtaoa",
  repo: "create-issues-action",
  title: "每日任务",
  body: "今天学习javascript 原型链",
});
