/* eslint-disable import/no-named-as-default */
import {combineReducers} from 'redux';
import doc from './doc'; // 引入auth reduce
// 合并多个reduce
export default combineReducers({
    doc,
});