Live Collection
===============

Overview
--------

The LiveCollection library is splitted into a core and a set of basic
extensions.

Dependencies
------------

Requires ES5 `Array` methods like `map`, `filter`, etc. Poly fills will do.

Creating mutable live collections
---------------------------------

To create mutable live collections, use `LiveCollection.MutableCollection` as
a constructor like this:

    // data is an Array, containing some data.
    var collection = new LiveCollection.MutableCollection(data);

The only core method of a mutable collection is `values()`, which returns an
Array containing the same items as the wrapped Array:

    // data[0] == values[0], data[1] == values[1], and so on.
    var values = collection.values();

Extending collections with methods
----------------------------------

### `LiveCollection.addMethod(name, method)`

Adds a method to collections. A method is called with the context of the
collection, so `this.values()` returns the values wrapped by the collection.

### `LiveCollection.addMutator(name, mutate)`

Adds a mutator to the mutable collection (but not the readonly collections).

### `LiveCollection.addTransformer(name, transform)`

Adds a transformer to both mutable and readonly collections. A transformer is
a function which is used to create the values of a readonly collection.

Standard extensions
-------------------

### Mutators

#### `pop()`

Removes the last item of the collection and returns it. If no such item
exists, `undefined` is returned.

#### `shift()`

Removes the first item of the collection and returns it. If no such item
exists, `undefined` is returned.

#### `push(item)`

Adds `item` at the end of the collection and returns the number of items in
the collection.

#### `unshift(item)`

Adds `item` to the beginning of the collection and returns the number of items
in the collection.

#### `set(index, value)`

Sets the value of the `index`th item of the collection to the value `value`.
Throws an error, if `index` is below zero or is greater than the index of the
last item.

#### `remove(index)`

Removes the item with the index `index`. All subsequent items are moved to an
index which is one lower than the index they had before.

#### `clear()`

Removes all items from the collection.

#### `insertBefore(index, item)`

Inserts `item` before the element with the index `index`. If `index` is too
low, `item` is added before all other elements, if it is too high, `item` is
added after all other elements.

#### `insertAfter(index, item)`

Inserts `item` after the element with the index `index`. If `index` is too
low, `item` is added before all other elements, if it is too high, `item` is
added after all other elements.

### Methods

#### `length()`

Returns the number of items within the collection.

### Transformers

#### `head(n)`

Returns the first `n` items of the collection or all, if `n` is greater than
the number of items.

#### `tail(n)`

Returns the last `n` items of the collection or all, if `n` is greater than
the number of items.

#### `map(f)`

Returns a collection where all items `item` are replaced by `f(item)`.

#### `filter(f)`

Returns a collection containing only the items `item` where `f(item)` is
trutyh.

#### `sort(f)`

Returns the collection sorted by `f`.

License
-------

See LICENSE.md.

