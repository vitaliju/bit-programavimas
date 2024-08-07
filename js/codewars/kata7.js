console.log(`\n 161 uzdv............`);

// https://www.codewars.com/kata/580a094553bd9ec5d800007d/train/javascript
function apple(x) {
    return Math.pow(x, 2) > 1000
        ? "It's hotter than the sun!!"
        : 'Help yourself to a honeycomb Yorkie for the glovebox.';
}
console.log(apple('50'), 'It\'s hotter than the sun!!');
console.log(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.');
console.log(`\n 162 uzdv...........`);

// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
const encryptThis = function (text) {
    if (text === '') {
        return '';
    } else {
        let str = text.split(' ');
        let encrypt = str.map(el => {
            let a = el.split('');
            a[0] = el.charCodeAt(0);
            [a[1], a[a.length - 1]] = [a[a.length - 1], a[1]];
            return a.join('')
        });
        return encrypt.join(' ');
    }
}
// kitas budas
/* const encryptThis = function(text) {
  let result = [];
  
  for (let i of text.split(' ')) {
    i = [...i];
    
    if (i.length <= 2) {
      i[0] = i[0].charCodeAt();
    }
    else {
      [i[0], i[1], i[i.length - 1]] = [i[0].charCodeAt(), i[i.length - 1], i[1]];
    } 
    
    result.push(i.join(''));
  }
  
  return result.join(' ');
} */
console.log(encryptThis("A"), "--> 65");
console.log(encryptThis("A wise old owl lived in an oak"), "--> 65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
console.log(encryptThis("The more he saw the less he spoke"), "--> 84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp");
console.log(encryptThis("The less he spoke the more he heard"), "--> 84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare");
console.log(encryptThis("Why can we not all be like that wise old bird"), "--> 87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri");
console.log(encryptThis("Thank you Piotr for all your help"), "--> 84kanh 121uo 80roti 102ro 97ll 121ruo 104ple");
console.log(`\n 163 uzdv..................`);