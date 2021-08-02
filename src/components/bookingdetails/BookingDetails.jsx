import "./bookingdetails.scss";

const BookingDetails = () => {
  return (
    <div className="bookingdetails">
      <div className="bookingdetails__row">
        <div className="bookingdetails__row--col flex">
          <span className="mt-1 font-faded">Check-in </span>
          <span className="mb">12/02/21</span>
        </div>
        <div className="bookingdetails__row--col flex">
          <span className="mt-1 font-faded">Check Out </span>
          <span className="mb">15/02/21</span>
        </div>
        <div className="bookingdetails__row--col flex">
          <span className="mt-1 font-faded">Number of Night</span>
          <span className="mb">2</span>
        </div>
      </div>

      <div className="booking__container--line"></div>

      <div className="bookingdetails__row">
        <div className="bookingdetails__row--col flex">
          <span className="mt-1 font-faded">Board type </span>
          <span className="mb">Breakfast-Continental Breakfast</span>
        </div>
        <div className="bookingdetails__row--col flex">
          <span className="mt-1 font-faded">Guests </span>
          <span className="mb">2 adults</span>
        </div>
        <div className="bookingdetails__row--col flex">
          <span className="mt-1 font-faded">Number of Rooms</span>
          <span className="mb">1</span>
        </div>
      </div>

      <div className="booking__container--line"></div>

      <div className="bookingdetails__total my">
        <span className="bookingdetails__total--title"> Total </span>
        <span className="bookingdetails__total--price">£25</span>
      </div>

      <div className="booking__container--line"></div>
    </div>
  );
};

export default BookingDetails;
