# AU Postcode

Get the corresponding Australian state by postcode

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
