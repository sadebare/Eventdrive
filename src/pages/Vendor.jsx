import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  CompanyProfile,
  Packages,
  PageNav,
  Reviews,
  TabSwitcher,
  VendorBooking,
  VendorGallery,
  VendorOverview,
} from "../components";
import { useState } from "react";

const Vendor = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const { vendorId } = useParams();

  const vendor = useSelector((store) =>
    store.vendors.vendors.find((vendor) => vendor.id === vendorId)
  );

  if (!vendor) {
    return (
      <div className="flex flex-col items-center h-full md:h-[560px] pb-10">
        <img src="/no_results.svg" alt="no results page" className="md:h-96" />
        <h3 className="font-semibold text-xl">No results found</h3>
        <h3 className="text-sm font-light pt-2 text-gray-500">
          No results found. Please try again
        </h3>
      </div>
    );
  }

  const { vendors } = vendor;

  return (
    <div className="align-element space-y-5 md:space-y-7">
      <PageNav
        vendorCenter={vendors.state}
        vendorName={vendors.title}
        page="Vendor"
        place={vendors.state}
      />
      <VendorOverview vendors={vendors} />
      <VendorBooking />
      <TabSwitcher
        widen={true}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={["Profile", "Packages", "Reviews", "Portfolio"]}
      />

      {activeTab === "Profile" && <CompanyProfile vendors={vendors} />}
      {activeTab === "Packages" && <Packages vendors={vendors} />}
      {activeTab === "Reviews" && <Reviews vendors={vendors} />}
      {activeTab === "Portfolio" && <VendorGallery />}
    </div>
  );
};

export default Vendor;
