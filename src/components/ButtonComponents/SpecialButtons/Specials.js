import React, { useState } from "react";
import { specials } from '../../../data';
import SpecialButton from './SpecialButton';

const Specials = () => {
  const [specialState, setSpecialState] = useState(specials);
  return (
    <div>
       {specials.map((spec, index) => <SpecialButton special={spec} key={index}/>)}
    </div>
  );
};

export default Specials;
