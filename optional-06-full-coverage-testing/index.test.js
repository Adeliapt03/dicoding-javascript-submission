import sum from './index.js';
import {
    strict as assert
} from 'node:assert';
import test from 'node:test';

// Pengujian untuk penjumlahan dua angka positif
test('Penjumlahan dua angka positif', () => {
    assert.strictEqual(sum(4, 6), 10);
    assert.strictEqual(sum(12, 18), 30);
});

// Pengujian untuk satu atau kedua argumen yang bukan angka
test('Penjumlahan dengan argumen bukan angka mengembalikan 0', () => {
    assert.strictEqual(sum('4', 6), 0);
    assert.strictEqual(sum(4, '6'), 0);
    assert.strictEqual(sum('4', '6'), 0);
    assert.strictEqual(sum(null, 6), 0);
    assert.strictEqual(sum(4, undefined), 0);
});

// Pengujian untuk satu atau kedua argumen yang bernilai negatif
test('Penjumlahan dengan satu angka negatif mengembalikan 0', () => {
    assert.strictEqual(sum(-4, 6), 0);
    assert.strictEqual(sum(4, -6), 0);
    assert.strictEqual(sum(-4, -6), 0);
});

// Pengujian untuk kedua argumen bernilai 0
test('Penjumlahan nol dengan nol', () => {
    assert.strictEqual(sum(0, 0), 0);
});

// Pengujian untuk satu argumen bernilai 0 dan argumen lainnya positif
test('Penjumlahan dengan satu argumen nol', () => {
    assert.strictEqual(sum(0, 6), 6);
    assert.strictEqual(sum(4, 0), 4);
});