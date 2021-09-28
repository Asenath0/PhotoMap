import React, { FC } from 'react'
import { Background, Image } from './FullViewStyle'

interface FullViewInterface {
  isFullViewVisibleHandler: () => void;
  image: string;
}

const FullView: FC<FullViewInterface> = ({isFullViewVisibleHandler, image}) => {
  return (
    <Background onClick={isFullViewVisibleHandler}>
      <Image image={image}/>
    </Background>
  )
}

export default FullView
