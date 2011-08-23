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

	LiveCollection.addMutator('remove', function(data, index){
		if (index<0){
			throw new Error('Index too low.');}
		if (index>=data.length){
			throw new Error('Index too high.');}
		for(var i=index;i<data.length-1;i++){
			data[i]=data[i+1];}
		data.length = data.length-1;});

	LiveCollection.addMutator('clear', function(data){
		data.length = 0;});

	LiveCollection.addMutator('insertBefore', function(data, index, value){
		index = Math.max(0, Math.min(data.length, index));
		for(var i=data.length;i>=index;i--){
			data[i]=data[i-1];}
		data[index]=value;});

	LiveCollection.addMutator('insertAfter', function(data, index, value){
		index = Math.max(-1, Math.min(data.length-1, index));
		for(var i=data.length;i>index;i--){
			data[i]=data[i-1];}
		data[index+1]=value;});

	LiveCollection.addMethod('length', function(){
		return this.values().length;});

	LiveCollection.addTransformer('head', function(n){
		return this.values().slice(0, n);});

	LiveCollection.addTransformer('tail', function(n){
		return this.values().slice(this.values().length-n);});

})(LiveCollection);

