<template>
	<div class="container-fluid">
		<h3 class="header">{{ postFormUI.title }}</h3>

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

			<div class="row">
				<div class="col">
					<b-button type="submit" variant="primary">Submit</b-button>
				</div>
				<div class="col align-self-end text-right">
					<b-button type="submit" variant="danger" @click="dismiss()">Cancel</b-button>
				</div>
			</div>

		</b-form>
	</div>
</template>

<script>
	import axios from 'axios';
	import _ from 'lodash';
  import uuid from 'uuid/v1';
  import post from '../../objects/post';

  export default {
    name: 'PostCreate',
    data: () => ({
      post: post,
			postFormUI: {
        title: ''
			}
		}),
		computed: {
      posts() {
        return this.$store.state.posts;
			}
		},
		beforeMount() {
			if (this.$route.params.uuid) {
				this.postFormUI.title = `Update Post`;
				this.post = _.find(this.posts, {uuid: this.$route.params.uuid});
				// axios.get('/get_post_by_uuid', res => {})
			} else {
        this.postFormUI.title = `Create New Post`;
				this.post = post;
        this.post = { ...{
          uuid: uuid(),
					author: 'entymon',
					createAt: new Date(),
					updateAt: new Date(),
        }}
			}
		},
		updated() {
      console.log(this.post)
		},
		methods: {
      onSubmit(event) {
        event.preventDefault();
				this.$store.dispatch('updatePost', this.post);
        this.$router.push({ name: 'post-list' })
				// valid and send form
			},
      onFileSelected(event) {
        this.post.image = event.target.files[0];
        // save to S3 with a tag
        console.log(event.target.files[0])
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
			},
      /**
			 * Dismiss changes and go to list
       */
			dismiss() {
        this.$router.push({ name: 'post-list' })
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