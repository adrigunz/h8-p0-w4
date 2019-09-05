function changeMe(arr) {
    // you can only write your code here!
    var tanggal = new Date();
    var tahunIni = tanggal.getFullYear();
    for (var i = 0; i < arr.length; i++) {
        var namaDepan = arr[i][0];
        var namaUjung = arr[i][1];
        var kelamin = arr[i][2];
        var dob = arr[i][3];
        var umur = "";
        if (dob == undefined || dob > tahunIni) {
            umur = 'Invalid Birth Year';
        } else {
            umur = tahunIni - dob;
        }
        var data = {
            firstName: namaDepan,
            lastName: namaUjung,
            gender: kelamin,
            age: umur
        };
        console.log(`${i+1}. ${namaDepan} ${namaUjung}:`);
        console.log(data);
    }
}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""