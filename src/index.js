const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = []
    for(let  i = 0; i< expr.length; i+=10){
        arr.push(expr.slice(i, i+10))
    }
    for(let i = 0; i< arr.length; i++){
        let newEl = []
        for(let j = 0; j<arr[i].length; j+=2){
            newEl.push(arr[i].slice(j, j+2))
        }
        arr[i] = newEl
        arr[i] = arr[i].reduce((acc, el)=>{
            if(el === '00'){
                return acc+=''
            }else if(el ==='10'){
                return acc+='.'
            }else if(el ==='11'){
                return acc+='-'
            }else if(el ==='**'){
                return acc+='*'
            }
        }, '')
        for(let j=0; j<Object.entries(MORSE_TABLE).length; j++){
            if(Object.entries(MORSE_TABLE)[j][0] === arr[i]){
                arr[i] = Object.entries(MORSE_TABLE)[j][1]
            }
        }
        if(arr[i]==="*****"){
            arr[i] = ' '
        }
    }

    return arr.join('')
}

module.exports = {
    decode
}