import { parentPort } from 'worker_threads';
import * as fs from 'fs';
import * as path from 'path';

interface Message {
  type: 'get' | 'set';
  key: string;
  value?: any;
}

interface Response {
  type: 'value' | 'error';
  key: string;
  value?: any;
}

const CONFIG_PATH = path.join(__dirname, '..', 'cf7.json');
let config: Record<string, any> = {};

try {
  if (fs.existsSync(CONFIG_PATH)) {
    config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
  }
} catch (e) {
  parentPort?.postMessage({ type: 'error', key: 'init', value: e });
}

parentPort?.on('message', (msg: Message) => {
  try {
    if (msg.type === 'get') {
      parentPort?.postMessage({ type: 'value', key: msg.key, value: config[msg.key] });
    } else if (msg.type === 'set') {
      config[msg.key] = msg.value;
      fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf-8');
      parentPort?.postMessage({ type: 'value', key: msg.key, value: config[msg.key] });
    }
  } catch (e) {
    parentPort?.postMessage({ type: 'error', key: msg.key, value: e });
  }
});