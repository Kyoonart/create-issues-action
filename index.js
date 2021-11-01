const { Octokit } = require("octokit");
const octokit = new Octokit({ auth: `personal-access-token123` });
octokit.rest.issues.create({
  owner: "octocat",
  repo: "hello-world",
  title: "Hello world from " + slug,
});
