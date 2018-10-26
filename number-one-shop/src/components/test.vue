<template>
</template>

<script>
	export default {
		mounted() {
			var url = '/api/v1/word_nofocus'; // 这里就是刚才的config/index.js中的/api
                    this.Axios.get(url,{
						platform: 'pc',
						callback: 'jQuery19107105684627409352_1540524673480',
						_: 1540524673481
					  })
                        .then(function(response) {
                            console.log(response);
                        })
                        .catch(function(error) {
                            console.log(error);
                        });
		}
	}
</script>

<style>

</style>