import { useMemo } from 'react';

// Hook customizado para filtrar dados de '_embedded'
const useFilteredEmbeddedData = (_embedded: { [key: string]: any }, allowedKeys: string[]) => {
  
  const filteredData = useMemo(() => {
    if (!_embedded || typeof _embedded !== 'object') return {};

    return Object.keys(_embedded)
      .filter(key => allowedKeys.includes(key))
      .reduce((acc, key) => {
        acc[key] = _embedded[key];
        return acc;
      }, {} as { [key: string]: any });
  }, [_embedded, allowedKeys]);

  return filteredData;
};

export default useFilteredEmbeddedData;
