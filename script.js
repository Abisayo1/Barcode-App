function onScanSuccess(decodedText, decodedResult) {
  console.log(`Code scanned = ${decodedText}`);
  document.getElementById('result').innerText = `Scanned Code: ${decodedText}`;
}

function onScanFailure(error) {
  // console.warn(`Scan error: ${error}`);
}

const html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox: 250 },
  false
);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
