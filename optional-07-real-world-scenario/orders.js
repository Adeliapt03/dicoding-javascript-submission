// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel untuk menampung data orders
let orders = [];

// Fungsi untuk addOrder
function addOrder(customerName, items) {
  // Membuat objek order baru
  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items, // items harus berupa array objek { name: string, price: number }
    totalPrice: calculateTotal(items), // Menghitung total harga
    status: 'Menunggu' // Status awal
  };

  // Menambahkan pesanan baru ke dalam array orders
  orders.push(newOrder);
  return newOrder; // Mengembalikan order yang baru ditambahkan
}

// Fungsi untuk menghitung total harga dari item
function calculateTotal(items) {
  return items.reduce((total, item) => total + item.price, 0);
}

// Fungsi untuk updateOrderStatus
function updateOrderStatus(orderId, status) {
  // Mencari order berdasarkan orderId
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = status; // Memperbarui status
    return order; // Mengembalikan order yang telah diperbarui
  }
  return null; // Mengembalikan null jika order tidak ditemukan
}

// Fungsi untuk menghitung total revenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai') // Memfilter order yang sudah selesai
    .reduce((total, order) => total + order.totalPrice, 0); // Menghitung total revenue
}

// Fungsi untuk menghapus order berdasarkan id
function deleteOrder(id) {
  const initialLength = orders.length; // Menyimpan panjang awal
  orders = orders.filter(order => order.id !== id); // Menghapus order dengan id yang sesuai
  return orders.length < initialLength; // Mengembalikan true jika order berhasil dihapus
}

// Mengekspor variabel dan fungsi
export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder
};