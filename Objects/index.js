const func = ((s) => {
  delete s;
  return s;
})(5);

console.log(func); // 5
// here delete will not impact the variable because it is used fo only objects.

//? how to dynamically add properties to objects

const property = "firstname";
const name = "Utkarsh";
const user = {
  [property]: name,
};
console.log(user); //{ firstname: 'Utkarsh' }

//? print key values
for (key in user) {
  console.log(key, ":", user[key]); //firstname : Utkarsh
}

//?  another problem

const a = {};
const b = { key: "a" };
const c = { key: "b" };
// so in this case we are trying to directly put b as an object to a
// so the output will be
// { a['[object Object]']: 123 }
// { b['[object Object]']: 456 }
a[b] = 123;
a[c] = 456;
console.log(a); // { '[object Object]': 456 }
console.log(a[b]); //456

//? stringify only some properties and ignore others

const emp = {
  name: "john",
  age: 21,
  height: 7.5,
};

console.log(JSON.stringify(emp, ["name", "height"])) //{"name":"john","height":7.5}

// normal and arrow function inside object

var radius = 20
const thisObj = {
  radius: 10,
  diameter() {
    return 2 * this.radius
  },
  arrDiameter : () => {
    return 2 * this.radius
  }
}

console.log(thisObj.diameter()) // 20
console.log(thisObj.arrDiameter()) //40 only in browser points to global scope
