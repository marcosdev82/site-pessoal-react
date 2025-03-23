import React from 'react';
import { Input } from './styles';

interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
}

const Search  = ({ value, onChange, className = "search", placeholder = "Search..." }: SearchProps) => {
  return (
      <Input 
        type="text" 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder}
        data-testid="text-tarefa"
      />
  );
};

export default Search;
