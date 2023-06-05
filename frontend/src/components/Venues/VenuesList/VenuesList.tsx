import { venueService } from "@/src/services";
import VenueListItem from "@/src/components/Venues/VenueListItem/VenueListItem";
import { type Venue } from "@/src/interfaces";

import styles from "./VenuesList.module.css";

async function getVenueData() {
  const response = await fetch(venueService.getAllVenues, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
}

const VenuesList = async () => {
  const data = await getVenueData();

  return (
    <main className={styles.mainVenueContainer}>
      {data?.map((venue: Venue) => <VenueListItem key={venue.id} venue={venue} />)}
    </main>
  );
};

export default VenuesList;