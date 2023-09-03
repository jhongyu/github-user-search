import { UserInfo } from "@/App";
import { ReactComponent as IconLocation } from "@/assets/icon-location.svg";
import { ReactComponent as IconTwitter } from "@/assets/icon-twitter.svg";
import { ReactComponent as IconWebsite } from "@/assets/icon-website.svg";
import { ReactComponent as IconCompany } from "@/assets/icon-company.svg";
import "./Content.css";

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

  const info = [
    {
      title: "Repos",
      value: repos,
    },
    {
      title: "Followers",
      value: followers,
    },
    {
      title: "Following",
      value: following,
    },
  ];

  return (
    <section className="user-info rounded-[15px] bg-[--content-background] p-[24px] md:p-[48px]">
      <div className="avatar">
        <img
          className="h-full w-full rounded-full"
          src={avatarUrl}
          alt="user's avatar"
        />
      </div>
      <p className="user-name font-bold text-[color:--primary-text] md:text-[length:26px]">
        The {userName}
      </p>
      <a
        className="user-name-link inline-block text-[length:13px] text-[color:--primary] hover:underline md:text-[length:16px]"
        href={userLink}
        target="_blank"
      >
        @{slicedUserName}
      </a>
      <p className="create-time text-[length:13px] text-[color:--secondary-text] md:text-[length:16px]">
        Joined {time}
      </p>
      <div
        className={`bio text-[length:13px] text-[color:--secondary-text] md:text-[length:16px] ${
          !bio && "opacity-75"
        } mt-[20px]`}
      >
        {bio || "This profile has no bio"}
      </div>
      <div className="repo-info mt-[32px] flex h-[85px] justify-between rounded-[10px] bg-[--main-background] px-[32px] py-[16px]">
        {info.map(({ title, value }) => (
          <div className="flex flex-col justify-center gap-[8px]" key={title}>
            <p className="text-[length:11px] text-[color:--secondary-text] md:text-[length:13px]">
              {title}
            </p>
            <p className="font-bold text-[color:--primary-text] md:text-[length:22px]">
              {value}
            </p>
          </div>
        ))}
      </div>
      <div className="links mt-[32px] text-[length:13px] text-[--secondary-text] md:text-[length:16px]">
        <div
          className={`location flex gap-[16px] ${!location && "opacity-50"}`}
        >
          <div className="h-[20px] w-[20px]">
            <IconLocation />
          </div>
          <p>{location || "Not Available"}</p>
        </div>
        <div
          className={`twitter flex gap-[16px] ${
            !twitterUsername && "opacity-50"
          }`}
        >
          <div className="h-[20px] w-[20px]">
            <IconTwitter />
          </div>
          {twitterUsername ? (
            <a
              href={`https://twitter.com/${twitterUsername}`}
              target="_blank"
              className="hover:underline"
            >
              {twitterUsername}
            </a>
          ) : (
            <p>Not Available</p>
          )}
        </div>
        <div className={`website flex gap-[16px] ${!blog && "opacity-50"}`}>
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
        <div className={`company flex gap-[16px] ${!company && "opacity-50"}`}>
          <div className="h-[20px] w-[20px]">
            <IconCompany />
          </div>
          {company ? (
            <a
              href={`https://github.com/${company.slice(1)}`}
              target="_blank"
              className="hover:underline"
            >
              {company}
            </a>
          ) : (
            <p>Not Available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Content;
