'use strict';

var ws = new WebSocket('ws://fast-sierra-67105.herokuapp.com');

$(function () {
  $('form').submit(function(){
    var $this = $(this);
     ws.onopen = function() {
       console.log('sent message: %s', $('#m').val());
     };
    ws.send($('#m').val());
    $('#m').val('');
    return false;
  });
  ws.onmessage = function(msg){
    var resp = JSON.parse(msg.data);
    $('#messages')
      .append($('<li>')
      .append($('<span class="message">').text(resp.text)));
  };
  ws.onerror = function(err){
    console.log("err", err);
  };
  ws.onclose = function close() {
    console.log('disconnected');
  };
});
