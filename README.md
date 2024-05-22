# SEMBRANT EL FUTUR

## Descripció General

Aquest projecte consta d'una pàgina web dedicada a la investigació i promoció de la producció agrícola a Albinyana, Catalunya. La web està composta per cinc pàgines principals: `index.html`, `membres.html`, `projectes.html`, `mapa.html` i `contacte.html`. Cada pàgina té una funció específica i proporciona informació diversa als visitants.

## Tema/motivació

La meva motivació per aquest projecte neix de la meva profunda connexió amb Albinyana, el meu poble, i la seva comunitat agrícola. Vull contribuir a la preservació i promoció de les nostres tradicions agrícoles, alhora que ajudo a impulsar la innovació i la sostenibilitat en aquest sector tan vital per a nosaltres. Crec que aquesta pàgina web serà un pas important cap a aquesta visió, proporcionant les eines i els recursos necessaris per a la nostra comunitat.

## Recerca de dades

Per a la realització d'aquest projecte, he extret dades de diverses fonts fiables i rellevants:

Salvador Casellas, President de la Cooperativa d'Albinyana: El senyor Casellas m'ha proporcionat informació detallada sobre els socis de la cooperativa, així com dades específiques sobre les collites de raïm, olives i garrofes. A més, m'ha compartit informació sobre els problemes actuals que afronta el sector agrícola local i les possibles millores que es podrien implementar per optimitzar la producció i la sostenibilitat.

Pàgina Web de la Cooperativa d'Albinyana i de l'Ajuntament d'Albinyana: A través dels portals web oficials de la cooperativa i de l'ajuntament, he pogut obtenir informació addicional sobre les activitats, projectes i iniciatives relacionades amb la producció agrícola al nostre poble. Aquestes dades m'han permès tenir una visió més completa de la situació actual i dels esforços que s'estan fent per promoure el sector.

Institut d'Estadística de Catalunya (IDESCAT): Per a la recerca socioeconòmica i demogràfica, he utilitzat les dades proporcionades per l'IDESCAT. Aquestes dades han estat essencials per comprendre millor el context socioeconòmic d'Albinyana i la seva evolució demogràfica, factors que influeixen directament en la producció agrícola i en les necessitats de la comunitat.

## Índex de Continguts
1. [Inici (index.html)](#inici-indexhtml)
2. [Membres (membres.html)](#membres-membreshtml)
3. [Projectes (projectes.html)](#projectes-projecteshtml)
4. [Mapa (mapa.html)](#mapa-mapahtml)
5. [Contacte (contacte.html)](#contacte-contactehtml)

---

### Inici (index.html)

**Estructura:**
- **Capçalera:** Inclou el logotip, el nom del projecte "Sembrant Futur" i un menú de navegació.
- **Contenidor de Slogan:** Imatge amb un eslògan inspirador sobre l'agricultura sostenible.
- **Contingut Principal:** Descripció del projecte, la seva missió i agraïments a col·laboradors com la Cooperativa d'Albinyana i Studio M.Schulz.
- **Reconeixements:** Vídeo de vista aèria d'Albinyana.
- **Peu de Pàgina:** Enllaços a xarxes socials, logotips de col·laboradors i informació de copyright.

**Funcionalitat:**
- Aquesta pàgina serveix com a introducció al projecte, destacant la missió i els objectius de l'equip investigador.
- Proporciona informació sobre els beneficis de la investigació agrícola i la relació amb la comunitat local.

### Membres (membres.html)

**Estructura:**
- **Capçalera:** Inclou el logotip, el nom del projecte i un menú de navegació.
- **Títol:** "MEMBRES DEL EQUIP".
- **Contenidor de Membres:** Galeria d'imatges dels membres de l'equip amb descripcions emergents.
- **Descripció del Membre:** Div ocult que mostra la descripció detallada d'un membre quan es fa clic a la seva imatge.
- **Peu de Pàgina:** Enllaços a xarxes socials, logotips de col·laboradors i informació de copyright.

**Funcionalitat:**
- Mostrar informació detallada sobre cada membre de l'equip d'investigació.
- Descripcions emergents que proporcionen detalls sobre el rol, experiència i contribució de cada membre al projecte.

### Projectes (projectes.html)

**Estructura:**
- **Capçalera:** Inclou el logotip, el nom del projecte i un menú de navegació.
- **Títol:** "PROJECTES".
- **Contingut Principal:** Llista i descripció dels projectes de recerca en curs i finalitzats.
- **Peu de Pàgina:** Enllaços a xarxes socials, logotips de col·laboradors i informació de copyright.

**Funcionalitat:**
- Proporcionar una visió general dels diferents projectes d'investigació realitzats per l'equip.
- Mostrar els objectius, metodologia i resultats de cada projecte.

**Contingut:**
**Projecte d'Investigació: "Sembrant Futur"**
  - **Descripció:** L’objectiu principal del nostre projecte és investigar i comprendre a fons la producció agrícola a Albinyana amb l'objectiu de millorar la seva eficiència, sostenibilitat i resiliència. A través de la recerca i l'anàlisi de les pràctiques agrícoles locals, volem identificar oportunitats per a la millora i desenvolupar solucions pràctiques que beneficiïn tant als agricultors com al medi ambient.
  - **Objectius:**
    - Analitzar els principals cultius agrícoles de la zona.
    - Avaluar l'impacte de les pràctiques agrícoles sobre el medi ambient.
    - Investigar les necessitats dels agricultors locals.
    - Desenvolupar recomanacions per millorar la sostenibilitat agrícola.
  - **Metodologia:** Anàlisi de dades, entrevistes amb agricultors locals, recerca de camp.
  - **Resultats:** S'han identificat tendències en la producció agrícola i recomanacions per millorar la sostenibilitat.

### Mapa (mapa.html)

**Estructura:**
- **Capçalera:** Inclou el logotip, el nom del projecte i un menú de navegació.
- **Títol:** "TIPOLOGIA DE CULTIUS".
- **Contingut Principal:** Descripció del mapa interactiu que mostra les diferents àrees ocupades per cultius al municipi d'Albinyana, Catalunya.
- **Funcionalitat:**
    - Visualització d'un mapa interactiu amb polígons classificats segons els cultius herbacis, arboris o arbustius, i la combinació de cultius.
    - Cliqueu a cada zona per observar l'àrea en hectàrees i la classificació corresponent dels cultius.
    - El mapa es interactivo; al hacer clic en las diferentes zonas de colores, aparece una pestaña emergente con información sobre el tipo de cultivos y las hectáreas correspondientes.
    - Proporciona una manera dinámica de explorar y comprender la distribución de los cultivos en el municipio.

**Ús de QGIS i l'extensió qgis2web:**
- El mapa ha estat creat utilitzant el programa QGIS juntament amb l'extensió qgis2web, que permet convertir projectes de QGIS en mapes web interactius.
- Aquesta eina ofereix una manera eficient de visualitzar i compartir dades geoespacials a través de la web, facilitant la comprensió i l'anàlisi dels mapes per part dels usuaris.

### Contacte (contacte.html)

**Estructura:**
- **Capçalera:** Inclou el logotip, el nom del projecte i un menú de navegació.
- **Títol:** "CONTACTE".
- **Contingut Principal:** Formulari de contacte per permetre als usuaris enviar missatges a l'equip d'investigació.
- **Peu de Pàgina:** Enllaços a xarxes socials, logotips de col·laboradors i informació de copyright.

**Funcionalitat:**
- Facilitar la comunicació entre els visitants del lloc web i l'equip d'investigació.
- Formulari de contacte per enviar preguntes, suggeriments o sol·licituds de col·laboració.
  
---

## Instruccions d'Ús

### Navegació

- **Capçalera:** Utilitzeu el menú de navegació a la part superior de cada pàgina per moure's entre les diferents seccions del lloc web.
- **Peu de Pàgina:** Inclou enllaços a les xarxes socials de l'equip i logotips dels col·laboradors.

### Interactivitat

- **Membres:** Feu clic a les imatges dels membres de l'equip per veure la seva descripció detallada.
- **Mapa:** Interactueu amb el mapa per explorar diferents llocs d'interès.

## Contacte

Per a més informació o per posar-vos en contacte amb l'equip, visiteu la pàgina de [Contacte](contacte.html).

---

Aquest document proporciona una visió general del lloc web i les seves funcionalitats, facilitant la comprensió del contingut i la navegació per part dels usuaris.
