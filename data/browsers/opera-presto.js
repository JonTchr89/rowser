const t = true;

module.exports = [
  {
    ua: 'Mozilla/5.0 (iPod touch; CPU iPhone OS 9_3_4 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) OPiOS/14.0.0.104835 Mobile/13G35 Safari/9537.53',
    descriptor: {
      // a: t,
      engine: 'Webkit',
      device: 'iPod',
      ios: t,
      // ipod: t,
      // mobile: t,
      name: 'Opera',
      opera: t,
      osname: 'iOS',
      osversion: '9.3.4',
      version: '14.0',
      webkit: t,
    }
  },
  {
    ua: 'Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14',
    descriptor: {
      // a: t,
      engine: 'Presto',
      engineversion: '2.12.388',
      name: 'Opera',
      opera: t,
      osname: 'Windows',
      osversion: 'Vista || Server 2008',
      presto: t,
      version: '12.14',
      windows: t,
    }
  },
  {
    ua: 'Mozilla/5.0 (Windows NT 6.0; rv:2.0) Gecko/20100101 Firefox/4.0 Opera 12.14',
    descriptor: {
      // a: t,
      engine: 'Gecko',
      engineversion: '2.0',
      gecko: t,
      name: 'Opera',
      opera: t,
      osname: 'Windows',
      osversion: 'Vista || Server 2008',
      version: '12.14',
      windows: t,
    }
  },
  {
    ua: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0) Opera 12.14',
    descriptor: {
      // a: t,
      engine: 'Presto',
      engineversion: '',
      name: 'Opera',
      opera: t,
      osname: 'Windows',
      osversion: 'Vista || Server 2008',
      presto: t,
      version: '12.14',
      windows: t,
    }
  },
  {
    ua: 'Opera/9.80 (Android 4.4.2; Linux; Opera Tablet/ADR-1309251116) Presto/2.11.355 Version/12.10',
    descriptor: {
      // a: t,
      android: t,
      engine: 'Presto',
      engineversion: '2.11.355',
      name: 'Opera',
      opera: t,
      osname: 'Android',
      osversion: '4.4.2',
      presto: t,
      // tablet: t,
      version: '12.10',
    }
  }
];
