import { Octokit } from "@octokit/core";
import { ReactComponent as IconSearch } from "@/assets/icon-search.svg";
import { useState } from "react";

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_AUTH_TOKEN,
});

const Search = () => {
  const [username, setUsername] = useState("");
  const results = [];

  const handleClick = async () => {
    const response = await octokit.request("GET /users/{username}", {
      username,
    });
    console.log(response);
  };

  return (
    <div className="relative h-[70px] w-[730px]">
      <div className="pointer-events-none absolute left-[32px] top-1/2 z-10 translate-y-[-50%]">
        <IconSearch />
      </div>
      <input
        className="h-full w-full rounded-2xl bg-[--color-white] pl-[80px] drop-shadow-lg hover:drop-shadow-md"
        type="text"
        placeholder="Search Github username..."
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      {results.length > 0 && (
        <p className="absolute right-[140px] top-1/2 translate-y-[-50%] text-[--color-red]">
          No results
        </p>
      )}
      <button
        className="absolute right-[10px] top-1/2 z-10 h-[50px] w-[106px] translate-y-[-50%] rounded-[10px] bg-[--color-blue] text-white hover:bg-[--color-blue-active]"
        type="button"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
