import React, { useRef, useState } from 'react';
import { useTextField } from 'react-aria';

interface DateInputProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  isRequired?: boolean;
}

const MONTH_NAMES = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export function DateInput({ label, value, onChange, isRequired = false }: DateInputProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(value || '');

  const formatAsTyping = (input: string): string => {
    // Remove all non-digits
    const digitsOnly = input.replace(/\D/g, '');
    
    // Add dashes after day and month
    let formatted = digitsOnly;
    if (digitsOnly.length >= 2) {
      formatted = digitsOnly.slice(0, 2) + '-' + digitsOnly.slice(2);
    }
    if (digitsOnly.length >= 4) {
      formatted = formatted.slice(0, 5) + '-' + digitsOnly.slice(4);
    }
    
    // Limit to maximum length (dd-mm-yyyy = 10 characters)
    if (digitsOnly.length > 8) {
      formatted = formatted.slice(0, 10);
    }
    
    return formatted;
  };

  const parseInputDate = (input: string): Date | null => {
    // Try different date formats
    const formats = [
      /^(\d{1,2})-(\d{1,2})-(\d{2})$/, // dd-mm-yy
      /^(\d{1,2})-(\d{1,2})-(\d{4})$/, // dd-mm-yyyy
      /^(\d{1,2})-([A-Za-z]{3})-(\d{4})$/ // dd-mmm-yyyy
    ];

    for (const format of formats) {
      const match = input.match(format);
      if (match) {
        const [_, day, month, year] = match;
        let monthNum: number;
        
        if (month.length === 3) {
          monthNum = MONTH_NAMES.findIndex(m => m.toLowerCase() === month.toLowerCase()) + 1;
        } else {
          monthNum = parseInt(month);
        }
        
        const fullYear = year.length === 2 ? 2000 + parseInt(year) : parseInt(year);
        
        try {
          const date = new Date(fullYear, monthNum - 1, parseInt(day));
          // Validate that the date is valid (e.g., not 31-02-2024)
          if (date.getMonth() === monthNum - 1) {
            return date;
          }
          return null;
        } catch {
          return null;
        }
      }
    }
    return null;
  };

  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = MONTH_NAMES[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleInputChange = (value: string) => {
    const formattedValue = formatAsTyping(value);
    setInputValue(formattedValue);
    
    // Only trigger onChange if we have a complete, valid date
    const date = parseInputDate(formattedValue);
    if (date && onChange) {
      onChange(formattedValue);
    }
  };

  const { labelProps, inputProps } = useTextField(
    {
      label,
      isRequired,
      value: inputValue,
      onChange: handleInputChange,
      onBlur: () => {
        const date = parseInputDate(inputValue);
        if (date) {
          const formattedDate = formatDate(date);
          setInputValue(formattedDate);
          if (onChange) {
            onChange(formattedDate);
          }
        }
      }
    },
    ref
  );

  return (
    <div className="date-field">
      {label && <label {...labelProps}>{label}</label>}
      <input
        {...inputProps}
        ref={ref}
        className="date-field-input"
        placeholder="DD-MM-YYYY"
        maxLength={10}
      />
    </div>
  );
}
