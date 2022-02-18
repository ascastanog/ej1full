package com.preving.springboot.backend.apirest.models.dao;

import com.preving.springboot.backend.apirest.models.entity.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface IUsuarioDao extends CrudRepository<Usuario, Long>
{

}
