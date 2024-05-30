/* eslint-disable no-useless-concat */
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "@stores/index.store";
import { ReactNode } from "react";

interface IAuthorizedPageProps {
  children: ReactNode;
}

export default function AuthorizedPage({ children }: IAuthorizedPageProps) {
  const { user } = useSelector((state: RootState) => state.users);

  const { pathname } = useLocation();

  if (!user) return <Navigate to={"/login" + "?redirect=" + pathname} />;

  if (user.is_admin) {
    return <>{children}</>;
  } else {
    return <Navigate to="/error" />;
  }
}
