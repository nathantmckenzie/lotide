const without = function (source, itemsToRemove) {
    let num = parseInt(itemsToRemove.toString());
    for(let i=0;i<source.length;i++) {
        if(source[i] === num) {
            source.splice(i, 1);
        }
    }
    return source;
}


console.log(without([3,2,4,5],[5]));
console.log(without([23,42,55,2],[23]));
console.log(without([3,4,1,5],[]));

