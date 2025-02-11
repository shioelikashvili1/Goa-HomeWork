function reload() {
    const n = new Date();
    const h = n.getHours();
    const d = n.getDate();
    const m = n.getMinutes();
    const s = n.getSeconds();

    document.getElementById("datetime").innerHTML = d;
    document.getElementById("hour").innerHTML = h < 10 ? "0" + h : h;
    document.getElementById("minute").innerHTML = m < 10 ? "0" + m : m;
    document.getElementById("second").innerHTML = s < 10 ? "0" + s : s;
}

setInterval(reload, 1000);
reload();