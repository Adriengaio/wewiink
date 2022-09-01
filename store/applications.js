export const state = () => ({
  list: [
    {
      count: 6, // Nombre de résulstat total
      result: [
        {
          id: 0, // uuid
          firstname: "Sade",
          lastname: "Frame",
          email: "sadeframe@mail.com",
          created_at: "2020/11/07",
          avatar: "i.pravatar.cc/300",
          birthdate: "2001/10/21",
          gender: "M",
          social_networks: [
            {
              id: 1, // uuid
              username: "sadeframe",
              subscriber: 23,
              subscription: 1342,
              post_count: 341,
              engagement_rate: 1.6,
              network: 0,
              is_private: false,
            },
            {
              id: 2, // uuid
              username: "sadeframe",
              subscriber: 975,
              subscription: 45,
              post_count: 2,
              engagement_rate: 0.4,
              network: 1,
              is_private: false,
            },
          ],
        },
        {
          id: 1, // uuid
          firstname: "Sade",
          lastname: "Frame",
          email: "sadeframe@mail.com",
          created_at: "2020/11/07",
          avatar: "i.pravatar.cc/300",
          birthdate: "2001/10/21",
          gender: "F",
          social_networks: [
            {
              id: 1, // uuid
              username: "sadeframe",
              subscriber: 23,
              subscription: 1342,
              post_count: 341,
              engagement_rate: 1.6,
              network: 0,
              is_private: false,
            },
            {
              id: 2, // uuid
              username: "sadeframe",
              subscriber: 975,
              subscription: 45,
              post_count: 2,
              engagement_rate: 0.4,
              network: 1,
              is_private: false,
            },
          ],
        },
        {
          id: 2, // uuid
          firstname: "Sade",
          lastname: "Frame",
          email: "sadeframe@mail.com",
          created_at: "2020/11/07",
          avatar: "i.pravatar.cc/300",
          birthdate: "2001/10/21",
          gender: "M",
          social_networks: [
            {
              id: 1, // uuid
              username: "sadeframe",
              subscriber: 23,
              subscription: 1342,
              post_count: 341,
              engagement_rate: 1.6,
              network: 0,
              is_private: true,
            },
            {
              id: 2, // uuid
              username: "sadeframe",
              subscriber: 975,
              subscription: 45,
              post_count: 2,
              engagement_rate: 0.4,
              network: 1,
              is_private: false,
            },
          ],
        },
        {
          id: 3, // uuid
          firstname: "Sade",
          lastname: "Frame",
          email: "sadeframe@mail.com",
          created_at: "2020/11/07",
          avatar: "i.pravatar.cc/300",
          birthdate: "2001/10/21",
          gender: "M",
          social_networks: [
            {
              id: 1, // uuid
              username: "sadeframe",
              subscriber: 23,
              subscription: 1342,
              post_count: 341,
              engagement_rate: 1.6,
              network: 0,
              is_private: false,
            },
            {
              id: 2, // uuid
              username: "sadeframe",
              subscriber: 975,
              subscription: 45,
              post_count: 2,
              engagement_rate: 0.4,
              network: 1,
              is_private: false,
            },
          ],
        },
        {
          id: 4, // uuid
          firstname: "Sade",
          lastname: "Frame",
          email: "sadeframe@mail.com",
          created_at: "2020/11/07",
          avatar: "i.pravatar.cc/300",
          birthdate: "2001/10/21",
          gender: "M",
          social_networks: [
            {
              id: 1, // uuid
              username: "sadeframe",
              subscriber: 23,
              subscription: 1342,
              post_count: 341,
              engagement_rate: 1.6,
              network: 0,
              is_private: false,
            },
            {
              id: 2, // uuid
              username: "sadeframe",
              subscriber: 975,
              subscription: 45,
              post_count: 2,
              engagement_rate: 0.4,
              network: 1,
              is_private: false,
            },
          ],
        },
        {
          id: 5, // uuid
          firstname: "Sade",
          lastname: "Frame",
          email: "sadeframe@mail.com",
          created_at: "2020/11/07",
          avatar: "i.pravatar.cc/300",
          birthdate: "2001/10/21",
          gender: "O",
          social_networks: [
            {
              id: 1, // uuid
              username: "sadeframe",
              subscriber: 23,
              subscription: 1342,
              post_count: 341,
              engagement_rate: 1.6,
              network: 0,
              is_private: false,
            },
            {
              id: 2, // uuid
              username: "sadeframe",
              subscriber: null,
              subscription: null,
              post_count: null,
              engagement_rate: null,
              network: 1,
              is_private: false,
            },
          ],
        },
      ],
      next: "/api/company/{CompanyId}/applications/?limit=6&page=1",
    },
  ],
});

export const actions = {
  createApplications({ state, commit }, data) {
    //commit("VALIDATE", data);
  },
  deleteApplications({ state, commit }, data) {
    //commit("DELETE", data);
  },
  nextPage() {},
};

export const getters = {
  GET_applicationsList(state) {
    return state.list || [];
  },
};

export const mutations = {
  CREATE(state, pokemon) {
    //pokemon.teamCount++;
    //state.list.push(pokemon);
  },
  DELETE(state, pokemon) {
    //pokemon.teamCount++;
    //state.list.push(pokemon);
  },
};
