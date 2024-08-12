import {
  Categories,
  Filters,
  Hero,
  MobileFilters,
  PageNav,
  Popular,
  VendorList,
  VenueCall,
} from "../components";

const Vendors = () => {
  return (
    <main className="flex flex-col md:block">
      <Hero
        title="Hire the Perfect Vendor for Your Event"
        subText="This is where the short copy explaining vendor search goes."
        firstInput="Vendor"
        secondInput="Location"
        link="/vendor_hero.jpg"
      />
      <div className="align-element space-y-7">
        <PageNav page="Vendors" />
        <Categories />
        <MobileFilters />
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:block">
            <Filters />
          </div>
          <div className="md:flex-1">
            <VendorList />
          </div>
        </div>
      </div>
      <div className="order-last">
        <VenueCall />
      </div>
      <div>
        <Popular subText="Vendors" />
      </div>
    </main>
  );
};

export default Vendors;
