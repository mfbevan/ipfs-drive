import { useEffect } from "react";
import { themeChange } from "theme-change";

export interface FeatureProviderProps {
  children: React.ReactNode;
}

export const FeatureProvider = ({ children }: FeatureProviderProps) => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return <div>{children}</div>;
};
