const { Octokit } = require("octokit");
const core = require("@actions/core");
const dayjs = require("dayjs");
const token = core.getInput("token");
const octokit = new Octokit({
  auth: token,
});
octokit.rest.issues.create({
  owner: "pengtaoa",
  repo: "create-issues-action",
  title: getTitle(),
  body: getBody(),
});

function getTitle() {
  return dayjs().add("8", "hour").format("YYYY-MM-DD");
}
function getBody() {
  return '滴滴 打卡 今天学点什么呢？';
}
