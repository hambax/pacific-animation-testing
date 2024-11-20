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
          return new Date(fullYear, monthNum - 1, parseInt(day));
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

  const { labelProps, inputProps } = useTextField(
    {
      label,
      isRequired,
      value: inputValue,
      onChange: (value) => {
        setInputValue(value);
        const date = parseInputDate(value);
        if (date && onChange) {
          onChange(formatDate(date));
        }
      },
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
        placeholder="DD-MMM-YYYY"
      />
    </div>
  );
}
