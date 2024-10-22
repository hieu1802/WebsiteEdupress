import React, { useState } from 'react';
import styles from './Dropdown.module.css'; // Import CSS Module

const Dropdown = ({ onEdit, onHide, onDelete }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.container}>
            <button
                onClick={toggleDropdown}
                className={styles.button} // Sử dụng CSS Module
                type="button"
            >
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div className={styles.menu}>
                    <ul>
                        <li>
                            <a onClick={onEdit} className={styles.menuItem}>Edit</a>
                            {/* <button onClick={onEdit} className={styles.menuItem}>Edit</button> */}
                        </li>
                        <li>
                            <a onClick={onDelete} className={styles.menuItem}>Delete</a>
                        </li>
                        <li>
                            <a onClick={onHide} className={styles.menuItem}>Hide</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
