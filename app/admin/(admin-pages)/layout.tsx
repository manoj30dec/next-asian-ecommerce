import AdminSidebar from "./components/admin-sidebar";
import "./admin-dashboard.scss";
export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="container-fluid g-0" >
            <div className="row g-0">
                <div className="admin-content">
                    <AdminSidebar />
                    <div className="content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}