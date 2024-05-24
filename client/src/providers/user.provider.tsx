import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@stores/index.store";
import Splash from "@pages/splash/splash";
import { getCurrentUser } from "@stores/user.store";

interface IInitialLoadProviderProps {
  children: ReactNode;
}

export default function UserProvider({ children }: IInitialLoadProviderProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getCurrentUser("")).then(() => setLoading(false));
  }, [dispatch]);

  return loading ? <Splash /> : children;
}
