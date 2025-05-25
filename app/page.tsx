import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-4xl font-bold"> this is the home page</h1>
      <div className="btn btn-ghost btn-accent">
        <a href="/matches">Go to Matches</a>
      
      </div>

    </div>
  );
}
