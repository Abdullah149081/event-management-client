import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

type ModalState = {
  [key: string]: boolean;
};

type ModalContextType = {
  modalState: ModalState;
  setModalState: Dispatch<SetStateAction<ModalState>>;
  setShow: (modalKey: string, show: boolean) => void;
  toggleShow: (modalKey: string) => void;
};

type ModalProviderProps = {
  children: ReactNode;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [modalState, setModalState] = useState<ModalState>({});

  const setShow = (modalKey: string, show: boolean) => {
    setModalState((prev) => ({ ...prev, [modalKey]: show }));
  };

  const toggleShow = (modalKey: string) => {
    setModalState((prev) => ({ ...prev, [modalKey]: !prev[modalKey] }));
  };

  const value = useMemo(
    () => ({ modalState, setModalState, setShow, toggleShow }),
    [modalState]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
