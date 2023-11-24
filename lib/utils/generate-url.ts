import { VERCEL_URL } from "..";

/**
 * Generate a formatted URL for the current environment
 *
 * @param req The Next API request object
 * @returns A formatted URL for the current environment
 */
export const generateUrl = () =>
  VERCEL_URL ? `https://${VERCEL_URL}` : "http://localhost:3000";
