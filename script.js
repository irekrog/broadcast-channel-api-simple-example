const channel = new BroadcastChannel('sample_channel');
let send = document.querySelector(".send");
let messageText = document.querySelector(".message-text");
let messageContent = document.querySelector(".message-content");

let href = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

send.addEventListener("click", () => {
	channel.postMessage(href + ": " + "<span>" + messageText.value + "</span>");
	createMessage("You: " + messageText.value);
}, false);

channel.addEventListener("message", (e) => {
	createMessage(e.data);
}, false);

function createMessage(message) {
	let item = document.createElement("P");
	item.innerHTML = message;
	messageContent.appendChild(item);
}