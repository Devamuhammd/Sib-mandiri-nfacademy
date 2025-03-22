// **Data Produk**
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Smartwatch", harga: 3000000 },
    { id: 5, nama: "Headphone", harga: 1500000 }
];

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
    produkList = [...produkList, { id, nama, harga }];
    console.log(`Produk ${nama} berhasil ditambahkan!`);
}

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(id) {
    produkList = produkList.filter(produk => produk.id !== id);
    console.log(`Produk dengan ID ${id} berhasil dihapus!`);
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
    console.log("Daftar Produk:");
    produkList.forEach(({ id, nama, harga }) => {
        console.log(`ID: ${id}, Nama: ${nama}, Harga: ${harga}`);
    });
}

// **Event Listener**
const eventHandler = {
    tambah: (id, nama, harga) => tambahProduk(id, nama, harga),
    hapus: (id) => hapusProduk(id),
    tampilkan: () => tampilkanProduk()
};

// **Contoh Penggunaan**
tampilkanProduk(); // Menampilkan produk awal
eventHandler.tambah(6, "Keyboard", 500000); // Menambahkan produk baru
tampilkanProduk(); // Menampilkan produk setelah penambahan
eventHandler.hapus(4); // Menghapus produk dengan ID 3
tampilkanProduk(); // Menampilkan produk setelah penghapusan