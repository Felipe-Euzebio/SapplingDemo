import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncStorageHelper {

    // Set an item in AsyncStorage
    static async setItem(key: string, value: any): Promise<void> {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`AsyncStorageHelper.setItem error: ${error}`);
        }
    }

    // Get an item from AsyncStorage
    static async getItem<T>(key: string): Promise<T | null> {
        try {
            const value = await AsyncStorage.getItem(key);
            return value !== null ? JSON.parse(value) : null;
        } catch (error) {
            console.error(`AsyncStorageHelper.getItem error: ${error}`);
            return null;
        }
    }

    // Remove an item from AsyncStorage
    static async removeItem(key: string): Promise<void> {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.error(`AsyncStorageHelper.removeItem error: ${error}`);
        }
    }

    // Clear all items from AsyncStorage
    static async clear(): Promise<void> {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.error(`AsyncStorageHelper.clear error: ${error}`);
        }
    }

}

export default AsyncStorageHelper;
