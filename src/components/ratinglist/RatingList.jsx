import './ratinglist.scss';

const RatingList = ({ id, active, setRating ,setHover}) => {
  return (
    <div 
      className={active ? "rating-list__item active" : "rating-list__item"}
      onClick={() => setRating(id) }
      onMouseOver={() => setHover(id)}
      onMouseLeave={()=> active ? setHover(id): setHover()}
    >
      {id}
    </div>
  );
};

export default RatingList;
