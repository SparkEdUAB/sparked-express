// This file contains utility functions that can be used throughout the application.

// Example utility function to generate a random string
export const generateRandomString = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

// Example utility function to format a date
export const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
};

// Example utility function to check if an object is empty
export const isEmptyObject = (obj: object): boolean => {
    return Object.keys(obj).length === 0;
};