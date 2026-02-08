export default function Settings() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-semibold mb-6">Settings</h1>

            <div className="flex gap-6">
                {/* Sidebar */}
                <div className="w-64 bg-white rounded-lg p-4">
                    Sidebar
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-lg p-6">
                    Content
                </div>
            </div>
        </div>
    );
}
