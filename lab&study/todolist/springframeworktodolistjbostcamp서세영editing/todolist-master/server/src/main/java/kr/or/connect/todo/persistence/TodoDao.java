package kr.or.connect.todo.persistence;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import kr.or.connect.todo.domain.Todo;

@Repository
public class TodoDao {
	private NamedParameterJdbcTemplate jdbc;
	private RowMapper<Todo> rowMapper = BeanPropertyRowMapper.newInstance(Todo.class);
	private SimpleJdbcInsert insertAction;
	
	public TodoDao(DataSource dataSource) {
		this.jdbc = new NamedParameterJdbcTemplate(dataSource);
		this.insertAction = new SimpleJdbcInsert(dataSource)
				.withTableName("todo")
				.usingGeneratedKeyColumns("id", "completed", "date");
	}
	
	
//	methods
	public Integer countNotCompleted() {
		Map<String, Object> params = Collections.emptyMap();
		return jdbc.queryForObject(TodoSqls.COUNT_NOT_COMPLETED, params, Integer.class);
	}
	
	public Integer insert(Todo todo){
		SqlParameterSource params = new BeanPropertySqlParameterSource(todo);
		return insertAction.executeAndReturnKey(params).intValue();
	}
	
	public int deleteById(Integer id) {
		Map<String, ?> params = Collections.singletonMap("id", id);
		return jdbc.update(TodoSqls.DELETE_BY_ID, params);
	}
	
	public int deleteCompleted() {
		Map<String, Object> params = Collections.emptyMap();
		return jdbc.update(TodoSqls.DELETE_COMPLETED, params);
	}
	
	public int update(Todo todo) {
		final String sqls = (todo.getDate() == null)? TodoSqls.UPDATE_WITHOUT_DATE : TodoSqls.UPDATE;
		SqlParameterSource params = new BeanPropertySqlParameterSource(todo);
		return jdbc.update(sqls, params);
	}
	
	
	
	public Todo selectById(Integer id) {
		Map<String, Object> params = new HashMap<>();
		params.put("id", id);
		return jdbc.queryForObject(TodoSqls.SELECT_BY_ID, params, rowMapper);
	}
	
	public List<Todo> selectAll() {
		Map<String, Object> params = Collections.emptyMap();
		return jdbc.query(TodoSqls.SELECT_ALL, params, rowMapper);
	}

	public List<Todo> selectActive() {
		Map<String, Object> params = Collections.emptyMap();
		return jdbc.query(TodoSqls.SELECT_ACTIVE, params, rowMapper);
	}
	
	public List<Todo> selectCompleted() {
		Map<String, Object> params = Collections.emptyMap();
		return jdbc.query(TodoSqls.SELECT_COMPLETED, params, rowMapper);
	}
	
}
