var Collection = (function(){
	var lib = {};

	function Mutable(data){
		data = typeof data != 'undefined' ? data : [];

		this.length = function(){
			return data.length;};

		this.isEmpty = function(){
			return !data.length;};

		this.item = function(index){
			return data[index];};}

	lib.Mutable = Mutable;

	return lib;})();

