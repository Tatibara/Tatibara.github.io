import React from 'react';

import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';

import NavigationUrls from '../../../routers/NavigationUrls';
import Footer from '../../organisms/Footer/Footer';

const BasicTemplate = ({ children }) => (
  <div>
    <div>{children}</div>
    <Footer />
    <CookieConsent
      buttonText="Accept"
      style={{
        opacity: '0.8',
        fontSize: '13px',
        letterSpacing: '1px',
      }}
      buttonStyle={{
        fontSize: '13px',
        letterSpacing: '1px',
      }}
    >
      This website uses cookies to improve the user experience.
      For more information please click
      {/* Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern.
      Mehr Informationen erhalten Sie */}
      {' '}
      <Link to={NavigationUrls.dataProtectionPageUrl}>here</Link>
      .
    </CookieConsent>
  </div>
);

export default BasicTemplate;
