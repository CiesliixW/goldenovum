# goldenovum

Strona Goldenovum: jedna strona główna z jasnym przekazem (podnosimy wartość gruntów) i polityka prywatności.

Czysty HTML, CSS i odrobina JS, bez buildu i zależności.

- `index.html` to strona główna z sekcjami: hero z animowanym planem działek, Dla kogo, Co robimy, Proces, O firmie, Kontakt.
- `polityka-prywatnosci.html` zawiera treść polityki 1:1 z poprzedniej wersji, w nowym wyglądzie.
- `assets/styles.css` to cały wygląd. Kolory są zmiennymi na górze pliku, a fonty to Geist i Geist Mono z Google Fonts.
- `assets/main.js` generuje warstwice w tle animacji i obsługuje pojawianie się sekcji przy przewijaniu.
- `assets/favicon.svg` to znak firmy (kropla z warstwicami), który zastępuje stare złote logo PNG.

Animacja w hero działa w samym CSS i SVG. Przy włączonym w systemie „ograniczeniu ruchu” od razu pokazuje stan końcowy.

## Deploy na Vercelu

1. Na vercel.com: **Add New → Project**, potem import tego repozytorium.
2. Framework Preset: **Other**. Build Command i Output Directory zostaw puste.
3. Deploy.

Albo z terminala: `npx vercel --prod`.

`vercel.json` włącza `cleanUrls` (`/polityka-prywatnosci` bez `.html`).

## Powiązanie z holdingiem

To jedna ze stron grupy. Strona holdingu jest w repo [goldenovum-holdings](https://github.com/CiesliixW/goldenovum-holdings). Odnośniki do niej (pasek na górze, sekcja o firmie, stopka) mają atrybut `data-holding-link` i prowadzą do `https://goldenovum.pl`. Jeśli adres będzie inny, podmień go w `index.html` i `polityka-prywatnosci.html`.

## Podgląd lokalny

```
npx serve .
```

i wejdź na http://localhost:3000.
