import Link from "next/link";

const notFound = () => {
  return (
    <div className="text-center justify-center">
      <h1>404 | Page not found</h1>
      <Link href={"/"}> Return to Home </Link>
    </div>
  );
};

export default notFound;
