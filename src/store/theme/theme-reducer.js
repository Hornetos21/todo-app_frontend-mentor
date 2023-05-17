import { SET_THEME } from '../const/theme-const'

export const themeReducer = (state = 'light', action) => {
  if (action.type === SET_THEME) return action.theme
  return state
}
