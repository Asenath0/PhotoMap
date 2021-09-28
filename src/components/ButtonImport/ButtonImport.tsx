import React, {FC} from "react";
import { Button, Icon, Wrapper, ImageWrapper, CarouselWrapper } from "./ButtonImportStyle";
import { Carousel } from '@trendyol-js/react-carousel';

interface ButtonImportInterface {
  ImportingHandler: () => void;
  shouldAnimate: (bool: boolean) => void;
}

const ButtonImport: FC<ButtonImportInterface> = ({ ImportingHandler, shouldAnimate }) => {
  return (
    <Wrapper>
      <Button onClick={() => {ImportingHandler(); shouldAnimate(true)}}><Icon /><p>Import Image</p></Button>

      <CarouselWrapper >
      <Carousel show={10} slide={3} swiping={true}>
        <ImageWrapper style={{backgroundImage: 'url("https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg")'}} />
        <ImageWrapper style={{backgroundImage: 'url("https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg")'}} />
        <ImageWrapper style={{backgroundImage: 'url("https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg")'}} />
        <ImageWrapper style={{backgroundImage: 'url("https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg")'}} />
        <ImageWrapper style={{backgroundImage: 'url("https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg")'}} />
        <ImageWrapper style={{backgroundImage: 'url("https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg")'}} />
        <ImageWrapper style={{backgroundImage: 'url("https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg")'}} />
        <ImageWrapper style={{backgroundImage: 'url("https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg")'}} />
        <ImageWrapper style={{backgroundImage: 'url("https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg")'}} />
      
      </Carousel>
      </CarouselWrapper>
      
    </Wrapper>
  );
};

export default ButtonImport;
