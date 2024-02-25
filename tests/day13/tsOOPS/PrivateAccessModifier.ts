import { log } from "console";

class Player {
    private name: string;
    private age: number;
    private isHeActive: boolean;

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        if (age < 0) {
            console.log('You cant set the age when its less than zero');
            return;
        }
        else
            this.age = age;
    }

    public isIsHeActive(): boolean {
        return this.isHeActive;
    }

    public setIsHeActive(isHeActive: boolean): void {
        this.isHeActive = isHeActive;
    }

}

const player = new Player();
player.setAge(-5);
player.setName('Esaimani');
player.setIsHeActive(true);

console.log(player.getAge());
console.log(player.getName());
console.log(player.isIsHeActive());





