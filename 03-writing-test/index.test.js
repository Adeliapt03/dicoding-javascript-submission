import {
    sum
} from './index.js';
import {
    test
} from 'node:test';
import {
    strict as assert
} from 'node:assert';

test('fungsi sum dapat mengembalikan hasil penjumlahan dari dua angka', () => {
    assert.strictEqual(sum(5, 3), 8); // test 5 + 3 = 8
    assert.strictEqual(sum(-2, 2), 0); // test -2 + 2 = 0
    assert.strictEqual(sum(0, 0), 0); // test 0 + 0 = 0
    assert.strictEqual(sum(150, 100), 250); // test 150 + 100 = 250
});