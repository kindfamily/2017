const HOST = 'http://localhost:8080';
(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!

	// View Todo lists by calling getAll().
	getAll();


	// Add Todo list by calling addTodo().
	$('input.new-todo').keypress(function(event) {
		if( event.which == 13 && $(this).val() != "") {
			addTodo();
		};
	});

	// Implement filters.
	$('.filters').children().click(function(event) {
		$('.filters .selected').removeClass();
		$(this).find('a').addClass('selected');
		getAll();
	});

	// Implement clear button by calling deleteCompleted().
	$('.clear-completed').click(function(event) {
		deleteCompleted();
	});

	// Implement editing



})(window);
// window ends.


function getAll() {
	var url = HOST + '/api/todos';

	// Change method when filter has been selected.
	if($('.filters .selected').text() == 'Active')
		url += '/active';
	else if($('.filters .selected').text() == 'Completed')
		url += '/completed';

	$.ajax({
			url: url,
			type: 'GET',
            dataType: "json",
            success: function(response) {
				console.log(response)
				$('.todo-list').empty();
				// View all contents.
				$.each(response, function(index, item) {

					var $input_toggle = $('<input>').addClass('toggle').attr('type', 'checkbox')
						.attr('checked', function() {
								if (item.completed == 1) return 'checked';
								else return;
							});
					var $div = $('<div>')
						.append($input_toggle)
						.append('<label>' + item.todo + '</label>')
						.append('<button class="destroy"></button>')
						.addClass("view")
						.attr('value', item.id);
					var $li = $('<li>').append($div).append('<input class="edit" value="' + item.todo + '">')
						.addClass(function() {
							if (item.completed == 1) return "completed";
							else return;
						});

					$('.todo-list').append($li);
				});
				// View ends.

				// Add click handler to checkbox
				$('.view .toggle').click(function(event) {

					var data = '{"id" : "' + $(this).parent().attr('value');

					if( $(this).attr('checked') == 'checked' ) {
						$(this).attr("checked", null);
						$(this).parent().parent().removeClass();
						data += '", "completed" : "0"';
					}
					else {
						$(this).attr('checked', 'checked');
						$(this).parent().parent().addClass('completed');
						data += '", "completed" : "1"';
					}

					var url = HOST + '/api/todos';
					data += ', "todo" : "' + $(this).parent().find('label').text() + '" }';
					$.ajax({
						url: url,
						type: 'PUT',
						contentType: 'application/json',
						dataType: 'json',
						data: data
					})
					.done(function() {
						updateCounter();
						console.log("success");
					})
					.fail(function() {
						console.log("error");
					});
				});
				// checkbox ends.

				// Add handler to label for editing.
				$('.view label').dblclick(function(event) {
					$(this).parent().parent().addClass('editing');
					$(this).parent().parent().find('.edit').keypress(function(event) {
						if( event.which == 13 ) {
							var url = HOST + '/api/todos';
							var data = '{ "id" : "' + $(this).parent().find('.view').attr('value')
								+ '", "completed" : "' + ( $(this).parent().find('.toggle').attr('checked') == 'checked' ? 1 : 0 )
								+ '", "todo" : "' + $(this).val() + '" }';
							$.ajax({
								url: url,
								type: 'PUT',
								contentType: 'application/json',
								dataType: 'json',
								data: data
							})
							.done(function() {
								getAll();
								$('.edit').unbind('dblclick');
								$('.editing').removeClass('editing');
								$(document).unbind('mouseup');
								console.log("success");
							})
							.fail(function() {
								console.log("error");
							});
						}
					}); // keypress ends.

					$(document).unbind('mouseup');
					$(document).mouseup(function(event) {
						if( !$(event.target).hasClass('edit') ) {
							console.log(event);
							$('.edit').unbind('dblclick');
							$('.editing').removeClass('editing');
							$(this).unbind('mouseup');
						}
					});

				}); // label editing ends.

				// Add click handler to destroy button.
				$('.view .destroy').click(function(event) {
					var url = HOST + '/api/todos';
					var data = '{"id" : "' + $(this).parent().attr('value') + '" }';
					$.ajax({
						url: url,
						type: 'DELETE',
						contentType: 'application/json',
						dataType: 'json',
						data: data
					})
					.done(function() {
						getAll();
						console.log("success");
					})
					.fail(function() {
						console.log("error");
					});
				});
				// destroy button ends.

				// Update counter
				updateCounter();
			}
		});
}
// function getAll() ends.


function addTodo() {
	var $value = $('input.new-todo').val();
	$('input.new-todo').val('');
	console.log($value);

	var url = HOST + '/api/todos';
	var data = '{"todo" : "' + $value + '" }';
	$.ajax({
		url: url,
		type: 'POST',
		contentType: 'application/json',
		dataType: 'json',
		data: data
	})
	.done(function(e) {
		console.log("success");
		getAll();
	})
	.fail(function(e) {
		console.log("error");
	});
}
// function addTodo() ends.

function updateCounter() {
	var url = HOST + '/api/todos/count';
	$.ajax({
		url: url,
		type: 'GET',
		contentType: 'application/json',
		dataType: 'json',
		success: function(response) {
			$('.todo-count strong').text(response);
		}
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	});
}
// function updateCounter() ends.

function deleteCompleted() {
	var url = HOST + '/api/todos/completed';
	$.ajax({
		url: url,
		type: 'DELETE',
		contentType: 'application/json',
		dataType: 'json',
	})
	.done(function() {
		getAll();
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	});
}
// function deleteCompleted() ends.
