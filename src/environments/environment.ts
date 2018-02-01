// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBLIvaDEcpRWdXPH7jmVURF0Abu3YUOPUM',
    authDomain: 'foodiejournal-1517415680278.firebaseapp.com',
    databaseURL: 'https://foodiejournal-1517415680278.firebaseio.com',
    projectId: 'foodiejournal-1517415680278',
    storageBucket: '',
    messagingSenderId: '174146762373'
  },
  googleMapsKey: 'AIzaSyD_z0Hhy3U-h9og7UKuLtOvM4UxUdDThS0',
  yelpKey:  'Bearer FUNofMVIf4wZoh3SwQ0pGttt08P97wC3Ooz0xuqsy5HY6mavQoXvxA8dUHh7nNdPZ' +
            '-yHtomdWH-edmpgdOZvF6E9I2zvB_PKyuZxGWc_ygyOhPcACUzv3Vtm6kxyWnYx'
};

