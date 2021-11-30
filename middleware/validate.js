const validationData = (req, res, next) => {
  const { data } = req.body;

  if (data.length !== 4 && typeof data !== Number) {
    res
      .status(409)
      .json({ failed: 'Please enter valid number or number must 4 items' });
  } else {
    next();
  }
};

module.exports = {
  validationData,
};
