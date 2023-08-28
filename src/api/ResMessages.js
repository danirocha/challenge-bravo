module.exports = {
    SUCCESS: {
        status: 200,
        message: 'Success'
    },
    CREATED: {
        status: 201,
        message: 'Successfully created'
    },
    BAD_REQUEST: {
        status: 400,
        message: 'Bad request'
    },
    UNPROCESSABLE_ENTITY: {
        status: 422,
        message: 'Cannot process data'
    },
    INTERNAL_ERROR: {
        status: 500,
        message: 'Internal server error'
    }
};