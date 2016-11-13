export function enabledUsers (state) {
  return state.users.filter(u => u.enabled);
}
