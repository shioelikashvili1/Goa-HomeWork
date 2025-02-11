function isTeenager(age, hasPermission) {
    if ((age < 18 && !hasPermission) || (age >= 18 && hasPermission)) {
        return false;
    }
    return true;
}


console.log(isTeenager(17, false)); 
console.log(isTeenager(17, true));  
console.log(isTeenager(18, true));  
console.log(isTeenager(18, false)); 
console.log(isTeenager(19, true));  
console.log(isTeenager(19, false)); 