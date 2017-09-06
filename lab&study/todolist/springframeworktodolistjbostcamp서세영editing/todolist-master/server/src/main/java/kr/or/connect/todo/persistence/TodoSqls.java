package kr.or.connect.todo.persistence;

public class TodoSqls {
	static final String COUNT_NOT_COMPLETED = 
			"SELECT COUNT(*) FROM todo where completed = 0";
	static final String DELETE_BY_ID = 
			"DELETE FROM todo WHERE id = :id";
	static final String DELETE_COMPLETED = 
			"DELETE FROM todo WHERE completed = 1";
	static final String UPDATE = 
			"UPDATE todo SET\ntodo = :todo, completed = :completed, date = :date WHERE id = :id";
	static final String SELECT_BY_ID =
			"SELECT id, todo, completed, date FROM todo WHERE id = :id";
	static final String SELECT_ALL = 
			"SELECT id, todo, completed, date FROM todo ORDER BY date DESC";
	static final String SELECT_ACTIVE = 
			"SELECT id, todo, completed, date FROM todo WHERE completed = 0 ORDER BY date DESC";
	static final String SELECT_COMPLETED = 
			"SELECT id, todo, completed, date FROM todo WHERE completed = 1 ORDER BY date DESC";
	
	static final String UPDATE_WITHOUT_DATE = 
			"UPDATE todo SET\ntodo = :todo, completed = :completed WHERE id = :id";
	
}
