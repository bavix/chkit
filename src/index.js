import CozyHouseKit from './kit.js'

const CozyHouse = new CozyHouseKit()
window.addEventListener('DOMContentLoaded', CozyHouse.dispatch);
window.onunload = (event) => {
  if (navigator.sendBeacon) {
    CozyHouse.dispatch(true);
  }
}

window.cozyHouse = CozyHouse;
export default CozyHouse;
