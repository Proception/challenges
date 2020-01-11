import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { mapStateToProps, ConsentView } from '../ConsentView.jsx';


describe('Consent View Component', () => {
  describe('Container Element', () => {
    describe('mapStateToProps', () => {
      it('should map state to props', () => {
        const applicationState = {
          consentReducer: [{name: 'ben', email: 'omasan.esimaje@gmail.com', consents: ['consentA', 'consentB']}]
        };
        const componentState = mapStateToProps(applicationState);
        const expectedObject = {
          totalConsents:[{
            name: 'ben', 
            email: 'omasan.esimaje@gmail.com', 
            consents: ['consentA', 'consentB'] 
          }]};
        expect(componentState).toMatchObject(expectedObject);
      });
    });
  });
  describe('Consent Display Element', () => {
    it('Should match consent view snapshot', () => {
      const component = renderer.create(
        <ConsentView defaultMenu={'consentForm'} getAllConsents={() => {}} />,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Should render side menu with two menu items', () => {
      const tree = renderer.create(
        <ConsentView  getAllConsents={() => {}}/>,
      );
      const instance = tree.root;
      const menuItems = instance.findAllByProps({className: 'side-menu-item-link'});
      const menuLabels = instance.findAllByProps({className: 'text-space'});
      expect(menuItems.length).toEqual(2);
      expect(menuLabels.length).toEqual(2);
      expect(menuLabels[0].children).toEqual(expect.arrayContaining(['Give consent']));
      expect(menuLabels[1].children).toEqual(expect.arrayContaining(['Collected consents']));
    });
    it('Should render consent form with 4 items', () => {
      const totalConsents = [{name: 'ben', email: 'omasan.esimaje@gmail.com', consents: ['consentA', 'consentB']}];
      const consents = [
        {name: '',value: 'Receive Newsletter'},
        {name: '', value: 'Be shown targeted ads'},
        {name: '', value: 'Contribute to anonymous visit statistics'}
      ];
      const tree = renderer.create(
        <ConsentView defaultMenu={'consentForm'} getAllConsents={() => {}} totalConsents={totalConsents} updateConsent={() => {}} saveConsent={() => {}} consents={consents} />,
      );

      const instance = tree.root;
      const consentForm = instance.findByProps({className: 'consent-form'});
      expect(consentForm.children.length).toEqual(4);
    });
    it('Should call viewConsentForm', () => {
      const props = {
        history : []
      };
      let wrapper = shallow(<ConsentView  {...props} getAllConsents={() => {}}/>);
      sinon.spy(wrapper.instance(), 'viewConsentForm');
      wrapper.instance().viewConsentForm();

      expect(wrapper.instance().viewConsentForm.calledOnce)
        .toEqual(true);
    });
    it('Should call viewConsentList', () => {
      const totalConsents = [{name: 'ben', email: 'omasan.esimaje@gmail.com', consents: ['consentA', 'consentB']}];
      const props = {
        history : []
      };
      let wrapper = shallow(<ConsentView  {...props} totalConsents={totalConsents} getAllConsents={() => {}} />);
      sinon.spy(wrapper.instance(), 'viewConsentList');
      wrapper.instance().viewConsentList();
      expect(wrapper.instance().viewConsentList.calledOnce)
        .toEqual(true);
    });
    it('Should change active menu', () => {
      const totalConsents = [{name: 'ben', email: 'omasan.esimaje@gmail.com', consents: ['consentA', 'consentB']}];
      const props = {
        history : []
      };
      let wrapper = shallow(<ConsentView  {...props} totalConsents={totalConsents} getAllConsents={() => {}} />);
      sinon.spy(wrapper.instance(), 'setActiveTab');
      wrapper.instance().setActiveTab('consentList');
      expect(wrapper.instance().setActiveTab.calledOnce)
        .toEqual(true);
    });
  });
});
