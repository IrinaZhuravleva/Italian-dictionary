// https: //www.tania-soleil.com/proverbi-italiani/
let tralivali;

let proverbList = [
    "Aiutati che Dio t’aiuta.<br />Под лежачий камень вода не течет.",
    "A caval donato non si guarda in bocca.<br />Дареному коню в зубы не смотрят.",
    "A goccia a goccia, si scava la roccia.<br />Вода камень точит.",
    "A chi non beve birra, Dio neghi anche l’acqua.<br />Того, кто не пьёт пива, Бог может лишить воды.",
    "Al povero mancano tante cose, all’avaro tutte.<br />Бедняку не хватает многих вещей, жадному – всего.",
    "Aiutati che Dio t’aiuta.<br />Под лежачий камень вода не течет.",
    "Accade più in un’ora che in cent’anni.<br />Порой за час случается больше, чем за сотню лет.",
    "Altro è correre, altro è arrivare.<br />Одно дело бежать, другое — добежать.",
    "Accada quello che deve e vada il mondo a rotoli.<br />Пусть будет, что будет, и пусть весь мир летит вверх тормашками.",
    "Bellezza senza bontà è come vino svanito.<br />Красота без доброты подобна выдохшемуся вину.",
    "Bocca baciata non perde ventura, anzi si rinnova come fa la luna.<br />От поцелуя уста не блекнут.",
    "Burlando si dice il vero.<br />В каждой шутке есть доля правды.",
    "Cacio è sano; se vien di scarsa mano.<br />Сыр хорош, если взять немного (всё хорошо в меру).",
    "C’è chi mangia senza lavorare e chi lavora senza mangiare.	<br />Иногда тот ест,  кто не работает, а кто работает — не ест.",
    "Che nessuno faccia il passo più lungo della gamba.	<br />Нельзя сделать шаг больше, чем позволяет длина ноги.",
    "Chi cammina diritto campa afflitto.<br />Кто поступает честно, живёт в печали.",
    "Chi cerca — trova e chi domanda intende.<br />Кто ищет, тот найдет, кто спросит, тот поймет.",
    "Chi la dura la vince.<br />Кто упрям, тот победит.",
    "Сhi lingua ha a Roma va.<br />У кого язык есть, до Рима дойдет.",
    "Chi misura se stesso, misura tutto il mondo.<br />Кто знает себя, знает весь мир",
    "Chi non lavora, non mangia.<br />Кто не работает, тот не ест.",
    "Chi troppo vuole, nulla stringe.<br />Кто много хочет, ничего не получит.",
    "Chi trova un amico, trova un tesoro.<br />Кто нашел друга, нашел сокровище.",
    "Chi vive nel passato, muore disperato.<br />Живущий прошлым умрёт от отчаяния.",
    "Chi teme acqua e vento non si metta in mare.<br />Воды бояться – моряком не бывать.",
    "Due paradisi non si godono mai.<br />Двумя Раями не насладишься.",
    "Detto, fatto.<br />Сказано — сделано.",
    "Dopo il cattivo vien il buono.<br />Нет худа без добра.",
    "Errore riconosciuto conduce alla verità.<br />Признанная ошибка приводит к истине.",
    "Fin alla bara sempre se n’impara.<br />Век живи, век учись.",
    "Fatti i cazzi tuoi, ca campi cent’anni.<br />Занимайся своими делами и проживёшь до ста лет.",
    "Grande è la forza dell’abitudine.<br />Великая сила привычки.",
    "Gli amici degli amici sono amici nostri.<br />Друзья наших друзей — наши друзья."
]

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
                id: 1,
                question: 'печь',
                answer: 'la stufa'
            }, {
                id: 2,
                question: 'гобелен',
                answer: 'l\'arazzo'
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
               answer: 'l\'anta'
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
            }, {
                id: 41,
                question: 'наклонять',
                answer: 'chinare'
            }, {
                id: 42,
                question: 'рыться',
                answer: 'frugare'
            }, {
                id: 43,
                question: 'затруднение',
                answer: 'l\'impiccio'
            }, {
                id: 44,
                question: 'обманывать',
                answer: 'infinocchiare'
            }, {
                id: 45,
                question: 'фенхель',
                answer: 'il finocchio'
            }, {
                id: 46,
                question: 'бочка',
                answer: 'la botta'
            }, {
                id: 47,
                question: 'полоскать',
                answer: 'richiacquare'
            }, {
                id: 48,
                question: 'неподражаемый',
                answer: 'inimitabile'
            }, {
                id: 49,
                question: 'воздыхательница',
                answer: 'la spasimante'
            }, {
                id: 50,
                question: 'надоедать',
                answer: 'fastidiare'
            }, {
                id: 51,
                question: 'опустошать',
                answer: 'svuotare'
            }, {
                id: 52,
                question: 'доверие',
                answer: 'la fiducia'
            }, {
                id: 53,
                question: 'уравнивать',
                answer: 'pianeggiare'
            }, {
                id: 54,
                question: 'тушить',
                answer: 'stufare'    
            }, {
                id: 55,
                question: 'радость',
                answer: 'la letizia'
            }, {
                id: 56,
                question: 'опьянять',
                answer: 'inebriare'
            }, {
                id: 57,
                question: 'пагубный',
                answer: 'malefico'
            }, {
                id: 58,
                question: 'опытность',
                answer: 'la perizia'
            }, {
                id: 59,
                question: 'сталь',
                answer: 'l\'acciaio'
            }, {
                id: 60,
                question: 'мороз',
                answer: 'il gelo'
            }, {
                id: 61,
                question: 'блаженство',
                answer: 'la beatitudine'
            }, {
                id: 62,
                question: 'скрывать',
                answer: 'celare'
            }, {
                id: 63,
                question: 'ложь',
                answer: 'la bugia'
            }, {
                id: 64,
                question: 'расследование',
                answer: 'l\'indagine'
            }, {
                id: 65,
                question: 'сокращаться',
                answer: 'accorciare'
            }, {
                id: 66,
                question: 'прощаться',
                answer: 'congedarsi'
            }, {
                id: 67,
                question: 'подавать',
                answer: 'porgere'
            }, {
                id: 68,
                question: 'преуменьшение',
                answer: 'la menomazione'
            }, {
                id: 69,
                question: 'собранный',
                answer: 'colto'
            }, {
                id: 70,
                question: 'соглашение',
                answer: 'il patteggiamento'
            }, {
                id: 71,
                question: 'сапог',
                answer: 'lo stivale'
            }, {
                id: 72,
                question: 'приводить к этому',
                answer: 'pararci'
            }, {
                id: 73,
                question: 'пробовать',
                answer: 'campionare'
            }, {
                id: 74,
                question: 'кегля',
                answer: 'il birillo'
            }, {
                id: 75,
                question: 'сущность',
                answer: 'il midollo'
            }, {
                id: 76,
                question: 'крем-пудра',
                answer: 'il fondotinta'
            }, {
                id: 77,
                question: 'смущенный',
                answer: 'impacciato'
            }, {
                id: 78,
                question: 'вой',
                answer: 'il guaito'
            }, {
                id: 79,
                question: 'охотничья собака',
                answer: 'il bracco'
            }, {
                id: 80,
                question: 'вездеход',
                answer: 'il fuoristrada'
            }, {
                id: 81,
                question: 'иностранец',
                answer: 'il forestiero'
            }, {
                id: 82,
                question: 'болтать',
                answer: 'chiacchierare'
            }, {
                id: 83,
                question: 'распутье',
                answer: 'il bivio'
            }, {
                id: 84,
                question: 'пыхтеть',
                answer: 'sbuffare'
            }, {
                id: 85,
                question: 'поведение',
                answer: 'atteggiamento'
            }, {
                id: 86,
                question: 'отказ',
                answer: 'il rifuito'
            }, {
                id: 87,
                question: 'отделяться',
                answer: 'staccarsi'
            }, {
                id: 88,
                question: 'плести',
                answer: 'intrecciare'
            }, {
                id: 89,
                question: 'теперь',
                answer: 'ormai'
            }, {
                id: 90,
                question: 'становиться',
                answer: 'farsi'
            }, {
                id: 91,
                question: 'оттенок',
                answer: 'la sfumatura'
            }, {
                id: 92,
                question: 'недостаточный',
                answer: 'scarso'
            }, {
                id: 93,
                question: 'куница',
                answer: 'la martora'
            }, {
                id: 94,
                question: 'снимать кору',
                answer: 'scrostare'
            }, {
                id: 95,
                question: 'этап',
                answer: 'la tappa'
            }, {
                id: 96,
                question: 'отделение',
                answer: 'lo scomparto'
            }, {
                id: 97,
                question: 'необходимый',
                answer: 'l\'occorrente'
            }, {
                id: 98,
                question: 'бушевать',
                answer: 'scatenarsi'
            }, {
                id: 99,
                question: 'таранить',
                answer: 'speronare'
            }, {
                id: 100,
                question: 'металлическая решетка на окно',
                answer: 'l\'inferriata'
            }, {
                id: 101,
                question: 'откидываться',
                answer: 'roveschiarsi'
            }, {
                id: 102,
                question: 'вязальный крючок',
                answer: 'l\'uncinetto'
            }, {
                id: 103,
                question: 'вязать на спицах',
                answer: 'sferruzzare'
            }, {
                id: 104,
                question: 'надоедать',
                answer: 'infastidire'
            }, {
                id: 104,
                question: 'манера',
                answer: 'il garbo'
            }, {
                id: 105,
                question: 'должность',
                answer: 'la carica'
            }, {
                id: 106,
                question: 'пугать',
                answer: 'spaventare'
            }, {
                id: 107,
                question: 'ловкость',
                answer: 'la destrezza'
            }, {
                id: 108,
                question: 'нежный',
                answer: 'blando'
            }, {
                id: 109,
                question: 'только',
                answer: 'soltanto'
            }, {
                id: 110,
                question: 'взломщик',
                answer: 'lo scassinatore'
            }, {
                id: 111,
                question: 'хитрый',
                answer: 'furbo'
            }, {
                id: 112,
                question: 'необычный',
                answer: 'insolito'
            }, {
                id: 113,
                question: 'валюта',
                answer: 'la divisa'
            }, {
                id: 114,
                question: 'разделять',
                answer: 'dividere'
            }, {
                id: 115,
                question: 'моделировать',
                answer: 'sagomare'
            }, {
                id: 116,
                question: 'контур',
                answer: 'la sagoma'
            // }, {
            //     id: ,
            //     question: '',
            //     answer: ''
            // }, {
            //     id: ,
            //     question: '',
            //     answer: ''

            // }, {
            //     id: ,
            //     question: '',
            //     answer: ''

            // }, {
            //     id: ,
            //     question: '',
            //     answer: ''
            // }, {
                //     id: ,
                //     question: '',
                //     answer: ''
                // }, {
                //     id: ,
                //     question: '',
                //     answer: ''
                // }, {
                //     id: ,
                //     question: '',
                //     answer: ''

                // }, {
                //     id: ,
                //     question: '',
                //     answer: ''

                // }, {
                //     id: ,
                //     question: '',
                //     answer: ''
                // }, {
                //     id: ,
                //     question: '',
                //     answer: ''
                // }, {
                //     id: ,
                //     question: '',
                //     answer: ''
                // }, {
                //     id: ,
                //     question: '',
                //     answer: ''

                // }, {
                //     id: ,
                //     question: '',
                //     answer: ''

                // }, {
                //     id: ,
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


