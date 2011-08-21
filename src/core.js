var LiveCollection = (function(){
	var lib = {};

	function MutableCollection(data){
		this.values = function(){
			return data;};}

	lib.MutableCollection = MutableCollection;

	return lib;})();

