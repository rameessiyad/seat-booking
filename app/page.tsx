"use client";

import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import SeatGrid from "../components/SeatGrid";
import { Seat } from "@/types";

export default function Home() {
  const [seats] = useState<Seat[]>(
    Array.from({ length: 60 }, (_, index) => {
      const row = String.fromCharCode(65 + Math.floor(index / 10));
      const col = (index % 10) + 1;
      const id = `${row}${col}`;
      const price =
        Math.floor(index / 20) === 0
          ? 100
          : Math.floor(index / 20) === 1
          ? 150
          : 200;

      return { id, price };
    })
  );

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatSelect = (id: string) => {
    setSelectedSeats((prev) => {
      const alreadySelected = prev.includes(id);

      if (alreadySelected) {
        return prev.filter((seatId) => seatId !== id);
      }

      if (prev.length >= 8) {
        toast.error("You can only select up to 8 seats.");
        return prev;
      }

      return [...prev, id];
    });
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      toast.error("Please select at least one seat before booking!");
    } else {
      toast.success(
        `Booking confirmed! Seats: ${selectedSeats.join(
          ", "
        )}. Total: ₹${totalCost}.`
      );
      setSelectedSeats([]);
    }
  };

  const totalCost = selectedSeats.reduce((total, id) => {
    const seat = seats.find((seat) => seat.id === id);
    return total + (seat ? seat.price : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 flex flex-col items-center p-6">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center sm:text-3xl">
        Interactive Seat Booking System
      </h1>
      <div className="flex flex-wrap justify-between items-center w-full max-w-4xl mb-8 px-4">
        <div className="flex flex-wrap justify-start items-center gap-6 sm:gap-4">
          <div className="flex items-center text-sm sm:text-base">
            <div className="w-6 h-6 bg-blue-400 rounded-md mr-2 shadow-md"></div>
            <span className="text-lg font-medium text-gray-700">
              Silver (₹100)
            </span>
          </div>
          <div className="flex items-center text-sm sm:text-base">
            <div className="w-6 h-6 bg-yellow-400 rounded-md mr-2 shadow-md"></div>
            <span className="text-lg font-medium text-gray-700">
              Gold (₹150)
            </span>
          </div>
          <div className="flex items-center text-sm sm:text-base">
            <div className="w-6 h-6 bg-red-400 rounded-md mr-2 shadow-md"></div>
            <span className="text-lg font-medium text-gray-700">
              Platinum (₹200)
            </span>
          </div>
        </div>
      </div>

      {/* seat grid and booking details */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <SeatGrid
          seats={seats}
          selectedSeats={selectedSeats}
          onSeatSelect={handleSeatSelect}
        />
        <div className="mt-8 p-6 border rounded-lg bg-gray-100 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">
            Selected Seats:
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            {selectedSeats.join(", ") || "None"}
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-6">
            Total Cost:
          </h2>
          <p className="text-lg text-gray-600 mt-2">₹{totalCost}</p>
          <button
            onClick={handleBooking}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-bold rounded-md shadow-md hover:from-green-500 hover:to-green-700 w-full sm:w-auto"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
