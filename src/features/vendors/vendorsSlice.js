import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import contact from "/contact.svg";

const initialState = {
  isLoading: false,
  vendors: [
    {
      id: uuidv4(),
      vendors: {
        title: "Creative Studio",
        address: "Area 1",
        state: "Abuja",
        offers: ["Event Coverage", "Photo Booth", "Pre-Event"],
        rating: 2.6,
        review: 6,
        eventsDone: 4,
        phoneNumber: "+234 567 8901 234",
        contactPerson: "Collins Adewole",
        contactRole: "Project Manager",
        contactMail: "jussejack43@gmail.com",
        contactImage: contact,
        fullAddress: "No. 14, Morris Plaza Avenue, Area 1, Abuja",
        workTime:
          "Mondays, Tuesdays, Wednesdays, Thursdays, Fridays, Saturdays",
        eventCoverage: true,
        studioShot: true,
        preeventShot: true,
        lifestyle: true,
        equipmentRental: false,
        packages: [
          {
            id: uuidv4(),
            plan: "Basic",
            offers: [
              "Nam pretium ultricies dui eu imperdiet.",
              "Vivamus at lorem fringilla massa auctor pretium a sit amet mi.",
              "Fusce id mattis massa, a pharetra erat. Etiam fringilla quis dui id eleifend.",
              "Sed quis elit enim salutaris.",
            ],
            price: "80,000"
          },
          {
            id: uuidv4(),
            plan: "Standard",
            offers: [
              "Nam pretium ultricies dui eu imperdiet.",
              "Vivamus at lorem fringilla massa auctor pretium a sit amet mi.",
              "Fusce id mattis massa, a pharetra erat. Etiam fringilla quis dui id eleifend.",
              "Sed quis elit enim.",
            ],
            price: "150,000"
          },
          {
            id: uuidv4(),
            plan: "Premium",
            offers: [
              "Nam pretium ultricies dui eu imperdiet.",
              "Vivamus at lorem fringilla massa auctor pretium a sit amet mi.",
              "Fusce id mattis massa, a pharetra erat. Etiam fringilla quis dui id eleifend.",
              "Sed quis elit enim.",
            ],
            price: "250,000"
          },
        ],
        summary:
          "Duis bibendum tristique aliquam. Quisque suscipit finibus nibh. Fusceac ultrices neque. Nam ut viverra purus.",
        about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea sapiente culpa exercitationem ex asperiores aut. Sapiente qui quidem quibusdam? Commodi deserunt voluptatem porro nobis inventore cum eius eum explicabo? Earum minus cupiditate repellat.<br /> Animi, veritatis dolorem molestiae, magni odio assumenda, laudantium autem voluptates fugiat necessitatibus saepe! Aperiam dolorum officiis, dolore, minus nemo eius praesentium quas obcaecati, mollitia asperiores facere. Adipisci libero, alias culpa similique quia dolores. <br /><br />Vitae assumenda animi error ad? Culpa repudiandae consequuntur aut unde excepturi alias voluptatibus deserunt! Qui incidunt voluptatum beatae earum commodi dolore asperiores reprehenderit. Esse ipsa nemo non, facere iure quas quo obcaecati deserunt, cupiditate alias impedit. Quos, placeat voluptatem fugiat ullam quas maxime molestias, cupiditate, perspiciatis repellendus commodi aut temporibus laudantium in doloribus. Dolore iste at facilis totam pariatur numquam. Voluptas ipsum excepturi aliquid est, adipisci minima! Dolorum aperiam sed rem deserunt, voluptate incidunt repudiandae suscipit volupt as, inventore assumenda autem quos blanditiis debitis.`,
        image: ["/vendor.svg", "/vendor2.svg", "/vendor3.svg"],
      },
    },
    {
      id: uuidv4(),
      vendors: {
        title: "Clarica Catering",
        address: "Zone 6",
        state: "Abuja",
        offers: [
          "Full-Service",
          "Buffet-Style",
          "Family-Style",
          "Plated Meals",
        ],
        rating: 2.6,
        review: 6,
        eventsDone: 0,
        phoneNumber: "+234 567 8901 234",
        contactPerson: "Collins Adewole",
        contactRole: "Project Manager",
        contactMail: "jussejack43@gmail.com",
        contactImage: contact,
        fullAddress: "No. 14, Morris Plaza Avenue, Area 1, Abuja",
        workTime:
          "Mondays, Tuesdays, Wednesdays, Thursdays, Fridays, Saturdays",
        eventCoverage: true,
        studioShot: true,
        preeventShot: true,
        lifestyle: true,
        equipmentRental: false,
        packages: [
          {
            id: uuidv4(),
            plan: "Basic",
            offers: [
              "Nam pretium ultricies dui eu imperdiet.",
              "Vivamus at lorem fringilla massa auctor pretium a sit amet mi.",
              "Fusce id mattis massa, a pharetra erat. Etiam fringilla quis dui id eleifend.",
              "Sed quis elit enim salutaris.",
            ],
            price: "80,000"
          },
          {
            id: uuidv4(),
            plan: "Standard",
            offers: [
              "Nam pretium ultricies dui eu imperdiet.",
              "Vivamus at lorem fringilla massa auctor pretium a sit amet mi.",
              "Fusce id mattis massa, a pharetra erat. Etiam fringilla quis dui id eleifend.",
              "Sed quis elit enim.",
            ],
            price: "150,000"
          },
          {
            id: uuidv4(),
            plan: "Premium",
            offers: [
              "Nam pretium ultricies dui eu imperdiet.",
              "Vivamus at lorem fringilla massa auctor pretium a sit amet mi.",
              "Fusce id mattis massa, a pharetra erat. Etiam fringilla quis dui id eleifend.",
              "Sed quis elit enim.",
            ],
            price: "250,000"
          },
        ],
        summary:
          "Duis bibendum tristique aliquam. Quisque suscipit finibus nibh. Fusceac ultrices neque. Nam ut viverra purus.",
        about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea sapiente culpa exercitationem ex asperiores aut. Sapiente qui quidem quibusdam? Commodi deserunt voluptatem porro nobis inventore cum eius eum explicabo? Earum minus cupiditate repellat.<br /> Animi, veritatis dolorem molestiae, magni odio assumenda, laudantium autem voluptates fugiat necessitatibus saepe! Aperiam dolorum officiis, dolore, minus nemo eius praesentium quas obcaecati, mollitia asperiores facere. Adipisci libero, alias culpa similique quia dolores. <br /><br />Vitae assumenda animi error ad? Culpa repudiandae consequuntur aut unde excepturi alias voluptatibus deserunt! Qui incidunt voluptatum beatae earum commodi dolore asperiores reprehenderit. Esse ipsa nemo non, facere iure quas quo obcaecati deserunt, cupiditate alias impedit. Quos, placeat voluptatem fugiat ullam quas maxime molestias, cupiditate, perspiciatis repellendus commodi aut temporibus laudantium in doloribus. Dolore iste at facilis totam pariatur numquam. Voluptas ipsum excepturi aliquid est, adipisci minima! Dolorum aperiam sed rem deserunt, voluptate incidunt repudiandae suscipit volupt as, inventore assumenda autem quos blanditiis debitis.`,
        image: ["/vendor2.svg", "/vendor3.svg", "/vendor.svg"],
      },
    },
    {
      id: uuidv4(),
      vendors: {
        title: "Creative Studio",
        address: "Area 1",
        state: "Abuja",
        offers: ["Event Coverage", "Photo Booth", "Pre-Event"],
        rating: 2.6,
        review: 6,
        eventsDone: 4,
        phoneNumber: "+234 567 8901 234",
        contactPerson: "Collins Adewole",
        contactRole: "Project Manager",
        contactMail: "jussejack43@gmail.com",
        contactImage: contact,
        fullAddress: "No. 14, Morris Plaza Avenue, Area 1, Abuja",
        workTime:
          "Mondays, Tuesdays, Wednesdays, Thursdays, Fridays, Saturdays",
        eventCoverage: true,
        studioShot: true,
        preeventShot: true,
        lifestyle: true,
        equipmentRental: false,
        packages: [
          {
            id: uuidv4(),
            plan: "Basic",
            offers: [
              "Nam pretium ultricies dui eu imperdiet.",
              "Vivamus at lorem fringilla massa auctor pretium a sit amet mi.",
              "Fusce id mattis massa, a pharetra erat. Etiam fringilla quis dui id eleifend.",
              "Sed quis elit enim salutaris.",
            ],
            price: "80,000"
          },
          {
            id: uuidv4(),
            plan: "Standard",
            offers: [
              "Nam pretium ultricies dui eu imperdiet.",
              "Vivamus at lorem fringilla massa auctor pretium a sit amet mi.",
              "Fusce id mattis massa, a pharetra erat. Etiam fringilla quis dui id eleifend.",
              "Sed quis elit enim.",
            ],
            price: "150,000"
          },
          {
            id: uuidv4(),
            plan: "Premium",
            offers: [
              "Nam pretium ultricies dui eu imperdiet.",
              "Vivamus at lorem fringilla massa auctor pretium a sit amet mi.",
              "Fusce id mattis massa, a pharetra erat. Etiam fringilla quis dui id eleifend.",
              "Sed quis elit enim.",
            ],
            price: "250,000"
          },
        ],
        summary:
          "Duis bibendum tristique aliquam. Quisque suscipit finibus nibh. Fusceac ultrices neque. Nam ut viverra purus.",
        about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea sapiente culpa exercitationem ex asperiores aut. Sapiente qui quidem quibusdam? Commodi deserunt voluptatem porro nobis inventore cum eius eum explicabo? Earum minus cupiditate repellat.<br /> Animi, veritatis dolorem molestiae, magni odio assumenda, laudantium autem voluptates fugiat necessitatibus saepe! Aperiam dolorum officiis, dolore, minus nemo eius praesentium quas obcaecati, mollitia asperiores facere. Adipisci libero, alias culpa similique quia dolores. <br /><br />Vitae assumenda animi error ad? Culpa repudiandae consequuntur aut unde excepturi alias voluptatibus deserunt! Qui incidunt voluptatum beatae earum commodi dolore asperiores reprehenderit. Esse ipsa nemo non, facere iure quas quo obcaecati deserunt, cupiditate alias impedit. Quos, placeat voluptatem fugiat ullam quas maxime molestias, cupiditate, perspiciatis repellendus commodi aut temporibus laudantium in doloribus. Dolore iste at facilis totam pariatur numquam. Voluptas ipsum excepturi aliquid est, adipisci minima! Dolorum aperiam sed rem deserunt, voluptate incidunt repudiandae suscipit volupt as, inventore assumenda autem quos blanditiis debitis.`,
        image: ["/vendor.svg", "/vendor2.svg", "/vendor3.svg"],
      },
    },
    {
      id: uuidv4(),
      vendors: {
        title: "Clarica Catering",
        address: "Zone 6",
        state: "Abuja",
        offers: [
          "Full-Service",
          "Buffet-Style",
          "Family-Style",
          "Plated Meals",
        ],
        rating: 2.6,
        review: 6,
        eventsDone: 4,
        phoneNumber: "+234 567 8901 234",
        contactPerson: "Collins Adewole",
        contactRole: "Project Manager",
        contactMail: "jussejack43@gmail.com",
        contactImage: contact,
        fullAddress: "No. 14, Morris Plaza Avenue, Area 1, Abuja",
        workTime:
          "Mondays, Tuesdays, Wednesdays, Thursdays, Fridays, Saturdays",
        eventCoverage: true,
        studioShot: true,
        preeventShot: true,
        lifestyle: true,
        equipmentRental: false,
        packages: [
          {
            id: uuidv4(),
            plan: "Basic",
            offers: [
              "Nam pretium ultricies dui eu imperdiet.",
              "Vivamus at lorem fringilla massa auctor pretium a sit amet mi.",
              "Fusce id mattis massa, a pharetra erat. Etiam fringilla quis dui id eleifend.",
              "Sed quis elit enim salutaris.",
            ],
            price: "80,000"
          },
          {
            id: uuidv4(),
            plan: "Standard",
            offers: [
              "Nam pretium ultricies dui eu imperdiet.",
              "Vivamus at lorem fringilla massa auctor pretium a sit amet mi.",
              "Fusce id mattis massa, a pharetra erat. Etiam fringilla quis dui id eleifend.",
              "Sed quis elit enim.",
            ],
            price: "150,000"
          },
          {
            id: uuidv4(),
            plan: "Premium",
            offers: [
              "Nam pretium ultricies dui eu imperdiet.",
              "Vivamus at lorem fringilla massa auctor pretium a sit amet mi.",
              "Fusce id mattis massa, a pharetra erat. Etiam fringilla quis dui id eleifend.",
              "Sed quis elit enim.",
            ],
            price: "250,000"
          },
        ],
        summary:
          "Duis bibendum tristique aliquam. Quisque suscipit finibus nibh. Fusceac ultrices neque. Nam ut viverra purus.",
        about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea sapiente culpa exercitationem ex asperiores aut. Sapiente qui quidem quibusdam? Commodi deserunt voluptatem porro nobis inventore cum eius eum explicabo? Earum minus cupiditate repellat.<br /> Animi, veritatis dolorem molestiae, magni odio assumenda, laudantium autem voluptates fugiat necessitatibus saepe! Aperiam dolorum officiis, dolore, minus nemo eius praesentium quas obcaecati, mollitia asperiores facere. Adipisci libero, alias culpa similique quia dolores. <br /><br />Vitae assumenda animi error ad? Culpa repudiandae consequuntur aut unde excepturi alias voluptatibus deserunt! Qui incidunt voluptatum beatae earum commodi dolore asperiores reprehenderit. Esse ipsa nemo non, facere iure quas quo obcaecati deserunt, cupiditate alias impedit. Quos, placeat voluptatem fugiat ullam quas maxime molestias, cupiditate, perspiciatis repellendus commodi aut temporibus laudantium in doloribus. Dolore iste at facilis totam pariatur numquam. Voluptas ipsum excepturi aliquid est, adipisci minima! Dolorum aperiam sed rem deserunt, voluptate incidunt repudiandae suscipit volupt as, inventore assumenda autem quos blanditiis debitis.`,
        image: ["/vendor2.svg", "/vendor3.svg", "/vendor.svg"],
      },
    },
    {
      id: uuidv4(),
      vendors: {
        title: "Creative Studio",
        address: "Area 1",
        state: "Abuja",
        offers: ["Event Coverage", "Photo Booth", "Pre-Event"],
        rating: 2.6,
        review: 6,
        eventsDone: 4,
        phoneNumber: "+234 567 8901 234",
        contactPerson: "Collins Adewole",
        contactRole: "Project Manager",
        contactMail: "jussejack43@gmail.com",
        contactImage: contact,
        fullAddress: "No. 14, Morris Plaza Avenue, Area 1, Abuja",
        workTime:
          "Mondays, Tuesdays, Wednesdays, Thursdays, Fridays, Saturdays",
        eventCoverage: true,
        studioShot: true,
        preeventShot: true,
        lifestyle: true,
        equipmentRental: false,
        packages: [
          {
            id: uuidv4(),
            plan: "Basic",
            offers: [
              "Nam pretium ultricies dui eu imperdiet.",
              "Vivamus at lorem fringilla massa auctor pretium a sit amet mi.",
              "Fusce id mattis massa, a pharetra erat. Etiam fringilla quis dui id eleifend.",
              "Sed quis elit enim salutaris.",
            ],
            price: "80,000"
          },
          {
            id: uuidv4(),
            plan: "Standard",
            offers: [
              "Nam pretium ultricies dui eu imperdiet.",
              "Vivamus at lorem fringilla massa auctor pretium a sit amet mi.",
              "Fusce id mattis massa, a pharetra erat. Etiam fringilla quis dui id eleifend.",
              "Sed quis elit enim.",
            ],
            price: "150,000"
          },
          {
            id: uuidv4(),
            plan: "Premium",
            offers: [
              "Nam pretium ultricies dui eu imperdiet.",
              "Vivamus at lorem fringilla massa auctor pretium a sit amet mi.",
              "Fusce id mattis massa, a pharetra erat. Etiam fringilla quis dui id eleifend.",
              "Sed quis elit enim.",
            ],
            price: "250,000"
          },
        ],
        summary:
          "Duis bibendum tristique aliquam. Quisque suscipit finibus nibh. Fusceac ultrices neque. Nam ut viverra purus.",
        about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea sapiente culpa exercitationem ex asperiores aut. Sapiente qui quidem quibusdam? Commodi deserunt voluptatem porro nobis inventore cum eius eum explicabo? Earum minus cupiditate repellat.<br /> Animi, veritatis dolorem molestiae, magni odio assumenda, laudantium autem voluptates fugiat necessitatibus saepe! Aperiam dolorum officiis, dolore, minus nemo eius praesentium quas obcaecati, mollitia asperiores facere. Adipisci libero, alias culpa similique quia dolores. <br /><br />Vitae assumenda animi error ad? Culpa repudiandae consequuntur aut unde excepturi alias voluptatibus deserunt! Qui incidunt voluptatum beatae earum commodi dolore asperiores reprehenderit. Esse ipsa nemo non, facere iure quas quo obcaecati deserunt, cupiditate alias impedit. Quos, placeat voluptatem fugiat ullam quas maxime molestias, cupiditate, perspiciatis repellendus commodi aut temporibus laudantium in doloribus. Dolore iste at facilis totam pariatur numquam. Voluptas ipsum excepturi aliquid est, adipisci minima! Dolorum aperiam sed rem deserunt, voluptate incidunt repudiandae suscipit volupt as, inventore assumenda autem quos blanditiis debitis.`,
        image: ["/vendor.svg", "/vendor2.svg", "/vendor3.svg"],
      },
    },
    {
      id: uuidv4(),
      vendors: {
        title: "Clarica Catering",
        address: "Zone 6",
        state: "Abuja",
        offers: [
          "Full-Service",
          "Buffet-Style",
          "Family-Style",
          "Plated Meals",
        ],
        rating: 2.6,
        review: 6,
        eventsDone: 4,
        phoneNumber: "+234 567 8901 234",
        contactPerson: "Collins Adewole",
        contactRole: "Project Manager",
        contactMail: "jussejack43@gmail.com",
        contactImage: contact,
        fullAddress: "No. 14, Morris Plaza Avenue, Area 1, Abuja",
        workTime:
          "Mondays, Tuesdays, Wednesdays, Thursdays, Fridays, Saturdays",
        eventCoverage: true,
        studioShot: true,
        preeventShot: true,
        lifestyle: true,
        equipmentRental: false,
        packages: [
          {
            id: uuidv4(),
            plan: "Basic",
            offers: [
              "Nam pretium ultricies dui eu imperdiet.",
              "Vivamus at lorem fringilla massa auctor pretium a sit amet mi.",
              "Fusce id mattis massa, a pharetra erat. Etiam fringilla quis dui id eleifend.",
              "Sed quis elit enim salutaris.",
            ],
            price: "80,000"
          },
          {
            id: uuidv4(),
            plan: "Standard",
            offers: [
              "Nam pretium ultricies dui eu imperdiet.",
              "Vivamus at lorem fringilla massa auctor pretium a sit amet mi.",
              "Fusce id mattis massa, a pharetra erat. Etiam fringilla quis dui id eleifend.",
              "Sed quis elit enim.",
            ],
            price: "150,000"
          },
          {
            id: uuidv4(),
            plan: "Premium",
            offers: [
              "Nam pretium ultricies dui eu imperdiet.",
              "Vivamus at lorem fringilla massa auctor pretium a sit amet mi.",
              "Fusce id mattis massa, a pharetra erat. Etiam fringilla quis dui id eleifend.",
              "Sed quis elit enim.",
            ],
            price: "250,000"
          },
        ],
        summary:
          "Duis bibendum tristique aliquam. Quisque suscipit finibus nibh. Fusceac ultrices neque. Nam ut viverra purus.",
        about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea sapiente culpa exercitationem ex asperiores aut. Sapiente qui quidem quibusdam? Commodi deserunt voluptatem porro nobis inventore cum eius eum explicabo? Earum minus cupiditate repellat.<br /> Animi, veritatis dolorem molestiae, magni odio assumenda, laudantium autem voluptates fugiat necessitatibus saepe! Aperiam dolorum officiis, dolore, minus nemo eius praesentium quas obcaecati, mollitia asperiores facere. Adipisci libero, alias culpa similique quia dolores. <br /><br />Vitae assumenda animi error ad? Culpa repudiandae consequuntur aut unde excepturi alias voluptatibus deserunt! Qui incidunt voluptatum beatae earum commodi dolore asperiores reprehenderit. Esse ipsa nemo non, facere iure quas quo obcaecati deserunt, cupiditate alias impedit. Quos, placeat voluptatem fugiat ullam quas maxime molestias, cupiditate, perspiciatis repellendus commodi aut temporibus laudantium in doloribus. Dolore iste at facilis totam pariatur numquam. Voluptas ipsum excepturi aliquid est, adipisci minima! Dolorum aperiam sed rem deserunt, voluptate incidunt repudiandae suscipit volupt as, inventore assumenda autem quos blanditiis debitis.`,
        image: ["/vendor2.svg", "/vendor3.svg", "/vendor.svg"],
      },
    },
  ],
};

const vendorsSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {},
});

export default vendorsSlice.reducer;
