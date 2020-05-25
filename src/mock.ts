import Mock, { MockCbOptions } from 'better-mock'
import CONFIG from './config'

let base = `${CONFIG.API_SERVER}/api/v1`

// 获取清单列表
Mock.mock(`${base}/checklist/list`, {
  'data|1-10': [
    {
      'id': '@guid',
      'name': '@city',
      'createTime|1590413694-1590443694': 1590423694,
      'updateTime|1590413694-1590443694': 1590423694,
    }
  ]
})

// 添加清单
Mock.mock(`${base}/checklist/add`, 'post', (req: MockCbOptions) => {
  console.log(req.body)
  return Mock.mock({
    'id': '@guid',
    'name': '@city',
    'createTime|1590413694-1590443694': 1590423694,
    'updateTime|1590413694-1590443694': 1590423694,
  })
})

// 添加todo
Mock.mock(`${base}/todo/add`, 'post', (req: MockCbOptions) => {
  console.log(req.body)
  return Mock.mock({
    'id': '@guid',
    'name': '@city',
    'createTime|1590413694-1590443694': 1590423694,
    'updateTime|1590413694-1590443694': 1590423694,
  })
})

// 全部
Mock.mock(`${base}/todo/list/all`, 'post', (req: MockCbOptions) => {
  console.log(req.body)
  return Mock.mock({
    'id': '@guid',
    'name': '@city',
    'createTime|1590413694-1590443694': 1590423694,
    'updateTime|1590413694-1590443694': 1590423694,
  })
})

// 全部
Mock.mock(`${base}/todo/list/by_checklist`, 'post', (req: MockCbOptions) => {
  console.log(req.body)
  return Mock.mock({
    'id': '@guid',
    'name': '@city',
    'createTime|1590413694-1590443694': 1590423694,
    'updateTime|1590413694-1590443694': 1590423694,
  })
})

// 今日
Mock.mock(`${base}/todo/list/mytoday`, 'post', (req: MockCbOptions) => {
  console.log(req.body)
  return Mock.mock({
    'id': '@guid',
    'name': '@city',
    'createTime|1590413694-1590443694': 1590423694,
    'updateTime|1590413694-1590443694': 1590423694,
  })
})

// 重要
Mock.mock(`${base}/todo/list/important`, 'post', (req: MockCbOptions) => {
  console.log(req.body)
  return Mock.mock({
    'id': '@guid',
    'name': '@city',
    'createTime|1590413694-1590443694': 1590423694,
    'updateTime|1590413694-1590443694': 1590423694,
  })
})

// 日程
Mock.mock(`${base}/todo/list/schedule`, 'post', (req: MockCbOptions) => {
  console.log(req.body)
  return Mock.mock({
    'id': '@guid',
    'name': '@city',
    'createTime|1590413694-1590443694': 1590423694,
    'updateTime|1590413694-1590443694': 1590423694,
  })
})
