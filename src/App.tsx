import { useEffect, useState } from "react";
import Content from "@/components/Content";
import Search from "@/components/Search";
import { getUserInfo } from "@/utils";

export interface UserInfo {
  avatarUrl: string;
  name: string;
  createdTime: string;
  userLink: string;
  bio: string | null;
  repos: number;
  followers: number;
  following: number;
  location: string | null;
  twitterUsername: string | null | undefined;
  blog: string | null;
  company: string | null;
}

function App() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    (async () => {
      const info = await getUserInfo("octocat");

      if (typeof info === "object") {
        setUserInfo(info);
      } else {
        console.error(info);
      }
    })();
  }, []);

  return (
    <main>
      <section>
        <h1 className="text-[--color-black]">devfinder</h1>
      </section>
      <section className="mb-[24px] mt-[36px]">
        <Search setUserInfo={setUserInfo} />
      </section>
      {userInfo && (
        <Content
          avatarUrl={userInfo.avatarUrl}
          name={userInfo.name}
          createdTime={userInfo.createdTime}
          userLink={userInfo.userLink}
          bio={userInfo.bio}
          repos={userInfo.repos}
          followers={userInfo.followers}
          following={userInfo.following}
          location={userInfo.location}
          twitterUsername={userInfo.twitterUsername}
          blog={userInfo.blog}
          company={userInfo.company}
        />
      )}
    </main>
  );
}

export default App;
