import winston from 'winston';
import 'winston-daily-rotate-file';

const transports = [];
transports.push(new winston.transports.Console());

const fileTransport = new winston.transports.DailyRotateFile({
    filename: 'logs/Kbot-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxSize: '20m',
});
transports.push(fileTransport);

export const LoggerInstance = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYY-MM-DD HH:mm:ss',
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json(),
    ),
    transports,
    level: 'debug',
});

fileTransport.on('rotate', (_, newFilename) => {
    LoggerInstance.info(`Log file rotation: ${newFilename}`);
});
