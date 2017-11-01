const { expect } = require('chai');

const rowser = require('../../../lib/rowser');
const userAgents = require('../../../data/bots/yandex-crawlers');

describe('Yandex Crawlers', () => {
  before(() => {
    rowser.summary = {};
  });

  it('all test user agents should be detected correctly', () => {
    userAgents.forEach((item) => {
      expect(rowser.detect(item.ua)).to.deep.equal(item.descriptor);
      rowser.summary = {};
    });
  });

  // it('every detection result should match its snapshot', (done) => {
  //   userAgents.forEach(item => {
  //     snapshot(rowser.detect(item.ua));
  //     rowser.summary = {};
  //   });

  //   done();
  // }).timeout(8000);
});
