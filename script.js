function firstNonRepeatedChar(str) {
 // Write your code here
	let charMap = new Map()

	for (const char of str) {
		charMap.set(char,charMap.get(char)||0 + 1)
	}

	for(const char of str){
		if (charMap.get(char) === 1) {
			return char;
		}
	}
	return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
