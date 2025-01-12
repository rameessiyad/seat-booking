"use client";
import Seat from "@/components/Seat";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-500 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Interactive Seat Booking System</h1>
      <div className="w-full max-w-4xl bg-white shadow rounded-lg p-6">
        <Seat
          id="A1"
          price={100}
          isSelected={false}
          onSelect={(id: string) => console.log(id)}
        />
        <div id="seat-grid" className="mb-6"></div>
        {/* summary component */}
        <div id="summary"></div>
      </div>
    </div>
  );
}
