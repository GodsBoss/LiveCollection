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

	lib.MutableCollection = MutableCollection;

	lib.addMethod = function(name, method){
		MutableCollection.prototype[name] = function(){
			return method.apply(this, arguments);};};

	lib.addMutator = function(name, mutator){
		MutableCollection.prototype[name] = function(){
			return this._mutate(mutator, arguments);};};

	return lib;})();

