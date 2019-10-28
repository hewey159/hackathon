// returns true if the string contains a number
export function containsUpperCase(input_string) {
    if(!input_string){
        return false
    }
    var patt = new RegExp("[A-Z]", "g");
    return patt.test(input_string);
}