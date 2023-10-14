import winston from "winston";

const setupLogger = () => {
  // Configure logger color
  const winstonFormat = winston.format.combine(
    winston.format.colorize({
      all: true,
    }),
    winston.format.label({
      label: "🤖",
    }),
    winston.format.timestamp({
      format: "DD/MM/YYYY HH:mm:ss",
    }),
    winston.format.printf(
      (info) =>
        `${info.label} ${info.timestamp} | ${info.level} : ${info.message}`,
    ),
  );

  // Errors outside express.js scope
  winston.exceptions.handle(
    new winston.transports.File({
      filename: "logs/ns-excepts.log",
      handleExceptions: true,
    }),
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), winstonFormat),
    }),
  );

  // Errors within express.js scope
  winston.add(new winston.transports.File({ filename: "logs/ns-logs.log" })); // Save logs to file
  winston.add(
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), winstonFormat),
    }),
  ); // Show logs to console
};

export default setupLogger;
