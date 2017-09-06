package kr.or.connect.todo.domain;

import java.sql.Timestamp;

public class Todo {
	private Integer id;
	private String todo;
	private Integer completed;
	private Timestamp date;
	
//	Constructor
	public Todo() {
	}

	public Todo(Integer id, String todo, Integer completed, Timestamp date) {
		this.id = id;
		this.todo = todo;
		this.completed = completed;
		this.date = date;
	}

	public Todo(String todo, Integer completed, Timestamp date) {
		this.todo = todo;
		this.completed = completed;
		this.date = date;
	}
	
	public Todo(String todo, Timestamp date) {
		this.todo = todo;
		this.date = date;
	}
	
	public Todo(String todo) {
		this.todo = todo;
	}
	
	public Todo(Integer id) {
		this.id = id;
	}


//	Getter and Setter

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTodo() {
		return todo;
	}

	public void setTodo(String todo) {
		this.todo = todo;
	}

	public Integer getCompleted() {
		return completed;
	}

	public void setCompleted(Integer completed) {
		this.completed = completed;
	}

	public Timestamp getDate() {
		return date;
	}

	public void setDate(Timestamp date) {
		this.date = date;
	}
	
	
//	ToString()
	@Override
	public String toString() {
		return "{id=" + id + ", todo=" + todo + ", completed=" + completed + ", date=" + date + "}";
	}

	
	

}
