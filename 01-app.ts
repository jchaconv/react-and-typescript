let userName: string;

const API_KEY = 'xsadoj3t17uifnadsipfnipn1410412365100';

userName = 'Julio';

let userAge: number = 29;

let isValid = false;

// string, number, boolean

// accepts multiple types
let userID: string | number = 'xa55604';
userID = 1256;


// set user as an object
let user: {
    name: string,
    age: number,
    isAdmin: boolean,
    id: string | number;
};


user = {
    name: 'Julio',
    age: 29,
    isAdmin: true,
    id: 'XA55604'
}


// array

let hobbies: Array<string>;
let hobbies2: number[];

hobbies = ['Dota2', 'Watching a movie', 'Reading']
hobbies2 = [2, 5, 99];

let usersData: {name: string; age: number}[];
usersData = [
    {
        name: 'Julio',
        age: 29
    },
    {
        name: 'Rut',
        age: 32
    }
]



// functions

// use void for functions without return

function add(a: number, b: number): void {
    const result = a + b;
    console.log(result);
}

function add1(a: number, b: number): number {
    const result = a + b;
    console.log(result);
    return a * 82;
}

// se puede omitir el tipo de retorno y typescript lo infiere.
function add2(a: number, b: number) {
    const result = a + b;
    console.log(result);
    return a * 82;
}

// Cuando una función recibe otra función callable, se necesita especificar así:
// en este caso dos valores de entrada number y el retorno number también
function calculate(
    a: number,
    b: number,
    calcFn: (a: number, b: number) => number) {

        calcFn(a, b);

}

// y se puede invocar de esta manera:
calculate(5, 8, add1);


// para no declarar el tipo de valor tan grande podemos usar Types

type AddFn = (a: number, b: number) => number; 

function calculate2(
    a: number,
    b: number,
    calcFn: AddFn) {

        calcFn(a, b);

}


// también con objetos

type User = {
    name: string,
    age: number,
    isAdmin: boolean,
    id: string | number;
}; 

let user1: User;

user1 = {
    name: 'Julio',
    age: 29,
    isAdmin: true,
    id: 'XA55604'
}


// otra opción es interface
// uso más común es para creación de objetos
// se puede usar en funciones pero no es lo mejor
// la diferencia con type es lo ya mencionado y cómo se crea
// directamente como si fuera un objeto
// otra diferencia es que interface es limitado para los objetos más convencionales
// por otro lado type puede definir union tpyes.

interface Credentials {
    userName: string;
    password: string;
}

let creds: Credentials;

creds = {
    userName: 'jchaconv',
    password: 'xxa15ygadsda88'
};


class AuthCredentials implements Credentials {

    userName: string;
    password: string;
    email: string; // se puede añadir más props

}

function login(credentials: Credentials) {



}

login(new AuthCredentials()); // se puede hacer esto ya que la clase está implementando la interfaz



type Admin = {
    permissions: string[];
}

type AppUser = {
    userName: string;
}

type AppAdmin = Admin & AppUser; //para hacer merge de los dos objetos

let admin: AppAdmin;

admin = {
    permissions: ['login', 'global-position', 'webcomponents'],
    userName: 'Julio Chacon Vilela'
}


//también se puede hacer merge con Interface pero es con
//extends de ambas interfaces

interface Admin2 {
    permissions: string[];
}

interface AppUser2 {
    userName: string;
}

interface AdminApp extends Admin2, AppUser2 {}

let admin2: AdminApp;

admin2 = {
    permissions: ['login', 'global-position', 'webcomponents'],
    userName: 'Julio Chacon Vilela'
}


//para especificar que pueda ser uno de esos valores. (Union types)
let role1: 'admin' | 'user' | 'editor'; // 'admin', 'user', 'editor'


type Role = 'admin' | 'user' | 'editor';

let role: Role;

function performAction(action: string, role: Role) {
    
    if(role === 'admin' && typeof action === 'string') {
        //...
    }
}



//Generic Types

//se declara así para usarlo de manera flexible
type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void;
}

const textStorage: DataStorage<string> = {
    storage: [],
    add(data) {
        this.storage.push(data);
    }
}

const userStorage: DataStorage<User> = {
    storage: [],
    add(user) {}
}


function merge<T, U>(a: T, b: U)  {
    return {
        ...a,
        ...b
    };
}

const newUser = merge<{name: string}, {age: number}>(
    { name: 'Julio'},
    { age: 29}
);

 //otra manera
const newUser1 = merge(
    { name: 'Julio'},
    { age: 29}
);














