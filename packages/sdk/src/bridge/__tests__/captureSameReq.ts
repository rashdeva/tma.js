import { it, expect } from 'vitest';
import { captureSameReq } from '../captureSameReq';

it('should return function which returns true, if initially passed value equals the dynamic one', () => {
  expect(captureSameReq('abc')({ req_id: 'abc' })).toBe(true);
  expect(captureSameReq('abc')({ req_id: '111' })).toBe(false);
});