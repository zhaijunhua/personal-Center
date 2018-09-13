<template>
<div id="app">
<!--顶部导航栏-->
	<nav class="navbar " role="navigation">
		<div class="container-fliuid">
			<div class="navbar-header">
				<li class="navbar-brand disabled">视频
				</li>
			</div>
			<div class="collapse navbar-collapse" id="shownav">
				<ul class="nav navbar-nav">
					<li><a href="#"><span class="glyphicon glyphicon-home"></span>首页</a></li>
				
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
						<span class="glyphicon glyphicon-th-large"></span>
						频道
						</a>
						<ul class="dropdown-menu">
							<li><a href="#">喜剧</a></li>
							<li><a href="#">惊悚</a></li>
							<li><a href="#">冒险</a></li>
							<li><a href="#">战争</a></li>
							<li><a href="#">动作</a></li>
							<li><a href="#">剧情</a></li>
							<li><a href="#">悬疑</a></li>
							<li><a href="#">武侠</a></li>
							<li><a href="#">伦理</a></li>
							<li><a href="#">纪录</a></li>
							<li><a href="#">传记</a></li>
							<li><a href="#">历史</a></li>
							<li><a href="#">动画</a></li>
							<li><a href="#">家庭</a></li>
							<li><a href="#">科幻</a></li>
							<li><a href="#">恐怖</a></li>

						</ul>
					</li>
					
				</ul>
				<ul class="nav navbar-nav navbar-center" id="search">
					<li>
						<div class="center-block">
	        				<form class="navbar-form navbar-center" role="search">
	            				<div class="form-group">
	                				<input type="text" class="form-control" placeholder="Search">
	                				<button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>
	            				</div>
	            
	        				</form>
	        
	   			 		</div>
					</li>
				</ul>
				 <ul class="nav navbar-nav navbar-right">
					<li><a href="#whistory">&nbsp;&nbsp;<span class="glyphicon glyphicon-time"></span><br/>看过</a></li>
				 	<li><a href="#watchOrder">&nbsp;&nbsp;<span class="glyphicon glyphicon-heart"></span><br/>收藏</a></li>
				 	<li><a href="#uploading">&nbsp;&nbsp;<span class="glyphicon glyphicon-open"></span><br/>上传</a></li>
	      			<!-- <li><a href="#">&nbsp;&nbsp;<span class="glyphicon glyphicon-user"></span><br/> 注册</a></li>
	      			<li ><a href="#">&nbsp;<span class="glyphicon glyphicon-log-in"></span> <br/><button onclick="document.getElementById('log').style.display='block'" id="btnLogin">登录</button></a></li> -->
	    		</ul>
			</div>
		</div>
	
	</nav>

<div class="container">
			<div class="userpic" id="user">
					<!-- <div class="port" id="Pic">
						<img src="img/headport.png" class="img-circle" alt=""/>
					</div>
					<div class="usersname" id="userName">
						<p class="text-center">haeee</p>
					
					</div> -->
					<!-- <div class="open">
						<button type="button" class="btn btn-default">开通VIP</button>
					</div> -->
				
				
			</div>
			<!-- nav-stacked侧边菜单展示栏 -->
			<ul class="nav nav-pills nav-left" role="tablist" id="myTab">
				<li><a href="#vip" data-toggle="pill">VIP会员</a></li>
				<li><a href="#shop" data-toggle="pill"><span class="glyphicon glyphicon-briefcase"></span>V币商城</a></li>
				<li class="active"><a href="#whistory" data-toggle="pill"><span class="glyphicon glyphicon-time"></span>观看历史</a></li>
				<li><a href="#watchOrder" data-toggle="pill"><span class="glyphicon glyphicon-heart-empty"></span>看单</a></li>
				<li><a href="#shopingCart" data-toggle="pill"><span class="glyphicon glyphicon-calendar"></span>购物车</a></li>
				<li><a href="#ticket" data-toggle="pill"><span class="glyphicon glyphicon-film"></span>电影票</a></li>
				<li><a href="#subscibe" data-toggle="pill"><span class="glyphicon glyphicon-star"></span>订阅</a></li>
				<li><a href="#comment" data-toggle="pill"><span class="glyphicon glyphicon-edit"></span>我的评论</a></li>
				<li><a href="#myMessage" data-toggle="pill"><span class="glyphicon glyphicon-envelope"></span>我的消息</a></li>
				<li><a href="#uploading"data-toggle="pill"><span class="glyphicon glyphicon-upload"></span>上传视频</a></li>
				<li><a href="#channelManage" data-toggle="pill"><span class="glyphicon glyphicon-cog"></span>视频管理</a></li>
				<li><a href="#personalChannel" data-toggle="pill"><span class="glyphicon glyphicon-user"></span>个人频道</a></li>
			</ul>
			<div class="tab-content main-content tab-right;">
			<!-- vip会员信息 -->
				<div class="tab-pane VIP" id="vip">
					<ul class="nav nav-tabs nav-center" id="vipTab">
						<li class="active"><a href="#message" data-toggle="tab">我的VIP信息</a></li>
						<li><a href="#inform" data-toggle="tab">消息通知</a></li>
						<li><a href="#buyrecord" data-toggle="tab">购买记录</a></li>
						<li><a href="#giverecord" data-toggle="tab">赠送记录</a></li>
					</ul>


					<div class="tab-content">
						<div class="tab-pane active" id="message">
							<span class="vipuse">成为vip会员</span><hr/>
	 							<div class="quan">

									<div class="col-xs-4 col-md-3">
										<div class="money">
											<div class="moneyNum">
												<p>一个月<span class="number">20</span>元
												</p>
												<input type="button" value="开通" class="openVip">
											</div>
										</div>

									</div>

									<div class="col-xs-4 col-md-3">
										<div class="money">
											<div class="moneyNum">
												<p>3个月<span class="number">50</span>元
												</p>
												<input type="button" value="开通" class="openVip">
											</div>
										</div>

									</div>

									<div class="col-xs-4 col-md-3">
										<div class="money">
											<div class="moneyNum">
												<p>年费<span class="number">198</span>元
												</p>
												<input type="button" value="开通" class="openVip">
											</div>
										</div>

									</div>

									<div class="col-xs-4 col-md-3">
										<div class="money">
											<div class="moneyNum">
												<p>六个月<span class="number">108</span>元
												</p>
												<input type="button" value="开通" class="openVip">
											</div>
										</div>

									</div>
									
								</div>

								<span class="vipuse">vip特权</span><hr/>
								<div class="ipic">
									<div class="col-xs-6 col-md-3">
										<span class="glyphicon glyphicon-film"></span>
										
									</div>
									<div class="col-xs-6 col-md-3">
										<span class="glyphicon glyphicon-film"></span>
										
									</div>
									<div class="col-xs-6 col-md-3">
										<span class="glyphicon glyphicon-film"></span>
										
									</div>
									<div class="col-xs-6 col-md-3">
										<span class="glyphicon glyphicon-film"></span>
										
									</div>
									<div class="col-xs-6 col-md-3">
										<span class="glyphicon glyphicon-film"></span>
										
									</div>
									<div class="col-xs-6 col-md-3">
									<span class="glyphicon glyphicon-film"></span>
									
									</div>
									<div class="col-xs-6 col-md-3">
										<span class="glyphicon glyphicon-film"></span>
										
									</div>
									<div class="col-xs-6 col-md-3">
										<span class="glyphicon glyphicon-film"></span>
										
									</div>
									<div class="col-xs-6 col-md-3">
										<span class="glyphicon glyphicon-film"></span>
										
									</div>
									<div class="col-xs-6 col-md-3">
										<span class="glyphicon glyphicon-film"></span>
										
									</div>
								</div>


								
								<span class="vipuse">vip观影券</span><hr/>
								<span class="vipuse">vip专享</span><hr/>

							</div>

							<div class="tab-pane" id="inform">
								<p>无消息通知</p>
							</div>

							<div class="tab-pane" id="buyrecord">
								<p>暂无购买记录</p>
							</div>

							<div class="tab-pane" id="giverecord">hkhkj</div>
						</div>
					
					</div>

				
				
<!--v币商城-->
				<div class="tab-pane shop" id="shop">
						<ul class="nav nav-tabs nav-center" id="shopTab">
								<li class="active"><a href="#chioce" data-toggle="tab">精选</a></li>
								<li><a href="#watchMovie" data-toggle="tab">观影</a></li>
								<li><a href="#life" data-toggle="tab">生活</a></li>
								<li><a href="#game" data-toggle="tab">游戏</a></li>
						</ul>
						<div class="tab-content store">
								<div class="tab-pane active" id="chioce">
									<table class="table table-striped table-bordered table-hover">
										<thead>
											<tr>
												<th>
												<img src="img/voucher1.png"><br>电影视频VIP3元代金券<br><span>300v币</span></th>
												<th><img src="img/voucher2.png"><br>电影视频VIP3元代金券<br><span>300v币</span></th>
												<th><img src="img/voucher3.png"><br>电影视频VIP3元代金券<br><span>300v币</span></th>
											</tr>
											<tr>
												<th><img src="img/voucher4.png"><br>电影视频VIP3元代金券<br><span>300v币</span></th>
												<th><span><img src="img/voucher5.png"><br>电影视频VIP3元代金券<br>300v币</span></th>
												<th><span><img src="img/voucher6.png"><br>电影视频VIP3元代金券<br>300v币</span></th>
											</tr>
										</thead>
									</table>

								</div>
								<div class="tab-pane" id="watchMovie">
									<table class="table table-striped table-bordered table-hover">
										<thead>
											<tr>
												<th>
												<img src="img/voucher1.png"><br>电影视频VIP3元代金券<br><span>300v币</span></th>
												<th><img src="img/voucher2.png"><br>电影视频VIP3元代金券<br><span>300v币</span></th>
												<th><img src="img/voucher3.png"><br>电影视频VIP3元代金券<br><span>300v币</span></th>
											</tr>
											<tr>
												<th><img src="img/voucher4.png"><br>电影视频VIP3元代金券<br><span>300v币</span></th>
												<th><span><img src="img/voucher5.png"><br>电影视频VIP3元代金券<br>300v币</span></th>
												<th><span><img src="img/voucher6.png"><br>电影视频VIP3元代金券<br>300v币</span></th>
											</tr>
										</thead>
									</table>

								</div>
								<div class="tab-pane" id="life">
									<table class="table table-striped table-bordered table-hover">
										<thead>
											<tr>
												<th>
												<img src="img/voucher1.png"><br>电影视频VIP3元代金券<br><span>300v币</span></th>
												<th><img src="img/voucher2.png"><br>电影视频VIP3元代金券<br><span>300v币</span></th>
												<th><img src="img/voucher3.png"><br>电影视频VIP3元代金券<br><span>300v币</span></th>
											</tr>
											<tr>
												<th><img src="img/voucher4.png"><br>电影视频VIP3元代金券<br><span>300v币</span></th>
												<th><span><img src="img/voucher5.png"><br>电影视频VIP3元代金券<br>300v币</span></th>
												<th><span><img src="img/voucher6.png"><br>电影视频VIP3元代金券<br>300v币</span></th>
											</tr>
										</thead>
									</table>

								</div>
								<div class="tab-pane" id="game">
									<table class="table table-striped table-bordered table-hover">
										<thead>
											<tr>
												<th>
												<img src="img/voucher1.png"><br>电影视频VIP3元代金券<br><span>300v币</span></th>
												<th><img src="img/voucher2.png"><br>电影视频VIP3元代金券<br><span>300v币</span></th>
												<th><img src="img/voucher3.png"><br>电影视频VIP3元代金券<br><span>300v币</span></th>
											</tr>
											<tr>
												<th><img src="img/voucher4.png"><br>电影视频VIP3元代金券<br><span>300v币</span></th>
												<th><span><img src="img/voucher5.png"><br>电影视频VIP3元代金券<br>300v币</span></th>
												<th><span><img src="img/voucher6.png"><br>电影视频VIP3元代金券<br>300v币</span></th>
											</tr>
										</thead>
									</table>

								</div>
						</div>
				</div>
				
				



				<!-- 历史记录 -->
				<div class="tab-pane active main-pane" id="whistory">
					<span class="glyphicon glyphicon-record">今天</span><hr/>
						<div class="row record1">	
								
						</div>
					<!-- 一周内 -->
					<span class="glyphicon glyphicon-record">本周</span><hr/>

						<div class="rows record2">
							
						</div>
 
				</div>





				<div class="tab-pane main-pane" id="watchOrder">

						<div class="row looklist">
							
							
								
						</div>
				
				</div>
<!-- 				购物车 -->
				<div class="tab-pane main-pane" id="shopingCart">
					<div class="cart-content">
						<img src="img/cart.png">
						<p class="cart">购物车里什么也没有</p>
					</div>
				</div>
<!--          电影票-->
				<div class="tab-pane main-pane" id="ticket">
					<div class="cart-content">
						<img src="img/ticket.png">
						<p class="cart">没有可使用的电影票</p>
					</div>
				</div>
<!--订阅			-->
				<div class="tab-pane main-pane" id="subscibe">
					
					<ul class="nav nav-tabs nav-center" id="vipTab">
						<li class="active"><a href="#userPerson" data-toggle="tab">用户</a></li>
						<li><a href="#star" data-toggle="tab">球星</a></li>
						
					</ul>
					<div class="tab-content">
						<div class="tab-pane active" id="userPerson">
							<span></span><hr>

						</div>
						<div class="tab-pane" id="star">
							<p>没有关注的球星</p>
						</div>
					</div>
					
				</div>
<!-- 				评论 -->
				<div class="tab-pane main-pane" id="comment">
						<ul class="nav nav-tabs nav-center" id="vipTab">
							<li class="active"><a href="#yourMessage" data-toggle="tab">消息</a></li>
							<li><a href="#deepRead" data-toggle="tab">深度解读</a></li>
							<li><a href="#shortWord" data-toggle="tab">短评</a></li>
							<li><a href="#bulScreen" data-toggle="tab">弹幕</a></li>
						
					</ul>
					<div class="tab-content">
						<div class="tab-pane active" id="yourMessage">
							<span>暂时没有消息</span><hr>

						</div>
						<div class="tab-pane" id="deepRead">
							<p>暂时没有深度解读</p>
						</div>
						<div class="tab-pane" id="shortWord">
							<p>暂时没有短评</p>
						</div>
						<div class="tab-pane" id="bulScreen">
							<p>您还没有发布过弹幕</p>
						</div>
					
					</div>


				</div>
<!-- 				消息中心 -->
				<div class="tab-pane main-pane systemMessage" id="myMessage">
						<ul class="nav nav-tabs nav-center" id="vipTab">
						<li class="active"><a href="#myMessage" data-toggle="tab">我的信息</a></li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane" id="myMessage">没有系统消息</div>
					</div>
				</div>

<!-- 				上传视频 -->
				<div class="tab-pane main-pane" id="uploading">
					<form>
						<input id="file" type="file" name="file" class="">
						<button id="upload" type="button">上传</button>
					</form>>
				</div>
<!-- 				视频管理 -->
				<div class="tab-pane main-pane" id="channelManage">
						<ul class="nav nav-tabs videoManage" role="tablist">
							<li class="active"><a href="#video" data-toggle="tab">视频</a></li>
							<li><a href="#album" data-toggle="tab">专辑</a></li>  
							
						</ul>
						
						<div class="tab-content">
							<div class="tab-pane active" id="video">
								<div class="navbar-inner newalbum">  
						            <ul class="nav nav-pills">  
						                <li class="dropdown"><a href="#" class="title">专辑<span class="caret"></span></a>  
						                    <ul class="dropdown-menu">  
						                        <li><a href="#">新建专辑</a></li>  
						                        <li><a href="#">删除</a></li>  
						                          
						                    </ul>  
						                </li>  
						            </ul>  
						        </div>  
								<div class="navbar-inner all">  
						            <ul class="nav nav-pills">  
						                <li class="dropdown"><a href="#" class="title">全部<span class="caret"></span></a>  
						                    <ul class="dropdown-menu">  
						                        <li><a href="#"></a></li>  
						                        <li><a href="#">观看次数(从少到多)</a></li>  
						                        <li><a href="#">观看次数(从多到少)</a></li>  
						                        <li></li>
						                        <li><a href="#">已发布</a></li> 
						                        <li><a href="#">未发布</a></li>
						                        <li><a href="#">已制作专辑</a></li> <li><a href="#">未制作专辑</a></li>
						                        <li><a href="#">视频推荐</a></li>    
						                    </ul>  
						                </li>  
						            </ul>  
						        </div>  
							
							<div class="tab-pane" id="album">
								
							</div>

						</div>
						</div>
				
				</div>
<!-- 				个人频道 -->

				<div class="tab-pane main-pane" id="personalChannel">

						ojsifdldsfdshfkjdshfsk
				</div>

			</div>
		
	</div>


	
</div>


</template>

  

<script>
import "../src/assets/css/personal.css"
import "../src/assets/js/record.js"
import "../src/assets/js/user.js"

export default {
  name: 'app'
}

</script>

<style>

</style>
