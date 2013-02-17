<div class="roll-outer">
	<ul class="roll">
		<?php for($i=1;$i<16;$i++): ?>
		<li class="roll-item">
		<?php if ($i%2==0): ?>
		项目<?php echo $i; ?>
		<?php else: ?>
		项目<br>项目<?php echo $i; ?>
		<?php endif; ?>
		</li>
		<?php endfor; ?>
	</ul>
</div>