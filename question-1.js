// Data Structures and Algorithms

function frequenciesOfWords (str) {
    let myArr = str.split(" ")
    let counter = {}
    if(str.length == 0){
        return {}
    }
    for(let i = 0; i < myArr.length; i++){
        if (counter[myArr[i]] == undefined){
            counter[myArr[i]] = 1
        }
        else{
            counter[myArr[i]] += 1
        }

    }
    
    return counter
    
}


console.log(frequenciesOfWords("Is your favorite car brand BMW? Mine is Toyota."))
console.log(frequenciesOfWords("Practing algorithms at home plus more algorithms"))
console.log(frequenciesOfWords("Practing discrete math in a discreth math class with more math"))
console.log(frequenciesOfWords(""))