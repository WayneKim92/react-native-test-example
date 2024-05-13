import {expect, test} from '@jest/globals';
import {isTrue} from '../../src/utils/operations.ts';

test('true is true', () => {
  expect(isTrue(true)).toBe(true);
});

test('10 > 5 is true', () => {
  expect(isTrue(10 > 5)).toBe(true);
});

test('7 > 777 is false', () => {
  expect(isTrue(7 > 777)).toBe(false);
});
