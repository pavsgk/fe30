const cache = new Proxy(
  {
    _successfulReads: 0,
    _successfulWrites: 0,
    _lastReqest: ['none'],
    getStats() {
      console.log(`Cache stats: reads - ${this._successfulReads}, writes - ${this._successfulWrites}, \n last reqest: ${this._lastReqest.join('; ')} \n`, this)
    },
    initLocal() {
      Object.keys(localStorage).forEach(e => {
        if (e.includes('cache_')) {
          if(!this[e.slice(6)]) this[e.slice(6)] = JSON.parse(localStorage[e]);
        }
      });
    },
    clearCache() {
      localStorage.clear();
    }
  },

  {
    set(target, prop, val, receiver) {
      target._successfulWrites++;
      target._lastReqest = ['write', prop, val];
      if (!localStorage.getItem(`cache_${prop}`)) localStorage.setItem(`cache_${prop}`, JSON.stringify(val));
      return Reflect.set(target, prop, val, receiver);
    },
    get(target, prop, receiver) {
      if (target[prop] && prop[0] !== '_' && typeof(target[prop]) !== 'function') {
        target._lastReqest = ['read', prop];
        target._successfulReads++;
      }
      return Reflect.get(target, prop, receiver);
    }
  }
);

export default cache;