'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const appStore = {

  store: new JsonStore('./models/app-store.json', { info: {}, manga: [] }),
  collection: 'info',
  array: 'creators',

  getAppInfo() {
    return this.store.findAll(this.collection);
  },

  // manga 
  getManga() {
    return this.store.findAll('manga');  // goes to app-store.json, finds 'manga' (array) and then returns all
  },

  // authors
  getAuthors() {
    return this.store.findAll('authors');
  },

  //about
  getAboutInfo() {
  return this.store.findAll('about'); 
}
}

export default appStore;