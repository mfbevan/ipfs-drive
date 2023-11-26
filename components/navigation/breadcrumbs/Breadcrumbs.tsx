import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

export const PageBreadcrumbs = () => {
  const router = useRouter();

  const paths = useMemo(() => {
    if (router.isFallback) return [];
    return router.asPath.split("/").filter((x) => x);
  }, [router]);

  return (
    <div className="text-sm breadcrumbs text-base-content p-4">
      <ul>
        {paths.map((path, index) => (
          <li key={index.toFixed()}>
            <Link href={`/${paths.slice(0, index + 1).join("/")}`}>
              {path.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
