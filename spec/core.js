describe("Live collection", function(){

	it("can be instantiated directly.", function(){
		var collection = new LiveCollection.MutableCollection([]);});

	it("containts the values within the data set.", function(){
		var data = [1, -2, 5];
		var collection = new LiveCollection.MutableCollection(data);
		expect(collection.values()).toEqual(data);});});

