import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "@/src/redux/store";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

export { useAppDispatch, useAppSelector };