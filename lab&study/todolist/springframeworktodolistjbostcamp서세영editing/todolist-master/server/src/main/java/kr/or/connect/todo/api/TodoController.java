package kr.or.connect.todo.api;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import kr.or.connect.todo.domain.Todo;
import kr.or.connect.todo.service.TodoService;


@RestController
@RequestMapping("/api/todos")
public class TodoController {
	private final TodoService service;
	private final Logger log = LoggerFactory.getLogger(TodoController.class);

	@Autowired
	public TodoController (TodoService service) {
		this.service = service;
	}
	
	@GetMapping("/count")
	int countNotCompleted() {
		return service.countNotCompleted();
	}
	
	@GetMapping
	Collection<Todo> readAll() {
		return service.findAll();
	}
	
	@GetMapping("/{id}")
	Todo read(@PathVariable Integer id) {
		return service.findById(id);
	}
	
	@GetMapping("/active")
	Collection<Todo> readActive() {
		return service.findActive();
	}
	
	@GetMapping("/completed")
	Collection<Todo> readCompleted() {
		return service.findCompleted();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	Todo create(@RequestBody Todo todo) {
		Todo newTodo = service.create(todo);
		log.info("todo created:{}", newTodo);
		return newTodo;
	}
	
	@PutMapping
	@ResponseStatus(HttpStatus.NO_CONTENT)
	void update(@RequestBody Todo todo) {
		service.update(todo);
	}
	
	@DeleteMapping
	@ResponseStatus(HttpStatus.NO_CONTENT)
	void delete(@RequestBody Todo todo) {
		service.deleteById(todo.getId());
	}
	
	@DeleteMapping("/completed")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	void deleteCompleted() {
		service.deleteCompleted();
	}
	
}
