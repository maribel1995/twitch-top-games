import React from "react";

const FakeCard = ({ page, isMobile }) => {
  const size = {
    topGames: {
      mobile: {
        width: 300,
        height: 440,
      },
      desktop: {
        width: 480,
        height: 600,
      },
    },
    streams: {
      mobile: {
        width: 335,
        height: 300,
      },
      desktop: {
        width: 370,
        height: 300,
      },
    },
  };
  const screen = isMobile ? "mobile" : "desktop";
  const screenSize = size[page][screen];
  return (
    <div className="game">
      <div
        className="placeHolderTitle"
        style={{
          width: screenSize.width - 80,
          height: 20,
          display: page === "topGames" ? "block" : "none",
        }}
      ></div>
      <div
        className="placeHolderFigure"
        style={{ width: screenSize.width, height: screenSize.height }}
      ></div>
      <div
        className="placeHolderStreamTiTle"
        style={{
          width: screenSize.width - 80,
          height: 20,
          display: page === "streams" ? "block" : "none",
        }}
      ></div>
    </div>
  );
};
export default FakeCard;
