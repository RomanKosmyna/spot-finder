import Navigation from "@/src/components/Navigation/Navigation";
import Container from "@/src/components/Container";

export default async function Home() {

  return (
    <div className={"page"}>
      <Navigation />
      {/* <Header /> */}
      {/* <NavigationContainer /> */}
      {/* <VenuesList/> */}
      <Container />
    </div>
  );
}
