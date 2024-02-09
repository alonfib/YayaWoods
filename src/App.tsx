import React, { useCallback, useEffect } from "react";
import stores, { storesContext } from "./mobx/storesIndex";
import AppRouter from "./AppRouter";

export default function App() {
  // const { getNotificationsPermission, scheduleNotifications } = useNotifications();

  // const [fontsLoaded] = useFonts({
  // 	'Merienda-Bold': require('./assets/fonts/Merienda-Bold.ttf'),
  // 	'Merienda-Regular': require('./assets/fonts/Merienda-Regular.ttf')
  // });

  useEffect(() => {
    // NEVER REMOVE CONSOLE LOG BELOW - will cause crash
  }, []);

  // const onLayoutRootView = useCallback(async () => {
  // 	if (fontsLoaded) {
  // 		await SplashScreen.hideAsync();
  // 	}
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  // 	return null;
  // }

  return (
    <storesContext.Provider value={stores}>
      <AppRouter />
    </storesContext.Provider>
  );
}
