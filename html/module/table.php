<?php $start = 0; $end = 10; ?>
<table class="shift">
	<tbody>
		<?php for ($i = $start; $i < $end; $i++): ?>
		<?php
		$odd_even = $i%2 == 0 ? 'odd' : 'even';
		$first = $i == $start ? ' first' : '';
		$last = $i == $end - 1 ? ' last' : '';
		?>
		<tr class="<?php echo $odd_even . $first . $last; ?>"><td><?php echo $i; ?></td></tr>
		<?php endfor; ?>
	</tbody>
</table>