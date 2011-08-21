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

		this.lastItem = function(){
			return data[data.length-1];};

		this.firstItem = function(){
			return data[0];};

		this.push = function(item){
			data.push(item);};

		this.unshift = function(item){
			data.unshift(item);};

		this.pop = function(){
			return data.pop();};

		this.shift = function(){
			return data.shift();};

		this.set = function(index, item){
			data[index] = item;};}

	lib.createMutable = function(data){
		return new Mutable(data);};

	return lib;})();

