const a = ["a", "b", "c"];

console.log(a.entries())
// Object [Array Iterator] {}

console.log(a.entries().next().value)
// [ 0, 'a' ]

for (const element of a.entries()) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'
