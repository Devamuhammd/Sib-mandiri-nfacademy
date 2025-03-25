// Data: Array of Objects
const users = [
    { nama: "Data 1", umur: 20, alamat: "Jl. Data 1" },
    { nama: "Data 2", umur: 21, alamat: "Jl. Data 2" },
    { nama: "Data 3", umur: 22, alamat: "Jl. Data 3" },
    { nama: "Data 4", umur: 23, alamat: "Jl. Data 4" },
    { nama: "Data 5", umur: 24, alamat: "Jl. Data 5" },
    { nama: "Data 6", umur: 25, alamat: "Jl. Data 6" },
    { nama: "Data 7", umur: 26, alamat: "Jl. Data 7" },
    { nama: "Data 8", umur: 27, alamat: "Jl. Data 8" },
    { nama: "Data 9", umur: 28, alamat: "Jl. Data 9" },
    { nama: "Data 10", umur: 29, alamat: "Jl. Data 10" },
];

// Controller: Fungsi untuk Melihat, Menambah, dan Menghapus Data
const index = () => {
    console.log("📋 Daftar Pengguna:");
    users.map((user, index) => {
        console.log(`${index + 1}. ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}`);
    });
};

const store = (user) => {
    users.push(user);
    console.log(`✅ Data Berhasil Ditambahkan: ${user.nama}`);
};

const destroy = (nama) => {
    const index = users.findIndex((user) => user.nama === nama);
    if (index !== -1) {
        users.splice(index, 1);
        console.log(`❌ Data ${nama} Berhasil Dihapus`);
    } else {
        console.log(`⚠ Data ${nama} Tidak Ditemukan`);
    }
};

// Main Function: Menjalankan Semua Fungsi
const main = () => {
    // Tambahkan 2 Data Baru
    store({ nama: "Data 11", umur: 30, alamat: "Jl. Data 11" });
    store({ nama: "Data 12", umur: 31, alamat: "Jl. Data 12" });

    // Tampilkan Data
    index();

    // Hapus Salah Satu Data
    destroy("Data 5");

    // Tampilkan Data Setelah Dihapus
    index();
};

// Jalankan Program
main();
