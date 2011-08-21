describe("Mutable collection", function(){

	describe("created without data", function(){

		it("is empty.", function(){
			var collection = new Collection.Mutable();
			expect(collection.isEmpty()).toBeTruthy();});

		it("has a length of zero.", function(){
			var collection = new Collection.Mutable();
			expect(collection.length()).toEqual(0);});});

	describe("created with an empty data set", function(){

		it("is empty.", function(){
			var collection = new Collection.Mutable([]);
			expect(collection.isEmpty()).toBeTruthy();});

		it("has a length of zero.", function(){
			var collection = new Collection.Mutable([]);
			expect(collection.length()).toEqual(0);});});

});

