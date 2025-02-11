function isValidCoupon(couponCode, totalAmount) {
    if ((couponCode === "SALE" || couponCode === "BIGSALE") && totalAmount >= 50) {
        return true;
    } else if (couponCode === "LILSALE") {
        return true;
    }
    return false;
}


console.log(isValidCoupon("SALE", 50));     
console.log(isValidCoupon("BIGSALE", 60));  
console.log(isValidCoupon("LILSALE", 30));  
console.log(isValidCoupon("SALE", 40));    
console.log(isValidCoupon("BIGSALE", 40));  
console.log(isValidCoupon("NOCOUPON", 60)); 