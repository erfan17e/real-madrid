const useTabsMenu = (data) => {
    const filterTabArray = [];
    for (const item of data.groups) {
        const counter = data.data.filter(match => match.type === item);
        filterTabArray.push({ title: item, count: counter.length });
    }
    filterTabArray.unshift({ title: 'all', count: data.data.length });
    return filterTabArray;
}

export default useTabsMenu;