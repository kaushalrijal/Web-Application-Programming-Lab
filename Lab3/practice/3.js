// Write a function to check if a string is a palindrome.

const isPalindrome = (phrase) => {
    const rev = [...phrase].reverse().join("")
    return phrase === rev;
}

console.log(isPalindrome("papa"))