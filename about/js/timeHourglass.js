//修改时光沙漏时间
var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;
var together = new Date();
together.setFullYear(2011, 08, 20);
together.setHours(17);
together.setMinutes(0);
together.setSeconds(0);
together.setMilliseconds(0);

	setTimeout(function () {
		adjustWordsPosition();
		startHeartAnimation();
	}, 3000);

	timeElapse(together);
	setInterval(function () {
		timeElapse(together);
	}, 500);

	adjustCodePosition();
	$("#code").typewriter();
