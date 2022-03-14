import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primaryColor: '#2750E6',
        secondaryColor: '#6E89EA',
    },
};

interface Props  {
    children: React.ReactNode
};

const Theme = ({ children }: Props) => (<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export default Theme;