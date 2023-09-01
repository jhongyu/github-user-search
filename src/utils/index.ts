import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_AUTH_TOKEN,
});

export const getUserInfo = async (username: string) => {
  try {
    const response = await octokit.request("GET /users/{username}", {
      username,
    });

    if (response.status === 200) {
      const {
        avatar_url,
        name,
        login,
        created_at,
        html_url,
        bio,
        public_repos,
        followers,
        following,
        location,
        twitter_username,
        blog,
        company,
      } = response.data;

      return {
        avatarUrl: avatar_url,
        name: name || login,
        createdTime: created_at,
        userLink: html_url,
        bio,
        repos: public_repos,
        followers,
        following,
        location,
        twitterUsername: twitter_username,
        blog,
        company,
      };
    }
  } catch (error) {
    if (error instanceof Error && error.message === "Not Found") {
      return "User not found";
    }
  }
};
