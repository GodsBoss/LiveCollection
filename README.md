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

License
-------

See LICENSE.md.

