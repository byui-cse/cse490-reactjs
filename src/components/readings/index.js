import React from 'react';
import { BiMoviePlay } from 'react-icons/bi';

function Readings(props) {
  return (
    <>
      <h2>
        <BiMoviePlay /> &nbsp; Learning Material
      </h2>
      <ul>
        {props.readings.map((reading, index) => (
          <li key={index}>
            <p>
              <a
                href={reading.url}
                rel='noopener noreferrer'
                target='_blank'
                className='link-primary'>
                {reading.title}
              </a>
              &nbsp; (~ {reading.duration} min)
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Readings;
