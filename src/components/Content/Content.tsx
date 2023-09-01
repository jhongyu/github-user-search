import { UserInfo } from "@/App";
import { ReactComponent as IconLocation } from "@/assets/icon-location.svg";
import { ReactComponent as IconTwitter } from "@/assets/icon-twitter.svg";
import { ReactComponent as IconWebsite } from "@/assets/icon-website.svg";
import { ReactComponent as IconCompany } from "@/assets/icon-company.svg";

interface ContentProps extends UserInfo {}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Content = ({
  avatarUrl,
  name,
  createdTime,
  userLink,
  bio,
  repos,
  followers,
  following,
  location,
  twitterUsername,
  blog,
  company,
}: ContentProps) => {
  const slicedUserName = name.includes("The") ? name.slice(4) : name;
  const userName =
    slicedUserName.charAt(0).toUpperCase() + slicedUserName.slice(1);
  const date = new Date(createdTime);
  const time = `${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;

  return (
    <section className="flex gap-[36px] rounded-[15px] bg-[--content-background] p-[48px]">
      <div className="h-[120px] w-[120px]">
        <img
          className="h-full w-full rounded-full"
          src={avatarUrl}
          alt="user's avatar"
        />
      </div>
      <div className="flex flex-1 flex-col gap-[32px]">
        <div>
          <div className="flex items-baseline justify-between">
            <p className="text-[26px] font-bold text-[--primary-text]">
              The {userName}
            </p>
            <p className="text-[--secondary-text]">Joined {time}</p>
          </div>
          <a
            className="inline-block text-[--primary]"
            href={userLink}
            target="_blank"
          >
            @{slicedUserName}
          </a>
          <div
            className={`${
              bio
                ? "text-[--secondary-text]"
                : "text-[--secondary-text-transparent]"
            } mt-[20px]`}
          >
            {bio || "This profile has no bio"}
          </div>
        </div>
        <div className="flex h-[85px] gap-[100px] rounded-[10px] bg-[--main-background] px-[32px] py-[16px] text-[--13px] text-[--secondary-text]">
          <div>
            <p>Repos</p>
            <p className="text-[22px] font-bold text-[--primary-text]">
              {repos}
            </p>
          </div>
          <div>
            <p>Followers</p>
            <p className="text-[22px] font-bold text-[--primary-text]">
              {followers}
            </p>
          </div>
          <div>
            <p>Following</p>
            <p className="text-[22px] font-bold text-[--primary-text]">
              {following}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-[16px] text-[--secondary-text]">
          <div
            className={`col-start-1 col-end-2 row-start-1 row-end-2 flex gap-[16px] ${
              !location && "text-[--secondary-text-transparent]"
            }`}
          >
            <div className="h-[20px] w-[20px]">
              <IconLocation />
            </div>
            <p>{location || "Not Available"}</p>
          </div>
          <div
            className={`col-start-2 col-end-3 row-start-1 row-end-2 flex gap-[16px] ${
              !twitterUsername && "text-[--secondary-text-transparent]"
            }`}
          >
            <div className="h-[20px] w-[20px]">
              <IconTwitter />
            </div>
            {twitterUsername ? (
              <a
                href={`https://twitter.com/${twitterUsername}`}
                target="_blank"
              >
                {twitterUsername}
              </a>
            ) : (
              <p>Not Available</p>
            )}
          </div>
          <div
            className={`col-start-1 col-end-2 row-start-2 row-end-3 flex gap-[16px] ${
              !blog && "text-[--secondary-text-transparent]"
            }`}
          >
            <div className="h-[20px] w-[20px]">
              <IconWebsite />
            </div>
            {blog ? (
              <a href={blog} target="_blank" className="hover:underline">
                {blog}
              </a>
            ) : (
              <p>Not Available</p>
            )}
          </div>
          <div
            className={`col-start-2 col-end-3 row-start-2 row-end-3 flex gap-[16px] ${
              !company && "text-[--secondary-text-transparent]"
            }`}
          >
            <div className="h-[20px] w-[20px]">
              <IconCompany />
            </div>
            {company ? (
              <a
                href={`https://github.com/${company.slice(1)}`}
                target="_blank"
              >
                {company}
              </a>
            ) : (
              <p>Not Available</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
