function solution(inputArray) {
    
    let count = 0;
    for (let i = 0; i < inputArray.length - 1; i++){
        while (inputArray[i] >= inputArray[i + 1]){
            inputArray[i + 1] += 1;
            count++;
        }
    }
    return count;
}
