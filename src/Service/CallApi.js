import axios from 'axios';
import {DataModeling} from "./Modelisation";

const baseUrl = 'http://localhost:3000';

/**
 * Displays an error message to the user.
 * @function msgError
 * @param {string} msg - The error message to display.
 * @param {*} error - The error object or additional error data to include in the message.
 */
function msgError(msg, error) {
    alert(msg, error)
}

/**
 * Retrieves activity data for a given user.
 * @async
 * @function getDataActivity
 * @param {number} userId - The user's ID.
 * @returns {Promise} A promise that resolves with the user's activity data, in the form of an instance of the ActivityData class.
 * @throws {Error} If the request fails or if the user ID is invalid.
 */
export const getDataActivity = async (userId) => {
    try {
        const response = await axios.get(`${baseUrl}/user/${userId}/activity`);
        const rawData = await response.data.data.sessions;
        const activityData = new DataModeling({dataActivity: rawData});
        return activityData.activity;
    } catch (error) {
        msgError('Error in getDataActivity:', error)
    }
};

export const getUserData = async (userId) => {
    try {
        const response = await axios.get(`${baseUrl}/user/${userId}`);
        const rawData = await response.data.data;
        console.log(rawData)
        return new DataModeling({dataUser: rawData});
    } catch (error) {
        msgError('Error in getUserData:', error)
    }
};

export const getDataSessions = async (userId) => {
    try {
        const response = await axios.get(`${baseUrl}/user/${userId}/average-sessions`);
        const rawData = await response.data.data.sessions;
        const sessionsData = new DataModeling({dataSessions: rawData})
        return sessionsData.sessions;
    } catch (error) {
        msgError('Error in getDataSessions:', error)
    }
};

export const getDataPerformance = async (userId) => {
    try {
        const response = await axios.get(`${baseUrl}/user/${userId}/performance`);
        const rawData = await response.data.data;
        const sessionsPerf = new DataModeling({dataPerf: rawData})
        return sessionsPerf.perf
    } catch (error) {
        msgError('Error in getDataPerformance:', error)
    }
};