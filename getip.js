var jsonip = "http://jsonip.com"
$.getJSON(jsonip)
.done(function(data) {
	var ip = data.ip;
	$("#hero").append(ip);
})