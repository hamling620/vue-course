export const updateAppName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 0,
        info: {
          appName: 'CMS_SYNC'
        }
      })
    })
  })
}
