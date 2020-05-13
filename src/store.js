export function store(obj, name="store", context=window) {
  const store = {}
  for (let prop in obj) {
    let ref = `m-${prop}`
    store[ref] = obj[prop]
    Object.defineProperty(store, prop, {
      set: function(v) {
        console.log(v)
        this[ref] = v
        context.dispatchEvent(
          new CustomEvent(`${name}:${prop}`, {
            detail: {prop: prop, value: v}
          })
        )
      },
      get: function() {
        return this[ref]
      }
    })
  }
  return store
}

