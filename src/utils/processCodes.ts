// This file defines process codes for handling responses in the API.

export const processCodes = {
  SUCCESS: {
    code: 200,
    message: 'Request was successful.',
  },
  OK: {
    code: 200,
    message: 'Request was successful.',
  },
  CREATED: {
    code: 201,
    message: 'Resource was created successfully.',
  },
  NO_CONTENT: {
    code: 204,
    message: 'Request was successful but there is no content to return.',
  },
  BAD_REQUEST: {
    code: 400,
    message: 'The request was invalid.',
  },
  UNAUTHORIZED: {
    code: 401,
    message: 'Authentication is required and has failed or has not yet been provided.',
  },
  FORBIDDEN: {
    code: 403,
    message: 'The request was valid, but the server is refusing action.',
  },
  NOT_FOUND: {
    code: 404,
    message: 'The requested resource could not be found.',
  },
  INTERNAL_SERVER_ERROR: {
    code: 500,
    message: 'An unexpected error occurred on the server.',
  },
};
