import React from 'react';

import AboutMeSection from '../../organisms/AboutMeSection/AboutMeSection';
import ContactSection from '../../organisms/ContactSection/ContactSection';
import Header from '../../organisms/Header/Header';
import HomeSection from '../../organisms/HomeSection/HomeSection';
import PassionSection from '../../organisms/PassionSection/PassionSection';
import QualifikationSection
  from '../../organisms/QualifikationSection/QualifikationSection';
import BasicTemplate from '../../templates/BasicTemplate/BasicTemplate';

const HomePage = () => (
  <BasicTemplate>
    <Header />
    <HomeSection />
    <PassionSection />
    <QualifikationSection />
    <AboutMeSection />
    <ContactSection />

    { /* <h3>Empfehlungen</h3> */}

  </BasicTemplate>
);

export default HomePage;
