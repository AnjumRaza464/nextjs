'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/products");
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-7xl mb-3">Next Js</h1>
      <Link href="/products">Go to products page by Link Tag</Link>
      <Link href="/account">Go to Account page by Link Tag condition check</Link>
      <h1 className="text-lg font-medium mt-2">Using useRouter</h1>
      <button onClick={handleClick} className="bg-blue-500 px-2 py-3 mt-2"> Go to Product page by useRouter</button>
    </main>
  );
}
