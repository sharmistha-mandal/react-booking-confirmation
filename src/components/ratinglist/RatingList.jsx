import './ratinglist.scss';

const RatingList = ({ id, active, setRating }) => {
  return (
    <div 
      className={active ? "rating-list__item active" : "rating-list__item"}
      onClick={() => setRating(id) }
    >
      {id}
    </div>
  );
};

export default RatingList;
