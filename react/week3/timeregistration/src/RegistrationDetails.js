
import React from 'react';
import PropTypes from 'prop-types';

const registrationDetails = (props) => {
    return (
        <div>
            Name:{props.text.empName}
        <br></br>Start Time:{props.text.startTime}
        <br></br> End Time:{props.text.endingTime}
        </div>
    )
}

export default registrationDetails

registrationDetails.propTypes = {
    name : PropTypes.string.isRequired,
    startTime: PropTypes.number.isRequired, 
  endingTime : PropTypes.number.isRequired, 
  };

