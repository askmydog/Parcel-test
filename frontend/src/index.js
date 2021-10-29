import 'jquery';


import './index.scss';

import '@popperjs/core';
import 'bootstrap';
import 'bootstrap-table';


import $ from 'jquery';
window.jQuery = $;
window.$ = $;

console.log(typeof $=== 'function');

console.log('parcel online');

$(function() {
    $('#table').bootstrapTable()
  })