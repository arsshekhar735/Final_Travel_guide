import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare var webkitSpeechRecognition: any; // Declare speech recognition if available in browser

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css'],
})
export class PoliciesComponent implements OnInit {
  hotels: any[] = [];
  filteredHotels: any[] = [];  // Store filtered hotels based on search
  selectedHotel: any = null;
  selectedRoom: string = '';
  additionalComment: string = '';
  customerName: string | null = '';
  customerEmail: string | null = '';
  roomPrices: { [key: string]: number } = {
    'Penthouse': 20000,
    'Suite': 15000,
    '2 Bed': 10000,
    'King Size Bed': 12000,
    'Single Bed': 5000,
  };
  searchQuery: string = ''; // Store search query

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Mock data for hotels (Replace with a service call)
    this.hotels = [
      { id: 1, name: 'Hotel Paradise', location: 'Goa', price: 5000 },
      { id: 2, name: 'Mountain Retreat', location: 'Manali', price: 7000 },
      { id: 3, name: 'City Comfort', location: 'Mumbai', price: 3000 },
      { id: 4, name: 'Seaside Escape', location: 'Goa', price: 6000 },
      { id: 5, name: 'Desert Oasis', location: 'Jaisalmer', price: 8000 },
      { id: 6, name: 'Lakeview Resort', location: 'Udaipur', price: 4500 },
      { id: 7, name: 'Mountain View Lodge', location: 'Kashmir', price: 5500 },
      { id: 8, name: 'Royal Palace Hotel', location: 'Jaipur', price: 9500 },
      { id: 9, name: 'Ocean Breeze Hotel', location: 'Pondicherry', price: 6500 },
      { id: 10, name: 'Sunset Resort', location: 'Kerala', price: 7500 },
    ];

    this.filteredHotels = [...this.hotels]; // Initialize with all hotels

    // Fetch customer details (mock implementation)
    this.customerName = localStorage.getItem('cname');
    this.customerEmail = localStorage.getItem('cemail');
  }

  filterHotels(): void {
    const query = this.searchQuery.toLowerCase();
    if (query) {
      this.filteredHotels = this.hotels.filter(hotel => 
        hotel.name.toLowerCase().includes(query) || hotel.location.toLowerCase().includes(query)
      );
    } else {
      this.filteredHotels = [...this.hotels];  // Reset to all hotels when search is cleared
    }
  }

  startVoiceSearch(): void {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = (event: any) => {
      const result = event.results[0][0].transcript;
      this.searchQuery = result;
      this.filterHotels();
    };
  }

  bookHotel(hotel: any): void {
    this.selectedHotel = hotel;

    Swal.fire({
      title: `Select Room for ${hotel.name}`,
      html: `
        <label for="roomType">Room Type</label>
        <select id="roomType" class="swal2-input" (change)="onRoomChange($event)">
          <option value="Penthouse">Penthouse</option>
          <option value="Suite">Suite</option>
          <option value="2 Bed">2 Bed</option>
          <option value="King Size Bed">King Size Bed</option>
          <option value="Single Bed">Single Bed</option>
        </select>
        <label for="comment">Additional Comment</label>
        <textarea id="comment" class="swal2-textarea" placeholder="Any special request?" (input)="onCommentChange($event)"></textarea>
        <div id="roomPrice" style="margin-top: 10px; font-weight: bold;"></div>
      `,
      preConfirm: () => {
        const roomType = (document.getElementById('roomType') as HTMLSelectElement).value;
        const comment = (document.getElementById('comment') as HTMLTextAreaElement).value;
        this.selectedRoom = roomType;
        this.additionalComment = comment;

        if (!roomType) {
          Swal.showValidationMessage('Please select a room type');
          return false;
        }

        return { roomType, comment };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Booking Successful for ${this.selectedHotel.name}`,
          text: `Room: ${this.selectedRoom}\nPrice: ₹${this.roomPrices[this.selectedRoom]}\nComment: ${this.additionalComment}`,
          icon: 'success',
        }).then(() => {
          // Navigate to confirmation page or update booking history
          this.router.navigate(['history']);
        });
      }
    });
  }

  onRoomChange(event: any): void {
    const roomType = event.target.value;
    const roomPrice = this.roomPrices[roomType] || 0;
    const priceElement = document.getElementById('roomPrice');
    if (priceElement) {
      priceElement.textContent = `Price: ₹${roomPrice}`;
    }
  }

  onCommentChange(event: any): void {
    this.additionalComment = event.target.value;
  }
}
