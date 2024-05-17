export const filterData = (data, query) => {
    if (!query) {
      return data;
    }
  
    const lowercasedQuery = query.toLowerCase();
  
    return data.map((item) => {
      const matchInItems = item.items.some((item) => item.toLowerCase().includes(lowercasedQuery));
      return {
        ...item,
        matchInItems,
      };
    }).filter((item) => {
      return (
        item.name.toLowerCase().includes(lowercasedQuery) ||
        item.address.toLowerCase().includes(lowercasedQuery) ||
        item.pincode.toLowerCase().includes(lowercasedQuery) ||
        item.matchInItems
      );
    });
  };