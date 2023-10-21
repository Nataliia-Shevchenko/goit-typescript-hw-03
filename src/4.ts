class Key {
  constructor(private signature: number) {}
  getSignature(): number {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  public tenants: object[] = [];

  constructor(key: Key) {}

  public comeIn(person: Person): void {
    if (this.door) {
      console.log("Please come in");
      this.tenants.push(person);
    }
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  public openDoor(keyForDoor: Key): void {
    if (key === keyForDoor) {
      this.door = true;
      console.log("Door is open");
    } else {
      console.log("Wrong key");
    }
  }
}

const key = new Key(Date.now());

const house = new MyHouse(key);

const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
