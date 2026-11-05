
function removeItem(item) {
    item.target.parentElement.remove();
}
const list = document.querySelector("#class");
function render() {
    document.querySelectorAll(".remove").forEach((button) => {
        button.addEventListener("click", removeItem);
    });
}

document.addEventListener("DOMContentLoaded", render);