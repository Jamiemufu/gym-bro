export interface Theme {
  colors: {
    background: string;
    surface: string;
    primary: string;
    text: string;
    textSecondary: string;
    border: string;
    destructive: string;
    success: string;
    warning: string;
    icon: string;
    buttonBackground: string;
    buttonText: string;
    cardBackground: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    background: '#ffffff',
    surface: '#f8f9fa',
    primary: '#333333',
    text: '#000000',
    textSecondary: '#666666',
    border: '#eeeeee',
    destructive: '#e74c3c',
    success: '#27ae60',
    warning: '#f39c12',
    icon: '#666666',
    buttonBackground: '#333333',
    buttonText: '#ffffff',
    cardBackground: '#ffffff',
  },
};

export const darkTheme: Theme = {
  colors: {
    background: '#111111',
    surface: '#000000',
    primary: '#ffffff',
    text: '#ffffff',
    textSecondary: '#cccccc',
    border: '#333333',
    destructive: '#e74c3c',
    success: '#27ae60',
    warning: '#f39c12',
    icon: '#cccccc',
    buttonBackground: '#ffffff',
    buttonText: '#000000',
    cardBackground: '#000000',
  },
};
