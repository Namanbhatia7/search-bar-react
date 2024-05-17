import { useCallback } from 'react';

const useKeyboardNavigation = ({
  data,
  selectedIndex,
  setSelectedIndex,
  setSearchQuery,
  onEnter
}) => {
  const handleKeyDown = useCallback(
    (event) => {
    
      if (event.key === 'ArrowDown') {
            event.preventDefault();
            setSelectedIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex));
      } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
      } else if (event.key === 'Enter' && selectedIndex >= 0) {
            event.preventDefault();
            const selectedItem = data[selectedIndex];
        if (selectedItem) {
            const selectedItem = data[selectedIndex];
            setSearchQuery(selectedItem.name);
            onEnter(selectedItem);
        }
      }
    },
    [data, selectedIndex, setSelectedIndex, setSearchQuery, onEnter]
  );

  return { handleKeyDown };
};

export default useKeyboardNavigation;