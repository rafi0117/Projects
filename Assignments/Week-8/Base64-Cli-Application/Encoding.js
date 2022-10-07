function Encode() {
    let first = document.getElementById("encode").value;
    let second = first.split("");
    let zero = second.map((char) => char.charCodeAt());
    let third = zero.map((num) => num.toString(2));
    let fourth = third.map((add) => {
        while (add.length < 8) {
            add = "0" + add;
        }
        return add;
    });
    let fifth = fourth.join("").split("");
    let sixth = [];
    while (fifth.length != 0) {
        sixth.push(fifth.splice(0, 6).join(""));
    }
    let lastDigit = sixth[sixth.length - 1];
    if (lastDigit.length != 6) {
        var counter = 0;
        while (lastDigit.length < 6) {
            lastDigit = lastDigit + "0";
            counter++;
        }
        sixth[sixth.length - 1] = lastDigit;
    }
    let seventh = sixth.map((str) => parseInt(str, 2));
    let allchar ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let eighth = seventh.map((dec) => allchar[dec]);
    if (counter == 2) {
        eighth.push("=");
    } else if (counter == 4) {
        eighth.push("==");
    }
    let finalEncoding = eighth.join("");
    document.getElementById("Encoded").innerHTML = finalEncoding;
}