//? this function should accept number and return only number

function num(val: number): number {
  return 1;
}

//? if your function should not return anything

var fail = (err: number): void => {
  console.log(err);
};

//? never returns a value
var handleError = (err: string): never => {
  throw new Error(err);
};

//? return  object
var retobj = ({ name: string, roll: number }): {} => {
  return {};
};

var retobj1 = ({
  name: string,
  roll: number,
}): { name: string; class: string } => {
  return { name: "rhit", class: "c" };
};

//? type alliasis

type User = {
  readonly _id?: number; //optional and readonly can't change
  name: string;
  val: boolean;
};

var typeal = (user: User): User => {
  console.log(user.name);
  return { name: "", val: true };
};

typeal({ name: "", val: false });

//? arrays

const arr1: string[] = [];
const arr2: number[] = [];
const arr3: Array<number> = []; //same as second

type anotherType = {
  name: string;
};
const arr4: anotherType[] = [];

arr1.push("hello");
arr2.push(1);
arr4.push({ name: "" });

//array inside array

const arrin: number[][] = [[23, 23, 23], [2], [21]];

//?
