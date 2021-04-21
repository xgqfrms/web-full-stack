// vue errorHandler

class ErrorHandler {
    constructor (name) {
        this.name = name || ErrorHandler.name;
    }
    onError (err, vm, info) {
        // Sentry 错误上报
        console.log('❌ Vue error', err);
        console.log('❌ Vue vm', vm);
        console.log('❌ Vue info', info);
    }
}

export default ErrorHandler;
