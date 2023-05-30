import { apiService } from "@/src/services/apiService";
import { urls } from "@/src/configs";

export const venueService = {
  getAllVenues: `${apiService}${urls.getVenues}`
}