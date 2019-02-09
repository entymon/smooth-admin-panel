<template>
	<div class="container">
		<b-form @submit="onSubmit" @reset="onReset">
			<b-form-group id="exampleInputGroup1"
										label="Email address:"
										label-for="exampleInput1"
										description="We'll never share your email with anyone else.">
				<b-form-input id="exampleInput1"
											type="text"
											v-model="form.email"
											required
											placeholder="Enter email">
				</b-form-input>
			</b-form-group>
			<b-form-group id="exampleInputGroup2"
										label="Password:"
										label-for="exampleInput2">
				<b-form-input id="exampleInput2"
											type="password"
											v-model="form.password"
											placeholder="Enter password">
				</b-form-input>
			</b-form-group>

			<div>{{ formError }}</div>

			<b-button type="submit" variant="primary">Sign in</b-button>
		</b-form>
	</div>
</template>

<script>
	import LoginService from '../services/LoginService'

	export default {
		name: 'LoginPage',
		data: () => ({
			form: {
				email: '',
				password: '',
			},
			formError: ''
		}),
		methods: {
			onSubmit(evt) {
				evt.preventDefault();
				const valid = LoginService.validate(this.form);
				if (!valid) {
					this.formError = LoginService.getErrorMessage()
				}

				this.$router.push('/home')
				// alert(JSON.stringify(this.form));
			},
			onReset(evt) {
				evt.preventDefault();
				this.form.email = '';
				this.form.password = '';
				this.formError = ''
			}
		}
	}
</script>

<style scoped>

</style>