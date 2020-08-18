import { erroredMessageSender } from "./job-processes";
console.log("Kicking off an errored message resend run");
erroredMessageSender()
  .catch(err => {
    console.log(err);
  })
  .then(() => console.log("finished with the sender"));
console.log("Finishing up an errored message resend run");

function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}
console.log("Pre-sleep");
sleep(100000).then(() => {
  console.log("Sleep has elapsed, shutting down");
});
console.log("Post-sleep");
