# goldenovum

Statyczne odtworzenie strony https://www.goldenovum.pl: strona główna, O nas, Obszary działalności, Kontakt i Polityka prywatności.

Czysty HTML i CSS, bez buildu i zależności. Oryginalny arkusz stylów i grafiki są w `assets/`, a menu mobilne obsługuje mały skrypt inline na każdej stronie.

## Deploy na Vercelu

1. Na vercel.com: **Add New → Project**, potem import tego repozytorium.
2. Framework Preset: **Other**. Build Command i Output Directory zostaw puste.
3. Deploy.

Albo z terminala: `npx vercel` (podgląd) / `npx vercel --prod` (produkcja).

`vercel.json` włącza `cleanUrls`, więc adresy działają jak w oryginale (`/o-nas`, `/kontakt` itd.). Ustawia też długi cache dla `assets/`.

## Podgląd lokalny

Linki są ścieżkami od korzenia (`/o-nas`), więc otwarcie pliku z dysku ich nie obsłuży. Uruchom lokalny serwer:

```
npx serve .
```

i wejdź na http://localhost:3000.
