export interface Seat {
  id: string;
  price: number;
}

export interface SeatGridProps {
  seats: Seat[];
  selectedSeats: string[];
  onSeatSelect: (id: string) => void;
}

export interface SeatProps {
  id: string;
  price: number;
  isSelected: boolean;
  onSelect: (id: string) => void;
}
