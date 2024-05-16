import { useEffect } from "react"
import { Home } from "../pages/home";
import { Route, Routes, useNavigate } from "react-router-dom";
import { OrgForm, PersonForm } from "../pages/form";

export const routes = [
  { path: "/home", component: <Home /> },
  { path: "/form-organizational", component: <OrgForm /> },
  { path: "/form-person", component: <PersonForm /> },
]

const Redirect = ({ to }: { to: string }) => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}

export const AppRouter = () => {

  return (
    <Routes>
      {routes?.map(item => {
        return <Route key={item.path} path={item?.path} element={item.component} />
      })}
      <Route path="*" element={<Redirect to={"/home"} />} />
    </Routes>
  )
}