export interface FeatureProviderProps {
  children: React.ReactNode;
}

export const FeatureProvider = ({ children }: FeatureProviderProps) => (
  <div>{children}</div>
);
