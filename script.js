// bukti JS jalan
console.log("SCRIPT JALAN 🔥");

const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", function () {
  text.innerHTML = "🎉 JavaScript BERHASIL JALAN!";
  text.style.color = "lime";
});