function writeCards(someArray, event) {
    const cardsArray = [];
    for (let i = 0; i < someArray.length; i++){
        cardsArray.push(`Thank you, ${someArray[i]}, for the wonderful ${event} gift!`);
    }
    return cardsArray;
}
function countDown(x) {
    let count=x;
    while (count>=0){
        console.log(count);
        count--;
    }

}