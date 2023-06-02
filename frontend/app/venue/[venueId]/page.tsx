import NavigationContainer from "@/src/components/Navigation/NavigationContainer/NavigationContainer";
import VenueDetail from "@/src/components/VenueDetail/VenueDetail";
import { venueService } from "@/src/services";
import { notFound } from "next/navigation";

interface IProps {
  params: object;
  searchParams: object;
}

async function getVenueData(id: string) {
  const response = await fetch(venueService.getVenueById(id), {cache: "no-cache"});
  if (!response.ok) {
    // throw new Error("Failed to fetch data");
    notFound();
  }
  return await response.json();
}

export default async function Venue(props: IProps) {
  const id = Object.entries(props.params)[0][1];
  const data = await getVenueData(id);

  return (
    <>
      <NavigationContainer />
      {data && <VenueDetail venue={data}/>}
    </>
  )
}