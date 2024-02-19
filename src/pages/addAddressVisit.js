// addAddressVisit.js

import { ref, push, set, getDatabase, serverTimestamp, child, get } from 'firebase/database';

const addAddressVisit = async (referer) => {
  try {
    // Dapatkan referensi ke koleksi 'addressVisit'
    const database = getDatabase();
    const addressVisitRef = ref(database, 'addressVisit');

    // Cek apakah koleksi 'addressVisit' sudah ada
    const addressVisitSnapshot = await get(child(addressVisitRef, 'dummy')); // Mengambil dummy child node
    const collectionExists = addressVisitSnapshot.exists();

    // Jika koleksi belum ada, buat koleksi baru
    if (!collectionExists) {
      await set(addressVisitRef, {}); // Menyimpan dummy data untuk membuat koleksi
    }

    // Data yang akan ditambahkan ke koleksi 'addressVisit'
    const newData = {
      referer,
      timestamp: serverTimestamp(),
    };

    // Tambahkan data ke koleksi 'addressVisit'
    const newAddressVisitRef = push(addressVisitRef);
    await set(newAddressVisitRef, newData);

    console.log('Data berhasil ditambahkan ke addressVisit:', newData);
    return newData; // Mengembalikan data yang ditambahkan
  } catch (error) {
    console.error('Error:', error.message);
    throw error; // Mengembalikan error jika terjadi kesalahan
  }
};

export default addAddressVisit;
