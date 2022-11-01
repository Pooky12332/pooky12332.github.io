$('body').terminal({
	help: function() {
		this.echo(helpDia.innerHTML);
	},
	info: function() {
		this.echo(infoDia.innerHTML);
	},
	social: function() {
		this.echo('Here are all of my social media');
		this.echo('Best way to contact me is to message me on one of these:');
		this.echo('[[!;;;;https://www.youtube.com/channel/UCFIPFOkm5oHPcIQiVGLHCSA]YouTube]');
		this.echo('[[!;;;;https://twitter.com/Pooky1233]Twitter]');
		this.echo('[[!;;;;https://www.instagram.com/pooky1269/]Instagram]');
		this.echo('[[!;;;;https://www.twitch.tv/pooky1233]Twitch]');
		this.echo('[[!;;;;https://steamcommunity.com/profiles/76561198354854665/]Steam]');
		this.echo('[[!;;;;https://open.spotify.com/user/saty1vy5b13qa7dmm3ow1fmk3?si=475487d2be904b93]Spotify]');
		this.echo('[[!;;;;https://github.com/Pooky12332]Github]\n');
	},
	credits: function() {
		this.echo('Primary library I used to make this site:');
		this.echo('[[!;;;;https://github.com/jcubic/jquery.terminal]https://github.com/jcubic/jquery.terminal]\n');
	},
	fun: function(arg) {
		if (arg != undefined) {
  		switch (arg) {
  			case '--cat':
  				const img = $('<img src="https://placekitten.com/200/300">');
  				this.echo(img);
  				break;
  			case '--nicew':
  				num = Math.floor(Math.random() * 8);
  				switch (num) {
  					case 0:
  						this.echo('At least your not dead!\n');
  						break;
  					case 1:
  						this.echo('I hope you have a nice day!\n');
  						break;
  					case 2:
  						this.echo('Keep going, I know you can!\n');
  						break;
  					case 3:
  						this.echo('You look great today\n');
  						break;
  					case 4:
  						this.echo('Hope your doing awesome today!\n');
  						break;
  					case 5:
  						this.echo('You got this, dont worry!\n');
  						break;
  					case 6:
  						this.echo('Goodevening, goodmorning and goodnight!\n');
  						break;
  					case 7:
  						this.echo('Believe in yourself!\n');
  						break;
  				}
  				break;
  			default:
  				this.error('Invalid arg used!\n');
  				break;
  		}
  	} else {
  		this.echo(funDia.innerHTML)
  	}
	},
	coding: function() {
		// Needs to be made when the site is being put online
		this.echo('Some of my coding work can be found here:');
		this.echo('[[!;;;;https://github.com/Pooky12332]https://github.com/Pooky12332]\n');
	},
	games: function() {
		// Upload HTML games to diffrent pages, can talk about
		this.echo('Most of my games can be found here:');
		this.echo('[[!;;;;https://gamejolt.com/games/diein/505164]https://gamejolt.com/games/diein/505164]\n');
	},
	pictures: function() {
		// Page needs to be made to display pictures
		this.echo('This is a placeholder\n');
	},
	videos: function() {
		this.echo('Right now, im working on a large scale video\nSo for now, my channel is blank\nOnce its finished, you can view it here or on my channel\nMy channel can be found here:');
		this.echo('[[!;;;;https://www.youtube.com/channel/UCFIPFOkm5oHPcIQiVGLHCSA]https://www.youtube.com/channel/UCFIPFOkm5oHPcIQiVGLHCSA]\n');
	},
	music: function() {
		const box = $('<iframe style="border: 0; width: 400px; height: 472px;" src="https://bandcamp.com/EmbeddedPlayer/album=2787304646/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/" seamless><a href="https://pooky1233.bandcamp.com/album/open-water">Open Water by Pooky</a></iframe>')
		this.echo('This is my album, its mostly lofi music that I made\nIt was made over a week and I loved making it\n')
		this.echo(box);
	},
	python: function(){
		const box = $('<iframe src="https://trinket.io/embed/python3/7c6e42960a" width="1000" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>');
		this.echo(box);
	}
}, {
	checkArity: false,
	greetings: introDia.innerHTML
});