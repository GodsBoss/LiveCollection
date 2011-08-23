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

			expect(setIndexWhichIsTooHigh).toThrow('Index too high.');});});});

describe('Standard method extensions', function(){

	describe('Length', function(){

		it('returns the number of items in the collection.', function(){
			var values = [1, -2, 15, 0, 3, -4, 8];
			var collection = new LiveCollection.MutableCollection(values);
			expect(collection.length()).toEqual(values.length);});

	});
});

