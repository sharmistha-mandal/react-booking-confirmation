import BookingDetails from "../bookingdetails/BookingDetails";
import HotelDetails from "../hoteldetails/HotelDetails";
import "./booking.scss";

const Booking = () => {
  return (
    <section className="booking container">
      <div className="booking__container">
        <div className="booking__container--message">
          <h2>Booking confirmed</h2>
          <p>Your booking has been made, please see details below.</p>
          <p>
            Your booking confirmation number is <b>RLD123456</b>.
          </p>
          <p>
            Please keep a record of this number for any communication with our
            customer service team.
          </p>
        </div>

        <div className="booking__container--subtitle">
          <h3>YOUR BOOKING DETAILS</h3>
        </div>

        <HotelDetails />

        <div className="booking__container--line"></div>

        <BookingDetails />

        <div className="booking__container--info">
        <p>
          Your booking confirmation was sent to <a href="mailto:example@email.com">example@email.com</a> at time of
          booking.
        </p>
        <p>
          Please check any junk or spam folders, alternatively resend your
          booking confirmation email. Please note this can only be sent to the
          original email address which was entered at time of booking.
        </p>
        </div>
        
      </div>
    </section>
  );
};

export default Booking;
