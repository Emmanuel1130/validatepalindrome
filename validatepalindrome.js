function isPalindrome(str) {
    // Remove non-alphanumeric characters and make it lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Compare string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama"));  // true
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false
