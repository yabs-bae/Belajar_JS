/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string "${this.name} sedang makan!"
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string "${this.name} sedang terbang!"
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */


// TODO
class Animal {
    constructor() {
        this.name = "Bayu Briyan Elroy";
        this.age = 22;
        this.isMammal = true;
    }
  }
  
  
  class Rabbit extends Animal{
    constructor(name,age){
      super();
      this.name = name;
      this.age = age;
    }
  
    eat(){
      return `${this.name} sedang makan!`;
    }
  
  }
  
  class Eagle extends Animal{
    constructor(name,age){
      super();
      this.isMammal = false;
      this.name = name;
      this.age = age;
    }
  
    fly(){
      return `${this.name} sedang terbang!`;
    }
  
    
  }
  
  const animal = new Animal();
  const rabbit = new Rabbit();
  const eagle = new Eagle();
  
  console.log(animal);
  console.log(rabbit);
  console.log(eagle);
  
  
  const myRabbit = new Rabbit("Labi",2);
  console.log(myRabbit);
  
  const myEagle = new Eagle("Elo",4);
  console.log(myEagle);
  
  /**
   * Hiraukan kode di bawah ini
   */
  
   module.exports = {
    Animal, Rabbit, Eagle, myRabbit, myEagle,
  };
  