import React from "react";
import styles from "./PP.module.css";
import { Link } from "react-router-dom";

const PP = () => {
  const handleRedirect = (latitude, longitude) => {
    const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(mapsUrl, "_blank");
  };
  return (
    <div className={styles.privacyPolicy}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.description}>
        At CUET Plus. we recognize that privacy is important. CUET Plus. does
        not rent, sell, or share personal information about you with other
        people or non-affiliated companies except to provide products or
        services you've requested when we have your permission. You have rights
        under this Privacy Policy, that all business or personal information
        provided to CUET Plus. is voluntary, and that information provided will
        be protected.
      </p>
      <h2 className={styles.subTitle}>
        Information we collect and how we use it:
      </h2>
      <h3 className={styles.description}>
        To provide our services, we may collect the following types of
        information:
      </h3>
      <div className={styles.content}>
        <strong>Information you provide –</strong> We may ask you for personal
        information (such as your name, email address, phone number, and
        company) for certain services that we provide through our website, for
        eg., downloading white papers.
      </div>
      <div className={styles.content}>
        <strong>CUET Plus. cookies -</strong> When you visit CUET Plus., we may
        send one or more cookies - a small file containing a string of
        characters - to your computer that uniquely identifies your browser. We
        may use these cookies to improve the quality of our service by storing
        user preferences and tracking user trends, such as how people search.
        Most browsers are initially set up to accept cookies, but you can reset
        your browser to refuse all cookies or to indicate when a cookie is being
        sent.
      </div>
      <div className={styles.content}>
        <strong>Log information -</strong> When you use CUET Plus. services, our
        servers may automatically record information that your browser sends
        whenever you visit our website. These server logs may include
        information such as your web request, Internet Protocol address, browser
        type, browser language, the date and time of your request, and one or
        more cookies that may uniquely identify your browser.
      </div>
      <div className={styles.content}>
        <strong>User communications -</strong> When you send emails or other
        communications to CUET Plus., we may retain those communications to
        process your inquiries, respond to your requests, and improve our
        services.
      </div>
      <div className={styles.content}>
        <strong>Affiliated sites -</strong> We may have affiliated websites that
        may provide similar or other kinds of services. Personal information
        that you provide to those sites may be sent to CUET Plus. and vice
        versa. We process such information by this Policy. The affiliated sites
        may have different privacy practices and we encourage you to read their
        privacy policies.
      </div>
      <div className={styles.content}>
        <strong>Links - CUET Plus.</strong> may present links in a format that
        enables us to keep track of whether these links have been followed.
      </div>
      <div className={styles.content}>
        CUET Plus, only processes personal information for the purposes
        described in the applicable Privacy Policy and/or privacy notice for
        specific services. In addition to the above, such purposes include:
        Providing our products and services to users; Auditing, research, and
        analysis to maintain, protect, and improve our services; and Developing
        new services.
      </div>
      <div className={styles.content}>
        CUET Plus, processes personal information on our servers in India and in
        other countries. In some cases, we process personal information on a
        server outside your own country.
      </div>
      <h2 className={styles.subTitle}>Choices for personal information</h2>
      <div className={styles.content}>
        When you sign up for a particular service that requires registration, we
        ask you to provide personal information. If we use this information in a
        manner different than the purpose for which it was collected, then we
        will ask for your consent before such use.
      </div>
      <div className={styles.content}>
        If we propose to use personal information for any purposes other than
        those described in this Policy and/or in the specific service notices,
        we will offer you an effective way to opt out of the use of personal
        information for those other purposes. We will not collect or use
        information for purposes other than those described in this Policy
        unless we have obtained your prior consent. You can decline to submit
        personal information to any of our services, in which case CUET Plus.
        may not be able to provide those services to you.
      </div>
      <h2 className={styles.subTitle}>Opt-Out Policy:</h2>
      <div className={styles.content}>
        CUET Plus. offers its visitors and customers a means to choose how we
        may use the information provided. If, at any time after registering for
        information or ordering the Service, you change your mind about
        receiving information from us or about sharing your information with
        third parties, send us a request specifying your new choice. Simply send
        your request to <Link to="mailto:info@cuet.plus">info@cuet.plus</Link>.
      </div>
      <h2 className={styles.subTitle}>Information sharing:</h2>
      <div className={styles.content}>
        CUET Plus. only shares personal information with other companies or
        individuals outside of CUET Plus. in the following limited
        circumstances:
      </div>
      <div className={styles.content}>
        We have your consent. We require opt-in consent for the sharing of any
        sensitive personal information.
      </div>
      <div className={styles.content}>
        We provide such information to our subsidiaries, affiliated companies,
        or other trusted businesses or persons to process personal information
        on our behalf. We require that these parties agree to process such
        information based on our instructions and in compliance with this Policy
        and any other appropriate confidentiality and security measures.
      </div>
      <div className={styles.content}>
        We have a good faith belief that access, use, preservation, or
        disclosure of such information is reasonably necessary to (a) satisfy
        any applicable law, regulation, legal process, or enforceable
        governmental request (b) detect, prevent, or otherwise address fraud,
        security or technical issues, or (c) protect against imminent harm to
        the rights, property or safety of CUET Plus., its users or the public as
        required or permitted by law.
      </div>
      <div className={styles.content}>
        If CUET Plus. becomes involved in a merger, acquisition, or any form of
        sale of some or all of its assets, we will provide notice before
        personal information is transferred and becomes subject to a different
        privacy policy.
      </div>
      <div className={styles.content}>
        Please contact us at the address below for any additional questions
        about the management or use of personal data or what classifies as
        Sensitive Information.
      </div>
      <h2 className={styles.subTitle}>Information security:</h2>
      <div className={styles.content}>
        We take appropriate security measures to protect against unauthorized
        access to or unauthorized alteration, disclosure, or destruction of
        data. These include internal reviews of our data collection, storage,
        and processing practices, and security measures, as well as physical
        security measures to guard against unauthorized access to systems where
        we store personal data.
      </div>
      <div className={styles.content}>
        We restrict access to personal information to CUET Plus. employees,
        contractors, and agents who need to know that information to operate,
        develop, or improve our services. These individuals are bound by
        confidentiality obligations and may be subject to discipline, including
        termination and criminal prosecution if they fail to meet them.
      </div>
      <h2 className={styles.subTitle}>Data integrity:</h2>
      <div className={styles.content}>
        CUET Plus. processes personal information only for the purposes for
        which it was collected and by this Policy or any applicable
        service-specific privacy notice. We review our data collection, storage,
        and processing practices to ensure that we only collect, store, and
        process the personal information needed to provide or improve our
        services. We take reasonable steps to ensure that the personal
        information we process is accurate, complete, and current, but we depend
        on our users to update or correct their personal information whenever
        necessary.
      </div>
      <h2 className={styles.subTitle}>
        Accessing and updating personal information
      </h2>
      <div className={styles.content}>
        When you need to change or update your personal information please mail
        us at info@cuet.plus or call us at + 91 94289898. We will make good
        faith efforts to change/correct this data if it is inaccurate or to
        delete such data at your request if it is not otherwise required to be
        retained by law or for legitimate business purposes. We may ask
        individual users to identify themselves and then proceed to take action
        as required. We may decline to process requests that are unreasonably
        repetitive or systematic, require disproportionate technical effort,
        jeopardize the privacy of others, or would be extremely impractical (for
        instance, requests concerning information residing on backup tapes), or
        for which access is not otherwise required. In any case, where we
        provide information access and correction, we perform this service of
        charge.
      </div>
      <h2 className={styles.subTitle}>Enforcement</h2>
      <div className={styles.content}>
        CUET Plus. regularly reviews its compliance with this Policy. Please
        feel to direct any questions or concerns regarding this Policy or CUET
        Plus's treatment of personal information by mailing us at info@cuet.plus
        or by writing to us at Privacy Matters, c/o CUET Plus., 374, MG Road,
        Sultanpur South Delhi, New Delhi 110030. India. When we receive formal
        written complaints at this address, it is CUET Plus's policy to contact
        the complaining user regarding his or her concerns. We will cooperate
        with the appropriate regulatory authorities, including local data
        protection authorities, to resolve any complaints regarding the transfer
        of personal data that cannot be resolved between CUET Plus. and an
        individual.
      </div>
      <h2 className={styles.subTitle}>Changes to this policy</h2>
      <div className={styles.content}>
        Please note that this Privacy Policy may change from time to time. We
        will not reduce your rights under this Policy without your explicit
        consent, and we expect most such changes will be minor. Regardless, we
        will post any Policy changes on this page and, if the changes are
        significant, we will provide a more prominent notice (including, for
        certain services, email notification of Policy changes).
      </div>
      <p className={styles.description}>
        If you have any additional questions or concerns about this Policy,
        please feel to mail us at <Link to="mailto:info@cuet.plus">info@cuet.plus</Link> any time
        through this website or at Privacy Matters, c/o CUET Plus,{" "}
        <span onClick={() => handleRedirect(28.4947, 77.1903)}>
          374, MG Road, Sultanpur South Delhi, New Delhi 110030, India
        </span>
        .{" "}
      </p>
    </div>
  );
};

export default PP;
