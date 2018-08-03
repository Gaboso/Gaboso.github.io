<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-12 col-sm-12">

        <div class="card hovercard">
          <div class="cardheader">

          </div>
          <div class="avatar">
            <img :alt="baseData.name" :src="baseData.avatar_url">
          </div>
          <div class="info">
            <div class="title">
              <a target="_blank" :href="baseData.html_url">{{baseData.name}}</a>
            </div>
            <div class="desc" v-if="baseData.bio">{{baseData.bio}}</div>
            <div class="desc" v-if="baseData.location"><i class="fa fa-map-marker"></i> {{baseData.location}}</div>
            <div class="desc" v-if="baseData.company">{{baseData.company}}</div>
            <div class="desc" v-if="baseData.blog"><i class="fa fa-rss"></i> {{baseData.blog}}</div>
            <div class="desc" v-if="baseData.email"><i class="fa fa-envelope-o"></i> {{baseData.email}}</div>
            <div class="desc" v-if="baseData.followers">Followers: {{baseData.followers}}</div>
            <div class="desc" v-if="baseData.following">Following: {{baseData.following}}</div>
          </div>
        </div>
      </div>

    </div>


    <div class="card card-body"  v-for="repository in repositories">
      <h5 class="card-title">{{repository.name}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{repository.description}}</h6>

      <div class="card-text">

        <div>
          Language: <strong>{{repository.language}}</strong>
        </div>

        <div v-if="repository.fork">
          <i class="fa fa-code-fork"></i> Is a Fork
        </div>

        <div v-if="repository.open_issues > 0">
          <i class="fa fa-bug"></i> Open Issues: <strong>{{repository.open_issues}}</strong>
        </div>

        <div>
          <a :href="repository.html_url" class="card-link" target="_blank">
            Repository Link
          </a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      baseData: {},
      repositories: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.card {
  padding-top: 20px;
  margin: 10px 0 20px 0;
  background-color: rgba(214, 224, 226, 0.2);
  border-top-width: 0;
  border-bottom-width: 2px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.card .card-heading.image img {
  display: inline-block;
  width: 46px;
  height: 46px;
  margin-right: 15px;
  vertical-align: top;
  border: 0;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.card .card-heading.image .card-heading-header h3 {
  margin: 0;
  font-size: 14px;
  line-height: 16px;
  color: #262626;
}

.card .card-heading.image .card-heading-header span {
  font-size: 12px;
  color: #999999;
}

.card .card-media img {
  max-width: 100%;
  max-height: 100%;
}

.card .card-comments .comments-collapse-toggle a,
.card .card-comments .comments-collapse-toggle span {
  padding-right: 5px;
  overflow: hidden;
  font-size: 12px;
  color: #999;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card:first-child {
  margin-left: 0;
}

.card.people .card-info .title {
  display: block;
  margin: 8px 14px 0 14px;
  overflow: hidden;
  font-size: 16px;
  font-weight: bold;
  line-height: 18px;
  color: #404040;
}

.card.people .card-info .desc {
  display: block;
  margin: 8px 14px 0 14px;
  overflow: hidden;
  font-size: 12px;
  line-height: 16px;
  color: #737373;
  text-overflow: ellipsis;
}

.card.hovercard {
  position: relative;
  padding-top: 0;
  overflow: hidden;
  text-align: center;
  background-color: rgba(214, 224, 226, 0.2);
}

.card.hovercard .cardheader {
  background: url("http://lorempixel.com/850/280/sports/");
  background-size: cover;
  height: 135px;
}

.card.hovercard .avatar {
  position: relative;
  top: -50px;
  margin-bottom: -50px;
}

.card.hovercard .avatar img {
  width: 100px;
  height: 100px;
  max-width: 100px;
  max-height: 100px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.5);
}

.card.hovercard .info {
  padding: 4px 8px 10px;
}

.card.hovercard .info .title {
  margin-bottom: 4px;
  font-size: 24px;
  line-height: 1;
  color: #262626;
  vertical-align: middle;
}

.card.hovercard .info .desc {
  overflow: hidden;
  font-size: 12px;
  line-height: 20px;
  color: #737373;
  text-overflow: ellipsis;
}

.card.hovercard {
  padding: 0 20px;
  margin-bottom: 17px;
}

</style>
