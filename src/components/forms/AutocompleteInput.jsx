import React, { useState, useRef, useEffect } from 'react';

export default function AutocompleteInput({ 
  label,
  name,
  placeholder,
  error,
  register,
  setValue,
  required = false,
  className = "",
  variant = "default",
  suggestions = [],
  onInputChange,
  ...props 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  const baseClasses = "w-full outline-none transition-all duration-300";
  
  const variants = {
    default: `bg-transparent border-b py-4 px-0 text-white placeholder:text-white/50 placeholder:uppercase placeholder:text-[10px] sm:placeholder:text-xs tracking-[0.2em] focus:border-white focus:border-b-2 ${
      error ? 'border-red-400' : 'border-white/40'
    }`,
    contact: `rounded-full bg-white px-6 py-4 text-sm shadow-sm ${
      error ? 'ring-2 ring-red-400 focus:ring-red-500' : 'focus:ring-2 focus:ring-[#99c5df]'
    }`,
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    if (onInputChange) {
      const filtered = onInputChange(value);
      setFilteredSuggestions(filtered);
      setIsOpen(filtered.length > 0);
    }
    
    setHighlightedIndex(-1);
  };

  const handleSelectSuggestion = (suggestion) => {
    setInputValue(suggestion);
    if (setValue) {
      setValue(name, suggestion, { shouldValidate: true });
    }
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < filteredSuggestions.length) {
          handleSelectSuggestion(filteredSuggestions[highlightedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full relative" ref={wrapperRef}>
      {label && (
        <label 
          htmlFor={name}
          className="block text-[10px] tracking-[0.2em] text-white/50 uppercase font-bold mb-2"
        >
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <input
        ref={inputRef}
        id={name}
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => {
          if (filteredSuggestions.length > 0) {
            setIsOpen(true);
          }
        }}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${name}-error` : undefined}
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-controls={`${name}-suggestions`}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        autoComplete="off"
        {...(register ? register(name) : {})}
        {...props}
      />
      
      {/* Suggestions Dropdown */}
      {isOpen && filteredSuggestions.length > 0 && (
        <ul
          id={`${name}-suggestions`}
          role="listbox"
          className={`absolute z-50 w-full mt-1 max-h-60 overflow-auto rounded-lg shadow-lg ${
            variant === 'default' 
              ? 'bg-[#2c3e7e] border border-white/20' 
              : 'bg-white border border-gray-200'
          }`}
        >
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              role="option"
              aria-selected={highlightedIndex === index}
              onClick={() => handleSelectSuggestion(suggestion)}
              onMouseEnter={() => setHighlightedIndex(index)}
              className={`px-4 py-3 cursor-pointer transition-colors ${
                variant === 'default'
                  ? `text-white ${
                      highlightedIndex === index 
                        ? 'bg-white/20' 
                        : 'hover:bg-white/10'
                    }`
                  : `text-gray-800 ${
                      highlightedIndex === index 
                        ? 'bg-[#99c5df]/30' 
                        : 'hover:bg-gray-100'
                    }`
              }`}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      
      {error && (
        <p 
          id={`${name}-error`}
          className="mt-2 text-sm text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
