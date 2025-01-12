"use client";

import { SeatGridProps } from "@/types";
import Seat from "./Seat";

export default function SeatGrid({
  seats,
  selectedSeats,
  onSeatSelect,
}: SeatGridProps) {
  return (
    <div className="grid grid-cols-10 gap-2 sm:gap-3 p-4 bg-gray-50 border rounded-lg shadow-sm">
      {seats.map((seat) => (
        <Seat
          key={seat.id}
          id={seat.id}
          price={seat.price}
          isSelected={selectedSeats.includes(seat.id)}
          onSelect={onSeatSelect}
        />
      ))}
    </div>
  );
}
