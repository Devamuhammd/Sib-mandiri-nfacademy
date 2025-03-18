// Array untuk menyimpan daftar produk
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Fungsi untuk menambahkan produk baru
function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length ? produkToko[produkToko.length - 1].id + 1 : 1;
    produkToko.push({ id: idBaru, nama, harga, stok });
    console.log(`Produk ${nama} berhasil ditambahkan.`);
}

// Fungsi untuk menghapus produk berdasarkan id
function hapusProduk(id) {
    let index = produkToko.findIndex(produk => produk.id === id);
    if (index !== -1) {
        let namaProduk = produkToko[index].nama;
        produkToko.splice(index, 1);
        console.log(`Produk ${namaProduk} berhasil dihapus.`);
    } else {
        console.log(`Produk dengan ID ${id} tidak ditemukan.`);
    }
}

// Fungsi untuk menampilkan daftar produk
function tampilkanProduk() {
    console.log("Daftar Produk Toko:");
    produkToko.forEach(produk => {
        console.log(`ID: ${produk.id}, Nama: ${produk.nama}, Harga: Rp${produk.harga}, Stok: ${produk.stok}`);
    });
}

// Contoh penggunaan ketika mau menambahkan produk dan menghapus produk dengan cara menghapus id produk nya
tambahProduk("usb", 500000, 8);
hapusProduk(1);
tampilkanProduk();

