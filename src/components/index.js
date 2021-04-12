const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./', false, /\.vue$/);
const valueArr = requireAll(req);
const keyArr = req.keys().map(item => item.match(/.\/(\S*).vue/)[1]);
let obj = {};
for (let idx in keyArr) {
  obj[keyArr[idx]] = valueArr[idx].default;
}
export default obj;
