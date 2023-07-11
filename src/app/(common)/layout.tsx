export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full flex min-h-screen">
      {/* Sidebar */}
      <nav className="bg-gray-800 w-64 flex-shrink-0">
        <div className="px-4 py-6">
          <h1 className="text-white text-2xl font-semibold">
            This is a common layout for Users and Products
          </h1>
        </div>
      </nav>

      {/* Sub header */}
      <div className="flex flex-col flex-1">
        <nav className="bg-gray-400 py-4 px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Common layout sub header</h1>
          </div>
        </nav>

        {/* Content */}
        <div className="flex-1 p-4 overflow-y-auto">{children}</div>
        
      </div>
    </section>
  );
}
