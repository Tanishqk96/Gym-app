import { Box } from '@mui/material'
import React,{useContext} from 'react'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Typography } from '@mui/material';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.ID || item}
        itemId={item.ID || item}
        title={item.ID || item}
        m="0 40px"
      >
          <BodyPart 
              item={item} 
              selectedBodyPart={bodyPart} 
              setBodyPart={setBodyPart} 
            />
       
      </Box>
    ))}
  </ScrollMenu>
);

  
  export default HorizontalScrollbar;




