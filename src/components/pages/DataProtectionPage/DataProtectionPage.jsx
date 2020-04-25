/* eslint-disable max-len */
import React from 'react';

import Headline from '../../atoms/Headline/Headline';
import BasicHeader from '../../organisms/BasicHeader/BasicHeader';
import BasicTemplate from '../../templates/BasicTemplate/BasicTemplate';
import styles from './styles.module.scss';

const DataProtectionPage = () => {
  window.scrollTo(0, 0);
  return (
    <BasicTemplate>
      <BasicHeader />
      <div className={`container ${styles.sectionWrapper}`}>
        <Headline>Datenschutzerklärung</Headline>
        <br />
        <br />

        <h2>Datenschutzerklärung</h2>
        <p>Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt) werden von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der Bereitstellung eines funktionsfähigen und nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte und der dort angebotenen Leistungen, verarbeitet.</p>
        <p>Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der Datenschutz-Grundverordnung (nachfolgend nur „DSGVO“ genannt), gilt als „Verarbeitung“ jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten, wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.</p>
        <p>Mit der nachfolgenden Datenschutzerklärung informieren wir Sie insbesondere über Art, Umfang, Zweck, Dauer und Rechtsgrundlage der Verarbeitung personenbezogener Daten, soweit wir entweder allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung entscheiden. Zudem informieren wir Sie nachfolgend über die von uns zu Optimierungszwecken sowie zur Steigerung der Nutzungsqualität eingesetzten Fremdkomponenten, soweit hierdurch Dritte Daten in wiederum eigener Verantwortung verarbeiten.</p>
        <p>Unsere Datenschutzerklärung ist wie folgt gegliedert:</p>
        <p>
          I. Informationen über uns als Verantwortliche
          <br />
          II. Rechte der Nutzer und Betroffenen
          <br />
          III. Informationen zur Datenverarbeitung
        </p>
        <h3>I. Informationen über uns als Verantwortliche</h3>
        <p>Verantwortlicher Anbieter dieses Internetauftritts im datenschutzrechtlichen Sinne ist:</p>
        <p>
          <span>
            Tatiana Baradari
            <br />
            Baradari Solutions
            <br />
            Markelstr. 40A
            <br />
            12163 Berlin
            <br />
            Deutschland
          </span>
        </p>
        <p>
          <span>
            Telefon: +49 (0)176 38667325
            <br />
            E-Mail: tatiana.baradari@gmail.com
          </span>
        </p>
        <h3>II. Rechte der Nutzer und Betroffenen</h3>
        <p>Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung haben die Nutzer und Betroffenen das Recht</p>
        <ul>
          <li>auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf Auskunft über die verarbeiteten Daten, auf weitere Informationen über die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15 DSGVO);</li>
          <li>auf Berichtigung oder Vervollständigung unrichtiger bzw. unvollständiger Daten (vgl. auch Art. 16 DSGVO);</li>
          <li>auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art. 17 DSGVO), oder, alternativ, soweit eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist, auf Einschränkung der Verarbeitung nach Maßgabe von Art. 18 DSGVO;</li>
          <li>auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten und auf Übermittlung dieser Daten an andere Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO);</li>
          <li>auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht sind, dass die sie betreffenden Daten durch den Anbieter unter Verstoß gegen datenschutzrechtliche Bestimmungen verarbeitet werden (vgl. auch Art. 77 DSGVO).</li>
        </ul>
        <p>Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen gegenüber Daten durch den Anbieter offengelegt worden sind, über jedwede Berichtigung oder Löschung von Daten oder die Einschränkung der Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt, zu unterrichten. Diese Verpflichtung besteht jedoch nicht, soweit diese Mitteilung unmöglich oder mit einem unverhältnismäßigen Aufwand verbunden ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft über diese Empfänger.</p>
        <p><strong>Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht auf Widerspruch gegen die künftige Verarbeitung der sie betreffenden Daten, sofern die Daten durch den Anbieter nach Maßgabe von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet werden. Insbesondere ist ein Widerspruch gegen die Datenverarbeitung zum Zwecke der Direktwerbung statthaft.</strong></p>
        <h3>III. Informationen zur Datenverarbeitung</h3>
        <p>Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, der Löschung der Daten keine gesetzlichen Aufbewahrungspflichten entgegenstehen und nachfolgend keine anderslautenden Angaben zu einzelnen Verarbeitungsverfahren gemacht werden.</p>

        <h4>Serverdaten</h4>
        <p>Aus technischen Gründen, insbesondere zur Gewährleistung eines sicheren und stabilen Internetauftritts, werden Daten durch Ihren Internet-Browser an uns bzw. an unseren Webspace-Provider übermittelt. Mit diesen sog. Server-Logfiles werden u.a. Typ und Version Ihres Internetbrowsers, das Betriebssystem, die Website, von der aus Sie auf unseren Internetauftritt gewechselt haben (Referrer URL), die Website(s) unseres Internetauftritts, die Sie besuchen, Datum und Uhrzeit des jeweiligen Zugriffs sowie die IP-Adresse des Internetanschlusses, von dem aus die Nutzung unseres Internetauftritts erfolgt, erhoben.</p>
        <p>Diese so erhobenen Daten werden vorrübergehend gespeichert, dies jedoch nicht gemeinsam mit anderen Daten von Ihnen.</p>
        <p>Diese Speicherung erfolgt auf der Rechtsgrundlage von Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Verbesserung, Stabilität, Funktionalität und Sicherheit unseres Internetauftritts.</p>
        <p>Die Daten werden spätestens nach sieben Tage wieder gelöscht, soweit keine weitere Aufbewahrung zu Beweiszwecken erforderlich ist. Andernfalls sind die Daten bis zur endgültigen Klärung eines Vorfalls ganz oder teilweise von der Löschung ausgenommen.</p>

        <h4>Cookies</h4>
        <h5>a) Sitzungs-Cookies/Session-Cookies</h5>
        <p>Wir verwenden mit unserem Internetauftritt sog. Cookies. Cookies sind kleine Textdateien oder andere Speichertechnologien, die durch den von Ihnen eingesetzten Internet-Browser auf Ihrem Endgerät ablegt und gespeichert werden. Durch diese Cookies werden im individuellen Umfang bestimmte Informationen von Ihnen, wie beispielsweise Ihre Browser- oder Standortdaten oder Ihre IP-Adresse, verarbeitet. &nbsp;</p>
        <p>Durch diese Verarbeitung wird unser Internetauftritt benutzerfreundlicher, effektiver und sicherer, da die Verarbeitung bspw. die Wiedergabe unseres Internetauftritts in unterschiedlichen Sprachen oder das Angebot einer Warenkorbfunktion ermöglicht.</p>
        <p>Rechtsgrundlage dieser Verarbeitung ist Art. 6 Abs. 1 lit b.) DSGVO, sofern diese Cookies Daten zur Vertragsanbahnung oder Vertragsabwicklung verarbeitet werden.</p>
        <p>Falls die Verarbeitung nicht der Vertragsanbahnung oder Vertragsabwicklung dient, liegt unser berechtigtes Interesse in der Verbesserung der Funktionalität unseres Internetauftritts. Rechtsgrundlage ist in dann Art. 6 Abs. 1 lit. f) DSGVO.</p>
        <p>Mit Schließen Ihres Internet-Browsers werden diese Session-Cookies gelöscht.</p>
        <h5>b) Drittanbieter-Cookies</h5>
        <p>Gegebenenfalls werden mit unserem Internetauftritt auch Cookies von Partnerunternehmen, mit denen wir zum Zwecke der Werbung, der Analyse oder der Funktionalitäten unseres Internetauftritts zusammenarbeiten, verwendet.</p>
        <p>Die Einzelheiten hierzu, insbesondere zu den Zwecken und den Rechtsgrundlagen der Verarbeitung solcher Drittanbieter-Cookies, entnehmen Sie bitte den nachfolgenden Informationen.</p>
        <h5>c) Beseitigungsmöglichkeit</h5>
        <p>Sie können die Installation der Cookies durch eine Einstellung Ihres Internet-Browsers verhindern oder einschränken. Ebenfalls können Sie bereits gespeicherte Cookies jederzeit löschen. Die hierfür erforderlichen Schritte und Maßnahmen hängen jedoch von Ihrem konkret genutzten Internet-Browser ab. Bei Fragen benutzen Sie daher bitte die Hilfefunktion oder Dokumentation Ihres Internet-Browsers oder wenden sich an dessen Hersteller bzw. Support. Bei sog. Flash-Cookies kann die Verarbeitung allerdings nicht über die Einstellungen des Browsers unterbunden werden. Stattdessen müssen Sie insoweit die Einstellung Ihres Flash-Players ändern. Auch die hierfür erforderlichen Schritte und Maßnahmen hängen von Ihrem konkret genutzten Flash-Player ab. Bei Fragen benutzen Sie daher bitte ebenso die Hilfefunktion oder Dokumentation Ihres Flash-Players oder wenden sich an den Hersteller bzw. Benutzer-Support.</p>
        <p>Sollten Sie die Installation der Cookies verhindern oder einschränken, kann dies allerdings dazu führen, dass nicht sämtliche Funktionen unseres Internetauftritts vollumfänglich nutzbar sind. </p>

        <h4>Kontaktanfragen / Kontaktmöglichkeit</h4>
        <p>Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten, werden die dabei von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage genutzt. Die Angabe der Daten ist zur Bearbeitung und Beantwortung Ihre Anfrage erforderlich - ohne deren Bereitstellung können wir Ihre Anfrage nicht oder allenfalls eingeschränkt beantworten.</p>
        <p>Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO.</p>
        <p>Ihre Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet worden ist und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen, wie bspw. bei einer sich etwaig anschließenden Vertragsabwicklung.</p>

        <h4>LinkedIn</h4>
        <p>Wir unterhalten bei LinkedIn eine Onlinepräsenz um unser Unternehmen sowie unsere Leistungen zu präsentieren und mit Kunden/Interessenten zu kommunizieren. LinkedIn ist ein Service der LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Irland, ein Tochterunternehmen der LinkedIn Corporation, 1000 W. Maude Avenue, Sunnyvale, CA 94085, USA.</p>
        <p>Insofern weisen wir darauf hin, dass die Möglichkeit besteht, dass Daten der Nutzer außerhalb der Europäischen Union, insbesondere in den USA, verarbeitet werden. Hierdurch können gesteigerte Risiken für die Nutzer insofern bestehen, als dass z.B. der spätere Zugriff auf die Nutzerdaten erschwert werden kann. Auch haben wir keinen Zugriff auf diese Nutzerdaten. Die Zugriffsmöglichkeit liegt ausschließlich bei LinkedIn. Die LinkedIn Corporation ist unter dem Privacy Shield zertifiziert und hat sich damit verpflichtet, die europäischen Datenschutzstandards einzuhalten</p>
        <p><a href="https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&amp;status=Active" target="_blank" rel="noopener noreferrer">https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&amp;status=Active</a></p>
        <p>Die Datenschutzhinweise von LinkedIn finden Sie unter</p>
        <p><a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/legal/privacy-policy</a></p>

        <h3>Verlinkung Social-Media über Grafik oder Textlink</h3>
        <p>Wir bewerben auf unserer Webseite auch Präsenzen auf den nachstehend aufgeführten sozialen Netzwerken. Die Einbindung erfolgt dabei über eine verlinkte Grafik des jeweiligen Netzwerks. Durch den Einsatz dieser verlinkten Grafik wird verhindert, dass es bei dem Aufruf einer Website, die über eine Social-Media-Bewerbung verfügt, automatisch zu einem Verbindungsaufbau zum jeweiligen Server des sozialen Netzwerks kommt, um eine Grafik des jeweiligen Netzwerkes selbst darzustellen. Erst durch einen Klick auf die entsprechende Grafik wird der Nutzer zu dem Dienst des jeweiligen sozialen Netzwerks weitergeleitet.</p>
        <p>Nach der Weiterleitung des Nutzers werden durch das jeweilige Netzwerk Informationen über den Nutzer erfasst. Es kann hierbei nicht ausgeschlossen werden, dass eine Verarbeitung der so erhobenen&nbsp; Daten in den USA stattfindet.</p>
        <p>Dies sind zunächst Daten wie IP-Adresse, Datum, Uhrzeit und besuchte Seite. Ist der Nutzer währenddessen in seinem Benutzerkonto des jeweiligen Netzwerks eingeloggt, kann der Netzwerk-Betreiber ggf. die gesammelten Informationen des konkreten Besuchs des Nutzers dem persönlichen Account des Nutzers zuordnen. Interagiert der Nutzer über einen „Teilen“-Button des jeweiligen Netzwerks, können diese Informationen in dem persönlichen Benutzerkonto des Nutzers gespeichert und ggf. veröffentlicht werden. Will der Nutzer verhindern, dass die gesammelten Informationen unmittelbar seinem Benutzerkonto zugeordnet werden, muss er sich vor dem Anklicken der Grafik ausloggen. Zudem besteht die Möglichkeit, das jeweilige Benutzerkonto entsprechend zu konfigurieren.</p>
        <p>Folgende soziale Netzwerke werden in unsere Seite durch Verlinkung eingebunden:</p>

        <h4>LinkedIn</h4>
        <p>LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Irland, ein Tochterunternehmen der LinkedIn Corporation, 1000 W. Maude Avenue, Sunnyvale, CA 94085 USA.</p>
        <p>
          Datenschutzerklärung:
          {' '}
          <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/legal/privacy-policy</a>
        </p>
        <p>
          Zertifizierung EU-US-Datenschutz („EU-US Privacy Shield“)
          {' '}
          <a href="https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&amp;status=Active" target="_blank" rel="noopener noreferrer">https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&amp;status=Active</a>
        </p>

        <h4>Google Analytics</h4>
        <p>In unserem Internetauftritt setzen wir Google Analytics ein. Hierbei handelt es sich um einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, nachfolgend nur „Google“ genannt.</p>
        <p>Durch die Zertifizierung nach dem EU-US-Datenschutzschild („EU-US Privacy Shield“)</p>
        <p><a target="_blank" rel="noopener noreferrer" href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active</a></p>
        <p>garantiert Google, dass die Datenschutzvorgaben der EU auch bei der Verarbeitung von Daten in den USA eingehalten werden.</p>
        <p>Der Dienst Google Analytics dient zur Analyse des Nutzungsverhaltens unseres Internetauftritts. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Analyse, Optimierung und dem wirtschaftlichen Betrieb unseres Internetauftritts.</p>
        <p>Nutzungs- und nutzerbezogene Informationen, wie bspw. IP-Adresse, Ort, Zeit oder Häufigkeit des Besuchs unseres Internetauftritts, werden dabei an einen Server von Google in den USA übertragen und dort gespeichert. Allerdings nutzen wir Google Analytics mit der sog. Anonymisierungsfunktion. Durch diese Funktion kürzt Google die IP-Adresse schon innerhalb der EU bzw. des EWR.</p>
        <p>Die so erhobenen Daten werden wiederum von Google genutzt, um uns eine Auswertung über den Besuch unseres Internetauftritts sowie über die dortigen Nutzungsaktivitäten zur Verfügung zu stellen. Auch können diese Daten genutzt werden, um weitere Dienstleistungen zu erbringen, die mit der Nutzung unseres Internetauftritts und der Nutzung des Internets zusammenhängen.</p>
        <p>Google gibt an, Ihre IP-Adresse nicht mit anderen Daten zu verbinden. Zudem hält Google unter</p>
        <p><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/intl/de/policies/privacy/partners">https://www.google.com/intl/de/policies/privacy/partners</a></p>
        <p>weitere datenschutzrechtliche Informationen für Sie bereit, so bspw. auch zu den Möglichkeiten, die Datennutzung zu unterbinden.</p>
        <p>Zudem bietet Google unter</p>
        <p><a target="_blank" rel="noopener noreferrer" href="https://tools.google.com/dlpage/gaoptout?hl=de">https://tools.google.com/dlpage/gaoptout?hl=de</a></p>
        <p>ein sog. Deaktivierungs-Add-on nebst weiteren Informationen hierzu an. Dieses Add-on lässt sich mit den gängigen Internet-Browsern installieren und bietet Ihnen weitergehende Kontrollmöglichkeit über die Daten, die Google bei Aufruf unseres Internetauftritts erfasst. Dabei teilt das Add-on dem JavaScript (ga.js) von Google Analytics mit, dass Informationen zum Besuch unseres Internetauftritts nicht an Google Analytics übermittelt werden sollen. Dies verhindert aber nicht, dass Informationen an uns oder an andere Webanalysedienste übermittelt werden. Ob und welche weiteren Webanalysedienste von uns eingesetzt werden, erfahren Sie natürlich ebenfalls in dieser Datenschutzerklärung.</p>

        <h4>Google Fonts</h4>
        <p>In unserem Internetauftritt setzen wir Google Fonts zur Darstellung externer Schriftarten ein. Es handelt sich hierbei um einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, nachfolgend nur „Google“ genannt.</p>
        <p>Durch die Zertifizierung nach dem EU-US-Datenschutzschild („EU-US Privacy Shield“)</p>
        <p><a target="_blank" rel="noopener noreferrer" href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active</a></p>
        <p>garantiert Google, dass die Datenschutzvorgaben der EU auch bei der Verarbeitung von Daten in den USA eingehalten werden.</p>
        <p>Um die Darstellung bestimmter Schriften in unserem Internetauftritt zu ermöglichen, wird bei Aufruf unseres Internetauftritts eine Verbindung zu dem Google-Server in den USA aufgebaut.</p>
        <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Optimierung und dem wirtschaftlichen Betrieb unseres Internetauftritts.</p>
        <p>Durch die bei Aufruf unseres Internetauftritts hergestellte Verbindung zu Google kann Google ermitteln, von welcher Website Ihre Anfrage gesendet worden ist und an welche IP-Adresse die Darstellung der Schrift zu übermitteln ist.</p>
        <p>Google bietet unter</p>
        <p><a target="_blank" rel="noopener noreferrer" href="https://adssettings.google.com/authenticated">https://adssettings.google.com/authenticated</a></p>
        <p><a target="_blank" rel="noopener noreferrer" href="https://policies.google.com/privacy">https://policies.google.com/privacy</a></p>
        <p>weitere Informationen an und zwar insbesondere zu den Möglichkeiten der Unterbindung der Datennutzung.</p>

        <h4>FontAwesome</h4>
        <p>Um Schriften und visuelle Elemente unseres Internetauftritts darstellen zu können, setzen wir die externen Schriftarten von FontAwesome ein. Bei FontAwesome handelt es sich um einen Dienst der</p>
        <p>Fonticons Inc., 6 Porter Road, Apartment 3R, Cambridge, MA 02140, USA, nachfolgend nur „FontAwesome“ genannt.</p>
        <p>Bei dem Aufruf unseres Internetauftritts wird eine Verbindung zum Server von FontAwesome in den USA aufgebaut, um so die Darstellung von Schriften und visuellen Elemente zu ermöglichen und zu aktualisieren.</p>
        <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Optimierung und dem wirtschaftlichen Betrieb unseres Internetauftritts.</p>
        <p>Durch die bei Aufruf unseres Internetauftritts hergestellte Verbindung zum Server von FontAwesome kann FontAwesome ermitteln, von welcher Website Ihre Anfrage gesendet worden ist und an welche IP-Adresse die Darstellung der Schrift zu übermitteln ist.</p>
        <p>FontAwesome bietet unter</p>
        <p><a href="https://fontawesome.com/privacy" target="_blank" rel="noopener noreferrer">https://fontawesome.com/privacy</a></p>
        <p>weitere Informationen an und zwar insbesondere zu den Möglichkeiten der Unterbindung der Datennutzung.</p>

        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html">Muster-Datenschutzerklärung</a>
          {' '}
          der
          {' '}
          <a target="_blank" rel="noopener noreferrer" href="https://www.ratgeberrecht.eu/datenschutz/datenschutzerklaerung-generator-dsgvo.html">Anwaltskanzlei Weiß &amp; Partner</a>

        </p>

      </div>


    </BasicTemplate>
  );
};

export default DataProtectionPage;
