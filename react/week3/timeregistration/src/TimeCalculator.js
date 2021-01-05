import React from 'react';
import PropTypes from 'prop-types';

const TimeCalculator = (props) => {
    return (
        <div>
          hours = ({props.text.endingTime}-{props.text.startTime});  
        </div>
    )
}

export default TimeCalculator

TimeCalculator.propTypes = {
  startTime: PropTypes.number.isRequired, 
  endingTime : PropTypes.number.isRequired, 
}
