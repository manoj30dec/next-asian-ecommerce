import AdminSidebar from "./components/admin-sidebar";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="container-fluid">
            <AdminSidebar />
            {children}
        </div>
    );
}