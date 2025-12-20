import React, { useEffect, useId, useRef, useState } from 'react';

const ColorSelect = ({ value, options, placeholder, onChange, disabled }) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const listId = useId();
  const selected = options.find((option) => String(option.value) === String(value));

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const onSelect = (option) => {
    onChange?.(option.value);
    setOpen(false);
  };

  return (
    <div className="color-select" ref={rootRef}>
      <button
        type="button"
        className="color-select__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((prev) => !prev)}
        disabled={disabled}
      >
        {selected ? (
          <span className="player-tag" style={{ '--player-color': selected.color }}>
            {selected.label}
          </span>
        ) : (
          <span className="color-select__placeholder">{placeholder}</span>
        )}
        <span className="color-select__chevron" aria-hidden="true">
          ▾
        </span>
      </button>
      {open && (
        <div className="color-select__list" role="listbox" id={listId}>
          {options.map((option) => {
            const isSelected = String(option.value) === String(value);
            return (
              <button
                key={option.value}
                type="button"
                className={`color-select__option ${isSelected ? 'color-select__option--selected' : ''}`}
                role="option"
                aria-selected={isSelected}
                onClick={() => onSelect(option)}
              >
                <span className="player-tag" style={{ '--player-color': option.color }}>
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ColorSelect;
