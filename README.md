# RabbitMQ Worker Queue Learning Project

A hands-on project to explore and understand core concepts of worker queues using RabbitMQ with Node.js.

## Overview

This project demonstrates how to implement a simple producer/consumer (worker queue) pattern with RabbitMQ. It covers essential messaging concepts such as task distribution, message durability, acknowledgments, and fair dispatching.

## Objectives

- Learn how RabbitMQ work queues operate
- Understand how messages are distributed among multiple workers
- Implement reliable message delivery with acknowledgments and persistence
- Practice scaling consumers for parallel task processing

## Features Covered

- **Work Queues (Task Queues):** Distribute time-consuming tasks among multiple workers.
- **Message Acknowledgment:** Ensure tasks are not lost if a worker crashes.
- **Message Durability:** Persist messages to survive RabbitMQ restarts.
- **Fair Dispatch:** Prevent workers from being overloaded.
- **Round-Robin Distribution:** Evenly distribute tasks among available workers.

## Project Structure

- `new-task.js` — Producer script that sends tasks to the queue.
- `worker.js` — Consumer script that processes tasks from the queue.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [RabbitMQ Server](https://www.rabbitmq.com/download.html) (can be run via Docker)

## Getting Started

1. **Start RabbitMQ using Docker Compose:**
  ```sh
  docker compose up
  ```

2. **Send tasks to the queue (Producer):**
  ```sh
  node new-task.js
  ```

3. **Start a worker to process tasks (Consumer):**
  ```sh
  node worker.js
  ```

4. **Scale up by running additional workers in new terminals:**
  ```sh
  node worker.js
  ```

## Additional Resources

- [RabbitMQ Work Queues Tutorial (JavaScript)](https://www.rabbitmq.com/tutorials/tutorial-two-javascript.html)
- [RabbitMQ Documentation](https://www.rabbitmq.com/documentation.html)
