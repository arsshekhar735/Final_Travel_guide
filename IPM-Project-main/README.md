# Travel Guide Project

The Travel Guide Project is a comprehensive web application designed to serve as a travel assistant for tourists. It provides information about destinations, attractions, accommodations, and customizable itineraries, helping users plan their trips seamlessly. The application is developed using the MEAN stack for the frontend and Java Spring Boot for the backend.

## Features

- **Destination Information**: View detailed information about various travel destinations.
- **Attractions & Activities**: Discover popular attractions and activities in each destination.
- **Accommodation Suggestions**: Find recommendations for hotels, hostels, and other accommodations.
- **Custom Itinerary Planner**: Create and manage personalized travel itineraries.
- **User Authentication**: Secure user login and registration.
- **Search Functionality**: Easily search for destinations, attractions, and accommodations.
- **Interactive UI**: User-friendly interface with responsive design.

## Technologies Used

### Frontend:
- **Angular**: 
  - Framework for building dynamic, single-page web applications.
  - Features like components, routing, and state management enhance user experience.
- **HTML/CSS**: 
  - For structuring and styling the frontend.
- **JavaScript/TypeScript**: 
  - Adds interactivity and functionality to the frontend.

### Backend:
- **Java Spring Boot**: 
  - Framework for building robust and scalable RESTful APIs.
  - Provides support for data processing, validation, and security.
- **Spring Security**: 
  - For authentication and authorization.

### Database:
- **MySQL**: 
  - Relational database for storing user data, destination details, and itineraries.

## Project Structure

```
TravelGuideProject/
├── frontend/ (Angular Application)
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   ├── environments/
│   ├── package.json
│   ├── angular.json
│
├── backend/ (Java Spring Boot Application)
│   ├── src/main/java/com/travelguide/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── model/
│   │   ├── repository/
│   ├── src/main/resources/
│   │   ├── application.properties
│   ├── pom.xml
│
├── README.md
```

## Installation and Setup

### Prerequisites
- Node.js and npm installed for the frontend.
- Java JDK 11 or higher for the backend.
- MySQL installed and configured.

### Frontend Setup
1. Navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   ng serve
   ```
   The frontend will be available at `http://localhost:4200/`.

### Backend Setup
1. Navigate to the `backend/` directory:
   ```bash
   cd backend
   ```
2. Configure the database in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/travel_guide
   spring.datasource.username=<your-username>
   spring.datasource.password=<your-password>
   ```
3. Build and run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```
   The backend will be available at `http://localhost:8080/`.

## API Endpoints

| Method | Endpoint              | Description                       |
|--------|-----------------------|-----------------------------------|
| GET    | `/api/destinations`   | Retrieve all destinations         |
| GET    | `/api/attractions`    | Retrieve all attractions          |
| POST   | `/api/itineraries`    | Create a new itinerary            |
| PUT    | `/api/users/profile`  | Update user profile information   |
| DELETE | `/api/itineraries/:id`| Delete an existing itinerary      |

## Usage
- Open the frontend in your browser at `http://localhost:4200/`.
- Use the search and filter options to explore travel destinations and attractions.
- Log in or register to access personalized features like saving itineraries.

## Future Enhancements
- Add multilingual support for a global audience.
- Implement a recommendation system for destinations based on user preferences.
- Integrate third-party APIs for real-time weather updates and flight bookings.

## Contributing
Feel free to submit issues or pull requests to contribute to the project.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, please contact:
- **Name**: Suman Shekhar
- **Email**: suman.nwd03@gmail.com
