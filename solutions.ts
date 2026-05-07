type StringOrNumber = string | number;

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 === 0);
}

function reverseString(value: string): string {
  return value.split("").reverse().join("");
}

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

function getIntersection(array1: number[], array2: number[]): number[] {
  const result: number[] = [];

  for (const item1 of array1) {
    for (const item2 of array2) {
      if (item1 === item2) {
        let exists = false;

        for (const value of result) {
          if (value === item1) {
            exists = true;
            break;
          }
        }

        if (!exists) {
          result.push(item1);
        }
      }
    }
  }

  return result;
}
