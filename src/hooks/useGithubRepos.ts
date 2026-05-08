import { useState, useEffect } from "react";

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
}

export function useGitHubRepos(username: string) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6&direction=desc`
        );
        if (!res.ok) throw new Error("Gagal mengambil data");
        const data = await res.json();
        setRepos(data.filter((r: GitHubRepo) => !r.fork));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, [username]);

  return { repos, loading, error };
}