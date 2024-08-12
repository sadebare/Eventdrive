import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  isLoading: false,
  venues: [
    {
      id: uuidv4(),
      events: {
        title: "Gateway Hotels and Events",
        address: "Area 1",
        state: "Abuja",
        venue: "Hotel",
        rating: 4.3,
        review: 3,
        guest: 300,
        summary:
          "Duis bibendum tristique aliquam. Quisque suscipit finibus nibh. Fusceac ultrices neque. Nam ut viverra purus.",
        about: 
         `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea sapiente culpa exercitationem ex asperiores aut. Sapiente qui quidem quibusdam? Commodi deserunt voluptatem porro nobis inventore cum eius eum explicabo? Earum minus cupiditate repellat.<br /> Animi, veritatis dolorem molestiae, magni odio assumenda, laudantium autem voluptates fugiat necessitatibus saepe! Aperiam dolorum officiis, dolore, minus nemo eius praesentium quas obcaecati, mollitia asperiores facere. Adipisci libero, alias culpa similique quia dolores. <br /><br />Vitae assumenda animi error ad? Culpa repudiandae consequuntur aut unde excepturi alias voluptatibus deserunt! Qui incidunt voluptatum beatae earum commodi dolore asperiores reprehenderit. Esse ipsa nemo non, facere iure quas quo obcaecati deserunt, cupiditate alias impedit. Quos, placeat voluptatem fugiat ullam quas maxime molestias, cupiditate, perspiciatis repellendus commodi aut temporibus laudantium in doloribus. Dolore iste at facilis totam pariatur numquam. Voluptas ipsum excepturi aliquid est, adipisci minima! Dolorum aperiam sed rem deserunt, voluptate incidunt repudiandae suscipit volupt as, inventore assumenda autem quos blanditiis debitis.`,
        cost: "NGN 3,050,000.00",
        eventDescription: "Nulla velit augue, ornare a nisi tincim mauris.",
        guestDescription: "Accomodates minimum of 50 guests and maximum of 300 guests",
        fullAddress: "No. 5 Kehinde Avenue, Area 1, Abuja",
        workTime: "Available 24/7",
        image: ["/event.svg", "/event2.svg", "/event3.svg"],
        indoorSeating: "Allowed",
        outdoorSeating: "Allowed",
        backup: "Provided",
        indoorCatering: "Offered",
        internet: "Provided",
        dj: "Not Provided",
        parking: "Provided"
      },
    },
    {
      id: uuidv4(),
      events: {
        title: "Heavens Gate",
        address: "Lugbe",
        state: "Abuja",
        venue: "Hotel",
        rating: 4.3,
        review: 3,
        guest: 300,
        summary:
          "Duis bibendum tristique aliquam. Quisque suscipit finibus nibh. Fusceac ultrices neque. Nam ut viverra purus.",
        about: 
         `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea sapiente culpa exercitationem ex asperiores aut. Sapiente qui quidem quibusdam? Commodi deserunt voluptatem porro nobis inventore cum eius eum explicabo? Earum minus cupiditate repellat.<br /> Animi, veritatis dolorem molestiae, magni odio assumenda, laudantium autem voluptates fugiat necessitatibus saepe! Aperiam dolorum officiis, dolore, minus nemo eius praesentium quas obcaecati, mollitia asperiores facere. Adipisci libero, alias culpa similique quia dolores. <br /><br />Vitae assumenda animi error ad? Culpa repudiandae consequuntur aut unde excepturi alias voluptatibus deserunt! Qui incidunt voluptatum beatae earum commodi dolore asperiores reprehenderit. Esse ipsa nemo non, facere iure quas quo obcaecati deserunt, cupiditate alias impedit. Quos, placeat voluptatem fugiat ullam quas maxime molestias, cupiditate, perspiciatis repellendus commodi aut temporibus laudantium in doloribus. Dolore iste at facilis totam pariatur numquam. Voluptas ipsum excepturi aliquid est, adipisci minima! Dolorum aperiam sed rem deserunt, voluptate incidunt repudiandae suscipit volupt as, inventore assumenda autem quos blanditiis debitis.`,
        cost: "NGN 3,050,000.00",
        eventDescription: "Nulla velit augue, ornare a nisi tincim mauris.",
        guestDescription: "Accomodates minimum of 50 guests and maximum of 300 guests",
        fullAddress: "No. 5 Kehinde Avenue, Area 1, Abuja",
        workTime: "Available 24/7",
        image: ["/event.svg", "/event2.svg", "/event3.svg"],
        indoorSeating: "Allowed",
        outdoorSeating: "Allowed",
        backup: "Provided",
        indoorCatering: "Offered",
        internet: "Provided",
        dj: "Not Provided",
        parking: "Provided"
      },
    },
    {
      id: uuidv4(),
      events: {
        title: "Halo Hotels and Lounges",
        address: "Kubwa",
        state: "Abuja",
        venue: "Hotel",
        rating: 4.3,
        review: 3,
        guest: 300,
        summary:
          "Duis bibendum tristique aliquam. Quisque suscipit finibus nibh. Fusceac ultrices neque. Nam ut viverra purus.",
        about: 
         `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea sapiente culpa exercitationem ex asperiores aut. Sapiente qui quidem quibusdam? Commodi deserunt voluptatem porro nobis inventore cum eius eum explicabo? Earum minus cupiditate repellat.<br /> Animi, veritatis dolorem molestiae, magni odio assumenda, laudantium autem voluptates fugiat necessitatibus saepe! Aperiam dolorum officiis, dolore, minus nemo eius praesentium quas obcaecati, mollitia asperiores facere. Adipisci libero, alias culpa similique quia dolores. <br /><br />Vitae assumenda animi error ad? Culpa repudiandae consequuntur aut unde excepturi alias voluptatibus deserunt! Qui incidunt voluptatum beatae earum commodi dolore asperiores reprehenderit. Esse ipsa nemo non, facere iure quas quo obcaecati deserunt, cupiditate alias impedit. Quos, placeat voluptatem fugiat ullam quas maxime molestias, cupiditate, perspiciatis repellendus commodi aut temporibus laudantium in doloribus. Dolore iste at facilis totam pariatur numquam. Voluptas ipsum excepturi aliquid est, adipisci minima! Dolorum aperiam sed rem deserunt, voluptate incidunt repudiandae suscipit volupt as, inventore assumenda autem quos blanditiis debitis.`,
        cost: "NGN 8,000,000.00",
        eventDescription: "Nulla velit augue, ornare a nisi tincim mauris.",
        guestDescription: "Accomodates minimum of 50 guests and maximum of 300 guests",
        fullAddress: "No. 5 Kehinde Avenue, Area 1, Abuja",
        workTime: "Available 24/7",
        image: ["/event.svg", "/event2.svg", "/event3.svg"],
        indoorSeating: "Allowed",
        outdoorSeating: "Allowed",
        backup: "Provided",
        indoorCatering: "Offered",
        internet: "Provided",
        dj: "Not Provided",
        parking: "Provided"
      },
    },
    {
      id: uuidv4(),
      events: {
        title: "Gateway Hotels and Events",
        address: "Area 1",
        state: "Abuja",
        venue: "Hotel",
        rating: 4.3,
        review: 3,
        guest: 300,
        summary:
          "Duis bibendum tristique aliquam. Quisque suscipit finibus nibh. Fusceac ultrices neque. Nam ut viverra purus.",
        about: 
         `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea sapiente culpa exercitationem ex asperiores aut. Sapiente qui quidem quibusdam? Commodi deserunt voluptatem porro nobis inventore cum eius eum explicabo? Earum minus cupiditate repellat.<br /> Animi, veritatis dolorem molestiae, magni odio assumenda, laudantium autem voluptates fugiat necessitatibus saepe! Aperiam dolorum officiis, dolore, minus nemo eius praesentium quas obcaecati, mollitia asperiores facere. Adipisci libero, alias culpa similique quia dolores. <br /><br />Vitae assumenda animi error ad? Culpa repudiandae consequuntur aut unde excepturi alias voluptatibus deserunt! Qui incidunt voluptatum beatae earum commodi dolore asperiores reprehenderit. Esse ipsa nemo non, facere iure quas quo obcaecati deserunt, cupiditate alias impedit. Quos, placeat voluptatem fugiat ullam quas maxime molestias, cupiditate, perspiciatis repellendus commodi aut temporibus laudantium in doloribus. Dolore iste at facilis totam pariatur numquam. Voluptas ipsum excepturi aliquid est, adipisci minima! Dolorum aperiam sed rem deserunt, voluptate incidunt repudiandae suscipit volupt as, inventore assumenda autem quos blanditiis debitis.`,
        cost: "NGN 1,500,000.00",
        eventDescription: "Nulla velit augue, ornare a nisi tincim mauris.",
        guestDescription: "Accomodates minimum of 50 guests and maximum of 300 guests",
        fullAddress: "No. 5 Kehinde Avenue, Area 1, Abuja",
        workTime: "Available 24/7",
        image: ["/event.svg", "/event2.svg", "/event3.svg"],
        indoorSeating: "Allowed",
        outdoorSeating: "Allowed",
        backup: "Provided",
        indoorCatering: "Offered",
        internet: "Provided",
        dj: "Not Provided",
        parking: "Provided"
      },
    },
  ],
};

const venuesSlice = createSlice({
  name: "venues",
  initialState,
  reducers: {},
});

export default venuesSlice.reducer;
