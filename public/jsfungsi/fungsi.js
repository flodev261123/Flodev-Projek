var databarang = ["pulpen", "penghapus", "buku"];

function showbarang() {
  var listbarang = document.getElementById("list-barang");
  // clear list barang
  listbarang.innerHTML = "";

  //cetak semua barang
  for (let i = 0; i < databarang.length; i++) {
    var btnEdit = "<a href='#' onclick='editbarang(" + i + ")'>edit</a>";
    var btnHapus = "<a href='#' onclick='deletebarang(" + i + ")'>hapus</a>";

    listbarang.innerHTML +=
      "<li>" + databarang[i] + "[" + btnEdit + " | " + btnHapus + "]</li>";
  }
}

function addbarang() {
  var input = document.querySelector("input[name=barang]");
  var newbarang = input.value;
  databarang.push(newbarang);
  showbarang();
  input.value = "";
}

function editbarang(id) {
  var newbarang = prompt("Nama baru", databarang[id]);
  databarang[id] = newbarang;
  showbarang();
}

function deletebarang(id) {
  databarang.splice(id, 1);
  showbarang();
}

showbarang();
