import './ratinglist.scss';

const RatingList = ({ id, text, active, setRating }) => {
  return (
    <div 
      className={active ? "rating-list__item active" : "rating-list__item"}
      onClick={() => setRating(id) }
    >
      {text}
    </div>
  );
};

export default RatingList;
