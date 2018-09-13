$(function(){
	$.ajax({
		type:'post',
		url:'movie/test',
		dataType:'json',
		success:function(data){
			if(data.statue){
				var str='';
				for(var i=0;i<data.data.length;i++){
					str+=`<div class="col-xs-4 col-md-3" data-id="${data.data[i].id}">
						<div class="thumbnail">
							<a href="#">
									<img src="">
									<p class="moiveName">${data.data[i].name}</p>
							</a>
						</div>
					</div>`;
					if(data.data[i].day<=7) $('.record1').append(str);
					  else  $('.record2').append(str);
				}
				
			}
		}

	})
})

//成功获取
/*看单*/
$(function(){
	$.ajax({
		url:'/ssm_movie/user/getCollect',
		type:'post',
		dataType:'json',
		success:function(data){
			if(data.statue==1){
				
				for(var i=0;i<data.data.length;i++){
					var looklist='';
					looklist+=`<div class="col-xs-4 col-md-3" data-movieId="${data.data[i].movieID}">
						<div class="thumbnail">
							<a href="#">
									<img src="${data.data[i].movie_photo}"><br>
									<p class="moiveName">${data.data[i].movie_name}</p>
									<p>收藏于 ${data.data[i].collect_time}</p>
							</a>
						</div>
					</div>`;
				}
				$('.looklist').append(looklist);
			}
			else console.log("获取失败");
		}
		
	})
})