import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/cp/login');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 border border-[#29b8bd] rounded-md shadow-sm text-sm font-medium text-[#29b8bd] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#29b8bd] transition-colors"
                    >
                        Logout
                    </button>
                </div>
            </header>
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
                            <span className="text-gray-500 text-lg">Dashboard content will go here.</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
