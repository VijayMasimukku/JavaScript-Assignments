function CreateObject(arr) {
    // Write your code here
    var newObject={}
    for (var i=0;i<arr.length;i+=2){
        
        newObject[arr[i]]=arr[i+1]
    }
    return newObject
}

module.exports = CreateObject;
