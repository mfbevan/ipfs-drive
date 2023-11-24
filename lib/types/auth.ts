export interface Session {
  address: string;
}

export type AuthContext = {
  session?: Session;
};
