import React from "react";

interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  className = "search",
  placeholder = "Search...",
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      data-testid="text-tarefa"
    />
  );
};

export default Search;
