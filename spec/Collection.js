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

});

