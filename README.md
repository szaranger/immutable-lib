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
import { push } from "immutable-lib";

const a = [1, 2, 3];
const b = push(a, 4);

console.log(b); // [1, 2, 3, 4]
```

### reverse()

Reverses the order of an array.

```js
import { reverse } from "immutable-lib";

const a = [1, 2, 3];
const b = reverse(a);

console.log(b); // [3, 2, 1]
```

### shift()

Removes an item from the beginning of an array.

```js
import { shift } from "immutable-lib";

const a = [1, 2, 3];
const b = shift(a);

console.log(b); // [2, 3]
```

### sort()

Sorts an array.

```js
import { sort } from "immutable-lib";

const a = [1, 2, 3];
const b = sort(a, (x, y) => y - x);

console.log(b); // [3, 2, 1]
```

### splice()

Modifies the contents of an array.

```js
import { splice } from "immutable-lib";

const a = [1, 2, 3];
const b = splice(a, 2, 2, [7, 8]);

console.log(b); // [1, 2, [7, 8], 5, 6]
```

### unshift()

Adds an item from the beginning of an array.

```js
import { unshift } from "immutable-lib";

const a = [1, 2, 3];
const b = unshift(a, 4);

console.log(b); // [4, 1, 2, 3]
```
