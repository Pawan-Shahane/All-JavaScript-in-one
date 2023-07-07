
function display(){
    const Taskinput = document.getElementById("task-input").value;

document.getElementById("task-content").innerText = Taskinput;

}
document.getElementById("btn").onclick = display;