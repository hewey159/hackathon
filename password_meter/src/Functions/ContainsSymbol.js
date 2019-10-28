export function containsSymbol(input_string) {
    if(!input_string){
        return false
    }
    var patt = new RegExp("[^A-Za-z0-9]+", "g");
    let res = patt.test(input_string);
    console.log(res)
    return res
};