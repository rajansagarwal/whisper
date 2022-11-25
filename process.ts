let keywords = '{{ final }}';
let content = '{{ out }}';
let cont = '{{ array }}';
let aa = cont.split('&#39;');
let words = [];
let labels = [];;
let bruv = '{{ data }}'

function removeItem(array, item) {
    var i = array.length;
    while (i--)
        if (array[i] === item) {
            array.splice(array.indexOf(item), 1);
        }
}
removeItem(aa, '[{');
removeItem(aa, ': ');
removeItem(aa, ', ');
removeItem(aa, '}, {');
removeItem(aa, 'text');
removeItem(aa, 'label');
removeItem(aa, 's&#34;}, {');
removeItem(aa, '{');
for (let i = 0; i < aa.length; i++) {
    if (i % 2 == 0) {
        labels.push(aa[i]);
    } else {
        words.push(aa[i]);
    }
}
console.log(words)
document.getElementById('text-input').innerHTML = transformContent(content, words, labels);

function transformContent(content, keywords) {
    let temp = content;
    console.log(cont);
    for (i = 0; i < keywords.length; i++) {
        temp = temp.replace(new RegExp(keywords[i], 'ig'), wrapKeywordWithHTML(keywords[i], labels[i]));
    }
    return temp;
}

function wrapKeywordWithHTML(keyword, label) {
    let colors = {
        'PERSON': 'red',
        'ORG': 'lightblue',
        'GPE': 'pink',
        'LOC': 'yellow',
        'NORP': 'purple',
        'FAC': 'orange',
        'PRODUCT': 'green',
        'EVENT': 'brown',
        'WORK_OF_ART': 'grey',
        'LAW': 'black',
        'LANGUAGE': 'white',
        'DATE': 'cyan',
        'TIME': 'magenta',
        'PERCENT': 'lime',
        'MONEY': 'maroon',
        'QUANTITY': 'olive',
        'ORDINAL': 'lightgreen',
        'CARDINAL': 'teal',
        '': 'black'
    };
