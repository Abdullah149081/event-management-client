import { useModal } from "@/context";
import { useCallback } from "react";

const useToggle = (modalKey: string) => {
  const { modalState, setShow, toggleShow } = useModal();

  const show = modalState[modalKey] || false;
  
  const toggle = useCallback(
    () => toggleShow(modalKey),
    [toggleShow, modalKey]
  );

  return { show, setShow, toggle };
};

export default useToggle;
