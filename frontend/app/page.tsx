import NavigationContainer from "@/src/components/Navigation/NavigationContainer/NavigationContainer";
import Header from "@/src/components/Header/Header";
import VenuesList from "@/src/components/Venues/VenuesList/VenuesList";

export default async function Home() {

  return (
    <>
       <Header />
       <NavigationContainer />
       <VenuesList/>
    </>
  );
}
