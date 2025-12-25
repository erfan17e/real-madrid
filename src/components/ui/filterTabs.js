const FilterTabs = ({ tabs, currentTab, changeTabMethod }) => {
    // console.log(tabs);
    return (
        <div className="pb-12">
            <div className="mx-auto w-fit bg-white rounded-full p-2 shadow-lg border border-gray-200 flex items-center gap-x-2 flex-wrap justify-center max-sm:rounded-2xl">
                {
                    tabs.map(tab => <button className={`max-sm:w-44 flex justify-center items-center px-4 py-3 rounded-full font-bold transition-all duration-300 whitespace-nowrap ${currentTab === tab.title ? 'bg-yellow-500 text-white' : 'text-gray-600 hover:text-yellow-500 hover:bg-gray-100'}`}
                        key={tab.title} onClick={() => { changeTabMethod(tab.title) }}>
                        <span>
                            <span>
                                {tab.title.toUpperCase()}
                            </span>
                            <span className="ml-2 text-sm bg-gray-200 px-2 py-1 rounded-full">
                                {tab.count}
                            </span>
                        </span>
                    </button>)
                }
            </div>
        </div>
    )
}

export default FilterTabs;