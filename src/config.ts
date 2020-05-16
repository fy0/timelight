/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */

import merge from 'lodash/merge'

const hostname = window.location.hostname

const CONFIG = {
  API_SERVER: `http://${hostname}:9601`,
  PROJECT_NAME: '宙光',
  PROJECT_NAME_EN: 'timelight'
}

try {
  const pri = require('./private.js')
  merge(CONFIG, pri.default)
} catch (e) {
  console.info('Failed to load private configuration!')
}

export default CONFIG
