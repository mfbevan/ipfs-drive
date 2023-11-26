import { ReactNode, useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";
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
      <span className="hover:cursor-pointer" onClick={handleCopy}>
        {children}
      </span>
    );
  }

  return (
    <span className="hover:cursor-pointer" onClick={handleCopy}>
      {children}
      {isCopied ? <FaCheck ml="5px" color="green.500" /> : <FaCopy ml="5px" />}
    </span>
  );
};
