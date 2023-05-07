// pow(2, 2) = 4
// pow(2, 3) = 8
// pow(2, 4) = 16



/*
function pow(x, n) {
    return (n === 1) ? x : (x * pow(x, n - 1));
}

console.log(pow(2, 4));*/


// function factorial(n) {
//     return n === 1 ? n :  n * factorial(n - 1)
// }
//
// console.log(factorial(3));


// factorial(1) = 1
// factorial(2) = 2
// factorial(3) = 2



function mygcd(x, y){
    if(x === 1 && y !== 0 || y === 1 && x !== 0) {
        return 1;
    } else if (x % y === 1 || y % x === 1) {
        return 1;
    } else if(x === 0 || y === 0 || x < 0 || y < 0) {
        console.log('Общий делитель определить нельзя')
    } else if(x / y === 1) {
        return x;
    } else {
        return recursion(x, y);
    }
}

function recursion(x, y) {
    let listNOD = [];
    let greatestNumber;

    if(x % y === 0) {
        return y
    } else if(y % x === 0) {
        return x;
    }

    if (x > y) {
        greatestNumber = x;
    } else {
        greatestNumber = y;
    }

    for (let i = 2; i <= greatestNumber;) {
        if (x % i === 0 && y % i === 0 ) {
            listNOD.push(i);
            i++;
        } else {
            i++;
        }
    }

    if(listNOD[0] === undefined) {
        return 1
    }

    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }

    return getMaxOfArray(listNOD)
}

console.log(mygcd(647821, 124356));



// const findMax = (numbers) => {
//     // Если массив пустой, у него нет максимального элемента
//     if (numbers.length === 0) {
//         return null;
//     }
//     // Выполняем агрегацию
//     return numbers.reduce(
//         (acc, number) => (number > acc ? number : acc),
//         // Сначала принимаем за максимальное первый элемент массива
//         numbers[0]
//     );
// };

// findMax([1, 0, -5, 40, 1у0, -100, 41]); // 41