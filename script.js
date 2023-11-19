
function queue(){
    this.array = [];
}

queue.prototype.add = function(value){
    this.array.push(value);
}

queue.prototype.delete = function(value){
    this.array.shift(value);
}


const lot = new queue();

lot.add(1);
lot.add(2);
lot.add(3);

console.log(lot)

console.log(lot.delete())