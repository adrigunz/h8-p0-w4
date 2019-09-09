function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    if (arrPenumpang == '') {
        return arrPenumpang;
    }
    var arr = [];
    for (var i = 0; i < arrPenumpang.length; i++) {
        var nama = arrPenumpang[i][0];
        var awal = arrPenumpang[i][1];
        var akhir = arrPenumpang[i][2];
        var duit = 0;

        for (var j = 0; j < rute.length; j++) {
            if (rute[j] == awal) {
                while (rute[j] != akhir) {
                    duit += 2000;
                    j++;
                }
            }
        }
        var result = {
            penumpang: nama,
            naikDari: awal,
            tujuan: akhir,
            bayar: duit
        }
        arr.push(result);

    }
    return arr;
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]