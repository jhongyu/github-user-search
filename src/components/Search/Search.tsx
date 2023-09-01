import React, { useState } from "react";
import { ReactComponent as IconSearch } from "@/assets/icon-search.svg";
import { getUserInfo } from "@/utils";
import type { UserInfo } from "@/App";

interface SearchProps {
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>;
}

const Search = ({ setUserInfo }: SearchProps) => {
  const [username, setUsername] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleClick = async () => {
    const info = await getUserInfo(username);

    if (typeof info === "object") {
      setUserInfo(info);
    } else if (typeof info === "string") {
      setShowErrorMessage(true);
    }
  };

  return (
    <div className="relative h-[70px] w-[730px]">
      <div className="pointer-events-none absolute left-[32px] top-1/2 z-10 translate-y-[-50%] text-[--primary]">
        <IconSearch />
      </div>
      <input
        className="h-full w-full rounded-2xl bg-[--content-background] pl-[80px] drop-shadow-lg hover:drop-shadow-md"
        type="text"
        placeholder="Search Github username..."
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      {showErrorMessage && (
        <p className="absolute right-[140px] top-1/2 translate-y-[-50%] text-[--error]">
          No results
        </p>
      )}
      <button
        className="absolute right-[10px] top-1/2 z-10 h-[50px] w-[106px] translate-y-[-50%] rounded-[10px] bg-[--primary] text-white hover:bg-[--primary-hover]"
        type="button"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
