import request from '@renderer/request'

export const getRoomDetailApi = () => {
  return request.get('/api/test')
}
