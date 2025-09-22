import { connect } from "amqplib";

(async () => {
  const queue = "task_queue";
  const conn = await connect("amqp://localhost");

  let msg = process.argv.slice(2).join(" ") || "Hello World!....";

  const ch1 = await conn.createChannel();
  await ch1.assertQueue(queue, { durable: true });

  ch1.sendToQueue(queue, Buffer.from(msg), {
    persistent: true,
  });
  console.log(" [x] Sent '%s'", msg);
})();
