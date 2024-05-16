import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-6xl">Next Js</h1>
      <Link href="/products">Go to products page</Link>
    </main>
  );
}
