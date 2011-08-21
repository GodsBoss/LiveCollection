describe("Live collection", function(){

	it("can be instantiated directly.", function(){
		var collection = new LiveCollection.MutableCollection([]);});

	it("contains the values within the data set.", function(){
		var data = [1, -2, 5];
		var collection = new LiveCollection.MutableCollection(data);
		expect(collection.values()).toEqual(data);});

	it("gives a separate data set when retrieving the values.", function(){
		var data = [1, 4, -2];
		var collection = new LiveCollection.MutableCollection(data);
		var values1 = collection.values();
		var values2 = collection.values();
		values1.push(3);
		expect(values1).not.toEqual(values2);
		expect(values1).not.toEqual(data);});

	it("can be extended with methods.", function(){

		function length(){
			return this.values().length;}

		LiveCollection.addMethod('length', length);

		var data = [5, 0, -2, 3];
		var collection = new LiveCollection.MutableCollection(data);
		expect(collection.length()).toEqual(data.length);});

	it("can be extended with methods with arguments.", function(){

		function get(index){
			return this.values()[index];}

		LiveCollection.addMethod('get', get);

		var data = [2, 3, -1, 8];
		var collection = new LiveCollection.MutableCollection(data);
		expect(collection.get(2)).toEqual(-1);});});

