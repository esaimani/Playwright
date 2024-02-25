import { log } from "console";

class Animal {
    health: number;
    hunger: boolean;
    coordix: number;
    coordiny: number;

    eat() {
        console.log('I am eating');
    };
    sleep() {
        console.log('I am sleeping');
    };
    makeNoise() {
        console.log('Make Noise.');
    }
}

class Dog extends Animal {
    eat(): void {
        console.log('Dog is eating Biscuit');

    }
    makeNoise(): void {
        console.log('Park');

    }
}

const dog = new Dog();
dog.health = 50;
dog.makeNoise();
dog.eat();
dog.sleep();