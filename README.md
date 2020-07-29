How to use?

Initialize:
```js
window.cozyHouse.setApiUrl('{your cozy-server}')
window.cozyHouse.setToken('{your token}')
```

Send event
```js
window.cozyHouse.push(
  'main', // category name
  'product buy', // event name
  'Apple iPhone 11 Pro 256GB Gold', // event label
  {
    price: 990,
    currency: 'dollar',
    itemId: 410143,
  } 
)
```
