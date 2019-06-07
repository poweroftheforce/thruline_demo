import React from 'react';
import LinkBox from './LinkBox';

function LinkBoxes(props) {
  return (
    <div className="row">
        <LinkBox {...props}/>
        <LinkBox {...props}/>
    </div>
  );
}

export default LinkBoxes;