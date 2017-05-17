type Hotel = {
  'name': string,
  'city': string,
  'address': string,
  'stars': number,
  'phone': string,
  'images': string[],
  'socnet': {
    'following': number,
    'followers': number
  },
  'temperature':{
    'air': number,
    'water': number
  }
};
