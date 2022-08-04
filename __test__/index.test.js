// watch out for rogue imports being auto-added!

// we have to import any data or functions we want to use otherwise we might get a 'x is not defined' error
const { pineapple, orange, kiwi, apple, banana, catalogue } = require('../data')
const {barcodeScan, addItem, totalPrice, removeItem} = require('../index')

// 1- As a user, I would like to be able to scan an item using barcode so its details can be found from products list (test data)
describe("barcodeScan", () => {
    it("returns a product when passed a barcode", () => {
        expect(barcodeScan(5367, catalogue)).toEqual(pineapple)
    })
})

//2 - As a user, I would like to be able to add an item to my basket.
describe("addItem", () => {
    
    it("adds an item to the basket", () => {
        const basket = [];
        expect(basket).toHaveLength(0)
        addItem(basket, kiwi)
        expect(basket).toHaveLength(1)
        expect(basket).toEqual([kiwi])
    })
})

// 3 - As a user, I would like to be able to see the total price of all items in my basket.
describe("totalPrice", () => {
    it("return total of all prices in basket", () => {
        const basket = [];
        addItem(basket, kiwi)
        addItem(basket, apple)
        addItem(basket, orange)
        expect(totalPrice(basket)).toEqual(37)
    })
})

// 4 - As a user, I would like to be able to remove an item from my basket. 
describe("removeItem", () => {
    it("remove an item from the basket", () => {
        const basket = [];
        addItem(basket, kiwi)
        addItem(basket, apple)
        addItem(basket, orange)
        removeItem(basket, apple)
        expect(basket).toHaveLength(2)
        expect(basket).toEqual([kiwi, orange])
    })
})