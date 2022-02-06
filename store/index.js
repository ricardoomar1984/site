export const state = () => ({
  navigation: []
});

export const mutations = {
  setNavigation(state, status) {
    state.navigation = status;
  }
};
