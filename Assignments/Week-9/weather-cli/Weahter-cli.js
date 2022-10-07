import axios from "axios";
import readlineSync from "readline-sync";

async function getWeather() {
	try {
		let cityname = readlineSync.question("Enter Cityname : ");
		while (!cityname) {
			cityname = readlineSync.question(
				"City name cant be Empty please Re-enter the Name : "
			);
		}
		let res = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=a06f7a0d0fae7926aa6e13224d71923f`
		);
		// console.log(res.data);


		let input = readlineSync.questionInt(
			"\n \nEnter 0 to Exit \nEnter 1 to Check Min Temperature \nEnter 2 to Check Max Temperature \nEnter 3 to Check Humidity \nEnter 4 to Check Sunrise Time \n5 to Check Sunset Time\n"
		);
		switch (input) {
			case 0: {
				console.log(`Exit`);
				process.exit();
				user();
				break;
			}
			case 1: {
				console.log(
					`The Temperature in ${cityname} is ${(
						res.data.main.temp_min - 273
					).toFixed(2)} Centigrade`
				);
				user();
				break;
			}

			case 2: {
				console.log(
					`The Temperature in ${cityname} is ${(
						res.data.main.temp_max - 273
					).toFixed(2)} Centigrade`
				);
				user();
				break;
			}

			case 3: {
				console.log(`Humidity  is ${res.data.main.humidity}`);
				user();
				break;
			}

			case 4: {
				console.log(`Sunrise Time  ${res.data.sys.sunrise}`);
				user();
				break;
			}

			case 5: {
				console.log(`Sunset Time  is ${res.data.sys.sunset}`);
				user();
				break;
			}

			default: {
				console.log("please select value in between given options");
			}
		}
	} catch (error) {
		console.error(error);
		console.error(err.response.data);
	}
}
getWeather();

function user() {
	let input = readlineSync.question(
		`\n \nDo you want to continue? \nEnter "y" to continue \nEnter "n" to exit:- `
	);
	// if (input === "y" || input === "n" || input === "yes" || input === "no") {
	if (input === "y" || input === "yes" || input === "Y") {
		getWeather();
	} else if (input === "n" || input === "no" || input === "N") {
		console.log(`Exit`);
		process.exit();
		// }
	} else {
		console.log(`invalid input`);
	}
}