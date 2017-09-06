package kr.or.connect.todo.api;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.*;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TodoControllerTest {
	
	@Autowired
	WebApplicationContext wac;
	MockMvc mvc;
	
	@Before
	public void setUp() {
		this.mvc = webAppContextSetup(this.wac).alwaysDo(print(System.out)).build();
	}
	
	@Test
	public void shouldReadAll() throws Exception {
		mvc.perform(
				get("/api/todos")
				.contentType(MediaType.APPLICATION_JSON)
			)
			.andExpect(status().isOk());
	}
	
	@Test
	public void shouldCreate() throws Exception {
		String requestBody = "{\"todo\":\"빨래널기\"}";

		mvc.perform(
			post("/api/todos/")
				.contentType(MediaType.APPLICATION_JSON)
				.content(requestBody)
			)
			.andExpect(status().isCreated())
			.andExpect(jsonPath("$.id").exists())
			.andExpect(jsonPath("$.todo").value("빨래널기"))
			.andExpect(jsonPath("$.date").exists())
			.andExpect(jsonPath("$.completed").value(0));
	}
	
	@Test
	public void shouldUpdate() throws Exception {
		String requestBody = "{\"id\":\"1\", \"todo\":\"빨래개서 넣기\"}";
		
		mvc.perform(
				put("/api/todos")
				.contentType(MediaType.APPLICATION_JSON)
				.content(requestBody)
			)
			.andExpect(status().isNoContent());
	}
	
	@Test
	public void shouldDelete() throws Exception {
		String requestBody = "{\"id\":\"1\"}";
		mvc.perform(
			delete("/api/todos")
				.contentType(MediaType.APPLICATION_JSON)
				.content(requestBody)
		)
		.andExpect(status().isNoContent());
	}
	

}
