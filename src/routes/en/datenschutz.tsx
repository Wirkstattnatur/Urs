import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { getLegalPageSchema, getSeoHead, jsonLdScript } from "@/lib/seo";

const pageTitle = "Privacy policy";
const title = `${pageTitle} — Wirkstattnatur`;
const description =
  "Transparently explained: what data we process, why we need it, and what choices you have.";

export const Route = createFileRoute("/en/datenschutz")({
  head: () => ({
    ...getSeoHead({ path: "/en/datenschutz", title, description, locale: "en" }),
    scripts: [
      jsonLdScript(
        getLegalPageSchema({
          path: "/en/datenschutz",
          name: pageTitle,
          description,
          inLanguage: "en",
        }),
      ),
    ],
  }),
  component: EnglishPrivacyPage,
});

function EnglishPrivacyPage() {
  return (
    <LegalPage
      currentPath="/en/datenschutz"
      locale="en"
      title={pageTitle}
      description={description}
    >
      <p className="legal-meta">Last updated: 29 August 2026</p>

      <aside className="legal-summary" aria-labelledby="privacy-summary-title">
        <h2 id="privacy-summary-title">Key points at a glance</h2>
        <ul>
          <li>This website does not use any analytics or advertising trackers.</li>
          <li>Fonts are hosted locally, meaning no connection is made to Google Fonts.</li>
          <li>
            The Tidio chat window loads upon visiting the website and appears as a contact icon at
            the edge of the screen.
          </li>
          <li>Google Maps and other external websites are opened only when you click a link.</li>
        </ul>
      </aside>

      <section>
        <h2>1. Controller</h2>
        <p>The controller responsible for processing personal data is:</p>
        <address>
          <strong>Wirkstattnatur, Urs Gremlich</strong>
          <br />
          Hernerholzgasse 30
          <br />
          8810 Horgen, Switzerland
          <br />
          <a href="mailto:info@wirkstattnatur.ch">info@wirkstattnatur.ch</a>
          <br />
          <a href="tel:+41794131830">079 413 18 30</a>
        </address>
      </section>

      <section>
        <h2>2. Scope and principles</h2>
        <p>
          This privacy policy describes the processing of personal data when visiting this website,
          when contacting us, and in connection with the services offered by Wirkstattnatur. The
          Swiss Federal Act on Data Protection (FADP) and the Data Protection Ordinance (DPO) apply
          in particular. Where applicable in individual cases, the requirements of the EU General
          Data Protection Regulation (GDPR) are also taken into account.
        </p>
        <p>
          We only process data that is necessary for a clear and justifiable purpose, treat it
          confidentially, and protect it through appropriate technical and organisational measures.
          Personal data is neither sold nor used for third-party advertising.
        </p>
      </section>

      <section>
        <h2>3. Website and hosting</h2>
        <p>
          This website is delivered through the globally distributed infrastructure of Vercel Inc.
          (USA). When you access the website, Vercel processes technically necessary connection and
          log data. This may include your IP address, date and time of access, requested page or
          URL, status code, volume of data transferred, referrer URL, browser type, operating
          system, device information, and error logs.
        </p>
        <p>
          This data is used to provide secure and stable operation, diagnose faults, and defend
          against attacks. Processing may take place in the USA and other countries where Vercel or
          its subprocessors operate; section 8 also applies. Further information is available in the{" "}
          <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noreferrer">
            Vercel Privacy Notice
          </a>
          .
        </p>
      </section>

      <section>
        <h2>4. Contact, contract initiation, and client data</h2>
        <p>
          When you contact us by telephone, email, or chat, we process the information you provide.
          This may include your name, contact details, the content of your enquiry, and associated
          technical metadata. We use this data to respond to your enquiry, arrange appointments,
          prepare or perform a contract, and document our communication.
        </p>
        <p>
          Within the scope of an ongoing client relationship, master data, contract details,
          schedule records, service documentation, and payment information may also be processed.
          Contractual and accounting-related documents are generally retained for ten years in
          compliance with statutory obligations. Other correspondence is deleted or anonymised as
          soon as it is no longer required for its purpose, provided no legal retention obligations
          or legitimate interests prevent this.
        </p>
      </section>

      <section>
        <h2>5. Health data</h2>
        <p>
          To provide safe, personalised, and effective guidance, information regarding your health,
          symptoms, injuries, physical capacity, and training objectives may be required. Health
          data is classified as sensitive personal data. We only process this data to the extent
          necessary for your training and care, provided you have shared it with us or another legal
          basis exists.
        </p>
        <p>
          Please do not send confidential health information via the Tidio chat. Instead, use an
          appropriate communication channel agreed directly with Urs Gremlich. Health data is
          retained no longer than necessary for coaching, verification of services provided, and
          compliance with any statutory duties.
        </p>
      </section>

      <section id="chat">
        <h2>6. Optional live chat with Tidio</h2>
        <p>
          We use Tidio, a communication platform operated by Tidio LLC (San Francisco, USA) and
          Tidio Poland sp. z o.o. (Szczecin, Poland), for chat communication. The Tidio script is
          loaded automatically when you visit the website so that the chat icon is available at the
          edge of the screen. This establishes a connection to Tidio before the chat window is
          opened. Technically necessary connection data, particularly your IP address, is
          transmitted to Tidio. Tidio states that it only saves the IP address in the visitor
          profile when a person starts a chat. Actively using the chat remains entirely voluntary.
        </p>
        <p>
          The chat currently opens directly into a message field. No pre-chat form is enabled before
          the first message, and a name, email address, or telephone number is not mandatory. When
          you start a chat, the data processed may include chat content and timestamps, your IP
          address, identifiers in local browser storage, pages visited, browser and operating-system
          information, and any contact details you provide voluntarily. Wirkstattnatur uses this
          information solely to provide the chat, respond to enquiries, and manage conversation
          history. Please do not send confidential health information through the chat.
        </p>
        <p>
          Tidio states that application data is stored on servers in the European Economic Area. In
          connection with operations, support, and sub-processors, data may nevertheless be
          transferred to or accessed from the United States or other countries. Depending on the
          circumstances, Tidio refers to adequacy decisions, the Swiss-U.S. Data Privacy Framework,
          and standard contractual clauses as safeguards. Under Tidio's current terms, a data
          processing agreement is incorporated into the contractual terms for customers in
          Switzerland.
        </p>
        <p>
          Messages and associated contact data are stored within the Tidio application.
          Wirkstattnatur deletes or anonymises chat histories once they are no longer required to
          handle the enquiry or provide relevant evidence, unless a legal obligation or overriding
          interest requires continued retention. Deletion is performed in the Tidio dashboard. Tidio
          provides a deletion function for contacts and their conversation histories.
        </p>
        <p>
          Using the chat is optional. You can always reach us by telephone or email instead.
          Requests for access, correction or deletion can be sent to{" "}
          <a href="mailto:info@wirkstattnatur.ch">info@wirkstattnatur.ch</a>. Further information
          can be found in the{" "}
          <a href="https://www.tidio.com/privacy-policy/" target="_blank" rel="noreferrer">
            Tidio privacy policy
          </a>
          , Tidio's{" "}
          <a
            href="https://help.tidio.com/hc/en-us/articles/5462910440220-Privacy-Policy-and-GDPR-Compliance"
            target="_blank"
            rel="noreferrer"
          >
            privacy and GDPR guidance
          </a>
          , and its{" "}
          <a href="https://www.tidio.com/terms/" target="_blank" rel="noreferrer">
            data-processing information
          </a>
          .
        </p>
      </section>

      <section id="cookies">
        <h2>7. Cookies and similar technologies</h2>
        <p>
          Wirkstattnatur does not use any first-party analytics or marketing cookies on this website
          and does not store general cookie preferences. Due to the automatically loaded Tidio chat
          widget, entries in local browser storage, cookies, or similar technologies may be set as
          soon as you visit the website.
        </p>
        <p>
          Tidio states that under normal conditions it primarily relies on local browser storage and
          does not necessarily set cookies. Depending on technical requirements and enabled
          features, additional cookies or similar technologies may nevertheless be used. You can
          remove locally displayed chat history by clearing your browser storage. Further guidance
          is available in Tidio's{" "}
          <a
            href="https://help.tidio.com/hc/en-us/articles/12425531041052-How-visitors-can-remove-their-chat-history"
            target="_blank"
            rel="noreferrer"
          >
            chat-history removal instructions
          </a>
          .
        </p>
      </section>

      <section>
        <h2>8. Recipients and cross-border data transfers</h2>
        <p>
          Personal data is only accessed by Urs Gremlich and service providers who require it for
          the purposes described, specifically providers for web hosting, email services, and the
          optional chat feature. They process data either under contractual data processing
          agreements or under their own data protection responsibility.
        </p>
        <p>
          If data is transferred to a country without an adequate level of data protection, we
          ensure appropriate safeguards are in place—particularly recognised standard contractual
          clauses—or rely on statutory exceptions. Wherever practicable, we prioritise data
          processing within Switzerland or the European Economic Area.
        </p>
      </section>

      <section>
        <h2>9. External links</h2>
        <p>
          Links to Google Maps, Google reviews, and other external websites are not embedded
          widgets. Data is only transmitted to the respective provider when you actively click and
          open the link. From that moment onwards, the privacy policy of the respective external
          provider applies.
        </p>
      </section>

      <section>
        <h2>10. Your rights</h2>
        <p>
          Under applicable data protection law, you have the right to request information about your
          personal data, as well as its rectification, erasure, or surrender, and to object to data
          processing. Any consent previously granted can be withdrawn at any time with future
          effect. Statutory retention requirements and other legal restrictions remain reserved.
        </p>
        <p>
          Please direct your request to{" "}
          <a href="mailto:info@wirkstattnatur.ch">info@wirkstattnatur.ch</a>. To prevent misuse,
          suitable proof of identity may be required. You also have the right to lodge a complaint
          with the competent supervisory authority, in Switzerland the Federal Data Protection and
          Information Commissioner (FDPIC).
        </p>
      </section>

      <section>
        <h2>11. Amendments</h2>
        <p>
          We update this privacy policy whenever data processing practices, third-party services, or
          legal requirements change. The version published on this website at any given time is the
          current and binding version.
        </p>
      </section>
    </LegalPage>
  );
}
