document.getElementById('bmiForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Mengambil nilai dari input
  var berat = parseFloat(document.getElementById('berat').value);
  var tinggi = parseFloat(document.getElementById('tinggi').value);
  var usia = parseInt(document.getElementById('usia').value);
  // var jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
  if (isNaN(berat) || isNaN(tinggi) || isNaN(usia)) {
    // Menampilkan pesan jika ada input yang kosong
    alert('Mohon isi semua data terlebih dahulu dengan benar dan menggunakan Angka');
    return;
  }
  // Menghitung BMI
  // var bmi = berat / Math.pow(tinggi, 2) / 10000;
  let tinggiMeter = tinggi / 100;
  let bmi = berat / (tinggiMeter * tinggiMeter);
  console.log(bmi);

  // Menentukan status BMI
  var status = '';
  if (bmi < 18.5) {
    status = 'Kurus';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    status = 'Normal';
  } else if (bmi >= 25 && bmi < 29.9) {
    status = 'Gemuk';
  } else {
    status = 'Obesitas';
  }

  // Menampilkan hasil
  var hasil = `BMI: ${bmi.toFixed(2)} - Status: ${status}`;
  document.getElementById('hasil').textContent = hasil;

  // Memberikan penjelasan untuk obesitas
  if (status === 'Obesitas' && usia >= 18) {
    document.getElementById('hasil').innerHTML += '<p>Anda termasuk dalam kategori obesitas. Sebaiknya konsultasikan dengan dokter atau ahli gizi untuk nasihat lebih lanjut.</p>';
  }
});

// ambil data gender
let gender;
let checkBoxPerempuan = document.getElementById('female');
let checkBoxLaki = document.getElementById('male');

document.getElementById('male').addEventListener('click', () => {
  console.log('laki laki');
  gender = 'laki';
  checkBoxPerempuan.style.scale = '1';
  checkBoxLaki.style.scale = '1.1';
});

document.getElementById('female').addEventListener('click', () => {
  console.log('female');
  gender = 'perempuan';
  checkBoxPerempuan.style.scale = '1.1';
  checkBoxLaki.style.scale = '1';
});
