# 🌤️ Weather App – API Documentation

Ky dokument përshkruan funksionet e disponueshme në projektin për kërkimin e motit, duke përfshirë ndihmësit (`helpers.js`) dhe kërkimin me sugjerime (`search.js`).

---

## 📁 helpers.js

**Modul për ndihmë në manipulimin e DOM dhe kërkimin e të dhënave nga OpenWeather API.**

### ✅ Funksionet

#### `createElement(tag, className)`
Krijon një element HTML dhe i vendos një klasë.

- **Parametra:**
  - `tag` *(string)* – Lloji i elementit (p.sh. `"div"`, `"span"`).
  - `className` *(string)* – Emri i klasës që do i caktohet.
- **Kthen:** `HTMLElement`

---

#### `createElementWithInnerText(tag, className, text)`
Krijon një element HTML dhe i vendos tekst të brendshëm.

- **Parametra:**
  - `tag` *(string)*
  - `className` *(string)*
  - `text` *(string)*
- **Kthen:** `HTMLElement`

---

#### `addInnerText(id, text)`
Vendos tekst brenda një elementi HTML sipas `id`.

- **Parametra:**
  - `id` *(string)* – ID e elementit.
  - `text` *(string)* – Teksti për të vendosur.
- **Kthen:** `string` ose `null` nëse elementi nuk ekziston.

---

#### `capitalizeDescription(desc)`
Kapitalizon shkronjën e parë të përshkrimit të motit.

- **Parametra:**  
  - `desc` *(string)* – Përshkrimi (p.sh. `"overcast clouds"`).
- **Kthen:** `string` – `"Overcast clouds"`

---

#### `isColdWeather(tempCelsius)`
Kontrollon nëse temperatura është më e ulët se 10°C.

- **Parametra:**  
  - `tempCelsius` *(number)*
- **Kthen:** `boolean` – `true` nëse është nën 10°C.

---

#### `clearError()`
Pastron çdo mesazh gabimi nga elementi me ID `errorMessage`.

- **Kthen:** `void`

---

#### `getFahrenheit(city)`
Kërkon të dhëna të motit në Fahrenheit për një qytet të dhënë duke përdorur OpenWeather API.

- **Parametra:**  
  - `city` *(string)* – Emri i qytetit (p.sh. `"London"`).
- **Kthen:** `Promise<Object|null>` – Objekt JSON me të dhënat ose `null` nëse ka gabim.

---

## 🔍 search.js

**Modul për aktivizimin e input-it të kërkimit me `Algolia Places` autocomplete.**

### ✅ Funksionet

#### `autoComplete()`
Konfiguron input-in me ID `#search` për të dhënë sugjerime qytetesh në kohë reale.

- **Përdor teknologjinë:** [Algolia Places](https://community.algolia.com/places/)
- **Kthen:**  
  - `Object` – Instanca e `placesAutocomplete`

---

## 🔐 API Keys të Përdorura

| Shërbimi         | Emri i Key-it                            | Vlera                          |
|------------------|------------------------------------------|--------------------------------|
| OpenWeather API  | `API_KEY`                                | 'YOUR_API_KEY'                 |
| Algolia Places   | `appId` dhe `apiKey` për `places.js`     | 'YOUR_API_ID', 'YOUR_API_KEY'  |

> ⚠️ **Mos i vendos këto API Key në publik pa siguri!**

---

## 📦 Varësitë

- [`places.js`](https://github.com/algolia/places) – për auto-complete të qyteteve
- [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) – për kërkesa HTTP

---

## 🧪 Shembull Përdorimi

```js
import helpers from './helpers.js';
import autoComplete from './search.js';

const city = "Tirana";
helpers.getFahrenheit(city).then(data => {
  if (data) {
    console.log("Temperatura:", data.main.temp);
  }
});

autoComplete(); // Aktivizon input-in e kërkimit
```
---

## ❗ Kodet e Gabimeve nga API

| Kodi | Kuptimi                            | Përshkrimi                                                                 |
|------|-------------------------------------|----------------------------------------------------------------------------|
| 400  | Bad Request                         | Kërkesa është e gabuar ose mungojnë parametrat e nevojshëm.               |
| 401  | Unauthorized                        | API key është gabim ose mungon autorizimi.                                |
| 403  | Forbidden                           | Akses i ndaluar – mund të ketë kufizime në planin e API-së.               |
| 404  | Not Found                           | Qyteti nuk u gjet ose URL është e gabuar.                                 |
| 500+ | Internal Server Error / Server Fail| Problemi është nga ana e serverit të OpenWeather ose Algolia.             |

> ⚠️ Për çdo gabim, përdoret një mesazh i personalizuar në `#errorMessage` me fshirje automatike pas disa sekondash.
