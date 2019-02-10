<template>
	<div class="container smooth-page login-page">
		<div class="row">

			<div class="col-lg-4 col-sm-0"></div>
			<div class="col-lg-4 col-sm-12">
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
			<div class="col-lg-4 col-sm-0"></div>

		</div>
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
				} else {
					LoginService.login('test token');
					this.$router.push('dashboard')
				}
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

<style scoped lang="scss">
	.login-page {
		margin-top: 60px;
	}
</style>