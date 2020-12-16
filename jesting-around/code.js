class Codes {
    constructor() {

    }

    //should return true if n is even, false otherwise
    isEven(n) {
        return n % 2 == 0 ? true : false
    }

    //should remove at least one element from the array `arr`
    removeAtLeastOne(arr) {
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
        arr.splice(0, numItemsToRemove)
        return arr
    }

    //should return a clean string without these symbols: "!", "#", ".", ",", "'"
    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"]
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
    }

}

module.exports = Codes












// class PictureManager {
//     constructor() {
//         this.pictureURLs = []
//     }

//     addPicture(picURL) {
//         this.pictureURLs.push(picURL)
//     }

//     removePicture(picURL) {
//         this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1)
//     }


// }

// module.exports = PictureManager

// class ArrayManipulator {
//     manipulate(arr1, arr2) {
//         let obj = {}
//         if (arr1.length === arr2.length) {
//             for (let i in arr1){
//                 obj[arr1[i]] = arr2[i]
//             }
//             return obj
//         } else {
//             return ({"error": "Array lengths don't match"})
//         }
//     }
// }

// module.exports = ArrayManipulator

// class Code {
//     constructor() {

//     }

//     add(a, b) {
//         return a + b
//     }

//     calculateHyp(a, b) {
//         return Math.sqrt(a * a + b * b)
//     }

//     removeBugs = function (code) {
//         return code.filter(c => c != "BUG")
//     }

//     clearLowPriority(array) {
//         return array.filter(a => a.priority === "HIGH")
//     }
// }

// const code = new Code

// module.exports = code