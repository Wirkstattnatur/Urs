import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Wirkstattnatur" },
      {
        name: "description",
        content: "Anbieter- und Kontaktangaben von Wirkstattnatur, Urs Gremlich.",
      },
    ],
    links: [{ rel: "canonical", href: "https://wirkstattnatur.ch/impressum" }],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <LegalPage
      currentPath="/impressum"
      title="Impressum"
      description="Anbieterangaben, Verantwortlichkeiten und rechtliche Hinweise."
    >
      <section>
        <h2>Anbieter, Inhaber und verantwortlich für den Inhalt</h2>
        <address>
          <strong>Wirkstattnatur</strong>
          <br />
          Urs Gremlich
          <br />
          Hernerholzgasse 30
          <br />
          8810 Horgen
          <br />
          Schweiz
        </address>
        <p>
          <a href="mailto:info@wirkstattnatur.ch">info@wirkstattnatur.ch</a>
          <br />
          <a href="tel:+41794131830">079 413 18 30</a>
        </p>
      </section>

      <section>
        <h2>Fotografie und Texte</h2>
        <p>
          Fotografie: Roger Oberholzer, Fotografie-Manufaktur.
          <br />
          Texte der bisherigen Website: Marcel Friedli, Friedlitexte, und Rahel Zuber.
        </p>
      </section>

      <section>
        <h2>Urheberrechte</h2>
        <p>
          Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf
          der Website gehören ausschliesslich Wirkstattnatur oder den speziell genannten
          Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung
          der Urheberrechtsträger im Voraus einzuholen.
        </p>
      </section>

      <section>
        <h2>Haftungsausschluss</h2>
        <p>
          Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit,
          Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
        </p>
        <p>
          Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche
          aus dem Zugriff oder der Nutzung beziehungsweise Nichtnutzung der veröffentlichten
          Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden
          sind, werden im gesetzlich zulässigen Umfang ausgeschlossen.
        </p>
        <p>
          Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der
          Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu
          löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
        </p>
      </section>

      <section>
        <h2>Haftung für Links</h2>
        <p>
          Verweise und Links auf Websites Dritter liegen ausserhalb unseres Verantwortungsbereichs.
          Es wird jegliche Verantwortung für solche Websites abgelehnt. Der Zugriff und die Nutzung
          solcher Websites erfolgen auf eigene Gefahr der Nutzerin oder des Nutzers.
        </p>
      </section>
    </LegalPage>
  );
}
