// sponsorship.js
export class Sponsorship {
    constructor(partnerName, message, conditions = {}) {
        this.partnerName = partnerName;
        this.message = message;
        this.conditions = conditions;
    }

    isApplicable(weather) {
        if (this.conditions.tempBelow && weather.temp >= this.conditions.tempBelow) return false;
        if (this.conditions.weatherType && weather.type !== this.conditions.weatherType) return false;
        return true;
    }
}

export class RecommendationPersonalization {
    constructor(userType) {
        this.userType = userType;
        this.sponsorships = [];
    }

    addSponsorship(sponsorship) {
        this.sponsorships.push(sponsorship);
    }

    getRecommendations(currentWeather) {
        if (this.userType !== "Premium") return [];
        return this.sponsorships
            .filter(s => s.isApplicable(currentWeather))
            .map(s => `${s.message} - Sponsor: ${s.partnerName}`);
    }
}