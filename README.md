# RabbitMQ Worker Queue Learning Project

This project was created to learn and understand basic concepts related to worker queues in RabbitMQ.

## Purpose

- Explore RabbitMQ worker queue patterns
- Understand message distribution between workers
- Learn basic producer/consumer architecture
- Practice message acknowledgments and persistence

## Key Concepts Covered

- Work queues (Task queues)
- Message acknowledgment
- Message durability
- Fair dispatch
- Round-robin distribution

## Project Structure

- `new-task.js` - Producer that sends tasks to the queue
- `worker.js` - Consumer that processes tasks from the queue

## Prerequisites

- Node.js
- RabbitMQ Server

## References

- [RabbitMQ Work Queues Tutorial](https://www.rabbitmq.com/tutorials/tutorial-two-javascript.html)
