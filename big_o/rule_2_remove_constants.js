/*2. Remove Constants */
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}

//O(1 + n/2 + 100) -> O(n/2 + 101) -> O(n/2 + 1) (ignorando alguns calculos), não importa se é 100 ou 1 -> O(n + 1) -> O(n)