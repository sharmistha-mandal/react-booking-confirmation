import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div
        className="hero__img"
        style={{
          backgroundImage: "url(images/header-background.jpg)",
          backgroundPosition: "right 42%",
          backgroundRepeat: "no-repeat",
          height: "270px",
          backgroundSize: "100%",
        }}
      ></div>
      <div className="hero__titles">
        <h1 className="hero__titles--main">Two Night Hotel Break for Two</h1>
        <div className="hero__titles--cta">
          <img
            className="cta-icon"
            src="images/green-tick.svg"
            alt="submit status true"
          />
          <span className="cta-text">Your stay has been booked</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
