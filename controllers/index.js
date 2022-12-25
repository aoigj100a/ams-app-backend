// model 會傳送撈回來的資料，在 controller 處理之後，給對應的 route

const testMockup = [{ name: "tobi" }, { name: "loki" }, { name: "jane" }];

function getTestMockup(req, res, next) {
  res.send(testMockup);
  next();
}

module.exports = {
  getTestMockup,
};
