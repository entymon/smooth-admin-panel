import Vue from 'vue';

String.prototype.trunc = String.prototype.trunc ||
  function(n){
    return (this.length > n) ? `${this.substr(0, n-1)} ...`  : this;
  };

Vue.filter('shorten', (value) => (!value) ? '' : `${value.trunc(100)}`);