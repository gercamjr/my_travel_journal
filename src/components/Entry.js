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
            
          <p className="entry__content--location"><FontAwesomeIcon icon={faMapMarkerAlt} /> {props.location} <span className="entry__content--google"><a href={props.googleMapsUrl} target="_blank">View on Google Maps</a></span></p>
          <h1 className="entry__content--title">{props.title}</h1>
          <p className="entry__content--date">{props.startDate} - {props.endDate}</p>
          <p className="entry__content--description">{props.description}</p>
          
      </div>
      
    </div>
  );
}
