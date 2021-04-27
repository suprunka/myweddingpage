import React from 'react'
const Container =React.forwardRef((props, ref) =>{
    const {children, className, backgroundColor, color, backgroundImage}= props;
    return(
        <div
        ref={ref}
        style={{backgroundColor:backgroundColor,backgroundImage:`url(${backgroundImage})`,backgroundSize: "cover", color:color}}
        className={`cnt ${className !== undefined ? className:""}`}
        > 
        {children}
        </div>
    )
}

   
)

export default Container;