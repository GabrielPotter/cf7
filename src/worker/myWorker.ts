import { parentPort } from 'node:worker_threads'

parentPort?.on('message', msg => {
  parentPort?.postMessage('Hello from worker: ' + msg)
})
