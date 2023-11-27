export const extractReadableError = (message?: string) => {
  if (!message) return "An unknown error occurred";
  if (message.includes("User rejected")) return "User rejected the request";
  if (message.includes("user rejected")) return "User rejected the request";
  if (message.includes("User denied")) return "User denied the request";
  if (message.includes("user denied")) return "User denied the request";
  return message;
};
