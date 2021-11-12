import React from "react";

const SightseeingCard = ({ sightseeingSpot }) => {
  return (
    <>
      {sightseeingSpot.map(({ Name, Picture, id }) => {
        return (
          <section className="wrap-cards" key={id}>
            <div className="card-container">
              <div className="name-container"></div>
              <p className="sightseeing-name">{Name}</p>
              <img
                src={Picture.PictureUrl1}
                alt="sightseeing-images"
                className="sightseeing-card"
              />
            </div>
          </section>
        );
      })}
      <p>Hiiiii</p>
    </>
  );
};

export default SightseeingCard;
