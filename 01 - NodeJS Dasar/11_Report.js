// Delivers a JSON-formatted diagnostic summary, written to a file.
process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.report.filename = "./foo.json"; //write the report into foo.json

function sampleError() {
  throw new Error("anjay");
}

sampleError();
