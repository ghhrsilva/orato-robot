export default function Settings() {
    return (
        <div className="min-h-screen bg-gray-50 p-10">
            {/* Page Title */}
            <h1 className="text-3xl font-bold mb-1">Settings</h1>
            <p className="text-gray-500 mb-8">
                Customize your presentation training experience
            </p>

            <div className="flex gap-8">
                {/* Sidebar */}
                <div className="w-64 bg-white rounded-xl p-4 shadow-sm">
                    <ul className="space-y-2">
                        <li className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-medium">
                            App Preferences
                        </li>
                        <li className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                            Permissions
                        </li>
                        <li className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                            Notifications
                        </li>
                        <li className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
                            Account
                        </li>
                    </ul>
                </div>

                {/* Content */}
                <div className="flex-1">
                    {/* Language Card */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold mb-1">App Language</h2>
                        <p className="text-gray-500 mb-4">
                            Select your preferred language for the application
                        </p>

                        <div className="space-y-3">
                            {/* English (selected) */}
                            <div className="flex items-center justify-between border border-blue-500 bg-blue-50 rounded-lg p-4">
                                <span>🇬🇧 English</span>
                                <span className="text-blue-600 font-bold">✓</span>
                            </div>

                            {/* French */}
                            <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                                🇫🇷 French
                            </div>

                            {/* Spanish */}
                            <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                                🇪🇸 Spanish
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
