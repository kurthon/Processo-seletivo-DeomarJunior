package com.hepta.funcionarios.rest;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import com.hepta.funcionarios.entity.Funcionario;
import com.hepta.funcionarios.persistence.FuncionarioDAO;

@Path("/funcionarios")
public class FuncionarioService {
	
	@Context
	private HttpServletRequest request;

	@Context
	private HttpServletResponse response;

	private FuncionarioDAO dao;

	public FuncionarioService() {
		dao = new FuncionarioDAO();
	}

	protected void setRequest(HttpServletRequest request) {
		this.request = request;
	}
		
	/**
	 * Adiciona novo Funcionario	 
	 */
	@Path("/adicionarFuncionario/")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@POST
	public Response FuncionarioCreate(Funcionario Funcionario) throws Exception {
		dao.save(Funcionario);
		return Response.status(Status.OK).build();
	}

	/**
	 * Lista todos os Funcionarios	
	 */
	@Path("/listarFuncionarios")
	@Produces(MediaType.APPLICATION_JSON)
	@GET
	public Response FuncionarioRead() {
		List<Funcionario> Funcionarios = new ArrayList<>();		
		try {
			Funcionarios = dao.getAll();
		} catch (Exception e) {
			return Response.status(Status.INTERNAL_SERVER_ERROR).entity("Erro ao buscar Funcionarios").build();
		}

		GenericEntity<List<Funcionario>> entity = new GenericEntity<List<Funcionario>>(Funcionarios) {
		};
		return Response.status(Status.OK).entity(entity).build();
	}

	/**
	 * Atualiza um Funcionario	
	 */
	@Path("/atualizarFuncionario/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@PUT
	public Response FuncionarioUpdate(@PathParam("id") Integer id, Funcionario Funcionario) throws Exception {
		Funcionario.setId(id);
		dao.update(Funcionario);
		return Response.status(Status.OK).build();
	}

	/**
	 * Remove um Funcionario	
	 */
	@Path("/deletarFuncionarios/{id}")
	@Produces(MediaType.APPLICATION_JSON)	
	@DELETE
	public Response FuncionarioDelete(@PathParam("id") Integer id) throws Exception{	
		dao.delete(id);
	    return Response.status(Status.OK).entity("Funcionario Deletado!!!").build();          
	}

}
