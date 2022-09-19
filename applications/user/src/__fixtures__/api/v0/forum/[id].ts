const lastPost = {
  id: "",
  title: "",
  date: "", // ISO
  user: {
    id: "",
    name: "",
  },
};

const FakeUser = {
  id: "5b8b93c7-bde2-43af-b4d7-6bce56bff5ea",
  name: "Chris Naismith",
};

export const response = {
  id: "5e7a4d1e-008d-4bfc-bb34-afd6bdcc7877",
  name: "Main Forum",
  description: "",
  totalThreads: 10,
  totalPosts: 100,
  lastPost: {
    ...lastPost,
  },
  threads: [
    {
      id: "8a32bfc1-85b3-42ce-9124-960518a8b3a3",
      name: "This is a sample thread post",
      totalResponses: 10,
      author: {
        ...FakeUser,
      },
      lastResponse: {
        ...FakeUser,
      },
    },

    {
      id: "563beb7d-fcb8-40da-813b-dccc7e7cc1b1",
      name: "Another post",
      totalResponses: 7,
      author: { ...FakeUser },
      lastResponse: { ...FakeUser },
    },
  ],
  children: [
    {
      id: "88d3bfee-089c-4650-b190-a782eeb05c55",
      name: "Main Forum Child 1",
      description: "",
      lastPost: {
        ...lastPost,
      },
    },
    {
      id: "909702dd-ccb4-4419-9f71-a821ba2be241",
      name: "Main Forum Child 2",
      description: "",
      lastPost: {
        ...lastPost,
      },
    },
    {
      id: "48e421fb-a747-495b-b396-40140566f64f",
      name: "Main Forum Child 3",
      description: "",
      lastPost: {
        ...lastPost,
      },
    },
  ],
};
