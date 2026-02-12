<p align="center">
  <img src="public/signature.svg" alt="PyZ3RxAM Logo" width="600">
</p>

# PyZ3RxAM - Hacker Engine v2

PyZ3RxAM je moderna web aplikacija u **Matrix/Hacker** stilu za simulaciju ispita iz **Teorije Procesa**. Ovaj sustav je dizajniran za maksimalnu efikasnost učenja kroz interaktivno sučelje i dubinsku analizu pogrešaka.

## O čemu se radi?
Aplikacija nudi rekalibrirani sustav vježbanja s 4 specijalizirana seta po 21 pitanje. Svaki set pokriva ključna područja: Osnove algoritama, Django MTV, IoT i SQL.

### Ključne Značajke:
-   **Hakerska Estetika**: Retro vizualni stil s jarko zelenim tekstom i ASCII potpisom.
-   **Hakerski Savjet (Explanations)**: Svako pitanje dolazi s pedagoškim objašnjenjem koje se prikazuje kod netočnih odgovora.
-   **Dinamička Navigacija**: Grid koji se skalira prema broju pitanja (21 po setu) i brzi gumbi za prebacivanje setova.

## Evo liste minimalnih zahtjeva (Requirements) za pokretanje:

### 1. Sistemski zahtjevi
- **Node.js**: Potrebna ti je verzija v20.9.0 ili novija.
- **npm**: Upravljač paketima koji dolazi instaliran uz Node.js.

### 2. Projektne ovisnosti (Dependencies)
Aplikacija koristi samo osnovne biblioteke za rad sučelja:
- **next**: Verzija 16.1.6 (React framework).
- **react** i **react-dom**: Verzija 19.2.3.
- **tailwindcss**: Za hakerski zeleni dizajn i stiliziranje.

### 3. Kako pokrenuti aplikaciju lokalno
Kada si unutar foldera projekta na svom laptopu, izvrši ove tri komande u terminalu:

1. **Instalacija paketa**:
   ```bash
   npm install
   ```
2. **Pokretanje razvojnog servera**:
   ```bash
   npm run dev
   ```
3. **Otvaranje u pregledniku**: Otvori adresu `http://localhost:3000`.

---

## Zašto ti ne treba Django/IoT/SQL?
Iako su te teme dio ispita koji vježbaš, aplikacija je dizajnirana da bude samoodrživa:

- **Statički podaci**: Sva pitanja i varijacije (setovi 1-4) nalaze se u datoteci `data/examData.js` kao obični JavaScript objekti.
- **Bez vanjske baze**: Simulator ne komunicira s pravom bazom podataka, već koristi React stanje (`useState`) za praćenje tvojih odgovora.
- **Frontend logika**: Provjera točnosti i prikaz objašnjenja vrše se direktno u pregledniku unutar komponente `Results.js`.

---

## Finalni Podsjetnik (Sustav za poliranje)
Evo kratkog podsjetnika što sada imaš u repozitoriju za finalno poliranje:

### 1. Dinamički Setovi i Navigacija
- **Automatski Grid**: `Quiz.js` automatski prepoznaje koliko pitanja ima u setu (21) i prilagođava navigacijski grid.
- **Top Navigacija**: Gumbi na vrhu omogućuju brz odabir specifičnog područja (Osnove, Django, IoT, SQL).

### 2. Pametno Učenje kroz Rezultate
- **Analiza Grešaka**: `Results.js` generira detaljnu listu svih propusta.
- **Hakersko Objašnjenje**: Uz svaku grešku stoji pedagoški savjet iz `examData.js`, tako da odmah učiš na propustima.

### 3. Vizualni Identitet (Hakerski Duh)
- **Zeleni ASCII Potpis**: `Pyz3R xam` dominira vrhom stranice, dajući ti taj "clean room hacker" osjećaj dok vježbaš.
- **Tamni mod**: Sučelje je u potpunosti prilagođeno radu u tamnom okruženju (`Slate-900` / `Emerald-500`).
