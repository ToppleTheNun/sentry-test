import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createReduxEnhancer as sentryCreateReduxEnhancer } from "@sentry/react";
import { isPresent } from "./typeGuards";

const rootReducer = combineReducers({});

export const store = configureStore({
  reducer: rootReducer,
  enhancers: [
    process.env.REACT_APP_SENTRY_DSN ? sentryCreateReduxEnhancer({}) : null,
  ].filter(isPresent),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
