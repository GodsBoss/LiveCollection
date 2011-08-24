describe('Standard mutator extensions', function(){

	var emptyCollection;
	var collectionWithValues;

	var values = [-2, 5, 3, 0, 9];

	function copy(array){
		return array.slice();}

	beforeEach(function(){
		emptyCollection = new LiveCollection.MutableCollection([]);
		collectionWithValues = new LiveCollection.MutableCollection(copy(values));});

	describe('Push', function(){

		it('adds an item to the end of the collection.', function(){
			var expectedValues = copy(values);
			expectedValues.push(6);
			collectionWithValues.push(6);

			expect(collectionWithValues.values()).toEqual(expectedValues);});

		it('returns the number of items within the collection after adding the item.', function(){
			expect(collectionWithValues.push(6)).toEqual(values.length + 1);});});

	describe('Unshift', function(){

		it('adds an item to the beginning of the collection.', function(){
			var expectedValues = copy(values);
			expectedValues.unshift(9);
			collectionWithValues.unshift(9);

			expect(collectionWithValues.values()).toEqual(expectedValues);});

		it('returns the number of items within the collection after adding the item.', function(){
			expect(collectionWithValues.unshift(8)).toEqual(values.length +1);});});

	describe('Pop', function(){

		it('removes the item from the end of the collection.', function(){
			var expectedValues = copy(values);
			expectedValues.pop();
			collectionWithValues.pop();
			expect(collectionWithValues.values()).toEqual(expectedValues);});

		it('returns the removed element.', function(){
			expect(collectionWithValues.pop()).toEqual(values[values.length-1]);});

		it('returns undefined for an empty collection.', function(){
			expect(emptyCollection.pop()).toBeUndefined();});});

	describe('Shift', function(){

		it('removes the first item of the collection.', function(){
			var expectedValues = copy(values);
			expectedValues.shift();
			collectionWithValues.shift();

			expect(collectionWithValues.values()).toEqual(expectedValues);});

		it('returns the removed element.', function(){
			expect(collectionWithValues.shift()).toEqual(values[0]);});

		it('returns undefined for an empty collection.', function(){
			expect(emptyCollection.shift()).toBeUndefined();});});

	describe('Set', function(){

		it('sets an item.', function(){
			var expectedValues = copy(values);
			expectedValues[2] = 17;
			collectionWithValues.set(2, 17);
			expect(collectionWithValues.values()).toEqual(expectedValues);});

		it('returns the new value.', function(){
			expect(collectionWithValues.set(1, -25)).toEqual(-25);});

		it('throws an error if the index is too low.', function(){
			function setIndexWhichIsTooLow(){
				collectionWithValues.set(-1, 8);}

			expect(setIndexWhichIsTooLow).toThrow('Index too low.');});

		it('throws an error if the index is too high.', function(){
			function setIndexWhichIsTooHigh(){
				collectionWithValues.set(values.length, -3);}

			expect(setIndexWhichIsTooHigh).toThrow('Index too high.');});});

	describe('insertBefore', function(){

		it('inserts an item before another item.', function(){
			var collection = new LiveCollection.MutableCollection([1, 5, -2, 3]);
			collection.insertBefore(2, 6);
			expect(collection.values()).toEqual([1, 5, 6, -2, 3]);});

		it('inserts an item at the end if the position is greater than the index of the last element.', function(){
			var collection = new LiveCollection.MutableCollection([-4, 3, 0, 2]);
			collection.insertBefore(20, 5);
			expect(collection.values()).toEqual([-4, 3, 0, 2, 5]);});

		it('inserts an item at the beginning if the position is smaller than 0.', function(){
			var collection = new LiveCollection.MutableCollection([3, 0, 5]);
			collection.insertBefore(-3, 1);
			expect(collection.values()).toEqual([1, 3, 0, 5]);});});

	describe('insertAfter', function(){

		it('inserts an item after another item.', function(){
			var collection = new LiveCollection.MutableCollection([3, 0, 6, 1]);
			collection.insertAfter(1, -8);
			expect(collection.values()).toEqual([3, 0, -8, 6, 1]);});

		it('inserts an item at the end if the position is greater than the index of the last element.', function(){
			var collection = new LiveCollection.MutableCollection([4, 0, 9]);
			collection.insertAfter(6, 3);
			expect(collection.values()).toEqual([4, 0, 9, 3]);});

		it('inserts an item at the beginning if the position is smaller than 0.', function(){
			var collection = new LiveCollection.MutableCollection([8, 5, 2]);
			collection.insertAfter(-2, 1);
			expect(collection.values()).toEqual([1, 8, 5, 2]);});});

	describe('Remove', function(){

		it('removes an item.', function(){
			var collection = new LiveCollection.MutableCollection([1, 0, 5, -2]);
			collection.remove(2);
			expect(collection.values()).toEqual([1, 0, -2]);});

		it('throws an error if the index is lower than zero.', function(){
			var collection = new LiveCollection.MutableCollection([7, 5, 3]);

			function removeItemWithAnIndexLowerZero(){
				collection.remove(-2);}

			expect(removeItemWithAnIndexLowerZero).toThrow('Index too low.');});

		it('throws an error if the index is higher than the index of the last element.', function(){
			var collection = new LiveCollection.MutableCollection([0, -5, 2]);

			function removeItemWithAnIndexTooHigh(){
				collection.remove(3);}

			expect(removeItemWithAnIndexTooHigh).toThrow('Index too high.');});});

	describe('Clear', function(){

		it('clears the collection from all elements.', function(){
			collectionWithValues.clear();
			expect(collectionWithValues.values()).toEqual([]);});});});

describe('Standard method extensions', function(){

	describe('Length', function(){

		it('returns the number of items in the collection.', function(){
			var values = [1, -2, 15, 0, 3, -4, 8];
			var collection = new LiveCollection.MutableCollection(values);
			expect(collection.length()).toEqual(values.length);});});});

describe('Standard transformer extensions', function(){

	describe('Head', function(){

		it('takes a number of items from the beginning of the collection.', function(){
			var values = [4, 0, 3, -2, 5, 1, -9];
			var collection = new LiveCollection.MutableCollection(values);
			expect(collection.head(3).values()).toEqual(values.slice(0, 3));});

		it('returns all items if the number to be taken is greater than the number of elements.', function(){
			var values = [5, -2, 1];
			var collection = new LiveCollection.MutableCollection(values);
			expect(collection.head(7).values()).toEqual(values);});});

	describe('Tail', function(){

		it('takes a number of items from the end of the collection.', function(){
			var values = [8, 5, -3, 9, 2, 0];
			var collection = new LiveCollection.MutableCollection(values);
			expect(collection.tail(4).values()).toEqual([-3, 9, 2, 0]);});

		it('returns all items if the number to be taken is greater than the number of elements.', function(){
			var values = [0, 2, 6];
			var collection = new LiveCollection.MutableCollection(values);
			expect(collection.tail(6).values()).toEqual(values);});});});

