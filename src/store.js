export default function (prefix, storage) {
  return {
    get(key) {
      let data = storage.getItem(prefix + key)
      if (data !== null) {
        data = JSON.parse(data)
      }
      return data
    },
    set(key, data) {
      storage.setItem(prefix + key, JSON.stringify(data))
    },
    remove(key) {
      storage.removeItem(prefix + key)
    },
    count(key) {
      return (this.get(key) || []).length
    },
    bulk(key, batchSize) {
      const data = this.get(key) || []
      const result = data.splice(0, batchSize)
      this.set(key, data)
      return result
    },
    setProp(key, value) {
      this.set('prop_' + key, value)
    },
    getProp(key) {
      return this.get('prop_' + key)
    },
    push(key, ...data) {
      const val = this.get(key) || []
      val.push(...data)
      this.set(key, val)
    },
    identify() {
      let val = this.get('identify')
      if (val === null) {
        this.set('identify', val = v4())
      }
      return val;
    },
  }
}
