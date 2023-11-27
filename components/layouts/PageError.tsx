import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

import { useNexethBannerTransparent } from "../images";

export interface PageErrorProps {
  statusCode: string;
  title: string;
  description: string;
  backToHome?: boolean;
}

export const PageError = ({
  statusCode,
  title,
  description,
  backToHome = true,
}: PageErrorProps) => (
  <Flex flexDirection="column" gap={4} mx="auto" my="auto" align="center">
    <Heading fontSize="8xl" color="accent.500">
      {statusCode}
    </Heading>
    <Heading fontSize="4xl" color="accent.300">
      {title}
    </Heading>
    <Text>{description} </Text>
    {backToHome && (
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    )}
  </Flex>
);

export const PageError404 = () => (
  <PageError
    statusCode="4🫤4"
    title="Page Not Found"
    description="We couldn't find the page that you were looking for. Head back to the home page"
  />
);

export const PageError500 = () => (
  <PageError
    statusCode="5😱0"
    title="Critical Error"
    description="Something went really wrong! Head back to the home page and try again later."
  />
);

export const PageErrorComingSoon = () => (
  <Flex h="100vh" w="100vw">
    <Flex flexDirection="column" gap={4} mx="auto" my="auto" align="center">
      <Image
        src={useNexethBannerTransparent()}
        width="300"
        height="50"
        alt="nexeth-banner"
      />
      <Heading fontSize="4xl" color="accent.300" mt="-50px">
        Coming Soon
      </Heading>
      <Text>This site is still under development </Text>
      <Link href="http://nexeth.xyz">
        <Button>Back to Docs</Button>
      </Link>
    </Flex>
  </Flex>
);
