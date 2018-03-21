export const ASSETS_I18N_PATH = 'app-assets/i18n';
export const ASSETS_IMAGES_PATH = 'app-assets/images/';
export const SIGN_UP_IMAGE = 'sign-up-bg.jpg';
export const SIGN_IN_IMAGE = 'login-title-bg.jpg';
export const DEFAULT_LANGUAGE = 'en';

export const DOMAIN_URL = 'http://localhost:3000';
// export const DOMAIN_URL = 'http://192.168.1.6:3000';
export const API_SIGN_UP = DOMAIN_URL + '/api/login/signup';
export const API_SIGN_IN = DOMAIN_URL + '/api/login/signin';

export const ROUTE_LOGIN = 'login';
export const ROUTE_SIGN_IN = 'signin';
export const ROUTE_SIGN_UP = 'signup';
export const ROUTE_FORGOT_PASS = 'forgotPassword';

export const ROUTE_HOMEPAGE = 'homePage';

export const REGEX_ONLY_ALPHA = /^[a-zA-Z]*/;
export const REGEX_ALPHA_NUMERIC = /^[a-zA-Z0-9]*$/;
	/* password: at least 8 chars containing at least 1 upper case char, at least
		 1 lower case char, at least 1 number and at least 1 special charater from
		 amongst #?!@$%^&*- */
export const REGEX_PASSWORD = new RegExp(
																'/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*' +
																'[#?!@$%^&*-])[A-Za-z\d#?!@$%^&*-]{8,}/'
															);
export const REGEX_ONLY_NUMBERS = /^[0-9]*$/;
export const REGEX_EMAIL = new RegExp(
																'/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(?:' +
																'[A-Za-z]{2}|com|org|net|edu|gov|mil|biz|' +
																'info|mobi|name|aero|asia|jobs|museum|COM|' +
																'ORG|NET|EDU|GOV|MIL|BIZ|INFO|MOBI|NAME|' +
																'AERO|ASIA|JOBS|MUSEUM)$/'
														);
