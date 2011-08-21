var LiveCollection = (function(){
	var lib = {};

	function MutableCollection(data){
		this.values = function(){
			return data;};}

	lib.MutableCollection = MutableCollection;

	lib.addMethod = function(name, method){
		MutableCollection.prototype[name] = function(){
			return method.apply(this, arguments);};};

	return lib;})();

