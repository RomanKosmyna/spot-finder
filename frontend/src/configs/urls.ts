const apiURL = "http://localhost:3000";

const urls = {
  login: "/login",
  registration: "/registration",
  venue: {
    getVenues: "/venue",
    getVenueById: (id: string) => `/venue/${id}`
  }
}

export {apiURL, urls};