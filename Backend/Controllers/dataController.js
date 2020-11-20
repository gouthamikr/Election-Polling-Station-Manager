const Elections = require("../models/election");
const ElectionData = require("../MockData/database.json");

const getData = async (req, res, next) => {
  const { population, cityType, city } = req.query;

  const page = Number(req.query.page);
  const limit = Number(req.query.limit);

  let sortByPopulation =
    population == "asc" ? 1 : population == "desc" ? -1 : 0;

  if (cityType != undefined && city == undefined) {
    const electionDataCount = await Elections.countDocuments(
      {
        cityType: { $regex: cityType },
      },
      (err) => {
        if (err) console.log(err);
      }
    );

    const finalPage = Math.ceil(electionDataCount / limit);

    try {
      const results = await Elections.find({
        cityType: { $regex: cityType },
      })
        .sort({ population: sortByPopulation })
        .skip((page - 1) * limit)
        .limit(limit);
      return res
        .status(200)
        .send({ data: results, currentpage: page, finalPage });
    } catch (err) {
      console.log(err);
      return res.status(500).send("Something went wrong");
    }
  } else if (cityType == undefined && city != undefined) {
    const electionDataCount = await Elections.countDocuments(
      {
        city: { $regex: city },
      },
      (err) => {
        if (err) console.log(err);
      }
    );
    const finalPage = Math.ceil(electionDataCount / limit);
    try {
      const results = await Elections.find({
        city: { $regex: city },
      })
        .sort({ population: sortByPopulation })
        .skip((page - 1) * limit)
        .limit(limit);
      return res
        .status(200)
        .send({ data: results, currentpage: page, finalPage });
    } catch (err) {
      console.log(err);
      return res.status(500).send("Something went wrong");
    }
  } else if (city != undefined && cityType != undefined) {
    const electionDataCount = await Elections.countDocuments(
      {
        city: { $regex: city },
        cityType: { $regex: cityType },
      },
      (err) => {
        if (err) console.log(err);
      }
    );
    const finalPage = Math.ceil(electionDataCount / limit);
    try {
      const results = await Elections.find({
        city: { $regex: city },
        cityType: { $regex: cityType },
      })
        .sort({ population: sortByPopulation })
        .skip((page - 1) * limit)
        .limit(limit);
      return res
        .status(200)
        .send({ data: results, currentpage: page, finalPage });
    } catch (err) {
      console.log(err);
      return res.status(500).send("Something went wrong");
    }
  } else {
    const electionDataCount = await Elections.countDocuments({}, (err) => {
      if (err) console.log(err);
    });

    const finalPage = Math.ceil(electionDataCount / limit);

    try {
      const results = await Elections.find({})
        .sort({ population: sortByPopulation })
        .skip((page - 1) * limit)
        .limit(limit);
      return res
        .status(200)
        .send({ data: results, currentpage: page, finalPage });
    } catch (err) {
      console.log(err);
      return res.status(500).send("Something went wrong");
    }
  }
};

const cityData = (req, res) => {
  console.log(req.query.id);
  Elections.findById(req.query.id)
    .then((response) => res.json(response))
    .catch((err) => res.status(400).json("Error" + err));
};

module.exports = { getData, cityData };
