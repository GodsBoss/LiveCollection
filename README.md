Live Collection
===============

Overview
--------

The LiveCollection library is splitted into a core and a set of basic
extensions.

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

License
-------

See LICENSE.md.

