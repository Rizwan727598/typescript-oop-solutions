# How Generics Help Create Reusable Code in TypeScript

## Introduction

When I first started learning TypeScript, I noticed that many functions looked almost the same. The only difference was the data type.

For example, one function worked with strings and another worked with numbers. Writing separate functions again and again felt unnecessary.

This is where Generics become very useful. Generics help us write reusable functions while keeping proper type safety.

---

## Problem Without Generics

Example without Generics:

```ts
function createStringArray(value: string): string[] {
  return [value];
}

function createNumberArray(value: number): number[] {
  return [value];
}
```

Both functions are doing almost the same thing. Only the type is different.

---

## Solving With Generics

Using Generics, we can write one reusable function.

Example:

```ts
function createArray<T>(value: T): T[] {
  return [value];
}
```

Now this single function can work with different types.

```ts
const stringArray = createArray<string>("Helloo");

const numberArray = createArray<number>(100);

const objectArray = createArray<{ name: string }>({
  name: "Rizz",
});
```

TypeScript still understands the correct type automatically.

---

## Why Generics Are Useful

### Reusable Code

One function can handle multiple types of data.

### Type Safety

Even though the function is reusable, TypeScript still checks types properly.

### Cleaner Project Structure

Less duplicate code makes projects easier to maintain.

### Better for Large Projects

Generics are heavily used in real-world applications because they make code flexible and scalable.

---

## Another Example

Generics can also work with multiple values.

```ts
function createTuple<X, Y>(value1: X, value2: Y): [X, Y] {
  return [value1, value2];
}

const result = createTuple<string, number>("Age", 20);
```

Output:

```ts
["Age", 20];
```

This makes functions more dynamic.

---

## Conclusion

Generics are one of the most important features in TypeScript. They help developers write reusable and flexible code without losing type safety.

Instead of creating many similar functions for different data types, we can create one generic solution that works everywhere. This keeps the code cleaner and reduces repetition.
