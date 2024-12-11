const sampleData = [
  {
    id: "1",
    Ticket_Type: "Bug",
    Due_Today_: 3,
    Past_Due_: 0,
    Future_: 5
  },
  {
    id: "2",
    Ticket_Type: "Feature",
    Due_Today_: 1,
    Past_Due_: 2,
    Future_: 6
  },
];

const resolvers = {
  Query: {
    getToDoList: () => sampleData,
    getToDoById: (parent, args) => sampleData.find(toDo => toDo.id === args.id),
  },
  Mutation: {
    addToDo: (parent, { input }) => {
      sampleData.push(input);
      return input;
    },
    updateToDoById: (parent, { id, input }) => {
      const index = sampleData.findIndex(toDo => toDo.id === id);
      if (index !== -1) {
        sampleData[index] = input;
        return input;
      }
      return null;
    },
    deleteToDoById: (parent, { id }) => {
      const index = sampleData.findIndex(toDo => toDo.id === id);
      if (index !== -1) {
        const deleted = sampleData.splice(index, 1);
        return deleted[0];
      }
      return null;
    },
  },
};

export default resolvers;