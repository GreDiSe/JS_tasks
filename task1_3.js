class Speaker {
    constructor(name, verb = 'says') {
        this.name = name;
        this.verb = verb;
    }
    speak(text) {
        console.log(`${this.getName} ${this.getVerb} '${text}'`)
    }
    get getVerb(){
        return this.verb;
    }
    get getName(){
        return this.name;
    }
}
class Shouter extends Speaker{
    constructor(name){
        super(name, 'shouts')
    }
    speak(text) {
        super.speak(text.toUpperCase())
    }
}

new Shouter("Dr. Loudmouth").speak("hello there");