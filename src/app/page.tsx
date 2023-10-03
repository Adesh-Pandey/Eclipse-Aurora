"use client";
import Chat from "./Chat";
import Simulation from "./Simuation";

export default function Home() {
  return (
    <div className="relative w-[100vw] h-[100vh] bg-white">
      <Chat />
      <Simulation />
    </div>
  );
}
