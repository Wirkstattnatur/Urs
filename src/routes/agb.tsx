import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { getLegalPageSchema, getSeoHead, jsonLdScript } from "@/lib/seo";

const title = "Allgemeine Geschäftsbedingungen — Wirkstattnatur";
const description = "Allgemeine Geschäftsbedingungen von Wirkstattnatur, Urs Gremlich.";

export const Route = createFileRoute("/agb")({
  head: () => ({
    ...getSeoHead({ path: "/agb", title, description, locale: "de-CH" }),
    scripts: [
      jsonLdScript(
        getLegalPageSchema({ path: "/agb", name: title, description, inLanguage: "de-CH" }),
      ),
    ],
  }),
  component: AgbPage,
});

function AgbPage() {
  return (
    <LegalPage
      currentPath="/agb"
      title="Allgemeine Geschäftsbedingungen"
      description="Die Bedingungen für sämtliche Dienstleistungen von Wirkstattnatur."
    >
      <p className="legal-intro">
        Alle Dienstleistungen von Wirkstattnatur unterliegen vollumfänglich diesen Bedingungen,
        sofern sie nicht durch schriftliche Vereinbarungen abgeändert oder ergänzt wurden.
      </p>

      <section>
        <h2>1. Allgemeines</h2>
        <p>
          Grundsätzlich dauert eine Dienstleistung von Wirkstattnatur eine Stunde. Bei längerer
          Dauer wird prozentual auf 15 Minuten verrechnet. Damit ich mich seriös auf Ihre Betreuung
          vorbereiten kann, bitte ich um frühzeitige Buchung (mind. drei Tage im Voraus).
        </p>
      </section>

      <section>
        <h2>2. Preise und Zahlungsbedingungen</h2>
        <p>
          Bei einem Abonnement wird der vollständige Betrag per Einzahlungsschein 10 Tage nach
          Antritt des 1. Trainings überwiesen oder bar bezahlt. Einzeltrainings und andere
          Dienstleistungen wie beispielsweise Fettmessungen, Ernährungsanalysen oder
          Trainingsplanungen werden im Anschluss bar bezahlt.
        </p>
        <p>
          Die angegebenen Preise verstehen sich exklusive Reisespesen. Ebenso im Preis nicht
          inbegriffen sind Eintrittspreise sowie Miete von Material und Örtlichkeiten (Sporthallen,
          Fitnesscenter, Hallenbäder, Sportanlagen, etc.). Damit Ihnen im Verhinderungsfall keine
          Kosten entstehen, muss die Absage bis spätestens 24 Stunden vorher erfolgen. Versäumte
          Termine werden zum vereinbarten Stundenansatz verrechnet.
        </p>
      </section>

      <section>
        <h2>3. Gesundheitsfragebogen</h2>
        <p>
          Der Gesundheitsfragebogen mit Ihren Gesundheitsangaben ist gleich zu Beginn vollständig
          auszufüllen. Aus Haftungsgründen von Wirkstattnatur ist dies obligatorisch. Zudem
          unterstützen Ihre persönlichen und detaillierten Angaben die Gestaltung eines
          individuellen, effizienten und effektiven Trainings. Selbstverständlich unterstellt sich
          Wirkstattnatur der Schweigepflicht.
        </p>
      </section>

      <section>
        <h2>4. Haftung und Versicherung</h2>
        <p>
          Die Haftung für Schäden jeglicher Art, die der Kunde/die Kundin im Rahmen der
          Inanspruchnahme von Dienstleistungen erleidet, ist ausgeschlossen. Die Versicherung ist
          die Sache des Kunden/der Kundin.
        </p>
      </section>

      <section>
        <h2>5. Vertragsabschluss</h2>
        <p>
          Der Vertrag ist mit dem Ausfüllen des Gesundheits-Fragebogens und dem gegenseitigen
          Unterzeichnen rechtskräftig. Die AGB von Wirkstattnatur werden hiermit anerkannt.
        </p>
      </section>

      <section>
        <h2>6. Diverses</h2>
        <p>
          Kann ein Abonnement aufgrund von Krankheit oder Unfall nicht mehr benützt werden, kann die
          Dienstleistung gegen Vorweisen eines ärztlichen Zeugnisses zu einem späteren Zeitpunkt
          bezogen werden. Es werden keine Leistungen zurückbezahlt.
        </p>
      </section>

      <section>
        <h2>7. Gerichtsstand</h2>
        <p>Horgen ist ausschliesslicher Gerichtsstand.</p>
      </section>
    </LegalPage>
  );
}
