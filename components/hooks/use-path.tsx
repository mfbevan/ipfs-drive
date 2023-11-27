import { useRouter } from "next/router";

export const usePath = () => {
  const router = useRouter();

  const path = router.asPath;
  const basePath = path.split("/")[1] || "";

  return { basePath, path };
};
