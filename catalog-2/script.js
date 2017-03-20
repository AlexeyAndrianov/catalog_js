$(document).ready(function() {
	var data = catalog;
	var keys_to_hide = ["items", "name", "price"];

	add_item = function(item) {
		var html_string = "";

		if(item instanceof Array) {
			html_string = html_string + add_array(item);
		}	else if(item instanceof Object) {
			html_string = html_string + add_object(item);
		} else {
			html_string = html_string + "<span class=\"value\">" + item + "</span>";
		}

		return html_string;
	}

	add_object = function(obj) {
		var html_string = "<div class=\"item\">"

		$.each(obj, function(key, value) {
			if($.inArray(key, keys_to_hide) != -1) {
				html_string = html_string + "<div>" + add_item(value) + "</div>";
			} else {
				html_string = html_string + "<div>" + key + ": " + add_item(value) + "</div>";
			}
		});

		html_string = html_string + "</div>";

		return html_string;
	}

	add_array = function(arr) {
		var html_string = "<div class=\"array\">"

		$.each(arr, function(index, item) {
			html_string = html_string + "<div class=\"item\">" + add_item(item) + "</div>";
		});

		html_string = html_string + "</div>";

		return html_string;
	}

	$("#catalog").append(add_item(data["items"]));
});
