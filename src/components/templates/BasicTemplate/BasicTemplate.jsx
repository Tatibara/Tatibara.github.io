import React from 'react';

import Footer from '../../organisms/Footer/Footer';

const BasicTemplate = ({ children }) => (
  <div>
    <div>{children}</div>
    <Footer />
  </div>
);

export default BasicTemplate;
