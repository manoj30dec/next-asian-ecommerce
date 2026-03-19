export default function FrontendLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="container-fluid g-0" >
            <div className="row g-0">
                <div className="">
                    <div className="content">
                        <header style={{ backgroundColor: 'red' }}>Frontend Header</header>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}