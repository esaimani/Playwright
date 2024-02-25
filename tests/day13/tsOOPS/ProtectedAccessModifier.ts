import { log } from "console";

class Player {
    protected name: string;
    protected age: number;
    protected isHeActive: boolean;

    displayDetails() {
        console.log('Player class called');

    }

}

class ProtectedPlayer extends Player {
    setPlayerDetails(age: number, name: string, isHeActive: boolean) {
        this.age = age;
        this.name = name;
        this.isHeActive = isHeActive;

        console.log(this.age, this.name, this.isHeActive);

    }

    displayDetails(): void {
        console.log('Protected Player class called');

    }


}

const player = new ProtectedPlayer();
player.setPlayerDetails(35, 'Esaimani', true);
player.displayDetails();