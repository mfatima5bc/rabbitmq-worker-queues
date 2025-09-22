import { connect } from "amqplib";

(async () => {
  const queue = "task_queue";
  const conn = await connect("amqp://localhost");

  const ch1 = await conn.createChannel();
  await ch1.assertQueue(queue, { durable: true });

  ch1.prefetch(1);

  await ch1.consume(
    queue,
    (msg) => {
      const secs = msg.content.toString().split(".").length - 1;

      console.log(" [x] Received %s", msg.content.toString());
      setTimeout(function () {
        console.log(" [x] Done");
        ch1.ack(msg);
      }, secs * 1000);
    },
    { noAck: false }
  );
})();
