import { useState } from "react";
import { TabSwitcher } from "../../components";
import AccountHandler from "./AccountHandler";
import BusinessDetails from "./BusinessDetails";

const VendorRegister = () => {
  const [activeTab, setActiveTab] = useState("Account Details");

  return (
    <div className="md:grid align-element">
      <div className="flex flex-col gap-8 py-10 2xl:py-[33px] md:align-element">
        <TabSwitcher
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={["Account Details", "Business Details"]}
        />
        <div className="grid gap-5">
          {activeTab === "Account Details" ? (
            <AccountHandler />
          ) : (
            <BusinessDetails />
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorRegister;
