// 5
function stringURL(str) {
    if (!str.includes(' ')) {
        return str;
    }

    let strArray = str.split('');
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] === ' ') {
            strArray[i] = '%20';
        }
    }
    strArray = strArray.join('');

    return strArray;
}
//6
function filterArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 5) {
            arr.splice(i, 1);
            i--;
        }
    }

    return arr;
}
//7
function maxSum(arr) {
    let maxSoFar = 0;
    let maxEndsHere = 0;

    for (let i = 0; i < arr.length; i++) {
        maxEndsHere += arr[i];

        if (maxSoFar < maxEndsHere) {
            maxSoFar = maxEndsHere;
        }
        if (maxEndsHere < 0) {
            maxEndsHere = 0;
        }
    }

    return maxSoFar;
}
//8
function mergeArray(a, b) {
    let mergedArray = a.concat(b);

    return mergedArray.sort((a, b) => {
        return a - b;
    });
}
//9
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}
function removeCharacters(str, rmv) {
    let filterString = str;
    for (let i = 0; i < rmv.length; i++) {
        filterString = replaceAll(filterString, rmv[i], '');
    }

    return filterString;
}
//10
function products(arr) {
    if (arr.lenth === 1) {
        return arr[0];
    }

    for (let i = 0; i < arr.length; i++) {
        let product = 1;
        let newArray = arr.splice(i, 1);
        product *= (newArray[0] * products(newArray));
        arr[i] = product;
    }

    return arr;
}

console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));