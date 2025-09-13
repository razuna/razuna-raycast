/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Server URL - Your Razuna server URL (e.g., https://app.razuna.com, https://app.razuna.eu, or https://yourserver.com) */
  "server_url": string,
  /** Access Token - Your Razuna access token from your profile settings */
  "access_token": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `manage-workspaces` command */
  export type ManageWorkspaces = ExtensionPreferences & {}
  /** Preferences accessible in the `browse-files` command */
  export type BrowseFiles = ExtensionPreferences & {}
  /** Preferences accessible in the `upload-file` command */
  export type UploadFile = ExtensionPreferences & {}
  /** Preferences accessible in the `search-files` command */
  export type SearchFiles = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `manage-workspaces` command */
  export type ManageWorkspaces = {}
  /** Arguments passed to the `browse-files` command */
  export type BrowseFiles = {}
  /** Arguments passed to the `upload-file` command */
  export type UploadFile = {}
  /** Arguments passed to the `search-files` command */
  export type SearchFiles = {}
}

