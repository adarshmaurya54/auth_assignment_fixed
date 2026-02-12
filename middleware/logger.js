const requestLogger = (req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} -> ${res.statusCode} (${duration}ms)`);
  });

  // we should call next() method here, without next(), express stop right there.
  next();
};

module.exports = requestLogger;
