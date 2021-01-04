function loadPesan(){
    console.log("versi 3");
}

function loadMakan(){
    console.log("versi 2");
}

$(function(){
    $('input[type="number"]').niceNumber();
});

function apaAja() {
    console.log("AAAA");
}

document.getElementById("total").
addEventListener("click", tampilkan_harga);

function tampilkan_harga() {
    var nilai_makan1=document.getElementById("makan1").value;
    var nilai_makan2=document.getElementById("makan2").value;
    var nilai_minum1=document.getElementById("minum1").value;
    var nilai_minum2=document.getElementById("minum2").value;
    document.getElementById("harga").innerHTML= (nilai_makan1*10000) + (nilai_makan2*15000)
    + (nilai_minum1*5000) + (nilai_minum2*7000);
}

document.getElementById("pesan").
addEventListener("click", kirim_pesan);

function kirim_pesan() {
    var nilai_makan1=document.getElementById("makan1").value;
    var nilai_makan2=document.getElementById("makan2").value;
    var nilai_minum1=document.getElementById("minum1").value;
    var nilai_minum2=document.getElementById("minum2").value;
    var allMakan = nilai_makan1 + nilai_makan2;
    var allMinum = nilai_minum1 + nilai_minum2;

    if(allMinum != 0 || allMakan != 0){
        var text ;
        if(allMinum == 0){
            text = "makanan : " + allMakan;
        } else if(allMakan == 0){
            text = "minuman : " + allMinum;
        } else{
            text =`minuman : ${allMinum}, makanan : ${allMakan}`; 
        }

        console.log(text);
        ExampleSendMessage(text);

    } else{
        console.log("Pesan makanan atau minuman terlebih dahulu!");
    }
}

