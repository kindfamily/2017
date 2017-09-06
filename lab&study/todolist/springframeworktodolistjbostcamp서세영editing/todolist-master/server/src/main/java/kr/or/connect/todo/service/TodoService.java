package kr.or.connect.todo.service;

import java.util.Collection;

import org.springframework.stereotype.Service;

import kr.or.connect.todo.domain.Todo;
import kr.or.connect.todo.persistence.TodoDao;


@Service
public class TodoService {
	private TodoDao dao;

	public TodoService(TodoDao dao) {
		this.dao = dao;
	}
	
	
//	methods
	
	public Integer countNotCompleted() {
		return dao.countNotCompleted();
	}
	
	public Todo findById(Integer id) {
		return dao.selectById(id);
	}
	
	public Todo create(Todo todo) {
		Integer id = dao.insert(todo);
		return dao.selectById(id);
	}
	
	public boolean deleteById(Integer id) {
		int affected = dao.deleteById(id);
		return affected == 1;
	}
	
	public boolean deleteCompleted() {
		int affected = dao.deleteCompleted();
		return affected == 1;
	}
	
	public boolean update(Todo todo) {
		int affected = dao.update(todo);
		return affected == 1;
	}
	
	public Collection<Todo> findAll() {
		return dao.selectAll();
	}
	
	public Collection<Todo> findActive() {
		return dao.selectActive();
	}
	
	public Collection<Todo> findCompleted() {
		return dao.selectCompleted();
	}
	
	

}
