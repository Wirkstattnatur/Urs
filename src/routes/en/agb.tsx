import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { getLegalPageSchema, getSeoHead, jsonLdScript } from "@/lib/seo";

const title = "Terms and conditions — Wirkstattnatur";
const description =
  "The terms and conditions that apply to all services provided by Wirkstattnatur.";

export const Route = createFileRoute("/en/agb")({
  head: () => ({
    ...getSeoHead({ path: "/en/agb", title, description, locale: "en" }),
    scripts: [
      jsonLdScript(
        getLegalPageSchema({ path: "/en/agb", name: title, description, inLanguage: "en" }),
      ),
    ],
  }),
  component: EnglishAgbPage,
});

function EnglishAgbPage() {
  return (
    <LegalPage currentPath="/en/agb" locale="en" title={title} description={description}>
      <p className="legal-intro">
        All services provided by Wirkstattnatur are subject in full to these terms and conditions,
        unless amended or supplemented by written agreement.
      </p>

      <section>
        <h2>1. General</h2>
        <p>
          As a rule, a service provided by Wirkstattnatur lasts one hour. In the case of a longer
          duration, the fee is charged pro rata in 15-minute increments. To allow me to prepare
          properly for your session, please book in good time (at least three days in advance).
        </p>
      </section>

      <section>
        <h2>2. Prices and payment terms</h2>
        <p>
          For a subscription, the full amount must be transferred by payment slip within 10 days of
          starting the first training session, or paid in cash. Individual training sessions and
          other services, such as body-fat measurements, nutritional analyses or training planning,
          are paid in cash immediately afterwards.
        </p>
        <p>
          The stated prices do not include travel expenses. Admission fees and the hire of equipment
          and venues (sports halls, fitness centres, indoor swimming pools, sports facilities, etc.)
          are likewise not included in the price. To ensure that you do not incur any costs in the
          event of inability to attend, cancellations must be made at least 24 hours in advance.
          Missed appointments will be charged at the agreed hourly rate.
        </p>
      </section>

      <section>
        <h2>3. Health questionnaire</h2>
        <p>
          The health questionnaire containing your health details must be completed in full right at
          the start. This is mandatory for reasons of liability concerning Wirkstattnatur. In
          addition, your personal and detailed information supports the design of an individual,
          efficient and effective training programme. Wirkstattnatur is, of course, bound by
          confidentiality.
        </p>
      </section>

      <section>
        <h2>4. Liability and insurance</h2>
        <p>
          Liability for damage or loss of any kind suffered by the client in connection with the use
          of services is excluded. Insurance is the sole responsibility of the client.
        </p>
      </section>

      <section>
        <h2>5. Conclusion of contract</h2>
        <p>
          The contract becomes legally effective upon completion of the health questionnaire and
          mutual signature. The Terms and Conditions of Wirkstattnatur are hereby acknowledged and
          accepted.
        </p>
      </section>

      <section>
        <h2>6. Miscellaneous</h2>
        <p>
          If a subscription can no longer be used due to illness or accident, the service may be
          obtained at a later date upon presentation of a medical certificate. No refunds will be
          issued.
        </p>
      </section>

      <section>
        <h2>7. Place of jurisdiction</h2>
        <p>Horgen is the exclusive place of jurisdiction.</p>
      </section>
    </LegalPage>
  );
}
