import StorageService from "../../services/StorageService/react";
import AccessToken from "../../services/api/ApiClient";

export function clearLocalStorageItems() {
  AccessToken.token = null;
  AccessToken.senseToken = null;
  StorageService.deleteLoginData();
}
