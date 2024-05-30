import Link from "next/link";

export default function Home() {
  return (
    <div className="justify-center align-middle">
      <h1 className="font-bold font-xl">Welcome to the Recipe App</h1>
      <Link href={"/recipe-list"}>Explore Recipes</Link>
    </div>
  );
}
