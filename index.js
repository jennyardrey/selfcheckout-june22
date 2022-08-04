
const barcodeScan = (barcode, catalogue) => {
    return catalogue.find(item => item.barcode === barcode)
}

const addItem = (basket, item) => {
    basket.push(item)
}

const totalPrice = (basket) => {
    return basket.reduce((acc, curr) => {
        return acc + curr.price
    }, 0)
}

const removeItem = (basket, item) => {
    basket.splice(basket.indexOf(item), 1)
}


// Don't for get to export your functions so we can use them in another file
module.exports = {barcodeScan, addItem, totalPrice, removeItem}