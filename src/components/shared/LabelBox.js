import React from 'react';

function LabelBox({color, children}) {
    let labelColor = null;

    if(color === "success"){
        labelColor = "green";
    }else if(color ==="danger"){
        labelColor = "red";
    }else if(color ==="primary"){
        labelColor = "blue";
    }else if(color ==="warning"){
        labelColor = "yellow";
    }else if(color ==="gray"){
        labelColor = "gray";
    }else if(color === "secondary"){
        labelColor = "violet";
    }

    return (
        <div className={`label__box ${labelColor}`}>
          {children}  
        </div>
    );
}

export default LabelBox;