import React from 'react';

function Button({small, large, primary, success, defaultBtn, label, onClick}) {
    
    let size = null;
    let bgColor = null;

    if(small){
        size = "btn__small"
    }else if(large){
        size = "btn__large"
    }

    if(primary){
        bgColor = "blue"
    }else if(success){
        bgColor = "green"
    }else if(defaultBtn) {
        bgColor = "white"
    }
    return (
        <div onClick={onClick} className={`app__btn ${size} ${bgColor}`}>
            {label}
        </div>
    );
}

export default Button;