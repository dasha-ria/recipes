import Link from "next/link";

export default function Recipe() {
  return (
    <div className="p-10 flex flex-col gap-2">
      <Link href="/">
        <p>Back to recipes</p>
      </Link>
      <h1 className="text-xl font-bold">Fried noodles</h1>
      <ul className="list-disc">
        <li>ingredient</li>
      </ul>
      <p>How to make this</p>
    </div>
  );
}
