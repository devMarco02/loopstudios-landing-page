import img from "./../images/mobile/image-interactive.jpg";

const Branding = () => {
  return (
    <section className="branding">
      <div className="container branding__container">
        <img className="branding__img" src={img} alt="" />
        <div className="branding__text-container">
          <h2 className="branding__title section-title">
            The leader in interactive VR
          </h2>
          <p className="branding__info">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Branding;
