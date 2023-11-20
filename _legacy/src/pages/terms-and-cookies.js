import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/shared/seo";

import { useTranslation } from "react-i18next";
import tw from "twin.macro";
import Img from "gatsby-image";
import { motion } from "framer-motion";
import Link from "../components/shared/link";
import parse from "html-react-parser";
import Btn from "../components/shared/btn";

const Cookies = ({ data, location }) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title={"Terms & conditions"} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.21, delay: 0.1, ease: "easeOut" },
        }}
        className='pt-24 px-4 max-w-5xl m-auto'
      >
        <Heading1>Terms & conditions</Heading1>
        <Heading2>1. Introduction</Heading2>
        <Text>
          1.1 This website (“our Site”) promotes the business referred to on it.
          In these conditions, the business will be referred to as ‘we’ and/or
          ’our’. 1.2 Use of our Site is on the following terms (the “Terms of
          Use”). If you do not agree to these Terms of Use, please stop using
          our Site immediately. By accessing and using our Site you are
          indicating your acceptance to be bound by these Terms of Use. They are
          a legal agreement between you and us and can only be amended with our
          consent. They should be read in conjunction with any details provided
          on our Site about how our Site operates and the services which are
          available, including our Privacy & Cookie Policy and Trading Terms (if
          applicable).
        </Text>
        <Heading2>2. Accessing our Site</Heading2>
        <Text>
          2.1 We cannot guarantee that our Site will operate continuously or
          without interruptions or be error-free. You must not attempt to
          interfere with the proper working of our Site and, in particular, you
          must not attempt to circumvent security, tamper with, hack into, or
          otherwise disrupt our Site or any computer system, server, router or
          any other internet-connected device. 2.2 You are responsible for
          ensuring that your computer system meets all relevant technical
          specifications necessary to use our Site and is compatible with our
          Site. You also understand that we cannot and do not guarantee or
          warrant that any content on our Site will be free from infection,
          viruses and/ or other code that has contaminating or destructive
          properties. You are responsible for implementing sufficient procedures
          and virus checks (including anti-virus and other security checks) to
          satisfy your particular requirements for the safety and reliability of
          data input and output. 2.3 From time to time, we may restrict access
          to certain features or parts of our Site, or our entire Site, to users
          who have registered with us. If you choose, or you are provided with,
          a user identification code, password or any other piece of information
          as part of our security procedures, you must treat such information as
          confidential, and you must not disclose it to any third party. We have
          the right to disable any user identification code or password, whether
          chosen by you or allocated by us, at any time, if in our opinion you
          have failed to comply with any of the provisions of these Terms of
          Use. 2.4 We reserve the right, in our discretion, to withdraw, suspend
          or modify our Site or certain features or parts of our Site with or
          without notice to you, where we have reason to do so. There may also
          be times when our Site or certain features or parts of our Site become
          unavailable, whether on a scheduled or unscheduled basis. You agree
          that we will not be liable to you or to any third party for any
          withdrawal, modification, unavailability, suspension or discontinuance
          of our Site or any service available on or through our Site.
        </Text>
        <Heading2>3. Using our Site</Heading2>
        <Text>
          3.1 You must use our Site and the information available from our Site
          responsibly. No such information may be used for or in connection with
          any unlawful, immoral or anti-social purpose, or in a manner which is
          or may be damaging to our name or reputation. 3.2 You cannot use our
          Site: for any unlawful purpose; to send spam; to harm, threaten, abuse
          or harass another person, or in a way that invades someone's privacy
          or is (in our reasonable opinion) offensive or is unacceptable or
          damaging to us, our customers or suppliers; to create, check, confirm,
          update or amend your own or someone else's databases, records,
          directories, customer lists, mailing or prospecting lists; to tamper
          with, update or change any part of our Site; in a way that affects how
          it is run; in a way that imposes an unreasonable or disproportionably
          large burden on us or our suppliers' communications and technical
          systems as determined by us; or using any automated means to monitor
          or copy our Site or its content, or to interfere with or attempt to
          interfere with how our Site works.
        </Text>
        <Heading2>4. Intellectual property rights</Heading2>
        <Text>
          4.1 All content on our Site including but not limited to text,
          software, photographs and graphics is protected by copyright. We, or
          our licensors, own copyright and/or database rights in the selection,
          coordination, arrangement and enhancement of such content, as well as
          in the original content. Except as expressly set out in these Terms of
          Use, nothing in these Terms of Use shall give you any rights in
          respect of any intellectual property owned by us or our licensors. You
          shall not assert or attempt to obtain any such rights and you shall
          not use, copy, reproduce, modify, publish, transmit, participate in
          the transfer or sale of, create derivative works from, or in any way
          exploit, our name, trade marks, logos or other proprietary marks, or
          any of the content of our Site, in whole or in part, except as
          provided in these Terms of Use.
        </Text>
        <Heading2>5. If you provide content for our Site</Heading2>
        <Text>
          5.1 If you provide any material to our Site (for example, by providing
          ratings and reviews, comments, articles or uploading any other content
          in any format (including video) (each “User Content”) you agree to
          grant us permission, irrevocably and free of charge, to use the User
          Content (including adapting it for operational or editorial reasons)
          in any media worldwide, for our own marketing, research and
          promotional activities and our internal business purposes which may
          include providing the User Content to selected third party partners,
          service providers, social media and networking sites. 5.2 You own your
          User Content at all times, and you continue to have the right to use
          it in any way you choose. 5.3 By providing any User Content to our
          Site you confirm that such User Content: is your own original work or
          you are authorised to provide it to our Site and that you have the
          right to give us permission to use it for the purposes set out in
          these Terms of Use; will not contain or promote anything illegal,
          harmful, misleading, abusive, defamatory (that is, it does not damage
          someone’s good reputation) or anything else that might cause
          widespread offence or bring us or our business partners into
          disrepute; does not take away or affect any other person’s privacy
          rights, contract rights or any other rights; does not contain any
          virus or other code that may damage, interfere with or otherwise
          adversely affect the operation of our Site; will, if used to promote
          your own business or services, clearly and openly state your
          association with the particular business expressly; and will not
          contain any form of mass-mailing or spam. 5.4 If you do not want to
          grant us the permissions set out above, please do not provide any
          material to our Site. 5.5 We have no obligation to publish your User
          Content on our Site and we retain the right to remove any User Content
          at any time and for any reason. 5.6 We do not edit, pre-vet or review
          any User Content displayed on our Site. If you believe that any User
          Content does not comply with the requirements set out in this
          paragraph, please notify us immediately. We will then review the User
          Content and, where we deem it appropriate, remove it within a
          reasonable time.
        </Text>
        <Heading2>6. Our liability</Heading2>
        <Text>
          6.1 Although we hope our Site will be of interest to users, we accept
          no liability and offer no warranties or conditions in relation to our
          Site or its content, to the fullest extent such liability can be
          excluded by law. 6.2 There is no limit to what we and the people who
          provide our services will be liable for if someone dies or is injured
          because of our negligence or because we have committed fraud. 6.3
          Under no circumstances will we, the owner or operator of our Site, or
          any other organisation involved in creating, producing, maintaining or
          distributing our Site be liable, whether in contract, tort (including
          negligence), breach of a statutory duty, even if foreseeable, for any
          loss of: profits, sales, business, or revenue; business interruption;
          anticipated savings; business opportunity, goodwill or reputation; use
          of, or corruption to information; or information. 6.4 If we do not
          keep to these conditions, then we will only be liable for losses you
          have suffered as a direct result. We are not liable to you for any
          other losses whether such losses are because we have not kept to our
          obligations or contract, because of something we have done or not done
          in negligence, due to defamatory statements or liability for a product
          or otherwise as a result of: use of, or inability to use, our Site;
          use of or reliance on any content displayed on our Site; any mistake,
          fault, failure to do something, missing information, or virus on our
          Site or if it does not work properly because of incidents outside of
          our control such as (but not limited to) interruptions to
          communication and networks and circumstances beyond our control;
          theft, destruction of information or someone getting access to our
          records, programs or services without our permission; or goods,
          products, services or information received through or advertised on
          any website which we link to from our Site.
        </Text>
        <Heading2>7. General</Heading2>
        <Text>
          7.1 Where our Site contains links to other websites and resources
          provided by third parties, these links are provided for your
          information only. We have no control over the contents of those
          websites or resources. 7.2 Any formal legal notices should be sent to
          us using the details set out on our Site. 7.3 Failure by us to enforce
          a right does not result in waiver of such right. You may not assign or
          transfer your rights under these Terms of Use. 7.4 If any part of
          these Terms of Use is found to be unenforceable as a matter of law,
          all other parts of these Terms of Use shall be unaffected3. and shall
          remain in force.
        </Text>
        <Heading2>8. Governing Law and Jurisdiction</Heading2>
        <Text>
          8.1 These conditions make up the whole agreement between you and us in
          how you use our Site. If a court decides that a condition is not
          valid, the rest of the conditions will still apply. 8.2 The laws of
          England and Wales apply to your use of our Site and these conditions.
          We control our Site from within the United Kingdom. However, you can
          get access to our Site from other places around the world. Although,
          these places may have different laws from the laws of England and
          Wales, by using our Site you agree that the laws of England and Wales
          will apply to everything relating to you using our Site and you agree
          to keep to these laws. We have the right to take you to court in the
          country you live in.
        </Text>
        <Heading1>Cookies policy</Heading1>
        <Heading2>1. Important notice</Heading2>
        <Text>
          This Privacy Policy describes how we obtain and use your personal
          data, why we are allowed to do so by the law, who has access to your
          personal data and what your rights are. Please review it carefully. In
          the event that the Site contains a separate Privacy Statement linked
          to via the Site homepage, in the case of conflict between that Privacy
          Statement and this Privacy Policy, the Privacy Statement shall prevail
          over this Privacy Policy We take your privacy seriously and use your
          personal data as further explained in this Privacy Policy. We are the
          “controller” of the personal data you provide to us. You have the
          right to object to us processing your personal data for our legitimate
          business interests or for direct marketing purposes (including any
          related profiling). For more information about your rights and how you
          can exercise them, please see the section Your rights.
        </Text>
        <Heading2>2. Personal Data we may collect and why</Heading2>
        <Text>
          Personal data is any information which identifies you personally
          whether directly (for example, your name) or indirectly (for example,
          information about your use of our products and services). We may
          collect the following data about you: Contact details: your name,
          email address, and telephone number so that we can contact you in
          response to an enquiry you make via our Site or in relation to the
          products and services that we have from time to time agreed to provide
          to you; Correspondence: we collect any additional personal data you
          may provide to us from time to time if you contact us by email, letter
          or telephone, through our Site, by submitting a comment on our Site,
          or by any other means; Survey responses: information from surveys that
          we use for research purposes, if you choose to respond to them;
          Transaction details: we or our third party providers will collect
          information relating to transactions you carry out through our Site
          and for the purposes of fulfilling your orders; Details of visits to
          the Sites: details of your visits to our Site, including, but not
          limited to, traffic data, location data, weblogs and other
          communication data, whether this is required for our own billing
          purposes or otherwise and the resources that you access.
        </Text>
        <Heading2>3. Cookies</Heading2>
        <Text>
          What are Cookies? We collect information about your use of our Site
          through cookies. Cookies are information that files stored on your
          computer, tablet or smartphone that help websites remember who you are
          and information about your visit. Cookies can help to display the
          information on our Site in a way that matches your interests. Most
          major websites use cookies. a. What cookies are used on this Site? The
          cookies we and our business partners use on our Site are broadly
          grouped into the following categories: Essential – Some of the cookies
          on our Site are essential for us to be able to provide you with a
          service you have requested. An example of this could be a cookie used
          to enable you to log into your account on our Site or which allows
          communication between your browser and our Site. Our cookie preference
          cookie described in the section “How can I reject or opt out of
          receiving cookies?” is also an essential cookie. You may not be able
          to use our Site without these cookies. Analytics – We use analytics
          cookies to helps us understand how users engage with our Site. An
          example is counting the number of different people coming to our Site
          or using a particular feature, rather than the total number of times
          the site or feature is used. Without this cookie, if you visited our
          Site once each week for three weeks we would count you as three
          separate users. We would find it difficult to analyse how well our
          Site was performing and improve it without these cookies. User Cookies
          – We use cookies to improve your experience by remembering your
          preferences so we know how you like to use our Site. Examples of this
          would be remembering you so that you are served with the same content
          or to remember you when you come back to our Site. Social Sharing – We
          use third party cookies to allow you to share content directly on the
          social networking/sharing sites like Facebook, Twitter or Google+.
          Examples would be if you wanted to “like” or “tweet” about us or our
          products or services. Please see our “Third Party Cookies” section
          below for more details. Interest-Based Advertising – You will have
          noticed that when you visit websites you will be shown adverts for
          products and services you may wish to buy. The money made by website
          owners for showing third party adverts on their websites often pays
          for the cost of running the website and therefore usually allows you
          to use the website without having to pay a registration or usage fee.
          To try and ensure that the adverts you see are relevant to you third
          party cookies may be used to collect information about the types of
          things that interest you, for example websites you visit and the
          geography that you are based in. Having these cookies does not
          increase the number of adverts you will be shown, but simply makes the
          adverts you see more relevant. Please see our “Third Party Cookies”
          section below for more details. b. How can I reject or opt out of
          receiving cookies? You may refuse to accept cookies by activating the
          setting on your browser which allows you to refuse the setting of
          cookies. However, if you select this setting, you may be unable to
          access certain parts of our Site. Unless you have adjusted your
          browser setting so that it will refuse cookies, our system will issue
          cookies when you use our Site. The “Help” menu of the toolbar on most
          browsers will tell you how to prevent your browser from accepting new
          cookies, how to have the browser notify you when you receive a new
          cookie, or how to disable cookies altogether. For more information
          about cookies and how to stop cookies being installed or how to delete
          existing cookies from your hard drive visit the following website:
          http://www.allaboutcookies.org. c. Third party cookies Some of the
          cookies described in the "What Cookies are used on our Site" section
          above are stored on your machine by third parties when you use our
          Site. Third parties may also read cookies on your browser to collect
          information or to serve content or advertisements to you. We have no
          control over these cookies or how the third parties use them. They are
          used to allow that third party to provide a service to us, for example
          analytics. For more information on these cookies and how to disable
          them, please see: Internet Advertising Bureau website at
          http://www.youronlinechoices.com/ where you will be able to opt-out of
          receiving Interest-Based Advertising cookies from some of the third
          parties listed below; and/or If you want to know more about how
          cookies work and how to manage or delete them, visit the World Wide
          Web Consortium's website.
        </Text>
        <Heading2>4. How we use your personal data</Heading2>
        <Text>
          We use your personal data for the following purposes: To provide you
          with the products and services you have requested We use your personal
          data to accept you as a new or returning customer to provide you with
          the products and services you have requested in accordance with the
          Trading Terms or Terms of Trading. To send you service communications,
          including in relation to changes to our Trading Terms or Terms of
          Trading We use the contact details you have provided to us so that we
          can communicate with you about the products and services that we
          provide, including to let you know about major changes to those
          products and services or to the Trading Terms or Terms of Trading
          between us or to any related information. Direct marketing (including
          by third parties) If you have provided your consent or we otherwise
          have the right to do so, we may use your contact details to send you
          direct marketing and keep you informed of promotional offers by email,
          SMS, post or telephone relating to our products and services. You can
          unsubscribe from our direct marketing at any time by clicking the
          “Unsubscribe” link in any of our emails or by contacting us. Our
          trusted business partners would also like to use your name, email
          address, postal address and telephone number to inform you of similar
          products, services and promotional offers. We will only share your
          personal data with our partners where you have provided us with your
          consent to do so. You can unsubscribe at any time by clicking the
          “Unsubscribe” link in any of their emails or by contacting us. To
          track your usage of our website, communications, products and services
          We use cookies and similar technologies to track your activity on our
          Site so that we can provide important features and functionality on
          our Site, monitor its usage, and provide you with a more personalised
          experienced. To provide and improve customer support We use your
          personal data to be able to provide and improve the customer support
          we provide to you (for example, where you have questions about our
          products and services). To maintain our records and improve data
          accuracy Like any business, we process personal data in the course of
          maintaining and administering our internal records. This includes
          processing your personal data to ensure that the information we hold
          about you is kept up to date and accurate. To respond to enquiries,
          complaints and disputes We use the personal data we hold about you to
          help us respond to any enquiries or complaints you have made, or deal
          with any dispute which may arise in the course of us providing our
          products and services to you, in the most effective manner. To
          investigate, detect and prevent fraud and comply with our legal
          obligations In certain circumstances, we use your personal data only
          to the extent required in order to enable us to comply with our legal
          obligations, including for fraud detection, investigation and
          prevention purposes. This may require us to provide your personal data
          to law enforcement agencies if they request it.
        </Text>
        <Heading2>5. Legal grounds for processing</Heading2>
        <Text>
          Data protection law requires us to only process your personal data if
          we satisfy one or more legal grounds. These are set out in data
          protection law and we rely on a number of different grounds for the
          processing we carry out. These are as follows: Consent In certain
          circumstances, we process your personal data after obtaining your
          consent to do so for the purposes of: sending you marketing
          communications about our products and services; sharing your name,
          email address, postal address and telephone number with our trusted
          business partners so that they may market to you about their own
          similar products and services; conducting marketing research;
          obtaining your credit score so that we can establish the best possible
          payment terms we are able to offer to you. Necessary for the
          performance of a contract and to comply with our legal obligations It
          is necessary for us to process your basic contact details, payment
          details and information about the business you represent for the
          performance of the Trading Terms or Terms of Trading between us. In
          particular, we rely on this legal ground to: provide you with the
          products and services; communicate with you about the products and
          services that we provide to you, including to let you know about major
          changes to those products and services or to the Trading Terms or
          Terms of Trading between us or to any related information; provide and
          improve customer support; and notify you about changes to our service
          If you choose not to give some or all of the aforementioned
          information to us, this may affect our ability to provide our products
          and services to you. In certain circumstances, we also use your
          personal data only to the extent required in order to enable us to
          comply with our legal obligations, including to detect, investigate
          and prevent fraud. Necessary for the purposes of our legitimate
          business interests or those of a third party It is sometimes necessary
          to collect and use your personal data for the purposes of our
          legitimate interests as a business, which are to: provide you with
          products and services that are as useful and beneficial as possible,
          including by personalising our contact with you and making sure we
          tell you about all the offers that are relevant to you; better
          understand our customer base so that we can improve our products and
          services and marketing activities (which could also benefit you);
          comply with our contractual obligations to third parties; develop and
          improve our Site to enhance the customer experience; train our staff
          so that we can provide you with a better customer service; respond to
          any enquiries or complaints you have made, or deal with any dispute
          which may arise in the course of us providing our products and
          services to you; and to ensure that content from our Site is presented
          in the most effective manner for you and for your computer; ensure
          effective operational management and internal administration of our
          business, document retention, compliance with regulatory guidance and
          exercise or defence of legal claims. Where we think there is a risk
          that one of your interests or fundamental rights and freedoms may be
          affected we will not process your personal data unless there is
          another legal ground for us to do so (either that we have obtained
          your consent to the processing or it is necessary for us to perform
          our contract with you or to comply with our legal obligations).
        </Text>
        <Heading2>6. Who we share your personal data with</Heading2>
        <Text>
          We may provide your personal data to our suppliers and service
          providers, including other companies in our group, who provide certain
          business services for us and act as “processors” of your personal data
          on our behalf. In addition, we may disclose your personal data if we
          are under a duty to disclose or share your personal data in order to
          comply with any legal obligation, or in order to protect the rights,
          property, or safety, of our business, our customers or others. This
          includes, in specific cases, exchanging information with other
          organisations for the purposes of fraud protection. In some cases, the
          personal data we collect from you may, for the purposes set out above,
          be transferred outside the European Economic Area (EEA) and such
          destinations may not have laws which protect your personal data to the
          same extent as in the EEA. We are required by data protection law to
          ensure that where we or our “processors” transfer your personal data
          outside of the EEA, it is treated securely and is protected against
          unauthorised access, loss or destruction, unlawful processing and any
          processing which is inconsistent with the purposes set out in this
          Privacy Policy.
        </Text>
        <Heading2>7. How long we keep your personal data for</Heading2>
        <Text>
          We retain your personal data for no longer than is necessary for the
          purposes(s) for which it was provided. What this means in practice
          will vary between different types of data. When determining the
          relevant retention periods, we take into account factors including:
          legal obligation(s) under applicable law to retain data for a certain
          period of time; statute of limitations under applicable law; potential
          or actual disputes; and guidelines issued by relevant data protection
          authorities. Otherwise, we securely erase your personal data from our
          systems when it is no longer needed.
        </Text>
        <Heading2>8. Your rights</Heading2>
        <Text>
          You have the following rights regarding your personal data: Rights
          What does this mean? 1. Rights to be informed You have the right to be
          provided with clear, transparent and easily understandable information
          about how we use your personal data and your rights. This is why we
          are providing you with the information in this Privacy Policy. 2.
          Right of access You have the right to obtain access to your personal
          data (if we are processing it) and certain other information (similar
          to that provided in this Privacy Policy). This is so you are aware and
          can check that we are using your personal data in accordance with data
          protection law. 3. Right to rectification You are entitled to have
          your personal data corrected if it is inaccurate or incomplete. 4.
          Right to erasure This is also known as ‘the right to be forgotten’
          and, in simple terms, enable you to request the deletion or removal of
          your personal data where there is no compelling reason for us to keep
          using it. This is not a general right to erasure; there are
          exceptions. 5. Right to restrict processing You have the right to
          ‘block’ or supress further use of your personal data in certain
          circumstances. When processing is restricted, we can still store your
          personal data, but may not use it further. 6. Right of data
          portability You have the right to obtain and reuse your personal data
          in a structured, commonly used and machine-readable format in certain
          circumstances. In addition, where certain conditions apply, you have
          the right to have such information transferred directly to a third
          party. 7. Right to object to processing You have the right to object
          to us processing your personal data for our legitimate business
          interests or for direct marketing purposes (including in each case any
          related profiling). 8. Right to withdraw consent to processing If you
          have given your consent to us to process your personal data for a
          particular purpose (for example, direct marketing), you have the right
          to withdraw your consent at any time (although if you do so, it does
          not mean that any processing of your personal data up to that point is
          unlawful). 9. Right to make a complaint to the data protection
          authorities You have the right to make a complaint to the Information
          Commissioner’s Office (ICO) if you are unhappy with how we have
          handled your personal data or believe our processing of your personal
          data does not comply with data protection law.
        </Text>
        <Heading2>9. How to contact us</Heading2>
        <Text>
          If you would like to exercise your data protection rights or if you
          are unhappy with how we have handled your personal data, please feel
          free to contact us by using the details set out on our Site. If you’re
          not satisfied with our response to any enquiries or complaint or
          believe our processing of your personal data does not comply with data
          protection law, you can make a complaint to the Information
          Commissioner’s Office (ICO) by: writing to: Information Commissioner’s
          Officer, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF;
          calling: 0303 123 1113; or submitting a message through the ICO’s
          website at: ico.org.uk
        </Text>
        <Heading2>10. Links to other websites</Heading2>
        <Text>
          Our website may contain hyperlinks to websites owned and operated by
          third parties. This Privacy Policy does not apply to those other
          websites. We encourage you to read the privacy statements on the other
          websites you visit, as they will govern the use of any personal data
          you provide when visiting those websites. We do not accept any
          responsibility or liability for the privacy practices of such third
          party websites and your use of such websites is at your own risk.
        </Text>
        <Heading2>11. Changes to this Privacy Policy</Heading2>
        <Text>
          This Privacy Policy was last updated on 1 May 2018. This Privacy
          Policy may be updated from time to time, so you may want to check it
          each time you provide personal data to us.
        </Text>
      </motion.div>
    </Layout>
  );
};
const Heading1 = tw.h1`text-center font-bold text-5xl text-primary-500 w-full  pb-4 px-4  border-b-2  mb-16 mx-auto sticky`;
const Heading2 = tw.h2`font-bold text-3xl mb-4`;
const Text = tw.p` mb-10`;

export default Cookies;
