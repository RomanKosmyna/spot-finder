import { apiService } from "@/src/services/apiService";
import { urls } from "@/src/configs";

export const profileService = {
  getProfile: (token: string) => `${apiService}${urls.profile.getProfile(token)}`,
}