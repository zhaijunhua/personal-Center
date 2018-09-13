$(function(){
	$.ajax({
		url:'usermessage/test',
		type:'post',
		dataType:'json',
		success:function(data){
		
			var str='';
			str+=`<div class="port" id="userPic">
						<img src="${data.data[0].picUrl}" class="img-circle" alt=""/>
					</div>
					<div class="usersname" id="userName">
						<p class="text-center">${data.data[0].userName}</p>
					
					</div>`;
					$('.userpic').append(str);
				
		}
		
	})
})