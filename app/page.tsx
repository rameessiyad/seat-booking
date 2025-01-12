export default function Home() {
  return (
    <div className="min-h-screen bg-gray-500">
      <h1 className="text-2xl">Interactive Seat Booking System</h1>
      <div className="w-full">
        {/* seat grid component */}
        <div id="seat-grid" className="mb-6"></div>
        {/* summary component */}
        <div id="summary"></div>
      </div>
    </div>
  );
}
