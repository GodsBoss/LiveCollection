(function(LiveCollection){

	LiveCollection.addMutator('push', function(data, item){
		return data.push(item);});

	LiveCollection.addMutator('unshift', function(data, item){
		return data.unshift(item);});

	LiveCollection.addMutator('pop', function(data){
		return data.pop();});

	LiveCollection.addMutator('shift', function(data){
		return data.shift();});

	LiveCollection.addMutator('set', function(data, index, value){
		if (index<0){
			throw new Error('Index too low.');}
		if (index>=data.length){
			throw new Error('Index too high.');}
		data[index] = value;
		return value;});

	LiveCollection.addMutator('clear', function(data){
		data.length = 0;});

	LiveCollection.addMethod('length', function(){
		return this.values().length;});

})(LiveCollection);

