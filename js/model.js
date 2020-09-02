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
                answers: 'il lampo'
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
            // }, {
            //     id: 16,
            //     question: '',
            //     answer: ''
            // }, {
            //     id: 17,
            //     question: '',
            //     answer: ''

            // }, {
            //     id: 18,
            //     question: '',
            //     answer: ''

            // }, {
            //     id: 19,
            //     question: '',
            //     answer: ''
            // }, {
            //     id: 20,
            //     question: '',
            //     answer: ''
            // }, {
            //     id: 21,
            //     question: '',
            //     answer: ''
            // }, {
            //     id: 22,
            //     question: '',
            //     answer: ''

            // }, {
            //     id: 23,
            //     question: '',
            //     answer: ''

            // }, {
            //     id: 24,
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


