class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        statck = ""){
            super(message)
            this.statusCode = statusCode
            this.data = null
            this.message = message
            this.success = false
            this.errors = errors

            if (statck){
                thid.stack = statck
            }else{
                Error.captureStackTrace(this, this.construction)
            }
        }
}

export { ApiError }