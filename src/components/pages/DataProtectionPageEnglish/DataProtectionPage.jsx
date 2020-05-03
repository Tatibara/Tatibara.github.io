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
        <Headline>Privacy Policy</Headline>
        <br />
        <br />

        <p>Personal data (usually referred to just as "data" below) will only be processed by us to the extent necessary and for the purpose of providing a functional and user-friendly website, including its contents, and the services offered there.</p>
        <p>Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation (hereinafter referred to as the "GDPR"), "processing" refers to any operation or set of operations such as collection, recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or otherwise making available, alignment, or combination, restriction, erasure, or destruction performed on personal data, whether by automated means or not.</p>
        <p>The following privacy policy is intended to inform you in particular about the type, scope, purpose, duration, and legal basis for the processing of such data either under our own control or in conjunction with others. We also inform you below about the third-party components we use to optimize our website and improve the user experience which may result in said third parties also processing data they collect and control.</p>
        <p>Our privacy policy is structured as follows:</p>
        <p>
          I. Information about us as controllers of your data
          <br />
          II. The rights of users and data subjects
          <br />
          III. Information about the data processing
        </p>
        <h3>I. Information about us as controllers of your data</h3>
        <p>The party responsible for this website (the &quot;controller&quot;) for purposes of data protection law is:</p>
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
            Germany
          </span>
        </p>
        <p>
          <span>
            Telephone: +49 (0)176 38667325
            <br />
            E-Mail: tatiana.baradari@gmail.com
          </span>
        </p>
        <h3>II. The rights of users and data subjects</h3>
        <p>With regard to the data processing to be described in more detail below, users and data subjects have the right</p>
        <ul type="disc">
          <li>to confirmation of whether data concerning them is being processed, information about the data being processed, further information about the nature of the data processing, and copies of the data (cf. also Art. 15 GDPR);</li>
          <li>to correct or complete incorrect or incomplete data (cf. also Art. 16 GDPR);</li>
          <li>to the immediate deletion of data concerning them (cf. also Art. 17 DSGVO), or, alternatively, if further processing is necessary as stipulated in Art. 17 Para. 3 GDPR, to restrict said processing per Art. 18 GDPR;</li>
          <li>to receive copies of the data concerning them and/or provided by them and to have the same transmitted to other providers/controllers (cf. also Art. 20 GDPR);</li>
          <li>to file complaints with the supervisory authority if they believe that data concerning them is being processed by the controller in breach of data protection provisions (see also Art. 77 GDPR).</li>
        </ul>
        <p>In addition, the controller is obliged to inform all recipients to whom it discloses data of any such corrections, deletions, or restrictions placed on processing the same per Art. 16, 17 Para. 1, 18 GDPR. However, this obligation does not apply if such notification is impossible or involves a disproportionate effort. Nevertheless, users have a right to information about these recipients.</p>
        <p><strong>Likewise, under Art. 21 GDPR, users and data subjects have the right to object to the controller's future processing of their data pursuant to Art. 6 Para. 1 lit. f) GDPR. In particular, an objection to data processing for the purpose of direct advertising is permissible.</strong></p>
        <h3>III. Information about the data processing</h3>
        <p>Your data processed when using our website will be deleted or blocked as soon as the purpose for its storage ceases to apply, provided the deletion of the same is not in breach of any statutory storage obligations or unless otherwise stipulated below.</p>

        <h4>Server data</h4>
        <p>For technical reasons, the following data sent by your internet browser to us or to our server provider will be collected, especially to ensure a secure and stable website: These server log files record the type and version of your browser, operating system, the website from which you came (referrer URL), the webpages on our site visited, the date and time of your visit, as well as the IP address from which you visited our site.</p>
        <p>The data thus collected will be temporarily stored, but not in association with any other of your data.</p>
        <p>The basis for this storage is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the improvement, stability, functionality, and security of our website.</p>
        <p>The data will be deleted within no more than seven days, unless continued storage is required for evidentiary purposes. In which case, all or part of the data will be excluded from deletion until the investigation of the relevant incident is finally resolved.</p>

        <h4>Cookies</h4>
        <h5>a) Session cookies</h5>
        <p>We use cookies on our website. Cookies are small text files or other storage technologies stored on your computer by your browser. These cookies process certain specific information about you, such as your browser, location data, or IP address. &nbsp;</p>
        <p>This processing makes our website more user-friendly, efficient, and secure, allowing us, for example, to display our website in different languages or to offer a shopping cart function.</p>
        <p>The legal basis for such processing is Art. 6 Para. 1 lit. b) GDPR, insofar as these cookies are used to collect data to initiate or process contractual relationships.</p>
        <p>If the processing does not serve to initiate or process a contract, our legitimate interest lies in improving the functionality of our website. The legal basis is then Art. 6 Para. 1 lit. f) GDPR.</p>
        <p>When you close your browser, these session cookies are deleted.</p>
        <h5>b) Third-party cookies</h5>
        <p>If necessary, our website may also use cookies from companies with whom we cooperate for the purpose of advertising, analyzing, or improving the features of our website.</p>
        <p>Please refer to the following information for details, in particular for the legal basis and purpose of such third-party collection and processing of data collected through cookies.</p>
        <h5>c) Disabling cookies</h5>
        <p>You can refuse the use of cookies by changing the settings on your browser. Likewise, you can use the browser to delete cookies that have already been stored. However, the steps and measures required vary, depending on the browser you use. If you have any questions, please use the help function or consult the documentation for your browser or contact its maker for support. Browser settings cannot prevent so-called flash cookies from being set. Instead, you will need to change the setting of your Flash player. The steps and measures required for this also depend on the Flash player you are using. If you have any questions, please use the help function or consult the documentation for your Flash player or contact its maker for support.</p>
        <p>If you prevent or restrict the installation of cookies, not all of the functions on our site may be fully usable.</p>

        <h4>Contact</h4>
        <p>If you contact us via email or the contact form, the data you provide will be used for the purpose of processing your request. We must have this data in order to process and answer your inquiry; otherwise we will not be able to answer it in full or at all.</p>
        <p>The legal basis for this data processing is Art. 6 Para. 1 lit. b) GDPR.</p>
        <p>Your data will be deleted once we have fully answered your inquiry and there is no further legal obligation to store your data, such as if an order or contract resulted therefrom.</p>

        <h4>LinkedIn</h4>
        <p>We maintain an online presence on LinkedIn to present our company and our services and to communicate with customers/prospects. LinkedIn is a service of LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Irland, a subsidiary of LinkedIn Corporation, 1000 W. Maude Avenue, Sunnyvale, CA 94085, USA.</p>
        <p>We would like to point out that this might cause user data to be processed outside the European Union, particularly in the United States. This may increase risks for users that, for example, may make subsequent access to the user data more difficult. We also do not have access to this user data. Access is only available to LinkedIn. LinkedIn Corporation is certified under the Privacy Shield and committed to comply with European privacy standards.</p>
        <p><a href="https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&amp;status=Active" target="_blank" rel="noopener">https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&amp;status=Active</a></p>
        <p>The LinkedIn privacy policy can be found here:</p>
        <p><a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener">https://www.linkedin.com/legal/privacy-policy</a></p>

        <h4>Social media links via graphics</h4>
        <p>We also integrate the following social media sites into our website. The integration takes place via a linked graphic of the respective site. The use of these graphics stored on our own servers prevents the automatic connection to the servers of these networks for their display. Only by clicking on the corresponding graphic will you be forwarded to the service of the respective social network.</p>
        <p>Once you click, that network may record information about you and your visit to our site. It cannot be ruled out that such data will be processed in the United States.</p>
        <p>Initially, this data includes such things as your IP address, the date and time of your visit, and the page visited. If you are logged into your user account on that network, however, the network operator might assign the information collected about your visit to our site to your personal account. If you interact by clicking Like, Share, etc., this information can be stored your personal user account and possibly posted on the respective network. To prevent this, you need to log out of your social media account before clicking on the graphic. The various social media networks also offer settings that you can configure accordingly.</p>
        <p>The following social networks are integrated into our site by linked graphics:</p>

        <h4>LinkedIn</h4>
        <p>LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Irland, a subsidiary of LinkedIn Corporation, 1000 W. Maude Avenue, Sunnyvale, CA 94085 USA.</p>
        <p>
          Privacy Policy:
          {' '}
          <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener">https://www.linkedin.com/legal/privacy-policy</a>
        </p>
        <p>
          EU-US Privacy Shield
          {' '}
          <a href="https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&amp;status=Active" target="_blank" rel="noopener">https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&amp;status=Active</a>
        </p>

        <h4>Google Analytics</h4>
        <p>We use Google Analytics on our website. This is a web analytics service provided by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (hereinafter: Google).</p>
        <p>Through certification according to the EU-US Privacy Shield</p>
        <p><a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active" target="_blank" rel="noopener">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active</a></p>
        <p>Google guarantees that it will follow the EU's data protection regulations when processing data in the United States.</p>
        <p>The Google Analytics service is used to analyze how our website is used. The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the analysis, optimization, and economic operation of our site.</p>
        <p>Usage and user-related information, such as IP address, place, time, or frequency of your visits to our website will be transmitted to a Google server in the United States and stored there. However, we use Google Analytics with the so-called anonymization function, whereby Google truncates the IP address within the EU or the EEA before it is transmitted to the US.</p>
        <p>The data collected in this way is in turn used by Google to provide us with an evaluation of visits to our website and what visitors do once there. This data can also be used to provide other services related to the use of our website and of the internet in general.</p>
        <p>Google states that it will not connect your IP address to other data. In addition, Google provides further information with regard to its data protection practices at</p>
        <p><a href="https://www.google.com/intl/de/policies/privacy/partners" target="_blank" rel="noopener">https://www.google.com/intl/de/policies/privacy/partners,</a></p>
        <p>including options you can exercise to prevent such use of your data.</p>
        <p>In addition, Google offers an opt-out add-on at</p>
        <p><a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener">https://tools.google.com/dlpage/gaoptout?hl=en</a></p>
        <p>in addition with further information. This add-on can be installed on the most popular browsers and offers you further control over the data that Google collects when you visit our website. The add-on informs Google Analytics' JavaScript (ga.js) that no information about the website visit should be transmitted to Google Analytics. However, this does not prevent information from being transmitted to us or to other web analytics services we may use as detailed herein.</p>

        <h4>Google Fonts</h4>
        <p>Our website uses Google Fonts to display external fonts. This is a service provided by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (hereinafter: Google).</p>
        <p>Through certification according to the EU-US Privacy Shield</p>
        <p><a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active" target="_blank" rel="noopener">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;status=Active</a></p>
        <p>Google guarantees that it will follow the EU's data protection regulations when processing data in the United States.</p>
        <p>To enable the display of certain fonts on our website, a connection to the Google server in the USA is established whenever our website is accessed.</p>
        <p>The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the optimization and economic operation of our site.</p>
        <p>When you access our site, a connection to Google is established from which Google can identify the site from which your request has been sent and to which IP address the fonts are being transmitted for display.</p>
        <p>Google offers detailed information at</p>
        <p><a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener">https://adssettings.google.com/authenticated</a></p>
        <p><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">https://policies.google.com/privacy</a></p>
        <p>in particular on options for preventing the use of data.</p>

        <h4>FontAwesome</h4>
        <p>In order to be able to display fonts and visual elements of our website, we use FontAwesome’s external fonts.&nbsp; FontAwesome is a service of</p>
        <p>Fonticons Inc., 6 Porter Road, Apartment 3R, Cambridge, MA 02140, USA, hereinafter referred to as "FontAwesome".</p>
        <p>When you access our website, a connection is established to the FontAwesome server in the USA in order to enable and update the display of fonts and visual elements.</p>
        <p>The legal basis is Art.&nbsp; 6 para. 1 lit. f) GDPR. Our legitimate interest lies in the optimisation and economic operation of our website.</p>
        <p>By connecting to the FontAwesome server when you access our website, FontAwesome can determine from which website your request was sent and to which IP address the font should be sent.</p>
        <p>At</p>
        <p><a href="https://fontawesome.com/privacy" target="_blank" rel="noopener">https://fontawesome.com/privacy</a></p>
        <p>FontAwesome offers further information, in particular on the options for preventing data use. </p>

        <p>
          <a href="https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html" target="_blank" rel="noopener">Model Data Protection Statement</a>
          {' '}
          for
          {' '}
          <a href="https://www.ratgeberrecht.eu/" target="_blank">Anwaltskanzlei Weiß &amp; Partner</a>
        </p>

      </div>
    </BasicTemplate>
  );
};

export default DataProtectionPage;
