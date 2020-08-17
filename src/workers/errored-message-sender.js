import { erroredMessageSender } from "./job-processes";
console.log("Kicking off an errored message resend run");
erroredMessageSender().catch(err => {
  console.log(err);
});
console.log("Finishing up an errored message resend run");
