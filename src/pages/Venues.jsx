import {
  Categories,
  Filters,
  Hero,
  MobileFilters,
  PageNav,
  Popular,
  VenueCall,
  VenueList,
} from "../components";

const Venues = () => {
  return (
    <main className="flex flex-col md:block">
      <Hero
        title="Find Your Perfect Venue"
        subText="This is where the short copy explaining venue search goes."
        firstInput="Venue type"
        secondInput="Location"
        link="/venue_hero.jpg"
      />
      <div className="align-element space-y-7">
        <PageNav page="Venue" />
        <Categories />
        <MobileFilters />
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:block">
            <Filters />
          </div>
          <div className="md:flex-1">
            <VenueList />
          </div>
        </div>
      </div>
      <div className="order-last">
        <VenueCall />
      </div>
      <div>
        <Popular subText="Venues" />
      </div>
    </main>
  );
};

export default Venues;
