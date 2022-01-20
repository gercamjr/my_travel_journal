import React from "react";
import "../styles/styles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


export default function Entry(props) {
  //console.log(props.imageUrl);
  return (
    <div className="entry">
      <img
        src={`${process.env.PUBLIC_URL}/images/${props.imageUrl}`}
        alt="photo of travel destination"
        className="entry__img"
      />
      <div className="entry__content">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          <p className="entry__content--location">{props.location}</p>
      </div>
    </div>
  );
}
