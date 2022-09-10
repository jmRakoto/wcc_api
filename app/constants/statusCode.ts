const statusCode = {
    success: {
        code: 200,
        message: 'success'
    },
    noContent: {
        code: 204,
        message: 'success'
    },
    badRequest: {
        code: 400,
        message: 'bad request'
    },
    unauthorized: {
        code: 401,
        message: 'unauthorized'
    },
    notFound: {
        code: 404,
        message: 'not found'
    },
    conflict: {
        code: 409,
        message: 'conflict'
    },
    locked: {
        code: 423,
        message: 'locked'
    },
    serverError: {
        code: 500,
        message: 'server error'
    }
}

export default statusCode;