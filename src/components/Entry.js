import React from "react";
import "../styles/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Entry(props) {
  //console.log(props.imageUrl);
  return (
    <div className="blog-slider__item swiper-slide">
      <div className="blog-slider__img">
        <img
          src={`${process.env.PUBLIC_URL}/images/${props.imageUrl}`}
          alt="photo of travel destination"
        />
      </div>
      <div className="blog-slider__content">
        <span className="blog-slider__code">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> {props.location}{" "}
          <span className="entry__content--google">
            <a href={props.googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </span>
        </span>
        <div className="blog-slider__title">{props.title}</div>
        <div className="blog-slider__date">
          {props.startDate} - {props.endDate}
        </div>
        
        <div className="blog-slider__text">{props.description}</div>
      </div>
    </div>
  );
}
