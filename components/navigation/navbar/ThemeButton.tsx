import { useEffect } from "react";

import { daisyTheme, toSentenceCase } from "@/lib";

const THEME_LOCAL_STORAGE_KEY = "daisy-theme";

export const ThemeButton = () => {
  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
    if (storedTheme) {
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  const onChangeTheme = (theme: string) => {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
      >
        {daisyTheme.map((item, index) => (
          <li key={index}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start text-content"
              aria-label={toSentenceCase(item)}
              value={item}
              onChange={(e) => onChangeTheme(e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
