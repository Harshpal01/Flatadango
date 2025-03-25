### Overview
Flatadango is an interactive movie ticketing web application that brings the movie theater experience right to your browser. With Flatadango, users can view a curated list of movies currently showing, check out detailed information for each film, and purchase tickets directly from the app. The interface updates dynamically as tickets are sold, so you always see real-time availability.

### Features
#### Movie Showcase:
- View the poster, title, runtime, showtime, and available tickets for the featured movie on page load.

#### Movie List Navigation:
- A sidebar displays all movies available. Clicking on any movie updates the main display with that film’s details.

#### Ticket Purchase:
- Purchase a ticket for the selected movie with a single click. The available ticket count decreases accordingly.
- When a movie is sold out (no available tickets), the app marks it as "Sold Out" and disables further ticket purchases.

### Installation & Setup
#### Install JSON Server:
Make sure you have JSON Server installed globally:
```bash
npm install -g json-server
```

#### Run the Backend:
In the project directory, run the following command to start the server with your movie data:
```bash
json-server --watch db.json --port 3000
```
This will serve the movie data at `http://localhost:3000/films`.

#### Launch the Application:
Open `index.html` in your web browser or use a local server (e.g., VS Code Live Server) to view the app.

### Usage
#### Viewing Movie Details:
- On load, the app displays details for the first movie. Use the sidebar to select other movies.

#### Purchasing Tickets:
- Click the "Buy Ticket" button to purchase a ticket for the current movie. The ticket count will update dynamically.
- If a movie is sold out, the button will change to "Sold Out" and become inactive.

### Technologies Used
- **HTML/CSS:** For structuring and styling the web interface.
- **JavaScript:** For handling events, DOM manipulation, and API communication.
- **JSON Server:** To simulate a backend API for persistent data storage.
- **Bootstrap (Optional):** For additional styling and responsive layout.

### Author
This project was developed by **Dominic Kipkorir**.
