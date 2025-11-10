import React, { useEffect, useRef, useState } from 'react';

const usePasswordField = (setVisible) => {
    const ref = useRef(null);
    const timeoutRef = useRef(null);

    // Hide when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setVisible(false);
        }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [setVisible]);

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
        setVisible(false);
        }, 2000);
    };

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
        }
    };

    return { ref, handleMouseLeave, handleMouseEnter };
};

export default usePasswordField;