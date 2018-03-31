const locales = [
    /* 
     * Translators, edit this bit! Do not touch any of the JS code underneath!
     */
    {
        name: 'English',
        id: 'en',
        strings: {
            chickens: 'chickens',
            money: '$',
            chickenBtn: 'Hatch (click)',
            resetBtn: '[reset game]',
            statusBar: '${money} (${income}/second) - {chickens} chickens'
        }
    }
]

class LocaleManager {
    constructor() {
        this.current = 'en' // English, default
        this.update();
    }
    setLocale(loc) {
        this.current = loc
        this.update();
    }
    getById(id) {
        let heck = locales.filter(i => {return i.id == id})
        return heck[0]
    }
    unique(array) { // util
        var prev;
        return array.sort().filter(e => e !== prev && (prev = e));
    }
    update() {
        let arr = Array.prototype.slice.call(document.querySelectorAll('*')); // turn NodeList into array
        let classes = arr.map(i => i.className.split(' ')).filter(i => i[0] != '' && i[0].startsWith('_')).map(i => i[0]); // why
        let currLocale = this.getById(this.current);
        if (!currLocale) {
            alert('Oops, something bad has happened while switching locales. Please report this to the developer.');
        }
        classes.forEach(i => {
            $(`.${i}`).html(currLocale.strings[i.slice(1)])
        })
    }
}

const localeman = new LocaleManager();

const _ = (textid) => {
    return localeman.getById(localeman.current).strings[textid]
}