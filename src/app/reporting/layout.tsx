import { ProtectedPage } from "@/features/auth/protected-page";
import { MainMenu } from "@/features/menu/menu";
import { AI_NAME } from "@/features/theme/customise";
import Link from "next/link";
import { UserProfile } from "../user-profile"

export const metadata = {
  title: AI_NAME,
  description: AI_NAME,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedPage>
<div className="flex gap-2 flex-col justify-between">
      <div className="flex gap-2 flex-col justify-between">
        <Link
          href="/"
          className="w-10 h-10 items-center justify-center flex"
          title="Home"
        >
        </Link>
        <Link
          href="/reporting"
          className="w-10 h-10 items-center justify-center flex rounded-full hover:bg-secondary"
          title="Reporting"
        >
        </Link>
      </div>
    </div>
      <div className="flex-1">{children}</div>
    </ProtectedPage>
  );
}
