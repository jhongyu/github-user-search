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
    <div className="md:h[-70px] relative h-[60px] w-full">
      <div className="pointer-events-none absolute left-[16px] top-1/2 z-10 translate-y-[-50%] text-[color:--primary] md:left-[32px]">
        <IconSearch />
      </div>
      <input
        className="h-full w-full rounded-2xl bg-[--content-background] pl-[48px] text-[length:13px] drop-shadow-lg hover:drop-shadow-md md:pl-[80px] md:text-[length:18px]"
        type="text"
        placeholder="Search Github username..."
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      {showErrorMessage && (
        <p className="absolute top-full font-bold text-[color:--error] md:right-[140px] md:top-1/2 md:translate-y-[-50%]">
          No results
        </p>
      )}
      <button
        className="absolute right-[10px] top-1/2 z-10 h-[46px] w-[84px] translate-y-[-50%] rounded-[10px] bg-[--primary] text-[length:14px] font-bold text-white hover:bg-[--primary-hover] md:h-[50px] md:w-[106px] md:text-[length:16px]"
        type="button"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
