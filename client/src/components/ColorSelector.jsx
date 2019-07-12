import React from 'react';
import ColorButton from './ColorButton.jsx';
import {ColorContainer} from '../styling.jsx';

const ColorSelector = (props) => {
  return (
    <ColorContainer>

      {props.colors.map((color) => {
        return <ColorButton key={color} color={color} selectColor={props.selectColor}/>
      })}

    </ ColorContainer>
  );
}

export default ColorSelector;
