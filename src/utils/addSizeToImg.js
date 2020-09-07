export const addSizeToImg = (url, isMobile, page) => {
  const size = {
    topGames: {
      mobile: {
        width: 300,
        height: 440,
      },
      desktop: {
        width: 400,
        height: 600,
      },
    },
    streams: {
      mobile: {
        width: 200,
        height: 300,
      },
      desktop: {
        width: 200,
        height: 300,
      },
    },
  };

  const mobileSize = size[page].mobile;
  const desktopSize = size[page].desktop;
  const widthReplaced = url.replace(
    /{width}/,
    isMobile ? mobileSize.width : desktopSize.width
  );
  const heightReplaced = widthReplaced.replace(
    /{height}/,
    isMobile ? mobileSize.height : desktopSize.height
  );
  return heightReplaced;
};
