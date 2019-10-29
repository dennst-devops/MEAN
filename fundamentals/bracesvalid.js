var matches = {
    ')': '(',
    '}': '{',
    ']': '['
};

function bracesValid(str) {
    var stack = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '(' || str[i] == "{" || str[i] == "[") {
            stack.push(str[i]);
        }
        else {
            if (stack[stack.length-1] == matches[str[i]]) {
                stack.pop();
            }
            else {
                return false;
            }
        }
    }

return true;
}

console.log(bracesValid("{{()}}[]"));