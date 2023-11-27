import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import { chakra } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { toast } from "react-toastify";

export interface CopyItemProps {
  item: string;
  children: ReactNode;
  withIcon?: boolean;
  withToast?: boolean;
}

export const CopyItem = ({
  item,
  children,
  withIcon,
  withToast,
}: CopyItemProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(item);
    if (withToast) toast.info("Copied to clipboard");
    setIsCopied(true);
    setInterval(() => setIsCopied(false), 3000);
  };

  if (!withIcon) {
    return (
      <chakra.span _hover={{ cursor: "pointer" }} onClick={handleCopy}>
        {children}
      </chakra.span>
    );
  }

  return (
    <chakra.span _hover={{ cursor: "pointer" }} onClick={handleCopy}>
      {children}
      {isCopied ? (
        <CheckIcon ml="5px" color="green.500" />
      ) : (
        <CopyIcon ml="5px" />
      )}
    </chakra.span>
  );
};
