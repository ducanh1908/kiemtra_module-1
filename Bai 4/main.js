class Animal{
    name;
    weight;
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    setName(name) {
        this.name = name;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    getName() {
        return this.name
    }
    getWeight() {
        return this.weight
    }
    toString() {
        return `${this.name} ${this.weight}`
    }
}
let objAnimal1  = new Animal();
objAnimal1.setName('Elephant');
objAnimal1.getName();
objAnimal1.setWeight(45,6);
objAnimal1.getWeight();

console.log(objAnimal1);
console.log(objAnimal1.toString());
let objAnimal2 =  new Animal();
objAnimal2.setName('Mouse');
console.log(objAnimal2)


