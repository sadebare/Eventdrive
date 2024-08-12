import { Link, useParams } from "react-router-dom";

const PageNav = ({
  page,
  eventCenter,
  venueType,
  venueName,
  place,
  vendorName,
}) => {
  const { state } = useParams();

  return (
    <div className="breadcrumbs text-sm my-2">
      <ul>
        <li>
          <Link to="/" className="text-yellow-500 font-semibold">
            Home
          </Link>
        </li>
        <li>
          <span className="text-yellow-500 font-semibold">
            <Link to={`/${page}s${page === 'Venue' ? `/${state}` : ''}`}>{page}</Link>
          </span>
        </li>
        {page !== "Vendors" && (
          <>
            {eventCenter ? (
              <li>
                <Link
                  to={`/venues/${eventCenter}`}
                  className="text-yellow-500 font-semibold"
                >
                  {eventCenter}
                </Link>
              </li>
            ) : place ? (
              <li className="capitalize text-yellow-500">{place}</li>
            ) : (
              <li className="capitalize">{state}</li>
            )}
            {(venueType || vendorName) && (
              <>
                {venueType && (
                  <li>
                    <span className="text-yellow-500 font-semibold">
                      {venueType}
                    </span>
                  </li>
                )}
                <li className="font-bold tracking-wide">
                  {venueName || vendorName}
                </li>
              </>
            )}
          </>
        )}
      </ul>
    </div>
  );
};

export default PageNav;
