package com.preving.springboot.backend.apirest.models.services;

import com.preving.springboot.backend.apirest.models.entity.Usuario;

import java.util.List;

public interface IUsuarioService
{
    public List<Usuario> findAll();

    public Usuario save(Usuario usuario);

    public void delete(Long id);

    public Usuario findById(Long id);

}
