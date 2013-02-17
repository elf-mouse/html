<?php $count = 10; ?>
<ul class="grid">
	<?php for($i=0;$i<$count;$i++): ?>
	<li class="grid-item">
		<!-- <div> -->
		<figure>
			<a href="#"><img src="images/T1poruXfXbXXbbse30_034827.jpg_210x210.jpg" alt="" width="200" height="200"></a>
			<!-- <h3> -->
			<figcaption>图片标题</figcaption>
		</figure>
		<ul class="attribute">
			<li class="price">
			    <em>22.45</em>
			    <span class="person-count">最近<b>25</b>人成交<b>32</b>笔</span>
			</li>
			<li class="shipment">
			    <span class="fee">运费</span>
			    <span class="loc">地点</span>
			</li>
			<li class="seller">
			    <a href="#">店铺名</a>
			    <span class="shopinfo">店铺信息</span>
			</li>
		</ul>
		<div class="legend">
			<a href="#">A</a>
			<a href="#">B</a>
			<a href="#">C</a>
		</div>
		<div class="remarked">
		    <a href="#"><img class="avatar" src="images/avatar.jpeg" alt=""></a>
		    <a href="#">董翔宇</a> 说实话，海报上如果很吓人的话，说明这个电影其实不恐怖，商业宣传，你们懂得。
		</div>
		<ul class="comment">
		</ul>
	</li>
	<?php endfor; ?>
</ul>
