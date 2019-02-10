<template>
	<div class="container-fluid">
		<h3 class="header">Create New Post</h3>

		<b-form @submit="onSubmit">

			<b-form-group id="createPostAuthor" label="Author" lable-for="createPostAuthor">
				<b-form-input
						id="createPostAuthorInput"
						type="text"
						v-model="post.author"
						required
						placeholder="Author name" />
			</b-form-group>

			<b-form-group id="createPostTitle" label="Title" lable-for="createPostTitle">
				<b-form-input
						id="createPostTitleInput"
						type="text"
						v-model="post.title"
						required
						placeholder="Enter title" />
			</b-form-group>

			<b-form-group>
				<wysiwyg v-model="post.body" />
			</b-form-group>

			<b-form-group>
				<div class="file-loader">
					<div class="row">
						<div class="col align-self-start">
							<input type="file" @change="onFileSelected">
						</div>
						<div class="col align-self-end text-right">
							<button class="btn btn-success" @click="onUpload">Upload</button>
						</div>
					</div>
				</div>
			</b-form-group>

			<b-button type="submit" variant="primary">Submit</b-button>

		</b-form>
	</div>
</template>

<script>
	import axios from 'axios';
	import _ from 'lodash';

  export default {
    name: 'PostCreate',
    data: () => ({
      post: {
        title: '',
				body: '',
				image: {},
				author: 'entymon'
			},
		}),
		computed: {
      posts() {
        return this.$store.state.posts;
			}
		},
		beforeMount() {
			if (this.$route.params.uuid) {
				this.post = _.find(this.posts, {uuid: this.$route.params.uuid})
				// axios.get('/get_post_by_uuid', res => {})
			} else {
        this.post = {
          title: '',
					body: '',
					image: {},
          author: 'entymon'
        }
			}
		},
		updated() {
      console.log(this.post)
		},
		methods: {
      onSubmit(event) {
        event.preventDefault()
				// valid and send form
			},
      onFileSelected(event) {
        this.post.image = event.target.files[0];
			},
			onUpload() {
        const fd = new FormData();
        fd.append('image', this.post.image, this.post.image.name);
				axios.post('https://cloud-funtion/uploadImage', fd, {
					onUploadProgress: uploadEvent => {
						console.log('Upload: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100));
					}
				}).then(res => {
					console.log(res)
				})
			}
		}
  }
</script>

<style scoped lang="scss">
	.header {
		padding: 15px 0;
	}
	.file-loader {
		padding: 15px;
		border: 1px solid $grey;
	}
</style>