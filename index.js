let btn = document.getElementById('btn');
btn.addEventListener("click", () => {
if (btn.innerText == "PÅ") {
    document.documentElement.style.cssText = "--light-color: #b4bac9";
    btn.innerText = "AV";
} else {
    document.documentElement.style.cssText = "--light-color: #FFEA00";
    btn.innerText = "PÅ";
}
});

