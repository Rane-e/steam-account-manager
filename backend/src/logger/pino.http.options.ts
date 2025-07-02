import { Options as PinoHttpOptions } from 'pino-http';

function truncate(data: unknown, max = 1024): unknown {
  if (data == null) return data;
  const str = typeof data === 'string' ? data : JSON.stringify(data);
  return str.length > max ? str.slice(0, max) + '…' : str;
}

export const pinoHttpOptions: PinoHttpOptions = {
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',

  base: { server_session_id: process.env.SERVER_SESSION_ID },

  serializers: {
    req(req) {
      return {
        id: req.id,
        method: req.method,
        url: req.url,
        headers: {
          'user-agent': req.headers['user-agent'],
        },
      };
    },

    res(res) {
      return undefined;
    },
  },

  customSuccessObject(req, res, response) {
    const resBody = (res as any).locals?.responseBody;
    const reqBody = response.res.req.body;
    const truncatedBody = reqBody
      ? {
          ...reqBody,
          query: truncate(reqBody.query ?? ''),
          variables: truncate(reqBody.variables ?? ''),
        }
      : null;
    const resTime = response.responseTime;
    return {
      reqBody: truncate(truncatedBody, 10000),
      resBody,
      resTime,
      statusCode: res.statusCode,
    };
  },

  redact: {
    paths: [
      'req.headers.authorization',
      'req.headers.cookie',
      'req.body.password',
      'resBody.token',
    ],
    censor: '[REDACTED]',
  },

  transport: {
    targets: [
      {
        target: 'pino-pretty',
        level: 'debug',
        options: { singleLine: true, colorize: true },
      },
      {
        target: 'pino-rotating-file-stream',
        level: 'debug',
        options: {
          filename: 'app.log',
          path: './logs',
          interval: process.env.NODE_ENV === 'test' ? '1m' : '1d',
          size: '100M',
          maxFiles: 14,
          compress: 'gzip',
        },
      },
    ],
  },
};
