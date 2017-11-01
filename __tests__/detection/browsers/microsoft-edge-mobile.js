const { expect } = require('chai');

const rowser = require('../../../lib/rowser');
const userAgents = require('../../../data/browsers/microsoft-edge-mobile');

describe('Microsoft Edge Mobile browser', () => {
  beforeEach(() => {
    rowser.summary = {};
  });

  after(() => {
    rowser.summary = {};
  });

  userAgents.forEach((item) => {
    describe(`${item.ua}`, () => {
      it('should be detected correctly', () => {
        expect(rowser.detect(item.ua)).to.deep.equal(item.descriptor);
      });
    });
  });
});
