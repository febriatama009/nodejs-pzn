// implementasi Event Listener
import { EventEmitter } from "node:events";

const emitter = new EventEmitter();

// Class: EventEmitter
// Event: 'newListener'
// Event: 'removeListener'
emitter.addListener("hello", (name) => {
  return console.log(`Hello ${name}`);
});
emitter.emit("hello", "node");
// emitter.eventNames();
// emitter.getMaxListeners();
// emitter.listenerCount(eventName[(event, listener)]);
// emitter.listeners(eventName);
// emitter.off(eventName, listener);
// emitter.on(eventName, listener);
// emitter.once(eventName, listener);
// emitter.prependListener(eventName, listener);
// emitter.prependOnceListener(eventName, listener);
// emitter.removeAllListeners([eventName]);
// emitter.removeListener(eventName, listener);
// emitter.setMaxListeners(n);
// emitter.rawListeners(eventName);
// emitter[Symbol.for('nodejs.rejection')](err, eventName[event, ...args])
