package com.preving.springboot.backend.apirest.controllers;

import com.preving.springboot.backend.apirest.models.entity.Usuario;
import com.preving.springboot.backend.apirest.models.services.IUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/apiExtra")
@CrossOrigin(origins = {"http://localhost:4200"})
public class UsuarioRestController {
    @Autowired
    private IUsuarioService usuarioService;

    @GetMapping("/usuarios")
    public List<Usuario> findUsuarios() {

        return usuarioService.findAll();
    }

    @GetMapping("usuarios/{id}")
    public Usuario showUsuario(@PathVariable Long id) {
        return usuarioService.findById(id);
    }

    @PostMapping("usuarios")
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario createUsuario(@RequestBody Usuario usuario) {
        return usuarioService.save(usuario);
    }

    @PutMapping("usuarios/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario updateUsuario(@RequestBody Usuario usuario, @PathVariable Long id) {
        Usuario usuarioActual = usuarioService.findById(id);
        usuarioActual.setNombre(usuario.getNombre());
        usuarioActual.setApellido(usuario.getApellido());
        usuarioActual.setEmail(usuario.getEmail());
        return usuarioService.save(usuarioActual);
    }

    @DeleteMapping("usuarios/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        usuarioService.delete(id);
    }
}
