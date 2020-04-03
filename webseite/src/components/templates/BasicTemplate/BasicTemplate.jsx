import React from 'react';

import Footer from '../../organisms/Footer/Footer';
import Header from '../../organisms/Header/Header';

const BasicTemplate = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
);

export default BasicTemplate;
