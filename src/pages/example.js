// OtherPage.js

import React, { useEffect, useState } from 'react';
import addAddressVisit from './addAddressVisit';
import { database } from './api/firebase'; // Sesuaikan dengan path yang benar

const OtherPage = () => {
  const [addedData, setAddedData] = useState(null);

  useEffect(() => {
    const referer = window.location.href;

    // Panggil fungsi addAddressVisit dengan referer saat ini
    addAddressVisit(referer, database)
      .then((data) => {
        console.log('Data berhasil ditambahkan:', data);
        setAddedData(data); // Simpan data ke state
      })
      .catch((error) => {
        console.error('Error saat menambahkan data:', error.message);
      });
  }, []); // useEffect akan dijalankan hanya sekali saat komponen dimuat

  return (
    <div>
      <h1>Halaman Lain</h1>
      {/* Konten halaman lain */}
      {addedData && <p>Data berhasil ditambahkan: {addedData.referer}</p>}
    </div>
  );
};

export default OtherPage;
