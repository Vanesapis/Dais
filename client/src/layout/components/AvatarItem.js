import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import CardOverflow from '@mui/joy/CardOverflow';

function AvatarItem(props) {
  return (
    <CardOverflow>
      <AspectRatio ratio="1">
        <img
          src={props.obj_img}
        />
      </AspectRatio>

      
    </CardOverflow>
  );
}

export default AvatarItem;