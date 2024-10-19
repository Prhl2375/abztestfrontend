<script setup>
import {onMounted, ref} from 'vue';


import axios from 'axios';

const positions = ref([]);

const fetchPositions = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_API_BASE_URL + '/positions');
    positions.value = response.data.positions;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
const loadScript = (src, callback) => {
  const script = document.createElement('script');
  script.src = src;
  script.async = false;
  script.onload = () => {
    if (callback) callback();
  };
  document.head.appendChild(script);
};

onMounted(() => {
  fetchPositions();
  console.log(positions.value);
  loadScript('/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js');
  loadScript('https://code.jquery.com/jquery-1.10.2.min.js', () => {
    loadScript('https://netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js');
  });
});
</script>

<template>
  <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
  <hr>
  <div class="container bootstrap snippets bootdey">
    <div class="row">
      <div class="col-lg-12">
        <div class="main-box no-header clearfix">
          <div class="main-box-body clearfix">
            <div class="table-responsive">
              <table class="table user-list">
                <thead>
                <tr>
                  <th><span>id</span></th>
                  <th><span>name</span></th>
                  <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="position in positions" :key="position.id">
                  <td>
                    {{position.id}}
                  </td>
                  <td>
                    {{position.name}}
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body{
  background:#eee;
}
.main-box.no-header {
  padding-top: 20px;
}
.main-box {
  background: #FFFFFF;
  -webkit-box-shadow: 1px 1px 2px 0 #CCCCCC;
  -moz-box-shadow: 1px 1px 2px 0 #CCCCCC;
  -o-box-shadow: 1px 1px 2px 0 #CCCCCC;
  -ms-box-shadow: 1px 1px 2px 0 #CCCCCC;
  box-shadow: 1px 1px 2px 0 #CCCCCC;
  margin-bottom: 16px;
  -webikt-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}
.table a.table-link.danger {
  color: #e74c3c;
}
.label {
  border-radius: 3px;
  font-size: 0.875em;
  font-weight: 600;
}
.user-list tbody td .user-subhead {
  font-size: 0.875em;
  font-style: italic;
}
.user-list tbody td .user-link {
  display: block;
  font-size: 1.25em;
  padding-top: 3px;
  margin-left: 60px;
}
a {
  color: #3498db;
  outline: none!important;
}
.user-list tbody td>img {
  position: relative;
  max-width: 50px;
  float: left;
  margin-right: 15px;
}

.table thead tr th {
  text-transform: uppercase;
  font-size: 0.875em;
}
.table thead tr th {
  border-bottom: 2px solid #e7ebee;
}
.table tbody tr td:first-child {
  font-size: 1.125em;
  font-weight: 300;
}
.table tbody tr td {
  font-size: 0.875em;
  vertical-align: middle;
  border-top: 1px solid #e7ebee;
  padding: 12px 8px;
}
a:hover{
  text-decoration:none;
}
</style>