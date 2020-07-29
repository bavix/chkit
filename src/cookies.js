export default function () {
  const cookies = document.cookie.split('; ')
  let results = []
  for (const cookie of cookies) {
    const parts = cookie.split('=')
    results[parts[0]] = parts[1]
  }
  return results
}
