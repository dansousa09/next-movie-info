import { createContext, useContext } from "react";
import { useState } from "react/cjs/react.development";

const dialogContext = createContext();

const DialogProvider = ({ children }) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <dialogContext.Provider value={{ dialogIsOpen, setDialogIsOpen }}>
      {children}
    </dialogContext.Provider>
  );
};

const useDialog = () => {
  const dialogContextHook = useContext(dialogContext);
  return dialogContextHook;
};

export { DialogProvider, useDialog };
