/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const INCREASE = 'INCREASE';
export const REDUCE = 'REDUCE';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const VALUE = 'VALUE';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */

export function addTodo(text, count) {
  return { type: ADD_TODO, text, count }
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function counter(count) {
  return {type: INCREASE, count}
}

export function reduce(count) {
  return {type: REDUCE, count}
}

export function barValue(value) {
  return {type: VALUE, value}
}
