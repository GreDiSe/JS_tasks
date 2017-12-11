class MyMap {
    constructor(){
        this.array = [];
        this.size = 0;
    }
    set(key, value){
        this.array.push({[key]: value});
        //console.log(this.array)
        this.size++;
    }
    get(name){
        if(this.array[name]) return this.array[name].value;
    }
    delete(name){
        if(this.array[name]) {

        }
    }
    clear(){
        this.array.length = 0;
    }
}
const names = new MyMap
names.set(Array, "the array constructor")
names.set(Math, "the math object")
console.log(names.get(Array))
// → "the array constructor"
console.log(names.size)
// → 2
names.delete(Array)
console.log(names.get(Array))
// → undefined
names.clear()
console.log(names.get(Math))
// → undefined