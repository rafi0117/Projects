function Decode() {
	let Base64String = document.getElementById("decode").value;

	let SplitString = Base64String.split("");

	let Base64 =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

	let check =
		/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

	if (check.test(Base64String)) {
		let value = [];
		for (let i = 0; i < SplitString.length; i++) {
			for (let j = 0; j < Base64.length; j++) {
				if (SplitString[i] == Base64[j]) {
					value.push(Base64.indexOf(Base64[j]));
				}
			}
		}

		let binaryCodes = value.map((num) => num.toString(2));

		for (let i = 0; i < binaryCodes.length; i++) {
			let n = "0";
			while (binaryCodes[i].length < 6) {
				binaryCodes[i] = n + binaryCodes[i];
			}
		}

		let oneBinary = binaryCodes.join("").split("");

		let binaryCode8Bit = [];
		while (oneBinary.length != 0) {
			binaryCode8Bit.push(oneBinary.splice(0, 8).join(""));
		}

		let BitoDec = binaryCode8Bit.map((num) => parseInt(num, 2));

		let lastElement = BitoDec[BitoDec.length - 1];
		let sum = 0;
		for (let i = 0; i < lastElement; i++) {
			sum += lastElement[i];
		}

		if (sum == 0) {
			BitoDec.pop();
		}

		let chars = BitoDec.map((num) => String.fromCharCode(num));

		let final = chars.join("");
		document.getElementById("Decoded").innerText = final;
	} else {
		document.getElementById("Decoded").innerText = "Invalid";
	}
}