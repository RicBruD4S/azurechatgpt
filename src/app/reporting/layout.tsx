"use client"
import { ProtectedPage } from "@/features/auth/protected-page";
import { MainMenu } from "@/features/menu/menu";
import { AI_NAME } from "@/features/theme/customise";
import React, { useState } from "react";

export const metadata = {
  title: AI_NAME,
  description: AI_NAME,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // State to manage the isOpen prop
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <ProtectedPage>
      <MainMenu isOpen={isOpen} setIsOpen={setIsOpen}>
      </MainMenu>
      <div className="flex-1">{children}</div>
    </ProtectedPage>
  );
}
