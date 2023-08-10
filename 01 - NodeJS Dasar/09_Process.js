import process from "node:process";

console.log(`---This message showed first`);

// Process => The process object provides information about, and control over, the current Node.js process.
// Process events => The process object is an instance of EventEmitter.

// Event: 'beforeExit'
process.on("beforeExit", (code) => {
  console.log(`Process beforeExit with code : ${code}`);
});

// Event: 'disconnect'
// the 'disconnect' event will be emitted when the IPC channel is closed. this will not showed anything

// // Event: 'exit'
process.on("exit", (code) => {
  console.log(`Process exited with code : ${code}`);
});

// Event: 'message'
// not gonna showing anything

// Event: 'rejectionHandled'
// Event: 'uncaughtException'
// ---Warning: Using 'uncaughtException' correctly
// Event: 'uncaughtExceptionMonitor'
// Event: 'unhandledRejection'
// Event: 'warning'
// Event: 'worker'
// ---Emitting custom warnings
// ---Node.js warning names
// Signal events

// process.abort()
// process.allowedNodeEnvironmentFlags
// process.arch
// process.argv
// process.argv0
// process.channel
// ---process.channel.ref()
// ---process.channel.unref()
// process.chdir(directory)
// process.config
// process.connected
// process.constrainedMemory()
// process.cpuUsage([previousValue])
// process.cwd()
// process.debugPort
// process.disconnect()
// process.dlopen(module, filename[, flags])
// process.emitWarning(warning[, options])
// process.emitWarning(warning[, type[, code]][, ctor])
// ---Avoiding duplicate warnings
// process.env
// process.execArgv
// process.execPath
// process.exit([code])
// process.exitCode
// process.getActiveResourcesInfo()
// process.getegid()
// process.geteuid()
// process.getgid()
// process.getgroups()
// process.getuid()
// process.hasUncaughtExceptionCaptureCallback()
// process.hrtime([time])
// process.hrtime.bigint()
// process.initgroups(user, extraGroup)
// process.kill(pid[, signal])
// process.mainModule
// process.memoryUsage()
// process.memoryUsage.rss()
// process.nextTick(callback[, ...args])
// ---When to use queueMicrotask() vs. process.nextTick()
// process.noDeprecation
// process.pid
// process.platform
// process.ppid
// process.release
// process.report
// ---process.report.compact
// ---process.report.directory
// ---process.report.filename
// ---process.report.getReport([err])
// ---process.report.reportOnFatalError
// ---process.report.reportOnSignal
// ---process.report.reportOnUncaughtException
// ---process.report.signal
// ---process.report.writeReport([filename][, err])
// process.resourceUsage()
// process.send(message[, sendHandle[, options]][, callback])
// process.setegid(id)
// process.seteuid(id)
// process.setgid(id)
// process.setgroups(groups)
// process.setuid(id)
// process.setSourceMapsEnabled(val)
// process.setUncaughtExceptionCaptureCallback(fn)
// process.stderr
// ---process.stderr.fd
// process.stdin
// ---process.stdin.fd
// process.stdout
// ---process.stdout.fd
// process.throwDeprecation
// process.title
// process.traceDeprecation
// process.umask()
// process.umask(mask)
// process.uptime()
// process.version
// process.versions
