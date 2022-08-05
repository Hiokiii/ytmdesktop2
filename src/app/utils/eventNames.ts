export const API_ROUTES = {
  TRACK_CURRENT: "api/track",
  TRACK_CURRENT_STATE: "api/track/state",
  TRACK_LIKE: "api/track/like",
  TRACK_CONTROL_NEXT: "api/track/next",
  TRACK_CONTROL_PREV: "api/track/prev",
  TRACK_CONTROL_FORWARD: "api/track/forward",
  TRACK_CONTROL_BACKWARD: "api/track/backward",
  TRACK_CONTROL_PLAY: "api/track/play",
  TRACK_CONTROL_PAUSE: "api/track/pause",
  TRACK_CONTROL_TOGGLE_PLAY: "api/track/toggle-play-state",
  TRACK_SOCKET: "api/socket"
};
const IPC_EVENT_NAMES = {
  SERVER_SETTINGS_CHANGE: "settingsProvider.change",
  TRACK_TITLE_CHANGE: "track:title",
  TRACK_CHANGE: "track:change",
  TRACK_PLAYSTATE: "track:play-state",
  APP_UPDATE: "app.update",
  APP_UPDATE_CHECKING: "app.updateChecking",
  APP_UPDATE_PROGRESS: "app.updateProgress",
  APP_UPDATE_DOWNLOADED: "app.updateDownloaded",
  ...API_ROUTES
};
export default IPC_EVENT_NAMES;