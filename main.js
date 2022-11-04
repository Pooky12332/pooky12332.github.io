var argIndi = '-';
var argIndiLong = '--';

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
	argc: function(){
		if (argIndi == '-') {
			argIndi = '+';
			argIndiLong = '++';
			this.echo('Argument Indicator is now set to \'+\'\n');
		} else {
			argIndi = '-';
			argIndiLong = '--';
			this.echo('Argument Indicator is now set to \'-\'\n');
		}
	},
	fun: function(arg) {
		if (arg != undefined) {
  		switch (arg) {
  			case argIndiLong + 'cat':
  				const img = $('<img src="https://placekitten.com/200/300">');
  				this.echo(img);
  				break;
  			case argIndiLong + 'cat2':
  				const img2 = $('<img src="https://placekitten.com/g/200/300">');
  				this.echo(img2);
  				break;
  			case argIndiLong + 'colour':
  				this.echo('[[;red;]I am red!]')
  				this.echo('[[;green;]I am green!]')
  				this.echo('[[;blue;]I am blue!]\n')
  				break;
  			case argIndiLong + 'embedvid':
  				const box = $('<iframe width="560" height="315" src="https://www.youtube.com/embed/O58N8Mmv0QU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  				this.echo(box);
  				break;
  			case argIndiLong + 'animtest':
					this.echo('This is the typing animation test!\nThis is here so I can test if this animation works on other platforms\nIf you encounter a glitch with this animation\nI am probably aware of it and have it on my bug list\nSee ya!\n', { typing: true, delay: 100 });
  				break;
  			default:
  				this.error('Invalid arg used!');
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
	date: function(){
		const dt = new Date();
		this.echo('The current date and time is: ' + dt + '\n')
	},
	python: function(){
		const box = $('<iframe src="https://trinket.io/embed/python3/7c6e42960a" width="1000" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>');
		this.echo(box);
	},
	theme: function(arg){
		var r = document.querySelector('.terminal');

		if (arg != undefined){
			switch (arg) {
				case argIndi + 'l':
					r.style.setProperty('--color', 'black');
					r.style.setProperty('--background', 'white');
					r.style.setProperty('--link-color', 'black');
					this.echo('Theme changed to: light\n');
					break;
				case argIndi + 'd':
					r.style.setProperty('--color', 'lightgray');
					r.style.setProperty('--background', 'black');
					r.style.setProperty('--link-color', 'lightgray');
					this.echo('Theme changed to: dark\n');
					break;
				default:
					this.error('Invalid arg used!');
					break;
			}
		} else {
			this.echo('-l - Change to the light theme\n-d - Change to the dark theme (defualt)\n');
		}
	},
	txtcol: function(arg1, arg2){
		var r = document.querySelector('.terminal');

		if (arg1 != undefined) {
			switch (arg1) {
				case argIndi + 'g':
					var rs = getComputedStyle(r);
					this.echo('Currently the text is ' + rs.getPropertyValue('--color') + '\n');
					break;
				case argIndi + 's':
					r.style.setProperty('--color', arg2);
					break;
				default:
					this.error('Invalid arg used!');
					break;
			}
		} else {
			this.echo('-g - Gets the current colour of text\n-s - Sets a new colour of text\n')
		}
	},
	bkgcol: function(arg1, arg2){
		var r = document.querySelector('.terminal');

		if (arg1 != undefined) {
			switch (arg1) {
				case argIndi + 'g':
					var rs = getComputedStyle(r);

					this.echo('Currently the text is ' + rs.getPropertyValue('--background') + '\n');
					break;
				case argIndi + 's':
					r.style.setProperty('--background', arg2);
					break;
				default:
					this.error('Invalid arg used!');
					break;
			}
		} else {
			this.echo('-g - Gets the current colour of the background\n-s - Sets a new colour of the background\n')
		}
	},
}, {

// Flags and initialization
	onInit() {
		const sequence = ['Hello, Welcome to my site!', 'My name is Ewan Clarke, I also go by Pooky', 'I like to make and code things', 'Type \'help\' for a list of all commands', 'Type \'info\' to learn more about me', ' '];
		const term = this;

		const splashList = ['', 'It\'s the first of the month!', 'Follow the train, CJ!', 'Better then UNIX!', 'More addictive then Factorio!', 'More then 200 lines of code!', 'Stuck in alpha!', 'Keyboard compatible!', 'Now in 3D!', '20 GOTO 10', 'That last splash was basic!', 'Sublime!', 'As seen on tv!', 'Mobile is still broken!', 'Now your thinking with portals!', 'No stolen code here!', 'Rise and shine, Mister Freeman!', 'Contains cats!', 'Killing goombas since 1983!', 'Cookie free!', 'Waterproof!', 'One of a kind!', 'Now With Multiplayer!', 'Lookin\' out for you, like I always do!', 'Bulletproof!', 'One of your five a day!', '/give @a tnt 64', 'Now in colour!', 'Do a barrel roll!', '4 u, <3!', 'I\'m feeling lucky!', 'See you next month!'];
		var date = new Date();
		var month = date.getMonth()

		term.pause(true);
		(function loop() {
			term.echo(sequence.shift(), {typing: true, delay: 40});
			if (sequence.length) {
				setTimeout(loop, 2500);
			} else {
				term.resume();
				term.echo('\n' + splashList[date.getDate()])
				term.echo("\n[[i;#ff0000;]This site is still in alpha and has some bugs!]\n[[i;#ff0000;]If your on mobile, Type 'argc' to use args,]\n[[i;#ff0000;]and please use 'clear' after every command!]");
			};
		})();
	},

	checkArity: false,
	greetings: introDia.innerHTML
});