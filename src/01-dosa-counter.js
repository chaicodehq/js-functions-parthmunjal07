/**
 * 🍳 Dosa Counter - Order Calculator
 *
 * Raju ka South Indian dosa counter hai Bangalore mein. Customer aata hai,
 * dosa ka type bolta hai, kitne chahiye bolta hai, aur spicy chahiye ya nahi.
 * Tujhe order calculate karke bill banana hai.
 *
 * Rules:
 *   - Dosa prices: plain=40, masala=60, onion=50, butter=70, paper=90, cheese=80
 *   - quantity ka default value 1 hai (agar nahi diya toh 1 maano)
 *   - isSpicy ka default value false hai
 *   - Agar isSpicy true hai, toh har dosa pe Rs 10 extra lagao
 *   - pricePerDosa = base price + (10 if spicy)
 *   - total = pricePerDosa * quantity
 *   - Return: { type, quantity, pricePerDosa, total }
 *   - Hint: Use default parameters, object return
 *
 * Validation:
 *   - Agar type string nahi hai ya unknown type hai, return null
 *   - Agar quantity positive number nahi hai (<=0 ya NaN), return null
 *
 * @param {string} type - Dosa type
 * @param {number} [quantity=1] - Number of dosas
 * @param {boolean} [isSpicy=false] - Add spicy for Rs 10 extra
 * @returns {{ type: string, quantity: number, pricePerDosa: number, total: number } | null}
 *
 * @example
 *   calculateDosaOrder("masala", 2, true)
 *   // => { type: "masala", quantity: 2, pricePerDosa: 70, total: 140 }
 *
 *   calculateDosaOrder("plain")
 *   // => { type: "plain", quantity: 1, pricePerDosa: 40, total: 40 }
 */
export function calculateDosaOrder(type, quantity = 1, isSpicy = false) {
  // Your code here
  if (typeof type !== "string" || quantity <= 0 || quantity === NaN) return null
  if (type === "plain"){
    return {type: type, quantity:quantity, pricePerDosa: isSpicy ? 50:40, total: quantity*(isSpicy ? 50:40)}
  }
  else if (type === "masala"){
    return {type: type, quantity:quantity, pricePerDosa: isSpicy ? 70:60, total: quantity*(isSpicy ? 70:60)}
  }
  else if (type === "onion"){
    return {type: type, quantity:quantity, pricePerDosa: isSpicy ? 60:50, total: quantity*(isSpicy ? 60:50)}
  }
  else if (type === "butter"){
    return {type: type, quantity:quantity, pricePerDosa: isSpicy ? 80:70, total: quantity*(isSpicy ? 80:70)}
  }
  else if (type === "paper"){
    return {type: type, quantity:quantity, pricePerDosa: isSpicy ? 100:90, total: quantity*(isSpicy ? 100:90)}
  }
  else if (type === "cheese"){
    return {type: type, quantity:quantity, pricePerDosa: isSpicy ? 90:80, total: quantity*(isSpicy ? 90:80)}
  } else {
    return null
  }
  
    
}
