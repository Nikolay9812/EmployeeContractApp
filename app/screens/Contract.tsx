// Contract.tsx - Общ HTML шаблон
export const contractTemplate = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contract</title>
    <style>
      body {
        line-height: 1.6;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      li {
        margin-bottom: 10px;
      }
      .photo {
        max-width: 100%;
        max-height: 900px;
        display: block;
        margin: 0 auto;
      }
      tbody tr:nth-child(odd) {
        background-color: #97bade;
      }
      tbody tr:nth-child(even) {
        background-color: #e0f2fe;
      }
      section {
        background: white;
        min-height: 900px;
        padding: 0 100px;
        display: block;
        page-break-after: always;
      }
    </style>
  </head>
  <body>
    {{sections}}
  </body>
  </html>
`;

// Шаблони за секции
export const contractSections = [
  {
    title: "Training Amazon DHE1",
    content: `
      <section class="page-break">
        <h1 class="text-center font-bold text-xl">KURIER- UND PAKETDIENST</h1>
        <div>
            <h3>Geibel-Transport-GmbH@web.de</h3>
            <h3>Tel.: 01736443067, Email: <a href="#">Geibel-Transport-GmbH@web.de</a></h3>
        </div>
        <div class="flex justify-between">
            <u>Thomas Geibel, Im Boden 23, 65795 Hattersheim</u>
            <h2>Mannheim, {{date}}</h2>
        </div>
        <p>Training</p>
        <p>Sehr geehrtes Amazon-Team,</p>
        <p>Hiermit bestätigen wir, dass der Zusteller {{name}} das Fahrer-Training entsprechend der Amazonvorgaben
            erhalten hat.</p>
        <p>Mit freundlichen Grüßen</p>
        <img src="{{signature}}" alt="Signature" style="width: 200px; height: 100px;" />
        <div class="flex justify-between">
            <p>Trainingsveranstalter Druckschrift </p>
            <p>Training erhalten</p>
        </div>
        <img src="{{signature}}" alt="Signature" style="width: 200px; height: 100px;" />
        <p>Trainingsveranstalter Unterschrift</p>
    </section>
    `,
  },
  {
    title: "Arbeitsanweisung StVo Betriebssicherheit Zhivko ivanov",
    content: `<section class="page-break gap-3">
        <div class="w-full">
            <div class="h-[2px] bg-black"></div>
            <h1 class="text-center my-[30px] text-xl font-bold">KURIER- UND PAKETDIENST<br>
                Zhivko Ivanov Kleintransporte<br>
                Email: z.ivanov@gmx.de </h1>
            <div class="h-[2px] bg-black"></div>
        </div>
        <h1 class="text-center text-2xl font-extrabold my-[30px]"><u>Arbeitsanweisung für Fahrer </u><br>
            zur Einhaltung der Betriebs- und Verkehrssicherheit des <br>
            von ihm geführten Fahrzeuges </h1>
        <ul class="list-disc pl-[20px]">
            <li> Vor Beginn der Fahrt ist das Fahrzeug vom Fahrer auf <b>Betriebs- und

                    Verkehrssicherheit</b> zu überprüfen.</li>

            <li> Hierzu gehören insbesondere die Kontrolle von:
                <ul class="ml-[20px]">
                    <li>&ndash; Kühlflüssigkeit</li>
                    <li>&ndash; Motoröl</li>
                    <li>&ndash; Reifendruck, Profiltiefe, Beschädigungen</li>
                    <li>&ndash; Bremsen</li>
                    <li>&ndash; Lichtanlage</li>
                    <li>&ndash; Ladungssicherung</li>
                    <li>&ndash; Unfallschäden und sonstige Beschädigungen an der Karosserie</li>
                    <li>&ndash; Sonstige Mängel</li>
                </ul>
            </li>
            <li> Festgestellte Mängel, die nicht vom Fahrer direkt behoben werden können, sind

                unverzüglich dem Fuhrparkverantwortlichen zu melden.</li>

            <li><b>Betriebs- und verkehrsunsichere Fahrzeuge dürfen keinesfalls am

                    Straßenverkehr teilnehmen!</b></li>

            <li>Die Vorschriften der StVO sind einzuhalten. Insbesondere sind die vorgeschriebenen

                Höchstgeschwindigkeiten nicht zu überschreiten. Die Fahrweise ist den
                Witterungsverhältnissen anzupassen. </li>

            <li> Der Verlust des Führerscheines bzw. ein Fahrverbot ist dem Vorgesetzen sofort

                anzuzeigen.</li>

            <li> Die Einhaltung des Arbeitszeitgesetzes und bei Fahrzeugen mit einem zulässigen

                Gesamtgewicht > 2,8 t die Einhaltung der Lenkzeitverordnung ist sicherzustellen. Die
                gesetzlich vorgeschriebenen Pausen sind einzuhalten. </li>

            <li><b>Bei einer Panne</b> ist die Warnweste anzulegen und das Fahrzeug vorschriftsmäßig

                abzusichern. </li>

            <li> Lässt sich die Panne nicht selbst beheben, ist der Fuhrparkverantwortliche

                unverzüglich zu informieren.</li>

            <li> Beschädigungen am Fahrzeug, gleich welchen Ausmaßes, sind bei Rückkehr von

                Tour dem Fuhrparkverantwortlichen zu melden.</li>

            <li> Bußgelder, Verwarnungen mit Verwarnungsgeld sowie Strafmandate werden dem
            </li>
        </ul>

        <p>Die Arbeitsanweisung ist Bestandteil des Arbeitsvertrages. Ich habe die Arbeitsanweisung
            erhalten und verstanden
        </p>
        <div class="flex justify-between pt-3">
            <div class="text-center">
                <div class="flex">
                    <p>{{date}}</p>
                    <img src="{{signature}}" alt="Signature" style="width: 200px; height: 100px;" />
                </div>
                <p>Datum, Unterschrift Mitarbeiter</p>
            </div>
            <div class="text-center">
                <img src="{{signature}}" alt="Signature" style="width: 200px; height: 100px;" />
                <p>Name in Druckschrift</p>
            </div>
        </div>
    </section>`,
  },
  {
    title: "Merkblatt_für_DSPs_Hazmat_20181108",
    content: `<section class="page-break gap-3">
        <h1 class="text-blue-400 text-xl">Merkblatt für Delivery Service Provider (DSPs) bzgl. Gefahrgut in begrenzten
            Mengen: </h1>
        <ul class="m-[50px] flex flex-col gap-2 list-decimal">
            <li>Unter den Sendungen, welche Sie als DSP für Amazon ausliefern, befinden sich auch Produkte, die
                Gefahrgüter
                enthalten, jedoch nur Gefahrgüter in begrenzten Mengen, die unter „Sondervorschriften“ (ADR 2017 Kapitel
                3.3) oder unter „Begrenzte Mengen“ (ADR 2017 Kapitel 3.4) fallen. Gefahrgut, das unter
                „Sondervorschriften“
                geregelt ist, sind z.B. Lithium-Batterien. Gefahrgut, das unter „Begrenzte Mengen“ fällt, sind z.B.
                Aerosoldosen
                unter 1 Liter</li>
            <li>Folgende Gefahrstoffklassen werden von Amazon versandt:</li>
            <div class="container mx-auto">
                <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead>
                        <tr class="bg-blue-600 text-left text-white">
                            <th class="py-2 px-4 border-b">Gefahrgutklasse</th>
                            <th class="py-2 px-4 border-b">ADR Klasse</th>
                            <th class="py-2 px-4 border-b">Beispiele</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50">
                            <td class="py-2 px-4 border-b">Brennbare Gase</td>
                            <td class="py-2 px-4 border-b">2.1</td>
                            <td class="py-2 px-4 border-b">Spraydose mit brennbaren Treibmitteln, Deo</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="py-2 px-4 border-b">Nicht brennbare Gase</td>
                            <td class="py-2 px-4 border-b">2.2</td>
                            <td class="py-2 px-4 border-b">CO2 Kartusche</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="py-2 px-4 border-b">Brennbare Flüssigkeiten</td>
                            <td class="py-2 px-4 border-b">3</td>
                            <td class="py-2 px-4 border-b">Nagellackentferner, Parfum, Farbverdünner</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="py-2 px-4 border-b">Brennbare Feststoffe</td>
                            <td class="py-2 px-4 border-b">4.1</td>
                            <td class="py-2 px-4 border-b">Streichhölzer</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="py-2 px-4 border-b">Oxidierende Substanzen</td>
                            <td class="py-2 px-4 border-b">5.1</td>
                            <td class="py-2 px-4 border-b">Haarbleiche</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="py-2 px-4 border-b">Giftig wirkende Substanzen</td>
                            <td class="py-2 px-4 border-b">6.1</td>
                            <td class="py-2 px-4 border-b">Unkraut Ex, Rattengift, Schädlingsbekämpfungsmittel</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="py-2 px-4 border-b">Korrosive Substanzen</td>
                            <td class="py-2 px-4 border-b">8</td>
                            <td class="py-2 px-4 border-b">Säuren, Laugen</td>
                        </tr>
                        <tr class="hover:bg-gray-50">
                            <td class="py-2 px-4 border-b">Verschiedenes</td>
                            <td class="py-2 px-4 border-b">9</td>
                            <td class="py-2 px-4 border-b">Lithium-Ionen-Batterien, magnetische Materialien</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            <li>Alle Sendungen sind von Amazon entsprechend gelabelt: </li>
            <img class='photo'
                src="https://firebasestorage.googleapis.com/v0/b/mern-blog-68008.appspot.com/o/Screenshot%20(163).png?alt=media&token=f47068a1-7d26-4b5f-bb18-f3c8b5afccd4"
                alt="Screenshot">
            <li>Als DSP sind Sie verantwortlich für Ladungssicherheit und den korrekten Transport der Sendungen und
                versichern, dass Sie ihre Fahrer (einschließlich etwaige Unterauftragnehmer) entsprechend trainieren.
            </li>
            <li>Als DSP stellen Sie sicher, dass alle LQ- und Lithium-Batterie-Packungen während des Transports
                jederzeit
                im
                Ladebereich in den Transporttaschen aufbewahrt werden. Zu keinem Zeitpunkt sollte ein LQ- oder
                LithiumBatterie-Paket im Passagierbereich aufbewahrt werden</li>
            <li>Als DSP stellen Sie sicher, dass alle Fahrer (einschließlich etwaige Unterauftragnehmer) das
                nachfolgende
                Informationsblatt zum Umgang mit auslaufenden Flüssigkeiten ausgehändigt bekommen und ferner das
                nachfolgende Hinweisblatt zu begrenzten/freigestellten Mengen stets im Fahrzeug mitführen. </li>
            <li>Wir weisen auf die entsprechenden vertraglichen Vereinbarungen in den DE AMZL Operating Guidelines
                Abschnitt Carriage of Dangerous Goods hin. Dieses Merkblatt ist keine Änderung der bestehenden
                vertraglichen Vereinbarungen. </li>
        </ul>
        <p class="text-blue-400">Zur Kenntnis genommen:</p>
        <div class="flex text-blue-400 justify-between pt-3">
            <div class="flex">
                <p>Datum:</p>
                <p>{{date}}</p>
            </div>
            <div class="flex">
                <p>DSP Name und Firma: Zhivko Ivanov Kleintransporte </p>
            </div>
            <div class="flex">
                <p>Unterschrift</p> <img src="{{signature}}" alt="Signature" style="width: 200px; height: 100px;" />
            </div>
        </div>
    </section>

    <section class="page-break">
        <p class="text-blue-400">Informationsblatt:</p>
        <h1 class="underline my-[30px] text-2xl font-extrabold text-orange-500 text-center">Beschädigte Pakete:<br>
            Verhalten bei auslaufenden Flüssigkeiten</h1>
        <img class='photo'
            src="https://firebasestorage.googleapis.com/v0/b/mern-blog-68008.appspot.com/o/Screenshot%20(165).png?alt=media&token=8403aafd-5ebf-4601-b706-30a1c08626bc"
            alt="Screenshot">
        <img class='photo'
            src="https://firebasestorage.googleapis.com/v0/b/mern-blog-68008.appspot.com/o/Screenshot%20(166).png?alt=media&token=961cd076-df0b-404e-9c7f-61f56f98e340"
            alt="Screenshot">
    </section>

    <section class="justify-normal page-break">
        <p class="text-blue-400">Hinweisblatt: </p>
        <img class='photo'
            src="https://firebasestorage.googleapis.com/v0/b/mern-blog-68008.appspot.com/o/Screenshot%20(167).png?alt=media&token=b1fe2b7b-9229-46b8-b562-8cabe6599054"
            class="rotate-[-90deg] my-[200px]" alt="Screenshot">
    </section>`,
  },
  {
    title: "6.1 AMZL Privacy",
    content: `<section class="gap-3 page-break">
        <b>AMZL Privacy Notice für Lieferpartner</b>

        <p>
            Wir wissen, dass Sie darüber informiert sein möchten, wie Ihre Daten genutzt und weitergegeben werden,
            und
            danken Ihnen für Ihr Vertrauen in uns im Hinblick auf eine sorgfältige und gewissenhafte Behandlung
            Ihrer Daten.
            Diese Privacy Notice beschreibt, wie Amazon Ihre personenbezogenen Daten als ein Lieferpartner im
            Zusammenhang mit der Abholung, Zustellung und dazugehörigen Services (zusammen, die „Zustelldienste“),
            die Ihr
            Zustelldienstleister („<b>ZDL</b>“) Amazon zur Verfügung stellt, erhebt und verarbeitet.
        </p>

        <b>Abschnitte</b>
        <ul class="list-disc pl-[40px] my-[20px]">
            <li>Wer ist der Verantwortliche für Ihre personenbezogenen Daten?</li>
            <li>Welche personenbezogenen Daten erhebt, speichert und verarbeitet Amazon über Lieferpartner?</li>
            <li>Zu welchen Zwecken und auf welchen rechtlichen Grundlagen verarbeitet Amazon Ihre personenbezogenen
                Daten?</li>
            <li>Gibt Amazon Ihre personenbezogenen Daten weiter?</li>
            <li>Wie sicher sind die über mich erhobenen Daten?</li>
            <li>Welche Rechte und Wahlmöglichkeiten habe ich im Hinblick auf meine personenbezogenen Daten?</li>
            <li>Wie lange speichern wir Ihre personenbezogenen Daten?</li>
            <li>Kontakte, Mitteilungen und Änderungen</li>
            <li>Beispiele von erhobenen Daten</li>
        </ul>

        <div>
            <b>Wer ist der Verantwortliche für Ihre personenbezogenen Daten?</b>
            <p>
                Ihr ZDL hat einen Vertrag mit einer Amazon-Gesellschaft über die Bereitstellung der Zustelldienste
                geschlossen.
                Diese Amazon-Gesellschaft ist der Verantwortliche für Ihre personenbezogenen Daten im Zusammenhang mit
                den
                durch Sie als Lieferpartner bereitgestellten Zustelldiensten (der „<b>Verantwortliche</b>“). Wenn Sie
                hinsichtlich der
                zuständigen Amazon-Gesellschaft unsicher sind oder die Kontaktdaten benötigen, wenden Sie sich bitte an
                delivery-dsar@amazon.lu oder Ihren ZDL.
            </p>
        </div>

        <div>
            <b>Welche personenbezogenen Daten erhebt, speichert und verarbeitet Amazon über
                Lieferpartner?</b>
            <p>
                Wir erheben personenbezogene Daten, um die Bereitstellung der Zustelldienste zu vereinfachen und zu
                unterstützen sowie zur kontinuierlichen Verbesserung der Tools, die wir Ihnen und Ihrem ZDL zur
                Verfügung
                stellen.
            </p>
            <p>Wir erheben die folgenden Datenkategorien:</p>
        </div>
        <p><b><u>Informationen, die Sie uns geben:</u></b> Wir erhalten und verarbeiten alle Daten,
            die Sie uns in Bezug auf die
            Zustelldienste zur Verfügung stellen. Beispiele für erhobene Daten finden Sie untenstehend. Sie
            können sich
            entscheiden, bestimmte nicht Daten zur Verfügung zu stellen, jedoch sind Sie dann unter Umständen
            nicht dazu
            berechtigt, die Zustelldienste zu erbringen.
        </p>
        <p><b><u>Informationen aus der Nutzung unserer Technologie:</u></b> Zur Durchführung der
            Zustelldienste müssen Sie die
            Smartphone-Applikation „<b>Amazon Delivery App</b>“ (Nutzungsrecht für die Amazon Delivery App wird
            durch
            Amazon
            EU Sarl gewährt) herunterladen und nutzen. Sofern Sie nicht Ihr eigenes Mobilgerät nutzen, wird Ihr
            ZDL Ihnen ein
            tragbares Gerät („<b>Zustellgerät</b>“) zur Nutzung bei der Erbringung der Zustelldienste aushändigen.
            Die
            Amazon
            Delivery App, die Zustellgeräte und andere Amazon-Applikationen oder Geräte, die wir Ihrem ZDL zur
            Verfügung
            stellen oder die wir oder Ihr ZDL in Fahrzeugen im Zusammenhang mit den Zustelldiensten
            installieren/installiert,
            bezeichnen wir als „<b>Amazon-Zustelltechnologie</b>“. Wir werden bestimmte Kategorien von Daten
            automatisch
            erhalten und verarbeiten, immer wenn Sie sich in die Amazon Delivery App einloggen. Beispiele für
            erhobene Daten
            finden Sie untenstehend.
        </p>
        <p><b><u>Informationen in Bezug auf Ihre Besuche an Amazon-Standorten:</u></b> Wir werden
            Ihnen einen AmazonSicherheitsausweis aushändigen („<b>Ausweis</b>“ׅ). Sie benötigen Ihren Ausweis, um
            die
            Amazon-Verteilzentren oder
            andere Standorte zu betreten, an denen Sie die Amazon-Pakete abholen oder zurückgeben können
            (zusammen, die
            „<b>Amazon-Standorte</b>“). Wir erheben und verarbeiten bestimmte Arten von Daten, wenn Sie die
            Amazon-Standorte
        </p>
    </section>

    <section class="gap-3 page-break">

        <p>besuchen, um Ihre Sicherheit und die Sicherheit von anderem Personal sicherzustellen. Beispiele für
            erhobene Daten
            finden Sie untenstehend.</p>

        <p><b><u>Durch Ihren ZDL bereitgestellte Informationen:</u></b> Ihr ZDL oder seine Subunternehmer
            können Unterlagen an uns
            weitergeben, die Ihre personenbezogenen Daten enthalten und dem Zweck der Erbringung, Verwaltung oder
            Prüfung der Zustelldienste dienen. Beispiele für erhobene Daten finden Sie untenstehend.
        </p>

        <p><b><u>Informationen aus anderen Quellen:</u></b> Wir können Informationen über Sie auch aus
            anderen Quellen erhalten,
            einschließlich von unseren Dienstleistern (einschließlich solcher, die Applikationen oder Geräte, die
            Amazon oder
            Ihr ZDL in Fahrzeugen im Zusammenhang mit den Zustelldiensten installiert, bereitstellen), Kunden und
            Regierungsbehörden wie Polizei oder Gemeindeverwaltungen, die Strafzettel bei
            Geschwindigkeitsüberschreitung
            oder für Falschparken durchsetzen. Beispiele für erhobene Daten finden Sie untenstehend.</p>


        <div>
            <b>Zu welchen Zwecken und auf welchen rechtlichen Grundlagen verarbeitet Amazon Ihre
                personenbezogenen Daten?</b>
            <p>Wir erheben, analysieren, speichern und verarbeiten anderweitig Ihre personenbezogenen Daten auf den
                folgenden rechtlichen Grundlagen:</p>
        </div>

        <ul class="list-disc pl-[40px] my-[20px]">
            <li>Amazons berechtigtem Interesse sicherzustellen, dass Ihre Sicherheit und die anderer gewährleistet
                ist,
                dass Kundenzustellungen durch Sie in Einklang mit den höchsten kommerziellen Standards erfolgen,
                sowie
                an der Verhinderung von Betrug</li>
            <li>Einhaltung unserer gesetzlichen Verpflichtungen</li>
            <li>Zur Durchführung eines Vertrages, sofern zutreffend</li>
            <li>Unter bestimmten Umständen, Ihrem Einverständnis</li>
        </ul>

        <p>Die Zwecke, für die wir Ihre personenbezogenen Daten gemäß den oben genannten rechtlichen Grundlagen
            verarbeiten, umfassen:</p>

        <p><b><u>Sicherstellung Ihrer Sicherheit, der Sicherheit von Amazon-Personal und anderen:</u></b>
            Wir müssen gegebenenfalls aus
            Sicherheitsgründen oder sofern Ihre Sicherheit oder die anderer Personen gefährdet ist, z.B. im
            Brandfall oder einem
            anderen Notfall, Ihre personenbezogenen Daten verarbeiten, und zwar auf der Basis von Amazons
            berechtigtem
            Interesse an der Gewährleistung Ihrer Sicherheit und der anderer. Um dies effektiv umzusetzen, müssen
            wir
            gegebenenfalls Ihre Geolokalisierung verarbeiten, wenn Sie sich an einem Amazon-Standort befinden oder
            Sie
            unterwegs sind um Zustelldienste auszuführen. Wir können Ihre Geolokalisierung an Notfalldienste
            kommunizieren,
            so dass diese oder Ihr ZDL Sie schnell erreichen können, wenn Sie in einen Unfall verwickelt sind. Als
            Maßnahme zur
            Sicherstellung, dass sämtliche mit der Zustellung von Amazon-Paketen befassten Lieferpartner die
            Zustelldienste
            sicher ausführen, können wir Ihre Daten auch in Bezug auf Ihre Einhaltung der Vorgaben und Normen der
            Straßenverkehrssicherheit sowie des Arbeitsschutzes verarbeiten.</p>


        <p><b><u>Bewertung Ihrer Eignung zur Erbringung von Zustelldiensten gemäß dem zwischen Amazon
                    und Ihrem ZDL
                    geschlossenen Vertrag:</u></b> Wir verarbeiten Ihre personenbezogenen Daten, um Ihre fortlaufende
            Eignung als
            Lieferpartner gemäß den Berechtigungsanforderungen an Lieferpartner und den mit Ihrem ZDL vereinbarten
            Service-Standards zu bewerten, und zwar auf der Basis von Amazons berechtigtem Interesse
            sicherzustellen, dass
            Ihre Sicherheit und die anderer gewährleistet ist, dass Kundenzustellungen durch Sie in Einklang mit den
            höchsten
            kommerziellen Standards erfolgen, sowie an der Verhinderung von Betrug. Dies können Informationen sein,
            die Sie
            uns im Rahmen des Onboarding-Prozesses zur Verfügung stellen.</p>

        <p><b><u>Verwaltung des Vertragsverhältnisses mit Ihrem ZDL:</u></b> Wir verarbeiten Ihre
            personenbezogenen Daten, um die
            Erbringung von Zustelldiensten durch Ihren ZDL zu koordinieren, zu verwalten und zu prüfen, und zwar auf
            Basis von
            Amazons berechtigtem Interesse sicherzustellen, dass Ihre Sicherheit und die anderer gewährleistet ist,
            dass
            Kundenzustellungen durch Sie in Einklang mit den höchsten kommerziellen Standards erfolgen, sowie an der
        </p>
    </section>

    <section class="gap-3 page-break">
        <p>Verhinderung von Betrug und an der Einhaltung unserer vertraglichen Pflichten. Dies beinhaltet das Planen
            der
            Lieferrouten, die Bereitstellung von Unterstützung bei der Lieferung, die Sendungsverfolgung der
            Lieferung und die
            Bewertung der Einhaltung von Amazons Richtlinien und Service-Standards durch Ihren ZDL. </p>

        <p><b><u>Kommunikation mit Ihnen:</u></b> Wir verarbeiten Ihre personenbezogenen Daten, um mit
            Ihnen im Zusammenhang mit
            den Zustelldiensten zu kommunizieren, und zwar auf Basis von Amazons berechtigtem Interesse
            sicherzustellen,
            dass Ihre Sicherheit und die anderer gewährleistet ist, dass Kundenzustellungen durch Sie in Einklang
            mit den
            höchsten kommerziellen Standards erfolgen, sowie an der Verhinderung von Betrug und an der Einhaltung
            unserer
            rechtlichen Pflichten. Dies beinhaltet die Kommunikation mit Ihnen über verschiedene Kanäle z.B. per
            Telefon, SMS,
            Chat während Sie Amazon-Pakete ausliefern.
        </p>
        <p><b><u>Erfüllung unserer Pflichten gegenüber unseren Kunden:</u></b> Wir können Ihre
            personenbezogenen Daten verarbeiten,
            um Sie, Ihren ZDL oder unsere Kunden zu unterstützen, um die effektive Ausführung der Zustelldienste
            sicherzustellen, unter anderem um Kundenbeschwerden zu verwalten, und zwar auf Basis von Amazons
            berechtigtem Interesse sicherzustellen, dass Kundenzustellungen durch Sie in Einklang mit den höchsten
            kommerziellen Standards erfolgen und an der Einhaltung unserer rechtlichen Pflichten. Wir nutzen Ihre
            Standortdaten während Sie die Zustelldienste ausführen, um unsere Kunden über den Status ihrer
            Abholung/Lieferung auf dem Laufenden zu halten und um es ihnen zu ermöglichen, den Standort ihrer Pakete
            einzusehen</p>

        <p><b><u>Fehlerbehebung und Verbesserung unserer Zustelldienste:</u></b> Wir nutzen Ihre
            personenbezogenen Daten, um die
            Liefererfahrung für Lieferpartner und Kunden zu verbessern, unter anderem durch die Verbesserung von
            MappingSystemen und die Bereitstellung von Fahrer-Support während Sie die Zustelldienste ausführen, und
            zwar auf Basis
            von Amazons berechtigtem Interesse sicherzustellen, dass Ihre Sicherheit und die anderer gewährleistet
            ist, und
            dass Kundenzustellungen durch Sie in Einklang mit den höchsten kommerziellen Standards erfolgen.</p>

        <p><b><u>Zur Verteidigung von Amazons Rechtsposition:</u></b> Im Fall von Gerichtsverfahren
            müssen wir gegebenenfalls Ihre
            personenbezogenen Daten verarbeiten und weitergeben, um die Ansprüche zu begründen, auszuüben oder zu
            verteidigen. Wir müssen gegebenenfalls Ihre personenbezogenen Daten auch verarbeiten und weitergeben,
            wenn
            dies von einem Gericht, einer Regierungs- oder Verwaltungsbehörde erzwungen oder angeordnet wird, um
            unsere
            gesetzlichen Pflichten einzuhalten. Wir müssen gegebenenfalls Ihre personenbezogenen Daten auch
            verarbeiten
            und weitergeben, um Amazons Rechte zu schützen oder die Bestimmungen unseres Vertrages mit Ihrem ZDL
            durchzusetzen, und zwar auf Basis von Amazons berechtigtem Interesse sicherzustellen, dass
            Kundenzustellungen
            durch Sie in Einklang mit den höchsten kommerziellen Standards erfolgen sowie an der Verhinderung von
            Betrug.</p>
        <p><b><u>Einhaltung gesetzlicher Pflichten:</u></b> Wir können Ihre personenbezogenen Daten
            gegebenenfalls verarbeiten, um
            unsere gesetzlichen Pflichten einzuhalten bzw. um zu bestätigen oder zu beweisen, dass wir unsere
            gesetzlichen
            Pflichten eingehalten haben. Dies umfasst gegebenenfalls die Verarbeitung oder Weitergabe von Daten in
            Bezug auf
            Ihre Einhaltung der Arbeitsschutznormen und Ihren Umgang mit Amazon-Kundendaten auf Grundlage der
            Einhaltung unserer gesetzlichen und vertraglichen Pflichten.
        </p>
        <p><b><u>Schadens- und Betrugsbekämpfung:</u></b> Wir können Ihre personenbezogenen Daten
            gegebenenfalls verarbeiten, um
            Betrugsfälle, Diebstahl oder andere Vergehen in Bezug auf Ihre Ausführung der Zustelldienste,
            einschließlich Tausch
            von Ausweisen oder Verlust von Paketen, zu untersuchen, aufzuklären oder anzuzeigen (wie jeweils
            angemessen),
            und zwar auf Basis von Amazons berechtigtem Interesse sicherzustellen, dass Kundenzustellungen durch Sie
            in
            Einklang mit den höchsten kommerziellen Standards erfolgen sowie an der Verhinderung von Betrug.
        </p>
        <div>
            <b>Gibt Amazon Ihre personenbezogenen Daten weiter?</b>
            <p>Amazon gibt die personenbezogenen Daten von Lieferpartnern nur wie folgt beschrieben weiter:</p>
        </div>
    </section>

    <section class="gap-3">
        <p><b><u>Amazon Konzerngesellschaften:</u></b> Ihre personenbezogenen Daten werden möglicherweise vom
            Verantwortlichen an
            verbundene Unternehmen von Amazon EU, einschließlich Amazon EU Sarl und Amazon Europe Core Sarl und
            außerdem Amazon.com, Inc. und sonstige von Amazon.com, Inc. kontrollierte Unternehmen weitergegeben.
            Sämtliche Amazon-Gesellschaften, an die wir Ihre Daten weitergeben, unterliegen entweder dieser Privacy
            Notice
            oder wenden andere Verfahrensweisen an, die mindestens dasselbe Schutzniveau wie die in dieser Privacy
            Notice
            beschriebenen haben. Wir geben Ihre Daten ausschließlich an Amazon-Gesellschaften weiter, die die Daten
            kennen
            müssen und die Zugriff darauf haben sowie nur sofern dies gesetzlich zulässig ist</p>
        <p><b><u>Ihr ZDL:</u></b> Wir erheben gegebenenfalls Ihre personenbezogenen Daten und geben diese an Ihren ZDL
            weiter, hierzu
            gehören Ihr Standort, die Anzahl der Ihnen zugewiesenen Amazon-Pakete und die Anzahl der Pakete, die auf
            einer
            bestimmten Lieferroute verbleiben, Kunden- oder sonstige Beschwerden, die Sie betreffen könnten oder eine
            Nichteinhaltung der Arbeitsschutzstandards. </p>
        <p><b><u>Drittdienstleister:</u></b> Sollte es erforderlich werden, geben wir Ihre personenbezogenen Daten
            möglicherweise an Dritte
            weiter, die Leistungen an Amazon erbringen, einschließlich die Unternehmen, die Geräte in den Fahrzeugen
            installieren und verwalten, die Sie nutzen, wenn Sie die Zustelldienste erbringen oder die auf das
            Zustellgerät oder
            Ihr eigenes Gerät heruntergeladene Applikationen entwickeln und verwalten; Umfrage-Unternehmen oder, sofern
            gesetzlich zulässig, Dienstleister für Hintergrundprüfungen. Wir stellen sicher, dass diese externen
            Dienstleister die
            Einhaltung der Standards von Amazon in Bezug auf die Vertraulichkeit und Sicherheit Ihrer personenbezogenen
            Daten gewährleisten. Unsere Drittanbieter müssen beispielsweise unsere Datensicherheitsstandards,
            Datenschutzgesetze und internationale Übertragungsbeschränkungen einhalten, dürfen nur auf die
            personenbezogenen Daten zugreifen, die sie zur Ausführung ihrer Tätigkeit benötigen, und dürfen die Daten
            nicht
            für andere Zwecke nutzen als für die Erbringung der mit uns vereinbarten Dienstleistungen.</p>
        <p><b><u>Betriebsübergänge:</u></b> Im Rahmen der Weiterentwicklung unseres Unternehmens verkaufen oder kaufen
            wir
            möglicherweise andere Geschäftseinheiten oder Dienstleistungen. Im Zuge dieser Transaktionen stellen
            relevante
            Geschäftsdaten (zu denen auch Ihre personenbezogenen Daten gehören können) generell eine Art des
            übertragenen
            Betriebsvermögens dar, diese unterliegen jedoch weiterhin den in bestehenden Privacy Notices getroffenen
            Zusagen. </p>
        <p><b><u>Einhaltung der rechtlichen und regulatorischen Verpflichtungen von Amazon:</u></b> Unter bestimmten
            Umständen sind
            wir möglicherweise verpflichtet, Ihre personenbezogenen Daten an Dritte, einschließlich Verwaltungsbehörden
            (dazu gehören Steuerbehörden), Finanzinstitutionen, Versicherungsanbieter, die Polizei und Strafverfolger
            weiterzugeben. Diese Dritten handeln eigenständig als Verantwortlicher betreffend Ihre personenbezogenen
            Daten
            und sind verantwortlich für die Einhaltung anwendbarer Datenschutzbestimmungen.
        </p>
        <p><b><u>Schadens- und Betrugsbekämpfung:</u></b> Vorbehaltlich geltender Gesetze legen wir Ihre
            personenbezogenen Daten
            möglicherweise Strafverfolgungsbehörden, Regierungsbehörden oder privaten Organisationen offen, deren Ziel
            es
            ist, Betrug oder Diebstahl zu bekämpfen, sofern wir der Ansicht sind, dass die Offenlegung angemessen oder
            erforderlich ist, um (i) gesetzliche Vorschriften einzuhalten; (ii) unseren Vertrag mit Ihrem ZDL
            durchzusetzen; (iii)
            die Rechte, das Eigentum oder die Sicherheit von Amazon, von mit Amazon verbundenen Unternehmen, des
            Personals, der Kunden, oder anderen zu schützen; (iv) Betrug, Sicherheits- oder sonstige technische Probleme
            zu
            identifizieren, zu verhindern oder auf sonstige Weise zu beheben; oder (v) Aktivitäten zu verhindern oder zu
            unterbinden, die unserer Ansicht nach illegal oder unethisch sind oder Anlass zu einer Klage geben bzw. wenn
            das
            Risiko dazu besteht. </p>
        <p><b><u>Weitergabe in Länder außerhalb des EWR:</u></b> Wenn wir im Rahmen der oben beschriebenen Offenlegung
            Ihre
            personenbezogenen Daten in Länder außerhalb des EWR („EWR“) weitergeben haben wir hierfür angemessene
            Maßnahmen zum Schutz Ihrer Daten, Ihrer Grundrechte und Freiheiten sowie für die Ausübung Ihrer Rechte
            getroffen. Bei Fragen zur Weitergabe Ihrer personenbezogenen Daten in Länder außerhalb des EWR wenden Sie
            sich
            an uns unter <a href="#">delivery-dsar@amazon.lu.</a></p>
        <h2 class="font-bold">Wie sicher sind die über mich erhobenen Daten?</h2>
    </section>

    <section class="gap-3">
        <p>Wir bedenken bei der Entwicklung unserer Systeme stets Ihre Sicherheit und Ihren Datenschutz</p>

        <ul class="list-disc pl-[40px] my-[20px]">
            <li>Wir pflegen physische, elektronische und verfahrenstechnische Sicherheitsmaßnahmen im
                Zusammenhang mit der Erhebung, Speicherung und Weitergabe von personenbezogenen Daten. Im
                Rahmen der Sicherheitsmaßnahmen kann es vorkommen, dass wir Sie vor der Herausgabe von
                personenbezogenen Daten um eine Bestätigung Ihrer Identität bitten.
            </li>
            <li>Die Amazon-Zustelltechnologie bietet Sicherheits-Features für den Schutz der personenbezogenen Daten
                gegen unbefugten Zugriff und Datenverlust.</li>
            <li>Es ist wichtig, dass Sie Ihren Benutzernamen, Ihr Passwort und die Amazon-Zustelltechnologie vor
                unbefugtem Zugriff schützen. Loggen Sie sich aus, wenn Sie die Nutzung eines gemeinschaftlich genutzten
                Zustellgeräts abgeschlossen haben.</li>
        </ul>

        <h2 class="font-bold">Welche Rechte und Wahlmöglichkeiten habe ich in Bezug auf meine personenbezogenen Daten,
            die Sie
            erheben und verarbeiten? </h2>

        <p>Sie haben das Recht, Auskunft über, die Korrektur oder die Löschung Ihre/r personenbezogenen Daten, oder
            Datenübertragbarkeit (d.h. eine Kopie für Sie oder Übertragung auf einen anderen Verantwortlichen) zu
            verlangen.
            Bitte beachten Sie, dass eine Bitte um Löschung nicht auf Daten anwendbar ist, wenn Amazon berechtigt ist,
            sie zu
            speichern, um seine gesetzlichen Pflichten (d.h. Steuer- und Buchhaltungsvorschriften) für die Begründung,
            Ausübung oder Verteidigung von rechtlichen Ansprüchen einzuhalten. Des Weiteren sind Sie berechtigt, der
            Verarbeitung Ihrer personenbezogenen Daten in bestimmten Fällen zu widersprechen oder eine Beschränkung der
            Verarbeitung zu verlangen. Wenn wir Ihre personenbezogenen Daten auf Basis Ihrer Einwilligung verarbeiten,
            sind
            Sie jederzeit zum Widerruf für die Zukunft berechtigt. Die Ausübung dieser Rechte kann bedeuten, dass Sie
            die
            Zustelldienste nicht mehr erbringen können. Sollten Sie eines Ihrer Rechte ausüben möchten oder sonstige
            Fragen
            oder Bedenken in Bezug auf die von uns verarbeiteten personenbezogenen Daten haben, wenden Sie sich gern
            unter
            <a href="#">delivery-dsar@amazon.lu</a> an uns. Sie können außerdem eine Beschwerde bei der lokalen
            Aufsichtsbehörde
            einreichen.
        </p>

        <h2 class="font-bold">Wie lange speichern wir Ihre personenbezogenen Daten?</h2>

        <p>Wir speichern Ihre personenbezogenen Daten, sodass wir die dauerhafte Erbringung der Zustelldienste an Sie
            sicherstellen können, so lange, wie wir diese benötigen, um die in dieser Privacy Notice beschriebenen
            Zwecke zu
            erfüllen, wie wir gesetzlich, beispielsweise nach Steuerrecht, oder zu Rechnungslegungszwecken oder zu
            Zwecken
            der Anspruchsverfolgung dazu verpflichtet sind, oder so lange wie anderweitig mit Ihnen abgesprochen. Wir
            speichern beispielsweise Ihre Standortdaten, um die Zustellerfahrung für Lieferpartner und Kunden zu
            verbessern,
            u.a. durch eine Verbesserung der Mapping- und Routenplanungssysteme.</p>

        <h2 class="font-bold">Kontakte, Mitteilungen und Änderungen
        </h2>

        <p>Bei etwaigen Fragen oder Bedenken betreffend den Datenschutz des Lieferpartners bei Amazon oder wenn Sie den
            Datenschutzbeauftragten des Verantwortlichen kontaktieren möchten, nehmen Sie bitte unter Beifügung einer
            detaillierten Beschreibung Kontakt unter <a href="#">delivery-dsar@amazon.lu</a> mit uns auf oder bemühen
            uns, Ihrem Anliegen
            nachzukommen. Sie können außerdem eine Beschwerde bei Ihrer lokalen Aufsichtsbehörde einreichen. Unser
            Geschäft wandelt sich stetig und damit ändert sich auch unsere Privacy Notice. Falls die Änderungen
            wesentlich sind
            oder Sie maßgeblich betreffen, stellen wir Ihrem ZDL die aktualisierte Datenschutzerklärung vor
            Inkrafttreten der
            Änderung zur Verfügung. Wir empfehlen Ihnen eine regelmäßige Durchsicht dieser Privacy Notice durch Anfrage
            einer Kopie davon bei Ihrem ZDL oder in der Amazon Delivery App.
        </p>

        <h2 class="font-bold">Beispiele von erhobenen Daten
        </h2>
        <p><b><u>Informationen, die Sie uns im Zusammenhang mit den ZDL-Zustelldiensten geben:</u></b><br>
            Sie geben Informationen an uns</p>
    </section>

    <section class="gap-3">
        <ul class="list-disc pl-[40px] my-[20px]">
            <li>im Rahmen des Onboarding-Verfahrens als Lieferpartner</li>
            <li>wenn Sie mit Amazon-Mitarbeitern kommunizieren und interagieren, u.a. mit dem
                ZustellsupportServices-Team und anderen Amazon-Support-Teams</li>
            <li>bei der Beantwortung von Connections-Fragen, Umfragen oder wenn Sie Amazon anderweitig Feedback
                geben</li>
        </ul>

        <p>Aus diesen Handlungen folgt, dass Sie uns gegebenenfalls Informationen bereit stellen wie Ihren Namen, Ihre
            Telefonnummer, Ihre E-Mail-Adresse, Ihre Adresse, Ihr Geburtsdatum, das auf Ihrem Führerschein und Ausweis
            abgebildete Foto und Ihr Lieferpartner-Kontopasswort.
        </p>

        <b><u>Informationen aus Ihrer Nutzung der Amazon-Zustelltechnologie:
            </u></b>

        <p>Beispiele von Informationen, die wir erheben, analysieren, speichern und auf sonstige Weise verarbeiten,
            umfassen
            unter anderem:
        </p>
        <ul class="list-disc pl-[40px] my-[20px]">
            <li>Routendaten, u.a. wann Sie Pakete abholen oder zustellen und Ihren Fortschritt auf Lieferrouten
            </li>
            <li>Standortdaten, einschließlich Informationen zur Geolokalisierung und dem Gerät, auf dem die Amazon
                Delivery App betrieben wird, wie jeweils für standortbasierte Services erforderlich</li>
            <li>Sofern nach lokalen Gesetzen zulässig, erheben oder erhalten wir und/oder Ihr ZDL durch die
                AmazonZustelltechnologie Verkehrssicherheitsdaten, einschließlich Telematikdaten wie den Standort Ihres
                Fahrzeugs, Geschwindigkeit, Vollbremsungen, Kurvenschneiden, und Beschleunigung, während Sie die
                Zustelldienste erbringen.</li>
            <li>Metriken wie die Quote Ihrer erfolgreichen Zustellungen, um es uns zu ermöglichen, die Einhaltung mit
                den
                vereinbarten Service-Standards Ihres ZDL zu verwalten.</li>
        </ul>

        <p>Vom Einloggen in der Amazon Delivery App bei Beginn einer geplanten Lieferroute bis zum Ausloggen erheben und
            verarbeiten wir Ihre Geolokalisierung. Die meisten Mobilgeräte stellen Informationen über diese
            Bewilligungen zur
            Verfügung und Sie haben ein Recht auszuwählen, ob Amazon diese Informationen erhält oder nicht. Da jedoch
            unsere Befähigung, diese Informationen zu erhalten, ein wichtiger Teil unseres Managements von
            Kundenerwartungen ist und der Sendungslokalisierung dient, könnten die Verfügbarkeit und Funktionalität der
            Amazon Delivery App und folglich Ihre Befähigung, die Zustelldienste im Rahmen des Vertrags Ihres ZDL mit
            Amazon
            zu erbringen, beeinträchtigt werden, wenn Sie auswählen, dass Amazon keinen Zugang zu diesen Informationen
            erhält.
        </p>

        <b><u>Informationen in Bezug auf Ihre Besuche an Amazon-Standorten:
            </u></b>

        <p>Beispiele von Informationen, die wir erheben, analysieren, speichern und auf sonstige Weise verarbeiten,
            umfassen unter anderem:
        </p>

        <ul class="list-disc pl-[40px] my-[20px]">
            <li>Zu welcher Zeit Sie am Amazon-Standort ankommen und diesen verlassen, zum Beispiel, wenn Sie Pakete
                abholen oder etwaige nicht zugestellte Pakete zurückgeben</li>
            <li>Videoüberwachungsaufnahmen</li>
        </ul>

        <b><u>Von Ihrem ZDL bereitgestellte Informationen:
            </u></b>

        <p>Beispiele von durch Ihren ZDL bereitgestellten Informationen und Dokumenten, die wir analysieren, speichern
            und
            auf sonstige Weise verarbeiten, umfassen gegebenenfalls unter anderem:</p>

        <ul class="list-disc pl-[40px] my-[20px]">
            <li>Informationen oder Dokumente, die Sie Ihrem ZDL zur Verfügung stellen, u.a. Arbeitserlaubnisse,
                Anmeldung bei Krankenkassen, Ihre Aufenthaltserlaubnis, Ihr Personalausweis/Ausweisdokument, Ihre
                Statusfeststellung Selbständige, Ihre Erklärung, dass medizinisch keine Einwände bestehen, dass Sie die
                ZDL-Zustelldienste erbringen sowie Informationen zu Ihrer Sozialversicherung
            </li>
            <li>Daten zur Mitarbeiterverwaltung, einschließlich der Bestätigung über abgeschlossene
                Sicherheitstrainings,
                Gehaltsabrechnungen, Teilnahmeinformationen, Ihren Arbeitsvertrag oder Dienstleistungsvertrag</li>
        </ul>
    </section>

    <section class="gap-3 justify-normal page-break">
        <div>
            <ul class="list-disc pl-[40px] my-[20px]">
                <li>sofern zulässig gemäß den lokalen Gesetzen, Informationen dazu, ob Sie vorbestraft sind
                </li>
                <li>Sofern zulässig gemäß den lokalen Gesetzen, die Ergebnisse eines Drogen- oder Alkohol-Screenings
                    durch
                    Ihren ZDL oder dessen Dienstleister</li>
            </ul>
        </div>

        <div>
            <b class="underline">Informationen aus anderen Quellen:</b>

            <p>Beispiele von Informationen aus anderen Quellen, die wir analysieren, speichern und auf sonstige Weise
                verarbeiten umfassen unter anderem:
            </p>

            <ul class="list-disc pl-[40px] my-[20px]">
                <li>Amazon-Kundenumfragen, Feedback und Beschwerden</li>
                <li>Ergebnisse von Umfragen Dritter in unserem Auftrag</li>
                <li>Informationen zu mutmaßlichen Verkehrs- und Parkvergehen</li>
                <li>Sofern nach lokalen Gesetzen zulässig, erheben oder erhalten wir und/oder Ihr ZDL
                    Verkehrssicherheitsdaten, einschließlich Telematikdaten wie den Standort Ihres Fahrzeugs,
                    Geschwindigkeit, Vollbremsungen, Kurvenschneiden, Beschleunigung und sonstige Fahrzeugdiagnostiken,
                    die die in Ihrem Zustellfahrzeug installierten Geräte (die möglicherweise von Dritten zur Verfügung
                    gestellt/verwaltet werden) oder die Applikationen, die auf Ihr Zustellgerät, oder das von Ihnen
                    genutzte
                    mobile Gerät heruntergeladen wurden, bei der Erbringung der Zustelldienste erheben.
                </li>
            </ul>
            <p>Ich bestätige den Erhalt dieser AMZL Privacy Notice für Lieferpartner</p>
        </div>

        <div>
            <div class="flex gap-6">
                <p>Name:</p>
                <p>{{name}}</p>
            </div>
            <div class="flex gap-6 my-[20px]">
                <p>Unterschrift:</p><img src="{{signature}}" alt="Signature" style="width: 200px; height: 100px;" />
            </div>
            <div class="flex gap-6">
                <p>Datum:</p>
                <p>{{date}}</p>
            </div>
        </div>

    </section>`,
  },
  {
    title: "Arbeitsanweisung StVo über 2,8 to Zhivko Ivanov",
    content: ` <section class="page-break">
        <div class="w-full">
            <div class="h-[2px] bg-black"></div>
            <h1 class="text-center my-[30px] text-xl font-bold">KURIER- UND PAKETDIENST<br>
                Zhivko Ivanov Kleintransporte<br>
                Email: z.ivanov@gmx.de </h1>
            <div class="h-[2px] bg-black"></div>
        </div>
        <div class="text-center text-2xl font-extrabold my-[30px]">
            <h1 class="underline">Arbeitsanweisung für Fahrer zur Einhaltung der</h1>
            <h1>Verordnung zur Durchführung des Fahrpersonalgesetzes<br>
                (Fahrpersonalverordnung - FPersV)<br>
                § 1 Lenk- und Ruhezeiten im Straßenverkehr</h1>
        </div>
        <div>
            <ul class="list-disc pl-[40px] my-[20px]">
                <li>Fahrer von Fahrzeugen, die zur Güterbeförderung dienen und deren zulässiges
                    Gesamtgewicht einschließlich Anhänger <b>mehr als 2,8 Tonnen und nicht mehr als
                        3,5 Tonnen beträgt</b>, haben Lenkzeiten, Fahrtunterbrechungen und Ruhezeiten
                    einzuhalten.
                </li>
                <li>Der Fahrer hat folgende Zeiten aufzuzeichnen:
                    <ul class="list-decimal pl-[20px] my-[20px]">
                        <li>Lenkzeiten</li>
                        <li>alle sonstigen Arbeitszeiten einschließlich der Bereitschaftszeiten,</li>
                        <li>Fahrtunterbrechungen und</li>
                        <li>tägliche und wöchentliche Ruhezeiten.</li>
                    </ul>
                </li>
                <li>Die Aufzeichnungen sind für jeden Tag getrennt zu fertigen und müssen folgende
                    Angaben enthalten:
                    <ul class="list-decimal pl-[20px] my-[20px]">
                        <li>Vor- und Familienname,</li>
                        <li>Datum,</li>
                        <li>amtliche Kennzeichen der benutzten Fahrzeuge,</li>
                        <li>Ort des Fahrtbeginns,</li>
                        <li>Ort des Fahrtendes und</li>
                        <li>Kilometerstände der benutzten Fahrzeuge bei Fahrtbeginn und Fahrtende.</li>
                    </ul>
                </li>
                <li>Der Fahrer hat alle Eintragungen jeweils unverzüglich zu Beginn und am Ende der
                    Lenkzeiten, Fahrtunterbrechungen und Ruhezeiten vorzunehmen.</li>
                <li>Die Aufzeichnungen <b>des laufenden Tages und der vorausgegangenen 28
                        Kalendertage</b> sind vom Fahrer mitzuführen und den zuständigen Personen auf
                    Verlangen zur Prüfung auszuhändigen.</li>
                <li>Alle Aufzeichnungen älter als 28 Kalendertage hat der Fahrer dem Unternehmer
                    unverzüglich nach Rückkehr von Tour auszuhändigen.</li>
                <li>Der Fahrer erhält vom Unternehmer geeignete Vordrucke zur Fertigung der
                    Aufzeichnungen in ausreichender Anzahl. <b>(Anlage 1)</b></li>
                <li>Folgende Regeln sollten beim Ausfüllen der Tageskontrollblätter beachtet werden:</li>
                <li>Eintragungen sind mit Kugelschreiber oder Tinte vorzunehmen, es soll weder radiert,
                    durchgestrichen oder überschrieben werden.</li>
            </ul>
            <p>Die Arbeitsanweisung ist Bestandteil des Arbeitsvertrages. Ich habe die Arbeitsanweisung
                erhalten und verstanden.</p>
        </div>
        <div class="flex justify-between pt-3">
            <div class="text-center">
                <div class="flex">
                    <p>{{date}}</p>
                    <img src="{{signature}}" alt="Signature" style="width: 200px; height: 100px;" />
                </div>
                <p>Datum, Unterschrift Mitarbeiter</p>
            </div>
            <div class="text-center">
                <img src="{{signature}}" alt="Signature" style="width: 200px; height: 100px;" />
                <p>Name in Druckschrift</p>
            </div>
        </div>
    </section>`,
  },
  {
    title: "AMZL_DE_Onboarding Document V 6SEP17-36-38",
    content: `<section class="gap-3">
        <p>Grundlagen für eine erfolgreiche Zusammenarbeit</p>
        <h1 class="text-blue-500">9 APPENDIX A: ONBOARDING: NOTWENDIGE INFORMATIONEN UND DOKUMENTE</h1>

        <h2 class="text-blue-400 my-[20px] pl-[40px]">a) DSP Onboarding: Allgemeine Übersicht</h2>

        <p><b>Richtlinie:</b> Ein Fahrer muss eine Woche vor seinem ersten geplanten Einsatz vollständig gemeldet
            werden.
        </p>

        <p>Vorgehen ist für Management wie Fahrer gleich. Wenn der Manager nicht als Fahrer registriert werden soll,
            sind nur die
            Punkte 2, 3, 4, 6, 7 erforderlich. Dispatcher bitte wie Fahrer anlegen.</p>

        <ul class="list-decimal pl-[40px] my-[20px]">
            <li>Scan des Führerscheins</li>
            <li>Scan des Ausweisdokuments</li>
            <li>Scan der Arbeitserlaubnis (falls erforderlich)</li>
            <li>Scan des polizeilichen Führungszeugnisses</li>
            <li>Medizinische Tauglichkeitserklärung</li>
            <li>Security / Swipe Card</li>
            <li>Stop & Search Policy / Durchsuchung</li>
            <li>Anstellungsverhältnis
                <ul class="pl-[20px]">
                    <li>a. Nachweis Arbeitsvertrag</li>
                    <li>b. Statusfeststellung Selbstständige</li>
                </ul>
            </li>
            <li>Foto</li>
        </ul>

        <h2 class="text-blue-400 my-[20px] pl-[40px]">b) Vorlage: Medizinische Tauglichkeitserklärung</h2>

        <p>Alle Fahrer, die Pakete für AMZL ausfahren, müssen körperlich und geistig in der Lage sein, ganztägig eine
            Vielzahl von Paketen an Kunden auszuliefern. Zur Aufgabe gehören insbesondere das sichere Führen des
            Fahrzeugs und das sichere Heben, Tragen und Übergeben der Pakete sowie das Bedienen der benötigten
            Software.</p>

        <p>Bitte bestätigen Sie durch Ankreuzen und Ihre Unterschrift, dass Sie zur Durchführung dieser Prozesse in der
            Lage sind.</p>

        <ul class="flex flex-col gap-3 my-[20px]">
            <li><i class="text-xl font-bold text-blue-500">&#128912;</i>Ich bin körperlich und geistig in der Lage die
                Aufgaben eines Paketfahrers auszuführen.</li>
            <li><i class="text-xl font-bold text-blue-500">&#128912;</i>Ich nehme keine Medikamente, die meine Fähigkeit
                zu fahren und Pakete auszuliefern, einschränken.</li>
            <li><i class="text-xl font-bold text-blue-500">&#128912;</i>Ich habe keine gesundheitlichen Probleme, die
                meine Fähigkeit zu fahren und Pakete auszuliefern,
                einschränken.</li>
            <li><i class="text-xl font-bold text-blue-500">&#128912;</i>Ich werde mich an alle Richtlinien zum sicheren
                Tragen und Heben halten und werde mich nicht durch
                leichtsinnige Handlungen in Gefahr bringen.</li>
            <li><i class="text-xl font-bold text-blue-500">&#128912;</i>Ich werde “DSP NAME” informieren, wenn sich an
                den genannten Kriterien etwas ändert.</li>
        </ul>

        <div class=" flex flex-col gap-3">
            <div class="flex gap-6">
                <p>Datum, Ort</p>
                <p>{{date}}</p>
                <p>{{address}}</p>
            </div>
            <div class="flex gap-6">
                <p>Unterschrift</p>
                <img src="{{signature}}" alt="Signature" style="width: 200px; height: 100px;" />
            </div>
            <div class="flex gap-6">
                <p>Name (Druckschrift)</p>
                <p>{{name}}</p>
            </div>
        </div>

        <p class="text-center">Amazon.com Confidential</p>
    </section>

    <section class="gap-3">
        <p>Grundlagen für eine erfolgreiche Zusammenarbeit</p>

        <h2 class="text-blue-400 my-[20px] pl-[40px]">c) Vorlage: DE Security Swipe Card and GPS Requirements</h2>

        <p>Amazon wird alle Fahrer mit Folgendem ausstatten:</p>

        <ul class="list-disc pl-[40px] my-[20px]">
            <li>Persönliche Zugangskarte („Badge“)</li>
            <li>Tragbares GPS-Gerät (“Handheld”)</li>
            <li>Eine Smartphone App (“App”)</li>
        </ul>

        <p>Als Teil der AMZL- Sicherheitsvorschriften muss das Badge jederzeit sichtbar getragen werden, wenn Sie sich
            auf dem
            Amazon Gelände befinden und/oder im Auftrag von Amazon und seinen Partnern aktiv sind. </p>

        <p>Das Badge ist mit den Amazon System verbunden, wodurch bekannt ist, ob Sie im Amazon Gebäude sind, wann Sie
            angekommen und wieder gegangen sind. Das Handheld ist auch mit dem System verbunden und zeigt über die für
            Ihre
            Auslieferung relevanten Informationen zu jedem Zeitpunkt Ihre Position und den Status der Auslieferungen.
        </p>

        <p>Die so erfassten Informationen werden für eine Vielzahl von Zwecken genutzt. Diese beinhalten auch, aber
            nicht
            ausschließlich die Anwesenheitskontrolle in einem Notfall. Die Daten stehen im weltweiten Amazon System zur
            Verfügung
            und werden bei Bedarf genutzt.</p>

        <p>Alle durch Badge und Handheld erfassten Daten werden nach 3 Monaten gelöscht. </p>

        <p>Wenn Sie Badge und/oder Handheld verlieren oder beschädigen, informieren Sie bitte das Management der Amazon
            Delivery Station unverzüglich. </p>

        <b class="mt-[20px]">Ich stimme zu und habe verstanden</b>

        <p>Ich habe die obenstehende Information gelesen oder sie wurde mir vorgelesen. Alle daraus entstehenden Fragen
            konnte
            ich stellen und sie wurden mir zufrieden stellend beantwortet. Ich stimme zu, dass meine Daten wie oben
            erfasst und
            verwendet werden
        </p>

        <div class=" flex flex-col gap-3">
            <div class="flex gap-6">
                <p>Name</p>
                <p>{{name}}</p>
            </div>
            <div class="flex gap-6">
                <p>Unterschrift</p>
                <img src="{{signature}}" alt="Signature" style="width: 200px; height: 100px;" />
            </div>
            <div class="flex gap-6">
                <p>Datum, Ort</p>
                <p>{{date}}</p>
                <p>{{address}}</p>
            </div>
        </div>

        <p class="text-center">Amazon.com Confidential</p>
    </section>

    <section class="gap-3">
        <p>Grundlagen für eine erfolgreiche Zusammenarbeit</p>

        <h2 class="text-blue-400 my-[20px] pl-[40px]">d) Vorlage: Richtlinien für Durchsuchungen</h2>

        <b>Bitte sorgfältig lesen, zustimmen und unterschreiben.</b>

        <b>Diese Richtlinien betreffen alle Angestellten und jeden der an einem Amazon Standort arbeitet oder diesen
            besucht.
        </b>

        <p>Amazon behält sich das Recht vor Sie und/oder Ihr Eigentum im Bereich des Amazon Geländes (inklusive
            Parkplatz) zu durchsuchen:</p>
        <ul class="pl-[40px]">
            <li>- Als Teil der routinemäßigen Checks innerhalb des Gebäudes.</li>
            <li>- Wenn Sie das Gelände betreten oder Verlassen</li>
            <li>- Jederzeit, wenn Amazon den Verdacht hat, dass Sie Gegenstände im Besitz von Amazon entwendet,
                beschädigt, versteckt
                haben oder mit einem solchen Vorgang in Verbindung stehen.</li>
            <li>- Wenn Amazon den Verdacht hat, dass Sie Alkohol, Drogen oder andere unangemessene Gegenstände mit zum
                Arbeitsplatz
                genommen haben.</li>
        </ul>

        <p>Ausgegebene Badges müssen sichtbar getragen werden.</p>

        <p>Die Nichteinhaltung dieser Richtlinien kann darin resultieren, dass Ihr Zugang zum Amazon Gelände beschränkt
            wird</p>

        <div class=" flex flex-col gap-3"></div>
        <div class="flex gap-6">
            <p>Name</p>
            <p>{{name}}</p>
        </div>
        <div class="flex gap-6">
            <p>Unterschrift</p>
            <img src="{{signature}}" alt="Signature" style="width: 200px; height: 100px;" />
        </div>
        <div class="flex gap-6">
            <p>Datum, Ort</p>
            <p>{{date}}</p>
            <p>{{address}}</p>
        </div>
        </div>

        <h2 class="text-blue-400 my-[20px] pl-[40px]">e) Anstellungsverhältnis
        </h2>

        <p>Bitte hier</p>

        <ul class="pl-[40px]">
            <li>- Bei angestellten Fahrern eine Kopie der Unterzeichnungsseite des Arbeitsvertrags</li>
            <li>- Bei selbstständigen Fahrern die Statusfeststellung der Clearingstelle der Rentenversicherung einfügen
            </li>
        </ul>

        <h2 class="text-blue-400 my-[20px] pl-[40px]">f) Foto hochladen
        </h2>

        <p>Hinweise zum Foto:</p>

        <p>Bitte ein Portrait-Foto vor neutralem Hintergrund im Format 160 x 120 als JPEG aufnehmen. </p>

        <p class="text-center">Amazon.com Confidential </p>

    </section>`,
  },
  {
    title: "Sicherheitsbelehrung",
    content: `<section class="gap-3">
        <h1 class="text-center"><b><u>SICHERHEITSBELEHRUNG FUR MITARBEITER</u></b></h1>
        <b>Firma Geibel-Transport-GmbH</b>
        <b>Mit Vertragsunterzeichnung wurde ich heute iiber folgende Punkte belehrt:</b>
        <ul class="list-decimal pl-[20px]">
            <li>Die Sendungen (mit Ausnahme von Sendungen ,ohne Quittung") diirfen nur gegen eine persénliche
                Unterschrift des Empfangers oder gegen Unterschrift eines Ersatzempfangers ausgeliefert werden. Es darf
                nicht ,,im Auftrag des Kunden unterschrieben werden.</li>
            <li>Das Erfassen von Daten in der Amazon Flex App entspricht der Beschriftung von Urkunden.und genie@8t
                den Schutz des § 267 Strafgesetzbuch (Urkundenfalschung). Das so genannte ,Unterschreiben mit dem
                Namen des Kunden” ist - UNTERSCHRIFTENFALSCHUNG -. Die Falschung der Unterschriften (sowohl von
                Kunden, als auch von anderen Personen) und jede weitere Manipulation der Unterlagen bzw. bei der
                Datenerfassung, wie z.B. Eingabe von erfundenen Sendungsnummern und Phantasienamen, erfillen die
                Tatbestande des § 263 StGB (Betrug) bzw. § 267 StGB (Urkundenfalschung) und ziehen grundsatzlich
                arbeitsrechtliche Schritte nach sich, die bis zur Beendigung des Arbeitsverhaltnisses reichen kénnen.
                Die
                Firma Geibel- Transport-GmbH behalt sich die Regressnahme und die Einleitung der strafrechtlichen ©
                Verfolgung vor.</li>
            <li>Wahrend der Fahrt sind die Tiiren des Laderraumes — und beim Verlassen des Fahrzeuges alles Turen —
                ausnahmslos abzuschlieBen.</li>
            <li>Zum sicheren Fiihren des Fahrzeuges muss den FuB umschlieBendes Schuhwerk getragen werden. Nicht
                geeignet sind z.B, Sandaletten oder Holzpantinen (BGV D 29, § 44).</li>
            <li>Jeder Verlust der Fahrerlaubnis bzw. ein Fahrverbot ist sofort dem Vorgesetzten bekannt zu geben.</li>
            <li>Die Einhaltungen der Arbeitszeiten/Lenkzeiten und der gesetzlich vorgeschriebenen Pausen ist zu
                beachten.
                Die Brandschutzordnung des Betriebes ist mit bekannt, Uber das Verhalten im Brandfall wurde ich belehrt.
                Notausgange und Feuerléscher diirfen nicht verstellt werden.</li>
            <li>Uber den Umgang mit Gefahrgut und Gefahrstoffen wurde ich geschult. Die Vorschriften zum Umgang mit
                Gefahrgutsendungen aus der Gefahrgutverordnung StraBe sind mir bekannt.</li>
            <li>Die Ladung auf dem Zustellfahrzeug ist jederzeit ordnungsgemaé zu sichern.</li>
            <li>Die Betriebsanweisungen sind mir bekannt, soweit sie meine Tatigkeit im Betrieb betreffen.
                Das Fahrerhandbuch wurde mir tibergeben und ist mir inhaltlich bekannt.</li>
            <li>Die Warnweste und die Sicherheitsschuhe sind gemaB der Vertragsvereinbarung zu Tragen.
                Das Zustellerbatch fiir ist wahrend der gesamten Arbeitszeit zu Tragen.</li>
            <li>Uber die arbeitssicherheits- und arbeitsmedizinische Organisation am Arbeitsplatz wurde ich informiert.
                Die
                arbeitsmedizinischen Informationen Uber meinen Arbeitsplatz sind bekannt.</li>
            <li>Die Inhalte des ,Allgemeinen Gleichbehandiungsgesetzes (AGG) sind mir bekannt. Niemand darf aufgrund
                seiner Rasse und ethnischer Herkunft, Religion und Weltanschauung, einer Behinderung, Geschlechts,
                sexueller Orientierung oder seines Alters diskriminiert, beleidigt oder belastigt werden.</li>
            <li>Mir ist bekannt , dass ich gem&B § 2a Abs. 1 SchwarzArbG verpflichtet bin, wahrend meiner Tatigkeit fir
                oben genannte Firma einen Personalausweis, Pass, Passersatz oder Ausweisersatz mitzuftihren habe um
                diesen auf Verlangen den Zollbehérde vorzulegen.</li>
        </ul>
        <b>Die oben aufgefiihrte Sicherheitsbelehrung habe ich verstanden und zur Kenntnis
            genommen.</b>
        <div class="flex gap-6 pt-3">
            <div class="flex gap-3">
                <p>Datum:</p>
                <p>{{date}}</p>
            </div>
            <div class="flex gap-3">
                <p>Unterschrift:</p>
                <img src="{{signature}}" alt="Signature" style="width: 200px; height: 100px;" />
            </div>
        </div>
    </section>`,
  },
  // Добави още секции, ако е необходимо
];
