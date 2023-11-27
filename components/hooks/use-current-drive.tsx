import { usePath } from ".";

export const useCurrentDrive = () => {
  const { path } = usePath();

  const isDrive = path.includes("/drive");

  const currentDrive = isDrive ? path.split("/")[2] : "";

  return { currentDrive, isDrive };
};
