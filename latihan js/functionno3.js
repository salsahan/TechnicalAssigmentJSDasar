/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(sentence) {
    firstChart = sentence.split(" ")

    for (let index = 0; index < firstChart.length; index++) {
        ubah = firstChart[index].toUpperCase()
        firstChart[index] = ubah.charAt(0) + firstChart[index].substring(1)
    }

    let firstChart1 = "";
    for (let index = 0; index < firstChart.length; index++) {
        firstChart1 = firstChart1 + firstChart[index] + " "    
    }

    return firstChart1
}
console.log(convToUpperCase("hello bandung"))