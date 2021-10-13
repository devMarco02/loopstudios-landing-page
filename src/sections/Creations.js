import { useState, useEffect } from "react";

import img from "./../images/mobile/image-deep-earth.jpg"; //image for auto sizing
import imgDesk from "./../images/desktop/image-deep-earth.jpg";

const Creations = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const setSize = () => {
      setWidth(window.innerWidth);
    };

    if (width >= 1024) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }

    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
  }, [width]);

  return (
    <section className="creations">
      <div className="container creations__container">
        <h2 className="creations__title section-title">Our creations</h2>
        <button className="creations__btn">See all</button>
        <ul className="creations__list">
          <li className="creations__item creations__item--first">
            <img
              className="creations__img"
              src={isDesktop ? imgDesk : img}
              alt=""
            />
            <h3 className="creations__item-title">
              Deep
              <br />
              earth
            </h3>
          </li>
          <li className="creations__item creations__item--second">
            <img
              className="creations__img"
              src={isDesktop ? imgDesk : img}
              alt=""
            />
            <h3 className="creations__item-title">
              Night
              <br />
              arcade
            </h3>
          </li>
          <li className="creations__item creations__item--third">
            <img className="creations__img" src={img} alt="" />
            <h3 className="creations__item-title">
              Soccer
              <br />
              team VR
            </h3>
          </li>
          <li className="creations__item creations__item--fourth">
            <img
              className="creations__img"
              src={isDesktop ? imgDesk : img}
              alt=""
            />
            <h3 className="creations__item-title">
              The
              <br />
              grid
            </h3>
          </li>
          <li className="creations__item creations__item--fifth">
            <img
              className="creations__img"
              src={isDesktop ? imgDesk : img}
              alt=""
            />
            <h3 className="creations__item-title">
              From up
              <br />
              above VR
            </h3>
          </li>
          <li className="creations__item creations__item--sixth">
            <img
              className="creations__img"
              src={isDesktop ? imgDesk : img}
              alt=""
            />
            <h3 className="creations__item-title">
              Pocket
              <br />
              borealis
            </h3>
          </li>
          <li className="creations__item creations__item--seventh">
            <img
              className="creations__img"
              src={isDesktop ? imgDesk : img}
              alt=""
            />
            <h3 className="creations__item-title">
              The
              <br />
              curiosity
            </h3>
          </li>
          <li className="creations__item creations__item--eighth">
            <img
              className="creations__img"
              src={isDesktop ? imgDesk : img}
              alt=""
            />
            <h3 className="creations__item-title">
              Make it
              <br />
              fisheye
            </h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Creations;
