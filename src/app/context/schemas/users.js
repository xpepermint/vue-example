import 'isomorphic-fetch';
import {Schema} from 'contextable';

export const userSchema = new Schema({
  fields: {
    name: {
      type: 'String',
      validate: [
        {
          validator: 'presence',
          message: 'is required'
        }
      ]
    }
  },
  instanceMethods: {
    async $save () {
      try {
        await this.$validate(); // validate
        await fetch('/users', {method: 'POST'}) // create
          .then((r) => r.json())
          .then((r) => this.$applyErrors(r.errors)); // load errors from server
        return this.isValid(); // success
      }
      catch (e) {
        return false; // failor
      }
    }
  }
});
