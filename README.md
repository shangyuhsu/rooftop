# Setup

1. Install and start [Docker Desktop](https://www.docker.com/products/docker-desktop).
2. Clone this repository:

    `cd ~/Desktop` (or wherever you want to put the project)

    `git clone https://github.com/shangyuhsu/rooftop.git`

3. Enter project directory:

    `cd rooftop`

4. Build the backend (build the Docker images):

    `make build-backend`

5. Run the backend:

    `make run-backend`

The backend should now be running at `127.0.0.1:8000`.

To verify, open up a browser and go to `http://127.0.0.1:8000/api/ping`.

---

# Other commands

To view backend logs:

    make logs-backend

    Use `Ctrl-C` to stop viewing logs.

To stop the backend:

    make stop-backend

To clear the PSQL database:

    make clean
