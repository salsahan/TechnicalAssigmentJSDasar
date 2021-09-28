
/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
function firstNonRepeatedChar(word) {
    let huruf;

    for (let index = 0; index < word.length; index++) {
        huruf = word[index];
        if(huruf == " "){
            return "kata tidak boleh dipisah";
        }
        
    }

    for (let index = 0; index < word.length; index++) {
        huruf = word[index];
        let cek = false;
        for (let j = 0; j < word.length; j++) {
            if(huruf == word[j] && j != index){
                cek = true;
                break;
}
        }
        if(cek == false){
            return huruf;
            break;
        }
    }
    return "";
}
console.log(firstNonRepeatedChar("hello world"));
console.log(firstNonRepeatedChar("alloha"));
console.log(firstNonRepeatedChar("wooohoowh"));