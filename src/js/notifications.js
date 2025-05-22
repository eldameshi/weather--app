// notifications.js

export class NotificationPreferences {
    constructor(userId, options = {}) {
        this.userId = userId;
        this.receiveDaily = options.receiveDaily ?? true;
        this.receiveSevereAlerts = options.receiveSevereAlerts ?? true;
    }

    updatePreferences(newPrefs) {
        this.receiveDaily = newPrefs.receiveDaily ?? this.receiveDaily;
        this.receiveSevereAlerts = newPrefs.receiveSevereAlerts ?? this.receiveSevereAlerts;
    }

    getPreferences() {
        return {
            userId: this.userId,
            receiveDaily: this.receiveDaily,
            receiveSevereAlerts: this.receiveSevereAlerts,
        };
    }
}

export class WeatherNotification {
    static createNotification(message, type = "info") {
        const timestamp = new Date().toLocaleString();
        return { message, type, timestamp };
    }
}

export class WeatherAlertService {
    constructor(threshold = 10) {
        this.threshold = threshold;
    }

    checkForSuddenChange(currentWeather, forecast) {
        if (Math.abs(currentWeather.temp - forecast.temp) >= this.threshold) {
            return WeatherNotification.createNotification(
                "Ndryshim i papritur i motit! Kontrolloni parashikimin.",
                "warning"
            );
        }
        return null;
    }
}
