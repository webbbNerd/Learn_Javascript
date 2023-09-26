//* runs for every element

const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// after
items.forEach((item) => {
  copyItems.push(item);
});

items.forEach((item, k) => {
  if (item == "item2") {
    items[k] = "item22";
  }
});

console.log(copyItems); // [ 'item1', 'item2', 'item3', 'item1', 'item2', 'item3' ]

console.log(items); // [ 'item1', 'item22', 'item3' ]
