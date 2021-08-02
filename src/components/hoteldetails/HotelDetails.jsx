import "./hoteldetails.scss";

const HotelDetails = () => {
  return (
    <div className="hoteldetails">
      <div className="hoteldetails__left">
        <img src="images/hotel-thumbnail.jpg" alt="Makeney Hall Hotel" />
      </div>
      <div className="hoteldetails__right">
        <div className="hotel-title">
          <h3>Two Night Break for Two at Makeney Hall Hotel </h3>
          <span className="star-rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </span>
        </div>
        <div className="hotel-direction flex">
          <img src="images/location-pin.svg" alt="location pin" />
          <span className="font-sm font-faded">
            1A Sutherland Street, Area Name, Name of Town, County Name, SW1V 4LD
          </span>
        </div>
      </div>
    </div>
    
  );
};

export default HotelDetails;
