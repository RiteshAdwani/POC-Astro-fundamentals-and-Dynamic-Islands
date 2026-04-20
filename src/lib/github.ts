import type { Project } from "../types/projects";

interface GithubRepo {
  name: string;
  description: string | null;
  topics: string[];
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
}

export async function fetchProjects(token: string): Promise<Project[]> {
  const response = await fetch(
    "https://api.github.com/users/RiteshAdwani/repos?per_page=5&type=public&sort=pushed&direction=desc",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );

  if (!response.ok) {
    throw new Error(
      `GitHub API error: ${response.status} ${response.statusText}`,
    );
  }

  const repos: GithubRepo[] = await response.json();

  return repos
    .filter((repo) => !repo.fork && !repo.archived)
    .map((repo) => ({
      title: repo.name,
      description: repo.description ?? "",
      techStack: repo.topics,
      githubUrl: repo.html_url,
      liveUrl: repo.homepage || undefined,
      stars: repo.stargazers_count,
      featured: repo.topics.includes("featured"),
    }));
}
