/**
 * Classe représentant une session d'activité.
 */
class Modelization {
    /**
     * Creates a new instance of the Modelization class.
     * @param {object} sessionData - The raw data of the activity session, as received from the API.
     * @param {object} modelData - The model data of the session.
     * @param {object} modelScore - The model score of the session.
     * @param {object} modelKey - The model key data of the session.
     * @param {object} modelSession - The model session data of the session.
     * @param {object} modelPerf - The model performance data of the session.
     * @param {object} modelUser - The model user data of the session.
     */
    constructor({modelData, modelScore, modelKey, modelSession, modelPerf, modelUser}) {
        if (modelData) {
            const date = new Date(modelData.day);
            this.day = date.toLocaleDateString('fr-FR', {day: 'numeric'});
            this.calories = modelData.calories;
            this.kilogram = modelData.kilogram;
        }
        if (modelScore) {
            this.todayScore = (modelScore.todayScore || modelScore.score) * 100;
        }
        if (modelKey) {
            const formatNumber = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            this.calorieCount = formatNumber(modelKey.keyData.calorieCount);
            this.carbohydrateCount = formatNumber(modelKey.keyData.carbohydrateCount);
            this.lipidCount = formatNumber(modelKey.keyData.lipidCount);
            this.proteinCount = formatNumber(modelKey.keyData.proteinCount);
        }
        if (modelSession) {
            const dayLabels = {1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D"};
            this.sessionLength = modelSession.sessionLength;
            this.day = dayLabels[modelSession.day];
        }
        if (modelPerf) {
            this.value = modelPerf.value;
            this.kind = modelPerf.kind;
        }
        if (modelUser) {
            this.firstName = modelUser.userInfos.firstName;
        }
    }
}

/**
 * Classe représentant les données d'activité d'un utilisateur.
 */
export class DataModeling {
    /**
     * Creates a new instance of the ActivityData class.
     * @param {array} dataActivity - Raw activity data received from the API.
     * @param {object} dataScore - Raw score data received from the API.
     * @param {array} dataSessions - Raw session data received from the API.
     * @param {object} dataPerf - Raw performance data received from the API.
     * */
    constructor({dataActivity, dataUser, dataSessions, dataPerf}) {
        if (dataActivity) {
            this.activity = dataActivity.map((sessionActivity) => new Modelization({modelData: sessionActivity}));
        }
        if (dataUser) {
            this.score = new Modelization({modelScore: dataUser});
            console.log(this.score)
            this.dataKey = new Modelization({modelKey: dataUser});
            this.infos = new Modelization({modelUser: dataUser});
        }
        if (dataSessions) {
            this.sessions = dataSessions.map((sessionData) => new Modelization({modelSession: sessionData}));
        }
        if (dataPerf) {
            const formattedData = dataPerf.data.map((item) => ({
                value: item.value, kind: dataPerf.kind[item.kind],
            }));
            this.perf = formattedData.map((sessionPerf) => new Modelization({modelPerf: sessionPerf}));
        }
    }
}
