export const capitalDics = ['一', '二', '三', '四', '五'];

export const degreeDic = ['本科', '硕士'];

export const fileDics = {
  cv: '简历',
  works: '作品集',
  others: '其他文件',
};

export const statusToColor = {
  open: 'orange',
  closed: 'grey',
  applied: 'green',
  toBeReviewed: '#5B8FF9',
  expired: '#D1D5DF',
  toBeResponesed: '#008685',
  refused: '#F08BB4',
  reviewed: '#F6BD16',
  recalled: '#A8BCE1',
  TBR: '#D93026',
  RD: '#008685',
  TBH: '#0EA5E9',
} as const;

export const statusDic = {
  open: '接收申请中',
  closed: '申请已截止',
  applied: '已投递',
  toBeReviewed: 'Pending for review',
  expired: 'Expired',
  toBeResponesed: 'Pending for response',
  refused: 'Refused',
  reviewed: 'Reviewed',
  recalled: 'Recalled',
  TBR: '待验收',
  RD: '已验收',
  TBH: '待交付',
};
