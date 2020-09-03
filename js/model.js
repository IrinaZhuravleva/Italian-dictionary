let tralivali;
let data;

const courses = document.querySelectorAll('#exampleFormControlSelect1 option');

if (localStorage.getItem("data") != null) {
    data = JSON.parse(localStorage.getItem('data'));
        
} else {
    data = [{
            id: 0,
                question: 'телосложение',
                answer: 'la fatezza',

            }, {
                id: 2,
                question: 'гобелен',
                answer: 'l arazzo'
            }, {
                id: 3,
                question: 'спасение',
                answer: 'lo scampo'

            }, {
                id: 4,
                question: 'молния',
                answer: 'il lampo'
           }, {
               id: 5,
               question: 'закат',
               answer: 'il tramonto'
           }, {
               id: 6,
               question: 'ослаблять',
               answer: 'afflievolire'
           }, {
               id: 7,
               question: 'разбираться',
               answer: 'raccapezzarsi'

           }, {
               id: 8,
               question: 'отнимать',
               answer: 'togliere'

           }, {
               id: 9,
               question: 'проектировать',
               answer: 'architettare'
           }, {
               id: 10,
               question: 'обманывать',
               answer: 'gabbare'
           }, {
               id: 11,
               question: 'простодушие',
               answer: 'la dabbengaggine'
           }, {
               id: 12,
               question: 'насмешка',
               answer: 'la cilecca'

           }, {
               id: 13,
               question: 'дыхание',
               answer: 'il fiato'

           }, {
               id: 14,
               question: 'створка шкафа',
               answer: 'l\' anta'
            }, {
                id: 15,
                question: 'волнение',
                answer: 'il timulto'
            }, {
                id: 16,
                question: 'разочаровывать',
                answer: 'deludere'
            }, {
                id: 17,
                question: 'обмениваться',
                answer: 'scambiare'

            }, {
                id: 18,
                question: 'терять',
                answer: 'smarrire'

            }, {
                id: 19,
                question: 'вырезать',
                answer: 'scolpire'
            }, {
                id: 20,
                question: 'огурец',
                answer: 'il cetriolo'
            }, {
                id: 21,
                question: 'тратить',
                answer: 'spendere'
            }, {
                id: 22,
                question: 'расход',
                answer: 'la spesa'

            }, {
                id: 23,
                question: 'пудель',
                answer: 'il barbone'

            }, {
                id: 24,
                question: 'предотвращать',
                answer: 'riparare'
            }, {
                id: 25,
                question: 'защита',
                answer: 'il riparo'
            }, {
                id: 26,
                question: 'двигать',
                answer: 'giocare'
            }, {
                id: 27,
                question: 'каторга',
                answer: 'la galera'

            }, {
                id: 28,
                question: 'запирать на засов',
                answer: 'sprangare'

            }, {
                id: 29,
                question: 'извиваться',
                answer: 'guizzare'
            }, {
                id: 30,
                question: 'записная книжка',
                answer: 'il taccuino'
            }, {
                id: 31,
                question: 'спортзал',
                answer: 'la palestra'
            }, {
                id: 32,
                question: 'спичка',
                answer: 'il fiammifero'


            }, {
                id: 33,
                question: 'зажигалка',
                answer: 'l\'accendino'
            }, {
                id: 34,
                question: 'сушеная треска',
                answer: 'lo stoccafisso'
            }, {
                id: 35,
                question: 'задыхаться',
                answer: 'ansimare'
            }, {
                id: 36,
                question: 'бросать',
                answer: 'cacciare'

            }, {
                id: 37,
                question: 'темнеть',
                answer: 'imbrunire'

            }, {
                id: 38,
                question: 'сверлить',
                answer: 'trapanare'
            }, {
                id: 39,
                question: 'отходить',
                answer: 'arretrare'
            }, {
                id: 40,
                question: 'большой палец',
                answer: 'il pollice'
            // }, {
            //     id: 41,
            //     question: '',
            //     answer: ''

            // }, {
            //     id: 42,
            //     question: '',
            //     answer: ''

            // }, {
            //     id: 43,
            //     question: '',
            //     answer: ''
        }];
    localStorage.setItem('data', JSON.stringify(data));
}

function clearFields() {
    document.querySelector('#question').value = "";
    document.querySelector('#question').focus();
    document.querySelector('#answer').value = "";
}

// csv-file
function downloadCSV() {
    const JsonFields = ["id", "question", "answer"];
    let csvStr = JsonFields.join(",") + "\n";

    data.forEach(element => {
        
        id = element.id;
        question = element.question;
        answer = element.answer;

        csvStr += id + ',' + question + ',' + answer + ',' + "\n";
    })
 
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvStr);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'output.csv';
    hiddenElement.click();
}

// function downloadCSV(csvStr) {
//     debugger
//     var hiddenElement = document.createElement('a');
//     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvStr);
//     hiddenElement.target = '_blank';
//     hiddenElement.download = 'output.csv';
//     hiddenElement.click();
// }

// function downloadCSV(str) {

//     var hiddenElement = document.createElement('a');
//     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(str);
//     hiddenElement.target = '_blank';
//     hiddenElement.download = 'output.csv';
//     hiddenElement.click();
// }


