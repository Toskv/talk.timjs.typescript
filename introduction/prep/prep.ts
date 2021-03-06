//  let const
let a = 1;

const b = 3;

// show case let in for
for (var i: number = 0; i < 100; i++) {
    let c = i;
    let b = i;  // this works.. ?
}

// types
// primitives
var myAwesomevar: string = 'wqwe';
var myAwesomeNumber: number = 1;
var myAwesomeBoolean: boolean = true;

// arrays
var myAwesomeArray: number[] = [1, 2, 3, 4, 5];
var myOtherAwesomeArray: Array<boolean> = [true, false];
var [x, y, ...rest] = myOtherAwesomeArray; // array destructuring

// enums
// simple
enum Languages {
    Javascript, Typescript, Java, CSharp
}

Languages.CSharp == Languages.Typescript;
var language = Languages[1]; // access as array

// different start point
enum Languages2 {
    Javascript = 1, Typescript
}

// other values
enum Languages3 {
    Javascript = 'AWesome' as any, Typescript = <any>'UberAwesome'
}

// any  start with this?
var anything: any = 1;
anything = 'abc';

// function, void
function doSomething(): void {
    console.time();
}

// function, return
function doSomethingAndReturn(): typeof Languages {
    return Languages;
}

doSomethingAndReturn().Java;

// parameters
function doSomethingWithThis(a: number): string {
    return a + '';
}

doSomethingWithThis(5).toUpperCase();

// interfaces
// inline
function anotherMethod(person: { name: string, age: number }): void {
    let {name, age} = person; // object destructuring
}

anotherMethod({ name: 'ion', age: 20 });

var f: (person: { name: string, age: number }) => void;
f = anotherMethod;

// interface 
interface Person {
    name: string;
    age: number;
    nationality?: string; // optional member
}

let person: Person = { name: 'ilie', age: 5, nationality: 'javascript' };
anotherMethod(person); // refactor the other methods to use this interface?

// Interface for function
interface Predicate {
    (person: Person): boolean;
}

let personIerator = function(predicate: Predicate): void {
    predicate({ name: 'Ion', age: 22 });
}

personIerator((p: Person) => p.age > 18);

// hybrid interface
interface Hybrid {
    (something: string): boolean;
    somethingElse?: string;
    anotherThing: boolean;
}

// classes

class Presenter {
    private theme: string;
    private name;
    constructor(name: string, theme: string) {
        this.theme = theme;
        this.name = name;
    }

    present() {
        console.log(this.title);
    }

    private get title(): string {
        return this.name + " is presenting " + this.theme;
    }


}


let presenter = new Presenter('Ilie', 'Typescript');
presenter.present();


`string text ${person.name} string text`





class ErrorKindA {
    errorMessage: string;
    getError(): string {
        return this.errorMessage;
    }
}

class ErrorKindB {
    information: string;
    getInformation(): string {
        return this.information;
    }
}

class Child {
    otherThing: string;
    getThing(): string {
        return this.otherThing;
    }
}
var y = new Child();
applyMixins(y, [ErrorKindA]);



applyMixins(Child, [ErrorKindA, ErrorKindB]);
var x = new Child();

////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    });
}