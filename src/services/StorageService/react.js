import { LOCAL_STORAGE_KEYS } from "../../constants/GenericConstants";

const StorageService = {
  setPreferences: (preferences) => {
    if (!!preferences) {
      preferences = JSON.stringify(preferences);
      localStorage.setItem(LOCAL_STORAGE_KEYS.USER_PREFERENCES, preferences);
    }
  },

  getPreferences: () => {
    try {
      const type = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_PREFERENCES);

      return JSON.parse(type);
    } catch (error) {
      return false;
    }
  },

  setAccessToken: (accessToken) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken || null);
  },

  setUserData: (user = {}) => {
    if (user) {
      user = JSON.stringify(user);
      localStorage.setItem(LOCAL_STORAGE_KEYS.USER, user);
    }
  },

  setUserConfiguration: (config = null) => {
    if (!!config) {
      config = JSON.stringify(config);
      localStorage.setItem(LOCAL_STORAGE_KEYS.CONFIGURATION, config);
    }
  },

  setApplicationLanguage: (config = null) => {
    if (!!config) {
      localStorage.setItem(LOCAL_STORAGE_KEYS.LANGUAGE, config);
    }
  },

  setUserPermissions: (permissions = []) => {
    if (permissions) {
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.PERMISSIONS,
        JSON.stringify(permissions)
      );
    }
  },

  setUserDomain: (value = null) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.USER_DOMAIN, value);
  },

  setCurrentApplication: (value) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.CURRENT_APPLICATION, value);
  },

  getUserPermissions: () => {
    const permissions = localStorage.getItem(LOCAL_STORAGE_KEYS.PERMISSIONS);
    return JSON.parse(permissions);
  },

  getCurrentApplication: () => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEYS.CURRENT_APPLICATION);
    return parseInt(value || 0);
  },

  getUserDomain: () => {
    const domain = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_DOMAIN);
    return domain;
  },

  getAccessToken: () => {
    try {
      const token = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
      return token;
    } catch (error) {
      return false;
    }
  },

  getUserData: () => {
    try {
      const data = localStorage.getItem(LOCAL_STORAGE_KEYS.USER);

      if (data) {
        return JSON.parse(data);
      }
      return false;
    } catch (error) {
      return false;
    }
  },

  getUserConfiguration: () => {
    try {
      const data = localStorage.getItem(LOCAL_STORAGE_KEYS.CONFIGURATION);

      if (data) {
        return JSON.parse(data);
      }
      return false;
    } catch (error) {
      return false;
    }
  },

  getApplicationLanguage: () => {
    try {
      const data = localStorage.getItem(LOCAL_STORAGE_KEYS.LANGUAGE);

      if (data) {
        return data;
      }
      return false;
    } catch (error) {
      return false;
    }
  },

  deleteLoginData: () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.CONFIGURATION);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.PERMISSIONS);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.CURRENT_APPLICATION);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_DOMAIN);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_TYPE);
  },

  removeStorageItem: (itemKey) => {
    localStorage.removeItem(itemKey);
  },
};

export default StorageService;
