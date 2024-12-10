import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class BookingHistory {
  public bookingId!: number; // Unique booking identifier
  public hotelName!: string; // Hotel name
  public roomType!: string; // Type of room booked
  public price!: string; // Booking price
  public bookingDate!: string; // Date of booking
  public status!: string; // Booking status
  public customerName!: string; // Customer's full name
  public customerEmail!: string; // Customer's email address
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  customerEmail!: string; // Logged-in user's email
  bookings: BookingHistory[] = []; // Array to store booking history

  ngOnInit(): void {
    this.customerEmail = localStorage.getItem('cemail')!;
    console.log('Customer email:', this.customerEmail); // Check if email is correctly fetched
    this.getBookingHistory();
  }

  // Fetch booking history for the logged-in user
  getBookingHistory(): void {
    const url = `http://localhost:8085/bookinghistory/${this.customerEmail}`;
    this.httpClient.get<BookingHistory[]>(url).subscribe(
      (response) => {
        console.log('Booking history retrieved successfully', response);
        this.bookings = response;
      },
      (error) => {
        console.error('Error fetching booking history', error);
      }
    );
  }

  // Assign color classes to status
  getStatusColorClass(status: string): string {
    switch (status) {
      case 'Rejected':
        return 'text-danger'; // Red for rejected bookings
      case 'Confirmed':
        return 'text-success'; // Green for confirmed bookings
      case 'Pending':
        return 'text-warning'; // Orange for pending bookings
      default:
        return ''; // Default (no special styling)
    }
  }
}
