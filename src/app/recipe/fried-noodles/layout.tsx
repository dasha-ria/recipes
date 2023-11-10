import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6">
      <Link href="/">
        <p>Back to recipes</p>
      </Link>
      {children}
    </div>
  );
}
