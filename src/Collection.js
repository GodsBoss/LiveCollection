var Collection = (function(){
	var lib = {};

	function copy(array){
		return array.slice();}

	function Mutable(data){
		data = typeof data != 'undefined' ? copy(data) : [];

		this.length = function(){
			return data.length;};

		this.isEmpty = function(){
			return !data.length;};

		this.item = function(index){
			return data[index];};

		this.push = function(item){
			data.push(item);};

		this.unshift = function(item){
			data.unshift(item);};

		this.set = function(index, item){
			data[index] = item;};}

	lib.createMutable = function(data){
		return new Mutable(data);};

	return lib;})();

