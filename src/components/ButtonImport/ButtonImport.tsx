import React, { FC } from "react";
import {
  Button,
  Icon,
  Wrapper,
  ImageWrapper,
  CarouselWrapper,
} from "./ButtonImportStyle";
import Carousel from "react-elastic-carousel";

interface ButtonImportInterface {
  ImportingHandler: () => void;
  shouldAnimate: (bool: boolean) => void;
}

const ButtonImport: FC<ButtonImportInterface> = ({
  ImportingHandler,
  shouldAnimate,
}) => {
  let breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 250, itemsToShow: 2, itemsToScroll: 1 },
    { width: 350, itemsToShow: 3, itemsToScroll: 2 },
    { width: 500, itemsToShow: 4, itemsToScroll: 3 },
    { width: 1150, itemsToShow: 5, itemsToScroll: 4 },
    { width: 1750, itemsToShow: 6, itemsToScroll: 5  },
  ];

  return (
    <Wrapper>
      <Carousel
        breakPoints={breakPoints}
        isRTL={false}
        itemsToShow={4}
        itemsToScroll={4}
      >
        <ImageWrapper
          style={{
            backgroundImage:
              'url("https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg")',
          }}
        />
        <ImageWrapper
          style={{
            backgroundImage:
              'url("data:image/jpeg;base64,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")',
          }}
        />
        <ImageWrapper
          style={{
            backgroundImage:
              'url("https://www.wprost.pl/_thumb/e9/ab/4f61c042bbxxe74eac042ae16cba.jpeg")',
          }}
        />
        <ImageWrapper
          style={{
            backgroundImage:
              'url("https://www.wprost.pl/_thumb/4b/47/715005c22f8ddca19cf5aa170533.jpeg")',
          }}
        />
        <ImageWrapper
          style={{
            backgroundImage:
              'url("https://archiwum.allegro.pl/image//imagesNEW/big/3c611e10b1ba6021b4d574dfc6faa02c1492b14d8881f06f28454f9e0b775f5e")',
          }}
        />
        <ImageWrapper
          style={{
            backgroundImage:
              'url("https://hodowla-perlowyraj.pl/wp-content/uploads/2015/01/onas.jpg")',
          }}
        />
        <ImageWrapper
          style={{
            backgroundImage:
              'url("https://static.fajnyzwierzak.pl/media/uploads/media_image/original/wpis/134/charakter-kota-norweskiego.jpg")',
          }}
        />
        <ImageWrapper
          style={{
            backgroundImage:
              'url("https://strefapupila.com/upload/multitrade/blog//akita-inu.jpg")',
          }}
        />
        <ImageWrapper
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/originals/96/6f/17/966f178e49b2a58d35458a961f11c370.jpg")',
          }}
        />
      </Carousel>

      <Button
        onClick={() => {
          ImportingHandler();
          shouldAnimate(true);
        }}
      >
        <Icon />
        <p>Import Image</p>
      </Button>
    </Wrapper>
  );
};

export default ButtonImport;
