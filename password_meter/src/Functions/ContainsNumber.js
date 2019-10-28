
export function containsNumber(input_string) {
    if(!input_string){
        return false
    }
    var patt = new RegExp("[0-9]", "g");
    return patt.test(input_string);
}