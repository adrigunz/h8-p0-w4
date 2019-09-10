function highestScore(students) {
    // Code disini
    if (students == '') {
        return {};
    }
    var murid = {};
    var data = {};

    for (var i = 0; i < students.length; i++) {
        for (var j = i + 1; j < students.length; j++) {
            if (students[i].score > students[j].score && students[i].class == students[j].class) {
                var temp = students[i];
                students[i] = students[j];
                students[j] = temp;
            }

        }
    }

    for (var k = 0; k < students.length; k++) {
        data['name'] = students[k].name;
        data['score'] = students[k].score;
        murid[students[k].class] = data;
        data = {};
    }
    return murid;
}

// TEST CASE
console.log(highestScore([{
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([{
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}