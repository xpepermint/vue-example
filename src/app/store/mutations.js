export function startFetching (state) {
  state.isFetching = true;
}

export function stopFetching (state) {
  state.isFetching = false;
}

export function addUser (state, data) {
  state.users.push(data);
}
