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
		var functionWasCalled = false;

		function call(){
			functionWasCalled = true;}

		LiveCollection.addMethod('call', call);

		var collection = new LiveCollection.MutableCollection([]);
		collection.call();
		expect(functionWasCalled).toBeTruthy();});

	it("can be extended with methods with arguments.", function(){
		var argumentsToBeStored = [1, 5, 3];
		var storedArguments;

		function storeArguments(){
			storedArguments=arguments;}

		LiveCollection.addMethod('storeArguments', storeArguments);

		var collection = new LiveCollection.MutableCollection([]);
		collection.storeArguments.apply(collection, argumentsToBeStored);
		expect(storedArguments).toEqual(argumentsToBeStored);});

	it("returns the value the method returns.", function(){
		var valueToBeReturned = 'foo';

		function returnValue(){
			return valueToBeReturned;}

		LiveCollection.addMethod('returnValue', returnValue);

		var collection = new LiveCollection.MutableCollection([]);
		expect(collection.returnValue()).toEqual(valueToBeReturned);});

	it("lets a method have access to the collection's values.", function(){
		var valuesInCollection = [1, 7, 3];
		var valuesViaThisInMethod;

		function storeValues(){
			valuesViaThisInMethod = this.values();}

		LiveCollection.addMethod('storeValues', storeValues);

		var collection = new LiveCollection.MutableCollection(valuesInCollection);
		collection.storeValues();
		expect(valuesViaThisInMethod).toEqual(valuesInCollection);});

	it("can be extended with a mutator, changing the data set.", function(){

		function change(data){
			data[1] = 5;}

		var valuesInCollection = [1, 3, 4];
		var valuesAfterChange  = valuesInCollection.slice();
		change(valuesAfterChange);

		LiveCollection.addMutator('change', change);

		var collection = new LiveCollection.MutableCollection(valuesInCollection);
		collection.change();
		expect(collection.values()).toEqual(valuesAfterChange);});

	it("calls mutators with the given arguments.", function(){
		var argumentsToBeStored = [-2, 5, 0, 3];
		var storedArguments;

		function storeArguments(data){
			storedArguments = Array.prototype.slice.call(arguments, 1);}

		LiveCollection.addMutator('mutatorStoringArguments', storeArguments);

		var collection = new LiveCollection.MutableCollection([]);
		collection.mutatorStoringArguments.apply(collection, argumentsToBeStored);
		expect(storedArguments).toEqual(argumentsToBeStored);});

	it("returns the value a mutator returns.", function(){
		var valueToBeReturned = 'foo';

		function returnValue(data){
			return valueToBeReturned;}

		LiveCollection.addMutator('mutatorReturningValue', returnValue);

		var collection = new LiveCollection.MutableCollection([]);
		expect(collection.mutatorReturningValue()).toEqual(valueToBeReturned);});});

