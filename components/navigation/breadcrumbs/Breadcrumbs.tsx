import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, chakra, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

export interface PageBreadcrumbsProps {
  filterChains?: boolean;
}

export const PageBreadcrumbs = ({
  filterChains,
}: PageBreadcrumbsProps = {}) => {
  const router = useRouter();

  const paths = useMemo(() => {
    if (router.isFallback) return [];
    const allPaths = router.asPath
      .split("/")
      .filter((x) => x)
      .map((path) => (path.includes("?") ? path.split("?")[0] : path));

    if (filterChains) {
      return allPaths.filter(
        (path) => path.startsWith("0x") || isNaN(Number(path))
      );
    }
    return allPaths;
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only update when router changes
  }, [router]);

  return (
    <StyledBreadcrumbs
      spacing="8px"
      separator={<ChevronRightIcon color="gray.500" />}
    >
      {paths.map((breadcrumb, i) => (
        <BreadcrumbItem key={breadcrumb}>
          <Link href={`/${paths.slice(0, i + 1).join("/")}`}>
            <BreadcrumbText>{breadcrumb.toLocaleUpperCase()}</BreadcrumbText>
          </Link>
        </BreadcrumbItem>
      ))}
    </StyledBreadcrumbs>
  );
};

const StyledBreadcrumbs = chakra(Breadcrumb, {
  baseStyle: {
    spacing: "8px",
    mx: "5px",
  },
});

const BreadcrumbText = chakra(Text, {
  baseStyle: {
    fontWeight: "00",
    fontSize: "sm",
  },
});
