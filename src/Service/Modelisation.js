/**
 * Classe représentant une session d'activité.
 */
class Modelization {
    /**
     *
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
            this.activity(modelData)
        }
        if (modelScore) {
            this.score(modelScore)
        }
        if (modelKey) {
            this.keyData(modelKey.keyData)
        }
        if (modelSession) {
            this.modelSession(modelSession)
        }
        if (modelPerf) {
            this.modelPerf(modelPerf)
        }
        if (modelUser) {
            this.userInfos(modelUser)
        }
    }

    /**
     * Sets the activity properties of the instance based on the given model data.
     * @param {object} modelData - The model data of the activity session.
     * */
    userInfos(modelUser) {
        this.firstName = modelUser.userInfos.firstName
    }

    /**
     * Sets the activity properties of the instance based on the given model data.
     * @param {object} modelData - The model data of the activity session.
     * */
    activity(modelData) {
        /**
         * Formats the given date string as a day label in the "fr-FR" locale.
         * @param {string} dateString - The date string to format.
         * @returns {string} The formatted day label.
         * */
        const formatDateLabel = (dateString) => {
            const date = new Date(dateString);
            const options = {day: 'numeric'};
            return date.toLocaleDateString('fr-FR', options);
        };
        this.day = formatDateLabel(modelData.day);
        this.calories = modelData.calories;
        this.kilogram = modelData.kilogram;
    }

    /**
     * Sets the score property of the instance based on the given model score.
     * @param {object} modelData - The model score of the activity session.
     * */
    score(modelData) {
        // Valeur en pourcentage de la position finale du cercle
        this.todayScore = modelData.todayScore * 100;
    }

    /**
     * Sets the key data properties of the instance based on the given model key data.
     * @param {object} modelKey - The model key data of the activity session.
     * */
    keyData(modelKey) {
        this.calorieCount = modelKey.calorieCount
        this.carbohydrateCount = modelKey.carbohydrateCount
        this.lipidCount = modelKey.lipidCount
        this.proteinCount = modelKey.proteinCount
    }

    /**
     * Sets the model session properties of the instance based on the given model session data.
     * @param {object} modelSession - The model session data of the activity session.
     * */
    modelSession(modelSession) {
        const formatDay = {1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D"}
        this.sessionLength = modelSession.sessionLength
        this.day = formatDay[modelSession.day]
    }

    /**
     * Sets the model performance properties of the instance based on the given model performance data.
     * @param {object} modelPerf - The model performance data of the activity session.
     * */
    modelPerf(modelPerf) {
        this.value = modelPerf.value
        this.kind = modelPerf.kind
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
    constructor({dataActivity, dataScore, dataSessions, dataPerf}) {
        if (dataActivity) {
            this.dataActivity(dataActivity)
        }
        if (dataScore) {
            this.dataScore(dataScore)
            this.dataKey(dataScore)
            this.dataInfos(dataScore)
        }
        if (dataSessions) {
            this.dataSessions(dataSessions)
        }

        if (dataPerf) {
            this.dataPerf(dataPerf)
        }
    }

    /**
     * Parses and sets activity data.
     * @param {array} rawDataUserInfos - Raw activity data received from the API.
     * */
    dataInfos(rawDataUserInfos) {
        console.log(rawDataUserInfos)
        this.infos = new Modelization({modelUser: rawDataUserInfos});
    }

    /**
     * Parses and sets activity data.
     * @param {array} rawDataActivity - Raw activity data received from the API.
     * */
    dataActivity(rawDataActivity) {
        this.activity = rawDataActivity.map((sessionActivity) => new Modelization({modelData: sessionActivity}));
    }

    /**
     * Parses and sets score data.
     * @param {object} rawDataScore - Raw score data received from the API.
     * */

    dataScore(rawDataScore) {
        this.score = new Modelization({modelScore: rawDataScore})
    }

    /**
     * Parses and sets key data.
     * @param {object} rawDataKey - Raw key data received from the API.
     * */

    dataKey(rawDataKey) {
        this.dataKey = new Modelization({modelKey: rawDataKey})
    }

    /**
     * Parses and sets session data.
     * @param {array} rawDataSessions - Raw session data received from the API.
     * */
    dataSessions(rawDataSessions) {
        this.sessions = rawDataSessions.map((sessionData) => new Modelization({modelSession: sessionData}));
    }

    /**
     * Parses and sets performance data.
     * @param {object} rawDataPerf - Raw performance data received from the API.
     * */
    dataPerf(rawDataPerf) {
        const formattedData = rawDataPerf.data.map((item) => ({
            value: item.value,
            kind: rawDataPerf.kind[item.kind],
        }));
        this.sessions = formattedData.map((sessionPerf) => new Modelization({modelPerf: sessionPerf}));
    }
}
