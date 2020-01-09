import React from 'react';
import sinon from 'sinon';
import renderer from 'react-test-renderer';

import ConsentForm from '../ConsentForm.jsx';
import {
  preventDefault,
  props,
  state,
  consents,
  correctEventSelectedConsents,
  correctEventName,
  correctEventEmail,
  wrongEventEmail,
  wrongEventName
} from '../../../../../__mocks__/consentMocks';

describe('Consent Form Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ConsentForm state={state} {...props} />);
  });
  it('renders as expected', () => {
    const component = renderer.create(
      <ConsentForm totalConsents={[]} updateConsent={() => { }} saveConsent={() => { }} consents={[]} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('calls handleInput(e) with the right email and name values', () => {
    sinon.spy(wrapper.instance(), 'handleInput');

    wrapper.instance().handleInput(correctEventEmail);
    wrapper.instance().handleInput(correctEventName);

    expect(wrapper.instance().handleInput.calledTwice)
      .toEqual(true);
    expect(wrapper.instance().handleInput.calledWith(correctEventEmail)).toEqual(true);
    expect(wrapper.instance().handleInput.calledWith(correctEventName)).toEqual(true);
  });
  it('calls handleSelectedConsents(e) with selected values', () => {
    sinon.spy(wrapper.instance(), 'handleSelectedConsents');

    wrapper.instance().handleSelectedConsents(correctEventSelectedConsents);

    expect(wrapper.instance().handleSelectedConsents.calledOnce)
      .toEqual(true);
    expect(
      wrapper.instance().handleSelectedConsents.calledWith(correctEventSelectedConsents)
    ).toEqual(true);
  });
  it('calls handleInput(e) with the wrong email value', () => {
    sinon.spy(wrapper.instance(), 'handleInput');

    wrapper.instance().handleInput(wrongEventEmail);

    expect(wrapper.instance().handleInput.calledOnce)
      .toEqual(true);
    expect(wrapper.instance().handleInput.calledWith(wrongEventEmail)).toEqual(true);
  });
  it('calls handleInput(e) with the wrong name value', () => {
    sinon.spy(wrapper.instance(), 'handleInput');

    wrapper.instance().handleInput(wrongEventName);

    expect(wrapper.instance().handleInput.calledOnce)
      .toEqual(true);
    expect(wrapper.instance().handleInput.calledWith(wrongEventName)).toEqual(true);
  });
  it('should submit successfully with correct input values', () => {
    wrapper = shallow(<ConsentForm {...props} />);
    sinon.spy(wrapper.instance(), 'handleFormSubmit');

    wrapper.instance().handleInput(correctEventEmail);
    wrapper.instance().handleInput(correctEventName);
    wrapper.instance().handleSelectedConsents(correctEventSelectedConsents);

    wrapper.instance().handleFormSubmit(preventDefault);

    expect(wrapper.instance().handleFormSubmit.calledOnce)
      .toEqual(true);
    expect(wrapper.instance().handleFormSubmit.calledWith(preventDefault)).toEqual(true);
  });
  it('should not submit with wrong input values', () => {
    wrapper = shallow(<ConsentForm {...props} />);
    sinon.spy(wrapper.instance(), 'handleFormSubmit');
    wrapper.instance().handleInput(correctEventName);
    wrapper.instance().handleInput(wrongEventEmail);

    wrapper.instance().handleFormSubmit(preventDefault);

    expect(wrapper.instance().handleFormSubmit.calledOnce)
      .toEqual(true);
    expect(wrapper.instance().handleFormSubmit.calledWith(preventDefault)).toEqual(true);
  });
  it('should be able select and deselect consents sucessfully', () => {
    sinon.spy(wrapper.instance(), 'handleSelectedConsents');

    wrapper.instance().handleSelectedConsents(correctEventSelectedConsents);
    wrapper.instance().handleSelectedConsents(correctEventSelectedConsents);

    expect(wrapper.instance().handleSelectedConsents.calledTwice)
      .toEqual(true);
    expect(
      wrapper.instance().handleSelectedConsents.calledWith(correctEventSelectedConsents)
    ).toEqual(true);
  });
});
