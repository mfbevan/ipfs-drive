export const useCache = <T extends any>(key: string) => {
  const getCache = () => {
    const cached = localStorage.getItem(key);
    if (!cached) return undefined;
    return JSON.parse(cached) as T;
  };

  const setCache = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return {
    getCache,
    setCache,
  };
};
