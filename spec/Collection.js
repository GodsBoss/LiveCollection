describe("Mutable collection", function(){

	describe("containing no data", function(){

		it("is empty.", function(){
			var collection = Collection.createMutable();
			expect(collection.isEmpty()).toBeTruthy();});

		it("has a length of zero.", function(){
			var collection = Collection.createMutable();
			expect(collection.length()).toEqual(0);});});

	describe("containing an empty data set", function(){

		it("is empty.", function(){
			var collection = Collection.createMutable([]);
			expect(collection.isEmpty()).toBeTruthy();});

		it("has a length of zero.", function(){
			var collection = Collection.createMutable([]);
			expect(collection.length()).toEqual(0);});});

	describe("containing a one-item data set", function(){

		it("is not empty.", function(){
			var collection = Collection.createMutable([5]);
			expect(collection.isEmpty()).toBeFalsy();});

		it("has a length of one.", function(){
			var collection = Collection.createMutable([5]);
			expect(collection.length()).toEqual(1);});

		it("can return that item.", function(){
			var collection = Collection.createMutable([5]);
			expect(collection.item(0)).toEqual(5);});});

	describe("containing a few data items", function(){

		it("returns an item corresponding to its index.", function(){
			var collection = Collection.createMutable([3, 7, -2]);
			expect(collection.item(0)).toEqual(3);
			expect(collection.item(1)).toEqual(7);
			expect(collection.item(2)).toEqual(-2);});});

	describe("can be manipulated", function(){

		it("appends items.", function(){
			var collection = Collection.createMutable();
			collection.append(5);
			expect(collection.isEmpty()).toBeFalsy();
			expect(collection.length()).toEqual(1);
			expect(collection.item(0)).toEqual(5);});

		it("appends items at the end.", function(){
			var collection = Collection.createMutable([2, 3]);
			collection.append(5);
			expect(collection.item(2)).toEqual(5);});

		it("does not manipulate the underlying data set.", function(){
			var data = [1, 2];
			var collection = Collection.createMutable(data);
			collection.append(3);
			expect(data.length).toEqual(2);});

		it("prepends items.", function(){
			var collection = Collection.createMutable([2, 4]);
			collection.prepend(6);
			expect(collection.length()).toEqual(3);
			expect(collection.item(0)).toEqual(6);
			expect(collection.item(1)).toEqual(2);});

		it("sets items.", function(){
			var collection = Collection.createMutable([1, 3, 5]);
			collection.set(1, 4);
			expect(collection.item(1)).toEqual(4);});

});
});

