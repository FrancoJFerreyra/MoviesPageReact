import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <div className='text-center'>
        <ul className='footer__icons--container'>
          <li>
            <a href='https://www.linkedin.com/in/franco-ferreyra-tecdev/'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href='https://github.com/FrancoJFerreyra?tab=repositories'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
        <p>Contact: ferreyrafranco0802@gmail.com</p>
      </div>
    </footer>
  );
}
