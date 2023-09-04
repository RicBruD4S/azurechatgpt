import { useClient } from '@next/ui/client';
import { ProtectedPage } from "@/features/auth/protected-page";
import { MainMenu } from "@/features/menu/menu";
import { AI_NAME } from "@/features/theme/customise";

export const metadata = {
  title: AI_NAME,
  description: AI_NAME,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { client } = useClient();

  // State to manage the isOpen prop
  const [isOpen, setIsOpen] = client.useState(false);

  return (
    <ProtectedPage>
      {/* Pass isOpen and setIsOpen to MainMenu */}
      <MainMenu isOpen={isOpen} setIsOpen={setIsOpen}>
        {/* Place your MainMenu content here */}
      </MainMenu>
      <div className="flex-1">{children}</div>
    </ProtectedPage>
  );
}
