package kr.or.connect.todo.persistence;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import java.sql.Timestamp;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import kr.or.connect.todo.domain.Todo;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class TodoDaoTest {
	
	@Autowired
	private TodoDao dao;
	
	@Test
	public void shouldCount() {
		Todo todo = new Todo("Java 웹개발");
		dao.insert(todo);
		todo = new Todo("Java 웹개발2");
		dao.insert(todo);
		int count = dao.countNotCompleted();
		System.out.print("count: ");
		System.out.println(count);
	}
	
	@Test
	public void shouldInsertAndSelect() {
		//given
		Todo todo = new Todo("Java 웹개발", 0, Timestamp.valueOf("2017-06-05 07:21:48.621"));
		
		// when
		Integer id = dao.insert(todo);
		
		// then
		Todo selected = dao.selectById(id);
		System.out.println(selected);
		assertThat(selected.getTodo(), is("Java 웹개발"));

	}
	
	@Test
	public void shouldDelete() {
		//given
		Todo todo = new Todo("삭제테스트", 0, Timestamp.valueOf("2017-06-05 07:21:49.621"));
		Integer id = dao.insert(todo);
		
		// when
		int affected = dao.deleteById(id);
		System.out.printf("%d, %d\n", id, affected);
		
		// then
	    assertThat(affected,is(1));
	}
	
	
	@Test
	public void shouldUpdate() {
		// Given
		Todo todo = new Todo("업데이트 전 Todo", 0, Timestamp.valueOf("2017-06-05 07:21:50.621"));
		Integer id = dao.insert(todo);
		
		// When
		todo.setId(id);
		todo.setTodo("업데이트 후 Todo");
		int affected = dao.update(todo);

		// Then
		assertThat(affected, is(1));
		Todo updated = dao.selectById(id);
		assertThat(updated.getTodo(), is("업데이트 후 Todo"));
		System.out.println(updated);
		
	}
	
	@Test
	public void shouldSelectAll() {
		Todo todo = new Todo("Java 웹개발");
		dao.insert(todo);
		Todo todo2 = new Todo("Java 웹개발2");
		dao.insert(todo2);
		Todo todo3 = new Todo("Java 웹개발3");
		dao.insert(todo3);
		List<Todo> allTodos = dao.selectAll();
		assertThat(allTodos, is(notNullValue()));
		System.out.println(allTodos);
	}
	
	

}
