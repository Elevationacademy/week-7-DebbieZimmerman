//exercise 1
// class UniqueArray {
//     constructor() {
//         this.arr = [],
//         this.length = 0
//     }

//     add(item) {
//         if (!this[item]) {
//             this[item] = true
//             this.arr[this.length++] = item
//         }
//     }

//     showAll() {
//         console.log(this.arr)
//     }

//     exists(item) {
//         if (this[item]) {
//             console.log(true)
//             return (true)
//         } else {
//             console.log(false)
//             return (false)
//         }

//     }

//     get(index) {
//         if (this.arr[index]){
//             return this.arr[index]
//         } else {
//             return (-1)
//         }
//     }
// }

// const uniqueStuff = new UniqueArray()
// uniqueStuff.add("toy")
// uniqueStuff.showAll() //prints ["toy"]
// uniqueStuff.add("toy")
// uniqueStuff.showAll() //prints ["toy"]
// uniqueStuff.exists("toy") //returns true
// uniqueStuff.add("poster")
// uniqueStuff.add("hydrogen")
// console.log(uniqueStuff.get(2)) //prints "hydrogen"

//extension - not yet done
class UniqueArray {
    constructor() {
        this.arr = [],
        this.length = 0
    }

    add(item) {
        if (!this[item]) {
            this[item] = true
            this.arr[this.length++] = item
        }
    }

    showAll() {
        console.log(this.arr)
    }

    exists(item) {
        if (this[item]) {
            console.log(true)
            return (true)
        } else {
            console.log(false)
            return (false)
        }

    }

    get(index) {
        if (this.arr[index]){
            return this.arr[index]
        } else {
            return (-1)
        }
    }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"