import { createContext, useContext } from "react";

const MountContext = createContext<{
  isFirstMount: boolean;
  setIsFirstMount: (isFirstMount: boolean) => void;
} | null>(null);

export function useMountContext() {
  const context = useContext(MountContext);

  if (!context) {
    throw new Error(
      "Navigation.* component must be rendered as a child of the Navigation component."
    );
  }

  return context;
}

export default MountContext;
