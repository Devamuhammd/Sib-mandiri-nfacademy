class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa = null) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }

    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
        console.log(`${this.nama} telah menyewa kendaraan: ${kendaraan}`);
    }

    kembalikanKendaraan() {
        console.log(`${this.nama} telah mengembalikan kendaraan: ${this.kendaraanDisewa}`);
        this.kendaraanDisewa = null;
    }

    tampilkanInfo() {
        const status = this.kendaraanDisewa ? `Menyewa: ${this.kendaraanDisewa}` : "Tidak sedang menyewa kendaraan";
        return `Nama: ${this.nama}, Nomor Telepon: ${this.nomorTelepon}, ${status}`;
    }
}

class SistemTransportasi {
    constructor() {
        this.pelangganList = [];
    }

    tambahPelanggan(pelanggan) {
        this.pelangganList.push(pelanggan);
    }

    tampilkanPelangganMenyewa() {
        console.log("Daftar Pelanggan yang Menyewa Kendaraan:");
        this.pelangganList.forEach(pelanggan => {
            if (pelanggan.kendaraanDisewa) {
                console.log(pelanggan.tampilkanInfo());
            }
        });
    }
}

// Contoh Penggunaan
const pelanggan1 = new Pelanggan("Messi", "08123456789");
const pelanggan2 = new Pelanggan("Neymar", "08987654321");
const pelanggan3 = new Pelanggan("Suarez", "08987654389");

// Sistem Manajemen
const sistem = new SistemTransportasi();
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);
sistem.tambahPelanggan(pelanggan3);

// Proses penyewaan kendaraan
pelanggan1.sewaKendaraan("Mobil Avanza");
pelanggan2.sewaKendaraan("Motor Nmax");
pelanggan3.sewaKendaraan("Mobil Mclaren");

// Menampilkan daftar pelanggan yang sedang menyewa kendaraan
sistem.tampilkanPelangganMenyewa();

// Pengembalian kendaraan
pelanggan1.kembalikanKendaraan();

// Menampilkan daftar setelah pengembalian kendaraan
sistem.tampilkanPelangganMenyewa();