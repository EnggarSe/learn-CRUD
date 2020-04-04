var listArray =[];
var listObjek = {
    produk : "",
    kuantiti : ""
};
var existingList = [];
var count = 0;
alert('Selamat Datang')


let lihatDaftarBarang = () =>{
    let lihat = confirm("Lihat Barang");  
    if(lihat == true){
        console.log(localStorage.length,"existingList");
        
        if(localStorage.length>0){
            tampilBarang();
            addObjek(listObjek)
        }
        else{
            alert('Barang Tidak Di Temukan');
            addObjek(listObjek);
        }
    }  
}


let addObjek = () => {
    let addList = confirm("Tambahkan Objek");

    if(addList === true){
        let barang = prompt("Tambahkan Barang");
        let jumlah = prompt("Tambahkan Jumlah");
        listObjek.produk = barang;
        listObjek.kuantiti = jumlah;
        existingList = localStorage.getItem('listArray') === null ? [] : JSON.parse(localStorage.getItem('listArray'))
        existingList.push(listObjek);
        localStorage.setItem("listArray", JSON.stringify(existingList));
        tampilBarang();
        editBarang();
    }
    else if(addList === false){
        editBarang();
    }
}

let tampilBarang = () =>{
    let tampil = JSON.parse(localStorage.getItem('listArray'));
    let status = "";
    for(let i = 0 ; i<tampil.length ;i++){
        status+=`${i+1}.  ${tampil[i].produk} (${tampil[i].kuantiti}) \n`            
    }
    alert(status)

}

let editBarang = () =>{
    let edit = JSON.parse(localStorage.getItem('listArray'));
    let editList = confirm("Edit Objek");
    if(editList === true){
        let editPos = prompt("Select Number");
        let editBarangg = prompt("Ubah Nama Barang");
        let editKuantiti = prompt("Ubah Kuantiti");
        let ganti = {
            produk : "",
            kuantiti : ""
        }
        ganti.produk = editBarangg;
        ganti.kuantiti = editKuantiti;
        console.log(ganti);
        
        edit.splice(editPos - 1 , 1 , ganti);
        localStorage.setItem("listArray",JSON.stringify(edit))
        tampilBarang();
        removeBarang();
     }
     else if(editList == false){
         removeBarang();
     }
}

let removeBarang = () => {
    let remove = JSON.parse(localStorage.getItem('listArray'));
    let removeList = confirm("Hapus Barang Nomor");
    if(removeList === true){
        let removePos = prompt("Pilih Nomor Yang Ingin Di Hapus");
        remove.splice(removePos-1,1)
        localStorage.setItem("listArray",JSON.stringify(remove));
        tampilBarang();
        findBarang();
    }
    else if(removeList ===false){
        findBarang();
    }
}
let findBarang = () => {
    let find = JSON.parse(localStorage.getItem('listArray'));
    let findList = confirm("Cari Barang Berdasarkan Jumlah");
    let status = "";
    if(findList === true){
        let findPos = prompt("Masukan Jumlah Kuantiti Barang");
        const barang = find.filter(listArray => listArray.kuantiti == findPos);
        for(let i = 0 ; i < barang.length; i++){
            status += `${i+1}. ${barang[i].produk} (${barang[i].kuantiti}) \n`
        }
        alert(status)
        alert("Terima Kasih")
    }
    else if(findList ===false){
        alert("Terima Kasih")
    }
}

lihatDaftarBarang(listArray)

