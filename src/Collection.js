var Collection = (function(){
	var lib = {};

	function Mutable(data){
		this.length = function(){
			return 0;};

		this.isEmpty = function(){
			return true;};}

	lib.Mutable = Mutable;

	return lib;})();

