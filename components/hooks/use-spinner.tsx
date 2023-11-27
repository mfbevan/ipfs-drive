export const useSpinner = (
  condition: boolean = false,
  element: JSX.Element | string
) =>
  condition ? (
    <span className="loading loading-dots loading-sm"></span>
  ) : (
    element
  );
