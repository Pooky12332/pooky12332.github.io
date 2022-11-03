$('body').terminal({
// Main commands
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
		this.echo('[[!;;;;https://github.com/jcubic/jquery.terminal]https://github.com/jcubic/jquery.terminal]');
		this.echo('The site I used for the cat picture:')
		this.echo('[[!;;;;https://placekitten.com/]https://placekitten.com/]\n');
	},
	fun: function(arg) {
		if (arg != undefined) {
  		switch (arg) {
  			case '-p':
  				this.echo(pDia.innerHTML)
  				break;
  			case '--cat':
  				const img = $('<img src="https://placekitten.com/200/300">');
  				this.echo(img);
  				break;
  			case '--nw':
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
  			case '--colour':
  				this.echo('[[;red;]I am red!]')
  				this.echo('[[;green;]I am green!]')
  				this.echo('[[;blue;]I am blue!]\n')
  				break;
  			case '--embedvid':
  				const box = $('<iframe width="560" height="315" src="https://www.youtube.com/embed/O58N8Mmv0QU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  				this.echo(box);
  				break;
  			case '--animtest':
					this.echo('This is the typing animation test!\nThis is here so I can test if this animation works on other platforms\nIf you encounter a glitch with this animation\nI am probably aware of it and have it on my bug list\nSee ya!\n', { typing: true, delay: 100 });
  				break;
  			default:
  				this.error('Invalid arg used!\n');
  				break;
  		}
  	} else {
  		this.echo(funDia.innerHTML)
  	}
	},

// Project commands
	coding: function() {
		this.echo('Some of my coding work can be found here:');
		this.echo('[[!;;;;https://github.com/Pooky12332]https://github.com/Pooky12332]\n');
	},
	games: function() {
		this.echo('Most of my games can be found here:');
		this.echo('[[!;;;;https://gamejolt.com/games/diein/505164]https://gamejolt.com/games/diein/505164]\n');
	},
	videos: function() {
		this.echo('Right now, im working on a large scale video\nSo for now, my channel is blank\nOnce its finished, you can view it here or on my channel\nMy channel can be found here:');
		this.echo('[[!;;;;https://www.youtube.com/channel/UCFIPFOkm5oHPcIQiVGLHCSA]https://www.youtube.com/channel/UCFIPFOkm5oHPcIQiVGLHCSA]\n');
	},
	music: function() {
		const box = $('<iframe style="border: 0; width: 400px; height: 472px;" src="https://bandcamp.com/EmbeddedPlayer/album=2787304646/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/" seamless><a href="https://pooky1233.bandcamp.com/album/open-water">Open Water by Pooky</a></iframe>')
		this.echo('This is my album, its mostly lofi music that I made\nIt was made over a week\nGive it a listen below\n')
		this.echo(box);
	},

// Other commands
	reboot: function(){
		location.reload();
	},
	exit: function(){
		window.close();
	},
	python: function(){
		const box = $('<iframe src="https://trinket.io/embed/python3/7c6e42960a" width="1000" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>');
		this.echo(box);
	},
	theme: function(arg){
		var r = document.querySelector('.terminal');

		if (arg != undefined){
			switch (arg) {
				case '--light':
					r.style.setProperty('--color', 'black');
					r.style.setProperty('--background', 'white');
					this.echo('Theme changed to: light');
					break;
				case '--dark':
					r.style.setProperty('--color', 'lightgray');
					r.style.setProperty('--background', 'black');
					this.echo('Theme changed to: dark');
					break;
				default:
					this.error('Invalid arg used!\n');
					break;
			}
		} else {
			this.echo('--light - Change to the light theme\n--dark - Change to the dark theme (defualt)\n');
		}
	},
	txtcol: function(arg1, arg2){
		var r = document.querySelector('.terminal');

		if (arg1 != undefined) {
			switch (arg1) {
				case '--get':
					var rs = getComputedStyle(r);
					this.echo('Currently the text is' + rs.getPropertyValue('--color') + '\n');
					break;
				case '--set':
					r.style.setProperty('--color', arg2);
					break;
				default:
					this.error('Invalid arg used!\n');
					break;
			}
		} else {
			this.echo('--get - Gets the current colour of text\n--set - Sets a new colour of text\n')
		}
	},
	bkgcol: function(arg1, arg2){
		var r = document.querySelector('.terminal');

		if (arg1 != undefined) {
			switch (arg1) {
				case '--get':
					var rs = getComputedStyle(r);

					this.echo('Currently the text is' + rs.getPropertyValue('--background') + '\n');
					break;
				case '--set':
					r.style.setProperty('--background', arg2);
					break;
				default:
					this.error('Invalid arg used!\n');
					break;
			}
		} else {
			this.echo('--get - Gets the current colour of the background\n--set - Sets a new colour of the background\n')
		}
	}
}, {
	checkArity: false,
	greetings: introDia.innerHTML
});