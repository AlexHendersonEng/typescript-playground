/*
    Utility Types: Facilitates common type transformations.
*/

// 1. Partial<T> - Makes all properties of T optional
type User = { id: number; name: string; age: number };
type PartialUser = Partial<User>;
const partialUser: PartialUser = { name: "Alice" };
console.log(partialUser); // { name: 'Alice' }

// 2. Required<T> - Makes all properties of T required
type RequiredUser = Required<User>;
const requiredUser: RequiredUser = { id: 1, name: "Alice", age: 30 };
console.log(requiredUser); // { id: 1, name: 'Alice', age: 30 }

// 3. Readonly<T> - Makes all properties of T readonly
type ReadonlyUser = Readonly<User>;
const readonlyUser: ReadonlyUser = { id: 1, name: "Alice", age: 30 };
// readonlyUser.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property
console.log(readonlyUser); // { id: 1, name: 'Alice', age: 30 }

// 4. Record<K, T> - Creates an object type with keys K and values of type T
type UserRoles = Record<string, string>;
const userRoles: UserRoles = { admin: "Alice", editor: "Bob" };
console.log(userRoles['admin']); // Alice

// 5. Pick<T, K> - Picks only the specified keys from T
type UserNameAndAge = Pick<User, "name" | "age">;
const userNameAndAge: UserNameAndAge = { name: "Alice", age: 30 };
console.log(userNameAndAge['age']); // 30

// 6. Omit<T, K> - Omits the specified keys from T
type UserWithoutId = Omit<User, "id">;
const userWithoutId: UserWithoutId = { name: "Alice", age: 30 };
console.log(userWithoutId); // { name: 'Alice', age: 30 }

// 7. Exclude<T, U> - Removes types from T that are assignable to U
type Status = "active" | "inactive" | "banned";
type ActiveStatus = Exclude<Status, "banned">;
const activeUser: ActiveStatus = "active"; // Only "active" or "inactive" allowed
console.log(activeUser); // active

// 8. Extract<T, U> - Extracts types from T that are assignable to U
type OnlyBanned = Extract<Status, "banned">;
const bannedUser: OnlyBanned = "banned";
console.log(bannedUser); // banned

// 9. NonNullable<T> - Removes null and undefined from T
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>;
const definiteValue: DefiniteString = "Hello";
console.log(definiteValue); // Hello

// 10. ReturnType<T> - Gets the return type of a function
function getUser() {
  return { id: 1, name: "Alice" };
}
type UserReturnType = ReturnType<typeof getUser>;
const returnedUser: UserReturnType = { id: 1, name: "Alice" };
console.log(returnedUser); // { id: 1, name: 'Alice' }

// 11. InstanceType<T> - Gets the instance type of a class
class Person {
  constructor(public name: string, public age: number) {}
}
type PersonInstance = InstanceType<typeof Person>;
const person: PersonInstance = new Person("Alice", 30);
console.log(person); // Person { name: 'Alice', age: 30 }

// 12. Parameters<T> - Gets the parameters of a function as a tuple
type GetUserParams = Parameters<typeof getUser>; // []
const params: GetUserParams = [];
console.log(params); // []

// 13. ConstructorParameters<T> - Gets the constructor parameters of a class as a tuple
type PersonConstructorParams = ConstructorParameters<typeof Person>;
const constructorParams: PersonConstructorParams = ["Alice", 30];
console.log(constructorParams); // [ 'Alice', 30 ]

// 14. ThisType<T> - Used for defining 'this' context in object literals
type ObjectWithThis = { name: string } & ThisType<{ sayHello(): void }>;
const obj: ObjectWithThis = { name: "Alice" };
// obj.sayHello(); // Error: Property 'sayHello' does not exist on type
console.log(obj); // { name: 'Alice' }
