import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for two-way binding
import { RouterTestingModule } from '@angular/router/testing';
import { PoliciesComponent } from './policies.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

describe('PoliciesComponent', () => {
  let component: PoliciesComponent;
  let fixture: ComponentFixture<PoliciesComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoliciesComponent],
      imports: [
        FormsModule, // Add FormsModule here
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();

    // Initialize hotels for testing
    component.hotels = [
      { id: 1, name: 'Hotel Paradise', location: 'Goa', price: 5000 },
      { id: 2, name: 'Beach Resort', location: 'Goa', price: 7000 },
      { id: 3, name: 'Mountain View', location: 'Manali', price: 6000 },
    ];
    component.filteredHotels = [...component.hotels];
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with all hotels', () => {
    expect(component.filteredHotels.length).toBe(component.hotels.length);
  });

  it('should filter hotels based on search query', () => {
    component.searchQuery = 'Goa';
    component.filterHotels();
    expect(component.filteredHotels.length).toBe(2);
    expect(component.filteredHotels[0].location).toBe('Goa');
    expect(component.filteredHotels[1].location).toBe('Goa');
  });

  it('should reset to all hotels when search query is cleared', () => {
    component.searchQuery = '';
    component.filterHotels();
    expect(component.filteredHotels.length).toBe(component.hotels.length);
  });

  it('should start voice search and filter hotels based on voice input', () => {
    const mockRecognition = jasmine.createSpyObj('webkitSpeechRecognition', ['start', 'addEventListener']);
    global['webkitSpeechRecognition'] = jasmine.createSpy().and.returnValue(mockRecognition);

    component.startVoiceSearch();
    expect(mockRecognition.start).toHaveBeenCalled();
  });

  it('should navigate to booking history after successful hotel booking', async () => {
    const hotel = { id: 1, name: 'Hotel Paradise', location: 'Goa', price: 5000 };
    const navigateSpy = spyOn(router, 'navigate');
    spyOn(Swal, 'fire').and.returnValue(Promise.resolve({ isConfirmed: true }));

    await component.bookHotel(hotel); // Simulate hotel booking
    expect(navigateSpy).toHaveBeenCalledWith(['history']);
  });

  it('should display validation message if room type is not selected during booking', async () => {
    const hotel = { id: 1, name: 'Hotel Paradise', location: 'Goa', price: 5000 };
    spyOn(Swal, 'fire').and.returnValue(Promise.resolve({ isConfirmed: false }));

    component.bookHotel(hotel); // Simulate hotel booking
    await fixture.whenStable(); // Wait for async Swal to complete
    expect(Swal.fire).toHaveBeenCalledWith({
      title: 'Validation Error',
      text: 'Please select a room type before booking.',
      icon: 'error',
    });
  });
});
