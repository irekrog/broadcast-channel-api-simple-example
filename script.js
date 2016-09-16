
const channel = new BroadcastChannel('sample_channel');

let send = document.querySelector(".send");

send.addEventListener("click", () => {

	channel.postMessage('This is a message.');
	
}, false);

channel.addEventListener("message", (e) => {

  console.log('Received message: ', e.data);

});