export const saveInLocal = store => {
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  store.subscribe((mutation, store) => {
    localStorage.state = JSON.stringify(store)
  })
}
