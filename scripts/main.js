$(function () {
	'use strict';
	FastClick.attach(document.body);
	Goodnight.css('stylesheets/dark.css');
	var y, newtab;
	setTimeout(function () {
		$('#container').fadeIn('slow');
	}, 1000);
	$('.toggle').click(function () {
		$(this).parent().children('img').toggle();
	});
	/* Take input from text box */
	$('input').keydown(function (e) {
		if (e.which === 13 && $(this).val() !== '') {
			y = $(this).val().charAt(0).toUpperCase() + $(this).val().slice(1);
			y.split('<').join('&lt;');
			$(this).val('').blur();
			$('<div class="conversation you">' + y + '</div>').appendTo('#conversation-box').fadeIn('slow', function () {
				y.split('&lt;').join('<');
				app(y);
			});
		}
	});
	function app (y) {
		/* Parse string */
		y = y.toLowerCase();
		y = y.split('?').join('');
		y = y.split('!').join('');
		y = y.split('what\'s').join('what is');
		y = y.split('you\'re').join('you are');
		if (y.slice(-1) === '.') {
			y = y.slice(0, y.length - 1);
		}
		/* Offline Features */
		if (y === 'clear' || y === 'clear log' || y === 'clear logs') {
			say('Clearing log&hellip;');
			setTimeout(function () {
				$('#conversation-box').fadeOut('slow', function () {
					$('#conversation-box').empty().show();
				});
			}, 1000);
		} else if (y === 'hi' || y === 'hello' || y === 'hey' || y === 'greetings') {
			say(['Hi', 'Hello', 'Hey', 'Greetings'][Math.floor(Math.random() * 4)] + ['.', '!'][Math.floor(Math.random() * 2)]);
		} else if (y === 'what are you' || y === 'who are you' || y === 'what do you do') {
			say('I am Fuchsia. An intelligient virtual personal assistant for the web. I\'m based off of <a href="https://github.com/jaredcubilla/jarvis" target="_blank">Jared Cubilla\'s Jarvis</a>, but I\'m not voice-powered, which means that I can <del>say</del> write anything I want. You can find my documentation at <a href="https://github.com/355over113/fuchsia" target="_blank">https://github.com/355over113/fuchsia</a>.');
		} else if (y === 'how are you' || y === 'how do you do' || y === 'how are you doing') {
			say(['I\'m fine.', 'I\'m okay.', 'I\'m great; thanks for asking!', 'I could be doing better.'][Math.floor(Math.random() * 4)]);
		} else if (y.startsWith('you')) {
			say(['Thank you', 'That\'s what I thought', 'We should be talking more about you'][Math.floor(Math.random() * 3)] + ['.', '!'][Math.floor(Math.random() * 2)]);
		} else if (y === 'what is the time' || y === 'what time is it' || y === 'give me the time' || y.split('day').join('date') === 'what is the date' || y.split('day').join('date') === 'what date is it' || y.split('day').join('date') === 'give me the date' || y.split('day').join('date') === 'what is the time and date' || y.split('day').join('date') === 'what is the date and time' || y.split('day').join('date') === 'what is the time and the date' || y.split('day').join('date') === 'what is the date and the time' || y.split('day').join('date') === 'what time and date is it' || y.split('day').join('date') === 'what date and time is it' || y.split('day').join('date') === 'give me the time and date' || y.split('day').join('date') === 'give me the date and time' || y.split('day').join('date') === 'give me the time and the date' || y.split('day').join('date') === 'give me the date and the time' || y.split('day').join('date') === 'when am i') {
			var now = new Date();
			var date, time, suffix;
			y = (y === 'when am i') ? 'tid' : y;
			if (y.indexOf('ti') !== -1) {
				time = [now.getHours(), now.getMinutes(), now.getSeconds()];
				suffix = (time[0] < 12) ? ' AM' : ' PM';
				time[0] = (time[0] <= 12) ? time[0] : time[0] - 12;
				time[1] = (time[1] >= 10) ? time[1] : '0' + time[1];
				time[2] = (time[2] >= 10) ? time[2] : '0' + time[2];
				time = time.join(':');
			}
			if (y.indexOf('d') !== -1) {
				var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
				var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
				var chron = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];
				var tempdate;
				date = [now.getDay(), now.getMonth(), now.getDate(), now.getFullYear()];
				date[0] = days[date[0]];
				date[1] = months[date[1]];
				tempdate = date[2];
				tempdate = (tempdate >= 10) ? tempdate.toString() : '0' + tempdate;
				console.log(tempdate);
				if (tempdate[0] === '1') {
					date[2] += 'th,';
					console.log(date[2]);
				} else {
					date[2] += chron[parseInt(tempdate[1]) - 1] + ',';
				}
				date = date.join(' ');
			}
			if (y.indexOf('ti') !== -1 && y.indexOf('d') !== -1) {
				say('It is currently <b>' + date + ' ' + time + suffix + '</b>.');
			} else if (y.indexOf('time') !== -1) {
				say('The time is <b>' + time + suffix + '</b>.');
			} else {
				say('The date is <b>' + date + '</b>.');
			}
		} else if (y === 'toggle goodnight' || y === 'flip goodnight' || y === 'switch goodnight' || y === 'goodnight.toggle();' || y === 'goodnight.toggle()') {
			say('Toggling Goodnight&mdash;brace yourself&hellip;');
			setTimeout(function () {
				Goodnight.toggle();
			}, 2000);
		/* Online Features */
		} else if (y.startsWith('go to ') || y.startsWith('open ')) {
			if (y.startsWith('go to')) {
				newtab = y.slice(6);
			} else {
				newtab = y.slice(5);
			}
			if (newtab.indexOf('.') === -1) {
				say('Opening ' + newtab + '.com&hellip;');
				setTimeout(function () {
					window.open('https://' + newtab + '.com', '_blank');
				}, 1000);
			} else {
				say('Opening ' + newtab + '&hellip;');
				setTimeout(function () {
					window.open('https://' + newtab, '_blank');
				}, 1000);
			}
		} else if (y.startsWith('search for ')){
			newtab = y.slice(11);
			say('Searching Google for "' + newtab + '"&hellip;');
			setTimeout(function () {
				window.open('https://www.google.ca/search?q=' + newtab.split(' ').join('+'), '_blank');
			}, 1000);
		} else if (y.startsWith('should i watch ') || y.startsWith('should i listen to ')) {
			if (y.startsWith('should i watch ')) {
				y = y.slice(15).split(' ').join('+');
				$.getJSON('https://www.omdbapi.com/?t=' + y + '&y=&plot=full&r=json&tomatoes=true', function (d) {
					var image;
					if (d.Poster !== undefined) {
						image = '<p>[<a class="toggle">Show/Hide Poster</a>]<img src="' + d.Poster + '"></p>';
					}
					if (d.Error === undefined) {
						var reviews = '', sum = 0, count = 0;
						if (d.Type === 'movie') {
							d.Type = 'Film';
						} else if (d.Type === 'series') {
							d.Type = 'TV Series';
						}
						if (d.imdbRating !== 'N/A') {
							reviews += 'IMDb: ' + d.imdbRating + '/10<br>';
							sum += parseFloat(d.imdbRating) * 10;
							count++;
						}
						if (d.tomatoRating !== 'N/A') {
							reviews += 'Rotten Tomatoes: ' + d.tomatoRating + '/10<br>';
							sum += parseFloat(d.tomatoRating) * 10;
							count++;
						}
						if (d.Metascore !== 'N/A') {
							reviews += 'Metacritic: ' + d.Metascore + '/100<br>';
							sum += parseInt(d.Metascore);
							count++;
						}
						reviews += '<br>Average: ' + Math.round(sum / count) + '%';
						say('Here is what I could find:');
						$('<div class="box"><h1 class="title">' + d.Title + '</h1><p class="actors">Starring ' + d.Actors + '</p><p class="rated">' + d.Rated + '</p><p class="info">' + d.Year + ' ' + d.Type + '</p><p class="plot">' + d.Plot + '</p>' + image + '<p class="reviews">' + reviews + '</p></div>').appendTo('#conversation-box').fadeIn('slow');
					} else {
						say('I apologize, but I couldn\'t find that film. I\'ll perform a Googe search instead.');
						setTimeout(function () {
							say('Searching Google for "' + y + '"&hellip;');
							setTimeout(function () {
								window.open('https://www.google.ca/search?q=' + y.split(' ').join('+'), '_blank');
							}, 2000);
						}, 2000);
					}
				});
			} else {
				$.getJSON('https://api.spotify.com/v1/search?q=' + y.slice(19).split(' ').join('+') + '&type=artist&limit=1', function (d) {
					var image;
					var genres = '';
					for (var i = 0;i < d.artists.items[0].genres.length;i++) {
						d.artists.items[0].genres[i] = d.artists.items[0].genres[i].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
					}
					if (d.artists.items[0].genres[0] !== undefined) {
						genres = 'Genres: ';
					}
					if (d.artists.items[0].images[0].url !== undefined) {
						image = '<p>[<a class="toggle">Show/Hide Image</a>]<img src="' + d.artists.items[0].images[0].url + '"></p>';
					}
					if (d.artists.total) {
						say('Here is what I could find:');
						$('<div class="box"><h1 class="title">' + d.artists.items[0].name + '</h1><p class="musictype">Music Artist</p><p class="rated">' + genres + d.artists.items[0].genres.join(', ') + '</p>' + image + '<p class="reviews">Popularity on Spotify: ' + d.artists.items[0].popularity + '<br>Followers on Spotify: ' + d.artists.items[0].followers.total + '</p></div>').appendTo('#conversation-box').fadeIn('slow');
					} else {
						say('I couldn\'t find that artist. I\'ll perform a Google search for them instead.');
						setTimeout(function () {
							say('Searching Google for "' + y.slice(19) + '"&hellip;');
							setTimeout(function () {
								window.open('https://www.google.ca/search?q=' + y.slice(19).split(' ').join('+'), '_blank');
							}, 2000);
						}, 2000);
					}
				});
			}
		/* Easter Eggs */
		} else if (y === 'ayy') {
			say('lmao');
		} else if (y === 'tell me a joke' || y.indexOf('chuck norris') !== -1 || y === 'be funny' || y === 'make me laugh') {
			$.getJSON('http://api.icndb.com/jokes/random', function (d) {
				say(d.value.joke);
			});
		/* Default Response */
		} else {
			say('I apologize, but I wasn\'t sure what you were asking of me. I\'ll perform a Google search instead.');
			setTimeout(function () {
				say('Searching Google for "' + y + '"&hellip;');
				setTimeout(function () {
					window.open('https://www.google.ca/search?q=' + y.split(' ').join('+'), '_blank');
				}, 2000);
			}, 2000);
		}
		$('html, body').animate({scrollTop: $(document).height()}, 'slow');
	}
	function say (r) {
		$('<div class="conversation fuchsia">' + r + '</div>').appendTo('#conversation-box').fadeIn('slow');
	}
});
