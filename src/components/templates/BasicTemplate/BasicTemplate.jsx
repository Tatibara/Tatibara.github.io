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
      buttonText="Akzeptieren"
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
      Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern.
      Weitere Informationen erhalten Sie in unserer
      {' '}
      <Link to={NavigationUrls.dataProtectionPageUrl}>Datenschutzerklärung</Link>
      .
    </CookieConsent>
  </div>
);

export default BasicTemplate;
