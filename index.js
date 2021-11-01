const { Octokit } = require("octokit");
const octokit = new Octokit({
  auth: `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`,
});
octokit.rest.issues.create({
  owner: "pengtaoa",
  repo: "create-issues-action",
  title: "每日任务",
  body: "今天学习javascript 原型链",
});
