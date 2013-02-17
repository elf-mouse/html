<?php
$image = 'wp-menu-image';
$arrow = 'wp-menu-arrow';

$has_submenu = ' wp-has-submenu';
$close = ' wp-not-current-submenu';
$top = ' menu-top';
$last = ' menu-top-last';
$separator = ' wp-menu-separator';

$icon = array(
        'dashboard' => ' menu-icon-dashboard',
        'post' => ' menu-icon-post',
        'media' => ' menu-icon-media',
        'links' => ' menu-icon-links',
        'page' => ' menu-icon-page',
        'comments' => ' menu-icon-comments',
        'appearance' => ' menu-icon-appearance',
        'plugins' => ' menu-icon-plugins',
        'users' => ' menu-icon-users',
        'tools' => ' menu-icon-tools',
        'settings' => ' menu-icon-settings'
);

$open  = ' wp-has-current-submenu wp-menu-open';
$current = ' current';
?>
<div id="adminmenuback"></div>
<div id="adminmenuwrap">
	<div id="adminmenushadow"></div>
	<ul id="adminmenu" data-role="navigation">
		<li class="<?php echo $has_submenu . $open . $top . $last . $icon['dashboard']; ?>" id="menu-dashboard">
			<div class='<?php echo $image; ?>'><a href='index.php'><br></a></div>
			<div class="<?php echo $arrow; ?>"><div></div></div>
			<a href='index.php' class="<?php echo $has_submenu . $open . $top . $last . $icon['dashboard']; ?>">Dashboard</a>
			<div class='wp-submenu'>
				<div class='wp-submenu-wrap'>
					<div class='wp-submenu-head'>Dashboard</div>
					<ul>
						<li class="<?php echo $current; ?>"><a href='index.php' class="<?php echo $current; ?>">Home</a></li>
						<li><a href='update-core.php'>Updates<span class='update-plugins count-0' title=''><span class='update-count'>0</span></span></a></li>
					</ul>
				</div>
			</div>
		</li>
		<li class="<?php echo $close . $separator; ?>"><div class="separator"></div></li>
		<li class="<?php echo $has_submenu . $close . $top . $icon['post']; ?>" id="menu-posts">
			<div class='<?php echo $image; ?>'><a href='edit.php'><br></a></div>
			<div class="<?php echo $arrow; ?>"><div></div></div>
			<a href='edit.php' class="<?php echo $has_submenu . $close . $top . $icon['post']; ?>">Posts</a>
			<div class='wp-submenu'>
				<div class='wp-submenu-wrap'>
					<div class='wp-submenu-head'>Posts</div>
					<ul>
						<li><a href='edit.php'>All Posts</a></li>
						<li><a href='post-new.php'>Add New</a></li>
						<li><a href='edit-tags.php?taxonomy=category'>Categories</a></li>
						<li><a href='edit-tags.php?taxonomy=post_tag'>Tags</a></li>
					</ul>
				</div>
			</div>
		</li>
		<li class="<?php echo $has_submenu . $close . $top . $icon['media']; ?>" id="menu-media">
			<div class='<?php echo $image; ?>'><a href='upload.php'><br></a></div>
			<div class="<?php echo $arrow; ?>"><div></div></div>
			<a href='upload.php' class="<?php echo $has_submenu . $close . $top . $icon['media']; ?>">Media</a>
			<div class='wp-submenu'>
				<div class='wp-submenu-wrap'>
					<div class='wp-submenu-head'>Media</div>
					<ul>
						<li><a href='upload.php'>Library</a></li>
						<li><a href='media-new.php'>Add New</a></li>
					</ul>
				</div>
			</div>
		</li>
		<li class="<?php echo $has_submenu . $close . $top . $icon['links']; ?>" id="menu-links">
			<div class='<?php echo $image; ?>'><a href='link-manager.php'><br></a></div>
			<div class="<?php echo $arrow; ?>"><div></div></div>
			<a href='link-manager.php' class="<?php echo $has_submenu . $close . $top . $icon['links']; ?>">Links</a>
			<div class='wp-submenu'>
				<div class='wp-submenu-wrap'>
					<div class='wp-submenu-head'>Links</div>
					<ul>
						<li><a href='link-manager.php'>All Links</a></li>
						<li><a href='link-add.php'>Add New</a></li>
						<li><a href='edit-tags.php?taxonomy=link_category'>Link Categories</a></li>
					</ul>
				</div>
			</div>
		</li>
		<li class="<?php echo $has_submenu . $close . $top . $icon['page']; ?>" id="menu-pages">
			<div class='<?php echo $image; ?>'><a href='edit.php?post_type=page'><br></a></div>
			<div class="<?php echo $arrow; ?>"><div></div></div>
			<a href='edit.php?post_type=page' class="<?php echo $has_submenu . $close . $top . $icon['page']; ?>">Pages</a>
			<div class='wp-submenu'>
				<div class='wp-submenu-wrap'>
					<div class='wp-submenu-head'>Pages</div>
					<ul>
						<li><a href='edit.php?post_type=page'>All Pages</a></li>
						<li><a href='post-new.php?post_type=page'>Add New</a></li>
					</ul>
				</div>
			</div>
		</li>
		<li class="<?php echo $close . $top . $last . $icon['comments']; ?>" id="menu-comments">
			<div class='<?php echo $image; ?>'><a href='edit-comments.php'><br></a></div>
			<div class="<?php echo $arrow; ?>"><div></div></div>
			<a href='edit-comments.php' class="<?php echo $close . $top . $last . $icon['comments']; ?>">Comments<span class='awaiting-mod count-0'><span class='pending-count'>0</span></span></a>
		</li>
		<li class="<?php echo $close . $separator; ?>"><div class="separator"></div></li>
		<li class="<?php echo $has_submenu . $close . $top . $icon['appearance']; ?>" id="menu-appearance">
			<div class='<?php echo $image; ?>'><a href='themes.php'><br></a></div>
			<div class="<?php echo $arrow; ?>"><div></div></div>
			<a href='themes.php' class="<?php echo $has_submenu . $close . $top . $icon['appearance']; ?>">Appearance</a>
			<div class='wp-submenu'>
				<div class='wp-submenu-wrap'>
					<div class='wp-submenu-head'>Appearance</div>
					<ul>
						<li><a href='themes.php'>Themes</a></li>
						<li><a href='widgets.php'>Widgets</a></li>
						<li><a href='nav-menus.php'>Menus</a></li>
						<li><a href='themes.php?page=theme_options'>Theme Options</a></li>
						<li><a href='themes.php?page=custom-header'>Header</a></li>
						<li><a href='themes.php?page=custom-background'>Background</a></li>
						<li><a href='theme-editor.php'>Editor</a></li>
					</ul>
				</div>
			</div>
		</li>
		<li class="<?php echo $has_submenu . $close . $top . $icon['plugins']; ?>" id="menu-plugins">
			<div class='<?php echo $image; ?>'><a href='plugins.php'><br></a></div>
			<div class="<?php echo $arrow; ?>"><div></div></div>
			<a href='plugins.php' class="<?php echo $has_submenu . $close . $top . $icon['plugins']; ?>">Plugins<span class='update-plugins count-0'><span class='plugin-count'>0</span></span></a>
			<div class='wp-submenu'>
				<div class='wp-submenu-wrap'>
					<div class='wp-submenu-head'>Plugins<span class='update-plugins count-0'><span class='plugin-count'>0</span></span></div>
					<ul>
						<li><a href='plugins.php'>Installed Plugins</a></li>
						<li><a href='plugin-install.php'>Add New</a></li>
						<li><a href='plugin-editor.php'>Editor</a></li>
					</ul>
				</div>
			</div>
		</li>
		<li class="<?php echo $has_submenu . $close . $top . $icon['users']; ?>" id="menu-users">
			<div class='<?php echo $image; ?>'><a href='users.php'><br></a></div>
			<div class="<?php echo $arrow; ?>"><div></div></div>
			<a href='users.php' class="<?php echo $has_submenu . $close . $top . $icon['users']; ?>">Users</a>
			<div class='wp-submenu'>
				<div class='wp-submenu-wrap'>
					<div class='wp-submenu-head'>Users</div>
					<ul>
						<li><a href='users.php'>All Users</a></li>
						<li><a href='user-new.php'>Add New</a></li>
						<li><a href='profile.php'>Your Profile</a></li>
					</ul>
				</div>
			</div>
		</li>
		<li class="<?php echo $has_submenu . $close . $top . $icon['tools']; ?>" id="menu-tools">
			<div class='<?php echo $image; ?>'><a href='tools.php'><br></a></div>
			<div class="<?php echo $arrow; ?>"><div></div></div>
			<a href='tools.php' class="<?php echo $has_submenu . $close . $top . $icon['tools']; ?>">Tools</a>
			<div class='wp-submenu'>
				<div class='wp-submenu-wrap'>
					<div class='wp-submenu-head'>Tools</div>
					<ul>
						<li><a href='tools.php'>Available Tools</a></li>
						<li><a href='import.php'>Import</a></li>
						<li><a href='export.php'>Export</a></li>
					</ul>
				</div>
			</div>
		</li>
		<li class="<?php echo $has_submenu . $close . $top . $last . $icon['settings']; ?>" id="menu-settings">
			<div class='<?php echo $image; ?>'><a href='options-general.php'><br></a></div>
			<div class="<?php echo $arrow; ?>"><div></div></div>
			<a href='options-general.php' class="<?php echo $has_submenu . $close . $top . $last . $icon['settings']; ?>">Settings</a>
			<div class='wp-submenu'>
				<div class='wp-submenu-wrap'>
					<div class='wp-submenu-head'>Settings</div>
					<ul>
						<li><a href='options-general.php'>General</a></li>
						<li><a href='options-writing.php'>Writing</a></li>
						<li><a href='options-reading.php'>Reading</a></li>
						<li><a href='options-discussion.php'>Discussion</a></li>
						<li><a href='options-media.php'>Media</a></li>
						<li><a href='options-privacy.php'>Privacy</a></li>
						<li><a href='options-permalink.php'>Permalinks</a></li>
					</ul>
				</div>
			</div>
		</li>
		<li id="collapse-menu" class="hide-if-no-js"><div id="collapse-button"><div></div></div><span>Collapse menu</span></li>
	</ul>
</div>

<script src="js/jquery/plugins/jquery.hoverIntent.js"></script>
<script src="js/util.js"></script>