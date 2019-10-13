function data() {
    let data = new Date;
    let doc = document.getElementById("data");
    doc.innerHTML = data;
}

setInterval(function () {
    data()
}, 1000)