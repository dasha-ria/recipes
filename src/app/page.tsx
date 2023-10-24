import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-2">
      <Link href="/recipe">
        <p>Fried noodles</p>
      </Link>
    </div>
  );
}
