const pria = document.getElementById('pria');
const wanita = document.getElementById('wanita');
var umur = document.getElementById('umur');
const jk = document.getElementsByName('jk');
var tuaDiisi = false;
var jkDiisi = false;
const btnHitung = document.getElementById('hitung');

pria.onclick = function() { document.body.style.backgroundImage = "url('images/bananas.png')"; }
wanita.onclick = function() { document.body.style.backgroundImage = "url('images/sakura.png')"; }

btnHitung.onclick = function() {
    var varTinggi = 0;
    var varBerat = 0;
    var pria = true;
    var umur = document.getElementById("umur").value;

    var errMsg = '';
    var newTinggi = document.getElementById("tinggi").value.match(/[0-9]+/gi);
    var newBerat = document.getElementById("berat").value.match(/[0-9]+/gi);

    tinggi.value = newTinggi;
    varTinggi = newTinggi;

    berat.value = newBerat;
    varBerat = newBerat;
    
    for (var i = 0; i < jk.length; i++) {
        if (jk[i].checked === true) jkDiisi = true;
    }
    if (jkDiisi === false) errMsg += 'Jenis Kelamin harus diisi\n'

    if (jk[0].checked === true) pria = true;
    else pria = false;

    if (newTinggi < 0 || newTinggi > 250 || tinggi.value.length === 0) errMsg += 'Tinggi harus diisi [0-250]\n'
    if (newBerat < 0 || newBerat > 200 || berat.value.length === 0) errMsg += 'Berat harus diisi [0-200]\n'
        
    if (errMsg.length > 0) alert(errMsg);
    else {
        var bbi = hitungBBI(umur, pria, varTinggi);
        var bmi = hasil(varBerat / (varTinggi / 100 * varTinggi / 100));
        var txtSaran = saran(varBerat / (varTinggi / 100 * varTinggi / 100));
        var hasilText = 'Berat ideal Anda adalah '+ bbi +' kg, Anda termasuk dalam kategori '+ bmi; // +', saran '+ txtSaran;

        alert(hasilText);
        // const rowBaru = document.createElement('tr');
        // const txtHasil = document.createTextNode(hasilText);

        // rowBaru.appendChild(txtHasil);

        // const addText = document.getElementById('table')
        // addText.appendChild(rowBaru)
   
        //console.log('Berat ideal Anda adalah '+ bbi +' kg, Anda termasuk dalam kategori '+ bmi +', saran '+ txtSaran);
    }

}

function hitungBBI(umur, pria, tinggi){
    var bbi = 0;

    if (umur === 1){
        bbi = (12/2) + 4;
    } else if (umur > 1 && umur < 11) {
        bbi =  umur * 2 + 8
    } else {
        if (pria === false) bbi = (tinggi - 100) * 0.9;
        else bbi = tinggi - 100
    }
    return bbi;
}

function hasil (bbi){
    var msg = ''
    if (bbi <= 18.5) msg = 'Kurus atau Kurang Berat Badan';
    else if (bbi <= 24.9) msg = 'Normal';
    else if (bbi <= 29.9) msg = 'Berat Badan Berlebih atau Gemuk';
    else if (bbi <= 34.9) msg = 'Obesitas Kelas 1';
    else if (bbi <= 39.9) msg = 'Obesitas Kelas 2';
    else msg = 'Obesitas Kelas 3';

    return msg
}

function saran (bbi) {
    var msg = '';
    
    if (bbi <= 18.5) msg = 'Anda termasuk kurus atau memiliki berat badan kurang, jika angka BMI Anda berada di bawah 18,5. Bagaimana cara menambah berat badan? Jika Anda ingin menaikkan berat badan, Anda perlu mengonsumsi makanan dan minuman dengan jumlah kalori yang lebih besar dari kebutuhan kalori harian Anda. Anda bisa menambahkan asupan kalori Anda sebanyak 300-500 kkal per hari. Misalnya, jika kebutuhan total kalori harian Anda adalah 1700 kkal, Anda perlu mengonsumsi makanan dengan total 1700+500 = 2200 kkal per hari.';
    else if (bbi < 24.9) msg = 'Berat badan Anda bisa dikatakan ideal jika angka BMI Anda berada antara angka 18,5 sampai 22,9. Bagaimana cara menjaga agar berat badan tetap ideal? Anda perlu mengonsumsi makanan dan minuman sesuai dengan kebutuhan kalori harian Anda, untuk mempertahankan berat badan ideal seperti sekarang. Misalnya, jika kebutuhan kalori harian Anda adalah 1950 kkal, maka Anda harus mengonsumsi makanan dengan total kalori 1950 per harinya.';
    else if (bbi < 29.9) msg = 'Anda termasuk gemuk atau memiliki berat badan berlebih jika angka BMI Anda berada antara angka 23 sampai 24,9. Bagaimana cara menurunkan berat badan? Untuk menurunkan berat badan, Anda harus mengonsumsi makanan dan minuman dengan jumlah kalori yang lebih kecil dari kebutuhan kalori harian Anda. Kurangi sebanyak 300-500 kalori per hari dari hasil perhitungan yang Anda dapatkan. Mengurangi jumlah asupan Anda setidaknya 500 kkal per hari dapat membantu menurunkan berat badan Anda sebesar 0,5-1 kg per minggu. Misalnya, jika hasil dari perhitungan menunjukkan bahwa kebutuhan total kalori harian Anda adalah 2100 kkal, maka Anda hanya perlu mengonsumsi asupan kalori sebesar 1600 kkal per hari (2100-500 kkal). Berapa jumlah kalori minimal yang wajib Anda dapatkan? Rata-rata wanita memerlukan asupan sebanyak 2000 kalori per harinya, sedangkan pria rata-rata membutuhkan asupan sebanyak 2500 kalori per hari. Untuk menurunkan berat badan, idealnya Anda hanya perlu mengurangi 500 kalori setiap hari. Namun, ingat. Semua orang membutuhkan minimal 1200 kkal per hari supaya tubuh bisa menjalani fungsinya. Mengonsumsi kalori per hari lebih rendah dari 1200 kkal akan berdampak buruk bagi kesehatan Anda. ';
    else msg = 'Untuk menurunkan berat badan, Anda harus mengonsumsi makanan dan minuman dengan jumlah kalori yang lebih kecil dari kebutuhan kalori harian Anda. Kurangi sebanyak 300-500 kalori per hari dari hasil perhitungan yang Anda dapatkan. Mengurangi jumlah asupan Anda setidaknya 500 kkal per hari dapat membantu menurunkan berat badan Anda sebesar 0,5-1 kg per minggu. Misalnya, jika hasil dari perhitungan menunjukkan bahwa kebutuhan total kalori harian Anda adalah 2100 kkal, maka Anda hanya perlu mengonsumsi asupan kalori sebesar 1600 kkal per hari (2100-500 kkal). Setelah Anda terbiasa dengan jumlah kalori yang lebih sedikit ini, Anda bisa perlahan menguranginya lebih banyak lagi. ';

    return msg
}