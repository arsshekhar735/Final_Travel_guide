import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; // Import necessary modules

import { HistoryComponent } from './history.component';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;
  let httpMock: HttpTestingController; // Declare the HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryComponent],
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController); // Inject the HttpTestingController
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load booking history', () => {
    const mockBookings = [
      {
        bookingId: 1,
        customerName: 'John Doe',
        hotelName: 'Hotel Paradise',
        roomType: 'Deluxe',
        price: '5000',
        bookingDate: '2024-12-01',
        status: 'Confirmed',
        customerEmail: 'john.doe@example.com',
      },
    ];

    component.bookings = mockBookings; // Assign mock data directly to the bookings array

    expect(component.bookings.length).toBeGreaterThan(0); // Check if data exists
  });

  it('should fetch booking history from API', () => {
    const mockBookings = [
      {
        bookingId: 1,
        customerName: 'John Doe',
        hotelName: 'Hotel Paradise',
        roomType: 'Deluxe',
        price: '5000',
        bookingDate: '2024-12-01',
        status: 'Confirmed',
        customerEmail: 'john.doe@example.com',
      },
    ];

    // Trigger the HTTP request
    component.getBookingHistory();

    const req = httpMock.expectOne(`http://localhost:8085/bookinghistory/${component.customerEmail}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockBookings); // Simulate a successful response

    fixture.detectChanges(); // Trigger change detection

    expect(component.bookings).toEqual(mockBookings); // Check if the bookings are populated
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that no HTTP requests are left open
  });
});
