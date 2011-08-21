describe("Mutable collection", function(){

	describe("Access", function(){

		describe("Collection containing no data", function(){

			it("is empty.", function(){
				var collection = Collection.createMutable();
				expect(collection.isEmpty()).toBeTruthy();});

			it("has a length of zero.", function(){
				var collection = Collection.createMutable();
				expect(collection.length()).toEqual(0);});});

		describe("Collection containing an empty data set", function(){

			it("is empty.", function(){
				var collection = Collection.createMutable([]);
				expect(collection.isEmpty()).toBeTruthy();});

			it("has a length of zero.", function(){
				var collection = Collection.createMutable([]);
				expect(collection.length()).toEqual(0);});});

		describe("Collection containing a one-item data set", function(){

			it("is not empty.", function(){
				var collection = Collection.createMutable([5]);
				expect(collection.isEmpty()).toBeFalsy();});

			it("has a length of one.", function(){
				var collection = Collection.createMutable([5]);
				expect(collection.length()).toEqual(1);});

			it("can return that item.", function(){
				var collection = Collection.createMutable([5]);
				expect(collection.item(0)).toEqual(5);});});

		describe("Collection containing a few data items", function(){

			it("has a length corresponding to the number of items.", function(){
				expect(Collection.createMutable([3, -12, 5]).length()).toEqual(3);});

			it("is not empty.", function(){
				expect(Collection.createMutable([3, 7]).isEmpty()).toBeFalsy();});

			it("returns an item corresponding to its index.", function(){
				var collection = Collection.createMutable([3, 7, -2]);
				expect(collection.item(0)).toEqual(3);
				expect(collection.item(1)).toEqual(7);
				expect(collection.item(2)).toEqual(-2);});});

		describe("Last item", function(){

			it("can be retrieved.", function(){
				expect(Collection.createMutable([6, -2, 5, 3]).lastItem()).toEqual(3);});

			it("is undefined for an empty collection.", function(){
				expect(Collection.createMutable().lastItem()).toBeUndefined();});});

		describe("First item", function(){

			it("can be retrieved.", function(){
				expect(Collection.createMutable([3, 8, -2, 1]).firstItem()).toEqual(3);});

			it("is undefined for an empty collection.", function(){
				expect(Collection.createMutable().firstItem()).toBeUndefined();});});});

	describe("Manipulation", function(){

		function checkIfDataSetIsUnchangedBy(action){
			var data = [2, 8, 4];
			var collection = Collection.createMutable(data);
			action(collection);
			expect(data.length).toEqual(3);
			expect(data).toEqual([2, 8, 4]);}

		describe("appending item", function(){

			it("sets the first item if the data set is empty.", function(){
				var collection = Collection.createMutable();
				collection.push(5);
				expect(collection.isEmpty()).toBeFalsy();
				expect(collection.length()).toEqual(1);
				expect(collection.item(0)).toEqual(5);});

			it("adds the item at the end.", function(){
				var collection = Collection.createMutable([2, 3]);
				collection.push(5);
				expect(collection.item(2)).toEqual(5);});

			it("does not manipulate the underlying data set.", function(){

				function pushingItem(collection){
					collection.push(3);}

				checkIfDataSetIsUnchangedBy(pushingItem);});});

		describe("prepending item", function(){

			it("adds the item at the beginning.", function(){
				var collection = Collection.createMutable([2, 4]);
				collection.unshift(6);
				expect(collection.length()).toEqual(3);
				expect(collection.item(0)).toEqual(6);
				expect(collection.item(1)).toEqual(2);});

			it("does not manipulate the underlying data set.", function(){

				function unshiftingItem(collection){
					collection.unshift(3);}

				checkIfDataSetIsUnchangedBy(unshiftingItem);});});

		describe("removing last item", function(){

			it("removes item from the end and returns it.", function(){
				var collection = Collection.createMutable([3, 1, 8]);
				var lastItem = collection.pop();
				expect(lastItem).toEqual(8);
				expect(collection.length()).toEqual(2);});

			it("returns undefined for an empty collection.", function(){
				expect(Collection.createMutable().pop()).toBeUndefined();});

			it("does not manipulate the underlying data set.", function(){

				function poppingItem(collection){
					collection.pop();}

				checkIfDataSetIsUnchangedBy(poppingItem);});});

		describe("removing first item", function(){

			it("removes item from the beginning and returns it.", function(){
				var collection = Collection.createMutable([3, 1, 8]);
				var firstItem = collection.shift();
				expect(firstItem).toEqual(3);
				expect(collection.length()).toEqual(2);});

			it("returns undefined for an empty collection.", function(){
				expect(Collection.createMutable().shift()).toBeUndefined();});

			it("does not manipulate the underlying data set.", function(){

				function shiftingItem(collection){
					collection.shift();}

				checkIfDataSetIsUnchangedBy(shiftingItem);});});

		describe("setting item", function(){

			it("sets items.", function(){
				var collection = Collection.createMutable([1, 3, 5]);
				collection.set(1, 4);
				expect(collection.item(1)).toEqual(4);});

			it("does not manipulate the underlying data set.", function(){

				function settingItem(collection){
					collection.set(1, Math.random());}

				checkIfDataSetIsUnchangedBy(settingItem);});});});});

