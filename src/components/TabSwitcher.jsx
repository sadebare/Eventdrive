const TabSwitcher = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="flex font-semibold border-b-4 border-b-primary">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`px-3 py-1 rounded-t-xl ${
            activeTab === tab ? "bg-primary" : ""
          } cursor-pointer`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default TabSwitcher;
