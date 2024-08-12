import { InputGroup, RadioGroup, SelectGroup } from "./InputGroup";

const FilterBy = ({ text }) => (
  <h4 className="text-lg leading-relaxed md:text-xl font-bold mb-4">
    <span className="border-l-[10px] border-yellow-500 pl-3">{text}</span>
  </h4>
);

const Filters = () => {
  const states = ["State 1", "State 2", "State 3"];
  const venueTypes = [
    { value: "conference", label: "Conference Room" },
    { value: "banquet", label: "Banquet Hall" },
    { value: "hotel", label: "Hotel" },
  ];
  const eventTypes = [
    { value: "wedding", label: "Wedding" },
    { value: "birthday", label: "Birthday" },
    { value: "corporate", label: "Corporate Event" },
  ];
  const capacities = [
    { value: "less_than_100", label: "Less than 100 Guests" },
    { value: "101_to_200", label: "101 to 200 Guests" },
    { value: "201_to_300", label: "201 to 300 Guests" },
  ];
  const budgets = [
    { value: "less_than_5000", label: "Less than #5,000" },
    { value: "5001_to_20000", label: "#5,001 to #20,000" },
    { value: "20001_to_50000", label: "#20,001 to #50,000" },
  ];
  const ratings = [
    { value: "no_rating", label: "No rating yet" },
    { value: "1_to_2", label: "1 to 2 ratings" },
    { value: "3_to_4", label: "3 to 4 ratings" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Filter Your Venue</h2>
      <div className="space-y-10">
        {/* Filter by VENUE */}
        <div className="space-y-2">
          <FilterBy text="Venue Type" />
          <InputGroup label="Venue Type" />
          <RadioGroup name="venueType" options={venueTypes} />
        </div>

        {/* Filter by STATE */}
        <div>
          <FilterBy text="By State" />
          <SelectGroup
            label="State"
            options={states.map((state) => ({
              value: state.toLowerCase().replace(" ", "_"),
              label: state,
            }))}
          />
        </div>

        {/* Filter by LOCATION */}
        <div>
          <FilterBy text="By Location" />
          <InputGroup label="Location" />
        </div>

        {/* Filter by EVENT */}
        <div className="space-y-2">
          <FilterBy text="By Event" />
          <InputGroup label="Event" />
          <RadioGroup name="eventType" options={eventTypes} />
        </div>

        {/* Filter by CAPACITY */}
        <div>
          <FilterBy text="By Capacity" />
          <RadioGroup name="capacity" options={capacities} />
        </div>

        {/* Filter by BUDGET */}
        <div>
          <FilterBy text="By Budget" />
          <RadioGroup name="budget" options={budgets} />
        </div>

        {/* Filter by RATINGS */}
        <div>
          <FilterBy text="By Ratings" />
          <RadioGroup name="ratings" options={ratings} />
        </div>
      </div>
    </div>
  );
};

export default Filters;
