import Instance from './resource';

export default {
  // 获取微信分享配置
  getShareConfig(params) {
    return Instance.get('/get_share_conf', { params });
  }
};
