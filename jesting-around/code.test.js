
const Codes = require('./code')

// exercise 3
test(`should return a clean string without these symbols: "!", "#", ".", ",", "'"`, () => {
    const codes = new Codes()

    expect(result).not.toContain("!", "#", ".", ",", "'")
}

// exercise 2
// test("should remove at least one element from the array `arr`", () => {
//     const codes = new Codes()
//     let arr = [1, 2, 3, 4, 5, 5]
//     let result = codes.removeAtLeastOne(arr)
//     expect(result.length).toBeLessThan(6)
    
//     let arr2 = [1]
//     let result2 = codes.removeAtLeastOne(arr2)
//     expect(result2.length).toBeLessThan(1)
// })


//exercise 1
// test("should return true if n is even, false otherwise", () => {
//     const codes = new Codes()
//     let result = codes.isEven(2)
//     expect(result).toEqual(true)

//     result = codes.isEven(11)
//     expect(result).toEqual(false)
// })

//spot checks
// const AM = require('./code')
// test("should convert two arrays of equal length to a single object with key-values from the arrays", () => {
//     let arrayManipulator = new AM()
//     let x = ["food", "item", "location"]
//     let y = ["cherry", "lightbulb", "Tazmania"]

//     let result = arrayManipulator.manipulate(x, y)

//     expect(result).toEqual({
//         food: "cherry",
//         item: "lightbulb",
//         location: "Tazmania"
//     })
// })

// test("should return a message when array lengths don't match", () => {
//     let arrayManipulator = new AM()
//     let x = ["food", "item", "location"]
//     let y = ["cherry", "lightbulb"]

//     let result = arrayManipulator.manipulate(x, y)

//     expect(result).toEqual({ error: "Array lengths don't match" })
// })

// const PM = require('./code')

// test("addPicture should add a picture URL to the pictureURLs array", function () {
// //sanity 
//   const picManager = new PM()
//   expect(picManager.pictureURLs.length).toBe(0)
  
//   picManager.addPicture("some_url")
//   expect(picManager.pictureURLs.length).toBe(1)           //test
//   expect(picManager.pictureURLs).toContain("some_url")    //double check 
// })

// test("removePicture should receive a picture URL and remove it from the pictureURLs array", function () {
//     //sanity
//     const picManager = new PM()
//     expect(picManager.pictureURLs.length).toBe(0)

//     picManager.addPicture("some_url")
//     picManager.addPicture("some_url2")
//     picManager.addPicture("some_url3")

//     picManager.removePicture("some_url2")
//     expect(picManager.pictureURLs.length).toBe(2)
//     expect(picManager.pictureURLs.length).not.toContain("some_url2") //here this isn't double checking, this is necessary
// })

// const x = require('./code')

// test("add should return sum of a + b", () => {
//     let sum = x.add(1, 2)
//     expect(sum).toBe(3)
// })

// test('calcHyp should return hyp of a and b', () => {
//     let hyp = x.calculateHyp(3, 4)
//     expect(hyp).toBe(5)
// })

// test("should remove all BUGs from list of code", () => {
//     let code = ["great code", "good code", "BUG", "async await awesome code", "BUG", "BUG", "general code"]
//     let bugFreeCode = x.removeBugs(code)
//     expect(bugFreeCode).not.toContain("BUG")
//     expect(bugFreeCode).toContain("good code")
// })

// test("should only include objects with priority of HIGH", () => {
//     let array = [
//         { text: "taxes", priority: "HIGH" },
//         { text: "lessons", priority: "LOW" },
//         { text: "shopping", priority: "LOW" },
//         { text: "batteries", priority: "HIGH" }
//     ]
//     let newArray = x.clearLowPriority(array)
//     newArray.forEach(n => expect(n.priority).toBe("HIGH"))

// })
