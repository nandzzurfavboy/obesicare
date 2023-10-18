document.getElementById('bmiForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Mengambil nilai dari input
  var berat = parseFloat(document.getElementById('berat').value);
  var tinggi = parseFloat(document.getElementById('tinggi').value);
  var usia = parseInt(document.getElementById('usia').value);
  var jenisKelamin = document.getElementById('jenisKelamin').value;

  // Menghitung BMI
  var bmi = berat / Math.pow(tinggi / 100, 2);

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
