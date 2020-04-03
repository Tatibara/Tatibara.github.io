import React from 'react';

import IosAmericanFootballOutline
  from 'react-ionicons/lib/IosAmericanFootballOutline';
import IosConstructOutline from 'react-ionicons/lib/IosConstructOutline';
import IosEaselOutline from 'react-ionicons/lib/IosEaselOutline';
import IosFlaskOutline from 'react-ionicons/lib/IosFlaskOutline';
import IosTrendingUp from 'react-ionicons/lib/IosTrendingUp';
import LogoJavascript from 'react-ionicons/lib/LogoJavascript';

import HomePageHeader from '../../molecules/HomePageHeader/HomePageHeader';
import BasicTemplate from '../../templates/BasicTemplate/BasicTemplate';

const HomePage = () => (
  <BasicTemplate>
    <HomePageHeader />
    <div className="container">
      <h2>Ich bin passioniert über</h2>
      <p> * JavaScript</p>
      <LogoJavascript fontSize="60px" color="#43853d" />
      <p>React und dessen Ecosystem</p>
      <p> * Teamarbeit</p>
      <IosAmericanFootballOutline fontSize="60px" color="#43853d" />
      <p>Teamarbeit an tollen Produkten</p>
      <p> * Mentoring</p>
      <IosEaselOutline fontSize="60px" color="#43853d" />
      <p>Mentorin im Frontend Engineering Programm der FrauenLoop gUG</p>

      <h2>Meine Qualifikationen</h2>
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
          (Wirtschaftsinformatik), Diplom-Abschluss „ausgezeichnet“
        </li>
        <li>
          Abschluss in Informatik, Schwerpunkt: Service und Software
          Engineering, Bachelor of Science „gut“ (1,8)
        </li>
      </ul>
      <h3>Empfehlungen</h3>
      <h3>Kontakt Daten</h3>
    </div>
  </BasicTemplate>
);

export default HomePage;
