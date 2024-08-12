// Incomplete

import { PageNav } from "../components";

const Cart = () => {
  return (
    <div className="align-element space-y-5">
      <PageNav />
      <div className="text-4xl font-semibold">Reservation Cart</div>
      <div className="grid gap-3 lg:grid-cols-12">
        <div className="flex lg:col-span-8">
          <div className="flex-1">
            <div className="font-semibold bg-base-200 pl-2 py-1 rounded-sm">Details</div>
            <div></div>
          </div>
          <div className="w-48">
            <div className="font-semibold bg-base-200 pl-2 py-1 rounded-sm">Duration</div>
            <div></div>
          </div>
          <div className="w-48">
            <div className="font-semibold bg-base-200 pl-2 py-1 rounded-sm">
              Cost (<span className="italic">per day</span>)
            </div>
            <div></div>
          </div>
        </div>
        <div className="lg:col-span-4 space-y-2">
          <div className="border-b py-1 font-semibold">Reservation Summary</div>
          <div>Total Service</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
