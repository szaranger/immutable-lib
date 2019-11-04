# Immutable Array Helper

A JavaScript Library for immutable array helpers

## How to use

```js
import { copy } from "immutable-lib";

const a = [1, 2, 3];
const b = copy(a);

console.log(b); // [1, 2, 3]
```

## Functions

### copy()

Copies an array to a new variable.

```js
import { copy } from "immutable-lib";

const a = [1, 2, 3];
const b = copy(a);

console.log(b); // [1, 2, 3]
```

### del()

Creates a new array minus given array item.

```js
import { del } from "immutable-lib";

const a = [1, 2, 3];
const b = del(a, 1);

console.log(b); // [1, 3]
```

### pop()

Removes the last item from the array.

```js
import { del } from "immutable-lib";

const a = [1, 2, 3];
const b = pop(a);

console.log(b); // [1, 2]
```

### push()

Adds a new item at the end of an array.

```js
import { del } from "immutable-lib";

const a = [1, 2, 3];
const b = push(a, 4);

console.log(b); // [1, 2, 3, 4]
```
