// digunakan untuk membaca input dari user

//using promises api
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

//using callback api
// import * as readline from "node:readline";

// ---------------------------
// Readline Callback
// ---------------------------

// Class: InterfaceConstructor
// ---Event: 'close'
// ---Event: 'line'
// ---Event: 'history'
// ---Event: 'pause'
// ---Event: 'resume'
// ---Event: 'SIGCONT'
// ---Event: 'SIGINT'
// ---Event: 'SIGTSTP'
// ---rl.close()
// ---rl.pause()
// ---rl.prompt([preserveCursor])
// ---rl.question(query[, options], callback)
// ---rl.resume()
// ---rl.setPrompt(prompt)
// ---rl.getPrompt()
// ---rl.write(data[, key])
// ---rl[Symbol.asyncIterator]()
// ---rl.line
// ---rl.cursor
// ---rl.getCursorPos()

// ---------------------------
// Readline Promises API
// ---------------------------

// Class: readlinePromises.Interface
// ---rl.question(query[, options])

// Class: readlinePromises.Readline
// ---new readlinePromises.Readline(stream[, options])
// ------rl.clearLine(dir)
// ------rl.clearScreenDown()
// ------rl.commit()
// ------rl.cursorTo(x[, y])
// ------rl.moveCursor(dx, dy)
// ------rl.rollback()

// readlinePromises.createInterface(options)
// ---Use of the completer function
