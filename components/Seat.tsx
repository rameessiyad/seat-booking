'use client';

import { SeatProps } from "@/types";

export default function Seat({ id, price, isSelected, onSelect }: SeatProps) {
  return (
    <div
      onClick={() => onSelect(id)}
      className={`w-12 h-12 flex items-center justify-center text-sm font-semibold rounded-md cursor-pointer transition 
        ${
          isSelected
            ? "bg-green-500 text-white hover:bg-green-600"
            : price === 100
            ? "bg-blue-200 text-blue-800 hover:bg-blue-300"
            : price === 150
            ? "bg-yellow-200 text-yellow-800 hover:bg-yellow-300"
            : "bg-red-200 text-red-800 hover:bg-red-300"
        }
      `}
    >
      {id}
    </div>
  );
}
