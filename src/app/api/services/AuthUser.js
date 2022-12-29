import state from '../../utils/localStorage'
import Http from '../http'

export const login = async (payload) => {
  const { data } = await Http.post(`/login`, payload)
  return data
}

export const logout = () => {
  state.remove('token')
  state.remove('user')
}
