import {Schema} from 'contextable';

/*
* Fake server error response for server error response simulation.
*/

const FAKE_SERVER_RESPONSE = {
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
};

/*
* User model fields.
*/

const fields = {
  name: {
    type: 'String',
    validate: [
      {
        validator: 'presence',
        message: 'is required'
      }
    ]
  }
};

/*
* User model instance methods.
*/

const instanceMethods = {

  /*
  * An instance method which validates model data, posts data to the remote server,
  * loads possible errors from the server and returns `true` if the operation was
  * a success.
  */

  async $save () {
    try {
      await this.$validate(); // validate model data
      // PRETEND we send data to server
      this.$applyErrors(FAKE_SERVER_RESPONSE.errors); // PRETEND we received errors from the server
      return this.isValid(); // operation state
    }
    catch (e) {
      return false; // failor
    }
  }
}

/*
* User schema object.
*/

export const userSchema = new Schema({
  fields,
  instanceMethods
});
