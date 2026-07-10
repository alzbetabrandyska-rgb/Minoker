# Instrukce – zadání pro AI agenta k tvorbě webu Minoker.cz

## Situace

Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Vytvoř moderní, prémiový web pro hardrock/thrash metalovou kapelu. Design má být temný, minimalistický a sebevědomý. Méně efektů, více atmosféry. Důraz na kvalitní typografii, výrazné fotografie, dostatek prostoru a silný kontrast.

Každá sekce webu má působit, jako by její návrh stál 20 tisíc korun. Musí obstát v testu screenshotu — jediný screenshot bez jakéhokoliv kontextu má působit prémiově, v souladu se značkou a jako hotový profesionální produkt.

## Cíl

Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

## Úkol

Vytvoř funkční web, který bude obsahovat:

- Strukturovaný komentovaný HTML5 kód s validní sémantikou
- Responzivní design (mobile-first přístup)
- CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
- Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
- CSS jednotky velikosti: pro běžný text použij `rem`, pro nadpisy použij `clamp`
- Základní JavaScript pro interaktivitu (na jemné oživení stránek)
- Dbej na bezpečnost webu (nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)

## Znalosti

- Zajisti rychlé načítání a optimalizovaný výkon
- Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
- Vlož favicon
- Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu
- Všechny interní odkazy piš bez přípony `.html`, např. `/sluzby`, a ne `sluzby.html`
- Do `.htaccess` přidej mod_rewrite pravidla: přesměrování `*.html` → `*` (301) a interní obsluhu čistých URL na příslušný `.html` soubor
- Jiné pokyny k přesměrování do souboru `.htaccess` nedávej (to se řeší na úrovni hostingu)

## Základní SEO

- Strukturuj nadpisy H1–H6
- Přidej meta title a description na každé stránce
- Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
- Přidej do adresáře soubory `sitemap.xml`, `robots.txt` a `llms.txt`
- Urči kanonickou URL – doména webu bude Minoker.cz
- Obrázkům dej alt popisky
- Propoj stránky vnitřními odkazy
- Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)

## Optimalizace obrázků

- Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). U hero sekce lazy loading nedělej.
- Obrázky budou dodány zkomprimované ve formátu JPG nebo PNG, ale kdyby se zdály velké, je možné požádat o formát AVIF.

## Vizuální hierarchie a čitelnost

- Jasná typografická hierarchie (nadpisy H1–H6, konzistentní velikosti)
- Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
- Čitelné fonty s českou diakritikou, minimální velikost 16 px
- Správné řádkování (line-height 1.5–1.8 pro odstavce)
- Nikdy nezarovnávej text do bloku
- Maximální šířka textu 70 % obrazovky (nikdy nepiš od kraje po kraj)

## Layout

- Mobile-first návrh
- Obsah ve středovém kontejneru s dostatečnými okraji a příjemnou čitelností i na širokých monitorech
- Jasně oddělené sekce s konzistentním vertikálním rytmem
- Vyvážené využití white space pro přehlednost
- Konzistentní grid napříč celým webem
- Karty a obsahové bloky skládat symetricky, aby nevznikaly osamocené prvky v posledním řádku
- Navigace přehledná a minimalistická – logo vlevo, hlavní menu vpravo, na mobilu hamburger
- Dej si záležet na patičce webu
- U prvku accordion (např. pro otázky a odpovědi) dávej ikonu šipky dolů a nahoru a pokud je jich víc než 3, rozděl je do dvou sloupců
- Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
- Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
- Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

## Obsah

- Stručné a srozumitelné texty
- Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
- Vizuální prvky podporující obsah (ikony, obrázky, grafika)
- Logické uspořádání informací (nejdůležitější nahoře)
- Chybová stránka (místo „404" dej ikonu `<wa-icon name="face-frown" variant="regular"></wa-icon>`) a přidej ji na web pomocí příkazu v souboru `.htaccess`: `ErrorDocument 404 /404.html`
- Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

## Konzistence

Nechávám na tobě, ale pokud to bude dobře vypadat, tak:

- Jednotný styl tlačítek, karet a komponent
- Stejný padding/margin napříč podobnými elementy
- Stejné zaoblení prvků
- Konzistentní ikonografie (používej Font Awesome, ne emotikony)
- Jednotný projev značky (brand voice)
- Konzistentní použití barev napříč celým webem
- Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

## Bezpečnost

- `X-Frame-Options: SAMEORIGIN` – web nelze vložit do cizího iframu — ochrana před clickjackingem (útok, kdy tě někdo přiměje kliknout na něco, co nevidíš)
- `X-Content-Type-Options: nosniff` – prohlížeč nebude hádat typ souboru — zabrání spuštění souboru, který se tváří jako obrázek, ale je to skript
- `Strict-Transport-Security` – po prvním HTTPS spojení si prohlížeč zapamatuje, že web používá jen HTTPS — zabrání downgrade útoku na HTTP
- `Referrer-Policy: strict-origin-when-cross-origin` – při přechodu na jiný web odesílá jen doménu (ne celou URL s parametry) — necílí zbytečně citlivé URL třetím stranám
- `Permissions-Policy` – explicitně zakazuje stránce přistupovat k mikrofonu, kameře a geolokaci — i kdyby se někdo dostal do kódu, nemůže nic zapnout

## Barevná paleta

Omezený počet barev (2–3):

- Brand primární – často jako pozadí (HEX): `#313e47`
- Brand sekundární: `#D6A600`
- Text: `#F3F2EE`
- Sekundární text: `#B7C0C7`
- Akcent: `#D6A600`

Gradient – mezi `#D6A600` a `#E3B505` – nechávám na tobě, ale používej jemný lineární gradient s nízkou intenzitou. Má připomínat odlesk kovu nebo mosazi, nikoli moderní neonový gradient.

Gradient používej střídmě pouze jako akcent (CTA tlačítka, hover efekty, ikonky, jemné podtržení nadpisů nebo drobné světelné prvky). Nepoužívej gradient jako hlavní pozadí sekcí ani velké barevné plochy.

Celkový vzhled má zůstat tmavý, prémiový a rockový.

## Fonty

- Nadpisy: Bebas Neue (uppercase, výrazné, s větším letter spacingem)
- Běžný text: Inter
- Nadpisy mají působit jako názvy skladeb nebo koncertních plakátů
- Text má být maximálně čitelný a vzdušný
- Pokud se bude hodit, používej dekorativní nebo stylizované písmo pouze jako akcent. Veškerý navigační text, obsah a většina nadpisů musí být vysoce čitelné i na mobilních zařízeních.

## Struktura

Nevím, jestli má být web jednostránkový – nechávám na tobě. Aktuality se tam budou dopisovat (někdy méně, jindy více, i s obrázky), tak nevím, jak to zvolit – zvážit případně samostatnou stránku.

## Další prvky na webu

Instagram, Facebook, Spotify, YouTube – zatím nemám odkazy, ale už to tam nějak nachystej.

## Design

**Styl:**
- temný, syrový a sebevědomý
- moderní, ale ne futuristický
- inspirace koncertními plakáty, booklety alb a současnými weby známých rockových kapel
- důraz na kvalitní typografii, velké fotografie a kontrast

**Design:**
- mobile-first
- čistý asymetrický nebo pravidelný grid
- dostatek whitespace
- tmavé pozadí (černá, antracit), akcenty v červené nebo tmavě oranžové
- kvalitní práce s texturami (kov, beton, jemný šum), nikoliv přeplácanost
- jemné mikroanimace a plynulé scroll efekty
- výrazné CTA a přehledná navigace

**Vyhnout se:**
- glassmorphism
- pastelovým gradientům
- futuristickému SaaS vzhledu
- příliš kulatým prvkům
- zbytečným 3D efektům

## Obrázky

Na webu použij fotky, které najdeš ve složkách (galerie, obrazky, logo, favicon, singly) níže popsaných.

## Menu

Menu poskládat dle vlastního uvážení:

- Hero sekce
- O kapele
- Členové
- Připravujeme
- Galerie
- Aktuality
- Kontakty

## Texty

### Hero sekce

Jen fotka ze složky obrazky – bez vloženého loga, hlavní logo je již v obrázku.

### O kapele

```
ČELEĎ: HARDROCK-METAL
ZÁKLAD: 2021
TERITORIUM: BOSKOVICE
PROČ? PRO: MELODII A VERŠE
             PROTI: LIDSKÉ TUPOSTI
```

Tato sekce bude mít jinou barvu, jelikož na pozadí jako vodoznak bude logo ze složky logo – logo bez pozadí – nebo může být s klasickým pozadím a tím pádem zvolit logo s pozadím. Nechávám na tobě, jak to bude vypadat lépe.

Dále na tuto stránku (kamkoliv) doplnit text ve stejné barvě jako pozadí (aby nebyl vidět, ale aby ho vzalo SEO):

> Minoker je hardrock-thrash metalová hudební skupina, založená v roce 2021 v Boskovicích Michaelem Keršnerem a jeho synem Norbertem Keršnerem.

### Členové

Dvě fotky ze složky obrazky – `michael_sekce_clenove` a `norbert_sekce_clenove`, pod obrázky text:

```
MICHAEL KERŠNER
KYTARY, ZPĚV
```

```
NORBERT KERŠNER
BICÍ NÁSTROJE, ZPĚV
```

Po kliknutí na fotku Michael se objeví text:

```
Michael
*28. 10. 1977 BRNO
+?
1. HUDEBNÍ TĚLESO: GOLDEN HEART – 1990
1. EL. PÁDLO: 16 LET VĚKU
HRANÍ A MOTÁNÍ: 1993–2020
ÚDER: 2021
```

Po kliknutí na fotku Norbert se objeví text:

```
Norbert
*18. 10. 2006 BRNO
+?
1. BICÍ: 6 LET VĚKU
ABS: OBOU STUPŇŮ ZUŠ BOSKOVICE 2013–2025
1. HUDEBNÍ TĚLESO: ROCK SPACE – 2017
ÚDER: 2021
```

### Připravujeme

Nápis „Brzy vyjde" a „Singly", vložit dvě fotky ze složky singly – plague tentacles… a blind hopes…

### Galerie

Vložit fotky ze složky galerie, rozložení dle vlastního uvážení – nejprve Michael (zakládající člen), jinak libovolně, oba členy napřeskáčku, ať to vypadá rockově.

### Aktuality

Zatím nic není připraveno, nevím, kam to dát – zda na samostatnou stránku? Zatím tam nic nebude.

### Kontakty

Email: `info@minoker.cz`

Připravit ikony na Facebook, Instagram, YouTube, Spotify – zpracovat rockovým stylem, dle vlastního uvážení.
