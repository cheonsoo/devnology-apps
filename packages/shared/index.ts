// import * as moment from 'moment';

export const consoleLog = () => {
  console.log('%c DEVNOLOGY', 'color: green;  font-size: 100px; font-weight: 900;');
  console.log(
    '                                                                   You only have one %cChance',
    'color: yellow'
  );

  //     __
  //     |  |                                       ____
  // ____  |  |____    ___  _   _ ____     ______   / ___ |
  // /   __| |  ___  \  /  _ ' | | ' __  \  |   ___| |  ____|
  // |  |__  |  |  |  | | (_|  | |  |  |  | |  |___  | |____
  // \_____| |__|  |__| \____,_| |__|  |__| |______| \______|

  console.log('         __');
  console.log('        |  |                                       ____');
  console.log('  ____  |  |____     ___ _   _ ____     ______   / ___ |');
  console.log(" /  __| |  ___   \\ /  _ ' | | ' __  \\  |   ___| |  ____|");
  console.log('|  |__  |  |  |  | | (_|  | |  |  |  | |  |___  | |____');
  console.log(' \\____| |__|  |__| \\____,_| |__|  |__| |______| \\______|');
};

// export const logTime = () => {
//   console.log(moment().format('YYYY-MM-DD HH:MM:SS'));
// };

export const sayHi = (userName: string) => console.log(`Hi ${userName}`);
