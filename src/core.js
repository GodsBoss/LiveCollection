var LiveCollection = (function(){
	var lib = {};

	function copy(array){
		return array.slice();}

	function MutableCollection(data){
		this.values = function(){
			return copy(data);};

		this._mutate = function(mutator){
			mutator.call(this, data);};}

	lib.MutableCollection = MutableCollection;

	lib.addMethod = function(name, method){
		MutableCollection.prototype[name] = function(){
			return method.apply(this, arguments);};};

	lib.addMutator = function(name, mutator){
		MutableCollection.prototype[name] = function(){
			this._mutate(mutator);};};

	return lib;})();

