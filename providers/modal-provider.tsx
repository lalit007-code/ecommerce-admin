"use client";
import { useState, useEffect } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <StoreModal></StoreModal>
    </>
  );
  //return null when in server rednering so there is no hydration error
};

//we are going to provide this inside our app folder inside layout.tsx but we can not just render client
//compoent in server compoent so for ensuring there is not hydration error that can trigger dissync
