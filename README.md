Live Collection
===============

Overview
--------

The LiveCollection library is splitted into a core and a set of basic extensions.

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

License
-------

See LICENSE.md.

