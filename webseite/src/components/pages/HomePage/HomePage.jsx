import React from 'react';

import BigHeader from '../../organisms/BigHeader/BigHeader';
import ContactSection from '../../organisms/ContactSection/ContactSection';
import PassionSection from '../../organisms/PassionSection/PassionSection';
import QualifikationSection
  from '../../organisms/QualifikationSection/QualifikationSection';
import BasicTemplate from '../../templates/BasicTemplate/BasicTemplate';

const HomePage = () => (
  <BasicTemplate>
    <BigHeader />


    <PassionSection />
    <QualifikationSection />
    <ContactSection />

    { /* <h3>Empfehlungen</h3> */}

  </BasicTemplate>
);

export default HomePage;
