<div class="fixed-container fixed-outer">
	<div class="dialog-container"></div>
	<div class="dialog-overlay"></div>
	<nav class="fixed-left">
		<div class="nav-inner">nav</div>
	</nav>
	<div class="fixed-body">
		<div class="fixed-top">top</div>
		<div class="fixed-content">
			<?php for($i=0;$i<100;$i++): ?>
			<?php echo $i.'<br>'; ?>
			<?php endfor; ?>
		</div>
		<div class="fixed-bottom">bottom</div>
	</div>
</div>