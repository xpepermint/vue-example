/*
* Fake `add user` route.
*/

exports.create = (req, res) => {
  res.json(
    {
      data: null,
      errors: [
        {
          "path": ["name"],
          "errors": [
            {
              "validator": "existance",
              "message": "already taken",
              "code": 422
            }
          ]
        }
      ]
    }
  );
};
