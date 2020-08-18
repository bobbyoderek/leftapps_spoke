import { erroredMessageSender } from "./job-processes";
console.log("Kicking off an errored message resend run");
erroredMessageSender()
  .catch(err => {
    console.log(err);
  })
  .then(() => console.log("finished with the sender"));
console.log("Finishing up an errored message resend run");
