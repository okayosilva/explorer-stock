import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "./auth.routes";
import { CustomerRoutes } from "./customer.routes";
import { SaleRoutes } from "./sale.routes";
import { USER_ROLE } from "../utils/role";

export function Routes() {
  const { user } = useAuth();

  function AccessRoutes() {
    switch (user?.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;
      case USER_ROLE.SALE:
        return <SaleRoutes />;
      default:
        return <CustomerRoutes />;
    }
  }

  return (
    <BrowserRouter>{user ? <AccessRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
}
