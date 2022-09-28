import twilio from 'twilio';


const accountSid = "AC342a945318a9bed8a8ff1ebb13db283d";
const authToken = "6c26dfcbbe70119f471fc2592f027e17";
const client = new twilio(accountSid, authToken);

// let smsbody = {
//     body: "this is a reminder",
//     to: "+919014828737"
// }
async function sendSMS(smsbody) {
    try {
        let message = await client.messages
            .create({
                body: smsbody.body,
                from: '+16066127657',
                to: smsbody.to
            })
        console.log(message.sid);
    } catch (error) {
        console.error(error)
    }
}
export default sendSMS;
// sendSMS({
//     body: `Thank you for Signing Up. Please click on the given link to verify your phone. http://192.168.68.133:5000/api/verify/mobile/`,
//     to: "+919703534849"
// })