function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
        dataArray.sort(function (a, b) {
            return a - b;
        });
        var hasil = [];
        for (var i = 0; i < dataArray.length; i++) {
            if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
                hasil.push(dataArray[i]);
            }
        }
        if (hasil.length == 0) {
            return "Nilai tidak ditemukan";
        } else {
            return hasil;
        }
    } else if (nilaiAwal > nilaiAkhir) {
        return "Nilai akhir harus lebih besar dari nilai awal";
    }
    else if (dataArray.length < 5) {
        return "Jumlah angka dalam dataArray harus lebih dari 5";
    }
}


console.log(SeleksiNilai(4, 17, [2, 25, 4]));