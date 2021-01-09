const makeMessagens = require("./detectintent");

const resultQuery = async function (req, res) {
  try {
    const { text } = req.body;

    const resulText = await makeMessagens(text);
    //console.log(resulText);
    1;
    return res.json(resulText);
  } catch (err) {
    console.log(err);
  }
};
module.exports = resultQuery;
