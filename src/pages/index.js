import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Graph from "@/components/Diagram";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden">
      <div className="flex flex-grow flex-col p-4">
        {/* Title area */}
        <Header />
        {/* Diagram area */}
        <Graph />
      </div>

      {/* Sidebar */}
    </main>
  );
}
