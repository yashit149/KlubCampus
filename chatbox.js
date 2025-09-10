function show() {
    let inputValue = document.getElementById("input");
    let chatroom = document.getElementById("chatbox");
    let bubble = document.createElement("div");
    bubble.className = "bg-blue-500 text-white p-3 rounded-xl shadow w-fit";
    bubble.textContent = inputValue.value;
    chatroom.appendChild(bubble);
    inputValue.value = "";
}