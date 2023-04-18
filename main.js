const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['use', 'it', 'by', 'yourself']
let indexLetter = -5;
let indexText = 0;

const addLetter = () => {
    if (indexLetter >= 0) {
        spnText.textContent += txt[indexText][indexLetter];
    }
    indexLetter++;
    if (indexLetter == txt[indexText].length) {
        indexText++;
        if (indexText == txt.length) return
        indexLetter = 0;
        return setTimeout(() => {
            spnText.textContent = '';
            indexLetter = -5;
            addLetter();
        }, 1000)
    }

    setTimeout(addLetter, 100);
}


addLetter(); 


const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);