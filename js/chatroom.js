$(document).ready(function(){

$('#submit').click(function(){
	var msg = $('#message').val();
	chatRoom.msg = msg;
	chatRoom.sendMsg();
})

var chatRoom = {
	initialize: function(){
	chatRoom.msg = "";
	},

	sendMsg: function(){
		console.log(chatRoom.msg)
	}

}

});