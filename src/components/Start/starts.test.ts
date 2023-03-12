import { expect, test } from 'vitest';

const sum = (...nums: number[]) => {
	return nums.reduce((acc, curr) => (acc += curr), 0);
};

test('1 + 1', () => {
	expect(sum(1, 1)).toEqual(2);
});

test('1 + 2 + 3', () => {
	expect(sum(1, 2, 3)).toEqual(6);
});

test('1 to 10', () => {
	expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toEqual(55);
});

test('100', () => {
	expect(sum(100)).toEqual(100);
});
test('0', () => expect(sum()).toEqual(0));
