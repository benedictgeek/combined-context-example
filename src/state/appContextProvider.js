import { combinedContexts } from "combined-contexts";
import { ContextOneProvider } from "./context1";
import { ContextTwoProvider } from "./context2";

let contexts = [ContextOneProvider, ContextTwoProvider];

export const AppContextProvider = combinedContexts(...contexts);
