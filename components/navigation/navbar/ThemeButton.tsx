import { useEffect } from "react";
import { PiPaintBrushBroadDuotone } from "react-icons/pi";

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
      <label tabIndex={0} className="btn btn-square bg-base-100">
        <PiPaintBrushBroadDuotone />
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
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start text-base-content"
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
