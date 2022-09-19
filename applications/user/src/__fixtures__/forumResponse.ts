/*
1441f677-0571-4346-b4ad-4bb8afbb3f28
c0c522f9-7cfe-456c-a6ba-76feb4b41ccd
8e96e597-43dc-4661-89dc-828e2e297cb6
*/

const lastPost = {
  id: "",
  title: "",
  date: "", // ISO
  user: {
    id: "",
    name: "",
  },
};

export const forumResponse = {
  forums: [
    {
      id: "5e7a4d1e-008d-4bfc-bb34-afd6bdcc7877",
      name: "Main Forum",
      description: "",
      threads: 10,
      posts: 100,
      lastPost: {
        ...lastPost,
      },
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
    },
    {
      id: "7e16a2da-0265-42fa-8b7d-2928d3483176",
      name: "Secondary Forum",
      description: "",
      threads: 10,
      posts: 100,
      children: [
        {
          id: "c0cdee83-fc11-4329-9209-8e6fbfd0db6f",
          name: "Secondary Forum Child 1",
          description: "",
        },
        {
          id: "1b5c1bbb-83a6-4730-bac6-34bcd96153e7",
          name: "Secondary Forum Child 2",
          description: "",
        },
      ],
    },
  ],
};
