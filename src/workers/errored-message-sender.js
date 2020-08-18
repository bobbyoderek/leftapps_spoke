import { erroredMessageSender } from "./job-processes";

function doErroredMessageSender() {
  console.log("Kicking off an errored message resend run");

  erroredMessageSender()
    .catch(err => {
      console.log(err);
    })
    .then(() => console.log("Interior send compelte messeage"));

  console.log("Finishing up an errored message resend run");
}

setInterval(doErroredMessageSender(), 30000);
