# Task Overview

You are working with a React dashboard that allows users to toggle between light and dark themes. The expectation is that the application should remember the user's selected theme preference even after the page is reloaded, ensuring a consistent user experience across sessions. However, there are reports that the theme always resets to light upon refresh, despite the presence of logic for theme and localStorage handling.

# Guidance

This project uses React Context to manage global theme state and localStorage to attempt persistence of that state. The user can toggle the theme using a UI control, but the chosen preference does not persist as intended. Review the application's theme management logic carefully, including how theme state is initialized and updated. Pay special attention to how React hooks and side-effects are used to synchronize localStorage with the theme state.

# Objectives

Your objective is to debug and resolve the issue preventing the user's theme preference from persisting across reloads. After you make your improvements, the app should always restore the user's previously selected theme from persistent storage, regardless of how many times the page is refreshed. The theme toggle should continue to function correctly for light and dark modes, and the overall user experience should remain seamless.

# How to Verify

After implementing your fix, select a theme other than the default using the toggle and refresh the page. The application should automatically restore and display the previously chosen theme without requiring any further action from the user. Repeat this process for both theme options to confirm consistent behavior. Additionally, normal theme toggling and pagination features should remain fully functional without regression.