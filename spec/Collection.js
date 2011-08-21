describe("Mutable collection", function(){

	describe("containing no data", function(){

		it("is empty.", function(){
			var collection = new Collection.Mutable();
			expect(collection.isEmpty()).toBeTruthy();});

		it("has a length of zero.", function(){
			var collection = new Collection.Mutable();
			expect(collection.length()).toEqual(0);});});

	describe("containing an empty data set", function(){

		it("is empty.", function(){
			var collection = new Collection.Mutable([]);
			expect(collection.isEmpty()).toBeTruthy();});

		it("has a length of zero.", function(){
			var collection = new Collection.Mutable([]);
			expect(collection.length()).toEqual(0);});});

	describe("containing a one-item data set", function(){

		it("is not empty.", function(){
			var collection = new Collection.Mutable([5]);
			expect(collection.isEmpty()).toBeFalsy();});

		it("has a length of one.", function(){
			var collection = new Collection.Mutable([5]);
			expect(collection.length()).toEqual(1);});

		it("can return that item.", function(){
			var collection = new Collection.Mutable([5]);
			expect(collection.item(0)).toEqual(5);});});

	describe("containing a few data items", function(){

		it("returns an item corresponding to its index.", function(){
			var collection = new Collection.Mutable([3, 7, -2]);
			expect(collection.item(0)).toEqual(3);
			expect(collection.item(1)).toEqual(7);
			expect(collection.item(2)).toEqual(-2);});});
});

