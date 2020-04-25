import React from 'react';

import AboutMeSection from '../../organisms/AboutMeSection/AboutMeSection';
import ContactSection from '../../organisms/ContactSection/ContactSection';
import Header from '../../organisms/Header/Header';
import HomeSection from '../../organisms/HomeSection/HomeSection';
import QualifikationSection
  from '../../organisms/QualifikationSection/QualifikationSection';
import ServicesSection from '../../organisms/ServicesSection/ServicesSection';
import BasicTemplate from '../../templates/BasicTemplate/BasicTemplate';

const HomePage = () => (
  <BasicTemplate>
    <Header />
    <HomeSection />
    <ServicesSection />
    <QualifikationSection />
    <AboutMeSection />
    <ContactSection />

    { /* <h3>Empfehlungen</h3> */}

  </BasicTemplate>
);

export default HomePage;
