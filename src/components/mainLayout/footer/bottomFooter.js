'use client';
const BottomFooter = () => {
    const year = new Date().getFullYear();
    return (
        <div className="border-t border-gray-800 pt-8">
            <div className="sm:flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 text-sm mb-4 md:mb-0">
                    © {year} Real Madrid Club de Fútbol. All rights reserved.{'(created by erfan arezi)'}
                </div>
                {/* <div className="flex space-x-6 text-sm"> */}
                <div className="text-sm">
                    <a href="https://t.me/erfan_blackk" className="text-gray-400 hover:text-yellow-400 transition-colors">
                        Contact the developer
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BottomFooter;