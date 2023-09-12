const {
  createSlice,
  configureStore,
  combineReducers,
} = require("@reduxjs/toolkit");

const UserReg = createSlice({
  name: "user",
  initialState: { value: [] },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

const ServiceRedux = createSlice({
  name: "items",
  initialState: { items: [] },
  reducers: {
    addService: (state, action) => {
      state.items.push(action.payload);
    },
    remove: (state, action) => {
      state.items.splice(action.payload, 1);
    },
  },
});

const postJobRedux = createSlice({
  name: "postedJob",
  initialState: {
    postedJob: [
      {
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        location: "New York, USA",
        total_duration: "6 months",
        skills: ["JavaScript", "React", "Node.js"],
        expertise: "Web Development",
      },
      {
        title: "Project 2",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        location: "San Francisco, USA",
        total_duration: "9 months",
        skills: ["Python", "Django", "PostgreSQL"],
        expertise: "Backend Development",
      },
    ],
  },
  reducers: {
    addJob: (state, action) => {
      state.postedJob.push(action.payload);
    },
    removeJob: (state, action) => {
      state.postedJob.splice(action.payload, 1);
    },
  },
});

const rootReducer = combineReducers({
  user: UserReg.reducer,
  items: ServiceRedux.reducer,
  postedJob: postJobRedux.reducer,
});
const store = configureStore({ reducer: rootReducer });

export const { addService, remove } = ServiceRedux.actions;
export const { add } = UserReg.actions;
export const { addJob, removeJob } = postJobRedux.actions;
export default store;
