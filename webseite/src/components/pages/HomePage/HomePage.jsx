import React from 'react';

import IosConstructOutline from 'react-ionicons/lib/IosConstructOutline';
import IosFlaskOutline from 'react-ionicons/lib/IosFlaskOutline';
import IosTrendingUp from 'react-ionicons/lib/IosTrendingUp';

import HomePageHeader from '../../molecules/HomePageHeader/HomePageHeader';
import BigHeader from '../../organisms/BigHeader/BigHeader';
import PassionSection from '../../organisms/PassionSection/PassionSection';
import BasicTemplate from '../../templates/BasicTemplate/BasicTemplate';

const HomePage = () => (
  <BasicTemplate>
    <BigHeader />

    <div className="container">
      <PassionSection />

      <h2>Meine Qualifikationen!</h2>
      <h3>Schwerpunkte</h3>
      <IosConstructOutline fontSize="60px" color="#43853d" />
      <p>
        JavaScript, TypeScript, React, Node.js, GraphQL CSS3, HTML5,
        Responsive Design, Wartbarer und Skalierbarer Code, Cross-Browser-
        Kompatibilität, Optimierungstechniken und Unit Testing
      </p>
      <h3>Erfahrung</h3>
      <IosTrendingUp fontSize="60px" color="#43853d" />
      <ul>
        <li>10+ Jahre Erfahrung in der Softwareentwicklung</li>
        <li>
          7 Jahre Erfahrung in der Frontend-Entwicklung (HTML, CSS,
          JavaScript Frameworks)
        </li>
        <li>3 Jahre Erfahrung mit React und dessen Ecosystem</li>
      </ul>
      <h3>Bildung</h3>
      <IosFlaskOutline fontSize="60px" color="#43853d" />
      <ul>
        <li>Diplom in Wirtschaftsinformatik</li>
        <li> Bachelor in Informatik</li>
      </ul>
      <h3>Bildung</h3>
      <ul>
        <li>
          Abschluss in IT-Management - Angewandte Informatik im Management
          (Wirtschaftsinformatik), Diplom-Abschluss
        </li>
        <li>
          Abschluss in Informatik, Schwerpunkt: Service und Software
          Engineering, Bachelor of Science
        </li>
      </ul>
      <h3>Empfehlungen</h3>
      <h3>Kontakt Daten</h3>
    </div>
    <HomePageHeader />
  </BasicTemplate>
);

export default HomePage;
