var LiveCollection = (function(){
	var lib = {};

	function copy(array){
		return array.slice();}

	function MutableCollection(data){
		this.values = function(){
			return copy(data);};

		this._mutate = function(mutator, args){
			args = Array.prototype.slice.call(args);
			args.unshift(data);
			return mutator.apply(this, args);};}

	function ReadOnlyCollection(collection, transform, args){
		this.values = function(){
			return transform.apply(collection, args);};}

	lib.MutableCollection = MutableCollection;
	lib.ReadOnlyCollection = ReadOnlyCollection;

	lib.addMethod = function(name, method){
		var f = function (){
			return method.apply(this, arguments);}
		MutableCollection.prototype[name] = f;
		ReadOnlyCollection.prototype[name] = f;};

	lib.addMutator = function(name, mutator){
		MutableCollection.prototype[name] = function(){
			return this._mutate(mutator, arguments);};};

	lib.addTransformer = function(name, transform){
		var f = function(){
			return new ReadOnlyCollection(this, transform, arguments);};
		MutableCollection.prototype[name] = f;
		ReadOnlyCollection.prototype[name] = f;};

	return lib;})();

