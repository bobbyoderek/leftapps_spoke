import { erroredMessageSender } from "./job-processes";
console.log("Kicking off an errored message resend run");
setInterval(
  erroredMessageSender()
    .catch(err => {
      console.log(err);
    })
    .then(() => console.log("Set interval ending")),
  30000
);

console.log("Finishing up an errored message resend run");
