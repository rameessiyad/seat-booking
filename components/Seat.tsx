'use client';
import { SeatProps } from "@/types";

export default function Seat({ id, price, isSelected, onSelect }: SeatProps) {
  return (
    <div
      onClick={() => onSelect(id)}
      className={`w-10 h-10 flex items-center justify-center text-sm font-medium rounded cursor-pointer 
          ${
            isSelected
              ? "bg-green-500 text-white"
              : price === 100
              ? "bg-gray-300"
              : price === 150
              ? "bg-yellow-300"
              : "bg-red-300"
          }
        `}
    >
      {id}
    </div>
  );
}
