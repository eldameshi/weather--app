// src/__tests__/helpers.test.js

import helpers from '../js/helpers';

describe('helpers.addInnerText', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="weatherInfo"></div>`;
  });

  test('e shton përshkrimin e motit në elementin e duhur', () => {
    const text = 'Sot është me diell dhe 22°C';
    const result = helpers().addInnerText('weatherInfo', text);

    // Printo diçka që lidhet me motin në konzolë
    console.log(`Informata e motit u shfaq: "${result}" në elementin #weatherInfo`);

    expect(result).toBe(text);
  });
});

describe('helpers.isColdWeather', () => {
  test('kthen true për temperaturë nën 10°C', () => {
    const result = helpers().isColdWeather(5);
    console.log(`🧊 Temperaturë: 5°C ➝ Është e ftohtë: ${result}`);
    expect(result).toBe(true);
  });

  test('kthen false për temperaturë mbi 10°C', () => {
    const result = helpers().isColdWeather(15);
   console.log(`🌤 Temperaturë: 15°C ➝ Është e ftohtë: ${result}`);
    expect(result).toBe(false);
  });
});
