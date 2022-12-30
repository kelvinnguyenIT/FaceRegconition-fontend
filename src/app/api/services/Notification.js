import Http from '../http'

export const storeNotification = async (payload) => {
  const { data } = await Http.post(`/notifications`, payload)
  return data
}
