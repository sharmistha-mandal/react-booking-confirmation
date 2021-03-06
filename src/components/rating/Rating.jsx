import { useState, useEffect } from "react";
import RatingList from "../ratinglist/RatingList";
import "./rating.scss";
import { Emojis } from "../../emoji-data";

const Rating = () => {
  const [rating, setRating] = useState();
  const [emoji, setEmoji] = useState(Emojis.NoRating);
  const [error, setError] = useState(false);
  const [submit, setSubmit] = useState(false);

  const ratinglist = [
    {
      id: 1,
      text: "1",
    },
    {
      id: 2,
      text: "2",
    },
    {
      id: 3,
      text: "3",
    },
    {
      id: 4,
      text: "4",
    },
    {
      id: 5,
      text: "5",
    },
    {
      id: 6,
      text: "6",
    },
    {
      id: 7,
      text: "7",
    },
    {
      id: 8,
      text: "8",
    },
    {
      id: 9,
      text: "9",
    },
    {
      id: 10,
      text: "10",
    },
  ];

  useEffect(() => {
    switch (rating) {
      case 1:
      case 2:
        setEmoji(Emojis.Disappointed);
        break;
      case 3:
      case 4:
        setEmoji(Emojis.Sad);
        break;
      case 5:
      case 6:
        setEmoji(Emojis.Ok);
        break;
      case 7:
      case 8:
        setEmoji(Emojis.Happy);
        break;
      case 9:
      case 10:
        setEmoji(Emojis.Excellent);
        break;
      default:
        setEmoji(Emojis.NoRating);
    }
  }, [rating]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating) {
      setError(false);
      setSubmit(true);
    }
    else setError(true);
  };

  return (
    <section className="rating container">
      <div className="rating__container">
        {submit ? (
          <div className="thanks flex">
            <h2>Thank You</h2>
            <div className="thanks__desc">
            <p>Your feedback help us to improve!</p>
            <p>
              if you need any further feedback, please feel free to <a className="action-link" href="https://help.redletterdays.co.uk/hc/en-us">contact us</a> 
            </p>
            </div>
          </div>
        ) : (
          <div className="feedback flex">
            <div className="feedback__top">
              <h2>How did we do?</h2>
              <p>
                On a scale 0f 1-10, how easy did you find booking your hotel
                experience?
              </p>
            </div>
            <div className="feedback__middle">
              <img className="emoji" src={emoji.img} alt={emoji.alt} />
              <div className="rating-list">
                {ratinglist.map((item) => (
                  <RatingList
                    key={item.id}
                    text={item.text}
                    active={rating === item.id}
                    setRating={setRating}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
            <div className="feedback__bottom">
              <button className="cta-btn" onClick={handleSubmit}>
                Submit
              </button>
              {error && (
                <div className="feedback__bottom-error">
                  Please choose a rating
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Rating;
