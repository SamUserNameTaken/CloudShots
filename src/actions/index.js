import axios from 'axios';

export const FETCH_LIST = 'FETCH_LIST';

export function fetchList() {
	const request = axios.get("https://w4g2x8uob4.execute-api.us-west-2.amazonaws.com/prod/gigs?city=portland&category=web");

	return {
		type: FETCH_LIST,
		payload: request
	};
}