import useTheme from "@/hooks/useTheme";
import { ReactComponent as IconMoon } from "@/assets/icon-moon.svg";
import { ReactComponent as IconSun } from "@/assets/icon-sun.svg";

const Theme = () => {
  const { isDark, setTheme } = useTheme();

  return (
    <>
      {isDark ? (
        <button
          className="flex items-center gap-[16px] text-[length:13px] font-bold text-[color:--secondary-text] hover:text-[color:--primary-text]"
          onClick={() => setTheme("light")}
        >
          <span>LIGHT</span>
          <span>
            <IconSun />
          </span>
        </button>
      ) : (
        <button
          className="flex items-center gap-[16px] text-[length:13px] font-bold text-[color:--secondary-text] hover:text-[color:--primary-text]"
          onClick={() => setTheme("dark")}
        >
          <span>DARK</span>
          <span>
            <IconMoon />
          </span>
        </button>
      )}
    </>
  );
};

export default Theme;
