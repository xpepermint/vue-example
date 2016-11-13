export function fetchUsers ({commit}) {
  commit('startFetching');
  return new Promise((resolve) => {
    setTimeout(() => {
      commit('stopFetching');
      commit('addUser', {name: 'John Smith', enabled: true});
      commit('addUser', {name: 'Dona Black', enabled: false});
      resolve();
    }, 2000);
  });
}
