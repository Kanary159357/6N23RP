import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* @ts-expect-error Server Component */}
      <Sidebar />
    </main>
  );
}
