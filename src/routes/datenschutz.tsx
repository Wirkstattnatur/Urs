import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung — Wirkstattnatur" },
      {
        name: "description",
        content: "Datenschutzerklärung von Wirkstattnatur gemäss Schweizer Datenschutzrecht.",
      },
    ],
    links: [{ rel: "canonical", href: "https://wirkstattnatur.ch/datenschutz" }],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <LegalPage
      currentPath="/datenschutz"
      title="Datenschutzerklärung"
      description="Transparent erklärt: welche Daten wir bearbeiten, wofür wir sie benötigen und welche Wahlmöglichkeiten du hast."
    >
      <p className="legal-meta">Stand: 14. August 2026</p>

      <aside className="legal-summary" aria-labelledby="privacy-summary-title">
        <h2 id="privacy-summary-title">Das Wichtigste in Kürze</h2>
        <ul>
          <li>Diese Website verwendet keine Analyse- oder Werbetracker.</li>
          <li>
            Die Schriften werden lokal geladen; dabei findet keine Verbindung zu Google Fonts statt.
          </li>
          <li>Der Tidio-Chat wird erst geladen, wenn du «Chat starten» anklickst.</li>
          <li>
            Google Maps und andere externe Seiten werden nur geöffnet, wenn du einen Link anklickst.
          </li>
        </ul>
      </aside>

      <section>
        <h2>1. Verantwortlicher</h2>
        <p>Verantwortlich für die Bearbeitung von Personendaten ist:</p>
        <address>
          <strong>Wirkstattnatur, Urs Gremlich</strong>
          <br />
          Hernerholzgasse 30
          <br />
          8810 Horgen, Schweiz
          <br />
          <a href="mailto:info@wirkstattnatur.ch">info@wirkstattnatur.ch</a>
          <br />
          <a href="tel:+41794131830">079 413 18 30</a>
        </address>
      </section>

      <section>
        <h2>2. Geltungsbereich und Grundsätze</h2>
        <p>
          Diese Datenschutzerklärung beschreibt die Bearbeitung von Personendaten beim Besuch dieser
          Website, bei der Kontaktaufnahme und im Zusammenhang mit den Dienstleistungen von
          Wirkstattnatur. Es gelten insbesondere das Schweizer Datenschutzgesetz (DSG) und die
          Datenschutzverordnung (DSV). Soweit im Einzelfall anwendbar, werden zusätzlich die
          Vorgaben der EU-Datenschutz-Grundverordnung berücksichtigt.
        </p>
        <p>
          Wir bearbeiten nur Daten, die für einen nachvollziehbaren Zweck erforderlich sind,
          behandeln sie vertraulich und schützen sie mit angemessenen technischen und
          organisatorischen Massnahmen. Personendaten werden weder verkauft noch für fremde Werbung
          genutzt.
        </p>
      </section>

      <section>
        <h2>3. Website und Hosting</h2>
        <p>
          Die Website wird bei der Hostpoint AG, Neue Jonastrasse 60, 8640 Rapperswil-Jona, Schweiz,
          gehostet. Beim Aufruf werden technisch notwendige Protokolldaten bearbeitet. Dazu können
          insbesondere IP-Adresse, Datum und Uhrzeit, aufgerufene Adresse, Statuscode, übertragene
          Datenmenge, verweisende Seite, Browser, Betriebssystem und Fehlermeldungen gehören.
        </p>
        <p>
          Diese Daten dienen dem sicheren und stabilen Betrieb, der Fehleranalyse und der Abwehr von
          Angriffen. Hostpoint speichert Protokolldaten nach eigenen Angaben bis zum Wegfall der
          betrieblichen Notwendigkeit und dem Ablauf gesetzlicher oder vertraglicher Fristen; für
          die meisten Daten höchstens sechs Monate. Das Hosting und die Sicherungen erfolgen in der
          Schweiz.
        </p>
      </section>

      <section>
        <h2>4. Kontakt, Vertragsanbahnung und Kundendaten</h2>
        <p>
          Wenn du uns per Telefon, E-Mail oder Chat kontaktierst, bearbeiten wir die von dir
          mitgeteilten Angaben. Dazu können Name, Kontaktangaben, Inhalt der Anfrage und technische
          Begleitdaten gehören. Wir verwenden sie, um deine Anfrage zu beantworten, Termine zu
          vereinbaren, einen Vertrag vorzubereiten oder zu erfüllen und die Kommunikation zu
          dokumentieren.
        </p>
        <p>
          Im Rahmen einer Kundenbeziehung können zusätzlich Stamm-, Vertrags-, Termin-, Leistungs-
          und Zahlungsdaten anfallen. Vertrags- und buchhaltungsrelevante Unterlagen werden im
          Rahmen der gesetzlichen Pflichten in der Regel zehn Jahre aufbewahrt. Andere Korrespondenz
          löschen oder anonymisieren wir, sobald sie für den jeweiligen Zweck nicht mehr
          erforderlich ist und keine Aufbewahrungspflicht oder berechtigtes Interesse entgegensteht.
        </p>
      </section>

      <section>
        <h2>5. Gesundheitsdaten</h2>
        <p>
          Für eine sichere und individuell abgestimmte Betreuung können Angaben zu Gesundheit,
          Beschwerden, Verletzungen, Belastbarkeit und Trainingszielen erforderlich sein.
          Gesundheitsdaten gelten als besonders schützenswerte Personendaten. Wir bearbeiten sie
          nur, soweit dies für die Betreuung erforderlich ist, du sie uns mitteilst oder eine andere
          gesetzliche Grundlage besteht.
        </p>
        <p>
          Bitte sende vertrauliche Gesundheitsangaben nicht über den Tidio-Chat. Nutze dafür den
          direkt mit Urs Gremlich vereinbarten, geeigneten Übermittlungsweg. Gesundheitsdaten werden
          nicht länger aufbewahrt, als dies für die Betreuung, den Nachweis der Leistung und
          allfällige gesetzliche Pflichten erforderlich ist.
        </p>
      </section>

      <section id="chat">
        <h2>6. Optionaler Chat mit Tidio</h2>
        <p>
          Für den Live-Chat verwenden wir Tidio. Der Dienst wird von Tidio LLC, San Francisco, USA,
          und Tidio Poland sp. z o.o., Szczecin, Polen, angeboten. Der Chat ist optional. Das
          Tidio-Skript wird erst geladen, wenn du bewusst «Chat starten» anklickst. Beim
          gewöhnlichen Seitenbesuch entsteht keine Verbindung zu Tidio.
        </p>
        <p>
          Dabei können IP-Adresse, Geräte- und Browserinformationen, Nutzungsdaten, Identifikatoren
          im Browser-Speicher sowie die von dir eingegebenen Kontaktangaben und Chat-Inhalte
          bearbeitet werden. Wirkstattnatur nutzt diese Angaben, um die Chatfunktion
          bereitzustellen, Anfragen zu beantworten und den Gesprächsverlauf zuzuordnen. Tidio gibt
          an, die übermittelten Daten hauptsächlich im EWR und auf dort befindlichen Servern zu
          bearbeiten. Einzelne Daten können in die USA oder weitere Länder übermittelt werden. Tidio
          nennt dafür insbesondere das Swiss-U.S. Data Privacy Framework und
          Standardvertragsklauseln als Garantien.
        </p>
        <p>
          Die Nutzung des Chats ist freiwillig. Alternativ kannst du per Telefon oder E-Mail Kontakt
          aufnehmen. Weitere Informationen findest du in der
          <a href="https://www.tidio.com/privacy-policy/" target="_blank" rel="noreferrer">
            {" "}
            Datenschutzerklärung von Tidio
          </a>
          .
        </p>
      </section>

      <section id="cookies">
        <h2>7. Cookies und ähnliche Technologien</h2>
        <p>
          Wirkstattnatur setzt auf dieser Website keine Analyse- oder Marketing-Cookies ein und
          speichert keine allgemeine Cookie-Auswahl. Solange du den Chat nicht startest, werden von
          Tidio weder Cookies noch Einträge im lokalen Browser-Speicher gesetzt.
        </p>
        <p>
          Wenn du den Chat startest, nutzt Tidio nach eigenen Angaben überwiegend den lokalen
          Browser-Speicher und kann je nach technischer Situation zusätzlich Cookies oder
          vergleichbare Technologien einsetzen. Du kannst Browser-Speicher und Cookies über die
          Einstellungen deines Browsers löschen.
        </p>
      </section>

      <section>
        <h2>8. Empfänger und Bekanntgabe ins Ausland</h2>
        <p>
          Personendaten erhalten nur Urs Gremlich und jene Dienstleister, die sie für den
          beschriebenen Zweck benötigen, insbesondere Anbieter für Hosting, E-Mail und den
          optionalen Chat. Sie bearbeiten Daten im Rahmen ihrer vertraglichen Aufgaben oder in
          eigener datenschutzrechtlicher Verantwortung.
        </p>
        <p>
          Werden Daten in ein Land ohne angemessenes Datenschutzniveau bekanntgegeben, verwenden wir
          geeignete Garantien, insbesondere anerkannte Standardvertragsklauseln, oder stützen uns
          auf eine gesetzliche Ausnahme. Soweit möglich, bevorzugen wir die Bearbeitung in der
          Schweiz oder im Europäischen Wirtschaftsraum.
        </p>
      </section>

      <section>
        <h2>9. Externe Links</h2>
        <p>
          Links zu Google Maps, Google-Rezensionen und anderen externen Websites sind nicht
          eingebettet. Daten werden an den jeweiligen Anbieter erst übermittelt, wenn du den Link
          öffnest. Ab diesem Zeitpunkt gelten die Datenschutzbestimmungen des jeweiligen Anbieters.
        </p>
      </section>

      <section>
        <h2>10. Deine Rechte</h2>
        <p>
          Du kannst im Rahmen des anwendbaren Rechts insbesondere Auskunft über deine Personendaten
          sowie deren Berichtigung, Löschung oder Herausgabe verlangen und einer Bearbeitung
          widersprechen. Eine erteilte Einwilligung kannst du jederzeit für die Zukunft widerrufen.
          Gesetzliche Aufbewahrungspflichten und andere gesetzliche Einschränkungen bleiben
          vorbehalten.
        </p>
        <p>
          Richte dein Anliegen an <a href="mailto:info@wirkstattnatur.ch">info@wirkstattnatur.ch</a>
          . Zur Verhinderung von Missbrauch kann ein geeigneter Identitätsnachweis verlangt werden.
          Du kannst dich ausserdem an den Eidgenössischen Datenschutz- und
          Öffentlichkeitsbeauftragten (EDÖB) wenden.
        </p>
      </section>

      <section>
        <h2>11. Änderungen</h2>
        <p>
          Wir passen diese Datenschutzerklärung an, wenn sich Datenbearbeitungen, eingesetzte
          Dienste oder rechtliche Anforderungen ändern. Es gilt die jeweils auf dieser Website
          veröffentlichte Fassung.
        </p>
      </section>
    </LegalPage>
  );
}
