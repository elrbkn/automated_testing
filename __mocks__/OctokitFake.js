export default class OctokitFake {
  constructor(repos) {
    this.repos = {
      listForUser: async () => {
        return { data: repos };
      },
    };
  }
}
