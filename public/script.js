function onReady() {
	console.log("onReady called");

	document.getElementById("calcFreqBtn").addEventListener("click", calculateByFrequency);
	document.getElementById("calcTimeBtn").addEventListener("click", calculateByTime);
	document.getElementById("duplicateBtn").addEventListener("click", duplicateFrequency);
	document.getElementById("halveBtn").addEventListener("click", halveFrequency);
}

function calculateByTime() {
	console.log("calculateByTime was called");

	const val = document.getElementById("inputSecs").value;
	const secs = parseFloat(val);

	if (secs === null || typeof secs !== "number" || isNaN(secs)) {
		alert("No valid data in seconds input");
		return;
	}

	document.getElementById("inputFreq").value = 1 / secs;
	document.getElementById("inputMilli").value = secs * 1000;
	document.getElementById("inputMicro").value = secs * 1000000;
	document.getElementById("inputNano").value = secs * 1000000000;

	printToHistory("Calc by time");
}

function calculateByFrequency() {
	const val = document.getElementById("inputFreq").value;
	const freq = parseFloat(val);

	if (freq === null || typeof freq !== "number" || isNaN(freq)) {
		alert("No valid data in frequency input");
	}

	const secs = 1 / freq;
	document.getElementById("inputSecs").value = secs;
	document.getElementById("inputMilli").value = secs * 1000;
	document.getElementById("inputMicro").value = secs * 1000000;
	document.getElementById("inputNano").value = secs * 1000000000;

	printToHistory("Calc by frequency");
}

function duplicateFrequency() {
	const val = document.getElementById("inputFreq").value;
	let freq = parseFloat(val);

	if (freq === null || typeof freq !== "number" || isNaN(freq)) {
		alert("No valid data in frequency input");
	}

	freq *= 2;
	document.getElementById("inputFreq").value = freq;
	const secs = 1 / freq;
	document.getElementById("inputSecs").value = secs;
	document.getElementById("inputMilli").value = secs * 1000;
	document.getElementById("inputMicro").value = secs * 1000000;
	document.getElementById("inputNano").value = secs * 1000000000;

	printToHistory("Duplicate Frequency");
}

function halveFrequency() {
	const val = document.getElementById("inputFreq").value;
	let freq = parseFloat(val);

	if (freq === null || typeof freq !== "number" || isNaN(freq)) {
		alert("No valid data in frequency input");
	}

	freq /= 2;
	document.getElementById("inputFreq").value = freq;
	const secs = 1 / freq;
	document.getElementById("inputSecs").value = secs;
	document.getElementById("inputMilli").value = secs * 1000;
	document.getElementById("inputMicro").value = secs * 1000000;
	document.getElementById("inputNano").value = secs * 1000000000;

	printToHistory("Halve Frequency");
}

function printToHistory(calledFrom) {
	const freq = document.getElementById("inputFreq").value;
	const secs = document.getElementById("inputSecs").value;
	const milli = document.getElementById("inputMilli").value;
	const micro = document.getElementById("inputMicro").value;
	const nano = document.getElementById("inputNano").value;

	const htmlText = "<p>--"+calledFrom+"<br>" +
					 freq+"Hz<br>" +
					 secs+"s<br>" +
					 milli+"ms<br>" +
					 micro+"us<br>" +
					 nano+"ns</p>";

	document.getElementById("history").innerHTML += htmlText;
}