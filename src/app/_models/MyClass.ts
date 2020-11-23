import { Bonus } from "./Bonus"

class MyClass implements Bonus{
    private mVariable: number = 0
    public bonusSalary: number = 100
    constructor(param1: number,param2:number){
        this.mVariable = param1 + param2
    }

    doSomething(bonus:Bonus): void{
        console.log(bonus.bonusSalary)
    }

    printBonus(bonus: Bonus):void{
        console.log(bonus.bonusSalary)
    }
}