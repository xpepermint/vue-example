import {ReactiveModel} from 'vue-rawmodel';

export class User extends ReactiveModel {
  constructor (data = {}) {
    super(data);
    this.defineField('name', {
      type: 'String',
      validate: [
        {
          validator: 'presence',
          message: 'is required'
        }
      ],
    });
    this.populate(data);
  }
}
