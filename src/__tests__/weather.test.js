// src/__tests__/weather.test.js

import { formatTemperature } from '../js/weather';

describe('formatTemperature', () => {
  test('konverton 0°C në 32°F', () => {
    const result = formatTemperature(0);
    console.log('0°C →', result + '°F');
    expect(result).toBe(32);
  });

  test('konverton 100°C në 212°F', () => {
    const result = formatTemperature(100);
    console.log('100°C →', result + '°F');
    expect(result).toBe(212);
  });

  test('konverton 20°C në 68°F', () => {
    const result = formatTemperature(20);
    console.log('20°C →', result + '°F');
    expect(result).toBe(68);
  });
});
