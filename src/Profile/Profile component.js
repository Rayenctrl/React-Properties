import React from 'react';
import propTypes from 'prop-types'


const Data = ({fullName, bio, profession, children,handleName}) => {
    const styleAlert={color:"red", border: "2px solid powderblue"}
    const mystyle={maxWidth:'100%',height:'auto',opacity:'0.5'}
    return (
        <div>
            <button style={styleAlert} onClick={()=>handleName(fullName)}>CLick Me</button> 
            <h2>{fullName}</h2>
            <h3>{bio}</h3>
            <h3>{profession}</h3>
            <div style={mystyle}>
            {children}
            </div>
       </div>
    );
};
Data.defaultProps={
    fullName:"a b c",
    bio:"a biographie",
    profession:"a job",
    handleName:"alert",
    children:"an image"
};

Data.propType={
    fullName:propTypes.string,
    bio:propTypes.string,
    profession:propTypes.string,
    handleName:propTypes.string,
    children:propTypes.node.isRequired
}
export default Data;