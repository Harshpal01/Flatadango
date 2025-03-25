const url = "http://localhost:3000/films";

document.addEventListener("DOMContentLoaded", () => {
    // Function to display the first movie details
    const displayFirstMovie = (films) => {
        if (!films || films.length === 0) {
            console.error("No films available!");
            return;
        }
        const firstMovie = films[0];
        updateMovieDetails(firstMovie);
    };

    // Function to update movie details on the page
    const updateMovieDetails = (movie) => {
        const filmImg = document.getElementById("poster");
        const movieTitle = document.getElementById("filmTitle");
        const movieDescr = document.getElementById("movieDescription");
        const runningTime = document.getElementById("runtime");
        const showingTime = document.getElementById("showtime");
        const availTicket = document.getElementById("ticketsAvailable");
        const ticketBuy = document.getElementById("buyTicket");

        filmImg.src = movie.poster;
        movieTitle.innerText = movie.title;
        movieDescr.innerText = movie.description;
        runningTime.innerText = `Runtime: ${movie.runtime} minutes`;
        showingTime.innerText = `Showtime: ${movie.showtime}`;
        let ticketsAvailable = movie.capacity - movie.tickets_sold;
        updateTicketDisplay(availTicket, ticketsAvailable);

        // Remove previous event listeners before adding a new one
        ticketBuy.replaceWith(ticketBuy.cloneNode(true));
        const newTicketBuy = document.getElementById("buyTicket");

        newTicketBuy.addEventListener("click", () => {
            if (ticketsAvailable > 0) {
                ticketsAvailable--;
                updateTicketDisplay(availTicket, ticketsAvailable);
            }
        });
    };

    // Function to update ticket display
    const updateTicketDisplay = (element, tickets) => {
        if (tickets <= 0) {
            element.innerHTML = `<span class='badge bg-danger'>SOLD OUT</span>`;
        } else {
            element.innerText = `Tickets available: (${tickets})`;
        }
    };

    // Function to fetch movies and populate the list
    const fetchMovies = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const films = data.films || data;
                if (!films || films.length === 0) return;
                
                const movieList = document.getElementById("showingMovie");
                movieList.innerHTML = "";
                films.forEach((movie) => {
                    const movieItem = document.createElement("li");
                    movieItem.classList.add("list-group-item", "border", "border-info", "sinema");
                    movieItem.setAttribute("id", movie.id);
                    movieItem.innerText = movie.title;
                    movieList.appendChild(movieItem);

                    movieItem.addEventListener("click", () => {
                        updateMovieDetails(movie);
                    });
                });

                displayFirstMovie(films);
            })
            .catch((error) => console.error("Error fetching movies:", error));
    };

    fetchMovies();
});
