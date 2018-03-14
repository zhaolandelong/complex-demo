// App.js
import React from 'react';
import { observer } from 'mobx-react';
import { observable, computed, action } from 'mobx';

export const MobxDemo = observer(({ vm }) => (
  <div>
    <h1>This is {vm.title}!</h1>
    <p>First name: <input type="text" value={vm.firstName} onChange={e => vm.setValue('firstName', e)} /></p>
    <p>Last name: <input type="text" value={vm.lastName} onChange={e => vm.setValue('lastName', e)} /></p>
    <p>Full name: {vm.fullName}</p>
    <p><button onClick={vm.doReset}>Reset</button></p>
  </div>
))

export class MobxDemoVM {
  title = 'Mobx & React'
  @observable firstName = '';
  @observable lastName = '';

  @computed get fullName() {
    const { firstName, lastName } = this;
    if (!firstName && !lastName) {
      return 'Please input your name!'
    } else {
      return firstName + ' ' + lastName;
    }
  };

  @action.bound
  setValue(key, event) {
    this[key] = event.target.value;
  }
  @action.bound
  doReset() {
    this.firstName = '';
    this.lastName = '';
  }
}