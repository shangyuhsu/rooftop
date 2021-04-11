# Backend

### Setup

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

### Other commands

To view backend logs:

    make logs-backend

    Use `Ctrl-C` to stop viewing logs.

To stop the backend:

    make stop-backend

To clear the PSQL database:

    make clean-backend

---

# Frontend

### Setup

1. Clone this repo if you haven't already (see steps under "Backend")

2. Go to [React Native setup instructions](https://reactnative.dev/docs/environment-setup), click on "React Native CLI Quickstart" and follow up until "Creating a new application".

3. Enter the frontend directory:

    `cd ~/Destop/rooftop/frontend`

4. Start Metro:

    `npx react-native start`

5. In a new terminal, run the iOS app in the simulator:

    `npx react-native run-ios`

<!-- 3. Install [ngrok](https://ngrok.com/) and follow the instructions for setting up an authtoken.
    - unzip the download and move the `ngrok` file into `usr/local/bin`:

        `mv ~/Downloads/ngrok /usr/local/bin/ngrok`

4. Run a ngrok proxy:

    `ngrok http 8000`

5. Copy the "https://*.ngrok.io" URL and paste it into `BACKEND_ADDR` variable in `~/Destop/rooftop/frontend/settings.js` file. -->
