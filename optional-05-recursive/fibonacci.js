function fibonacci(n) {
    if (n < 1) return [0]; // Jika n adalah 0, kembalikan [0]

    if (n === 1) return [0, 1]; // Jika n adalah 1, kembalikan [0, 1]

    const sequence = fibonacci(n - 1); // Panggil fungsi secara rekursif untuk n-1

    // Hitung elemen berikutnya dalam deret Fibonacci
    const nextValue = sequence.at(-1) + sequence.at(-2);
    sequence.push(nextValue); // Tambahkan elemen baru ke urutan

    return sequence; // Kembalikan urutan Fibonacci
}

// Jangan hapus kode di bawah ini!
export default fibonacci;