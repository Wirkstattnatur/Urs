# Datenschutz- und Compliance-Checkliste

Diese Checkliste ergänzt die technische Umsetzung und die Rechtstexte der Website. Sie ist keine Rechtsberatung. Verantwortlich für die tatsächlichen Abläufe, Verträge, Aufbewahrungsfristen und Auskünfte bleibt Wirkstattnatur.

## Vor dem Produktionsstart

- [ ] Dokumentieren, dass für das Schweizer Tidio-Konto die aktuellen Vertragsbedingungen samt integrierter Auftragsbearbeitungsvereinbarung (DPA/ADV) gelten; bei Bedarf eine unterzeichnete Fassung samt Standardvertragsklauseln bei `privacy@tidio.net` anfordern und ablegen.
- [ ] Im Tidio-Dashboard prüfen, welche Bots, KI-Funktionen, Integrationen und Aufbewahrungsfristen aktiv sind. Die Datenschutzerklärung aktualisieren, falls mehr als der öffentlich sichtbare Live-Chat genutzt wird.
- [ ] Falls später ein Vorabformular, eine Automatisierung oder eine Datenerhebung vor der ersten Nachricht aktiviert wird, dort einen kurzen Datenschutzhinweis mit Link auf die Datenschutzerklärung einblenden.
- [ ] Sicherstellen, dass Chatverläufe und Kontakte in Tidio regelmässig gelöscht werden, sobald sie nicht mehr benötigt werden.
- [ ] Dokumentieren, dass die Auftragsbearbeitungsvereinbarung von Hostpoint als Bestandteil der Webhosting-AGB gilt, und die jeweils akzeptierte Fassung ablegen.
- [ ] Im Google-Analytics-Konto die Angaben zum Verantwortlichen prüfen, die Datenfreigaben auf das Erforderliche beschränken, Werbepersonalisierung deaktiviert lassen und die Aufbewahrung für Ereignis- und Nutzerdaten auf zwei Monate setzen.
- [ ] Die in den Google-Analytics-Kontobedingungen integrierten Datenverarbeitungsbedingungen prüfen und die aktuelle Fassung dokumentieren.
- [ ] HTTPS für die gesamte Domain erzwingen und Weiterleitungen von HTTP testen.
- [ ] Festlegen, wie Gesundheitsfragebogen und Gesundheitsangaben sicher übermittelt, abgelegt, zugriffsbeschränkt und gelöscht werden. Vertrauliche Gesundheitsdaten nicht über Tidio oder ungesicherte Nachrichten anfordern.
- [ ] Die intern tatsächlich verwendeten Aufbewahrungsfristen für Kunden-, Gesundheits-, Vertrags- und Kommunikationsdaten dokumentieren.
- [ ] Die AGB bei Vertragsabschluss nachweisbar zugänglich machen und die akzeptierte Fassung dokumentieren. Ein Footer-Link allein ersetzt keinen sauberen Einbezug in den Vertrag.
- [ ] Die unverändert übernommenen AGB durch eine Schweizer Rechtsanwältin oder einen Schweizer Rechtsanwalt auf zwingendes Recht und Durchsetzbarkeit prüfen lassen, insbesondere Haftungsausschluss und Gerichtsstand.

## Laufender Betrieb

- [ ] Auskunfts-, Berichtigungs- und Löschanfragen an `info@wirkstattnatur.ch` dokumentiert und fristgerecht bearbeiten.
- [ ] Zugänge zu Hostpoint, E-Mail und Tidio nur Personen geben, die sie benötigen; individuelle Konten und Mehrfaktor-Authentisierung verwenden.
- [ ] Datenschutzverletzungen intern dokumentieren und prüfen, ob eine Meldung an den EDÖB beziehungsweise eine Information betroffener Personen erforderlich ist.
- [ ] Mindestens jährlich und nach jeder neuen Integration prüfen, ob Datenschutzerklärung, Impressum und die tatsächlichen Datenflüsse noch dem Betrieb entsprechen.
- [ ] Keine Analyse-, Werbe-, Karten-, Video- oder Social-Media-Einbettung hinzufügen, bevor Datenfluss, Einwilligung und Datenschutzerklärung geprüft wurden.

## Technische Soll-Lage dieser Website

- Google Fonts werden lokal ausgeliefert.
- Google Analytics wird erst nach ausdrücklicher Einwilligung geladen; Google-Werbetracking und Werbepersonalisierung sind im Website-Code deaktiviert.
- Die Logaholic-Auswertung der Hostpoint-Logfiles ist deaktiviert und darf nicht ohne vorgängige Datenschutzprüfung aktiviert werden.
- Google Maps und Google-Rezensionen sind nur externe Links und nicht eingebettet.
- Tidio wird beim Seitenbesuch automatisch geladen, damit das Chatsymbol sichtbar ist; die Datenschutzerklärung beschreibt die dabei entstehende Verbindung und mögliche Browser-Speicherung.
- Öffentliche Prüfung am 20. August 2026: Der Chat führt direkt zu einem Nachrichtenfeld. Es ist kein Vorabformular sichtbar, und Name, E-Mail-Adresse oder Telefonnummer werden vor der ersten Nachricht nicht zwingend abgefragt.

## Prüfreferenzen

- [EDÖB: Datenschutzerklärungen im Internet](https://www.edoeb.admin.ch/de/datenschutzerklaerungen-im-internet)
- [EDÖB: Leitfaden zu Cookies und ähnlichen Technologien](https://www.edoeb.admin.ch/de/leitfaden-betreffend-datenbearbeitungen-mittels-cookies-veroeffentlicht)
- [Hostpoint Datenschutzerklärung](https://www.hostpoint.ch/hostpoint/kontakt-agb.html#datenschutz)
- [Hostpoint: Auftragsbearbeitungsvereinbarung](https://support.hostpoint.ch/de/administratives/schweizer-dsg/haeufig-gestellte-fragen-zum-neuen-schweizer-dsg/bietet-hostpoint-fuer-kunden-eine-auftragsdatenverarbeitungsvereinbarung-adv)
- [Tidio: Privacy Policy and GDPR Compliance](https://help.tidio.com/hc/en-us/articles/5462910440220-Privacy-Policy-and-GDPR-Compliance)
- [Tidio Privacy Policy](https://www.tidio.com/privacy-policy/)
