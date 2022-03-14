import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primaryColor: '#2750E6',
        secondaryColor: '#6E89EA',
    },
    fontSizes: {
        small: '1rem',
        medium: '2rem',
        large: '3rem',
    } 
};

interface Props  {
    children: React.ReactNode
};

const Theme = ({ children }: Props) => (<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export default Theme;