export const useConditional = (
  condition: boolean = false,
  element: JSX.Element
) => (condition ? element : null);
