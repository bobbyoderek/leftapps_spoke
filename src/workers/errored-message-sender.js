import { erroredMessageSender } from "./job-processes";

function doErroredMessageSender() {
  console.log("Kicking off an errored message resend run");

  erroredMessageSender()
    .catch(err => {
      console.log(err);
    })
    .then(() => console.log("Interior send complete messeage"));

  console.log("Finishing up an errored message resend run");
}

function killTime() {
  console.log("We reached the end of the break, shutting down!");
  process.exit();
}

setTimeout(doErroredMessageSender, 1000);
setTimeout(killTime, 240000);
