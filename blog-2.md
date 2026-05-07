# Pick and Omit Utility Types in TypeScript

## Introduction

While learning TypeScript, one thing I noticed is that sometimes we repeat the same properties again and again in different interfaces. It works, but after some time the code becomes messy and harder to maintain.

TypeScript gives us utility types like `Pick` and `Omit` to solve this problem in a cleaner way. These utility types help us create smaller versions of a main interface without rewriting everything manually.

Because of this, our code stays DRY which means “Don’t Repeat Yourself”.

---

## Using Pick

`Pick` is used when we only want some specific properties from an interface.

Example:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UserInfo = Pick<User, "id" | "name" | "email">;
```

Now `UserInfo` will only contain:

```ts
{
  id: number;
  name: string;
  email: string;
}
```

Here we did not create another full interface manually. We just picked the properties we needed.

---

## Using Omit

`Omit` does the opposite. It removes properties from an existing interface.

Example:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Omit<User, "password">;
```

Now the `password` property will not exist inside `PublicUser`.

This is useful when sending user data to frontend because we usually should not expose passwords.

---

## Why These Are Helpful

Without `Pick` and `Omit`, we would need to create many similar interfaces manually.

For example:

```ts
interface UserProfile {
  id: number;
  name: string;
  email: string;
}
```

This creates duplicate code. Later if we change the original interface, we may also need to update many other interfaces manually.

Using utility types reduces this problem and keeps the code cleaner.

---

## Conclusion

`Pick` and `Omit` are very useful utility types in TypeScript. They help reduce duplicate code and make interfaces easier to manage.

In real projects, these utility types save time and make code more maintainable. Instead of rewriting the same properties repeatedly, we can simply reuse the existing interface in a smarter way..
