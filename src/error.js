function throwError(message) {
    throw new Error(`MD-as-code error: ${message}`);
}

module.exports = throwError;