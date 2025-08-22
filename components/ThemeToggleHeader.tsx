import React from 'react';
import { Pressable, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, isDark, themeMode, setThemeMode } = useTheme();
  const animatedValue = React.useRef(new Animated.Value(isDark ? 1 : 0)).current;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isDark ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [isDark, animatedValue]);

  const toggleTheme = () => {
    // Simple toggle between light and dark (not system)
    setThemeMode(isDark ? 'light' : 'dark');
  };

  const thumbPosition = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 20],
  });

  const trackColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.border, theme.colors.primary],
  });

  return (
    <Pressable 
      style={[styles.container]} 
      onPress={toggleTheme}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Animated.View style={[styles.track, { backgroundColor: trackColor }]}>
        <Animated.View style={[
          styles.thumb, 
          { 
            backgroundColor: theme.colors.surface,
            transform: [{ translateX: thumbPosition }],
            shadowColor: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.15)',
          }
        ]}>
          <Ionicons 
            name={isDark ? "moon" : "sunny"} 
            size={12} 
            color={isDark ? '#4F46E5' : '#F59E0B'} 
          />
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  track: {
    width: 42,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    position: "relative",
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 4,
  },
});
