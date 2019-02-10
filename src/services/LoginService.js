export default class LoginService {
	
	static errorMessage;
	
	static validate(formData) {
		let valid = true;
		
		if (formData.email === '') {
			valid = false;
			LoginService.errorMessage = 'Email cannot be empty';
		}
		
		if (!LoginService.validateEmail(formData.email)) {
			valid = false;
			LoginService.errorMessage = 'Email is not correct';
		}
		
		if (formData.password === '') {
			valid = false;
			LoginService.errorMessage = 'Password cannot be empty';
		}
		
		return valid;
	}
	
	static getErrorMessage() {
		return LoginService.errorMessage
	}
	
	static validateEmail(email) {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}
	
	static logout() {
    localStorage.token = '';
    localStorage.removeItem('token');
	}
	
	static login(token) {
    localStorage.token = token
	}
	
	static isLogged() {
    return (localStorage.token && localStorage.token !== '')
	}
}