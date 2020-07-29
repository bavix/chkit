import CozyHouseKit from './kit.js'

const CozyHouse = new CozyHouseKit()
window.addEventListener('DOMContentLoaded', CozyHouse.dispatch);
window.onunload = CozyHouse.dispatch;

window.cozyHouse = CozyHouse;
export default CozyHouse;
