var LiveCollection = (function(){
	var lib = {};

	function copy(array){
		return array.slice();}

	function MutableCollection(data){
		this.values = function(){
			return copy(data);};}

	lib.MutableCollection = MutableCollection;

	lib.addMethod = function(name, method){
		MutableCollection.prototype[name] = function(){
			return method.apply(this, arguments);};};

	return lib;})();

