import React from "react";

const Event = (props) => {
    const {name, date, pay, location, start, end} = props;
    return(
        <div>
            <img src="" alt="esemény" />
            <div>
                <h2>{name}</h2>
                <span>{date}</span>
                <span>{pay}</span>
                <span>{location}</span>
                <span>{start}</span>
                <span>{end}</span>
            </div>
        </div>
    )
}

export default Event;